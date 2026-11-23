import { IMPACT, LEVEL_LABELS, LIKELIHOOD, STATUS_LABELS, VERDICT_LABELS, type Level, type RiskState, type Status, type Verdict } from 'arc-core';
import type { ReactNode } from 'react';

export function PageHead({ title, lede, children }: { title: string; lede?: ReactNode; children?: ReactNode }) {
  return (
    <div className="page-head">
      <div>
        <h1>{title}</h1>
        {lede && <p>{lede}</p>}
      </div>
      {children}
    </div>
  );
}

export const LevelChip = ({ level, long }: { level: Level; long?: boolean }) => (
  <span className={level === 0 ? 'chip chip-l0' : 'chip'}>{long ? LEVEL_LABELS[level] : `L${level}`}</span>
);

const VERDICT_CHIP: Record<Verdict, string> = { found: 'chip-green', partial: 'chip-amber', missing: 'chip-red', offcode: '', nofeature: '' };
const VERDICT_SHORT: Record<Verdict, string> = { found: 'Found', partial: 'Partly', missing: 'Not found', offcode: 'Outside the code', nofeature: 'Nothing to apply to' };

export const VerdictChip = ({ verdict, long }: { verdict: Verdict; long?: boolean }) => (
  <span className={`chip ${VERDICT_CHIP[verdict]}`}>{long ? VERDICT_LABELS[verdict] : VERDICT_SHORT[verdict]}</span>
);

export const StatusText = ({ status }: { status?: Status }) => <>{status ? STATUS_LABELS[status] : 'To do'}</>;

export function ScoreBadge({ state, impact, likelihood }: { state: RiskState; impact?: number | null; likelihood?: number | null }) {
  if (state === 'unscored') return <span className="score unscored">Unscored</span>;
  return <span className={`score ${state}`} title={`Impact ${impact}, likelihood ${likelihood}`}>{impact} · {likelihood}</span>;
}

export function ScoreSelect({ id, kind, value, onChange, disabled }: {
  id: string; kind: 'impact' | 'likelihood'; value: number | null | undefined; onChange: (v: number | null) => void; disabled?: boolean;
}) {
  const scale = kind === 'impact' ? IMPACT : LIKELIHOOD;
  return (
    <div className="field">
      <label className="label" htmlFor={id}>{kind === 'impact' ? 'Impact' : 'Likelihood'}</label>
      <select id={id} className="select" value={value ?? ''} disabled={disabled}
        onChange={(e) => onChange(e.target.value ? Number(e.target.value) : null)}>
        <option value="">Choose a score</option>
        {([5, 4, 3, 2, 1] as const).map((v) => <option key={v} value={v}>{v} · {scale[v][0]}</option>)}
      </select>
      {value ? <span className="small muted">{scale[value as 1 | 2 | 3 | 4 | 5][1]}</span> : null}
    </div>
  );
}

export function Empty({ children }: { children: ReactNode }) {
  return <div className="empty">{children}</div>;
}

/** Previous / next buttons for stepping through a filtered list. */
export function Stepper({ ids, current, onGo, noun }: { ids: string[]; current: string; onGo: (id: string) => void; noun: string }) {
  const i = ids.indexOf(current);
  if (i < 0) return null;
  return (
    <div className="row">
      <span className="small muted">{i + 1} of {ids.length}</span>
      <button className="btn btn-icon" type="button" aria-label={`Previous ${noun}`} disabled={i === 0} onClick={() => onGo(ids[i - 1])}>‹</button>
      <button className="btn btn-icon" type="button" aria-label={`Next ${noun}`} disabled={i === ids.length - 1} onClick={() => onGo(ids[i + 1])}>›</button>
    </div>
  );
}

/** Arrow-key movement through a list of items. */
export function listKeys(ids: string[], current: string | undefined, onGo: (id: string) => void) {
  return (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    const i = current ? ids.indexOf(current) : -1;
    const next = ids[Math.min(ids.length - 1, Math.max(0, i + (e.key === 'ArrowDown' ? 1 : -1)))];
    if (next) { e.preventDefault(); onGo(next); }
  };
}
