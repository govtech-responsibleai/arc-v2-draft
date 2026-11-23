# RISK-007 · Lack of input sanitisation

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-007/

This risk arises when inputs passed from the agent to tools are not properly validated or sanitised, allowing malformed or malicious data to be processed. As a result, tools may be exploited through injection attacks, unintended command execution, or data corruption.

- Arises from: Tools (CMP-03)
- Failure mode: Tool or Resource Malfunction
- Type: Safety, Security
- Hazards: Data (HZ-01), Application (HZ-02), Compromised user safety (HZ-08)

## Controls

- CTRL-0015 (Level 1): Treat all tool metadata and outputs as untrusted input requiring validation

## Crosswalks

- owasp_asi: ASI02, ASI05
- owasp_agentic_threats: T2, T11
- mitre_atlas: AML.T0053, AML.T0050

## Sources

- https://arxiv.org/abs/2503.12188v1
- https://www.cve.org/CVERecord?id=CVE-2024-7042
