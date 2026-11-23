# Glossary

Each term is defined once here and explained in full on the page linked from it.

## Agentic system

An AI system in which one or more agents, built on an LLM, plan and act towards a goal using tools, memory and other resources, with some autonomy. ARC assesses the whole system, not only its model. See [Introduction](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/introduction/).

## Element

One of the 20 parts ARC uses to describe an agentic system: a component, a design element or a capability. Every risk in the register arises from one or more elements. See [Elements](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/elements/).

## Component

A part of an agent and its connections: its LLM, instructions, tools, memory, or the protocols that connect it to other parties. Every agentic system has the first three. Memory and Protocols are conditional components. See [Components](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/elements/#components).

## Conditional component

A component that only some systems have. A system has Memory when it keeps information beyond a single session, or shares it across users or tasks, and Protocols when it connects to a tool server or agent that another party builds or operates. The risks of a conditional component apply only to systems that have it.

## Design

How agents are put together and governed: the agentic architecture, roles and access controls, and monitoring and traceability. Every agentic system has all three. See [Design](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/elements/#design).

## Capability

Something an agentic system can do on its own with the tools and resources it has, such as executing code or making business transactions. ARC has twelve, grouped as cognitive, interaction and operational. Capabilities are what set one system apart from another. See [Capabilities](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/elements/#capabilities).

## Authority

How far an agent goes without a person when it uses a capability: read, propose, act with approval, or act alone. Together with whether the capability's effects can be undone and whether they reach outside the organisation, it is the context in which the capability is used. Some risks apply only from a given authority, and some controls are stricter at higher ones. Where the context is not stated, ARC assumes the most cautious case. See [Context](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/elements/#context-how-a-capability-is-used).

## Risk

A way an agentic system can cause harm, arising from one or more of its elements through a failure mode and resulting in hazards. Each risk in the register has an ID such as RISK-034 and its own page. See [Risks](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/risks/) and [the register](https://govtech-responsibleai.github.io/arc-v2-draft/register/).

## Failure mode

How a risk comes about. ARC has six: the agent makes a mistake (agent error); it pursues its goal by means no one sanctioned (agent misbehaviour); someone deliberately makes it deviate (external manipulation); a tool or resource it relies on fails or is compromised (tool or resource malfunction); a safeguard around it is missing or too weak (safeguard failure); or the person or organisation it works for directs it to do harm (misuse by the principal). See [Failure modes](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/risks/#failure-modes).

## Hazard

The safety or security harm a risk results in, such as a data breach or compromised user safety. ARC lists eleven, HZ-01 to HZ-11. See [Hazards](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/risks/#hazards).

## Applicability

Whether a risk applies to a particular system. A risk applies when the system has all the elements it arises from, or, for a risk from a combination rule, when the system's capabilities can complete the combination. A few risks also need a capability to be used at a given authority. See [What applies to my system?](https://govtech-responsibleai.github.io/arc-v2-draft/explorer/)

## Baseline risk

A risk that arises only from the design and the components every system has, so it applies to every agentic system. Risks from Memory and Protocols are not baseline risks: they apply only to systems that have those components.

## Combination risk

A risk that arises from more than one element together. Some name the elements they need, and apply only to systems that have all of them; the register shows these with "+" between the elements. Others arise from a combination rule, such as the lethal trifecta of untrusted content, sensitive data and an outbound channel. These apply whenever a system's capabilities can together supply every part of the rule, whichever capabilities supply them. See [Capability combinations](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/capability-combinations/).

## Control

A technical measure that reduces the impact or the likelihood of a risk. Each control has an ID such as CTRL-0062, a level, and its own page. See [Controls](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/controls/).

## Level 0

A control to adopt as is in every system where its risk applies. Scoring never waives it. It is waived only when the capability or component it concerns is absent from the system, and the waiver is recorded with evidence. ARC also calls these cardinal controls. Some Level 1 controls become Level 0 where a capability is used at a high authority. See [Control levels](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/controls/#control-levels).

## Level 1

A control to adopt, or adapt meaningfully to the system, where its risk is relevant. ARC also calls these standard controls.

## Level 2

A good-practice control to consider, especially for high-risk systems. ARC also calls these best-practice controls.

## Waiver

Not adopting a Level 0 control because the capability or component it concerns is absent from the system, for example a control on MCP servers in a system that uses none. A waiver is recorded with evidence that the thing is absent.

## Relevance threshold

The impact and likelihood scores at which an organisation treats a risk as relevant to a system, and so requires its Level 1 and Level 2 controls. Each organisation sets its own. See [Define relevance criteria](https://govtech-responsibleai.github.io/arc-v2-draft/implementation/for-governance-teams/#step-4-define-relevance-criteria).

## Residual risk

The risk that remains after controls are in place. It is recorded with a strategy to accept, monitor or mitigate it, and taken to senior stakeholders when it is too high. See [Assess residual risks](https://govtech-responsibleai.github.io/arc-v2-draft/implementation/for-ai-developers/#step-4-assess-residual-risks).

## Contextualisation

Adapting ARC to an organisation: customising the capabilities, contextualising the risks, adapting the controls, and setting relevance thresholds, before teams assess their systems. See [For governance teams](https://govtech-responsibleai.github.io/arc-v2-draft/implementation/for-governance-teams/).

## Overlay

An organisation's version of the ARC register, kept as one file of changes, each tied to an entry by its ID. Whatever the overlay does not mention is inherited from the ARC register of the version it names, so the organisation can take up each new version. See [Keeping your version as an overlay](https://govtech-responsibleai.github.io/arc-v2-draft/implementation/for-governance-teams/#keeping-your-version-as-an-overlay).

## Crosswalk

A mapping from an ARC risk or control to the nearest item in another framework, such as the OWASP Top 10 for Agentic Applications. A crosswalk is not a claim that the two are the same. See [Crosswalks](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/crosswalks/).

## Register version

The version of the risk register, such as 2.0.0, following a stated versioning policy. Cite ARC with the register version and the entry ID. See [Changelog](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/changelog/).

## Retired entry

A risk or control that has been replaced. Its ID is never reused, and its page stays, pointing to the entry that replaces it, so that existing references still resolve. A retired entry applies to no system.
