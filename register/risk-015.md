# RISK-015 · Overly permissive roles and permissions

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-015/

This risk arises when agents are granted roles or permissions that exceed their intended responsibilities or operational needs. As a result, agents may access sensitive resources, invoke high-impact capabilities, or perform unauthorised actions that increase the likelihood of security, privacy, or operational failures.

- Arises from: Roles and Access Controls (DSN-02)
- Failure mode: Safeguard Failure
- Type: Security
- Hazards: Identity and access management (HZ-04)

## Controls

- CTRL-0029 (Level 0): Grant agents only the minimum permissions required for their designated tasks
- CTRL-0030 (Level 1): Assign each agent a unique, verifiable identity with no shared credentials

## Crosswalks

- owasp_asi: ASI03
- owasp_agentic_threats: T3
- mitre_atlas: AML.T0053

## Sources

- https://genai.owasp.org/llmrisk/llm062025-excessive-agency/
- https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services
