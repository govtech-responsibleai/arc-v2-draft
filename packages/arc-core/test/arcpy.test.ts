// arc-core and the skill's arc.py must agree on what applies to a system. This runs both on the reference systems in
// examples/systems/ and on 400 random systems with random context, and compares the risks (by group, in order), the
// Level 0 controls, the risks left out for authority, and the combination verdicts. Needs python3 (arc.py has its
// own YAML reader, so no packages); skipped when it is not installed.
import { spawnSync } from 'node:child_process';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { load } from 'js-yaml';
import { describe, expect, it } from 'vitest';
import { assessApplicability, blankAssessment, controlsInScope, type Assessment, type Authority } from '../src/index';
import { capIds, conditional, reg, REPO_DIR } from './helpers';

interface System { caps: string[]; authority: Record<string, Authority>; reversible: string[]; internal: string[]; components: string[] }

const python = spawnSync('python3', ['--version']).status === 0;

const EXPECTED = `
import sys, json, argparse
sys.path.insert(0, sys.argv[1])
import arc
reg, _, _ = arc.load_register(argparse.Namespace(register=sys.argv[2], version=None, refresh=False))
out = []
for s in json.load(sys.stdin):
    profile = arc.build_profile(reg, s["caps"], s["authority"], s["reversible"], s["internal"])
    baseline, single, combination = arc.applicable_risks(reg, s["caps"] + s["components"], profile)
    applicable = baseline + single + combination
    level0 = sorted({c for r in applicable for c in reg["risks"][r].get("controls") or []
                     if c in reg["controls"] and not reg["controls"][c].get("superseded_by")
                     and arc.effective_level(reg["controls"][c], profile) == 0})
    below = sorted(r for r, x in reg["risks"].items() if not x.get("superseded_by") and arc.below_authority(x, profile))
    verdicts = {c["id"]: c["verdict"] for c in arc.combination_checks(reg, s["caps"], profile)}
    out.append({"baseline": baseline, "single": single, "combination": combination, "level0": level0, "below": below, "verdicts": verdicts})
print(json.dumps(out))
`;

function asAssessment(s: System): Assessment {
  const a = blankAssessment();
  for (const c of s.caps) {
    a.caps[c] = {
      present: 'yes',
      ...(s.authority[c] ? { authority: s.authority[c] } : {}),
      ...(s.reversible.includes(c) ? { irreversible: false } : {}),
      ...(s.internal.includes(c) ? { external: false } : {}),
    };
  }
  for (const c of s.components) a.components[c] = { present: 'yes' };
  return a;
}

function ours(s: System) {
  const a = asAssessment(s);
  const app = assessApplicability(reg, a);
  const ids = [...app.baseline, ...app.single, ...app.combination];
  return {
    baseline: app.baseline, single: app.single, combination: app.combination,
    level0: controlsInScope(reg, a, ids).filter((c) => c.level === 0).map((c) => c.id).sort(),
    below: app.below.map((b) => b.id).sort(),
    verdicts: Object.fromEntries(app.checks.map((c) => [c.id, c.verdict])),
  };
}

function systems(): System[] {
  const out: System[] = [];
  const dir = join(REPO_DIR, 'examples', 'systems');
  for (const f of readdirSync(dir).filter((x) => x.endsWith('.yaml'))) {
    const p = load(readFileSync(join(dir, f), 'utf8')) as { capabilities?: Record<string, { authority?: Authority; irreversible?: boolean; external?: boolean } | null>; components?: string[] };
    const caps = Object.keys(p.capabilities ?? {});
    out.push({
      caps,
      authority: Object.fromEntries(caps.filter((c) => p.capabilities![c]?.authority).map((c) => [c, p.capabilities![c]!.authority!])),
      reversible: caps.filter((c) => p.capabilities![c]?.irreversible === false),
      internal: caps.filter((c) => p.capabilities![c]?.external === false),
      components: p.components ?? [],
    });
  }
  out.push({ caps: capIds, authority: {}, reversible: [], internal: [], components: conditional });
  out.push({ caps: [], authority: {}, reversible: [], internal: [], components: [] });
  let seed = 20261124;
  const rnd = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
  for (let i = 0; i < 400; i++) {
    const caps = capIds.filter(() => rnd() < 0.4);
    const authority: Record<string, Authority> = {};
    for (const c of caps) { const levels = reg.capabilities[c].authority; if (levels?.length && rnd() < 0.6) authority[c] = levels[Math.floor(rnd() * levels.length)]; }
    out.push({ caps, authority, reversible: caps.filter(() => rnd() < 0.3), internal: caps.filter(() => rnd() < 0.3), components: conditional.filter(() => rnd() < 0.5) });
  }
  return out;
}

describe.skipIf(!python)('arc-core agrees with the skill (arc.py)', () => {
  it('on the reference systems and 400 random systems with random context', () => {
    const list = systems();
    const r = spawnSync('python3', ['-c', EXPECTED, join(REPO_DIR, 'skills', 'arc-assessment', 'scripts'), join(REPO_DIR, 'arc-risk-register')], { input: JSON.stringify(list), encoding: 'utf8' });
    expect(r.status, r.stderr).toBe(0);
    const expected = JSON.parse(r.stdout);
    list.forEach((s, i) => expect({ system: s, ...ours(s) }).toEqual({ system: s, ...expected[i] }));
  }, 60000);
});
