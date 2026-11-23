# RISK-052 · Automation bias and erosion of human oversight

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-052/

This risk arises when human approval steps stop providing meaningful review: overseers approve by default under volume (one large deployment measured users approving around 93% of permission prompts), lack the context or expertise to evaluate what the agent proposes, or use interfaces designed for speed rather than scrutiny. Controls that assume a considered human decision then give false assurance, and adversaries can exploit the trust users place in fluent, confident agents. As a result, high-impact actions proceed with nominal rather than actual oversight.

- Arises from: Monitoring and Traceability (DSN-03)
- Failure mode: Safeguard Failure
- Type: Safety, Security
- Hazards: Application (HZ-02), Compromised user safety (HZ-08)

## Controls

- CTRL-0049 (Level 0): Implement UI/UX cues to communicate the risk of hallucination to users
- CTRL-0094 (Level 0): Measure the quality of human oversight and redesign approval steps that have become rubber stamps
- CTRL-0042 (Level 1): Require explicit human confirmation before executing high-impact or irreversible tool actions

## Crosswalks

- owasp_asi: ASI09
- owasp_agentic_threats: T10
- mitre_atlas: AML.T0067, AML.T0046

## Sources

- https://www.anthropic.com/engineering/how-we-contain-claude
- https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf
- https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/
