/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { visualizer } from "rollup-plugin-visualizer";
import { VitePWA } from 'vite-plugin-pwa';

// The root index.html is the built, live file served by GitHub Pages. The
// source entry lives in index.template.html: dev serves it, and the build
// reads it and writes the result out as index.html.
function sourceHtmlEntry() {
  return {
    name: 'source-html-entry',
    enforce: 'post',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const pathname = (req.url || '').split('?')[0];
        const wantsHtml = (req.headers.accept || '').includes('text/html');
        if (pathname === '/index.html' || (wantsHtml && !path.extname(pathname))) {
          req.url = '/index.template.html';
        }
        next();
      });
    },
    generateBundle: {
      order: 'post',
      handler(_options, bundle) {
        const html = bundle['index.template.html'];
        if (html) {
          html.fileName = 'index.html';
          bundle['index.html'] = html;
          delete bundle['index.template.html'];
        }
      },
    },
  };
}

export default defineConfig({
  base: '/', // ','

  plugins: [
    sourceHtmlEntry(),
    react(),
     tailwindcss(),
     VitePWA({
      registerType: 'autoUpdate', // automatically update service worker
      manifest: {
        name: 'My Vite React App',
        short_name: 'MyApp',
        description: 'My awesome React app',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',//start_url: '/',
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),


visualizer({open: true})],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['clsx', 'tailwind-merge'],
  },
  server: {
    allowedHosts: ['.loca.lt'],
  },
  build: {
  cssCodeSplit: true,
  minify: 'esbuild',
  rollupOptions: {
    input: path.resolve(__dirname, 'index.template.html'),
    output: {
      entryFileNames: 'assets/index-[hash].js',
      assetFileNames: (asset) =>
        asset.names?.[0] === 'index.template.css'
          ? 'assets/index-[hash].css'
          : 'assets/[name]-[hash][extname]',
    },
  },
},

});
