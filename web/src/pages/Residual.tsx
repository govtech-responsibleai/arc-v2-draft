import { residualDone } from 'arc-core';
import { Suggestion } from '../components/Suggestion';
import { Empty, PageHead, ScoreSelect } from '../components/ui';
import { useDerived } from '../lib/derived';
import { href } from '../lib/route';
import { accept, dismiss, touch } from '../lib/suggest';
import { REGISTER as reg } from '../register';
import { useAssessment, useStore } from '../store';

const STRATEGY: [('accept' | 'monitor' | 'mitigate'), string][] = [['accept', 'Accept'], ['monitor', 'Monitor'], ['mitigate', 'Mitigate']];

export function Residual() {
  const a = useAssessment();
  const d = useDerived();
  const edit = useStore((s) => s.edit);
  const done = d.residual.filter((i) => residualDone(a.residual[i.rid])).length;
  return (
    <>
      <PageHead title="Residual risk" lede="Built from the priority risks and from any Level 1–2 control not adopted. For each, say what can still go wrong with the controls in place, and who accepts it." />
      <section className="panel spread" style={{ padding: '12px 16px' }}>
        <span><strong className="num">{done} of {d.residual.length}</strong> have a scenario, a strategy and an owner</span>
        <span className="small muted">Escalate any residual Impact 5, any regulatory exposure, and any risk with no strategy.</span>
      </section>
      {d.residual.length === 0 && <div className="panel"><Empty>Nothing here yet. Priority risks appear here once they are scored.</Empty></div>}
      <div className="stack" style={{ gap: 12 }}>
        {d.residual.map((i) => {
          const e = a.residual[i.rid] ?? {};
          const s = a.ai.residual[i.rid];
          const set = (change: Partial<typeof e>) => edit((x) => { x.residual[i.rid] = { ...x.residual[i.rid], ...change }; touch(x, 'residual', i.rid); });
          const id = (p: string) => `${p}-${i.rid}`;
          return (
            <article key={i.rid} className="panel panel-pad" aria-labelledby={id('h')} style={residualDone(e) ? { borderColor: 'var(--green-line)' } : undefined}>
              <div className="stack" style={{ gap: 6 }}>
                <h2 id={id('h')} style={{ fontSize: 16 }}><a href={href(['risks', i.rid])} className="mono small">{i.rid}</a> {reg.risks[i.rid].statement}</h2>
                <div className="row">{i.why.map((w) => <span key={w} className="chip">{w}</span>)}</div>
              </div>
              {s && (
                <Suggestion kind="residual" id={i.rid} title="Suggested residual risk" disabled={d.signed} summary="a residual scenario"
                  onAccept={() => edit((x) => accept(x, 'residual', i.rid))} onDismiss={() => edit((x) => dismiss(x, 'residual', i.rid))}>
                  {s.scenario && <p>{s.scenario}</p>}
                  {s.actions && <p className="small muted">{s.actions}</p>}
                </Suggestion>
              )}
              <div className="field">
                <label className="label" htmlFor={id('sc')}>What can still go wrong with the controls in place</label>
                <textarea id={id('sc')} className="textarea" rows={2} value={e.scenario ?? ''} disabled={d.signed} onChange={(ev) => set({ scenario: ev.target.value })} />
              </div>
              <div className="row" style={{ alignItems: 'flex-end', gap: 16 }}>
                <div className="field">
                  <span className="label" id={id('stl')}>Strategy</span>
                  <div className="seg" role="radiogroup" aria-labelledby={id('stl')}>
                    {STRATEGY.map(([v, l]) => <button key={v} type="button" role="radio" aria-checked={e.strategy === v} disabled={d.signed} onClick={() => set({ strategy: v })}>{l}</button>)}
                  </div>
                </div>
                <div style={{ flex: '1 1 180px' }}><ScoreSelect id={id('ri')} kind="impact" value={e.impact} disabled={d.signed} onChange={(v) => set({ impact: v })} /></div>
                <div style={{ flex: '1 1 180px' }}><ScoreSelect id={id('rl')} kind="likelihood" value={e.likelihood} disabled={d.signed} onChange={(v) => set({ likelihood: v })} /></div>
              </div>
              <div className="field">
                <label className="label" htmlFor={id('ac')}>Actions and measurable thresholds</label>
                <textarea id={id('ac')} className="textarea" rows={2} value={e.actions ?? ''} disabled={d.signed} placeholder="For example: alert if more than 10 injection attempts a day; quarterly red team" onChange={(ev) => set({ actions: ev.target.value })} />
              </div>
              <div className="field" style={{ maxWidth: 420 }}>
                <label className="label" htmlFor={id('by')}>Accepted by (role)</label>
                <input id={id('by')} className="input" value={e.acceptedBy ?? ''} disabled={d.signed} onChange={(ev) => set({ acceptedBy: ev.target.value })} />
              </div>
              {e.impact === 5 && <p className="small" style={{ color: 'var(--red)', fontWeight: 600 }}>Residual Impact 5: escalate to senior stakeholders.</p>}
            </article>
          );
        })}
      </div>
    </>
  );
}
