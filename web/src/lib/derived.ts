// Everything the pages compute from the register and the open assessment, computed once per change.
import {
  assessApplicability, impliedCapabilities, presentCapabilities, type Applicability, type Implied,
  applicableRisks, blockers, changesSinceSignoff, controlsInScope, isContradicted, pendingSuggestions, progress,
  registerDiff, residualItems, riskState, type Assessment, type Blocker, type Change, type Progress, type RegisterDiff,
  type ResidualItem, type RiskState, type ScopedControl, type Section,
} from 'arc-core';
import { useMemo } from 'react';
import { REGISTER as reg } from '../register';
import { useAssessment } from '../store';

export interface Derived {
  /** Profile (context per capability), the risks left out for authority, and the combination checks. */
  app: Applicability;
  /** Capabilities the present ones give the system, that are not marked present. */
  implied: Implied[];
  risks: string[];
  state: Record<string, RiskState>;
  scope: ScopedControl[];
  scopeById: Record<string, ScopedControl>;
  blockers: Blocker[];
  progress: Record<Exclude<Section, 'signoff'>, Progress>;
  residual: ResidualItem[];
  diff: RegisterDiff | null;
  changes: Change[];
  pending: string[];
  contradicted: string[];
  signed: boolean;
}

export function derive(a: Assessment): Derived {
  const risks = applicableRisks(reg, a);
  const scope = controlsInScope(reg, a, risks);
  const diff = registerDiff(reg, a);
  return {
    app: assessApplicability(reg, a),
    implied: impliedCapabilities(reg, presentCapabilities(a)),
    risks,
    state: Object.fromEntries(risks.map((r) => [r, riskState(a, r)])),
    scope,
    scopeById: Object.fromEntries(scope.map((c) => [c.id, c])),
    blockers: blockers(reg, a),
    progress: progress(reg, a),
    residual: residualItems(reg, a, scope),
    diff: diff && !diff.empty ? diff : null,
    changes: changesSinceSignoff(reg, a),
    pending: pendingSuggestions(a),
    contradicted: scope.filter((c) => isContradicted(a, c.id)).map((c) => c.id),
    signed: !!a.signoff.signedAt,
  };
}

export function useDerived(): Derived {
  const a = useAssessment();
  return useMemo(() => derive(a), [a]);
}
