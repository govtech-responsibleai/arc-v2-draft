# RISK-010 · Poisoned memory

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-010/

This risk arises when the memory component of an agentic system is intentionally or inadvertently populated with malicious, misleading, or corrupted information. As a result, the agent may rely on compromised memory to make decisions, propagate false information, or exhibit persistent unsafe behaviour across interactions.

- Arises from: Memory (CMP-04)
- Failure mode: External Manipulation
- Type: Safety, Security
- Hazards: Data (HZ-01), Compromised user safety (HZ-08), Misrepresentation (HZ-09)

## Controls

- CTRL-0021 (Level 0): Implement allowlists and denylists to restrict what categories of information can be written to the agent's persistent memory
- CTRL-0022 (Level 1): Implement content filtering on writes to persistent memory to detect and block known unsafe content patterns
- CTRL-0023 (Level 2): Log all modifications to persistent memory with comprehensive source metadata for audit purposes

## Crosswalks

- owasp_asi: ASI06
- owasp_agentic_threats: T1
- mitre_atlas: AML.T0080.000, AML.T0070

## Sources

- https://arxiv.org/abs/2505.11548v2
- https://arxiv.org/abs/2402.07867
- https://openreview.net/pdf?id=6SIymOqJlc
