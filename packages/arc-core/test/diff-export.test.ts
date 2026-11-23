import { describe, expect, it } from 'vitest';
import {
  changesSinceSignoff, controlsInScope, exportMarkdown, registerDiff, signOff, SignoffError, startRevision, templateMarkdown,
  verifyAssessment, validateAgainstRegister,
} from '../src/index';
import { capIds, completeAssessment, reg, withCaps } from './helpers';

const at = new Date('2026-02-01T00:00:00Z');

describe('sign-off and revisions', () => {
  it('signs a complete assessment against the current register', () => {
    const s = signOff(reg, completeAssessment(['CAP-07', 'CAP-11']), at);
    expect(s.signoff.signedAt).toBe(at.toISOString());
    expect(s.basis?.version).toBe(reg.version.version);
    expect(s.history).toEqual([{ revision: 1, signedAt: at.toISOString(), register: reg.version.version, decision: 'Approve' }]);
    expect(registerDiff(reg, s)?.empty).toBe(true);
    expect(changesSinceSignoff(reg, s)).toEqual([]);
    expect(verifyAssessment(reg, s)).toEqual({ ok: true, reasons: [] });
  });

  it('refuses to sign while anything blocks', () => {
    expect(() => signOff(reg, withCaps([]), at)).toThrow(SignoffError);
  });

  it('opens a new revision that keeps the names and shows what changed', () => {
    const s = signOff(reg, completeAssessment(['CAP-07']), at);
    const next = startRevision(s, at);
    expect(next.revision).toBe(2);
    expect(next.signoff).toEqual({ assessor: 'Lead engineer', reviewer: 'Governance lead', authority: 'Director' });
    const l1 = controlsInScope(reg, next).find((c) => c.level > 0 && c.group !== 'optional')!;
    next.controls[l1.id] = { status: 'not-adopted', reason: 'Replaced by a policy layer' };
    expect(changesSinceSignoff(reg, next)).toContainEqual({ section: 'controls', id: l1.id, text: `${l1.id} status: Implemented as-is → Not adopted` });
    expect(verifyAssessment(reg, next).ok).toBe(false);
  });
});

describe('re-assessment against a changed register', () => {
  it('reports new and gone risks, new controls and level changes', () => {
    const s = signOff(reg, completeAssessment(capIds), at);
    const [dropped, ...rest] = s.basis!.risks;
    const someControl = Object.keys(s.basis!.controls)[0];
    s.basis = {
      version: '0.9.0', risks: [...rest, 'RISK-999'],
      controls: { ...Object.fromEntries(Object.entries(s.basis!.controls).filter(([c]) => c !== 'CTRL-0001')), [someControl]: s.basis!.controls[someControl] === 0 ? 1 : 0, 'CTRL-9999': 1 },
    };
    const d = registerDiff(reg, s)!;
    expect(d.from).toBe('0.9.0');
    expect(d.newRisks).toEqual([dropped]);
    expect(d.goneRisks).toEqual(['RISK-999']);
    expect(d.goneControls).toEqual(['CTRL-9999']);
    expect(d.levelChanges.map((x) => x.id)).toContain(someControl);
    expect(d.empty).toBe(false);
    const v = verifyAssessment(reg, s);
    expect(v.ok).toBe(false);
    expect(v.reasons.join(' ')).toMatch(/Signed against register 0\.9\.0/);
  });
});

describe('validation against the register', () => {
  it('flags unknown IDs and a Level 0 control marked adapted', () => {
    const a = completeAssessment([]);
    const l0 = controlsInScope(reg, a).find((c) => c.level === 0)!;
    a.controls[l0.id] = { status: 'adapted', how: 'x' };
    a.caps['CAP-99'] = { present: 'yes' };
    a.controls['CTRL-9999'] = { status: 'as-is', how: 'x' };
    const errors = validateAgainstRegister(reg, a).filter((i) => i.severity === 'error').map((i) => i.where);
    expect(errors).toEqual(expect.arrayContaining([`controls.${l0.id}.status`, 'caps.CAP-99', 'controls.CTRL-9999']));
  });
});

describe('Markdown export', () => {
  it('follows the template sections and carries the code check', () => {
    const a = completeAssessment(['CAP-07', 'CAP-11']);
    a.code = { url: 'https://github.com/example/agent', read: [], findings: [], unknown: [], caps: { 'CAP-07': ['tools/search.py'] }, checks: { 'CTRL-0062': { verdict: 'missing', note: 'No injection check before documents reach the model.', files: [] } }, checked: at.toISOString() };
    const md = exportMarkdown(reg, a);
    for (const h of ['## 0. System overview', '## 1. Capability inventory', '## 2. Applicable risks', '## 3. Controls', '## 4. Residual risks', '## 5. Sign-off and review']) expect(md).toContain(h);
    expect(md).toContain('| Code check |');
    expect(md).toContain('Not found in code: No injection check before documents reach the model.');
    expect(md).toContain('tools/search.py');
  });

  it('produces a blank template listing every capability', () => {
    const md = templateMarkdown(reg);
    for (const c of capIds) expect(md).toContain(`| ${c} ${reg.capabilities[c].name} |`);
  });
});
