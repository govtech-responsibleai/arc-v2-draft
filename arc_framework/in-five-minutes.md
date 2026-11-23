# ARC in five minutes

ARC, the Agentic Risk & Capability Framework, helps you find the safety and security risks in an agentic AI system and the technical controls that address them. Its starting point is simple: **a system's risks come from what it is made of and what it can do.** An agent that can only answer questions carries fewer risks than one that can run code, send official emails, or make payments.

ARC links a system's elements to risks and controls: 20 elements (components, design and capabilities, alone or in combination) give rise to 66 risks, which require 103 controls at three levels (46 at Level 0, 43 at Level 1, 14 at Level 2).

## 1. Elements: what the system is made of and can do

ARC describes any agentic system with 20 elements in three groups:

- **Components**, the parts of an agent and its connections: the LLM, its instructions, its tools, its memory, and the protocols that connect it to tool servers and agents that another party builds or operates.
- **Design**, how agents are put together: the agentic architecture, roles and access controls, and monitoring and traceability.
- **Capabilities**, what the system can do, in 12 types grouped as cognitive (such as planning and delegating to other agents), interaction (such as searching the internet, sending official communications, or making business transactions), and operational (such as executing code or managing files and data).

Every system has the design and the first three components. Memory and Protocols are conditional: a system has them only when it keeps information beyond a session, or connects to another party's tool servers or agents. Capabilities are what set one system apart from another. For each capability that acts on the world, ARC also records **how it is used**: its authority (from reading only to acting alone), whether its effects can be undone, and whether they reach outside the organisation. See [Elements](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/elements/).

## 2. Risks: what can go wrong

The [risk register](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/risk-register/) lists 66 risks. Each one arises from one or more elements through a **failure mode** (an agent errs or misbehaves, it is manipulated from outside or misused by the person it works for, or a tool, a resource or a safeguard fails) and results in **hazards**, the safety or security harm that follows.

Which risks apply to your system follows from its elements:

- Risks from the design and the first three components apply to every system. Those from Memory and Protocols apply only to systems that have them.
- A capability's risks apply when your system has that capability. A few apply only when it is used with enough authority: a payment the agent makes, not one it only proposes.
- Some risks arise from a combination. A few name the elements they need, and apply when the system has all of them. Others arise from a **combination rule**, such as the lethal trifecta of untrusted content, sensitive data and an outbound channel: they apply whenever the system's capabilities can together complete the combination, whichever capabilities supply the parts.

See [Risks](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/risks/) and [Capability combinations](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/capability-combinations/).

## 3. Controls: what to put in place

Each risk comes with recommended technical controls, 103 in all, at three levels:

- **Level 0**: adopt as is wherever the risk applies. A Level 0 control is waived only when the capability or component it concerns is absent from the system, recorded with evidence.
- **Level 1**: adopt, or adapt meaningfully to your system.
- **Level 2**: good practice to consider, especially for high-risk systems.

Some controls are stricter where a capability is used with more authority: logging every tool call, for example, is Level 0 for an agent that acts alone. Each control also says where it is enforced, who owns it, what evidence shows it is in place, and how to test it.

Organisations score risks by impact and likelihood to decide which Level 1 and Level 2 controls to require. Scoring never waives a Level 0 control. Whatever the controls don't fully address is **residual risk**. You record each residual risk with a strategy to accept, monitor or mitigate it, and take it to senior stakeholders when it is too high. See [Controls](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/controls/).

## How to use ARC

**If you set policy for an organisation**, adapt ARC to your context: customise the capabilities, contextualise the risks, adapt the controls, and set relevance thresholds, then pilot with a few real systems before scaling up. Keep your version as an [overlay](https://govtech-responsibleai.github.io/arc-v2-draft/implementation/for-governance-teams/#keeping-your-version-as-an-overlay), one file of changes to the ARC register, so that you can take up each new ARC version. See [For governance teams](https://govtech-responsibleai.github.io/arc-v2-draft/implementation/for-governance-teams/).

**If you build or assess a system**, follow four steps: identify its capabilities and how it uses them, evaluate the risks that apply, implement the controls, and assess the residual risk. Record the result in the [assessment template](https://govtech-responsibleai.github.io/arc-v2-draft/implementation/assessment-template/). See [For AI developers](https://govtech-responsibleai.github.io/arc-v2-draft/implementation/for-ai-developers/).

**If you are building with agents**, the register is available as [plain text](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/register-full-text/) with a link for every entry, as YAML in the [repository](https://github.com/govtech-responsibleai/arc-v2-draft/tree/main/arc-risk-register), and through an [Agent Skill](https://github.com/govtech-responsibleai/arc-v2-draft/tree/main/skills) that lets a coding agent assess the system it is building.

## Go deeper

- [Introduction](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/introduction/): why ARC is built around capabilities, and how it relates to other frameworks
- [Crosswalks](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/crosswalks/): how ARC's risks and controls map to OWASP, CSA, IMDA, MITRE ATLAS and the Five Eyes guidance on agentic AI
- [Keeping the register current](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/keeping-current/): how the register is checked against reported incidents
- [Changelog](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/changelog/): what changed in each version of the register
- [Glossary](https://govtech-responsibleai.github.io/arc-v2-draft/glossary/): every term, defined once
