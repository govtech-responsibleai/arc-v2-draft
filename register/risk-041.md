# RISK-041 · Unintended overwriting or deletion of files or data

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-041/

This risk arises when an agent modifies, overwrites, or deletes files, database tables, or datasets without explicit user instruction or authorisation. As a result, critical information may be lost or corrupted, leading to data integrity issues, operational disruption, or the need for costly recovery efforts.

- Arises from: File and Data Management (CAP-11)
- Applies only at: CAP-11 at act with approval or above
- Failure mode: Agent Error
- Type: Security
- Hazards: Data (HZ-01)

## Controls

- CTRL-0076 (Level 0): Require human approval for destructive changes to databases, tables, or files that cannot be readily undone
- CTRL-0077 (Level 0): Enable versioning or soft-delete for managed object stores to allow recovery from accidental modifications
- CTRL-0094 (Level 0): Measure the quality of human oversight and redesign approval steps that have become rubber stamps
- CTRL-0075 (Level 1): Do not grant write access to agents unless strictly necessary

## Crosswalks

- owasp_asi: ASI02
- owasp_agentic_threats: T2
- mitre_atlas: 

## Sources

- https://syssec.dpss.inesc-id.pt/papers/pedro_icse25.pdf
