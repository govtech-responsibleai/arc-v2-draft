import { AUTHORITY_LABELS, elementName, groupRisks, IMPACT, isChosen, LIKELIHOOD, PRESETS, STATUS_LABELS, type Register, type Threshold } from 'arc-core';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { Heatmap } from '../components/Heatmap';
import { Evidence, Suggestion } from '../components/Suggestion';
import { Thread } from '../components/Thread';
import { Empty, LevelChip, listKeys, PageHead, ScoreBadge, ScoreSelect, Stepper, VerdictChip } from '../components/ui';
import { useDerived } from '../lib/derived';
import { href, selectItem, setQuery, useRoute } from '../lib/route';
import { accept, dismiss, isPending, touch } from '../lib/suggest';
import { REGISTER as reg } from '../register';
import { useAssessment, useStore } from '../store';

/** What a risk arises from: its elements, or the combination rule. */
export function origin(reg: Register, rid: string): string {
  const r = reg.risks[rid];
  if (r.combination) return `Combination: ${reg.combinations.rules[r.combination]?.name ?? r.combination}`;
  return r.element_ids.map((e) => elementName(reg, e)).join(' + ');
}

const FILTERS = [['', 'All'], ['priority', 'Priority'], ['unscored', 'Unscored'], ['below', 'Below'], ['new', 'New']] as const;

export function Risks({ param }: { param?: string }) {
  const a = useAssessment();
  const d = useDerived();
  const edit = useStore((s) => s.edit);
  const { query } = useRoute();
  const f = query.get('f') ?? '';
  const cell = query.get('cell');
  const [q, setQ] = useState('');
  const isNew = (r: string) => !!d.diff?.newRisks.includes(r);

  const keep = (r: string) => {
    if (f === 'new' && !isNew(r)) return false;
    if (f && f !== 'new' && d.state[r] !== f) return false;
    if (cell) {
      const [i, l] = cell.split('-').map(Number);
      if (a.risks[r]?.impact !== i || a.risks[r]?.likelihood !== l) return false;
    }
    if (q.trim() && !`${r} ${reg.risks[r].statement}`.toLowerCase().includes(q.trim().toLowerCase())) return false;
    return true;
  };
  const shown = d.risks.filter(keep);
  const groups = groupRisks(reg, shown);
  const ordered = [...groups.capability, ...groups.combination, ...groups.baseline];
  const selected = param && d.risks.includes(param) ? param : ordered[0];
  const countOf = (k: string) => (k === '' ? d.risks.length : k === 'new' ? (d.diff?.newRisks.length ?? 0) : d.risks.filter((r) => d.state[r] === k).length);

  return (
    <>
      <PageHead title="Risks" lede="Every baseline risk, plus the risks of the capabilities marked present. Scores set where Level 1–2 effort goes; they never remove a Level 0 control.">
        <div className="field" style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <label className="label" htmlFor="threshold">Threshold</label>
          <select id="threshold" className="select" style={{ width: 'auto' }} value={a.threshold} disabled={d.signed}
            onChange={(e) => edit((x) => { x.threshold = e.target.value as Threshold; })}>
            {(Object.keys(PRESETS) as Threshold[]).map((k) => <option key={k} value={k}>{PRESETS[k].label}: {PRESETS[k].rule}</option>)}
          </select>
        </div>
      </PageHead>

      <div className="row">
        <div className="search">
          <label className="sr-only" htmlFor="risk-search">Search risks</label>
          <input id="risk-search" className="input" type="search" placeholder="Search risks" value={q} onChange={(e) => setQ(e.target.value)} />
          <Search size={16} aria-hidden="true" />
        </div>
        {FILTERS.filter(([k]) => k !== 'new' || d.diff).map(([k, label]) => (
          <button key={k} type="button" className="fchip" aria-pressed={f === k && !cell} onClick={() => setQuery({ f: k || null, cell: null })}>
            {label}{k === 'new' && d.diff ? ` in ${d.diff.to}` : ''} <span className="num">{countOf(k)}</span>
          </button>
        ))}
        {cell && <button type="button" className="fchip" aria-pressed="true" onClick={() => setQuery({ cell: null })}>Impact {cell[0]}, likelihood {cell[2]} ✕</button>}
      </div>

      <div className="split">
        <section className="list" aria-label="Risks" onKeyDown={listKeys(ordered, selected, (id) => selectItem('risks', id))}>
          <div className="list-head"><span>{shown.length} of {d.risks.length} risks</span>{f === 'unscored' && <span className="muted" style={{ fontWeight: 400 }}>{shown.filter((r) => a.ai.risks[r]).length} with AI suggestions</span>}</div>
          <div className="list-scroll">
            {ordered.length === 0 && <Empty>No risks match.</Empty>}
            {([['Capability risks', groups.capability], ['Combinations of capabilities', groups.combination], ['Baseline risks', groups.baseline]] as const).map(([title, ids]) => ids.length > 0 && (
              <div key={title}>
                <div className="list-group">{title} · {ids.length}</div>
                {ids.map((r) => (
                  <a key={r} className="item" href={href(['risks', r], Object.fromEntries(query.entries()))} aria-current={r === selected ? 'true' : undefined}>
                    <span className="item-id">{r}</span>
                    <span className="item-body">
                      <span className="item-title">{reg.risks[r].statement}</span>
                      <span className="item-meta">{origin(reg, r)}{isNew(r) && <span className="chip chip-amber">New</span>}{a.threads[r]?.comments.length ? <span className="chip">{a.threads[r].comments.length} comments</span> : null}</span>
                    </span>
                    <span className="item-side">
                      <ScoreBadge state={d.state[r]} impact={a.risks[r]?.impact} likelihood={a.risks[r]?.likelihood} />
                      {isPending(a, 'risk', r) && <span className="chip chip-violet">AI</span>}
                    </span>
                  </a>
                ))}
              </div>
            ))}
          </div>
          {d.app.below.length > 0 && !f && !cell && (
            <details style={{ borderTop: '1px solid var(--slate-3)' }}>
              <summary className="list-group" style={{ cursor: 'pointer', borderTop: 0 }}>Left out at the authority stated · {d.app.below.length}</summary>
              {d.app.below.map((b) => (
                <div key={b.id} className="item" style={{ cursor: 'default' }}>
                  <span className="item-id">{b.id}</span>
                  <span className="item-body"><span className="item-title">{reg.risks[b.id].statement}</span>
                    <span className="item-meta">Needs {b.capability} {elementName(reg, b.capability)} at {AUTHORITY_LABELS[b.needs].toLowerCase()} or above. <a href={href(['capabilities'])}>Change the authority</a></span></span>
                </div>
              ))}
            </details>
          )}
          <div style={{ padding: 16, borderTop: '1px solid var(--slate-3)' }}>
            <Heatmap a={a} ids={d.risks} selected={cell} onSelect={(c) => setQuery({ cell: c, f: null })} />
          </div>
        </section>
        {selected ? <RiskDetail key={selected} rid={selected} ordered={ordered} /> : <section className="detail"><Empty>Choose a risk.</Empty></section>}
      </div>
    </>
  );
}

function RiskDetail({ rid, ordered }: { rid: string; ordered: string[] }) {
  const a = useAssessment();
  const d = useDerived();
  const edit = useStore((s) => s.edit);
  const r = reg.risks[rid];
  const e = a.risks[rid] ?? {};
  const s = a.ai.risks[rid];
  const state = d.state[rid];
  const combo = r.element_ids.filter((x) => isChosen(reg, x)).length > 1;
  const set = (change: Partial<typeof e>) => edit((x) => { x.risks[rid] = { ...x.risks[rid], ...change }; touch(x, 'risk', rid); });
  const scaleLabel = (k: 'impact' | 'likelihood', v?: number | null) => (v ? `${v} · ${(k === 'impact' ? IMPACT : LIKELIHOOD)[v as 1 | 2 | 3 | 4 | 5][0]}` : '–');

  return (
    <article className="detail" aria-labelledby="risk-h">
      <div className="spread">
        <div className="row">
          <span className="mono small muted">{rid}</span>
          {d.diff?.newRisks.includes(rid) && <span className="chip chip-amber">New in {d.diff.to}</span>}
          <span className={state === 'priority' ? 'chip chip-accent' : state === 'unscored' ? 'chip chip-amber' : 'chip'}>
            {state === 'priority' ? 'Priority' : state === 'unscored' ? 'Unscored, counts as priority' : 'Below the threshold'}
          </span>
        </div>
        <Stepper ids={ordered} current={rid} onGo={(id) => selectItem('risks', id)} noun="risk" />
      </div>

      <div className="stack" style={{ gap: 10 }}>
        <h2 id="risk-h">{r.statement}</h2>
        <div className="meta">
          <span>Arises from <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>{r.combination ? <a href={href(['capabilities'])}>{origin(reg, rid)}</a> : origin(reg, rid)}</strong>{combo ? ', only together' : ''}</span>
          {r.failure_mode && <span>{r.failure_mode}</span>}
          {r.type?.length || r.hazards?.length ? <span>{[r.type?.join(' and '), r.hazards?.map((h) => reg.hazards[h]?.name).filter(Boolean).join(', ')].filter(Boolean).join(' · ')} {r.hazards?.length ? 'hazard' : ''}</span> : null}
        </div>
        <p className="desc">{r.description}</p>
      </div>

      {s && (
        <Suggestion kind="risk" id={rid} title="Suggested assessment" disabled={d.signed}
          summary={`Impact ${s.impact ?? '–'}, likelihood ${s.likelihood ?? '–'}`}
          onAccept={() => edit((x) => accept(x, 'risk', rid))}
          onEdit={() => { edit((x) => accept(x, 'risk', rid, 'edited')); setTimeout(() => document.getElementById(`imp-${rid}`)?.focus(), 0); }}
          onDismiss={() => edit((x) => dismiss(x, 'risk', rid))}>
          {s.context && <p>{s.context}</p>}
          <div className="grid-2">
            <div className="suggest-box"><span className="label">Impact</span><strong>{scaleLabel('impact', s.impact)}</strong>{s.impactReason && <span className="small muted">{s.impactReason}</span>}</div>
            <div className="suggest-box"><span className="label">Likelihood</span><strong>{scaleLabel('likelihood', s.likelihood)}</strong>{s.likelihoodReason && <span className="small muted">{s.likelihoodReason}</span>}</div>
          </div>
          <Evidence files={s.evidence} />
        </Suggestion>
      )}

      <section className="stack" style={{ gap: 12 }} aria-labelledby="yours-h">
        <h3 id="yours-h">Your assessment</h3>
        <div className="grid-2">
          <ScoreSelect id={`imp-${rid}`} kind="impact" value={e.impact} disabled={d.signed} onChange={(v) => set({ impact: v })} />
          <ScoreSelect id={`lik-${rid}`} kind="likelihood" value={e.likelihood} disabled={d.signed} onChange={(v) => set({ likelihood: v })} />
        </div>
        <div className="field">
          <label className="label" htmlFor={`ctx-${rid}`}>How it would happen in this system</label>
          <textarea id={`ctx-${rid}`} className="textarea" rows={3} value={e.context ?? ''} disabled={d.signed}
            placeholder={s && isPending(a, 'risk', rid) ? 'Accept the suggestion, or write your own' : 'Name the components or code paths involved'}
            onChange={(ev) => set({ context: ev.target.value })} />
        </div>
      </section>

      <section className="stack" aria-labelledby="ctl-h">
        <div className="spread"><h3 id="ctl-h">Controls for this risk <span className="muted" style={{ fontWeight: 400 }}>{r.controls.length}</span></h3></div>
        <div className="scroll-x">
          <table className="tbl">
            <thead><tr><th>Control</th><th>Level</th><th>Status</th><th>Code check</th></tr></thead>
            <tbody>
              {r.controls.filter((c) => reg.controls[c] && !reg.controls[c].superseded_by).map((c) => {
                const st = a.controls[c]?.status;
                const v = a.code?.checks?.[c];
                const inScope = d.scopeById[c];
                return (
                  <tr key={c}>
                    <td><a href={href(['controls', c])}><span className="mono small">{c}</span></a> {reg.controls[c].statement}</td>
                    <td><LevelChip level={reg.controls[c].level} /></td>
                    <td>{st ? STATUS_LABELS[st] : inScope?.group === 'optional' ? <span className="muted">Optional</span> : <span style={{ color: 'var(--amber)', fontWeight: 500 }}>To do</span>}</td>
                    <td>{v ? <VerdictChip verdict={v.verdict} /> : <span className="muted">–</span>}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <Thread id={rid} />
    </article>
  );
}
