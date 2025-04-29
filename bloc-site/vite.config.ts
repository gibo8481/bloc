import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  base: '/',
  plugins: [
    createHtmlPlugin({
      inject: {
        tags: [
          {
            tag: 'link',
            attrs: {
              rel: 'stylesheet',
              href: '/assets/index-DPXLfH-n.css', // Adjust this path as needed
            },
            injectTo: 'head',
          },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        about: './public/about.html',
        bloc: './public/bloc.html',
        footer: './public/footer.html',
        innovationGuide: './public/innovation-guide.html',
        keychain: './public/keychain.html',
        nameplate: './public/nameplate.html',
        navbar: './public/navbar.html',
        ourJourney: './public/our-journey.html',
        phoneStand: './public/phone-stand.html',
        projects: './public/projects.html',
        topo: './public/topo.html'
      }
    },
    assetsDir: 'assets',
    cssCodeSplit: false,
    outDir: 'dist'
  },
  publicDir: 'public',
  resolve: {
    alias: {
      '/src': './src'
    }
  }
});
