# ARC Framework 2.0: draft for review

> **This is a draft, not the published framework.** The published Agentic Risk & Capability (ARC) Framework is version 1.3.0, at <{OFFICIAL_SITE}>. Please do not cite or adopt this draft. It will change.

This repository holds draft {DRAFT} of version 2.0 of the ARC risk register and its documentation (`{VERSION}`, {DATE_LONG}). GovTech Singapore's AI Practice is asking for comments before version 2.0 is finalised. The repository is temporary and will be archived when 2.0 is published.

## Read the draft

The draft site is **<{SITE}>**. It works like the published site, and carries a banner on every page.

If you have fifteen minutes, read these three pages:

1. [What changes in 2.0]({SITE}arc_framework/changelog/#v2-0-0) lists each change in a paragraph and says how to migrate an assessment from 1.x.
2. [Elements]({SITE}arc_framework/elements/) has the new Protocols component and the way the use of a capability is recorded.
3. [Capability combinations]({SITE}arc_framework/capability-combinations/) has the rules for capabilities that are dangerous together.

If you have longer, the [worked examples]({SITE}implementation/for-ai-developers/) apply the whole method to three systems, and the [register]({SITE}arc_framework/risk-register/) holds every risk and control.

## What changes in 2.0

Version 2.0 changes the model, so an assessment written against 1.x needs migrating. The register goes from 55 to 66 risks, from 95 to 103 controls, and from 19 to 20 elements.

| Change | What it does | Where to read it |
| --- | --- | --- |
| Protocols | A fifth component, for connections to tool servers and agents that another party builds or operates | [Elements]({SITE}arc_framework/elements/) |
| Conditional components | The risks of Memory and Protocols apply only to systems that have them | [Elements]({SITE}arc_framework/elements/) |
| How a capability is used | Each capability that acts on the world is recorded with its authority (read, propose, act with approval, act alone) and whether its effects are irreversible or external. Some risks and control levels depend on this | [Elements]({SITE}arc_framework/elements/#context-how-a-capability-is-used) |
| Combination rules | A risk comes into scope when a system's capabilities can together complete a dangerous combination, whichever capabilities supply the parts. There are two rules: the lethal trifecta, and oversight within reach | [Capability combinations]({SITE}arc_framework/capability-combinations/) |
| Failure modes and hazards | Six failure modes in place of three, and two new hazards | [Risks]({SITE}arc_framework/risks/) |
| New risks and controls | Twelve risks (RISK-056 to RISK-067) and ten controls (CTRL-0098 to CTRL-0107), written from reported incidents | [Full-text register]({SITE}arc_framework/register-full-text/) |
| Control fields | Every control says where it is enforced, who owns it, when in the lifecycle it applies, what evidence shows it is in place, and how to test it. Every control cites its sources | [Controls]({SITE}arc_framework/controls/) |
| Overlays | An organisation keeps its own version of the register as one file of changes | [For governance teams]({SITE}implementation/for-governance-teams/#keeping-your-version-as-an-overlay) |
| Crosswalks | MITRE ATLAS and the Five Eyes guidance on agentic AI are added | [Crosswalks]({SITE}arc_framework/crosswalks/) |
| Upkeep | How the register is kept in step with reported incidents | [Keeping the register current]({SITE}arc_framework/keeping-current/) |

## How to comment

Open an issue in this repository:

- [Comment on a risk, control or element]({REPO_URL}/issues/new?template=1-entry.yml)
- [Comment on the model, the method or the guides]({REPO_URL}/issues/new?template=2-model.yml)

One point per issue makes it easier for us to reply. Please quote the ID of the entry you are commenting on. Issues in this repository are public.
{CONTACT_LINE}{DEADLINE_LINE}
## Try it on a system

The [assessment template]({SITE}implementation/assessment-template/) can be filled in by hand. The assessment script lists the risks and controls that apply to a set of capabilities. It needs Python 3 and nothing else:

```bash
git clone {REPO_URL}
cd {REPO}
python3 skills/arc-assessment/scripts/arc.py --register arc-risk-register assess --profile examples/systems/fact-checker.yaml
```

`examples/systems/` holds the profiles of the four example systems used in the documentation. Copy one to describe your own.

## What this draft does not include

- **ARCvisor.** The assessment app in `app/` reads the 2.0 register but does not yet use conditional components, how a capability is used, or overlays.
- **The interactive register.** It does not yet show the new control fields. They are in `arc-risk-register/controls.yaml`.
- **The papers.** The technical papers describe version 1.0.
{INCIDENTS_NOTE}
## What happens next

We will reply on the issues. A revised draft, if there is one, will be published here under a new label (`2.0.0-draft.2`), and the differences between drafts can be seen by comparing their tags. When version 2.0 is published on the [ARC site]({OFFICIAL_SITE}), this repository will be archived.

## Licence

The same as the published framework; see `LICENSE`.
