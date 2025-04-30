import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        projects: resolve(__dirname, 'projects.html'),
        innovation: resolve(__dirname, 'innovation-guide.html'),
        keychain: resolve(__dirname, 'keychain.html'),
        nameplate: resolve(__dirname, 'nameplate.html'),
        ourjourney: resolve(__dirname, 'our-journey.html'),
        phonestand: resolve(__dirname, 'phone-stand.html'),
        topo : resolve(__dirname, 'topo.html'),
        // navbar: resolve(__dirname, 'navbar.html'),
      },
    },
  },
})