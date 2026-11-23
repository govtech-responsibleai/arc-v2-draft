# RISK-059 · Prompt injection through inbound messages

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-059/

This risk arises when an agent reads messages or records that outside parties can write, such as email, chat, calendar invitations, support tickets, issue and pull-request comments, form submissions, or log entries, and treats instructions hidden in them as its own. Unlike a web page that the agent chooses to visit, a message arrives unasked and can wait until the agent processes it, so the attacker needs nothing more than the ability to send it. As a result, the agent may act on the attacker's behalf with the authority it holds, for example by changing configuration, transferring ownership of resources, publishing software, or operating connected devices, as when an injected issue title led a triage bot to compromise a software release, and hidden text in a calendar invitation led an assistant to operate smart-home devices. RISK-047 covers the case where the injected instruction causes data to leave the organisation.

- Arises from: Other Programmatic Interfaces (CAP-09)
- Failure mode: External Manipulation
- Type: Safety, Security
- Hazards: Data (HZ-01), Application (HZ-02), Compromised user safety (HZ-08)

## Controls

- CTRL-0019 (Level 0): Keep untrusted inputs out of system instructions, and enclose any untrusted content given to the model in delimiters marked as data
- CTRL-0062 (Level 0): Implement input guardrails to detect prompt injection and adversarial attacks
- CTRL-0090 (Level 1): Enforce data-flow and capability policies at runtime with a deterministic policy layer that separates untrusted content from privileged actions
- CTRL-0020 (Level 2): Use a dedicated LLM to extract required fields from inputs and filter out extraneous text or embedded instructions

## Crosswalks

- owasp_asi: ASI01
- owasp_agentic_threats: T6
- mitre_atlas: AML.T0051.001, AML.T0093

## Sources

- https://cline.bot/blog/post-mortem-unauthorized-cline-cli-npm
- https://www.codeintegrity.ai/blog/heroku
- https://www.theregister.com/2025/08/08/infosec_hounds_spot_prompt_injection/
- https://openai.com/index/hardening-atlas-against-prompt-injection/
