// A small hash router: #/risks/RISK-047?f=unscored → path ['risks', 'RISK-047'], query f=unscored.
// Hash routes work on any static host.
import { useSyncExternalStore } from 'react';

const subscribe = (onChange: () => void) => {
  window.addEventListener('hashchange', onChange);
  return () => window.removeEventListener('hashchange', onChange);
};
const snapshot = () => window.location.hash;

export function parseRoute(hash: string): { path: string[]; query: URLSearchParams } {
  const [p, q] = hash.replace(/^#\/?/, '').split('?');
  return { path: p.split('/').filter(Boolean).map(decodeURIComponent), query: new URLSearchParams(q ?? '') };
}

export function useRoute(): { path: string[]; query: URLSearchParams } {
  return parseRoute(useSyncExternalStore(subscribe, snapshot, snapshot));
}

export function href(parts: string[] = [], query?: Record<string, string | null | undefined>): string {
  const q = Object.entries(query ?? {}).filter(([, v]) => v != null && v !== '') as [string, string][];
  return '#/' + parts.map(encodeURIComponent).join('/') + (q.length ? '?' + new URLSearchParams(q).toString() : '');
}

export function navigate(parts: string[] = [], query?: Record<string, string | null | undefined>): void {
  const next = href(parts, query);
  if (window.location.hash !== next) window.location.hash = next;
}

/** Change the query (filters) and keep the path. */
export function setQuery(changes: Record<string, string | null>): void {
  const { path, query } = parseRoute(window.location.hash);
  const q: Record<string, string> = Object.fromEntries(query.entries());
  for (const [k, v] of Object.entries(changes)) {
    if (v == null || v === '') delete q[k];
    else q[k] = v;
  }
  navigate(path, q);
}

/** Select an item within the current page and keep its filters. */
export function selectItem(page: string, id: string): void {
  const { query } = parseRoute(window.location.hash);
  navigate([page, id], Object.fromEntries(query.entries()));
}
