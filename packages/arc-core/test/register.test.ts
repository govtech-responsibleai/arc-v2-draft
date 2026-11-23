import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { checkRegister, elementKind, loadRegisterFromFiles, RegisterError, type RegisterFile } from '../src/index';
import { reg, REGISTER_DIR } from './helpers';

const files = (names: RegisterFile[]) => Object.fromEntries(names.map((n) => [n, readFileSync(join(REGISTER_DIR, `${n}.yaml`), 'utf8')]));

describe('loading the register', () => {
  it('loads this repository register with its version and all entry types', () => {
    const version = readFileSync(join(REGISTER_DIR, 'register.yaml'), 'utf8').match(/^version:\s*"?([^"\n]+)"?/m)![1];
    expect(reg.version.version).toBe(version);
    for (const k of ['capabilities', 'components', 'design', 'risks', 'controls', 'hazards'] as const) expect(Object.keys(reg[k]).length).toBeGreaterThan(0);
    expect(Object.keys(reg.crosswalks)).toContain('owasp_asi');
  });

  it('passes the consistency checks', () => {
    expect(checkRegister(reg).filter((i) => i.severity === 'error')).toEqual([]);
  });

  it('normalises an older single element_id to element_ids, and stringifies crosswalk IDs', () => {
    const r = loadRegisterFromFiles({
      capabilities: 'ORG-CAP-1:\n  name: Paying suppliers\n  category: Interaction\n  description: Pays invoices\n',
      components: 'CMP-01:\n  name: LLM\n',
      design: 'DSN-01:\n  name: Architecture\n',
      risks: 'R-1:\n  statement: Overpayment\n  description: Pays twice\n  element_id: ORG-CAP-1\n  controls: [C-1]\n  crosswalks:\n    csa_addendum: [2.1, "2.10"]\n',
      controls: 'C-1:\n  level: 0\n  risks: [R-1]\n  statement: Reconcile payments daily\n',
    });
    expect(r.risks['R-1'].element_ids).toEqual(['ORG-CAP-1']);
    expect(r.risks['R-1'].crosswalks?.csa_addendum).toEqual(['2.1', '2.10']);
    expect(r.version.version).toBe('unversioned');
    expect(elementKind(r, 'ORG-CAP-1')).toBe('capability');
    expect(r.controls['C-1'].references).toEqual([]);
    expect(checkRegister(r)).toEqual([]);
  });

  it('refuses a register without its required files', () => {
    expect(() => loadRegisterFromFiles(files(['capabilities', 'risks']))).toThrow(RegisterError);
  });

  it('refuses a control with an invalid level', () => {
    expect(() => loadRegisterFromFiles({ ...files(['capabilities', 'components', 'design', 'risks']), controls: 'C-1:\n  level: 3\n  risks: []\n  statement: x\n' }))
      .toThrow(/level 3/);
  });

  it('flags links that are not mirrored, and unknown elements', () => {
    const r = loadRegisterFromFiles({
      capabilities: 'CAP-01:\n  name: A\n  category: Cognitive\n  description: d\n', components: 'CMP-01:\n  name: LLM\n', design: 'DSN-01:\n  name: D\n',
      risks: 'R-1:\n  statement: s\n  description: d\n  element_ids: [CAP-99]\n  controls: [C-1]\n',
      controls: 'C-1:\n  level: 1\n  risks: []\n  statement: c\n',
    });
    const msgs = checkRegister(r).map((i) => `${i.id} ${i.message}`);
    expect(msgs).toContain('R-1 unknown element CAP-99');
    expect(msgs).toContain('R-1 lists C-1, but C-1 does not list R-1');
  });
});
