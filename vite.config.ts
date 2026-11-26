import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { defineConfig, type Plugin } from 'vite';

interface StaticRouteSeo {
  slug: string;
  title: string;
  description: string;
  canonical: string;
  heading: string;
  summary: string;
}

const STATIC_ROUTES: StaticRouteSeo[] = [
  {
    slug: 'harga',
    title: 'Layanan & Estimasi Biaya Service HP Sangatta — Konter B-Cell',
    description:
      'Estimasi biaya ganti LCD, baterai, IC mati total, restorasi frame/backdoor, dan terima HP rusak di Konter B-Cell Sangatta. Cek awal 100% GRATIS!',
    canonical: 'https://servicehpsangatta.com/harga',
    heading: 'Layanan & Estimasi Biaya Service HP Sangatta — Konter B-Cell',
    summary:
      'Konsultasikan estimasi biaya ganti LCD, baterai, perbaikan mesin IC mati total, restorasi full housing (frame & backdoor), serta layanan terima/beli HP rusak di Jl. Margo Santoso 2 RT.41, Sangatta.',
  },
  {
    slug: 'lacak-nota',
    title: 'Lacak Nota Service HP Sangatta Real-Time — Konter B-Cell',
    description:
      'Pantau status perbaikan HP Anda di Konter B-Cell Sangatta secara real-time dengan nomor nota servis. Jl. Margo Santoso 2 RT.41, Sangatta, Kutai Timur.',
    canonical: 'https://servicehpsangatta.com/lacak-nota',
    heading: 'Lacak Status Nota Service HP Sangatta — Konter B-Cell',
    summary:
      'Pantau progres servis smartphone Anda secara langsung menggunakan nomor nota servis resmi Konter B-Cell Sangatta.',
  },
  {
    slug: 'panduan',
    title: 'Panduan Darurat HP Masuk Air & Kebijakan Garansi — B-Cell Sangatta',
    description:
      'Langkah pertolongan pertama saat HP masuk air atau mati total, simulator diagnosa teknisi, serta SOP garansi resmi hingga 30 hari di Konter B-Cell Sangatta.',
    canonical: 'https://servicehpsangatta.com/panduan',
    heading: 'Panduan Darurat HP Masuk Air & Kebijakan Garansi — Konter B-Cell',
    summary:
      'Panduan pertolongan pertama saat HP tercebur air, overheat, atau mati mendadak, beserta syarat & masa berlaku garansi resmi toko hingga 30 hari.',
  },
  {
    slug: 'lokasi',
    title: 'Lokasi Konter Service HP Sangatta (Jl. Margo Santoso 2) — B-Cell',
    description:
      'Alamat resmi Konter B-Cell Sangatta di Jl. Margo Santoso 2 RT.41, Kutai Timur. Buka setiap hari 08.00–22.00 WITA. Cek kerusakan awal Rp 0 (Gratis)!',
    canonical: 'https://servicehpsangatta.com/lokasi',
    heading: 'Lokasi Konter Service HP Sangatta — Jl. Margo Santoso 2 RT.41',
    summary:
      'Kunjungi Konter B-Cell Sangatta di Jl. Margo Santoso 2 RT.41, Sangatta, Kutai Timur. Buka setiap hari (Senin–Minggu) pukul 08.00–22.00 WITA.',
  },
];

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

function seoStaticRoutesPlugin(): Plugin {
  let outDir = 'dist';

  return {
    name: 'seo-static-routes',
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      const distPath = path.resolve(import.meta.dirname, outDir);
      const indexHtmlPath = path.join(distPath, 'index.html');
      if (!fs.existsSync(indexHtmlPath)) return;

      const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

      // Strip FAQPage node from sub-pages (FAQ only exists on HomePage DOM)
      const stripFaqSchema = (html: string) =>
        html.replace(
          /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
          (match, jsonStr) => {
            try {
              const parsed = JSON.parse(jsonStr);
              if (Array.isArray(parsed['@graph'])) {
                parsed['@graph'] = parsed['@graph'].filter(
                  (node: { '@type'?: string }) => node['@type'] !== 'FAQPage'
                );
              }
              return `<script type="application/ld+json">\n${JSON.stringify(parsed, null, 2)}\n    </script>`;
            } catch {
              return match;
            }
          }
        );

      for (const route of STATIC_ROUTES) {
        const escapedTitle = escapeHtml(route.title);
        const escapedDesc = escapeHtml(route.description);

        let routeHtml = stripFaqSchema(baseHtml)
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapedTitle}</title>`)
          .replace(
            /<meta name="description" content="[^"]*"\s*\/>/,
            `<meta name="description" content="${escapedDesc}" />`
          )
          .replace(
            /<link rel="canonical" href="[^"]*"\s*\/>/,
            `<link rel="canonical" href="${route.canonical}" />`
          )
          .replace(
            /<meta property="og:title" content="[^"]*"\s*\/>/,
            `<meta property="og:title" content="${escapedTitle}" />`
          )
          .replace(
            /<meta property="og:description" content="[^"]*"\s*\/>/,
            `<meta property="og:description" content="${escapedDesc}" />`
          )
          .replace(
            /<meta property="og:url" content="[^"]*"\s*\/>/,
            `<meta property="og:url" content="${route.canonical}" />`
          )
          .replace(
            /<meta name="twitter:title" content="[^"]*"\s*\/>/,
            `<meta name="twitter:title" content="${escapedTitle}" />`
          )
          .replace(
            /<meta name="twitter:description" content="[^"]*"\s*\/>/,
            `<meta name="twitter:description" content="${escapedDesc}" />`
          )
          .replace(
            '<div id="root"></div>',
            `<div id="root"></div>\n    <noscript><main><h1>${escapeHtml(route.heading)}</h1><p>${escapeHtml(route.summary)}</p></main></noscript>`
          );

        const targetDir = path.join(distPath, route.slug);
        fs.mkdirSync(targetDir, { recursive: true });
        fs.writeFileSync(path.join(targetDir, 'index.html'), routeHtml, 'utf-8');
      }
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), seoStaticRoutesPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
