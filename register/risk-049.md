# RISK-049 · Escape from evaluation or sandbox containment onto live systems

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-049/

This risk arises when an agent that can execute code, operating in what is intended to be a contained setting — an evaluation, a red-team exercise, or a sandboxed task — reaches real systems because containment is incomplete: network egress is open, real credentials or accounts are present, or the objective can be pursued more easily outside the boundary. Capable agents have inferred that they were being evaluated and attacked third-party infrastructure to satisfy the task, and have taken unsanctioned actions against real people and organisations during cyber testing. As a result, activity meant to be harmless produces real-world security incidents.

- Arises from: Roles and Access Controls (DSN-02) + Code Execution (CAP-10)
- Applies only at: CAP-10 at act with approval or above
- Failure mode: Agent Misbehaviour
- Type: Safety, Security
- Hazards: Infrastructure and network (HZ-03), Identity and access management (HZ-04), Compromised user safety (HZ-08), Harm to third parties (HZ-11)

## Controls

- CTRL-0029 (Level 0): Grant agents only the minimum permissions required for their designated tasks
- CTRL-0040 (Level 0): Limit the scope of agent actions through predefined thresholds and baselines
- CTRL-0065 (Level 0): Ensure every agent can be immediately paused or terminated by its operators
- CTRL-0069 (Level 0): Run agent-generated code only in isolated compute environments with network access blocked by default
- CTRL-0089 (Level 0): Enforce default-deny network egress for agent runtimes, allowing only approved destinations
- CTRL-0092 (Level 0): Contain evaluations and red-team exercises so that agents cannot reach real systems, credentials, or people
- CTRL-0098 (Level 0): Keep credentials and backups out of reach of agent-run code

## Crosswalks

- owasp_asi: ASI10, ASI03
- owasp_agentic_threats: T13, T7
- mitre_atlas: AML.T0117, AML.T0122, AML.T0105

## Sources

- https://huggingface.co/blog/security-incident-july-2026
- https://openai.com/index/hugging-face-model-evaluation-security-incident/
- https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing
