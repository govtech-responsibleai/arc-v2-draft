// Re-assessment and revisions: what the register changed since sign-off, what people changed since sign-off,
// and the sign-off itself.
import type { Assessment, Basis, SignedCopy } from './assessment';
import { elementName, type Level, type Register } from './register';
import { applicableRisks, blockers, controlsInScope, PRESETS, STATUS_LABELS, SYSTEM_FIELDS } from './rules';

/** The applicable risks and in-scope controls (with levels) under this register, recorded at sign-off. */
export function snapshot(reg: Register, a: Assessment): Basis {
  const risks = applicableRisks(reg, a);
  const controls: Record<string, Level> = {};
  for (const c of controlsInScope(reg, a, risks)) controls[c.id] = c.level;
  return { version: reg.version.version, risks, controls };
}

export interface RegisterDiff {
  from: string;
  to: string;
  newRisks: string[];
  goneRisks: string[];
  newControls: string[];
  goneControls: string[];
  levelChanges: { id: string; from: Level; to: Level }[];
  /** True when nothing that applies to this system changed (the version may still differ). */
  empty: boolean;
}

/** Compare the snapshot the assessment was signed against with today's register. Null if never signed. */
export function registerDiff(reg: Register, a: Assessment): RegisterDiff | null {
  if (!a.basis) return null;
  const now = snapshot(reg, a);
  const oldRisks = new Set(a.basis.risks);
  const nowRisks = new Set(now.risks);
  const d: RegisterDiff = {
    from: a.basis.version,
    to: now.version,
    newRisks: now.risks.filter((r) => !oldRisks.has(r)),
    goneRisks: a.basis.risks.filter((r) => !nowRisks.has(r)),
    newControls: Object.keys(now.controls).filter((c) => !(c in a.basis!.controls)),
    goneControls: Object.keys(a.basis.controls).filter((c) => !(c in now.controls)),
    levelChanges: Object.keys(now.controls)
      .filter((c) => c in a.basis!.controls && a.basis!.controls[c] !== now.controls[c])
      .map((c) => ({ id: c, from: a.basis!.controls[c] as Level, to: now.controls[c] })),
    empty: false,
  };
  d.empty = !d.newRisks.length && !d.goneRisks.length && !d.newControls.length && !d.goneControls.length && !d.levelChanges.length;
  return d;
}

export interface Change {
  section: 'system' | 'capabilities' | 'risks' | 'controls' | 'residual';
  id: string;
  text: string;
}

const union = (...xs: Record<string, unknown>[]) => Array.from(new Set(xs.flatMap((x) => Object.keys(x)))).sort();
const same = (x: unknown, y: unknown) => JSON.stringify(x ?? {}) === JSON.stringify(y ?? {});

/** What people changed since the last signed revision, as readable lines for the reviewer. */
export function changesSinceSignoff(reg: Register, a: Assessment): Change[] {
  const s = a.signedCopy;
  if (!s) return [];
  const out: Change[] = [];
  for (const f of SYSTEM_FIELDS) {
    if ((s.system[f.key] ?? '') !== (a.system[f.key] ?? '')) out.push({ section: 'system', id: f.key, text: `System: ${f.label.toLowerCase()} edited` });
  }
  for (const c of Object.keys(reg.capabilities)) {
    const was = s.caps[c]?.present ?? 'undecided';
    const now = a.caps[c]?.present ?? 'undecided';
    if (was !== now) out.push({ section: 'capabilities', id: c, text: `${c} ${elementName(reg, c)}: ${was} → ${now}` });
    for (const [field, label] of [['authority', 'authority'], ['irreversible', 'irreversible'], ['external', 'external']] as const) {
      const o = s.caps[c]?.[field], n = a.caps[c]?.[field];
      if (o !== n && now !== 'no') out.push({ section: 'capabilities', id: c, text: `${c} ${label}: ${o ?? 'unstated'} → ${n ?? 'unstated'}` });
    }
  }
  for (const c of union(s.components ?? {}, a.components ?? {})) {
    const was = s.components?.[c]?.present ?? 'undecided';
    const now = a.components?.[c]?.present ?? 'undecided';
    if (was !== now) out.push({ section: 'capabilities', id: c, text: `${c} ${elementName(reg, c)}: ${was} → ${now}` });
  }
  if (s.threshold !== a.threshold) {
    out.push({ section: 'risks', id: 'threshold', text: `Threshold: ${PRESETS[s.threshold].label} → ${PRESETS[a.threshold].label}` });
  }
  for (const r of union(s.risks, a.risks)) {
    const o = s.risks[r] ?? {}, n = a.risks[r] ?? {};
    if (o.impact !== n.impact || o.likelihood !== n.likelihood) {
      out.push({ section: 'risks', id: r, text: `${r} score: I${o.impact ?? '–'} L${o.likelihood ?? '–'} → I${n.impact ?? '–'} L${n.likelihood ?? '–'}` });
    } else if (!same(o, n)) {
      out.push({ section: 'risks', id: r, text: `${r} context edited` });
    }
  }
  for (const c of union(s.controls, a.controls)) {
    const o = s.controls[c] ?? {}, n = a.controls[c] ?? {};
    if ((o.status ?? '') !== (n.status ?? '')) {
      out.push({ section: 'controls', id: c, text: `${c} status: ${o.status ? STATUS_LABELS[o.status] : 'none'} → ${n.status ? STATUS_LABELS[n.status] : 'none'}` });
    } else if (!same(o, n)) {
      out.push({ section: 'controls', id: c, text: `${c} implementation details edited` });
    }
  }
  for (const r of union(s.residual, a.residual)) {
    if (!same(s.residual[r], a.residual[r])) out.push({ section: 'residual', id: r, text: `${r} residual entry edited` });
  }
  return out;
}

export class SignoffError extends Error {}

/**
 * Sign the current revision: records the time, the register snapshot it was assessed against, a copy of the
 * record for "changes since sign-off", and a history entry. Refuses while anything blocks sign-off.
 */
export function signOff(reg: Register, a: Assessment, now: Date = new Date()): Assessment {
  const open = blockers(reg, a);
  if (open.length) throw new SignoffError(`Cannot sign off: ${open.map((b) => b.text).join('; ')}.`);
  if (a.signoff.signedAt) throw new SignoffError(`Revision ${a.revision} is already signed. Start a new revision to change it.`);
  const t = now.toISOString();
  const signed: Assessment = structuredClone(a);
  signed.signoff = { ...signed.signoff, signedAt: t };
  signed.basis = snapshot(reg, signed);
  signed.register = { ...(signed.register ?? {}), version: reg.version.version };
  signed.history = [...signed.history, { revision: signed.revision, signedAt: t, register: reg.version.version, ...(signed.signoff.decision ? { decision: signed.signoff.decision } : {}) }];
  const copy: SignedCopy = {
    revision: signed.revision, system: signed.system, threshold: signed.threshold, caps: signed.caps, components: signed.components,
    risks: signed.risks, controls: signed.controls, residual: signed.residual, signoff: signed.signoff,
  };
  signed.signedCopy = structuredClone(copy);
  signed.updatedAt = t;
  return signed;
}

/** Open the next revision of a signed assessment. Names stay; the decision, conditions and signature are cleared. */
export function startRevision(a: Assessment, now: Date = new Date()): Assessment {
  if (!a.signoff.signedAt) throw new SignoffError(`Revision ${a.revision} is not signed yet.`);
  const next: Assessment = structuredClone(a);
  next.revision += 1;
  next.signoff = {
    ...(a.signoff.assessor ? { assessor: a.signoff.assessor } : {}),
    ...(a.signoff.reviewer ? { reviewer: a.signoff.reviewer } : {}),
    ...(a.signoff.authority ? { authority: a.signoff.authority } : {}),
  };
  next.updatedAt = now.toISOString();
  return next;
}

export const isSigned = (a: Assessment): boolean => !!a.signoff.signedAt;
