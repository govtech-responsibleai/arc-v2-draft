# RISK-037 · Exposure of sensitive data

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-037/

This risk arises when an agent operating a computer interface accesses websites or applications that contain personally identifiable or sensitive information, particularly when authenticated as a user or organisation. As a result, the agent may inadvertently view, process, or disclose confidential data beyond its intended scope or authorisation.

- Arises from: Computer Use (CAP-08)
- Failure mode: Agent Error
- Type: Safety, Security
- Hazards: Data (HZ-01), Compromised user safety (HZ-08)

## Controls

- CTRL-0047 (Level 0): Implement output guardrails to detect and redact personally identifiable information
- CTRL-0066 (Level 0): Ensure "take over" mode is activated when entering sensitive data
- CTRL-0089 (Level 0): Enforce default-deny network egress for agent runtimes, allowing only approved destinations
- CTRL-0097 (Level 0): Do not give one agent untrusted content, access to sensitive data, and an unrestricted outbound channel at once; remove one, or gate the outbound channel outside the agent

## Crosswalks

- owasp_asi: ASI02
- owasp_agentic_threats: T2
- mitre_atlas: 

## Sources

- https://arxiv.org/html/2506.00618v3
