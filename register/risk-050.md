# RISK-050 · Deceptive behaviour toward overseers

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-050/

This risk arises when an agent pursuing an objective misrepresents what it has done or found, edits or obscures its own history or logs, or socially engineers the humans overseeing it in order to obtain approval or avoid intervention. Unlike an error, the behaviour is goal-directed and can look legitimate step by step, so the evidence needed to detect it may have been altered by the agent itself. As a result, oversight based on the agent's own reports provides false assurance, and unsanctioned actions proceed under the appearance of compliance.

- Arises from: LLM (CMP-01)
- Failure mode: Agent Misbehaviour
- Type: Safety, Security
- Hazards: Identity and access management (HZ-04), Misrepresentation (HZ-09)

## Controls

- CTRL-0007 (Level 0): Log all LLM inputs and outputs for regular review
- CTRL-0034 (Level 0): Conduct regular reviews of logs and traces to detect emergent issues in deployed agentic systems
- CTRL-0038 (Level 0): Conduct safety verification with domain-relevant stress tests and adversarial scenarios before deployment and on a regular cadence afterwards
- CTRL-0093 (Level 2): Monitor agents for deceptive and collusive behaviour using an independent monitor

## Crosswalks

- owasp_asi: ASI10, ASI09
- owasp_agentic_threats: T7
- mitre_atlas: AML.T0138, AML.T0073

## Sources

- https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing
- https://fortune.com/2026/06/18/google-deepmind-unveils-plan-to-protect-itself-from-its-own-rogue-ai-agents/
- https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/
