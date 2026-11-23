# RISK-048 · Compromise through the tool, skill, and dependency supply chain

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-048/

This risk arises when the tools, MCP servers, agent "skills" or plug-ins, prompt templates, and software packages an agent relies on are obtained through registries, marketplaces, package managers, or update channels that an attacker can seed, tamper with, or silently change after approval (the "rug pull"). Unlike the poisoning of a specific tool (RISK-006), the vector is the distribution channel itself, and agents increasingly perform installs and updates autonomously. As a result, malicious code or instructions reach production with the trust of a vetted dependency, as with the postmark-mcp backdoor, the mcp-remote remote-code-execution flaw, and marketplaces found to carry large numbers of malicious skills.

- Arises from: Tools (CMP-03)
- Failure mode: External Manipulation
- Type: Security
- Hazards: Data (HZ-01), Application (HZ-02)

## Controls

- CTRL-0091 (Level 0): Require verified provenance for tools, skills, and dependencies, and re-verify them on every update
- CTRL-0015 (Level 1): Treat all tool metadata and outputs as untrusted input requiring validation

## Crosswalks

- owasp_asi: ASI04
- owasp_agentic_threats: T17
- mitre_atlas: AML.T0010.005, AML.T0010.001, AML.T0115.002, AML.T0109

## Sources

- https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/
- https://morphisec.com/mcp-attack-chain/
- https://www.reco.ai/blog/openclaw-the-ai-agent-security-crisis-unfolding-right-now
