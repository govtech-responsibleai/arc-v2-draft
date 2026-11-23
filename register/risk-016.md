# RISK-016 · Unauthorised privilege escalation

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-016/

This risk arises when agents are able to gain elevated roles or permissions beyond those initially granted, whether through misconfiguration, exploitation, or unintended system behaviour. As a result, agents may bypass intended controls, access restricted resources, or execute actions that undermine system security and governance.

- Arises from: Roles and Access Controls (DSN-02)
- Failure mode: Safeguard Failure
- Type: Security
- Hazards: Identity and access management (HZ-04)

## Controls

- CTRL-0029 (Level 0): Grant agents only the minimum permissions required for their designated tasks
- CTRL-0032 (Level 0): Centralise observability data collection in a unified backend system
- CTRL-0030 (Level 1): Assign each agent a unique, verifiable identity with no shared credentials

## Crosswalks

- owasp_asi: ASI03
- owasp_agentic_threats: T3
- mitre_atlas: AML.T0053, AML.T0117

## Sources

- https://arxiv.org/abs/2503.15547
- https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/
