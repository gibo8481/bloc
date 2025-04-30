// vite.config.ts
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'path'

export default defineConfig({
  // this should match your repo name on GH Pages
  base: '/bloc/',

  plugins: [
    // make your tsconfig "paths" work in imports
    tsconfigPaths(),
  ],

  build: {
    rollupOptions: {
      // multi-page entrypoints; adjust filenames as needed
      input: {
        main:      resolve(__dirname, 'index.html'),
        about:     resolve(__dirname, 'public/about.html'),
        projects:  resolve(__dirname, 'public/projects.html'),
        innovation:resolve(__dirname, 'public/innovation-guide.html'),
      }
    }
  }
})
