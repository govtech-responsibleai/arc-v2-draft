// Node-only helpers: load a register from a directory or URL, and find arc-risk-register/ from the working directory.
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { loadRegisterFromFiles, REGISTER_FILES, RegisterError, type Register, type RegisterFile } from './register';

export * from './index';

/** Load a register from a directory with the same layout as arc-risk-register/. */
export function loadRegisterFromDir(dir: string): Register {
  const root = resolve(dir);
  if (!existsSync(root)) throw new RegisterError(`Register directory not found: ${root}`);
  const files: Partial<Record<RegisterFile, string>> = {};
  for (const f of REGISTER_FILES) {
    const p = join(root, `${f}.yaml`);
    if (existsSync(p)) files[f] = readFileSync(p, 'utf8');
  }
  return loadRegisterFromFiles(files);
}

/** Load a register from a base URL with the same layout (e.g. a raw GitHub URL at a release tag). */
export async function loadRegisterFromUrl(base: string): Promise<Register> {
  const files: Partial<Record<RegisterFile, string>> = {};
  await Promise.all(REGISTER_FILES.map(async (f) => {
    const res = await fetch(`${base.replace(/\/+$/, '')}/${f}.yaml`);
    if (res.ok) files[f] = await res.text();
    else if (res.status !== 404) throw new RegisterError(`Fetching ${f}.yaml from ${base} failed: HTTP ${res.status}`);
  }));
  return loadRegisterFromFiles(files);
}

/** The nearest arc-risk-register/ directory at or above `from`, or null. */
export function findRegisterDir(from: string = process.cwd()): string | null {
  let dir = resolve(from);
  for (;;) {
    const candidate = join(dir, 'arc-risk-register');
    if (existsSync(join(candidate, 'risks.yaml'))) return candidate;
    const up = dirname(dir);
    if (up === dir) return null;
    dir = up;
  }
}
