# RISK-017 · Delayed failure detection due to limited monitoring

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-017/

This risk arises when monitoring systems provide insufficient visibility into agent behaviour, system events, or execution outcomes. As a result, failures, anomalies, or unintended actions may go undetected for extended periods, increasing the impact and difficulty of remediation.

- Arises from: Monitoring and Traceability (DSN-03)
- Failure mode: Safeguard Failure
- Type: Safety, Security
- Hazards: Application (HZ-02), Compromised user safety (HZ-08)

## Controls

- CTRL-0032 (Level 0): Centralise observability data collection in a unified backend system
- CTRL-0033 (Level 1): Standardise trace attributes for agent operations using consistent semantic conventions

## Crosswalks

- owasp_asi: ASI08
- owasp_agentic_threats: T8
- mitre_atlas: 

## Sources

- https://arxiv.org/abs/2401.13138
