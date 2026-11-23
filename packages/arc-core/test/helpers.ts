import { fileURLToPath } from 'node:url';
import { blankAssessment, conditionalElements, controlsInScope, residualItems, applicableRisks, SYSTEM_FIELDS, type Assessment, type Register } from '../src/index';
import { loadRegisterFromDir } from '../src/node';

/** This repository's register: tests derive their expectations from it, so they hold across register versions. */
export const REGISTER_DIR = fileURLToPath(new URL('../../../arc-risk-register', import.meta.url));
export const REPO_DIR = fileURLToPath(new URL('../../..', import.meta.url));
export const reg: Register = loadRegisterFromDir(REGISTER_DIR);

export const capIds = Object.keys(reg.capabilities);
export const activeRisks = Object.keys(reg.risks).filter((r) => !reg.risks[r].superseded_by);
export const capsOfRisk = (r: string) => reg.risks[r].element_ids.filter((e) => e in reg.capabilities);

export const conditional = conditionalElements(reg);

/** An assessment with the given capabilities and conditional components present, and every other one absent. */
export function withCaps(present: string[], unsure: string[] = [], components: string[] = []): Assessment {
  const a = blankAssessment(new Date('2026-01-01T00:00:00Z'));
  for (const c of capIds) a.caps[c] = { present: present.includes(c) ? 'yes' : unsure.includes(c) ? 'unsure' : 'no' };
  for (const c of conditional) a.components[c] = { present: components.includes(c) ? 'yes' : 'no' };
  return a;
}

export function scoreAll(a: Assessment, impact: number | null, likelihood: number | null): Assessment {
  for (const r of applicableRisks(reg, a)) a.risks[r] = { context: `How ${r} arises here`, impact, likelihood };
  return a;
}

/** A fully completed assessment: nothing should block its sign-off. */
export function completeAssessment(present: string[], impact = 3, likelihood = 3, components: string[] = []): Assessment {
  const a = scoreAll(withCaps(present, [], components), impact, likelihood);
  for (const f of SYSTEM_FIELDS) a.system[f.key] = f.options ? f.options[0] : `${f.label} for the test system`;
  for (const c of controlsInScope(reg, a)) {
    if (c.group !== 'optional') a.controls[c.id] = { status: 'as-is', how: `Implements ${c.id}`, evidence: 'config/policy.yaml', owner: 'Platform team' };
  }
  for (const i of residualItems(reg, a)) a.residual[i.rid] = { scenario: 'What remains', strategy: 'monitor', actions: 'Monthly review', impact: 2, likelihood: 2, acceptedBy: 'Director' };
  a.signoff = { assessor: 'Lead engineer', reviewer: 'Governance lead', authority: 'Director', decision: 'Approve' };
  return a;
}
