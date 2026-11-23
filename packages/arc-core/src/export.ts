// Markdown in the structure of docs/implementation/assessment-template.md, with the code-check result per control.
import { blankAssessment, type Assessment } from './assessment';
import type { Register } from './register';
import { conditionalElements, elementName } from './register';
import {
  applicableRisks, assessApplicability, AUTHORITY_LABELS, controlsInScope, PRESETS, residualItems, riskState, STATUS_LABELS, SYSTEM_FIELDS,
  unconfirmedAI, VERDICT_LABELS, plural,
} from './rules';

const cell = (v: unknown): string => (v == null || v === '' ? '—' : String(v).replace(/\|/g, '\\|').replace(/\s*\n+\s*/g, ' '));
const PRIORITY = { priority: 'Yes', below: 'No', unscored: 'Unscored' } as const;

export function exportMarkdown(reg: Register, a: Assessment): string {
  const L: string[] = [];
  const risks = applicableRisks(reg, a);
  const scope = controlsInScope(reg, a, risks);
  const preset = PRESETS[a.threshold];

  L.push(`# ARC assessment: ${a.system.name?.trim() || 'Untitled system'}`, '');
  L.push(`Register ${reg.version.version}${a.register?.source ? ` (${a.register.source})` : ''} · revision ${a.revision} · threshold ${preset.label} (${preset.rule})`, '');
  if (a.code) {
    const files = a.code.filesRead != null && a.code.filesTotal != null ? ` (${a.code.filesRead} of ${a.code.filesTotal} files)` : '';
    L.push(`Code read from ${a.code.url}${a.code.branch ? ` at ${a.code.branch}` : ''}${files}${a.code.checked ? '; controls checked against it' : ''}.`, '');
  }

  L.push('## 0. System overview', '', '| Field | Entry |', '| --- | --- |');
  for (const f of SYSTEM_FIELDS) L.push(`| ${f.label} | ${cell(a.system[f.key])} |`);

  const app = assessApplicability(reg, a);
  const yn = (v: boolean | undefined, yes: string, no: string) => (v === undefined ? '' : v ? yes : no);
  L.push('', '## 1. Capability inventory', '', '| Capability | Present? | Provided by | Authority | Effects | Human approval before acting? | Evidence |', '| --- | --- | --- | --- | --- | --- | --- |');
  for (const [c, cap] of Object.entries(reg.capabilities)) {
    const e = a.caps[c] ?? {};
    const ctx = app.profile[c];
    const evidence = [...(e.evidence ?? []), ...(a.code?.caps[c] ?? [])];
    const effects = ctx ? [yn(ctx.irreversible, 'irreversible', 'reversible'), yn(ctx.external, 'external', 'internal')].filter(Boolean).join(', ') : '';
    L.push(`| ${c} ${cap.name} | ${cell(e.present)} | ${cell(e.providedBy)} | ${cell(ctx?.authority ? AUTHORITY_LABELS[ctx.authority] : '')} | ${cell(effects)} | ${cell(e.approval)} | ${cell(Array.from(new Set(evidence)).join(', '))} |`);
  }
  const conditional = conditionalElements(reg);
  if (conditional.length) {
    L.push('', '| Component | Present? | Reason |', '| --- | --- | --- |');
    for (const c of conditional) L.push(`| ${c} ${elementName(reg, c)} | ${cell(a.components?.[c]?.present)} | ${cell(a.components?.[c]?.reason)} |`);
  }
  if (app.checks.length) {
    L.push('', '| Combination rule | Verdict | Roles |', '| --- | --- | --- |');
    for (const ch of app.checks) L.push(`| ${ch.name} | ${ch.verdict} | ${cell(ch.roles.map((r) => `${r.name}: ${r.status}`).join('; '))} |`);
  }
  if (app.below.length) L.push('', `Left out at this authority: ${app.below.map((b) => `${b.id} (needs ${b.capability} at ${AUTHORITY_LABELS[b.needs].toLowerCase()})`).join(', ')}.`);

  L.push('', '## 2. Applicable risks', '', '| Risk | Statement | Element(s) | Contextualised description | Impact | Likelihood | Priority? |', '| --- | --- | --- | --- | --- | --- | --- |');
  for (const r of risks) {
    const e = a.risks[r] ?? {};
    L.push(`| ${r} | ${cell(reg.risks[r].statement)} | ${reg.risks[r].combination ? cell(reg.combinations.rules[reg.risks[r].combination!]?.name) : reg.risks[r].element_ids.join(' + ')} | ${cell(e.context)} | ${cell(e.impact)} | ${cell(e.likelihood)} | ${PRIORITY[riskState(a, r)]} |`);
  }

  L.push('', '## 3. Controls', '', '| Control | Level | Covers | Status | Implementation or reason | Evidence | Owner | Code check | CSA Addendum | IMDA MGF |', '| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |');
  for (const c of scope) {
    const e = a.controls[c.id] ?? {};
    if (c.group === 'optional' && !e.status) continue;
    const ctl = reg.controls[c.id];
    const x = ctl.crosswalks ?? {};
    const check = a.code?.checks?.[c.id];
    const impl = e.status === 'not-adopted' || e.status === 'waived' ? e.reason : e.how;
    L.push(`| ${c.id} ${cell(ctl.statement)} | ${c.level}${c.level !== c.baseLevel ? ` (${c.baseLevel} in the register)` : ''} | ${c.covers.join(', ')} | ${cell(e.status ? STATUS_LABELS[e.status] : '')} | ${cell(impl)} | ${cell(e.evidence)} | ${cell(e.owner)} | ${cell(check ? `${VERDICT_LABELS[check.verdict]}: ${check.note}` : '')} | ${(x.csa_addendum ?? []).join(', ') || '—'} | ${(x.imda_mgf ?? []).join(', ') || '—'} |`);
  }

  L.push('', '## 4. Residual risks', '', '| Risk | Why listed | Residual failure scenario | Strategy | Actions and thresholds | Residual Impact / Likelihood | Accepted by |', '| --- | --- | --- | --- | --- | --- | --- |');
  for (const i of residualItems(reg, a, scope)) {
    const e = a.residual[i.rid] ?? {};
    L.push(`| ${i.rid} | ${cell(i.why.join('; '))} | ${cell(e.scenario)} | ${cell(e.strategy)} | ${cell(e.actions)} | ${cell(e.impact)} / ${cell(e.likelihood)} | ${cell(e.acceptedBy)} |`);
  }

  const s = a.signoff;
  L.push('', '## 5. Sign-off and review', '', '| Field | Entry |', '| --- | --- |');
  for (const [k, v] of [
    ['Assessor (development team)', s.assessor], ['Reviewer (governance team)', s.reviewer], ['Residual-risk acceptance authority', s.authority],
    ['Deployment decision', s.decision], ['Conditions', s.conditions], ['Next review date or trigger', s.nextReview], ['Signed', s.signedAt],
  ] as const) L.push(`| ${k} | ${cell(v)} |`);

  const ai = unconfirmedAI(a);
  if (ai.length) L.push('', `> ${ai.length} AI-drafted ${plural(ai.length, 'entry', 'entries')} not yet confirmed by a person.`);
  return L.join('\n') + '\n';
}

/** A blank record in the template's structure, listing this register's capabilities and baseline risks. */
export function templateMarkdown(reg: Register): string {
  return exportMarkdown(reg, blankAssessment(new Date(0)));
}
