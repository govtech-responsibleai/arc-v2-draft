// AI suggestions sit in `a.ai` until a person decides. Accepting copies a suggestion into the record; the decision is
// kept in `a.prov` so the reviewer can see what the AI wrote, what people accepted, and what they changed.
import type { Assessment, SystemFieldKey } from 'arc-core';

export type Kind = 'system' | 'cap' | 'component' | 'risk' | 'control' | 'residual';

export const provKey = (kind: Kind, id: string): string => `${kind}.${id}`;

export function suggestionFor(a: Assessment, kind: Kind, id: string): unknown {
  switch (kind) {
    case 'system': return a.ai.system[id];
    case 'cap': return a.ai.caps[id];
    case 'component': return a.ai.components[id];
    case 'risk': return a.ai.risks[id];
    case 'control': return a.ai.controls[id];
    case 'residual': return a.ai.residual[id];
  }
}

export const decision = (a: Assessment, kind: Kind, id: string) => a.prov[provKey(kind, id)];

/** A suggestion exists and nobody has accepted, edited or dismissed it. */
export const isPending = (a: Assessment, kind: Kind, id: string): boolean =>
  suggestionFor(a, kind, id) !== undefined && decision(a, kind, id) === undefined;

const defined = <T extends object>(o: T): Partial<T> =>
  Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined && v !== '')) as Partial<T>;

/** Copy the suggestion into the record. `edited` when the person will change it straight away. */
export function accept(d: Assessment, kind: Kind, id: string, as: 'confirmed' | 'edited' = 'confirmed'): void {
  if (kind === 'system') {
    const s = d.ai.system[id];
    if (s !== undefined) d.system[id as SystemFieldKey] = s;
  } else if (kind === 'cap') {
    const s = d.ai.caps[id];
    if (s) d.caps[id] = { ...d.caps[id], ...defined({ present: s.present, providedBy: s.providedBy, approval: s.approval, reason: s.reason, evidence: s.evidence, authority: s.authority, irreversible: s.irreversible, external: s.external }) };
  } else if (kind === 'component') {
    const s = d.ai.components[id];
    if (s) d.components[id] = { ...d.components[id], ...defined({ present: s.present, reason: s.reason, evidence: s.evidence }) };
  } else if (kind === 'risk') {
    const s = d.ai.risks[id];
    if (s) d.risks[id] = { ...d.risks[id], ...defined({ context: s.context, impactReason: s.impactReason, likelihoodReason: s.likelihoodReason }), impact: s.impact ?? null, likelihood: s.likelihood ?? null };
  } else if (kind === 'control') {
    const s = d.ai.controls[id];
    if (s) d.controls[id] = { ...d.controls[id], ...defined({ how: s.how, evidence: s.evidence, proposal: s.proposal }) };
  } else {
    const s = d.ai.residual[id];
    if (s) d.residual[id] = { ...d.residual[id], ...defined({ scenario: s.scenario, actions: s.actions }), impact: s.impact ?? null, likelihood: s.likelihood ?? null };
  }
  d.prov[provKey(kind, id)] = as;
}

export function dismiss(d: Assessment, kind: Kind, id: string): void {
  d.prov[provKey(kind, id)] = 'dismissed';
}

/**
 * A person changed a field. If the AI wrote it, or a suggestion for it was waiting or accepted, the record is now
 * the person's own words.
 */
export function touch(d: Assessment, kind: Kind, id: string): void {
  const k = provKey(kind, id);
  const p = d.prov[k];
  if (p === 'ai' || p === 'confirmed' || (p === undefined && suggestionFor(d, kind, id) !== undefined)) d.prov[k] = 'edited';
}
