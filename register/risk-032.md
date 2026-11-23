# RISK-032 · Unauthorised execution of business transactions

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-032/

This risk arises when an agent initiates, authorises, or executes business transactions outside predefined approval thresholds, roles, or authorisation limits. As a result, the organisation may be exposed to unintended financial losses, binding contractual obligations, or operational commitments that were not properly sanctioned.

- Arises from: Business Transactions (CAP-06)
- Applies only at: CAP-06 at act with approval or above
- Failure mode: Agent Error
- Type: Safety, Security
- Hazards: Application (HZ-02), Identity and access management (HZ-04), Financial or contractual loss (HZ-10)

## Controls

- CTRL-0056 (Level 0): Require explicit human confirmation before committing any business transaction outside limits that an accountable human has pre-authorised
- CTRL-0058 (Level 0): Restrict agents to proposing transactions whilst using a separate transaction controller for execution
- CTRL-0094 (Level 0): Measure the quality of human oversight and redesign approval steps that have become rubber stamps
- CTRL-0057 (Level 2): Require out-of-band confirmation when transaction risk signals are elevated
- CTRL-0059 (Level 2): Apply fraud detection models or heuristics to agent-proposed transactions

## Crosswalks

- owasp_asi: ASI02, ASI01
- owasp_agentic_threats: T2, T6
- mitre_atlas: 

## Sources

- https://arxiv.org/abs/2503.16248
