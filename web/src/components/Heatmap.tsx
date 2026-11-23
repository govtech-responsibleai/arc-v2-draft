import { PRESETS, scoreOf, type Assessment } from 'arc-core';

/** Scored risks by impact (rows) and likelihood (columns). Cells shaded as priority under the chosen threshold. */
export function Heatmap({ a, ids, selected, onSelect }: {
  a: Assessment; ids: string[]; selected?: string | null; onSelect: (cell: string | null) => void;
}) {
  const grid: Record<string, number> = {};
  for (const r of ids) {
    const s = scoreOf(a, r);
    if (s.impact && s.likelihood) grid[`${s.impact}-${s.likelihood}`] = (grid[`${s.impact}-${s.likelihood}`] ?? 0) + 1;
  }
  const test = PRESETS[a.threshold].test;
  return (
    <div className="stack" style={{ gap: 6 }}>
      <div className="heat" role="group" aria-label="Risks by impact and likelihood">
        {[5, 4, 3, 2, 1].map((i) => [
          <span key={`l${i}`} className="heat-lab">{i}</span>,
          ...[1, 2, 3, 4, 5].map((l) => {
            const k = `${i}-${l}`;
            const n = grid[k] ?? 0;
            const cls = ['heat-cell', test(i, l) ? 'pri' : '', n ? 'has' : ''].filter(Boolean).join(' ');
            return (
              <button key={k} type="button" className={cls} aria-pressed={selected === k}
                aria-label={`Impact ${i}, likelihood ${l}: ${n} ${n === 1 ? 'risk' : 'risks'}`}
                onClick={() => onSelect(selected === k ? null : k)}>{n || ''}</button>
            );
          }),
        ])}
        <span />
        {[1, 2, 3, 4, 5].map((l) => <span key={`x${l}`} className="heat-lab">{l}</span>)}
      </div>
      <div className="spread small muted"><span>Impact ↑</span><span>Likelihood →</span></div>
    </div>
  );
}
