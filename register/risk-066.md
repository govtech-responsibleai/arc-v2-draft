# RISK-066 · Personal data collected, kept, or passed on beyond what the task needs

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-066/

This risk arises when an agent gathers, keeps, or passes on more personal data than its task requires. It may index a whole mailbox or drive to answer one question and keep the index afterwards, record people who have not agreed to it, place personal details in a search query or in an API call to another company, or upload local files to a hosted service by default. No one need attack the agent for this to happen, and each step can look like ordinary tool use. As a result, personal data is held without a purpose, reaches third parties that have no right to it, or is published, in breach of data protection obligations, as when a coding assistant uploaded users' whole local repositories to a cloud service by default, a personal assistant kept indexed email in place after it was no longer needed, and agents posted users' images to public image-hosting sites.

- Arises from: File and Data Management (CAP-11)
- Failure mode: Agent Error
- Type: Security
- Hazards: Data (HZ-01)

## Controls

- CTRL-0047 (Level 0): Implement output guardrails to detect and redact personally identifiable information
- CTRL-0081 (Level 1): Implement input guardrails to detect personally identifiable information in data accessed by agents
- CTRL-0106 (Level 1): Minimise the personal data an agent sends through its tools, and set a retention period for what it keeps
- CTRL-0082 (Level 2): Do not grant agents access to personally identifiable or sensitive data unless strictly required

## Crosswalks

- owasp_asi: ASI02
- owasp_agentic_threats: T2
- mitre_atlas: 

## Sources

- https://www.reuters.com/legal/litigation/chinas-zai-disables-ai-coding-assistant-features-after-security-issue-2026-09-21/
- https://techcrunch.com/2026/08/24/instincts-powerful-ai-assistant-is-raising-privacy-and-security-concerns/
- https://www.scmp.com/news/us/science-technology/article/3368883/openai-says-its-ai-agents-posted-user-images-online-error
