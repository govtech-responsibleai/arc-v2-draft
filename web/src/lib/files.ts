// Opening and saving assessment files.
import { exportMarkdown, parseAssessment, type Assessment, type Register } from 'arc-core';

/** Where the ARC skill writes the assessment in a repository. */
export const REPO_PATH = 'docs/arc/assessment.arc.json';

export function download(filename: string, text: string, type: string): void {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export const slug = (s: string | undefined): string =>
  (s ?? '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'assessment';

export function saveAssessment(a: Assessment): void {
  download('assessment.arc.json', JSON.stringify(a, null, 2) + '\n', 'application/json');
}

export function exportReport(reg: Register, a: Assessment): void {
  download(`${slug(a.system.name)}-revision-${a.revision}.md`, exportMarkdown(reg, a), 'text/markdown');
}

export type OpenResult = { ok: true; value: Assessment } | { ok: false; error: string };

export async function readAssessmentFile(file: File): Promise<OpenResult> {
  const r = parseAssessment(await file.text());
  return r.ok ? r : { ok: false, error: describeErrors(r.errors) };
}

function describeErrors(errors: string[]): string {
  const shown = errors.slice(0, 3).join('; ');
  return errors.length > 3 ? `${shown}; and ${errors.length - 3} more problems` : shown;
}

/**
 * Read docs/arc/assessment.arc.json from a public GitHub repository's default branch.
 * Accepts "org/repo", "github.com/org/repo" or a full URL.
 */
export async function readFromRepository(input: string, fetchImpl: typeof fetch = fetch): Promise<OpenResult> {
  const m = input.trim().replace(/\.git$/, '').match(/^(?:https?:\/\/)?(?:www\.)?(?:github\.com\/)?([\w.-]+)\/([\w.-]+)\/?$/);
  if (!m) return { ok: false, error: 'Enter a GitHub repository, such as github.com/org/repository.' };
  const url = `https://raw.githubusercontent.com/${m[1]}/${m[2]}/HEAD/${REPO_PATH}`;
  let res: Response;
  try {
    res = await fetchImpl(url);
  } catch {
    return { ok: false, error: 'Could not reach GitHub. Check your connection, or download the file and open it instead.' };
  }
  if (res.status === 404) return { ok: false, error: `No ${REPO_PATH} in ${m[1]}/${m[2]}. Run the ARC skill in the repository first, or check that it is public.` };
  if (!res.ok) return { ok: false, error: `GitHub answered ${res.status}. Try again, or download the file and open it instead.` };
  const r = parseAssessment(await res.text());
  return r.ok ? r : { ok: false, error: describeErrors(r.errors) };
}
