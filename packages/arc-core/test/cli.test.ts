// Runs the bundled CLI (dist/arc.mjs, built by `npm test`) as a user or CI would.
import { spawnSync } from 'node:child_process';
import { cpSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { applicableRiskIds, blankAssessment, controlsInScope, groupRisks, signOff } from '../src/index';
import { capIds, completeAssessment, reg, REGISTER_DIR, REPO_DIR } from './helpers';

const BIN = fileURLToPath(new URL('../dist/arc.mjs', import.meta.url));
const run = (args: string[], cwd = REPO_DIR) => {
  const r = spawnSync(process.execPath, [BIN, ...args], { cwd, encoding: 'utf8' });
  return { code: r.status, out: r.stdout, err: r.stderr };
};
const tmp = mkdtempSync(join(tmpdir(), 'arc-core-'));
const file = (name: string, data: unknown) => { const p = join(tmp, name); writeFileSync(p, JSON.stringify(data, null, 2)); return p; };

describe('arc CLI', () => {
  it('finds arc-risk-register/ from the working directory and lists the elements', () => {
    const r = run(['elements', '--format', 'json'], join(REPO_DIR, 'docs'));
    expect(r.code).toBe(0);
    const j = JSON.parse(r.out);
    expect(j.register_version).toBe(reg.version.version);
    expect(j.elements).toHaveLength(Object.keys(reg.capabilities).length + Object.keys(reg.components).length + Object.keys(reg.design).length);
  });

  it('assess lists the applicable risks and their Level 0 controls, as the register says', () => {
    const r = run(['assess', '--capabilities', 'CAP-07,CAP-11', '--format', 'json']);
    expect(r.code).toBe(0);
    const j = JSON.parse(r.out);
    const ids = applicableRiskIds(reg, ['CAP-07', 'CAP-11']);
    const g = groupRisks(reg, ids);
    expect(j.risks.baseline.map((x: { id: string }) => x.id)).toEqual(g.baseline);
    expect(j.risks.combination.map((x: { id: string }) => x.id)).toContain('RISK-047');
    const a = blankAssessment(); a.caps['CAP-07'] = { present: 'yes' }; a.caps['CAP-11'] = { present: 'yes' };
    expect(j.level0_controls.map((x: { id: string }) => x.id)).toEqual(controlsInScope(reg, a, ids).filter((c) => c.level === 0).map((c) => c.id));
  });

  it('assess prints the summary line in Markdown', () => {
    const r = run(['assess', '--capabilities', 'cap-03, CAP-09']);
    expect(r.code).toBe(0);
    expect(r.out).toMatch(/\*\*\d+ applicable risks:\*\* \d+ baseline, \d+ from single capabilities, \d+ from combinations of elements\. They carry \d+ distinct Level 0 controls\./);
  });

  it('rejects unknown capabilities and IDs with a usage error', () => {
    const r = run(['assess', '--capabilities', 'CAP-99']);
    expect(r.code).toBe(2);
    expect(r.err).toMatch(/unknown capability ID\(s\): CAP-99/);
    expect(run(['show', 'RISK-9999']).code).toBe(2);
    expect(run(['frobnicate']).code).toBe(2);
  });

  it('show prints risks, controls and elements', () => {
    const r = run(['show', 'RISK-034', 'CTRL-0062', 'CAP-07', '--format', 'json']);
    expect(r.code).toBe(0);
    expect(JSON.parse(r.out).entries.map((e: { id: string }) => e.id)).toEqual(['RISK-034', 'CTRL-0062', 'CAP-07']);
  });

  it('template prints a blank record in the template structure', () => {
    const r = run(['template']);
    expect(r.code).toBe(0);
    expect(r.out).toContain('## 1. Capability inventory');
  });

  it('validate accepts a blank assessment and rejects a Level 0 control marked adapted', () => {
    expect(run(['validate', file('blank.arc.json', blankAssessment())])).toMatchObject({ code: 0 });
    const a = completeAssessment([]);
    const l0 = controlsInScope(reg, a).find((c) => c.level === 0)!;
    a.controls[l0.id] = { status: 'adapted', how: 'x' };
    const r = run(['validate', file('adapted.arc.json', a)]);
    expect(r.code).toBe(1);
    expect(r.out).toContain(`error: controls.${l0.id}.status`);
    const broken = run(['validate', file('broken.arc.json', { ...blankAssessment(), threshold: 'lenient' })]);
    expect(broken.code).toBe(1);
    expect(broken.err).toContain('threshold');
  });

  it('verify fails a blank assessment, listing what blocks it, and passes a signed complete one', () => {
    const blank = run(['verify', file('blank.arc.json', blankAssessment())]);
    expect(blank.code).toBe(1);
    expect(blank.out).toContain('is not signed off');
    expect(blank.out).toMatch(/not scored/);
    const signed = run(['verify', file('signed.arc.json', signOff(reg, completeAssessment(['CAP-07', 'CAP-11'])))]);
    expect(signed.out).toContain('verified');
    expect(signed.code).toBe(0);
  });

  it('report renders an assessment file as Markdown', () => {
    const r = run(['report', file('complete.arc.json', completeAssessment(capIds))]);
    expect(r.code).toBe(0);
    expect(r.out).toContain('## 5. Sign-off and review');
  });

  it('reads another register with --register, including the older element_id field', () => {
    const dir = join(tmp, 'org-register');
    cpSync(REGISTER_DIR, dir, { recursive: true });
    const original = readFileSync(join(dir, 'risks.yaml'), 'utf8');
    const risks = original.replace(/ {2}element_ids:\n {2}- (CAP-07)\n {2}failure_mode/g, '  element_id: $1\n  failure_mode');
    expect(risks).not.toBe(original);
    expect(risks).toContain('  element_id: CAP-07\n');
    writeFileSync(join(dir, 'risks.yaml'), risks);
    const r = run(['--register', dir, 'assess', '--capabilities', 'CAP-07', '--format', 'json'], tmp);
    expect(r.code).toBe(0);
    expect(JSON.parse(r.out).risks.capability.map((x: { id: string }) => x.id)).toContain('RISK-034');
  });

  it('says where to point it when no register is found', () => {
    const r = run(['elements'], tmpdir());
    expect(r.code).toBe(2);
    expect(r.err).toMatch(/no arc-risk-register\/ found/);
  });
});
