import { useState } from 'react';
import { ago, initials } from '../lib/format';
import { useAssessment, useStore } from '../store';

/** Comments on one risk, control, capability or system field. Kept in the file, outside the signed record. */
export function Thread({ id }: { id: string }) {
  const a = useAssessment();
  const edit = useStore((s) => s.edit);
  const mode = useStore((s) => s.mode);
  const me = useStore((s) => s.me);
  const setMe = useStore((s) => s.setMe);
  const [text, setText] = useState('');
  const [name, setName] = useState(me.name);
  const t = a.threads[id];
  const comments = t?.comments ?? [];
  const role = mode === 'review' ? 'Reviewer' : 'Assessor';

  const post = () => {
    const author = (me.name || name).trim();
    if (!text.trim() || !author) return;
    if (!me.name) setMe({ ...me, name: author });
    edit((d) => {
      const th = d.threads[id] ?? { resolved: false, comments: [] };
      th.comments.push({ author, role, at: new Date().toISOString(), text: text.trim() });
      th.resolved = false;
      d.threads[id] = th;
    }, true);
    setText('');
  };
  const setResolved = (resolved: boolean) => edit((d) => { if (d.threads[id]) d.threads[id].resolved = resolved; }, true);

  return (
    <section className="thread" aria-labelledby={`th-${id}`}>
      <div className="spread">
        <h3 id={`th-${id}`}>Comments {comments.length > 0 && <span className="muted" style={{ fontWeight: 400 }}>{comments.length}</span>}</h3>
        {t?.resolved && <span className="chip chip-green">Resolved</span>}
      </div>
      {comments.map((c, i) => (
        <div className="comment" key={i}>
          <span className={c.role === 'Reviewer' ? 'avatar reviewer' : 'avatar'} aria-hidden="true">{initials(c.author)}</span>
          <div className="stack" style={{ gap: 2, flex: 1, minWidth: 0 }}>
            <span className="small"><strong>{c.author}</strong> <span className="muted">· {c.role ?? 'Comment'} · {ago(c.at)}</span></span>
            <p style={{ fontSize: 14, whiteSpace: 'pre-wrap' }}>{c.text}</p>
          </div>
        </div>
      ))}
      {!me.name && (
        <div className="field" style={{ maxWidth: 320 }}>
          <label className="label" htmlFor={`me-${id}`}>Your name and role, shown with your comments</label>
          <input id={`me-${id}`} className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. AI governance lead" />
        </div>
      )}
      <div className="row" style={{ alignItems: 'flex-start' }}>
        <label className="sr-only" htmlFor={`c-${id}`}>{comments.length ? 'Reply' : 'Add a comment'}</label>
        <textarea id={`c-${id}`} className="textarea" rows={2} style={{ flex: '1 1 320px' }} value={text} onChange={(e) => setText(e.target.value)}
          placeholder={comments.length ? 'Reply' : mode === 'review' ? 'Comment for the assessor' : 'Comment for the reviewer'} />
        {comments.length > 0 && (
          <button className="btn" type="button" onClick={() => setResolved(!t?.resolved)}>{t?.resolved ? 'Reopen' : 'Resolve'}</button>
        )}
        <button className="btn btn-primary" type="button" onClick={post} disabled={!text.trim() || !(me.name || name).trim()}>
          {comments.length ? 'Reply' : 'Comment'}
        </button>
      </div>
    </section>
  );
}
