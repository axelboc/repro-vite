import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve('src/lib.js'),
      formats: ['es'],
      fileName: () => 'lib.js',
    },
    rollupOptions: {
      external: ['react, react-dom'],
    },
    sourcemap: true,
  },
  plugins: [react()]
})
