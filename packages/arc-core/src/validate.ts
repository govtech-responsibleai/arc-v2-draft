// Checking an assessment file against a register (validate), and deciding whether it is signed and current (verify).
import type { Assessment } from './assessment';
import { changesSinceSignoff, registerDiff } from './diff';
import { checkRegister, isChosen, type Register } from './register';
import { allowedStatuses, applicableRisks, blockers, controlsInScope, STATUS_LABELS } from './rules';

export interface Issue {
  severity: 'error' | 'warning';
  where: string;
  message: string;
}

/** Problems in an assessment that the schema alone cannot see: IDs the register does not have, and rule breaches. */
export function validateAgainstRegister(reg: Register, a: Assessment): Issue[] {
  const out: Issue[] = [];
  const err = (where: string, message: string) => out.push({ severity: 'error', where, message });
  const warn = (where: string, message: string) => out.push({ severity: 'warning', where, message });

  for (const i of checkRegister(reg)) out.push({ severity: i.severity, where: `register ${i.id}`, message: i.message });

  for (const c of Object.keys(a.caps)) {
    if (!(c in reg.capabilities)) { err(`caps.${c}`, 'not a capability in this register'); continue; }
    const au = a.caps[c].authority;
    const allowed = reg.capabilities[c].authority;
    if (au && !allowed?.includes(au)) err(`caps.${c}.authority`, allowed?.length ? `${c} can be used at: ${allowed.join(', ')}` : `${c} has no authority levels in this register`);
  }
  for (const c of Object.keys(a.components ?? {})) if (!isChosen(reg, c)) err(`components.${c}`, 'not a component or design element that only some systems have');
  for (const r of Object.keys(a.risks)) if (!(r in reg.risks)) err(`risks.${r}`, 'not a risk in this register');
  for (const r of Object.keys(a.residual)) if (!(r in reg.risks)) err(`residual.${r}`, 'not a risk in this register');
  const levels = Object.fromEntries(controlsInScope(reg, a).map((c) => [c.id, c.level]));
  for (const c of Object.keys(a.controls)) {
    const ctl = reg.controls[c];
    if (!ctl) { err(`controls.${c}`, 'not a control in this register'); continue; }
    const st = a.controls[c].status;
    const level = levels[c] ?? ctl.level;
    if (st && !allowedStatuses(level).includes(st)) {
      err(`controls.${c}.status`, `${STATUS_LABELS[st]} is not allowed for a Level ${level} control here; Level 0 controls are Implemented as-is, or Waived when what they concern is not present`);
    }
    if (st === 'waived' && !(a.controls[c].reason?.trim() && a.controls[c].evidence?.trim())) warn(`controls.${c}`, 'waived without saying what is absent and the evidence');
    if (st === 'not-adopted' && !a.controls[c].reason?.trim()) warn(`controls.${c}.reason`, 'not adopted without a reason');
  }
  for (const c of Object.keys(a.code?.checks ?? {})) if (!(c in reg.controls)) err(`code.checks.${c}`, 'not a control in this register');
  for (const k of Object.keys(a.prov)) {
    const [kind, id] = [k.slice(0, k.indexOf('.')), k.slice(k.indexOf('.') + 1)];
    const known = kind === 'system' ? true : kind === 'cap' ? id in reg.capabilities : kind === 'component' ? isChosen(reg, id) : kind === 'control' ? id in reg.controls
      : kind === 'risk' || kind === 'residual' ? id in reg.risks : false;
    if (!known) warn(`prov.${k}`, 'refers to nothing in this assessment or register');
  }

  const applicable = new Set(applicableRisks(reg, a));
  const stale = Object.keys(a.risks).filter((r) => r in reg.risks && !applicable.has(r));
  if (stale.length) warn('risks', `entries for risks that no longer apply to this system: ${stale.join(', ')}`);
  const inScope = new Set(controlsInScope(reg, a).map((c) => c.id));
  const staleC = Object.keys(a.controls).filter((c) => c in reg.controls && !inScope.has(c));
  if (staleC.length) warn('controls', `entries for controls no longer in scope: ${staleC.join(', ')}`);

  if (a.signoff.signedAt && !a.basis) err('basis', 'signed, but no register snapshot recorded');
  if (a.basis && a.basis.version !== reg.version.version) warn('basis.version', `assessed against register ${a.basis.version}; this register is ${reg.version.version}`);
  return out;
}

export interface Verification {
  ok: boolean;
  reasons: string[];
}

/**
 * Whether the assessment is fit to rely on, for CI: signed, assessed against this register version with nothing
 * changed since that applies to the system, unchanged since sign-off, and nothing blocking.
 */
export function verifyAssessment(reg: Register, a: Assessment): Verification {
  const reasons: string[] = [];
  for (const i of validateAgainstRegister(reg, a)) if (i.severity === 'error') reasons.push(`${i.where}: ${i.message}`);
  if (!a.signoff.signedAt) reasons.push(`Revision ${a.revision} is not signed off.`);
  if (a.basis && a.basis.version !== reg.version.version) reasons.push(`Signed against register ${a.basis.version}; the current register is ${reg.version.version}. Re-assess and sign a new revision.`);
  const d = registerDiff(reg, a);
  if (d && !d.empty) {
    const parts = [
      d.newRisks.length && `${d.newRisks.length} new risks (${d.newRisks.join(', ')})`,
      d.goneRisks.length && `${d.goneRisks.length} risks no longer apply`,
      d.newControls.length && `${d.newControls.length} new controls`,
      d.levelChanges.length && `${d.levelChanges.length} controls changed level`,
    ].filter(Boolean);
    reasons.push(`What applies to this system has changed since sign-off: ${parts.join(', ')}.`);
  }
  if (a.signoff.signedAt) {
    const changed = changesSinceSignoff(reg, a);
    if (changed.length) reasons.push(`Edited since it was signed: ${changed.map((c) => c.text).join('; ')}.`);
  }
  for (const b of blockers(reg, a)) reasons.push(b.text);
  return { ok: reasons.length === 0, reasons };
}
