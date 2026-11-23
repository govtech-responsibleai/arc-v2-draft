# RISK-018 · Inability to audit failures due to missing decision traces

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-018/

This risk arises when monitoring systems do not capture sufficient reasoning steps, decision pathways, or execution context for agent actions. As a result, operators may be unable to reconstruct failures, understand why specific outcomes occurred, or conduct effective audits and post-incident reviews.

- Arises from: Monitoring and Traceability (DSN-03)
- Failure mode: Safeguard Failure
- Type: Security
- Hazards: Application (HZ-02)

## Controls

- CTRL-0032 (Level 0): Centralise observability data collection in a unified backend system
- CTRL-0034 (Level 0): Conduct regular reviews of logs and traces to detect emergent issues in deployed agentic systems

## Crosswalks

- owasp_asi: ASI08, ASI10
- owasp_agentic_threats: T8
- mitre_atlas: 

## Sources

- https://arxiv.org/abs/2411.05285
- https://github.com/open-telemetry/semantic-conventions-genai
