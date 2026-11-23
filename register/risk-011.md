# RISK-011 · Sensitive data leakage across memory contexts

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-011/

This risk arises when the memory component retains or exposes sensitive information across sessions, tasks, or users with different scopes or authorisations. As a result, data may be inappropriately accessed or reused in unrelated contexts, leading to privacy breaches, confidentiality violations, or unauthorised disclosure.

- Arises from: Memory (CMP-04)
- Failure mode: Tool or Resource Malfunction
- Type: Safety, Security
- Hazards: Data (HZ-01), Compromised user safety (HZ-08)

## Controls

- CTRL-0021 (Level 0): Implement allowlists and denylists to restrict what categories of information can be written to the agent's persistent memory
- CTRL-0047 (Level 0): Implement output guardrails to detect and redact personally identifiable information
- CTRL-0023 (Level 2): Log all modifications to persistent memory with comprehensive source metadata for audit purposes

## Crosswalks

- owasp_asi: ASI06, ASI03
- owasp_agentic_threats: T1, T3
- mitre_atlas: 

## Sources

- https://arxiv.org/abs/2506.12699v2
