export type PageRoute = 'home' | 'pricing' | 'tracking' | 'guide' | 'location';

export interface RouteSeoMeta {
  id: PageRoute;
  path: string;
  title: string;
  description: string;
  canonical: string;
}

export const SITE_URL = 'https://servicehpsangatta.com';

export const ROUTE_SEO: Record<PageRoute, RouteSeoMeta> = {
  home: {
    id: 'home',
    path: '/',
    title: 'Service HP Sangatta Express & Bergaransi — Konter B-Cell',
    description:
      'Service HP Sangatta express bisa ditunggu: ganti LCD, baterai, mati total & terima HP rusak di Jl. Margo Santoso 2 RT.41. Cek gratis! WA 0822-5911-6538.',
    canonical: `${SITE_URL}/`,
  },
  pricing: {
    id: 'pricing',
    path: '/harga',
    title: 'Layanan & Estimasi Biaya Service HP Sangatta — Konter B-Cell',
    description:
      'Estimasi biaya ganti LCD, baterai, IC mati total, restorasi frame/backdoor, dan terima HP rusak di Konter B-Cell Sangatta. Cek awal 100% GRATIS!',
    canonical: `${SITE_URL}/harga`,
  },
  tracking: {
    id: 'tracking',
    path: '/lacak-nota',
    title: 'Lacak Nota Service HP Sangatta Real-Time — Konter B-Cell',
    description:
      'Pantau status perbaikan HP Anda di Konter B-Cell Sangatta secara real-time dengan nomor nota servis. Jl. Margo Santoso 2 RT.41, Sangatta, Kutai Timur.',
    canonical: `${SITE_URL}/lacak-nota`,
  },
  guide: {
    id: 'guide',
    path: '/panduan',
    title: 'Panduan Darurat HP Masuk Air & Kebijakan Garansi — B-Cell Sangatta',
    description:
      'Langkah pertolongan pertama saat HP masuk air atau mati total, simulator diagnosa teknisi, serta SOP garansi resmi hingga 30 hari di Konter B-Cell Sangatta.',
    canonical: `${SITE_URL}/panduan`,
  },
  location: {
    id: 'location',
    path: '/lokasi',
    title: 'Lokasi Konter Service HP Sangatta (Jl. Margo Santoso 2) — B-Cell',
    description:
      'Alamat resmi Konter B-Cell Sangatta di Jl. Margo Santoso 2 RT.41, Kutai Timur. Buka setiap hari 08.00–22.00 WITA. Cek kerusakan awal Rp 0 (Gratis)!',
    canonical: `${SITE_URL}/lokasi`,
  },
};

export const getPageFromLocation = (pathname: string, hash: string): PageRoute => {
  const cleanPath = pathname.toLowerCase().replace(/\/+$/, '') || '/';
  if (cleanPath === '/harga' || cleanPath === '/biaya' || cleanPath === '/katalog') return 'pricing';
  if (cleanPath === '/lacak-nota' || cleanPath === '/tracking') return 'tracking';
  if (cleanPath === '/panduan' || cleanPath === '/darurat' || cleanPath === '/garansi') return 'guide';
  if (cleanPath === '/lokasi' || cleanPath === '/location') return 'location';

  // Backwards compatibility for legacy hash URLs (#/harga, #/lacak-nota, dll)
  const cleanHash = hash.toLowerCase();
  if (cleanHash.startsWith('#/')) {
    if (cleanHash.includes('harga') || cleanHash.includes('calculator')) return 'pricing';
    if (cleanHash.includes('tracking') || cleanHash.includes('lacak')) return 'tracking';
    if (cleanHash.includes('guide') || cleanHash.includes('panduan') || cleanHash.includes('darurat')) return 'guide';
    if (cleanHash.includes('location') || cleanHash.includes('lokasi')) return 'location';
  }

  return 'home';
};

export const applyRouteSeoMeta = (page: PageRoute): void => {
  const meta = ROUTE_SEO[page];
  document.title = meta.title;

  const setMeta = (selector: string, attr: 'content' | 'href', value: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.setAttribute(attr, value);
    }
  };

  setMeta('meta[name="description"]', 'content', meta.description);
  setMeta('link[rel="canonical"]', 'href', meta.canonical);
  setMeta('meta[property="og:title"]', 'content', meta.title);
  setMeta('meta[property="og:description"]', 'content', meta.description);
  setMeta('meta[property="og:url"]', 'content', meta.canonical);
  setMeta('meta[name="twitter:title"]', 'content', meta.title);
  setMeta('meta[name="twitter:description"]', 'content', meta.description);
};
