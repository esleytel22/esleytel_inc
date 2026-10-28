/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
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
          emitRoutePages.call(this, String(html.source));
        }
      },
    },
  };
}

// GitHub Pages only serves files that exist on disk, so a direct visit to
// /privacy-policy would be a real 404. Emit a copy of the app shell at each
// route (served with 200 and the right canonical/title) plus a 404.html
// fallback for any other address; React Router takes over once it loads.
const SITE = 'https://esleytel.space';
const ROUTE_PAGES = [
  { dir: 'privacy-policy', title: 'Privacy Policy | Esleytel LLC.' },
  { dir: 'terms-of-service', title: 'Terms of Service | Esleytel LLC.' },
  // Legacy addresses: the app redirects these to a section of the home page.
  { dir: 'about-us' },
  { dir: 'portfolio' },
  { dir: 'contact-us' },
];

function emitRoutePages(shell) {
  for (const { dir, title } of ROUTE_PAGES) {
    let page = shell;
    if (title) {
      const url = `${SITE}/${dir}/`;
      page = page
        .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
        .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`)
        .replace(/(property="og:url" content=")[^"]*"/, `$1${url}"`);
    }
    this.emitFile({ type: 'asset', fileName: `${dir}/index.html`, source: page });
  }
  const notFound = shell.replace(
    /<meta name="robots" content="[^"]*"\s*\/?>/,
    '<meta name="robots" content="noindex" />'
  );
  this.emitFile({ type: 'asset', fileName: '404.html', source: notFound });
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
        name: 'Esleytel LLC.',
        short_name: 'Esleytel',
        description: 'Esleytel LLC. is a creative tech studio crafting digital experiences through websites, branding, and software solutions.',
        theme_color: '#0a0a0a',
        background_color: '#0a0a0a',
        display: 'standalone',
        start_url: '/',
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
  ],
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
    warmup: {
      clientFiles: ['./src/main.jsx', './src/app/**/*.jsx', './src/pages/**/*.jsx', './utils/content.jsx'],
    },
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
