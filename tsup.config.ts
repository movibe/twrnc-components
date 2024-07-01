import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/atomic/components/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['lodash', 'react'],
})
