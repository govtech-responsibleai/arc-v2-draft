# ARCvisor (web)

ARCvisor is where people check, decide and sign an ARC assessment. The [ARC skill](../skills/arc-assessment/) reads a system's code in the developer's coding agent and writes `docs/arc/assessment.arc.json`. ARCvisor opens that file, shows what the skill found, and keeps the record:
- the capabilities the system has, and the context each is used in (authority, reversible, internal)
- the components only some systems have, and the combination rules that apply
- the risks that apply, with their scores
- each control's status and evidence
- the residual risks, and who accepted them
- the reviewer's comments and verdict, and the sign-off

It is a static web app. Assessments stay in the browser and in files people keep, and nothing is sent to a server. The register comes from the YAML in [`arc-risk-register/`](../arc-risk-register/), bundled at build time. The rules come from [`arc-core`](../packages/arc-core/), the same package the skill uses.

## Run it

```bash
npm ci                          # from the repository root
npm run dev --workspace arcvisor
```

Open the URL Vite prints and choose **Try the sample: GrantDesk assistant** for a worked example. It has a signed first revision, a register update, a code check with contradictions, and reviewer comments.

## Test and build

```bash
npm test --workspace arcvisor        # rules, the sample, and the main flows in jsdom
npm run typecheck --workspace arcvisor
npm run build --workspace arcvisor   # static files in web/dist/, servable from any folder
```

## How it fits together

| Path | What it holds |
| --- | --- |
| `src/register.ts` | The register YAML, read at build time and parsed by arc-core in the browser |
| `src/store.ts` | The open assessment and the viewer's name and mode; autosaves to this browser |
| `src/lib/suggest.ts` | AI suggestions: accept, edit, dismiss. A suggestion counts only once a person accepts it |
| `src/lib/derived.ts` | What the pages compute from the register and the assessment |
| `src/pages/` | Overview, System, Capabilities, Risks, Controls, Residual risk, Sign-off and review |
| `src/sample/` | The GrantDesk sample, built against whichever register is bundled |

### The rules the screens follow

- **Level 0 applies with its risk.** It applies whenever a risk it covers applies, whatever the scores. It is implemented as-is, or waived only when the specific thing it concerns is not present in the system, with the evidence. The reviewer sees every waiver.
- **AI suggestions stay separate until decided.** Suggestions from the skill or ARCvisor sit apart from the record until a person accepts, edits or dismisses each one. Undecided suggestions block sign-off.
- **A contradicted Level 0 control blocks sign-off.** If the code contradicts a Level 0 entry, it blocks until the entry is fixed or the reviewer accepts the explanation.
- **The reviewer's verdict is separate from the deployment decision.** The reviewer requests changes or marks the revision reviewed. The acceptance authority approves, approves with conditions, or defers. Open comments don't block sign-off.
- **Signing locks the revision.** The next revision shows the reviewer every change since, and anything the register added.
