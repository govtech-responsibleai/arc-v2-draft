import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

const here = (p: string) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { 'arc-core': here('../packages/arc-core/src/index.ts') } },
  test: { environment: 'jsdom', include: ['test/**/*.test.{ts,tsx}'], css: false },
});
