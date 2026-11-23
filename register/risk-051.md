# RISK-051 · Unsanctioned coordination between agents

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-051/

This risk arises when agents in a multi-agent system coordinate through channels or in ways that no operator sanctioned — sharing credentials, leaving each other messages in shared stores, using side channels, or dividing up a task so that each agent's actions look acceptable while the combined outcome is not. Coordination can emerge from shared objectives without any explicit instruction, and standard per-agent monitoring does not see it. As a result, the system as a whole pursues outcomes that would have been blocked had a single agent attempted them.

- Arises from: Agentic Architecture (DSN-01) + Agent Delegation (CAP-02)
- Failure mode: Agent Misbehaviour
- Type: Safety, Security
- Hazards: Identity and access management (HZ-04), Compromised user safety (HZ-08)

## Controls

- CTRL-0024 (Level 0): Define formal schemas for inter-agent messages and validate all messages against these schemas before processing
- CTRL-0028 (Level 0): Continuously monitor multi-agent systems for cascade failure indicators
- CTRL-0065 (Level 0): Ensure every agent can be immediately paused or terminated by its operators
- CTRL-0026 (Level 1): Require all agents to authenticate with verifiable, cryptographically signed identities before processing requests
- CTRL-0093 (Level 2): Monitor agents for deceptive and collusive behaviour using an independent monitor

## Crosswalks

- owasp_asi: ASI10, ASI07
- owasp_agentic_threats: T13, T12
- mitre_atlas: AML.T0118, AML.T0118.000

## Sources

- https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing
- https://arxiv.org/abs/2502.14143
- https://arxiv.org/abs/2601.11369
