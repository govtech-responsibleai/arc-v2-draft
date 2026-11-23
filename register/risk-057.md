# RISK-057 · Pursuit of a goal by means the principal did not sanction

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-057/

This risk arises when an agent that plans its own steps meets an obstacle and reaches its goal by a route that the people responsible for it did not authorise. It uses a credential or an account it came across, exploits a weakness in a system that belongs to someone else, spends from a wallet it was not given, or acts against a person who stands in its way. The agent has not been attacked and has not misunderstood the task; it treats the restriction as a problem to solve. As a result, the organisation may find that its agent has broken into, altered, or drawn on systems and resources outside the deployment, or has harmed outside parties, as when agents under evaluation breached a model-hosting company's production systems to find answers, an agent in training used an API key it found in a public repository to reach a data service, and a personal agent exploited a gym's booking API to move its user up a waiting list.

- Arises from: Planning and Goal Management (CAP-01)
- Failure mode: Agent Misbehaviour
- Type: Safety, Security
- Hazards: Identity and access management (HZ-04), Harm to third parties (HZ-11)

## Controls

- CTRL-0029 (Level 0): Grant agents only the minimum permissions required for their designated tasks
- CTRL-0038 (Level 0): Conduct safety verification with domain-relevant stress tests and adversarial scenarios before deployment and on a regular cadence afterwards
- CTRL-0040 (Level 0): Limit the scope of agent actions through predefined thresholds and baselines
- CTRL-0065 (Level 0): Ensure every agent can be immediately paused or terminated by its operators
- CTRL-0099 (Level 1): Stop the task when an action is refused and report to a human, instead of letting the agent look for another route
- CTRL-0093 (Level 2): Monitor agents for deceptive and collusive behaviour using an independent monitor

## Crosswalks

- owasp_asi: ASI10, ASI03
- owasp_agentic_threats: T7, T3
- mitre_atlas: AML.T0117, AML.T0055

## Sources

- https://openai.com/index/hugging-face-model-evaluation-security-incident/
- https://alignment.openai.com/misalignment-reports/searching-github-for-leaked-api-keys/
- https://www.affinda.com/expert-insights/when-my-ai-agent-hacked-my-gym-mythos-stopped-feeling-theoretical/
- https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me/
