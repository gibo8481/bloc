import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/bloc/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'public/about.html'),
        projects: resolve(__dirname, 'public/projects.html'),
        innovation: resolve(__dirname, 'public/innovation-guide.html')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@styles': resolve(__dirname, './src/styles'),
      '@components': resolve(__dirname, './src/components'),
      '@pages': resolve(__dirname, './src/pages')
    }
  }
});
