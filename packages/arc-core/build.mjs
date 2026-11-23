// Build arc-core: the library entries, the single-file CLI, and the assessment JSON Schema (committed).
import { build } from 'esbuild';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const at = (p) => join(here, p);

// Library entries: dependencies stay external (the web app bundles its own copy)
await build({ entryPoints: [at('src/index.ts')], outfile: at('dist/index.js'), bundle: true, format: 'esm', platform: 'neutral', target: 'es2022', packages: 'external', logLevel: 'warning' });
await build({ entryPoints: [at('src/node.ts')], outfile: at('dist/node.js'), bundle: true, format: 'esm', platform: 'node', target: 'node18', packages: 'external', logLevel: 'warning' });

// CLI: one file with js-yaml and zod inside, so it runs with plain `node arc.mjs` and no install
await build({
  entryPoints: [at('src/cli.ts')], outfile: at('dist/arc.mjs'), bundle: true, format: 'esm', platform: 'node', target: 'node18',
  banner: { js: "#!/usr/bin/env node\nimport { createRequire as __arcRequire } from 'node:module';\nconst require = __arcRequire(import.meta.url);" },
  minify: true, legalComments: 'none', logLevel: 'warning',
});

// JSON Schema for other tools (the Python skill) to validate assessment files against
const lib = await import(`${pathToFileURL(at('dist/index.js')).href}?t=${Date.now()}`);
mkdirSync(at('schema'), { recursive: true });
writeFileSync(at('schema/assessment.schema.json'), JSON.stringify(lib.toJSONSchema(), null, 2) + '\n');
console.log('arc-core: built dist/index.js, dist/node.js, dist/arc.mjs and schema/assessment.schema.json');
