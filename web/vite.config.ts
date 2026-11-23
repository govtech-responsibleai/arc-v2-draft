import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const here = (p: string) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  // Relative asset paths, so the build can be served from any folder (GitHub Pages, Airbase, a file server)
  base: './',
  plugins: [react()],
  // Use arc-core's source directly: no separate build step, and edits to the rules reload the app
  resolve: { alias: { 'arc-core': here('../packages/arc-core/src/index.ts') } },
  // The register YAML lives outside web/, at the repository root
  server: { fs: { allow: [here('..')] } },
  // One bundle of about 700 KB: React, zod and js-yaml, plus the register YAML itself
  build: { outDir: 'dist', sourcemap: true, chunkSizeWarningLimit: 900 },
});
