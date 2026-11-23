// The ARC risk register: types, loading from YAML text, and light consistency checks.
// Browser-safe: no filesystem access here (see node.ts for loading from a directory).
import { load as loadYaml } from 'js-yaml';

export type ElementKind = 'capability' | 'component' | 'design';
export type Level = 0 | 1 | 2;

/** How far a capability acts on its own, least to most. */
export const AUTHORITY = ['read', 'propose', 'act-with-approval', 'act-alone'] as const;
export type Authority = (typeof AUTHORITY)[number];
export const authorityRank = (a: Authority): number => AUTHORITY.indexOf(a);
/** Whether a capability's effects are irreversible, or reach outside the organisation: always, never, or it depends. */
export type ContextAnswer = 'always' | 'never' | 'ask';

export interface Capability {
  name: string;
  category: string;
  description: string;
  /** The authority levels the capability can be used at, least to most. Absent: authority does not apply. */
  authority?: Authority[];
  irreversible?: ContextAnswer;
  external?: ContextAnswer;
}

/** A component (CMP-xx) or design element (DSN-xx). */
export interface Element {
  name: string;
  description?: string;
  /** When the element is present. Absent: every agentic system has it. */
  present_when?: string;
}

/** A stricter level that applies when a capability is used in a certain context. */
export interface LevelWhen {
  level: Level;
  capabilities?: string[];
  authority?: Authority;
  irreversible?: boolean;
  external?: boolean;
}

export interface RoleMark { mark: 'yes' | 'maybe'; note?: string; min_authority?: Authority }
export interface Role { name: string; description?: string; question?: string; capabilities: Record<string, RoleMark> }
export interface CombinationRule { name: string; mechanism?: string; description?: string; roles: string[]; control?: string; risks: string[]; sources?: string[] }
export interface Combinations {
  roles: Record<string, Role>;
  rules: Record<string, CombinationRule>;
  /** Capabilities that give a system others: implies[CAP-10][CAP-11] = { mark, note }. "any" means every capability of a delegate. */
  implies: Record<string, Record<string, { mark: 'yes' | 'maybe'; note?: string }>>;
}

export interface Risk {
  statement: string;
  description: string;
  /** The elements the risk arises from. Several IDs mean the risk arises from their combination. */
  element_ids: string[];
  failure_mode?: string;
  type?: string[];
  hazards?: string[];
  controls: string[];
  sources?: string[];
  crosswalks?: Record<string, string[]>;
  superseded_by?: string;
  /** The combination rule the risk arises from, instead of element_ids. */
  combination?: string;
  /** The least authority at which a capability brings this risk: below it, the risk does not apply. */
  min_authority?: Record<string, Authority>;
}

export interface Control {
  level: Level;
  risks: string[];
  statement: string;
  recommendations: string;
  references: string[];
  crosswalks?: Record<string, string[]>;
  superseded_by?: string;
  level_when?: LevelWhen[];
  /** Where the control is enforced: prompt, model, harness, infrastructure, organisation. */
  enforcement?: string[];
  owner?: string;
  phase?: string[];
  /** What to keep to show the control is in place. */
  evidence?: string;
  /** How to check that it works. */
  test?: string;
}

export interface Hazard {
  name: string;
  type: string;
  description: string;
}

export interface RegisterVersion {
  version: string;
  released?: string;
}

export interface CrosswalkSource {
  title: string;
  url?: string;
  version?: string;
  applies_to?: string[];
  ids: Record<string, string>;
}

export interface Register {
  version: RegisterVersion;
  capabilities: Record<string, Capability>;
  components: Record<string, Element>;
  design: Record<string, Element>;
  risks: Record<string, Risk>;
  controls: Record<string, Control>;
  hazards: Record<string, Hazard>;
  crosswalks: Record<string, CrosswalkSource>;
  combinations: Combinations;
}

/** The register files, named as in arc-risk-register/ (without .yaml). */
export const REGISTER_FILES = ['register', 'capabilities', 'components', 'design', 'risks', 'controls', 'hazards', 'crosswalk_references', 'combinations'] as const;
export type RegisterFile = (typeof REGISTER_FILES)[number];
/** Files an organisation's register must provide; the others are optional. */
export const REQUIRED_FILES: readonly RegisterFile[] = ['capabilities', 'components', 'design', 'risks', 'controls'];

export class RegisterError extends Error {}

type Raw = Record<string, any>;

const asRecord = (v: unknown): Raw => (v && typeof v === 'object' && !Array.isArray(v) ? (v as Raw) : {});
const asStrings = (v: unknown): string[] => (Array.isArray(v) ? v.filter((x) => x != null).map(String) : []);

// Crosswalk IDs must be strings; an unquoted 2.10 in YAML reads as the number 2.1, so stringify what we get
function normaliseCrosswalks(v: unknown): Record<string, string[]> | undefined {
  const r = asRecord(v);
  const keys = Object.keys(r);
  if (!keys.length) return undefined;
  return Object.fromEntries(keys.map((k) => [k, asStrings(r[k])]));
}

function normaliseRisk(id: string, raw: Raw): Risk {
  // Older and organisation registers use a single `element_id`
  const ids = raw.element_ids != null ? asStrings(raw.element_ids) : raw.element_id != null ? [String(raw.element_id)] : [];
  const risk: Risk = {
    statement: String(raw.statement ?? ''),
    description: String(raw.description ?? '').trim(),
    element_ids: ids,
    controls: asStrings(raw.controls),
  };
  if (raw.failure_mode != null) risk.failure_mode = String(raw.failure_mode);
  if (raw.type != null) risk.type = asStrings(raw.type);
  if (raw.hazards != null) risk.hazards = asStrings(raw.hazards);
  if (raw.sources != null) risk.sources = asStrings(raw.sources);
  const xw = normaliseCrosswalks(raw.crosswalks);
  if (xw) risk.crosswalks = xw;
  if (raw.superseded_by) risk.superseded_by = String(raw.superseded_by);
  if (raw.combination) risk.combination = String(raw.combination);
  const min = asRecord(raw.min_authority);
  if (Object.keys(min).length) risk.min_authority = Object.fromEntries(Object.entries(min).map(([k, v]) => [k, asAuthority(id, v)]));
  if (!risk.statement) throw new RegisterError(`${id} has no statement`);
  return risk;
}

function asAuthority(where: string, v: unknown): Authority {
  const s = String(v);
  if (!(AUTHORITY as readonly string[]).includes(s)) throw new RegisterError(`${where}: unknown authority ${JSON.stringify(v)}; expected one of ${AUTHORITY.join(', ')}`);
  return s as Authority;
}

const asAnswer = (v: unknown): ContextAnswer | undefined => (v === 'always' || v === 'never' || v === 'ask' ? v : undefined);

function normaliseLevelWhen(id: string, v: unknown): LevelWhen[] | undefined {
  if (!Array.isArray(v) || !v.length) return undefined;
  return v.map((raw) => {
    const r = asRecord(raw);
    const level = Number(r.level);
    if (level !== 0 && level !== 1 && level !== 2) throw new RegisterError(`${id} level_when has level ${JSON.stringify(r.level)}`);
    const c: LevelWhen = { level };
    if (r.capabilities != null) c.capabilities = asStrings(r.capabilities);
    if (r.authority != null) c.authority = asAuthority(`${id} level_when`, r.authority);
    if (typeof r.irreversible === 'boolean') c.irreversible = r.irreversible;
    if (typeof r.external === 'boolean') c.external = r.external;
    return c;
  });
}

function normaliseCombinations(raw: Raw | undefined): Combinations {
  const r = raw ?? {};
  const roles: Record<string, Role> = {};
  for (const [id, x] of Object.entries(asRecord(r.roles))) {
    const role = asRecord(x);
    const caps: Record<string, RoleMark> = {};
    for (const [cap, m] of Object.entries(asRecord(role.capabilities))) {
      const mark = asRecord(m);
      caps[cap] = { mark: mark.mark === 'yes' || mark.mark === true ? 'yes' : 'maybe', ...(mark.note ? { note: String(mark.note) } : {}), ...(mark.min_authority ? { min_authority: asAuthority(`role ${id} ${cap}`, mark.min_authority) } : {}) };
    }
    roles[id] = { name: String(role.name ?? id), ...(role.description ? { description: String(role.description) } : {}), ...(role.question ? { question: String(role.question) } : {}), capabilities: caps };
  }
  const rules: Record<string, CombinationRule> = {};
  for (const [id, x] of Object.entries(asRecord(r.rules))) {
    const rule = asRecord(x);
    rules[id] = {
      name: String(rule.name ?? id), roles: asStrings(rule.roles), risks: asStrings(rule.risks),
      ...(rule.mechanism ? { mechanism: String(rule.mechanism) } : {}), ...(rule.description ? { description: String(rule.description) } : {}),
      ...(rule.control ? { control: String(rule.control) } : {}), ...(rule.sources ? { sources: asStrings(rule.sources) } : {}),
    };
  }
  const implies: Combinations['implies'] = {};
  for (const [cap, x] of Object.entries(asRecord(r.implies))) {
    implies[cap] = Object.fromEntries(Object.entries(asRecord(x)).map(([other, m]) => {
      const mark = asRecord(m);
      return [other, { mark: mark.mark === 'yes' || mark.mark === true ? 'yes' : 'maybe', ...(mark.note ? { note: String(mark.note) } : {}) }];
    }));
  }
  return { roles, rules, implies };
}

function normaliseControl(id: string, raw: Raw): Control {
  const level = Number(raw.level);
  if (level !== 0 && level !== 1 && level !== 2) throw new RegisterError(`${id} has level ${JSON.stringify(raw.level)}; expected 0, 1 or 2`);
  const control: Control = {
    level,
    risks: asStrings(raw.risks),
    statement: String(raw.statement ?? ''),
    recommendations: String(raw.recommendations ?? '').trim(),
    references: asStrings(raw.references),
  };
  const xw = normaliseCrosswalks(raw.crosswalks);
  if (xw) control.crosswalks = xw;
  if (raw.superseded_by) control.superseded_by = String(raw.superseded_by);
  const lw = normaliseLevelWhen(id, raw.level_when);
  if (lw) control.level_when = lw;
  if (raw.enforcement != null) control.enforcement = asStrings(raw.enforcement);
  if (raw.owner != null) control.owner = String(raw.owner);
  if (raw.phase != null) control.phase = asStrings(raw.phase);
  if (raw.evidence) control.evidence = String(raw.evidence).trim();
  if (raw.test) control.test = String(raw.test).trim();
  if (!control.statement) throw new RegisterError(`${id} has no statement`);
  return control;
}

function parseYaml(name: string, text: string): unknown {
  try {
    return loadYaml(text);
  } catch (e) {
    throw new RegisterError(`${name}.yaml is not valid YAML: ${(e as Error).message}`);
  }
}

/**
 * Build a register from the text of its YAML files, keyed by file name without `.yaml`
 * (e.g. `{ risks: '...', controls: '...' }`). Missing optional files default to empty.
 */
export function loadRegisterFromFiles(files: Partial<Record<RegisterFile, string>>): Register {
  const missing = REQUIRED_FILES.filter((f) => files[f] == null);
  if (missing.length) {
    throw new RegisterError(`The register is missing ${missing.map((m) => `${m}.yaml`).join(', ')}; it must use the same file layout as arc-risk-register/.`);
  }
  const data: Partial<Record<RegisterFile, Raw>> = {};
  for (const f of REGISTER_FILES) if (files[f] != null) data[f] = asRecord(parseYaml(f, files[f] as string));

  const version = data.register && data.register.version != null
    ? { version: String(data.register.version), ...(data.register.released ? { released: String(data.register.released) } : {}) }
    : { version: 'unversioned' };

  const capabilities: Record<string, Capability> = {};
  for (const [id, c] of Object.entries(data.capabilities ?? {})) {
    const r = asRecord(c);
    const cap: Capability = { name: String(r.name ?? id), category: String(r.category ?? ''), description: String(r.description ?? '').trim() };
    if (Array.isArray(r.authority) && r.authority.length) cap.authority = r.authority.map((a: unknown) => asAuthority(id, a));
    const irr = asAnswer(r.irreversible); if (irr) cap.irreversible = irr;
    const ext = asAnswer(r.external); if (ext) cap.external = ext;
    capabilities[id] = cap;
  }
  const elements = (src: Raw | undefined) => Object.fromEntries(Object.entries(src ?? {}).map(([id, e]) => {
    const r = asRecord(e);
    return [id, {
      name: String(r.name ?? id),
      ...(r.description != null ? { description: String(r.description).trim() } : {}),
      ...(r.present_when ? { present_when: String(r.present_when).trim() } : {}),
    }];
  })) as Record<string, Element>;

  const risks: Record<string, Risk> = {};
  for (const [id, r] of Object.entries(data.risks ?? {})) risks[id] = normaliseRisk(id, asRecord(r));
  const controls: Record<string, Control> = {};
  for (const [id, c] of Object.entries(data.controls ?? {})) controls[id] = normaliseControl(id, asRecord(c));

  const hazards: Record<string, Hazard> = {};
  for (const [id, h] of Object.entries(data.hazards ?? {})) {
    const r = asRecord(h);
    hazards[id] = { name: String(r.name ?? id), type: String(r.type ?? ''), description: String(r.description ?? '').trim() };
  }
  const crosswalks: Record<string, CrosswalkSource> = {};
  for (const [key, s] of Object.entries(data.crosswalk_references ?? {})) {
    const r = asRecord(s);
    if (!r.title) continue;
    crosswalks[key] = {
      title: String(r.title),
      ...(r.url ? { url: String(r.url) } : {}),
      ...(r.version != null ? { version: String(r.version) } : {}),
      ...(r.applies_to ? { applies_to: asStrings(r.applies_to) } : {}),
      ids: Object.fromEntries(Object.entries(asRecord(r.ids)).map(([k, v]) => [String(k), String(v)])),
    };
  }
  return {
    version, capabilities, components: elements(data.components), design: elements(data.design), risks, controls, hazards, crosswalks,
    combinations: normaliseCombinations(data.combinations),
  };
}

/** An element only some systems have: a capability, or a component or design element that states when it is present. */
export function isChosen(reg: Register, id: string): boolean {
  if (id in reg.capabilities) return true;
  return !!(reg.components[id]?.present_when || reg.design[id]?.present_when);
}

/** Components and design elements that only some systems have (`present_when`). */
export const conditionalElements = (reg: Register): string[] =>
  [...Object.keys(reg.components), ...Object.keys(reg.design)].filter((id) => isChosen(reg, id));

/** Which kind of element an ID is: by the file it is defined in, falling back to its prefix. */
export function elementKind(reg: Register, id: string): ElementKind | 'unknown' {
  if (id in reg.capabilities) return 'capability';
  if (id in reg.components) return 'component';
  if (id in reg.design) return 'design';
  return ({ CAP: 'capability', CMP: 'component', DSN: 'design' } as const)[String(id).split('-')[0] as 'CAP' | 'CMP' | 'DSN'] ?? 'unknown';
}

export function elementName(reg: Register, id: string): string {
  return reg.capabilities[id]?.name ?? reg.components[id]?.name ?? reg.design[id]?.name ?? id;
}

export interface RegisterIssue {
  severity: 'error' | 'warning';
  id: string;
  message: string;
}

/**
 * Light consistency checks: unknown elements, hazards and controls, and risk↔control links that are not
 * mirrored in both files. The official register passes all of them (scripts/validate_risk_register.py is stricter).
 */
export function checkRegister(reg: Register): RegisterIssue[] {
  const out: RegisterIssue[] = [];
  for (const [rid, r] of Object.entries(reg.risks)) {
    if (r.superseded_by) continue;
    if (r.combination && !(r.combination in reg.combinations.rules)) out.push({ severity: 'error', id: rid, message: `arises from unknown combination rule ${r.combination}` });
    if (!r.element_ids.length && !r.combination) out.push({ severity: 'error', id: rid, message: 'arises from no element' });
    for (const e of r.element_ids) if (!(e in reg.capabilities || e in reg.components || e in reg.design)) {
      out.push({ severity: 'error', id: rid, message: `unknown element ${e}` });
    }
    for (const h of r.hazards ?? []) if (Object.keys(reg.hazards).length && !(h in reg.hazards)) out.push({ severity: 'warning', id: rid, message: `unknown hazard ${h}` });
    for (const c of r.controls) {
      const ctl = reg.controls[c];
      if (!ctl) out.push({ severity: 'error', id: rid, message: `lists unknown control ${c}` });
      else if (!ctl.risks.includes(rid)) out.push({ severity: 'error', id: rid, message: `lists ${c}, but ${c} does not list ${rid}` });
    }
  }
  for (const [cid, c] of Object.entries(reg.controls)) {
    for (const r of c.risks) {
      const risk = reg.risks[r];
      if (!risk) out.push({ severity: 'error', id: cid, message: `lists unknown risk ${r}` });
      else if (!risk.controls.includes(cid)) out.push({ severity: 'error', id: cid, message: `lists ${r}, but ${r} does not list ${cid}` });
    }
  }
  return out;
}
