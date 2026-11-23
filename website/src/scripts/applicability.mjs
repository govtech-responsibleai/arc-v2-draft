// What applies to a system: the rule of the ARC assessment skill (skills/arc-assessment/scripts/arc.py,
// `assess`), in JavaScript for the explorer page. Each function mirrors the arc.py function of the same
// name; skills/tests/test_arc_assessment.py runs both on many systems and checks that they agree.
//
// `data` is the explorer data written by scripts/site_entries.py (explorer_data). A system is
// `{ caps, authority, reversible, internal, components }`: its capabilities, the authority each is used
// at (default: the highest the capability allows), the capabilities whose effects can be undone or
// stay inside the organisation (default: neither, the most cautious case), and its conditional components.

export const AUTHORITY = ['read', 'propose', 'act-with-approval', 'act-alone']; // least to most
const rank = (a) => AUTHORITY.indexOf(a);

function index(data) {
  return Object.fromEntries(data.elements.map((e) => [e.id, e]));
}

/** An element only some systems have: a capability, or a component or design element with `present_when`. */
export function isChosen(element) {
  return Boolean(element) && (element.id.startsWith('CAP') || Boolean(element.present_when));
}

/** The context each capability is used in: { CAP-xx: { authority, irreversible, external } }. */
export function buildProfile(data, system) {
  const el = index(data);
  const reversible = new Set(system.reversible || []);
  const internal = new Set(system.internal || []);
  const profile = {};
  for (const cap of system.caps) {
    const e = el[cap] || {};
    const context = {};
    if (e.authority && e.authority.length) {
      const given = (system.authority || {})[cap];
      context.authority = given && e.authority.includes(given) ? given : e.authority[e.authority.length - 1];
    }
    for (const [field, cleared] of [['irreversible', reversible], ['external', internal]]) {
      if (e[field] === 'ask') context[field] = !cleared.has(cap);
      else if (e[field] === 'always' || e[field] === 'never') context[field] = e[field] === 'always';
    }
    if (context.authority === 'read' && 'irreversible' in context) context.irreversible = false; // reading changes nothing
    profile[cap] = context;
  }
  return profile;
}

/** [capability, level needed] if the system uses a capability below the authority this risk needs. */
export function belowAuthority(risk, profile) {
  for (const [cap, minimum] of Object.entries(risk.min || {})) {
    const used = profile[cap] && profile[cap].authority;
    if (used && rank(used) < rank(minimum)) return [cap, minimum];
  }
  return null;
}

/** A control's level in this system: its own, or a stricter one if a `level_when` context holds. */
export function effectiveLevel(control, profile) {
  let level = control[0];
  for (const condition of control[2] || []) {
    for (const [cap, context] of Object.entries(profile)) {
      if (condition.capabilities && !condition.capabilities.includes(cap)) continue;
      if ('authority' in condition && (!context.authority || rank(context.authority) < rank(condition.authority))) continue;
      if (['irreversible', 'external'].some((f) => f in condition && context[f] !== condition[f])) continue;
      level = Math.min(level, condition.level);
    }
  }
  return level;
}

/** Each combination rule's verdict for these capabilities: present, possible or not present. */
export function combinationChecks(data, capabilities, profile) {
  const supplies = (cap, entry) => {
    const used = profile[cap] && profile[cap].authority;
    return !(used && entry.min) || rank(used) >= rank(entry.min);
  };
  return Object.entries(data.rules).map(([id, rule]) => {
    const legs = rule.legs.map((leg) => {
      const suppliers = capabilities
        .filter((c) => leg.caps[c] && supplies(c, leg.caps[c]))
        .map((c) => ({ id: c, mark: leg.caps[c].mark, note: leg.caps[c].note }));
      const status = suppliers.some((s) => s.mark === 'yes') ? 'yes' : suppliers.length ? 'maybe' : 'none';
      return { id: leg.id, name: leg.name, question: leg.question, status, suppliers };
    });
    const statuses = legs.map((l) => l.status);
    const verdict = statuses.includes('none') || !legs.length ? 'not present'
      : statuses.every((s) => s === 'yes') ? 'present' : 'possible';
    return { id, name: rule.name, description: rule.description, verdict, legs, control: rule.control, risks: rule.risks };
  });
}

/** Capabilities the system has not declared but that its declared ones give it. */
export function impliedCapabilities(data, capabilities) {
  const out = [];
  for (const cap of capabilities) {
    for (const [other, entry] of Object.entries(data.implies[cap] || {})) {
      if (capabilities.includes(other)) continue;
      out.push({ from: cap, capability: other, mark: entry.mark, note: entry.note });
    }
  }
  return out;
}

/** What applies to a system: its risks in three groups, its controls at their levels here, and the checks. */
export function assess(data, system) {
  const el = index(data);
  const components = system.components || [];
  const profile = buildProfile(data, system);
  const present = [...system.caps, ...components];
  const selected = new Set(present);
  const verdicts = Object.fromEntries(combinationChecks(data, present, profile).map((c) => [c.id, c.verdict]));
  const baseline = [], single = [], combination = [], below = [];
  for (const risk of data.risks) {   // retired risks are not in the data
    const low = belowAuthority(risk, profile);
    if (low) { below.push({ id: risk.id, capability: low[0], needs: low[1] }); continue; }
    if (risk.comb) {
      if ((verdicts[risk.comb] || 'not present') !== 'not present') combination.push(risk);
      continue;
    }
    const needed = risk.e.filter((e) => isChosen(el[e]));
    if (!needed.length) baseline.push(risk);
    else if (needed.every((e) => selected.has(e))) (risk.e.length > 1 ? combination : single).push(risk);
  }
  const applicable = [...baseline, ...single, ...combination];
  const controls = {};
  for (const risk of applicable) {
    for (const id of risk.c) {
      const control = data.controls[id];
      if (!control) continue;
      controls[id] = controls[id] || { level: effectiveLevel(control, profile), base: control[0], risks: [] };
      controls[id].risks.push(risk.id);
    }
  }
  const level0 = Object.keys(controls).filter((id) => controls[id].level === 0).sort();
  return {
    profile, baseline, single, combination, applicable, below, controls, level0,
    checks: combinationChecks(data, system.caps, profile),
    implied: impliedCapabilities(data, system.caps),
  };
}

/** What the assessor does with a combination verdict (arc.py combination_advice). */
export function combinationAdvice(check) {
  const id = check.control;
  const missing = check.legs.filter((l) => l.status === 'none').map((l) => l.name.toLowerCase());
  const unsure = check.legs.filter((l) => l.status === 'maybe').map((l) => l.name.toLowerCase());
  if (check.verdict === 'present') {
    return `Every leg is present. Implement ${id}. If a review of the system finds that a leg is absent in practice, record which one and the evidence, and record ${id} as waived.`;
  }
  if (check.verdict === 'possible') {
    return `Whether this system has ${unsure.join(' and ')} depends on how it is deployed. Answer each note marked maybe from the code and configuration. If every leg is confirmed, implement ${id}. If one is absent, record ${id} as waived, with the evidence.`;
  }
  return `No capability of this system supplies ${missing.join(' or ')}. Where ${id} is listed, record it as waived, with this as the evidence.`;
}
