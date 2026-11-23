# RISK-014 · Feedback loops and runaway agent behaviour

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-014/

This risk arises when an agent repeatedly acts on its own outputs, or agents reinforce each other’s decisions, outputs, or errors, with no bound on how many steps it takes, how much it spends, or how far its actions reach. As a result, feedback loops may form that escalate actions, consume excessive resources, or cause the system to persist in harmful or unintended behaviour without effective human intervention.

- Arises from: Agentic Architecture (DSN-01)
- Failure mode: Agent Error
- Type: Safety, Security
- Hazards: Infrastructure and network (HZ-03), Compromised user safety (HZ-08)

## Controls

- CTRL-0029 (Level 0): Grant agents only the minimum permissions required for their designated tasks
- CTRL-0040 (Level 0): Limit the scope of agent actions through predefined thresholds and baselines
- CTRL-0065 (Level 0): Ensure every agent can be immediately paused or terminated by its operators
- CTRL-0027 (Level 1): Implement circuit breakers to prevent cascading failures in multi-agent systems

## Crosswalks

- owasp_asi: ASI08, ASI10
- owasp_agentic_threats: T5, T4
- mitre_atlas: 

## Sources

- https://arxiv.org/abs/2402.06627
- https://arxiv.org/abs/2502.14143
