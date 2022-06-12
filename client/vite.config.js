import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { fileURLToPath, URL } from 'url';
import process from 'process';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  define: { 'process.env': process.env, global: 'globalThis' },
  build: {
    target: ['es2020'],
  },
  server: {
    port: 3001,
  },

  optimizeDeps: {
    exclude: ['electron', './zlib_bindings', 'electron-fetch'],
  },

  plugins: [
    vue(),
    NodeGlobalsPolyfillPlugin({
      buffer: true,
    }),
  ],
  resolve: {
    alias: {
      web3: path.resolve(__dirname, './node_modules/web3/dist/web3.min.js'),
      util: 'util',
      stream: 'stream-browserify',
      zlib: 'browserify-zlib',
      process: 'process/browser',
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
