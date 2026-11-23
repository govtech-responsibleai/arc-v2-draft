# CAP-02 · Agent Delegation

ARC element (capability, Cognitive), register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/cap-02/

The capability to assign subtasks to other agents and coordinate their activities to achieve broader goals. This includes identifying which components are best suited for specific tasks, issuing clear instructions, managing inter-agent dependencies, and monitoring performance or failures. A system has this capability whenever more than one agent works on a task, whether an agent decides the hand-offs or they are fixed in the workflow, and whether the other agents belong to the same system or are operated by another party, including agents it transacts with as counterparties.

## Risks that arise from it

- RISK-012: Cascading errors in multi-agent architectures
- RISK-013: Man-in-the-middle attacks between agents
- RISK-021: Incorrect task delegation between agents
- RISK-022: Malicious or manipulative use of delegated agents
- RISK-051: Unsanctioned coordination between agents
- RISK-053: Dependence on third-party agents as counterparties or delegates
- RISK-063: Authority passing between agents without a check
