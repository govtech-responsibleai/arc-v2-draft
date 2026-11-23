import { Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';
import { shortDate } from '../lib/format';
import { decision, isPending, type Kind } from '../lib/suggest';
import { useAssessment } from '../store';

const DECIDED: Record<string, string> = { confirmed: 'accepted', edited: 'accepted and changed', dismissed: 'dismissed', ai: 'written by the AI, not yet confirmed' };

/**
 * An AI suggestion waiting for a person's decision, or a one-line record of the decision once made.
 * The body shows what was suggested; accepting copies it into the record.
 */
export function Suggestion({ kind, id, title, children, onAccept, onEdit, onDismiss, disabled, summary }: {
  kind: Kind;
  id: string;
  title: string;
  children: ReactNode;
  onAccept: () => void;
  onEdit?: () => void;
  onDismiss: () => void;
  disabled?: boolean;
  /** One line describing the suggestion, shown after the decision. */
  summary?: ReactNode;
}) {
  const a = useAssessment();
  const pending = isPending(a, kind, id);
  const d = decision(a, kind, id);
  const source = a.ai.source ?? 'AI';
  if (!pending) {
    if (!d) return null;
    return (
      <p className="decided">
        <Sparkles size={14} aria-hidden="true" />
        <span>{source} suggested{summary ? <>: {summary}</> : ''}. {DECIDED[d] ? `Suggestion ${DECIDED[d]}.` : ''}</span>
      </p>
    );
  }
  return (
    <section className="suggest" aria-label={title}>
      <div className="spread">
        <h3>
          <Sparkles size={16} aria-hidden="true" />
          {title}
          <span className="small muted" style={{ fontWeight: 400 }}>
            {source}{a.code?.commit ? <>, from code at <span className="mono">{a.code.commit}</span></> : ''}{a.ai.at ? `, ${shortDate(a.ai.at)}` : ''}
          </span>
        </h3>
        <div className="row">
          <button className="btn btn-sm" type="button" onClick={onDismiss} disabled={disabled}>Dismiss</button>
          {onEdit && <button className="btn btn-sm" type="button" onClick={onEdit} disabled={disabled}>Edit</button>}
          <button className="btn btn-sm btn-ai" type="button" onClick={onAccept} disabled={disabled}>Accept</button>
        </div>
      </div>
      {children}
    </section>
  );
}

export function Evidence({ files }: { files?: string[] }) {
  if (!files?.length) return null;
  return (
    <div className="row">
      <span className="label" style={{ marginRight: 4 }}>Evidence</span>
      {files.map((f) => <span key={f} className="chip chip-line mono">{f}</span>)}
    </div>
  );
}
