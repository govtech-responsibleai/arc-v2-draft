# RISK-058 · Instruction and configuration files as a way in

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-058/

This risk arises when an agent loads instructions, rules, settings, hooks, skills, or tool configuration from files that someone other than its operator can write: a rules file in a cloned repository, an instruction file in a downloads folder, a project-level settings file, or a tool configuration that the agent itself can edit. These files are read automatically, often before any trust prompt, and what they contain is treated as the operator's own instructions or runs as commands. As a result, anyone who can place or change such a file can direct the agent or run code on the machine it works on, and the change persists across sessions, as when malicious packages planted hidden instructions in coding assistants' instruction files, a cloned repository's settings took effect before the user was asked to trust it, and a crafted chat message led a coding agent to rewrite its own tool configuration.

- Arises from: Instructions (CMP-02)
- Failure mode: External Manipulation
- Type: Security
- Hazards: Data (HZ-01), Application (HZ-02)

## Controls

- CTRL-0019 (Level 0): Keep untrusted inputs out of system instructions, and enclose any untrusted content given to the model in delimiters marked as data
- CTRL-0091 (Level 0): Require verified provenance for tools, skills, and dependencies, and re-verify them on every update
- CTRL-0100 (Level 0): Load instruction, settings, and tool-configuration files only from locations the operator controls, and ask before using any that arrive with a workspace
- CTRL-0101 (Level 0): Give agents no write access to their own instructions, configuration, permissions, logs, or monitors

## Crosswalks

- owasp_asi: ASI01, ASI04
- owasp_agentic_threats: T6, T17
- mitre_atlas: AML.T0051.001, AML.T0010.005

## Sources

- https://socket.dev/blog/trapdoor-crypto-stealer-npm-pypi-crates
- https://research.checkpoint.com/2026/rce-and-api-token-exfiltration-through-claude-code-project-files-cve-2025-59536/
- https://nvd.nist.gov/vuln/detail/CVE-2025-54135
- https://www.pillar.security/blog/new-vulnerability-in-github-copilot-and-cursor-how-hackers-can-weaponize-code-agents
