import { VERDICT_LABELS, type CodeCheck, type Excerpt } from 'arc-core';
import { FileCode } from 'lucide-react';
import { useAssessment } from '../store';

export function ExcerptView({ e }: { e: Excerpt }) {
  const [from, to] = e.highlight ?? [0, -1];
  return (
    <figure className="excerpt">
      <figcaption><span className="mono">{e.path}</span><span>lines {e.start}–{e.start + e.lines.length - 1}</span></figcaption>
      <pre>
        {e.lines.map((text, i) => {
          const n = e.start + i;
          return <div key={n} className={n >= from && n <= to ? 'ln hl' : 'ln'}><span>{n}</span><span>{text}</span></div>;
        })}
      </pre>
    </figure>
  );
}

/** What the code check found for one control, with the lines it rests on. */
export function CodeCheckPanel({ check }: { check: CodeCheck }) {
  const a = useAssessment();
  const v = check.verdict;
  return (
    <section className={`codecheck v-${v}`} aria-label="Code check">
      <div className="spread">
        <h3><FileCode size={16} aria-hidden="true" />{VERDICT_LABELS[v]}</h3>
        {a.code?.commit && <span className="small muted">checked at <span className="mono">{a.code.commit}</span>{a.ai.source ? ` by the ${a.ai.source}` : ''}</span>}
      </div>
      <p>{check.note}</p>
      {check.excerpts?.map((e, i) => <ExcerptView key={i} e={e} />)}
      {!check.excerpts?.length && check.files.length > 0 && (
        <div className="row">{check.files.map((f) => <span key={f} className="chip chip-line mono">{f}</span>)}</div>
      )}
    </section>
  );
}
