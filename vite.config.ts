import { defineConfig } from 'vite';

export default defineConfig({
  base: '/bloc/',
  build: {
    outDir: 'dist',
    cssCodeSplit: false,
    cssMinify: true,
    rollupOptions: {
      output: {
        // Use simpler output names without hashes
        entryFileNames: 'main.js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          
          if (extType === 'css') {
            return 'style.css';
          }
          return 'assets/[name][extname]';
        }
      }
    }
  }
});