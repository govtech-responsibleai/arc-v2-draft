# RISK-022 · Malicious or manipulative use of delegated agents

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-022/

This risk arises when an agent deliberately assigns tasks to other agents in ways intended to bypass controls, obscure responsibility, or achieve malicious objectives. As a result, delegated agents may be coerced into performing unauthorised actions, amplifying harmful behaviour or evading detection within the system.

- Arises from: Agent Delegation (CAP-02)
- Failure mode: Agent Misbehaviour
- Type: Safety, Security
- Hazards: Application (HZ-02), Identity and access management (HZ-04), Compromised user safety (HZ-08)

## Controls

- CTRL-0024 (Level 0): Define formal schemas for inter-agent messages and validate all messages against these schemas before processing
- CTRL-0041 (Level 0): Provide comprehensive descriptions for each tool including intended use, required inputs, and potential outputs
- CTRL-0008 (Level 1): Implement automated alerts when agent behaviour drifts from predefined thresholds
- CTRL-0025 (Level 1): Ensure all inter-agent communications are encrypted in transit and prohibit plaintext channels
- CTRL-0093 (Level 2): Monitor agents for deceptive and collusive behaviour using an independent monitor

## Crosswalks

- owasp_asi: ASI10, ASI03
- owasp_agentic_threats: T13, T14
- mitre_atlas: AML.T0118.001, AML.T0143

## Sources

- https://arxiv.org/abs/2507.06850
