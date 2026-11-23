import { describe, expect, it } from 'vitest';
import { blockers, controlsInScope, isContradicted, parseAssessment, pendingSuggestions, unconfirmedAI } from '../src/index';
import { capIds, completeAssessment, reg } from './helpers';

const caps = capIds.slice(0, 3);

describe('AI suggestions', () => {
  it('a suggestion nobody has decided on blocks sign-off, and any decision clears it', () => {
    for (const decision of ['confirmed', 'edited', 'dismissed'] as const) {
      const a = completeAssessment(caps);
      const rid = Object.keys(a.risks)[0];
      a.ai.risks[rid] = { context: 'Suggested context', impact: 4, likelihood: 3, impactReason: 'why', evidence: ['src/agent.py:10'] };
      expect(pendingSuggestions(a)).toEqual([`risk.${rid}`]);
      expect(blockers(reg, a).map((b) => b.anchor)).toContain('ai-drafts');
      a.prov[`risk.${rid}`] = decision;
      expect(unconfirmedAI(a)).toEqual([]);
      expect(blockers(reg, a)).toEqual([]);
    }
  });

  it('suggestions do not change the record: an unaccepted score leaves the risk unscored', () => {
    const a = completeAssessment(caps);
    const rid = Object.keys(a.risks)[0];
    delete a.risks[rid];
    a.ai.risks[rid] = { impact: 5, likelihood: 5 };
    expect(blockers(reg, a).some((b) => b.section === 'risks' && b.items.includes(rid))).toBe(true);
  });
});

describe('contradicted Level 0 controls', () => {
  const setup = () => {
    const a = completeAssessment(caps);
    const l0 = controlsInScope(reg, a).find((c) => c.group === 'required')!;
    a.code = { url: 'https://github.com/example/repo', read: [], findings: [], unknown: [], caps: {}, checks: {}, checked: null };
    return { a, cid: l0.id };
  };

  it('blocks sign-off when the code check found nothing for an entry marked implemented', () => {
    const { a, cid } = setup();
    a.code!.checks![cid] = { verdict: 'missing', note: 'No such check in the code', files: [] };
    expect(isContradicted(a, cid)).toBe(true);
    expect(blockers(reg, a).find((b) => b.items.includes(cid))?.text).toMatch(/contradicted by the code/);
  });

  it('blocks when the check says the code conflicts with the entry, even if partly implemented', () => {
    const { a, cid } = setup();
    a.code!.checks![cid] = { verdict: 'partial', note: 'Allows any host', files: ['infra/egress.yaml:19'], contradicts: true };
    expect(isContradicted(a, cid)).toBe(true);
  });

  it("clears when a reviewer accepts the explanation, and a plain 'partly' never blocks", () => {
    const { a, cid } = setup();
    a.code!.checks![cid] = { verdict: 'missing', note: 'Not in this repository', files: [] };
    a.controls[cid] = { ...a.controls[cid], contradictionAccepted: { by: 'Governance lead', reason: 'Enforced by the platform team outside this repo', at: '2026-11-20T00:00:00.000Z' } };
    expect(blockers(reg, a)).toEqual([]);
    a.code!.checks![cid] = { verdict: 'partial', note: 'Some of it', files: [] };
    delete a.controls[cid].contradictionAccepted;
    expect(isContradicted(a, cid)).toBe(false);
    expect(blockers(reg, a)).toEqual([]);
  });

  it('Level 1–2 contradictions are shown but do not block', () => {
    const a = completeAssessment(caps, 5, 5);
    const l1 = controlsInScope(reg, a).find((c) => c.group === 'priority');
    if (!l1) return;
    a.code = { url: 'u', read: [], findings: [], unknown: [], caps: {}, checks: { [l1.id]: { verdict: 'missing', note: 'n', files: [] } }, checked: null };
    expect(isContradicted(a, l1.id)).toBe(true);
    expect(blockers(reg, a)).toEqual([]);
  });
});

describe('review data in the file', () => {
  it('round-trips threads, the review verdict, code excerpts and suggestions', () => {
    const a = completeAssessment(caps);
    a.threads['CTRL-0089'] = { resolved: false, comments: [{ author: 'Governance lead', role: 'Reviewer', at: '2026-11-20T01:00:00.000Z', text: 'Scope fetch_url.' }] };
    a.review = { verdict: 'changes-requested', by: 'Governance lead', at: '2026-11-20T01:05:00.000Z' };
    a.code = {
      url: 'https://github.com/example/repo', commit: '3f9c2e1', read: [], findings: [], unknown: [], caps: {}, checked: null,
      checks: { 'CTRL-0089': { verdict: 'partial', note: 'n', files: [], contradicts: true, excerpts: [{ path: 'infra/egress.yaml', start: 9, lines: ['egress:', '  default: deny'], highlight: [10, 10] }] } },
    };
    a.ai.system.purpose = 'Suggested purpose';
    a.ai.controls['CTRL-0089'] = { proposal: 'Allow only declared domains' };
    const back = parseAssessment(JSON.stringify(a));
    expect(back.ok).toBe(true);
    if (back.ok) expect(back.value).toEqual(a);
  });

  it('older files without threads or the new suggestion groups still parse, with defaults', () => {
    const a = completeAssessment(caps) as Record<string, unknown>;
    delete a.threads;
    a.ai = { caps: {}, risks: {} };
    const r = parseAssessment(a);
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.value.threads).toEqual({});
      expect(r.value.ai.controls).toEqual({});
    }
  });
});
