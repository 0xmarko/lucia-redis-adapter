import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  ...(options.env?.DEV ? { watch: true } : { clean: true }),
}));
