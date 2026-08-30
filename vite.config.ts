import { defineConfig } from 'vite';
import wasm from 'vite-plugin-wasm';

export default defineConfig({
  publicDir: 'public',
  build: {
    target: 'esnext',
    outDir: 'build'
  },
  plugins: [
    wasm()
  ]
});
