# arc-core

The ARC Framework's assessment rules and assessment file format, in one TypeScript package. ARCvisor (the web app, coming as `web/`) and the [arc-assessment skill](../../skills/arc-assessment/) for coding agents both use it, so that a risk applies, a Level 0 control is required, and an assessment is complete in exactly the same cases everywhere.

It reads the register YAML in [`arc-risk-register/`](../../arc-risk-register/) directly, or an organisation's own register with the same layout.

## What it decides

- **Applicable risks.** Every baseline risk (one that arises only from components and design elements), plus each risk whose capabilities are all present. A capability marked *unsure* counts as present until decided.
- **Controls in scope**, one entry per control however many risks list it:
  - *required*: every Level 0 control of every applicable risk, whatever the scores;
  - *priority*: Level 1–2 controls covering at least one priority risk;
  - *optional*: the rest.
- **Priority risks**, from the governance guide's presets: conservative, moderate or aggressive. An unscored risk counts as a priority.
- **Context.** Each capability's authority (read, propose, act with approval, act alone), and whether its effects are irreversible or external. Unstated context is the most cautious. A risk with `min_authority` is left out below it, and a control with `level_when` becomes stricter where its context holds.
- **Components only some systems have** (`present_when`), and **combination rules** over capability roles, with `implies`.
- **Statuses.** A control is *Implemented as-is*, *Adapted* or *Not adopted*. A Level 0 control is *Implemented as-is*, or *Waived* when the specific thing it concerns is not present, with the evidence.
- **Residual risks**: every priority risk, and every risk covered by a control that was not adopted.
- **Blockers to sign-off**, each with its section, plus revisions, the register diff for re-assessment, and changes since sign-off.

## API

```ts
import { loadRegisterFromFiles, applicableRisks, controlsInScope, blockers, parseAssessment, signOff } from 'arc-core';
import { loadRegisterFromDir } from 'arc-core/node'; // Node only

const reg = loadRegisterFromDir('arc-risk-register');
const parsed = parseAssessment(text);            // { ok: true, value } or { ok: false, errors: ['risks.RISK-001.impact: ...'] }
if (parsed.ok) {
  const a = parsed.value;
  controlsInScope(reg, a);                        // [{ id, level, covers, priorityCovers, group }]
  blockers(reg, a);                               // [] when ready to sign
}
```

| Module | Contents |
| --- | --- |
| `register` | register types, `loadRegisterFromFiles`, `checkRegister`, `elementKind` |
| `rules` | applicability, presets and scales, `controlsInScope`, `controlDone`, `residualItems`, `blockers`, `progress` |
| `assessment` | the zod schema for `.arc.json`, `blankAssessment`, `parseAssessment`, `toJSONSchema` |
| `diff` | `snapshot`, `registerDiff`, `changesSinceSignoff`, `signOff`, `startRevision` |
| `validate` | `validateAgainstRegister`, `verifyAssessment` |
| `export` | `exportMarkdown`, `templateMarkdown`, both in the [assessment template](../../docs/implementation/assessment-template.md)'s structure |

The browser entry (`arc-core`) has no filesystem access. `arc-core/node` adds `loadRegisterFromDir`, `loadRegisterFromUrl` and `findRegisterDir`.

## The assessment file

An `.arc.json` file is one system's assessment: system answers, capabilities with evidence, risk scores, control entries, residual risks, sign-off, reviewer notes, provenance of AI drafts, code-check results, and the register snapshot it was signed against. The schema is in [`schema/assessment.schema.json`](schema/assessment.schema.json) (JSON Schema 2020-12, generated from the zod schema at build). Use it to validate files from other tools, such as the Python skill.

## CLI

`npm run build` produces `dist/arc.mjs`, a single file with its dependencies inside, which runs on Node 18+ with no install:

```bash
node dist/arc.mjs elements
node dist/arc.mjs assess --capabilities CAP-03,CAP-07 [--detail] [--format json]
node dist/arc.mjs show RISK-034 CTRL-0062
node dist/arc.mjs template
node dist/arc.mjs report docs/arc/assessment.arc.json
node dist/arc.mjs validate docs/arc/assessment.arc.json
node dist/arc.mjs verify docs/arc/assessment.arc.json   # for CI: exit 1 unless signed, current and complete
```

By default it uses the nearest `arc-risk-register/` at or above the current directory. `--register DIR|URL` reads another register, and `--version X.Y.Z` reads an official release from GitHub.

`elements`, `assess` and `show` match the commands and output of the skill's `arc.py`; `assess` adds a line on the total controls in scope, and `show` also accepts element IDs. `template` prints a blank record generated from the register, not the template page itself.

## Development

```bash
npm ci                                 # from the repository root
npm test --workspace arc-core          # builds, then runs the tests against arc-risk-register/
npm run typecheck --workspace arc-core
```

The tests include `test/arcpy.test.ts`, which runs the skill's `arc.py` and arc-core on the reference systems in `examples/systems/` and 400 random systems, and checks that they agree on the risks, the Level 0 controls, the risks left out for authority, and the combination verdicts. The other tests derive their expectations from the register (for example, that every Level 0 control of every applicable risk is required whatever the scores), so they keep holding as the register changes.
