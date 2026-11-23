# RISK-061 · Dependence on a model provider

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-061/

This risk arises when an agentic system depends on a model that another party hosts, and that party withdraws it, changes it, limits access to it, or suffers an outage. A model can be retired at short notice, updated in ways that change how it calls tools or follows instructions, degraded by a fault on the provider's side that goes unannounced for weeks, or made unavailable by a commercial or regulatory decision. As a result, an agent may stop working, or may keep working while behaving differently from the system that was evaluated and approved, as when infrastructure faults at a provider silently degraded model output for weeks, a provider disabled two models for all customers following an export-control directive, and a regional degradation at a provider caused cascading failures in a customer-service agent product.

- Arises from: LLM (CMP-01)
- Failure mode: Tool or Resource Malfunction
- Type: Security
- Hazards: Application (HZ-02)

## Controls

- CTRL-0038 (Level 0): Conduct safety verification with domain-relevant stress tests and adversarial scenarios before deployment and on a regular cadence afterwards
- CTRL-0005 (Level 1): Conduct structured evaluation of multiple LLMs for instruction-following, performance, and safety before deployment
- CTRL-0103 (Level 1): Pin the model version, re-run evaluations before any model change, and keep a tested fallback

## Crosswalks

- owasp_asi: ASI08
- owasp_agentic_threats: 
- mitre_atlas: 

## Sources

- https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues
- https://www.anthropic.com/news/fable-mythos-access
- https://support.zendesk.com/hc/en-us/articles/10932821917082-Service-Incident-June-19-2026-AI-Agents-OpenAI-service-delays-and-error-issues
