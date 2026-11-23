# RISK-033 · Leakage of transaction credentials

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-033/

This risk arises when credentials, tokens, or sensitive authentication information used to execute business transactions are exposed, mishandled, or improperly stored by an agent or its supporting systems. As a result, malicious parties may gain the ability to initiate unauthorised transactions, manipulate financial operations, or compromise transactional systems.

- Arises from: Business Transactions (CAP-06)
- Failure mode: Tool or Resource Malfunction
- Type: Safety, Security
- Hazards: Data (HZ-01), Identity and access management (HZ-04), Financial or contractual loss (HZ-10)

## Controls

- CTRL-0058 (Level 0): Restrict agents to proposing transactions whilst using a separate transaction controller for execution

## Crosswalks

- owasp_asi: ASI03
- owasp_agentic_threats: T3
- mitre_atlas: AML.T0083, AML.T0055

## Sources

- https://arxiv.org/pdf/2506.01055
