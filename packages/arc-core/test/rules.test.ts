import { describe, expect, it } from 'vitest';
import {
  allowedStatuses, applicableRiskIds, applicableRisks, assessApplicability, blockers, buildProfile, controlDone, controlsInScope,
  effectiveLevel, isBaseline, isChosen, PRESETS, profileFor, progress, residualItems, riskState, type Assessment, type Threshold,
} from '../src/index';
import { activeRisks, capIds, completeAssessment, conditional, reg, scoreAll, withCaps } from './helpers';

const baseline = activeRisks.filter((r) => isBaseline(reg, reg.risks[r]));
const level0Unscored = (a: Assessment) => new Set(controlsInScope(reg, a).filter((c) => c.group === 'required').map((c) => c.id));
const capSets: string[][] = [[], ...capIds.map((c) => [c]), ['CAP-07', 'CAP-11'], ['CAP-03', 'CAP-09', 'CAP-11'], capIds];

describe('applicability', () => {
  it('a system with no capabilities and no conditional components carries exactly the baseline risks', () => {
    expect(applicableRiskIds(reg, [])).toEqual(baseline);
    expect(baseline.length).toBeGreaterThan(0);
  });

  it('a risk on a conditional component applies only when the system has that component', () => {
    expect(conditional.length).toBeGreaterThan(0);
    for (const comp of conditional) {
      const own = activeRisks.filter((r) => reg.risks[r].element_ids.filter((e) => isChosen(reg, e)).join() === comp);
      for (const r of own) {
        expect(applicableRisks(reg, withCaps([], [], [comp]))).toContain(r);
        expect(applicableRisks(reg, withCaps([]))).not.toContain(r);
      }
    }
  });

  it('a risk on several chosen elements needs every one of them', () => {
    const multi = activeRisks.filter((r) => !reg.risks[r].combination && reg.risks[r].element_ids.filter((e) => isChosen(reg, e)).length > 1);
    for (const r of multi) {
      const need = reg.risks[r].element_ids.filter((e) => isChosen(reg, e));
      const caps = need.filter((e) => e in reg.capabilities), comps = need.filter((e) => !(e in reg.capabilities));
      expect(applicableRisks(reg, withCaps(caps, [], comps))).toContain(r);
      const [first, ...rest] = need;
      const without = rest;
      expect(applicableRisks(reg, withCaps(without.filter((e) => e in reg.capabilities), [], without.filter((e) => !(e in reg.capabilities))))).not.toContain(r);
      expect(first).toBeTruthy();
    }
  });

  it('a combination-rule risk applies when every role is supplied: RISK-047 with Internet access and file access', () => {
    expect(reg.risks['RISK-047'].combination).toBe('lethal-trifecta');
    const both = assessApplicability(reg, withCaps(['CAP-07', 'CAP-11']));
    expect(both.combination).toContain('RISK-047');
    expect(both.checks.find((c) => c.id === 'lethal-trifecta')?.verdict).toBe('present');
    const web = assessApplicability(reg, withCaps(['CAP-07']));
    expect(web.combination).not.toContain('RISK-047');
    expect(web.checks.find((c) => c.id === 'lethal-trifecta')?.verdict).toBe('not present');
  });

  it('a risk that needs a minimum authority is left out when the capability is used below it', () => {
    const r = activeRisks.find((id) => reg.risks[id].min_authority)!;
    const [cap, needs] = Object.entries(reg.risks[r].min_authority!)[0];
    const levels = reg.capabilities[cap].authority!;
    const below = levels[levels.indexOf(needs) - 1];
    const low = withCaps([cap]); low.caps[cap].authority = below;
    const app = assessApplicability(reg, low);
    expect(app.below.map((b) => b.id)).toContain(r);
    expect(applicableRisks(reg, low)).not.toContain(r);
    const high = withCaps([cap]); high.caps[cap].authority = needs;
    expect(applicableRisks(reg, high)).toContain(r);
  });

  it('unstated context is the most cautious: highest authority, irreversible and external where the register asks', () => {
    const cap = capIds.find((c) => reg.capabilities[c].irreversible === 'ask' && reg.capabilities[c].external === 'ask' && reg.capabilities[c].authority?.includes('read'))!;
    const p = buildProfile(reg, withCaps([cap]));
    expect(p[cap]).toEqual({ authority: reg.capabilities[cap].authority!.at(-1), irreversible: true, external: true });
    // Reading changes nothing, so there is nothing to undo
    const a = withCaps([cap]); a.caps[cap] = { present: 'yes', authority: 'read', external: false };
    expect(buildProfile(reg, a)[cap]).toEqual({ authority: 'read', irreversible: false, external: false });
  });

  it('a control is stricter where its level_when context holds', () => {
    const cid = Object.keys(reg.controls).find((c) => reg.controls[c].level_when?.some((w) => w.authority === 'act-alone' && w.irreversible === undefined));
    if (!cid) return;
    const cap = capIds.find((c) => reg.capabilities[c].authority?.includes('act-alone'))!;
    expect(effectiveLevel(reg.controls[cid], profileFor(reg, [cap], { [cap]: 'act-alone' }))).toBe(0);
    const lower = reg.capabilities[cap].authority![0];
    expect(effectiveLevel(reg.controls[cid], profileFor(reg, [cap], { [cap]: lower }))).toBe(reg.controls[cid].level);
  });

  it('unsure counts as present', () => {
    expect(applicableRisks(reg, withCaps([], ['CAP-07', 'CAP-11']))).toEqual(applicableRisks(reg, withCaps(['CAP-07', 'CAP-11'])));
  });
});

describe('Level 0 attaches on applicability, whatever the scores', () => {
  const scenarios: [string, (a: Assessment) => Assessment][] = [
    ['all 1/1', (a) => scoreAll(a, 1, 1)],
    ['all 5/5', (a) => scoreAll(a, 5, 5)],
    ['mixed', (a) => { scoreAll(a, 2, 2); applicableRisks(reg, a).forEach((r, i) => { if (i % 3 === 0) a.risks[r] = { impact: 5, likelihood: 4 }; }); return a; }],
  ];
  it('the Level 0 set is the same unscored and for every score and threshold', () => {
    for (const set of capSets) {
      const want = level0Unscored(withCaps(set));
      for (const [, score] of scenarios) {
        for (const t of Object.keys(PRESETS) as Threshold[]) {
          const a = score(withCaps(set)); a.threshold = t;
          expect(level0Unscored(a)).toEqual(want);
        }
      }
    }
  });

  it('the threshold changes which Level 1–2 controls are priorities, never the required set', () => {
    const a = withCaps(capIds);
    applicableRisks(reg, a).forEach((r, i) => { a.risks[r] = { impact: i % 2 ? 4 : 3, likelihood: i % 2 ? 2 : 3 }; });
    const groups = (t: Threshold) => { a.threshold = t; const s = controlsInScope(reg, a); return { req: s.filter((c) => c.group === 'required').map((c) => c.id), pri: s.filter((c) => c.group === 'priority').map((c) => c.id) }; };
    const c = groups('conservative'), m = groups('moderate');
    expect(m.req).toEqual(c.req);
    expect(m.pri.length).toBeLessThan(c.pri.length);
  });

  it('lists each control once with all the applicable risks that carry it', () => {
    const a = withCaps(capIds);
    const scope = controlsInScope(reg, a);
    expect(new Set(scope.map((c) => c.id)).size).toBe(scope.length);
    for (const c of scope) expect(c.covers.sort()).toEqual(applicableRisks(reg, a).filter((r) => reg.risks[r].controls.includes(c.id)).sort());
  });

  it('a Level 0 control is implemented as-is, or waived with what is absent and the evidence', () => {
    expect(allowedStatuses(0)).toEqual(['as-is', 'waived']);
    expect(allowedStatuses(1)).toEqual(['as-is', 'adapted', 'not-adopted']);
    expect(controlDone({ status: 'adapted', how: 'Different approach' }, 0)).toBe(false);
    expect(controlDone({ status: 'not-adopted', reason: 'n/a' }, 0)).toBe(false);
    expect(controlDone({ status: 'as-is', how: 'Done' }, 0)).toBe(true);
    expect(controlDone({ status: 'as-is', how: '  ' }, 0)).toBe(false);
    expect(controlDone({ status: 'waived', reason: 'The system runs no generated code' }, 0)).toBe(false);
    expect(controlDone({ status: 'waived', reason: 'The system runs no generated code', evidence: 'No code-execution tool in agent/tools/' }, 0)).toBe(true);
    expect(controlDone({ status: 'waived', reason: 'x', evidence: 'y' }, 1)).toBe(false);
    expect(controlDone({ status: 'not-adopted', reason: 'Covered by CTRL-0019' }, 1)).toBe(true);
    expect(controlDone({ status: 'not-adopted' }, 2)).toBe(false);
  });
});

describe('scoring', () => {
  it('matches the presets in the governance guide', () => {
    expect([PRESETS.conservative.test(4, 1), PRESETS.conservative.test(3, 3), PRESETS.conservative.test(3, 2)]).toEqual([true, true, false]);
    expect([PRESETS.moderate.test(4, 1), PRESETS.moderate.test(3, 3), PRESETS.moderate.test(5, 2)]).toEqual([false, true, false]);
    expect([PRESETS.aggressive.test(5, 1), PRESETS.aggressive.test(4, 3), PRESETS.aggressive.test(4, 2)]).toEqual([true, true, false]);
  });

  it('treats an unscored risk as a priority', () => {
    const a = withCaps([]);
    expect(riskState(a, baseline[0])).toBe('unscored');
    expect(controlsInScope(reg, a).filter((c) => c.level > 0).every((c) => c.group === 'priority')).toBe(true);
    a.risks[baseline[0]] = { impact: 1, likelihood: 1 };
    expect(riskState(a, baseline[0])).toBe('below');
  });
});

describe('residual risk and sign-off', () => {
  it('a completed assessment has no blockers and full progress', () => {
    for (const [set, comps] of [[[], []], [['CAP-07', 'CAP-11'], []], [capIds, conditional]] as [string[], string[]][]) {
      const a = completeAssessment(set, 3, 3, comps);
      expect(blockers(reg, a)).toEqual([]);
      for (const p of Object.values(progress(reg, a))) expect(p.done).toBe(p.total);
    }
  });

  it('an undecided conditional component blocks sign-off', () => {
    const a = completeAssessment([]);
    delete a.components[conditional[0]];
    expect(blockers(reg, a)).toEqual([expect.objectContaining({ section: 'capabilities', anchor: 'components', items: [conditional[0]] })]);
  });

  it('an implied capability marked absent needs a reason', () => {
    const from = Object.keys(reg.combinations.implies).find((c) => Object.entries(reg.combinations.implies[c]).some(([o, m]) => o !== 'any' && m.mark === 'yes'));
    if (!from) return;
    const implied = Object.entries(reg.combinations.implies[from]).find(([o, m]) => o !== 'any' && m.mark === 'yes')![0];
    const a = completeAssessment([from]);
    expect(blockers(reg, a).some((b) => b.items.includes(implied))).toBe(true);
    a.caps[implied] = { present: 'no', reason: 'The sandbox has no file system' };
    expect(blockers(reg, a).some((b) => b.items.includes(implied))).toBe(false);
  });

  it('an unconfirmed AI draft blocks sign-off, and points to the list on the sign-off page', () => {
    const a = completeAssessment(['CAP-07']);
    a.prov['risk.' + applicableRisks(reg, a)[0]] = 'ai';
    expect(blockers(reg, a)).toEqual([expect.objectContaining({ section: 'signoff', anchor: 'ai-drafts', items: ['risk.' + applicableRisks(reg, a)[0]] })]);
    a.prov['risk.' + applicableRisks(reg, a)[0]] = 'confirmed';
    expect(blockers(reg, a)).toEqual([]);
  });

  it('a Level 0 control marked adapted blocks sign-off; a waiver with evidence does not', () => {
    const a = completeAssessment([]);
    const l0 = controlsInScope(reg, a).find((c) => c.level === 0)!;
    a.controls[l0.id] = { status: 'adapted', how: 'Our own way' };
    const b = blockers(reg, a);
    expect(b).toHaveLength(1);
    expect(b[0].items).toEqual([l0.id]);
    expect(b[0].text).toMatch(/marked adapted or not adopted/);
    a.controls[l0.id] = { status: 'waived', reason: 'What it concerns is not in this system', evidence: 'Architecture review, 1 Nov' };
    expect(blockers(reg, a)).toEqual([]);
  });

  it('lists priority risks and the risks of not-adopted controls for residual assessment', () => {
    const a = scoreAll(withCaps(capIds), 1, 1);
    expect(residualItems(reg, a)).toEqual([]);
    const l1 = controlsInScope(reg, a).find((c) => c.level > 0)!;
    a.controls[l1.id] = { status: 'not-adopted', reason: 'Not needed' };
    const items = residualItems(reg, a);
    expect(items.map((i) => i.rid).sort()).toEqual([...l1.covers].sort());
    expect(items[0].why).toContain(`${l1.id} not adopted`);
  });

  it('an empty assessment is blocked in every section', () => {
    const sections = new Set(blockers(reg, withCaps([])).map((b) => b.section));
    expect(sections).toEqual(new Set(['system', 'risks', 'controls', 'signoff']));
  });
});
