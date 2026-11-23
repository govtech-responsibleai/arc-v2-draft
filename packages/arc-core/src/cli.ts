// arc: query the ARC register and check assessment files. Bundled to a single file (dist/arc.mjs) that needs only Node 18+.
import { readFileSync } from 'node:fs';
import { load as loadYaml } from 'js-yaml';
import {
  assessApplicability, AUTHORITY_LABELS, combinationAdvice, controlsInScope, blankAssessment, effectiveLevel, exportMarkdown,
  findRegisterDir, groupRisks, impliedCapabilities, isChosen, LEVEL_LABELS, loadRegisterFromDir, loadRegisterFromUrl, parseAssessment,
  RegisterError, templateMarkdown, validateAgainstRegister, verifyAssessment, type Assessment, type Authority, type Profile, type Register,
} from './node';

const REPO_RAW = 'https://raw.githubusercontent.com/govtech-responsibleai/arc-v2-draft';
const SITE = 'https://govtech-responsibleai.github.io/arc-v2-draft/';

const USAGE = `arc: query the ARC risk register and check ARC assessment files.

Usage:
  arc [--register DIR|URL | --version X.Y.Z] <command> [options]

Commands:
  elements                        components, design elements and capabilities, with definitions
  assess --capabilities IDS       applicable risks and their controls for a system (IDS: CAP-03,CAP-06=propose)
         [--components IDS]       conditional components the system has (e.g. CMP-04,CMP-05)
         [--profile FILE]         or a system profile, as in examples/systems/*.yaml
  show ID [ID ...]                full text of risks, controls or elements (e.g. RISK-034 CTRL-0062)
  template                        a blank assessment in the template's structure (Markdown)
  report FILE.arc.json            an assessment file as Markdown, in the template's structure
  validate FILE.arc.json          check a file against the schema and the register; exit 1 on errors
  verify FILE.arc.json            exit 0 only if the file is signed, current for this register, and complete (for CI)

Options:
  --register DIR|URL   an organisation's register, or another copy (same layout as arc-risk-register/).
                       Default: the nearest arc-risk-register/ at or above the current directory.
  --version X.Y.Z      the official register at release tag vX.Y.Z (fetched from GitHub)
  --format md|json     output format (default md)
  --detail             assess: include each control's implementation guidance
  -h, --help           show this help
`;

class UsageError extends Error {}

interface Opts {
  register?: string;
  version?: string;
  format: 'md' | 'json';
  detail: boolean;
  capabilities?: string;
  components?: string;
  profile?: string;
  help: boolean;
  args: string[];
}

function parseArgs(argv: string[]): Opts {
  const o: Opts = { format: 'md', detail: false, help: false, args: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const [flag, inline] = a.startsWith('--') && a.includes('=') ? [a.slice(0, a.indexOf('=')), a.slice(a.indexOf('=') + 1)] : [a, undefined];
    const value = () => {
      if (inline !== undefined) return inline;
      const v = argv[++i];
      if (v === undefined || v.startsWith('--')) throw new UsageError(`${flag} needs a value`);
      return v;
    };
    switch (flag) {
      case '--register': o.register = value(); break;
      case '--version': o.version = value(); break;
      case '--capabilities': o.capabilities = value(); break;
      case '--components': o.components = value(); break;
      case '--profile': o.profile = value(); break;
      case '--format': {
        const f = value();
        if (f !== 'md' && f !== 'json') throw new UsageError('--format must be md or json');
        o.format = f; break;
      }
      case '--detail': o.detail = true; break;
      case '-h': case '--help': o.help = true; break;
      default:
        if (a.startsWith('-')) throw new UsageError(`unknown option ${a}`);
        o.args.push(a);
    }
  }
  if (o.register && o.version) throw new UsageError('--register and --version are alternatives');
  return o;
}

async function loadRegister(o: Opts): Promise<{ reg: Register; source: string }> {
  if (o.version) {
    const tag = `v${o.version.replace(/^v/, '')}`;
    return { reg: await loadRegisterFromUrl(`${REPO_RAW}/${tag}/arc-risk-register`), source: `official ARC register, tag ${tag}` };
  }
  if (o.register) {
    if (/^https?:\/\//.test(o.register)) return { reg: await loadRegisterFromUrl(o.register), source: `register at ${o.register}` };
    return { reg: loadRegisterFromDir(o.register), source: `register at ${o.register}` };
  }
  const dir = findRegisterDir();
  if (!dir) throw new UsageError(`no arc-risk-register/ found at or above ${process.cwd()}; pass --register DIR|URL or --version X.Y.Z`);
  return { reg: loadRegisterFromDir(dir), source: `register at ${dir}` };
}

function elements(reg: Register) {
  const list: { id: string; kind: string; name: string; category: string; description: string }[] = [];
  for (const [id, e] of Object.entries(reg.components)) list.push({ id, kind: 'Component', name: e.name, category: '', description: e.description ?? '' });
  for (const [id, e] of Object.entries(reg.design)) list.push({ id, kind: 'Design', name: e.name, category: '', description: e.description ?? '' });
  for (const [id, e] of Object.entries(reg.capabilities)) list.push({ id, kind: 'Capability', name: e.name, category: e.category, description: e.description });
  return list;
}

function elementLabel(reg: Register, id: string): string {
  const e = elements(reg).find((x) => x.id === id);
  return e ? `${e.kind}: ${e.name} (${id})` : id;
}

function riskRecord(reg: Register, rid: string, detail: boolean, profile: Profile = {}) {
  const r = reg.risks[rid];
  return {
    id: rid,
    statement: r.statement,
    description: r.description,
    elements: r.combination ? [`Combination: ${reg.combinations.rules[r.combination]?.name ?? r.combination}`] : r.element_ids.map((e) => elementLabel(reg, e)),
    failure_mode: r.failure_mode ?? '',
    type: r.type ?? [],
    hazards: (r.hazards ?? []).map((h) => (reg.hazards[h] ? `${reg.hazards[h].name} (${h})` : h)),
    controls: r.controls.filter((c) => reg.controls[c] && !reg.controls[c].superseded_by).map((c) => {
      const ctl = reg.controls[c];
      const level = effectiveLevel(ctl, profile);
      return {
        id: c, level, statement: ctl.statement,
        ...(level !== ctl.level ? { level_outside_this_context: ctl.level } : {}),
        ...(detail ? { recommendations: ctl.recommendations, ...Object.fromEntries((['enforcement', 'owner', 'phase', 'evidence', 'test'] as const).filter((k) => ctl[k]).map((k) => [k, ctl[k]])) } : {}),
      };
    }),
  };
}

/** The system to assess, from --profile or from --capabilities and --components, as an assessment. */
function systemFrom(reg: Register, o: Opts): Assessment {
  const a: Assessment = blankAssessment();
  const capability = (id: string) => {
    if (!(id in reg.capabilities)) throw new UsageError(`unknown capability ID(s): ${id}. Valid: ${Object.entries(reg.capabilities).map(([k, c]) => `${k} ${c.name}`).join(', ')}`);
  };
  const authority = (cap: string, v: unknown): Authority => {
    const allowed = reg.capabilities[cap].authority ?? [];
    if (!allowed.includes(v as Authority)) throw new UsageError(`${cap} ${reg.capabilities[cap].name} can be used at: ${allowed.join(', ') || 'no authority levels'} (got ${String(v)})`);
    return v as Authority;
  };
  let components: string[] = [];
  if (o.profile) {
    const p = (loadYaml(readFileSync(o.profile, 'utf8')) ?? {}) as { capabilities?: Record<string, Record<string, unknown> | null>; components?: string[] };
    for (const [cap, ctx] of Object.entries(p.capabilities ?? {})) {
      capability(cap);
      const c = ctx ?? {};
      a.caps[cap] = {
        present: 'yes',
        ...(c.authority ? { authority: authority(cap, c.authority) } : {}),
        ...(typeof c.irreversible === 'boolean' ? { irreversible: c.irreversible } : {}),
        ...(typeof c.external === 'boolean' ? { external: c.external } : {}),
      };
    }
    components = (p.components ?? []).map(String);
  } else {
    for (const item of (o.capabilities ?? '').split(',').map((x) => x.trim()).filter(Boolean)) {
      const [id, level] = item.split('=');
      const cap = id.toUpperCase();
      capability(cap);
      a.caps[cap] = { present: 'yes', ...(level ? { authority: authority(cap, level) } : {}) };
    }
    components = (o.components ?? '').split(',').map((x) => x.trim().toUpperCase()).filter(Boolean);
  }
  for (const c of components) {
    if (!isChosen(reg, c)) throw new UsageError(`${c} is not a component that only some systems have (those are: ${Object.keys(reg.components).filter((x) => isChosen(reg, x)).join(', ') || 'none'})`);
    a.components[c] = { present: 'yes' };
  }
  return a;
}

const print = (s = ''): void => { process.stdout.write(s + '\n'); };
const json = (v: unknown): void => print(JSON.stringify(v, null, 2));

function cmdElements(reg: Register, source: string, o: Opts) {
  const v = reg.version.version;
  const list = elements(reg);
  if (o.format === 'json') return json({ register_version: v, source, elements: list });
  print(`# ARC elements (register ${v}; ${source})\n`);
  print('Components and design elements are present in every agentic system. Capabilities are what the system can do; a system has a capability if any of its agents has it.\n');
  for (const [kind, title] of [['Component', 'Components'], ['Design', 'Design elements'], ['Capability', 'Capabilities']]) {
    print(`## ${title}\n`);
    for (const e of list.filter((x) => x.kind === kind)) print(`- **${e.id} ${e.name}**${e.category ? ` — ${e.category}` : ''}: ${e.description}\n`);
  }
}

function cmdAssess(reg: Register, source: string, o: Opts) {
  const a = systemFrom(reg, o);
  const caps = Object.keys(a.caps);
  const app = assessApplicability(reg, a);
  const ids = [...app.baseline, ...app.single, ...app.combination];
  const g = groupRisks(reg, ids);
  const records = Object.fromEntries(ids.map((r) => [r, riskRecord(reg, r, o.detail, app.profile)]));
  // Every applicable risk is unscored here, so the scope is the full set: Level 0 plus Levels 1–2
  const scope = controlsInScope(reg, a, ids);
  const level0 = scope.filter((c) => c.level === 0);
  const implied = impliedCapabilities(reg, caps);
  const v = reg.version.version;

  if (o.format === 'json') {
    return json({
      register_version: v, source, capabilities: caps, components: Object.keys(a.components), context: app.profile,
      risks: { baseline: g.baseline.map((r) => records[r]), capability: g.capability.map((r) => records[r]), combination: g.combination.map((r) => records[r]) },
      below_authority: app.below,
      combination_checks: app.checks.map((c) => ({ ...c, advice: combinationAdvice(c) })),
      implied_capabilities: implied,
      level0_controls: level0.map((c) => ({ id: c.id, statement: reg.controls[c.id].statement, risks: c.covers, ...(c.baseLevel !== c.level ? { level_outside_this_context: c.baseLevel } : {}) })),
      controls: scope.map((c) => ({ id: c.id, level: c.level, statement: reg.controls[c.id].statement, risks: c.covers })),
    });
  }
  const capNames = caps.map((c) => `${c} ${reg.capabilities[c].name}`).join(', ') || 'none';
  print(`# ARC applicable risks (register ${v}; ${source})\n`);
  print(`**Capabilities:** ${capNames}\n`);
  const context = Object.entries(app.profile).filter(([, c]) => Object.keys(c).length)
    .map(([cap, c]) => `${cap} ${[c.authority && AUTHORITY_LABELS[c.authority].toLowerCase(), c.irreversible === undefined ? '' : c.irreversible ? 'irreversible' : 'reversible', c.external === undefined ? '' : c.external ? 'external' : 'internal'].filter(Boolean).join(', ')}`);
  if (context.length) print(`**Context** (unstated context is the most cautious): ${context.join('; ')}\n`);
  if (Object.keys(a.components).length) print(`**Conditional components:** ${Object.keys(a.components).join(', ')}\n`);
  print(`**${ids.length} applicable risks:** ${g.baseline.length} baseline, ${g.capability.length} from single capabilities, ${g.combination.length} from combinations of elements. They carry ${level0.length} distinct Level 0 controls.\n`);
  print(`**${scope.length} distinct controls** across these risks: ${level0.length} Level 0, which apply whatever the scores, and ${scope.length - level0.length} Level 1–2, which scoring prioritises.\n`);
  print(`Control levels are defined at ${SITE}arc_framework/controls/#control-levels; each entry's full text is at ${SITE}arc_framework/register-full-text/#<ID> or via \`arc show <ID>\`.\n`);
  for (const [title, list] of [['Baseline risks (components and design elements)', g.baseline], ['Capability risks', g.capability], ['Risks from combinations of elements', g.combination]] as const) {
    if (!list.length) continue;
    print(`## ${title}\n`);
    for (const rid of list) {
      const rec = records[rid];
      print(`### ${rid} · ${rec.statement}\n`);
      print(`Arises from: ${rec.elements.join(' + ')} · Failure mode: ${rec.failure_mode} · Hazards: ${rec.hazards.join(', ')}\n`);
      print(`${rec.description}\n`);
      for (const c of rec.controls) {
        print(`- ${c.id} [${LEVEL_LABELS[c.level]}] ${c.statement}`);
        if (o.detail && 'recommendations' in c && c.recommendations) print(`  - Guidance: ${c.recommendations}`);
      }
      print();
    }
  }
  if (app.below.length) {
    print('## Left out at this authority\n');
    for (const b of app.below) print(`- ${b.id} ${reg.risks[b.id].statement}: needs ${b.capability} at ${AUTHORITY_LABELS[b.needs].toLowerCase()} or above`);
    print();
  }
  if (app.checks.length) {
    print('## Combination rules\n');
    for (const c of app.checks) print(`- **${c.name}**: ${c.verdict}. ${combinationAdvice(c)}`);
    print();
  }
  if (implied.length) {
    print('## Implied capabilities\n');
    for (const i of implied) print(`- ${i.from} implies ${i.capability} (${i.mark}): ${i.note}`);
    print();
  }
  if (level0.length) {
    print('## Level 0 controls across all applicable risks\n');
    print('Each Level 0 control once, with the applicable risks it addresses:\n');
    for (const c of level0) print(`- ${c.id} ${reg.controls[c.id].statement} — ${c.covers.join(', ')}`);
  }
}

function cmdShow(reg: Register, source: string, o: Opts) {
  if (!o.args.length) throw new UsageError('show needs at least one ID, e.g. arc show RISK-034 CTRL-0062');
  const out: Record<string, unknown>[] = [];
  for (const raw of o.args) {
    const id = raw.toUpperCase();
    if (reg.risks[id]) out.push({ ...riskRecord(reg, id, true), sources: reg.risks[id].sources ?? [], crosswalks: reg.risks[id].crosswalks ?? {} });
    else if (reg.controls[id]) {
      const c = reg.controls[id];
      out.push({ id, level: c.level, statement: c.statement, recommendations: c.recommendations, risks: c.risks, references: c.references, crosswalks: c.crosswalks ?? {} });
    } else if (id in reg.capabilities || id in reg.components || id in reg.design) {
      const e = elements(reg).find((x) => x.id === id)!;
      out.push({ ...e, risks: Object.keys(reg.risks).filter((r) => reg.risks[r].element_ids.includes(id)) });
    } else throw new UsageError(`${raw} is not a risk, control or element in this register`);
  }
  if (o.format === 'json') return json({ register_version: reg.version.version, source, entries: out });
  for (const e of out as any[]) {
    if ('controls' in e) {
      print(`## ${e.id} · ${e.statement}\n\nArises from: ${e.elements.join(' + ')} · Failure mode: ${e.failure_mode} · Hazards: ${e.hazards.join(', ')}\n\n${e.description}\n`);
      for (const c of e.controls) print(`- ${c.id} [${LEVEL_LABELS[c.level as 0 | 1 | 2]}] ${c.statement}`);
      if (e.sources.length) print(`\nSources: ${e.sources.join(', ')}`);
    } else if ('level' in e) {
      print(`## ${e.id} · ${e.statement}\n\n${LEVEL_LABELS[e.level as 0 | 1 | 2]} · Mitigates: ${e.risks.join(', ')}\n\n${e.recommendations || '(no guidance recorded)'}`);
      if (e.references.length) print(`\nReferences: ${e.references.join(', ')}`);
    } else {
      print(`## ${e.id} · ${e.name} (${e.kind}${e.category ? `, ${e.category}` : ''})\n\n${e.description}\n\nRisks: ${e.risks.join(', ') || 'none'}`);
    }
    print();
  }
}

function readAssessment(o: Opts, command: string): Assessment {
  const file = o.args[0];
  if (!file) throw new UsageError(`${command} needs a file, e.g. arc ${command} docs/arc/assessment.arc.json`);
  let text: string;
  try { text = readFileSync(file, 'utf8'); } catch (e) { throw new UsageError(`cannot read ${file}: ${(e as Error).message}`); }
  const r = parseAssessment(text);
  if (!r.ok) {
    const msg = `${file} is not a valid assessment file:\n${r.errors.map((e) => `  - ${e}`).join('\n')}`;
    if (o.format === 'json') json({ ok: false, file, errors: r.errors, warnings: [] }); else process.stderr.write(msg + '\n');
    process.exit(1);
  }
  return r.value;
}

function cmdValidate(reg: Register, o: Opts) {
  const a = readAssessment(o, 'validate');
  const issues = validateAgainstRegister(reg, a);
  const errors = issues.filter((i) => i.severity === 'error').map((i) => `${i.where}: ${i.message}`);
  const warnings = issues.filter((i) => i.severity === 'warning').map((i) => `${i.where}: ${i.message}`);
  if (o.format === 'json') json({ ok: !errors.length, file: o.args[0], errors, warnings });
  else {
    for (const e of errors) print(`error: ${e}`);
    for (const w of warnings) print(`warning: ${w}`);
    print(errors.length ? `${o.args[0]}: ${errors.length} ${errors.length === 1 ? 'error' : 'errors'}` : `${o.args[0]}: valid (revision ${a.revision}, register ${reg.version.version})`);
  }
  if (errors.length) process.exit(1);
}

function cmdVerify(reg: Register, o: Opts) {
  const a = readAssessment(o, 'verify');
  const v = verifyAssessment(reg, a);
  if (o.format === 'json') json({ ok: v.ok, file: o.args[0], revision: a.revision, register: reg.version.version, reasons: v.reasons });
  else if (v.ok) print(`${o.args[0]}: verified. Revision ${a.revision} is signed and current for register ${reg.version.version}.`);
  else {
    print(`${o.args[0]}: not verified (revision ${a.revision}, register ${reg.version.version}):`);
    for (const r of v.reasons) print(`  - ${r}`);
  }
  if (!v.ok) process.exit(1);
}

export async function main(argv: string[] = process.argv.slice(2)): Promise<void> {
  const o = parseArgs(argv);
  const command = o.args.shift();
  if (o.help || !command) { print(USAGE); if (!command && !o.help) process.exit(2); return; }
  if (!['elements', 'assess', 'show', 'template', 'report', 'validate', 'verify'].includes(command)) throw new UsageError(`unknown command ${command}`);
  const { reg, source } = await loadRegister(o);
  switch (command) {
    case 'elements': return cmdElements(reg, source, o);
    case 'assess': return cmdAssess(reg, source, o);
    case 'show': return cmdShow(reg, source, o);
    case 'template': return print(templateMarkdown(reg));
    case 'report': return print(exportMarkdown(reg, readAssessment(o, 'report')));
    case 'validate': return cmdValidate(reg, o);
    case 'verify': return cmdVerify(reg, o);
  }
}

main().catch((e) => {
  if (e instanceof UsageError || e instanceof RegisterError) {
    process.stderr.write(`arc: ${e.message}\n${e instanceof UsageError ? 'Run arc --help for usage.\n' : ''}`);
    process.exit(2);
  }
  process.stderr.write(`arc: ${(e as Error).stack ?? e}\n`);
  process.exit(2);
});
