# RISK-045 · Misconfiguration of system resources

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-045/

This risk arises when an agent incorrectly configures system settings, infrastructure resources, or operational parameters. As a result, system performance, reliability, or security may be degraded, leading to service disruptions or unintended operational behaviour.

- Arises from: System Management (CAP-12)
- Applies only at: CAP-12 at act with approval or above
- Failure mode: Agent Error
- Type: Security
- Hazards: Application (HZ-02), Infrastructure and network (HZ-03)

## Controls

- CTRL-0084 (Level 0): Set minimum and maximum limits on what agents can modify within system resources
- CTRL-0085 (Level 0): Log system health metrics and implement automated alerts for abnormal conditions

## Crosswalks

- owasp_asi: ASI02, ASI08
- owasp_agentic_threats: T2
- mitre_atlas: 

## Sources

- https://neurips.cc/virtual/2024/poster/97835
- https://arxiv.org/html/2507.10584v1
