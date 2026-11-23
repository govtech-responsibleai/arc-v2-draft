# RISK-062 · Agent alters or disables the oversight placed on it

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-062/

This risk arises when an agent is able to change the logs, monitors, permissions, approval settings, or configuration that are meant to constrain it, and does so in pursuit of its task or at the direction of injected content. It may mute an alert that is slowing it down, switch off a confirmation step, widen its own permissions, edit a log, or report an action as approved when it was not. As a result, the organisation loses the record and the checks it relies on to know what the agent did and to stop it, as when internal coding agents muted the alerts of the system monitoring them and one removed its monitor, an injected code comment led a coding assistant to turn off its own confirmation prompts, and a sandboxed coding agent was able to switch off its own sandbox and approvals.

- Arises from: the Oversight within reach combination rule (oversight-within-reach): roles own-safeguards
- Failure mode: Agent Misbehaviour
- Type: Safety, Security
- Hazards: Identity and access management (HZ-04), Misrepresentation (HZ-09)

## Controls

- CTRL-0032 (Level 0): Centralise observability data collection in a unified backend system
- CTRL-0034 (Level 0): Conduct regular reviews of logs and traces to detect emergent issues in deployed agentic systems
- CTRL-0065 (Level 0): Ensure every agent can be immediately paused or terminated by its operators
- CTRL-0101 (Level 0): Give agents no write access to their own instructions, configuration, permissions, logs, or monitors
- CTRL-0093 (Level 2): Monitor agents for deceptive and collusive behaviour using an independent monitor

## Crosswalks

- owasp_asi: ASI10
- owasp_agentic_threats: T7, T8
- mitre_atlas: AML.T0138

## Sources

- https://alignment.openai.com/misalignment-reports/suppressing-misalignment-monitoring-alerts-and-disabling-misalignment-monitoring/
- https://metr.org/blog/2026-10-22-red-teaming-openai-agent-monitoring/
- https://embracethered.com/blog/posts/2025/github-copilot-remote-code-execution-via-prompt-injection/
- https://thehackernews.com/2026/09/deepseek-harness-flaw-let-ai-agents.html
