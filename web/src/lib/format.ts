export function shortDate(iso: string | null | undefined): string {
  if (!iso) return '';
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? iso : d.toLocaleDateString('en-SG', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function ago(iso: string, now: Date = new Date()): string {
  const s = Math.max(0, (now.getTime() - new Date(iso).getTime()) / 1000);
  if (s < 60) return 'just now';
  if (s < 3600) return `${Math.round(s / 60)} min ago`;
  if (s < 86400) return `${Math.round(s / 3600)} h ago`;
  return shortDate(iso);
}

export const initials = (name: string): string =>
  name.split(/[\s,]+/).filter(Boolean).slice(0, 2).map((w) => w[0]!.toUpperCase()).join('') || '?';

/** Short repository name from a URL: example-agency/grantdesk-assistant. */
export const repoName = (url: string): string => url.replace(/^https?:\/\/(www\.)?github\.com\//, '').replace(/\.git$/, '').replace(/\/$/, '');
