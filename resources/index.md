# Resources

Beyond the [technical governance framework](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/introduction/) and [implementation guide](https://govtech-responsibleai.github.io/arc-v2-draft/implementation/), we have also developed additional tools and resources to help organisations understand and get started with using the ARC framework to govern their agentic AI systems. 

| Resource | Target Audience | Description |
| --- | --- | --- |
| [ARCvisor](#arcvisor) | AI governance teams, developers | Check, review and sign an assessment, with the evidence the ARC skill found in the code |
| [Technical Paper](https://govtech-responsibleai.github.io/arc-v2-draft/assets/ARC_Framework-Paper-IASEAI_2026.pdf) | AI governance teams, academia | In-depth technical details and research foundations |
| [Baseline Risk Register](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/risk-register/) | AI governance teams, developers | Interactive exploration of 66 risks and 103 controls ([full text](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/register-full-text/); [machine-readable YAML](https://github.com/govtech-responsibleai/arc-v2-draft/tree/main/arc-risk-register)) |
| [ARC Assessment Skill](https://github.com/govtech-responsibleai/arc-v2-draft/tree/main/skills) | Developers using coding agents | An Agent Skill that lets a coding agent assess the system it is building: capabilities from the code, applicable risks and controls from the register, implementation gaps, and a drafted assessment |
| [Assessment Template](https://govtech-responsibleai.github.io/arc-v2-draft/implementation/assessment-template/) | AI developers, governance teams | Record of a per-system assessment: capabilities, applicable risks, controls with evidence, residual risks, sign-off |
| [Changelog](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/changelog/) | Everyone using the register | What changed in each register version, and the versioning policy |
| Presentation slides (pending) | General AI-literate audience | High-level overview of the ARC framework |

## ARCvisor

ARCvisor is where people check, decide and sign an ARC assessment. The [ARC skill](https://github.com/govtech-responsibleai/arc-v2-draft/tree/main/skills) reads a system's code in the developer's coding agent and writes `docs/arc/assessment.arc.json`. ARCvisor opens that file and keeps the record:

- the system's capabilities and the context each is used in
- the risks that apply, with their scores
- each control's status and evidence
- the residual risks, and who accepted them
- the reviewer's comments and the sign-off

[Open ARCvisor](https://govtech-responsibleai.github.io/arc-v2-draft/arcvisor) [Source on GitHub](https://github.com/govtech-responsibleai/arc-v2-draft/tree/main/web)

- **The register's own rules.** ARCvisor and the skill share one implementation of what applies to a system (`packages/arc-core`). A test checks that it gives the skill's answer for 400 systems.
- **AI suggestions stay suggestions.** Whatever the skill or an AI suggests is accepted, edited or dismissed one item at a time. Nothing it wrote counts until a person decides.
- **Evidence from the code.** Each control shows what the code check found, with the lines it rests on. A Level 0 entry that the code contradicts blocks sign-off until it is fixed or the reviewer accepts the explanation.
- **Review in the same place.** It has comment threads and the reviewer's verdict. It also shows what changed since the last signed revision, and what a new register version adds.
- **Nothing leaves the browser.** Assessments are saved in the browser and in files you keep. There is no server.

The first version of ARCvisor was a conversational assistant, described in the [ARCvisor preprint](https://govtech-responsibleai.github.io/arc-v2-draft/assets/ARCvisor-Preprint_2025.pdf). Its code stays in `app/` until the new app replaces it.

## Contributing to the register 🤝

The register is a living document and we welcome proposals for new risks, new controls, corrections, and crosswalks. The bar is the same one we hold ourselves to: a risk must be supported by academic research or a documented industry incident, and a control must be actionable, composable, and measurable. See [CONTRIBUTING.md](https://github.com/govtech-responsibleai/arc-v2-draft/blob/main/CONTRIBUTING.md) for the entry format, the validator, and the pull-request flow, or [open an issue](https://github.com/govtech-responsibleai/arc-v2-draft/issues) if you would rather describe the proposal and let us draft it.
