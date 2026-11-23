import { applicableRisks, blankAssessment, blockers, isContradicted, parseAssessment, pendingSuggestions } from 'arc-core';
import { describe, expect, it } from 'vitest';
import { readFromRepository, REPO_PATH } from '../src/lib/files';
import { accept, dismiss, isPending, touch } from '../src/lib/suggest';
import { REGISTER as reg } from '../src/register';
import { grantDeskSample } from '../src/sample/grantdesk';

describe('the GrantDesk sample', () => {
  const a = grantDeskSample(reg, new Date('2026-11-20T08:00:00Z'));

  it('is a valid assessment file', () => {
    const r = parseAssessment(JSON.stringify(a));
    expect(r.ok ? [] : r.errors).toEqual([]);
  });

  it('is revision 2 of an assessment signed against 1.1.0, with the register diff to show', () => {
    expect(a.revision).toBe(2);
    expect(a.history.map((h) => h.register)).toEqual(['1.1.0']);
    expect(a.basis?.version).toBe('1.1.0');
    expect(a.signedCopy?.revision).toBe(1);
    expect(a.signoff.signedAt).toBeUndefined();
  });

  it('carries the code check, with CTRL-0089 contradicted, and blocks sign-off on it', () => {
    expect(a.code?.checks?.['CTRL-0089']?.contradicts).toBe(true);
    expect(isContradicted(a, 'CTRL-0089')).toBe(true);
    expect(blockers(reg, a).some((b) => b.items.includes('CTRL-0089'))).toBe(true);
  });

  it('leaves the new risks unscored, with AI suggestions waiting', () => {
    const fresh = applicableRisks(reg, a).filter((r) => Number(r.slice(5)) > 46);
    expect(fresh.length).toBeGreaterThan(0);
    for (const r of fresh) expect(a.risks[r]?.impact ?? null).toBeNull();
    const suggested = fresh.filter((r) => a.ai.risks[r]);
    expect(suggested.length).toBeGreaterThan(0);
    for (const r of suggested) expect(isPending(a, 'risk', r)).toBe(true);
    expect(pendingSuggestions(a).length).toBeGreaterThan(suggested.length);
  });
});

describe('suggestions', () => {
  const withRiskSuggestion = () => {
    const a = blankAssessment();
    a.ai.risks['RISK-001'] = { context: 'From the model gateway', impact: 4, likelihood: 2, impactReason: 'r' };
    return a;
  };

  it('accepting copies the suggestion into the record and records the decision', () => {
    const a = withRiskSuggestion();
    accept(a, 'risk', 'RISK-001');
    expect(a.risks['RISK-001']).toMatchObject({ context: 'From the model gateway', impact: 4, likelihood: 2, impactReason: 'r' });
    expect(a.prov['risk.RISK-001']).toBe('confirmed');
    expect(isPending(a, 'risk', 'RISK-001')).toBe(false);
  });

  it('dismissing leaves the record alone', () => {
    const a = withRiskSuggestion();
    dismiss(a, 'risk', 'RISK-001');
    expect(a.risks['RISK-001']).toBeUndefined();
    expect(a.prov['risk.RISK-001']).toBe('dismissed');
  });

  it('a person answering instead of deciding still clears the suggestion, as edited', () => {
    const a = withRiskSuggestion();
    a.risks['RISK-001'] = { impact: 3 };
    touch(a, 'risk', 'RISK-001');
    expect(a.prov['risk.RISK-001']).toBe('edited');
    const b = withRiskSuggestion();
    accept(b, 'risk', 'RISK-001');
    touch(b, 'risk', 'RISK-001');
    expect(b.prov['risk.RISK-001']).toBe('edited');
  });
});

describe('opening from a repository', () => {
  const ok = (body: string) => async () => new Response(body, { status: 200 });

  it('reads the file from the default branch of a public GitHub repository', async () => {
    let asked = '';
    const fake = (async (url: string) => { asked = url; return new Response(JSON.stringify(blankAssessment()), { status: 200 }); }) as unknown as typeof fetch;
    const r = await readFromRepository('github.com/example-agency/grantdesk-assistant', fake);
    expect(r.ok).toBe(true);
    expect(asked).toBe(`https://raw.githubusercontent.com/example-agency/grantdesk-assistant/HEAD/${REPO_PATH}`);
  });

  it('explains what went wrong', async () => {
    expect(await readFromRepository('not a repo')).toMatchObject({ ok: false });
    const missing = (async () => new Response('', { status: 404 })) as unknown as typeof fetch;
    const r = await readFromRepository('org/repo', missing);
    expect(r.ok ? '' : r.error).toMatch(/No docs\/arc\/assessment\.arc\.json in org\/repo/);
    const junk = await readFromRepository('org/repo', ok('{"format":"something-else"}') as unknown as typeof fetch);
    expect(junk.ok ? '' : junk.error).toMatch(/Not an ARCvisor assessment/);
  });
});
