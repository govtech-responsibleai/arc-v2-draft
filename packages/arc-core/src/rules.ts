// ARC's assessment rules: which risks apply, which controls are in scope and at what level, what counts as done,
// and what blocks sign-off. The applicability functions mirror the skill's arc.py (`build_profile`,
// `below_authority`, `effective_level`, `combination_checks`, `applicable_risks`, `implied_capabilities`); a test
// runs both on many systems and checks that they agree.
// Sources: docs/arc_framework/controls.md#control-levels, docs/implementation/for-ai-developers.md,
// docs/implementation/for-governance-teams.md (relevance presets and scales), docs/implementation/assessment-template.md.
import type { Assessment, ControlEntry, ResidualEntry, Status, Threshold, Verdict } from './assessment';
import { authorityRank, isChosen, type Authority, type Control, type Level, type Register, type Risk } from './register';

export const LEVEL_LABELS: Record<Level, string> = { 0: 'Level 0 · Cardinal', 1: 'Level 1 · Standard', 2: 'Level 2 · Best Practice' };
export const AUTHORITY_LABELS: Record<Authority, string> = { read: 'Read', propose: 'Propose', 'act-with-approval': 'Act with approval', 'act-alone': 'Act alone' };

export interface Preset {
  label: string;
  rule: string;
  note: string;
  test: (impact: number, likelihood: number) => boolean;
}

// The illustrative stances in the governance guide, Step 4 "Setting Relevance Thresholds"
export const PRESETS: Record<Threshold, Preset> = {
  conservative: {
    label: 'Conservative', rule: 'Impact ≥ 3 and Likelihood ≥ 3, or Impact ≥ 4', note: 'Healthcare, finance, legal, government',
    test: (i, l) => (i >= 3 && l >= 3) || i >= 4,
  },
  moderate: {
    label: 'Moderate', rule: 'Impact ≥ 3 and Likelihood ≥ 3', note: 'E-commerce, SaaS, professional services',
    test: (i, l) => i >= 3 && l >= 3,
  },
  aggressive: {
    label: 'Aggressive', rule: 'Impact ≥ 4 and Likelihood ≥ 3, or Impact ≥ 5', note: 'Internal tools, early-stage startups',
    test: (i, l) => (i >= 4 && l >= 3) || i >= 5,
  },
};

/** Five-point scales from the governance guide: [label, meaning]. */
export const IMPACT: Record<1 | 2 | 3 | 4 | 5, [string, string]> = {
  5: ['Catastrophic', 'Loss > $1M; major irreversible harm to people; severe regulatory violations; criminal liability'],
  4: ['Severe', 'Loss $100K–$1M; some reversible harm to people; major reputational damage; significant compliance issues'],
  3: ['Moderate', 'Loss $10K–$100K; minor reversible harm; customer dissatisfaction; moderate business impact'],
  2: ['Minor', 'Loss < $10K; no harm to people; internal inefficiency; limited user frustration'],
  1: ['Negligible', 'Minimal to no consequences; no harm to people'],
};
export const LIKELIHOOD: Record<1 | 2 | 3 | 4 | 5, [string, string]> = {
  5: ['Very high', 'Almost certain; happens regularly in similar systems; needs only basic access or common conditions'],
  4: ['High', 'Likely; observed in comparable systems; needs commonly available capabilities or tools'],
  3: ['Moderate', 'May occur under certain circumstances; needs specific but achievable conditions'],
  2: ['Low', 'Unlikely but possible; needs specific conditions, insider knowledge or elevated attacker capability'],
  1: ['Very low', 'Rare; needs a highly unlikely combination of factors or extraordinary resources'],
};

export const STATUS_LABELS: Record<Status, string> = { 'as-is': 'Implemented as-is', adapted: 'Adapted', 'not-adopted': 'Not adopted', waived: 'Waived: not present' };

export const VERDICT_LABELS: Record<Verdict, string> = {
  found: 'Found in code',
  partial: 'Partly in code',
  missing: 'Not found in code',
  offcode: 'Needs evidence outside the code',
  nofeature: 'Nothing in the code it applies to',
};

export type SystemFieldKey = 'name' | 'owner' | 'purpose' | 'deployment' | 'architecture' | 'autonomy' | 'dataClassification' | 'pii' | 'publicFacing' | 'criticality';
export interface SystemField { key: SystemFieldKey; label: string; kind: 'text' | 'long' | 'select'; required: boolean; options?: string[] }

/** Section 0 of the assessment template. */
export const SYSTEM_FIELDS: SystemField[] = [
  { key: 'name', label: 'System name', kind: 'text', required: true },
  { key: 'owner', label: 'Owner (team or agency)', kind: 'text', required: true },
  { key: 'purpose', label: 'Purpose and users', kind: 'long', required: true },
  { key: 'deployment', label: 'Deployment context', kind: 'long', required: false },
  { key: 'architecture', label: 'Agents and architecture', kind: 'long', required: true },
  { key: 'autonomy', label: 'What it does without a person approving', kind: 'long', required: true },
  { key: 'dataClassification', label: 'Data classification', kind: 'select', required: true, options: ['Public', 'Internal', 'Confidential', 'Restricted'] },
  { key: 'pii', label: 'Personal data', kind: 'long', required: false },
  { key: 'publicFacing', label: 'Public-facing', kind: 'select', required: true, options: ['No', 'Yes'] },
  { key: 'criticality', label: 'Criticality', kind: 'select', required: true, options: ['Low', 'Medium', 'High', 'Critical'] },
];

export const plural = (n: number, one: string, many?: string): string => (n === 1 ? one : (many ?? `${one}s`));

const live = <T extends { superseded_by?: string }>(entries: Record<string, T>): string[] =>
  Object.keys(entries).filter((id) => !entries[id].superseded_by);

// ---------------------------------------------------------------- what the system has

export const capabilitiesOf = (reg: Register, risk: Risk): string[] => risk.element_ids.filter((e) => e in reg.capabilities);

/** Capabilities marked present or unsure. Unsure counts as present until decided ("err on the side of inclusion"). */
export function presentCapabilities(a: Assessment): string[] {
  return Object.keys(a.caps).filter((c) => a.caps[c]?.present === 'yes' || a.caps[c]?.present === 'unsure');
}

/** Conditional components and design elements marked present or unsure. */
export function presentComponents(reg: Register, a: Assessment): string[] {
  return Object.keys(a.components ?? {}).filter((c) => isChosen(reg, c) && (a.components[c]?.present === 'yes' || a.components[c]?.present === 'unsure'));
}

/** How one capability is used: the authority it acts with, and whether its effects are irreversible or external. */
export interface CapabilityContext { authority?: Authority; irreversible?: boolean; external?: boolean }
export type Profile = Record<string, CapabilityContext>;

/**
 * The context each capability is used in (arc.py `build_profile`). A capability that lists authority levels is
 * taken to be used at the highest one unless stated. Its effects are taken to be irreversible and external wherever
 * the register leaves the question open, unless cleared. The cautious default keeps every risk and every stricter
 * control level in scope until the stated context removes it.
 */
export function profileFor(reg: Register, caps: string[], authority: Record<string, Authority> = {}, reversible: string[] = [], internal: string[] = []): Profile {
  const profile: Profile = {};
  for (const cap of caps) {
    const e = reg.capabilities[cap];
    const context: CapabilityContext = {};
    if (e?.authority?.length) {
      const given = authority[cap];
      context.authority = given && e.authority.includes(given) ? given : e.authority[e.authority.length - 1];
    }
    for (const [field, cleared] of [['irreversible', reversible], ['external', internal]] as const) {
      const v = e?.[field];
      if (v === 'ask') context[field] = !cleared.includes(cap);
      else if (v === 'always' || v === 'never') context[field] = v === 'always';
    }
    if (context.authority === 'read' && 'irreversible' in context) context.irreversible = false; // reading changes nothing
    profile[cap] = context;
  }
  return profile;
}

/** The profile of an assessment, from the context recorded for each present capability. */
export function buildProfile(reg: Register, a: Assessment): Profile {
  const caps = presentCapabilities(a);
  const authority: Record<string, Authority> = {};
  for (const c of caps) { const x = a.caps[c]?.authority; if (x) authority[c] = x; }
  return profileFor(reg, caps, authority, caps.filter((c) => a.caps[c]?.irreversible === false), caps.filter((c) => a.caps[c]?.external === false));
}

/** [capability, authority needed] when the system uses a capability below the authority a risk needs. */
export function belowAuthority(risk: Risk, profile: Profile): [string, Authority] | null {
  for (const [cap, minimum] of Object.entries(risk.min_authority ?? {})) {
    const used = profile[cap]?.authority;
    if (used && authorityRank(used) < authorityRank(minimum)) return [cap, minimum];
  }
  return null;
}

/** A control's level in this system: its own, or a stricter one if a `level_when` context holds. */
export function effectiveLevel(control: Control, profile: Profile): Level {
  let level = control.level;
  for (const condition of control.level_when ?? []) {
    for (const [cap, context] of Object.entries(profile)) {
      if (condition.capabilities && !condition.capabilities.includes(cap)) continue;
      if (condition.authority && (!context.authority || authorityRank(context.authority) < authorityRank(condition.authority))) continue;
      if ((['irreversible', 'external'] as const).some((f) => f in condition && context[f] !== condition[f])) continue;
      level = Math.min(level, condition.level) as Level;
    }
  }
  return level;
}

export interface RoleSupplier { id: string; mark: 'yes' | 'maybe'; note: string }
export interface RoleCheck { id: string; name: string; question: string; status: 'yes' | 'maybe' | 'none'; suppliers: RoleSupplier[] }
export interface CombinationCheck {
  id: string; name: string; description: string; mechanism?: string;
  verdict: 'present' | 'possible' | 'not present'; roles: RoleCheck[]; control?: string; risks: string[];
}

/** Each combination rule's verdict for these capabilities (arc.py `combination_checks`). */
export function combinationChecks(reg: Register, capabilities: string[], profile: Profile): CombinationCheck[] {
  const { roles, rules } = reg.combinations;
  const supplies = (cap: string, min?: Authority) => {
    const used = profile[cap]?.authority;
    return !(used && min) || authorityRank(used) >= authorityRank(min);
  };
  return Object.entries(rules).map(([id, rule]) => {
    const checks: RoleCheck[] = rule.roles.filter((r) => r in roles).map((rid) => {
      const role = roles[rid];
      const suppliers = capabilities
        .filter((c) => role.capabilities[c] && supplies(c, role.capabilities[c].min_authority))
        .map((c) => ({ id: c, mark: role.capabilities[c].mark, note: role.capabilities[c].note ?? '' }));
      const status = suppliers.some((s) => s.mark === 'yes') ? 'yes' : suppliers.length ? 'maybe' : 'none';
      return { id: rid, name: role.name, question: role.question ?? '', status, suppliers };
    });
    const statuses = checks.map((c) => c.status);
    const verdict = statuses.includes('none') || !checks.length ? 'not present' : statuses.every((s) => s === 'yes') ? 'present' : 'possible';
    return { id, name: rule.name, description: rule.description ?? '', mechanism: rule.mechanism, verdict, roles: checks, control: rule.control, risks: rule.risks };
  });
}

/** What the assessor does with a combination verdict (arc.py `combination_advice`). */
export function combinationAdvice(check: CombinationCheck): string {
  const id = check.control ?? 'its control';
  const missing = check.roles.filter((r) => r.status === 'none').map((r) => r.name.toLowerCase());
  const unsure = check.roles.filter((r) => r.status === 'maybe').map((r) => r.name.toLowerCase());
  if (check.verdict === 'present') return `Every role is present. Implement ${id}. If a review of the system finds that a role is absent in practice, record which one and the evidence, and record ${id} as waived.`;
  if (check.verdict === 'possible') return `Whether this system has ${unsure.join(' and ')} depends on how it is deployed. Answer each note marked maybe from the code and configuration. If every role is confirmed, implement ${id}. If one is absent, record ${id} as waived, with the evidence.`;
  return `No capability of this system supplies ${missing.join(' or ')}.`;
}

export interface Implied { from: string; capability: string; mark: 'yes' | 'maybe'; note: string }

/** Capabilities the system has not declared but that its declared ones give it (arc.py `implied_capabilities`). */
export function impliedCapabilities(reg: Register, capabilities: string[]): Implied[] {
  const out: Implied[] = [];
  for (const cap of capabilities) {
    for (const [other, entry] of Object.entries(reg.combinations.implies[cap] ?? {})) {
      if (capabilities.includes(other)) continue;
      out.push({ from: cap, capability: other, mark: entry.mark, note: entry.note ?? '' });
    }
  }
  return out;
}

export interface Applicability {
  profile: Profile;
  baseline: string[];
  single: string[];
  combination: string[];
  /** Risks left out because a capability is used below the authority they need. */
  below: { id: string; capability: string; needs: Authority }[];
  checks: CombinationCheck[];
}

/** What applies to a system with these capabilities, conditional components and context (arc.py `applicable_risks`). */
export function applicability(reg: Register, caps: string[], components: string[], profile: Profile): Applicability {
  const present = [...caps, ...components];
  const selected = new Set(present);
  const verdicts = Object.fromEntries(combinationChecks(reg, present, profile).map((c) => [c.id, c.verdict]));
  const out: Applicability = { profile, baseline: [], single: [], combination: [], below: [], checks: combinationChecks(reg, caps, profile) };
  for (const rid of live(reg.risks)) {
    const r = reg.risks[rid];
    const low = belowAuthority(r, profile);
    if (low) { out.below.push({ id: rid, capability: low[0], needs: low[1] }); continue; }
    if (r.combination) {
      if ((verdicts[r.combination] ?? 'not present') !== 'not present') out.combination.push(rid);
      continue;
    }
    const needed = r.element_ids.filter((e) => isChosen(reg, e));
    if (!needed.length) out.baseline.push(rid);
    else if (needed.every((e) => selected.has(e))) (r.element_ids.length > 1 ? out.combination : out.single).push(rid);
  }
  return out;
}

export const assessApplicability = (reg: Register, a: Assessment): Applicability =>
  applicability(reg, presentCapabilities(a), presentComponents(reg, a), buildProfile(reg, a));

/** Risks that apply, in three groups' order: baseline, single elements, combinations. */
export function applicableRiskIds(reg: Register, capabilities: Iterable<string>, components: string[] = [], profile?: Profile): string[] {
  const caps = Array.from(capabilities);
  const r = applicability(reg, caps, components, profile ?? profileFor(reg, caps));
  return [...r.baseline, ...r.single, ...r.combination];
}

export function applicableRisks(reg: Register, a: Assessment): string[] {
  const r = assessApplicability(reg, a);
  return [...r.baseline, ...r.single, ...r.combination];
}

/** A baseline risk arises only from elements every agentic system has. */
export const isBaseline = (reg: Register, risk: Risk): boolean => !risk.combination && !risk.element_ids.some((e) => isChosen(reg, e));

/** Applicable risks grouped as the developer guide and the skill's arc.py do. */
export function groupRisks(reg: Register, ids: string[]): { baseline: string[]; capability: string[]; combination: string[] } {
  const out = { baseline: [] as string[], capability: [] as string[], combination: [] as string[] };
  for (const r of ids) {
    const risk = reg.risks[r];
    if (isBaseline(reg, risk)) out.baseline.push(r);
    else if (risk.combination || risk.element_ids.length > 1) out.combination.push(r);
    else out.capability.push(r);
  }
  return out;
}

// ---------------------------------------------------------------- scoring

export type RiskState = 'priority' | 'below' | 'unscored';

export function scoreOf(a: Assessment, rid: string): { impact: number | null; likelihood: number | null } {
  const r = a.risks[rid];
  return { impact: r?.impact ?? null, likelihood: r?.likelihood ?? null };
}

/** Unscored risks count as priority until someone scores them. */
export function riskState(a: Assessment, rid: string): RiskState {
  const { impact, likelihood } = scoreOf(a, rid);
  if (!impact || !likelihood) return 'unscored';
  return PRESETS[a.threshold].test(impact, likelihood) ? 'priority' : 'below';
}

export const isPriority = (a: Assessment, rid: string): boolean => riskState(a, rid) !== 'below';

// ---------------------------------------------------------------- controls

export type ControlGroup = 'required' | 'priority' | 'optional';

export interface ScopedControl {
  id: string;
  /** The control's level in this system, after any `level_when` context. */
  level: Level;
  /** Its level in the register. */
  baseLevel: Level;
  /** Applicable risks this control is listed for. */
  covers: string[];
  /** The subset of `covers` that are priority (or unscored) risks. */
  priorityCovers: string[];
  /** required: Level 0 here, attaches on applicability whatever the score. priority: Level 1–2 covering a priority risk. */
  group: ControlGroup;
}

/** Distinct controls in scope, one entry per control however many applicable risks list it, in ID order. */
export function controlsInScope(reg: Register, a: Assessment, riskIds: string[] = applicableRisks(reg, a)): ScopedControl[] {
  const profile = buildProfile(reg, a);
  const map = new Map<string, ScopedControl>();
  for (const rid of riskIds) {
    for (const cid of reg.risks[rid]?.controls ?? []) {
      const c = reg.controls[cid];
      if (!c || c.superseded_by) continue;
      let e = map.get(cid);
      if (!e) { e = { id: cid, level: effectiveLevel(c, profile), baseLevel: c.level, covers: [], priorityCovers: [], group: 'optional' }; map.set(cid, e); }
      e.covers.push(rid);
      if (isPriority(a, rid)) e.priorityCovers.push(rid);
    }
  }
  const list = Array.from(map.values());
  for (const e of list) e.group = e.level === 0 ? 'required' : e.priorityCovers.length ? 'priority' : 'optional';
  return list.sort((x, y) => x.id.localeCompare(y.id));
}

/**
 * Level 0 controls are implemented as stated, and waived only when the specific thing they concern is not present
 * in the system, with the evidence (docs/arc_framework/controls.md#control-levels). Levels 1 and 2 are adopted,
 * adapted, or not adopted with a reason.
 */
export function allowedStatuses(level: Level): Status[] {
  return level === 0 ? ['as-is', 'waived'] : ['as-is', 'adapted', 'not-adopted'];
}

/** Complete: an allowed status and a description; a reason if not adopted; what is absent and the evidence if waived. */
export function controlDone(entry: ControlEntry | undefined, level: Level): boolean {
  if (!entry?.status || !allowedStatuses(level).includes(entry.status)) return false;
  if (entry.status === 'not-adopted') return !!entry.reason?.trim();
  if (entry.status === 'waived') return !!entry.reason?.trim() && !!entry.evidence?.trim();
  return !!entry.how?.trim();
}

// ---------------------------------------------------------------- residual risk

export interface ResidualItem { rid: string; why: string[] }

/** Every priority risk, and every applicable risk covered by a Level 1–2 control that was not adopted. */
export function residualItems(reg: Register, a: Assessment, scope: ScopedControl[] = controlsInScope(reg, a)): ResidualItem[] {
  const items = new Map<string, ResidualItem>();
  const add = (rid: string, why: string) => {
    let i = items.get(rid);
    if (!i) { i = { rid, why: [] }; items.set(rid, i); }
    i.why.push(why);
  };
  for (const rid of applicableRisks(reg, a)) {
    if (riskState(a, rid) === 'priority') {
      const s = scoreOf(a, rid);
      add(rid, `Priority (Impact ${s.impact}, Likelihood ${s.likelihood})`);
    }
  }
  for (const c of scope) if (a.controls[c.id]?.status === 'not-adopted') for (const rid of c.covers) add(rid, `${c.id} not adopted`);
  return Array.from(items.values());
}

export function residualDone(entry: ResidualEntry | undefined): boolean {
  return !!(entry?.strategy && entry.scenario?.trim() && entry.acceptedBy?.trim());
}

// ---------------------------------------------------------------- AI suggestions and the code check

/** Keys (system.<field>, cap.<id>, component.<id>, risk.<id>, control.<id>, residual.<id>) of AI suggestions nobody has decided on. */
export function pendingSuggestions(a: Assessment): string[] {
  const ai = a.ai;
  const keys = [
    ...Object.keys(ai.system ?? {}).map((k) => `system.${k}`),
    ...Object.keys(ai.caps ?? {}).map((k) => `cap.${k}`),
    ...Object.keys(ai.components ?? {}).map((k) => `component.${k}`),
    ...Object.keys(ai.risks ?? {}).map((k) => `risk.${k}`),
    ...Object.keys(ai.controls ?? {}).map((k) => `control.${k}`),
    ...Object.keys(ai.residual ?? {}).map((k) => `residual.${k}`),
  ];
  return keys.filter((k) => a.prov[k] === undefined);
}

/** AI output no person has confirmed: text written straight into the record, and suggestions still waiting. */
export const unconfirmedAI = (a: Assessment): string[] =>
  Array.from(new Set([...Object.keys(a.prov).filter((k) => a.prov[k] === 'ai'), ...pendingSuggestions(a)]));

/**
 * The code contradicts a control entry when the entry claims the control is implemented but the code check found
 * nothing, or found code that conflicts with what the entry says. A reviewer can accept the explanation.
 */
export function isContradicted(a: Assessment, cid: string): boolean {
  const e = a.controls[cid];
  const check = a.code?.checks?.[cid];
  if (!e || !check || (e.status !== 'as-is' && e.status !== 'adapted')) return false;
  if (e.contradictionAccepted) return false;
  return check.verdict === 'missing' || check.contradicts === true;
}

// ---------------------------------------------------------------- sign-off

export type Section = 'system' | 'capabilities' | 'risks' | 'controls' | 'residual' | 'signoff';
export interface Blocker {
  section: Section;
  /** An element on the section's page to jump to, when the blocker is about one part of it. */
  anchor?: string;
  text: string;
  /** The IDs or field keys involved. */
  items: string[];
}

/** Everything that must be done before the assessment can be signed off. Empty means ready to sign. */
export function blockers(reg: Register, a: Assessment): Blocker[] {
  const out: Blocker[] = [];
  const push = (section: Section, items: string[], text: string, anchor?: string) => { if (items.length) out.push({ section, text, items, ...(anchor ? { anchor } : {}) }); };

  const missing = SYSTEM_FIELDS.filter((f) => f.required && !a.system[f.key]?.trim()).map((f) => f.key);
  push('system', missing, `${missing.length} required system ${plural(missing.length, 'field')} empty`);

  const caps = Object.keys(reg.capabilities);
  const undecided = caps.filter((c) => !a.caps[c]?.present);
  push('capabilities', undecided, `${undecided.length} ${plural(undecided.length, 'capability', 'capabilities')} not yet decided`);
  const unsure = caps.filter((c) => a.caps[c]?.present === 'unsure');
  push('capabilities', unsure, `${unsure.length} ${plural(unsure.length, 'capability', 'capabilities')} marked unsure`);
  const conditional = [...Object.keys(reg.components), ...Object.keys(reg.design)].filter((id) => isChosen(reg, id));
  const openComponents = conditional.filter((c) => !a.components?.[c]?.present || a.components[c].present === 'unsure');
  push('capabilities', openComponents, `${openComponents.length} ${plural(openComponents.length, 'component')} not yet decided: ${openComponents.join(', ')}`, 'components');
  const implied = impliedCapabilities(reg, presentCapabilities(a))
    .filter((i) => i.capability !== 'any' && a.caps[i.capability]?.present === 'no' && !a.caps[i.capability]?.reason?.trim())
    .map((i) => i.capability);
  const impliedIds = Array.from(new Set(implied));
  push('capabilities', impliedIds, `${impliedIds.length} implied ${plural(impliedIds.length, 'capability', 'capabilities')} marked absent without a reason: ${impliedIds.join(', ')}`);

  const risks = applicableRisks(reg, a);
  const unscored = risks.filter((r) => riskState(a, r) === 'unscored');
  push('risks', unscored, `${unscored.length} ${plural(unscored.length, 'risk')} not scored`);

  const scope = controlsInScope(reg, a, risks);
  const required = scope.filter((c) => c.group === 'required');
  const wrongL0 = required.filter((c) => a.controls[c.id]?.status && !allowedStatuses(0).includes(a.controls[c.id]!.status!)).map((c) => c.id);
  push('controls', wrongL0, `${wrongL0.length} Level 0 ${plural(wrongL0.length, 'control')} marked adapted or not adopted (Level 0 is implemented as-is, or waived when what it concerns is absent)`);
  const l0 = required.filter((c) => !wrongL0.includes(c.id) && !controlDone(a.controls[c.id], 0)).map((c) => c.id);
  push('controls', l0, `${l0.length} Level 0 ${plural(l0.length, 'control')} not described, or waived without the evidence`);
  const contra = required.filter((c) => isContradicted(a, c.id)).map((c) => c.id);
  push('controls', contra, `${contra.length} Level 0 ${plural(contra.length, 'control')} contradicted by the code: fix, or have the reviewer accept the explanation`);
  const pr = scope.filter((c) => c.group === 'priority' && !controlDone(a.controls[c.id], c.level)).map((c) => c.id);
  push('controls', pr, `${pr.length} Level 1–2 ${plural(pr.length, 'control')} for priority risks without a complete entry`);

  const res = residualItems(reg, a, scope).filter((i) => !residualDone(a.residual[i.rid])).map((i) => i.rid);
  push('residual', res, `${res.length} residual ${plural(res.length, 'risk')} without a scenario, strategy and owner`);

  const ai = unconfirmedAI(a);
  push('signoff', ai, `${ai.length} AI ${plural(ai.length, 'suggestion')} nobody has accepted, edited or dismissed`, 'ai-drafts');

  const names = (['assessor', 'reviewer', 'authority', 'decision'] as const).filter((k) => !String(a.signoff[k] ?? '').trim());
  push('signoff', names, 'Sign-off names and decision incomplete', 'signoff-fields');
  return out;
}

export interface Progress { done: number; total: number }

export function progress(reg: Register, a: Assessment): Record<Exclude<Section, 'signoff'>, Progress> {
  const required = SYSTEM_FIELDS.filter((f) => f.required);
  const risks = applicableRisks(reg, a);
  const scope = controlsInScope(reg, a, risks);
  const inScope = scope.filter((c) => c.group !== 'optional');
  const res = residualItems(reg, a, scope);
  const caps = Object.keys(reg.capabilities);
  const conditional = [...Object.keys(reg.components), ...Object.keys(reg.design)].filter((id) => isChosen(reg, id));
  const decided = (p?: string) => !!p && p !== 'unsure';
  return {
    system: { done: required.filter((f) => a.system[f.key]?.trim()).length, total: required.length },
    capabilities: {
      done: caps.filter((c) => decided(a.caps[c]?.present)).length + conditional.filter((c) => decided(a.components?.[c]?.present)).length,
      total: caps.length + conditional.length,
    },
    risks: { done: risks.filter((r) => riskState(a, r) !== 'unscored').length, total: risks.length },
    controls: { done: inScope.filter((c) => controlDone(a.controls[c.id], c.level)).length, total: inScope.length },
    residual: { done: res.filter((i) => residualDone(a.residual[i.rid])).length, total: res.length },
  };
}
