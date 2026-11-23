import { conditionalElements, controlDone, elementName, PRESETS, STATUS_LABELS, plural, type Assessment, type Verdict } from 'arc-core';
import { ArrowRight, ChartLine, CircleHelp, CircleX, ClipboardList, Sparkles, TriangleAlert } from 'lucide-react';
import type { ReactNode } from 'react';
import { Heatmap } from '../components/Heatmap';
import { LevelChip, PageHead, VerdictChip } from '../components/ui';
import { useDerived, type Derived } from '../lib/derived';
import { shortDate } from '../lib/format';
import { href, navigate } from '../lib/route';
import { REGISTER as reg } from '../register';
import { useAssessment } from '../store';

interface Todo { key: string; tone: '' | 'red' | 'amber' | 'violet'; icon: ReactNode; title: ReactNode; sub: string; to: string; tag: ReactNode }

const VERDICT_ORDER: Verdict[] = ['found', 'partial', 'missing', 'offcode', 'nofeature'];
const VERDICT_COLOR: Record<Verdict, string> = { found: 'var(--green-solid)', partial: 'var(--amber-solid)', missing: 'var(--red-solid)', offcode: 'var(--slate-8)', nofeature: 'var(--slate-6)' };
const VERDICT_WORDS: Record<Verdict, string> = { found: 'found', partial: 'partly', missing: 'not found', offcode: 'need evidence outside the code', nofeature: 'nothing to apply to' };

function todos(a: Assessment, d: Derived): Todo[] {
  const out: Todo[] = [];
  const ctl = (cid: string) => <><span className="mono muted">{cid}</span> {reg.controls[cid].statement}</>;
  for (const cid of d.contradicted.filter((id) => d.scopeById[id]?.level === 0)) {
    const check = a.code!.checks![cid];
    const status = a.controls[cid]?.status;
    out.push({
      key: cid, tone: 'red', icon: <CircleX size={16} />, title: ctl(cid), to: href(['controls', cid]), tag: <LevelChip level={0} />,
      sub: check.verdict === 'missing'
        ? `Marked ${status ? STATUS_LABELS[status].toLowerCase() : 'implemented'}, but the code check found nothing. ${check.note}`
        : `The code contradicts the entry. ${check.note}`,
    });
  }
  const l0 = d.scope.filter((c) => c.group === 'required' && !controlDone(a.controls[c.id], 0));
  if (l0.length) out.push({ key: 'l0', tone: 'amber', icon: <TriangleAlert size={16} />, title: `Describe ${l0.length} Level 0 ${plural(l0.length, 'control')}`, sub: 'They apply whatever the risks score, and cannot be waived.', to: href(['controls'], { f: 'todo' }), tag: <LevelChip level={0} /> });
  const unsure = [
    ...Object.keys(reg.capabilities).filter((c) => !a.caps[c]?.present || a.caps[c]?.present === 'unsure'),
    ...conditionalElements(reg).filter((c) => !a.components[c]?.present || a.components[c]?.present === 'unsure'),
  ];
  if (unsure.length) {
    const one = unsure.length === 1 ? unsure[0] : null;
    out.push({ key: 'caps', tone: '', icon: <CircleHelp size={16} />, title: one ? `Decide ${one} ${elementName(reg, one)}` : `Decide ${unsure.length} capabilities and components`, sub: one && (a.caps[one]?.present === 'unsure' || a.components[one]?.present === 'unsure') ? 'Marked unsure, so it counts as present.' : 'Undecided ones hold back the list of risks.', to: href(['capabilities']), tag: <span className="chip">Capabilities</span> });
  }
  const unscored = d.risks.filter((r) => d.state[r] === 'unscored');
  if (unscored.length) {
    const suggested = unscored.filter((r) => a.ai.risks[r]).length;
    out.push({ key: 'risks', tone: '', icon: <ChartLine size={16} />, title: `Score ${unscored.length} ${plural(unscored.length, 'risk')}`, sub: `${suggested ? `The ${a.ai.source ?? 'AI'} suggested scores for ${suggested}. ` : ''}Unscored risks count as priority until then.`, to: href(['risks'], { f: 'unscored' }), tag: <span className="chip">Risks</span> });
  }
  const sys = d.progress.system.total - d.progress.system.done;
  if (sys) out.push({ key: 'sys', tone: '', icon: <ClipboardList size={16} />, title: `Answer ${sys} system ${plural(sys, 'question')}`, sub: 'Owner, purpose, architecture, autonomy and data classification set the context for every score.', to: href(['system']), tag: <span className="chip">System</span> });
  const pr = d.scope.filter((c) => c.group === 'priority' && !controlDone(a.controls[c.id], c.level));
  if (pr.length) out.push({ key: 'pr', tone: '', icon: <ClipboardList size={16} />, title: `Complete ${pr.length} Level 1–2 ${plural(pr.length, 'control')} for priority risks`, sub: 'Adopt, adapt, or record why not.', to: href(['controls'], { tab: 'priority', f: 'todo' }), tag: <span className="chip">Controls</span> });
  const res = d.progress.residual.total - d.progress.residual.done;
  if (res) out.push({ key: 'res', tone: '', icon: <ClipboardList size={16} />, title: `Complete ${res} residual ${plural(res, 'risk')}`, sub: 'What can still go wrong, the strategy, and who accepts it.', to: href(['residual']), tag: <span className="chip">Residual risk</span> });
  if (d.pending.length) out.push({ key: 'ai', tone: 'violet', icon: <Sparkles size={16} />, title: `Decide on ${d.pending.length} AI ${plural(d.pending.length, 'suggestion')}`, sub: 'Accept, edit or dismiss each one. Nothing the AI suggested counts until a person decides.', to: href(['review']), tag: <span className="chip chip-violet">AI</span> });
  if (!out.length && !d.signed) out.push({ key: 'sign', tone: '', icon: <ClipboardList size={16} />, title: 'Review and sign off', sub: d.blockers.length ? d.blockers[0].text : 'Everything required is done.', to: href(['review']), tag: <span className="chip">Sign-off</span> });
  return out;
}

export function Overview() {
  const a = useAssessment();
  const d = useDerived();
  const list = todos(a, d);
  const count = (s: string) => d.risks.filter((r) => d.state[r] === s).length;
  const required = d.scope.filter((c) => c.group === 'required');
  const l0done = required.filter((c) => controlDone(a.controls[c.id], 0)).length;
  const l0contra = d.contradicted.filter((id) => d.scopeById[id]?.level === 0).length;
  const checks = a.code?.checks ?? null;
  const checked = checks ? d.scope.filter((c) => checks[c.id]) : [];
  const tally = Object.fromEntries(VERDICT_ORDER.map((v) => [v, checked.filter((c) => checks![c.id].verdict === v).length])) as Record<Verdict, number>;
  const gaps = checked.filter((c) => ['partial', 'missing'].includes(checks![c.id].verdict));
  const l0gaps = gaps.filter((c) => c.level === 0).sort((x, y) => (checks![x.id].verdict === 'missing' ? 0 : 1) - (checks![y.id].verdict === 'missing' ? 0 : 1));
  const last = a.history[a.history.length - 1];

  return (
    <>
      <PageHead title="Overview" lede={<>
        Revision {a.revision}{d.signed ? `, signed on ${shortDate(a.signoff.signedAt)}` : ', draft'}.
        {last && !d.signed ? ` Revision ${last.revision} was signed on ${shortDate(last.signedAt)} against register ${last.register}.` : ''}
      </>}>
        {list[0] && <a className="btn btn-primary" href={list[0].to}>Next: {typeof list[0].title === 'string' ? list[0].title : list[0].key}<ArrowRight size={16} aria-hidden="true" /></a>}
      </PageHead>

      {d.diff && (
        <section className="banner banner-info" aria-label="Register update">
          <p><strong>Register {d.diff.to} adds {d.diff.newRisks.length} {plural(d.diff.newRisks.length, 'risk')} and {d.diff.newControls.length} {plural(d.diff.newControls.length, 'control')} that apply to this system</strong> since it was assessed against {d.diff.from}.
            {d.diff.goneRisks.length ? ` ${d.diff.goneRisks.length} no longer ${d.diff.goneRisks.length === 1 ? 'applies' : 'apply'}.` : ''} They are marked New throughout.</p>
          <a className="btn" href={href(['risks'], { f: 'new' })}>Show what's new</a>
        </section>
      )}

      <section aria-label="Summary" className="tiles">
        <a className="tile" href={href(['risks'])}>
          <span className="small muted">Risks that apply</span>
          <span className="tile-n">{d.risks.length}</span>
          <span className="small muted">{count('priority')} priority · {count('unscored')} unscored · {count('below')} below</span>
        </a>
        <a className="tile" href={href(['controls'])}>
          <span className="small muted">Level 0 controls described</span>
          <span className="tile-n">{l0done}<small> / {required.length}</small></span>
          <span className="small" style={{ color: l0contra ? 'var(--red)' : 'var(--ink-2)', fontWeight: l0contra ? 500 : 400 }}>
            {l0contra ? `${l0contra} contradicted by the code` : checks ? 'none contradicted by the code' : 'code not checked'}
          </span>
        </a>
        <a className="tile" href={href(['controls'], { f: 'gaps' })}>
          <span className="small muted">Gaps found in the code</span>
          <span className="tile-n">{checks ? gaps.length : '–'}</span>
          <span className="small muted">{checks ? `of ${checked.length} controls checked` : 'run the ARC skill to check'}</span>
        </a>
        <a className="tile" href={href(['review'])}>
          <span className="small muted">AI suggestions to decide</span>
          <span className="tile-n" style={{ color: d.pending.length ? 'var(--violet)' : undefined }}>{d.pending.length}</span>
          <span className="small muted">{a.ai.source ? `from the ${a.ai.source}` : 'none waiting'}</span>
        </a>
        <a className="tile" href={href(['review'])}>
          <span className="small muted">Before sign-off</span>
          <span className="tile-n">{d.signed ? '✓' : d.blockers.length}</span>
          <span className="small muted">{d.signed ? 'signed' : d.blockers.length ? `${plural(d.blockers.length, 'item')} to clear` : 'ready to sign'}</span>
        </a>
      </section>

      <div className="cols">
        <section aria-labelledby="todo-h" className="panel col-2" style={{ overflow: 'hidden' }}>
          <div className="panel-head">
            <h2 id="todo-h">Next to do</h2>
            <span className="small muted">Level 0 first, then whatever blocks sign-off</span>
          </div>
          {list.length === 0 && <p className="empty">Nothing left to do. {d.signed ? 'This revision is signed.' : ''}</p>}
          {list.slice(0, 8).map((t) => (
            <a key={t.key} className="todo" href={t.to}>
              <span className={`todo-icon ${t.tone}`} aria-hidden="true">{t.icon}</span>
              <span className="todo-body"><span className="todo-title">{t.title}</span><span className="todo-sub">{t.sub}</span></span>
              {t.tag}
            </a>
          ))}
        </section>

        <section aria-labelledby="posture-h" className="panel panel-pad col-1">
          <div className="spread"><h2 id="posture-h" style={{ fontSize: 16 }}>Risk posture</h2><span className="small muted">{d.risks.length - count('unscored')} scored</span></div>
          <Heatmap a={a} ids={d.risks} onSelect={(cell) => navigate(['risks'], { cell })} />
          <p className="row small muted" style={{ alignItems: 'flex-start', flexWrap: 'nowrap' }}>
            <span className="swatch" aria-hidden="true" />
            <span>Priority under the {PRESETS[a.threshold].label} threshold: {PRESETS[a.threshold].rule}.</span>
          </p>
          {count('unscored') > 0 && <a className="btn" href={href(['risks'], { f: 'unscored' })} style={{ justifyContent: 'space-between' }}><span>{count('unscored')} unscored</span><span className="chip chip-amber">count as priority</span></a>}
        </section>
      </div>

      <div className="cols">
        <section aria-labelledby="code-h" className="panel panel-pad col-2">
          <div className="spread">
            <h2 id="code-h" style={{ fontSize: 16 }}>Code check</h2>
            {a.code && <span className="small muted">{checked.length} controls checked{a.code.commit ? <> at <span className="mono">{a.code.branch} @ {a.code.commit}</span></> : ''}</span>}
          </div>
          {!checks ? (
            <p className="muted">The code hasn't been checked. Run the ARC skill in the system's repository, then open the file it writes, to see which controls the code supports.</p>
          ) : (
            <>
              <div className="bar" role="img" aria-label={VERDICT_ORDER.map((v) => `${tally[v]} ${VERDICT_WORDS[v]}`).join(', ')}>
                {VERDICT_ORDER.filter((v) => tally[v]).map((v) => <span key={v} style={{ flex: tally[v], background: VERDICT_COLOR[v] }} />)}
              </div>
              <div className="row small muted" style={{ gap: '8px 20px' }}>
                {VERDICT_ORDER.filter((v) => tally[v]).map((v) => <span key={v}><strong className="num" style={{ color: 'var(--ink)' }}>{tally[v]}</strong> {VERDICT_WORDS[v]}</span>)}
              </div>
              {l0gaps.length > 0 && (
                <div className="stack" style={{ gap: 0, borderTop: '1px solid var(--slate-3)' }}>
                  <span className="eyebrow" style={{ padding: '12px 0 6px' }}>Level 0 gaps</span>
                  {l0gaps.slice(0, 4).map((c) => (
                    <a key={c.id} href={href(['controls', c.id])} className="row" style={{ padding: '8px 0', color: 'var(--ink)', textDecoration: 'none' }}>
                      <VerdictChip verdict={checks[c.id].verdict} />
                      <span className="mono small">{c.id}</span>
                      <span style={{ flex: '1 1 240px' }}>{reg.controls[c.id].statement}</span>
                      {checks[c.id].files[0] && <span className="mono small muted">{checks[c.id].files[0]}</span>}
                    </a>
                  ))}
                  <a href={href(['controls'], { f: 'gaps' })} style={{ paddingTop: 8, fontSize: 14, fontWeight: 500 }}>All {gaps.length} gaps in the code</a>
                </div>
              )}
            </>
          )}
        </section>

        <section aria-labelledby="rev-h" className="panel panel-pad col-1">
          <h2 id="rev-h" style={{ fontSize: 16 }}>Revisions</h2>
          <ol className="stack" style={{ listStyle: 'none', margin: 0, padding: 0, gap: 14 }}>
            {!d.signed && (
              <li className="row" style={{ alignItems: 'flex-start', flexWrap: 'nowrap' }}>
                <span aria-hidden="true" style={{ flex: 'none', width: 12, height: 12, marginTop: 5, borderRadius: '50%', border: '2px solid var(--accent)' }} />
                <span className="stack" style={{ gap: 2 }}>
                  <strong>Revision {a.revision} · draft</strong>
                  <span className="small muted">Register {reg.version.version}{a.code?.commit ? <> · code at <span className="mono">{a.code.commit}</span></> : ''}</span>
                </span>
              </li>
            )}
            {[...a.history].reverse().map((h) => (
              <li key={h.revision} className="row" style={{ alignItems: 'flex-start', flexWrap: 'nowrap' }}>
                <span aria-hidden="true" style={{ flex: 'none', width: 12, height: 12, marginTop: 5, borderRadius: '50%', background: 'var(--green-solid)' }} />
                <span className="stack" style={{ gap: 2 }}>
                  <strong>Revision {h.revision} · signed</strong>
                  <span className="small muted">{shortDate(h.signedAt)}{h.decision ? ` · ${h.decision}` : ''} · register {h.register}</span>
                </span>
              </li>
            ))}
          </ol>
          {a.signedCopy && <a className="btn" href={href(['review'])}>Compare with revision {a.signedCopy.revision}</a>}
        </section>
      </div>
    </>
  );
}
