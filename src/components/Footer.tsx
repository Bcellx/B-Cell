import React from 'react';
import { BCellLogo } from './BCellLogo';
import { Facebook, MapPin, Clock, ShieldCheck, Navigation } from 'lucide-react';
import { PageRoute, ROUTE_SEO } from '../data/seoRoutes';
import { STORE_CONFIG } from '../data/storeConfig';

interface FooterProps {
  onNavigate?: (page: PageRoute, anchor?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const googleMapsUrl = STORE_CONFIG.googleMapsUrl;

  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: PageRoute,
    anchor?: string
  ) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page, anchor);
    }
  };

  return (
    <footer className="bg-black border-t border-zinc-900 py-16 text-xs text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-white font-bold text-sm">
              <div className="w-8 h-8 rounded-lg bg-black border border-zinc-800 flex items-center justify-center p-1.5 shadow-sm">
                <BCellLogo className="w-full h-full text-white" />
              </div>
              <span>Konter B-Cell Sangatta</span>
            </div>
            <p className="text-zinc-400 leading-relaxed text-xs">
              Pusat servis HP express terpercaya, suku cadang OEM &amp; Original, penanganan mesin mati total, dan terima HP rusak/minus di Sangatta, Kutai Timur.
            </p>
            <div className="pt-1 flex items-start gap-2 text-zinc-300">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>Jl. Margo Santoso 2 RT.41, Sangatta, Kutai Timur, Kalimantan Timur</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Garansi Resmi Toko s/d 30 Hari</span>
            </div>
          </div>

          {/* Col 2: Navigasi Halaman */}
          <div>
            <h2 className="font-semibold text-white mb-3 text-xs uppercase tracking-wider font-mono">
              Halaman Utama
            </h2>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a
                  href={ROUTE_SEO.home.path}
                  onClick={(e) => handleNav(e, 'home')}
                  className="hover:text-white transition cursor-pointer inline-block"
                >
                  Beranda Konter
                </a>
              </li>
              <li>
                <a
                  href={ROUTE_SEO.pricing.path}
                  onClick={(e) => handleNav(e, 'pricing')}
                  className="hover:text-white transition cursor-pointer inline-block"
                >
                  Layanan &amp; Estimasi Biaya
                </a>
              </li>
              <li>
                <a
                  href={ROUTE_SEO.tracking.path}
                  onClick={(e) => handleNav(e, 'tracking')}
                  className="hover:text-emerald-400 transition cursor-pointer inline-block"
                >
                  Lacak Nota Servis Digital
                </a>
              </li>
              <li>
                <a
                  href={ROUTE_SEO.guide.path}
                  onClick={(e) => handleNav(e, 'guide')}
                  className="hover:text-amber-400 transition cursor-pointer inline-block"
                >
                  Panduan HP Masuk Air / Mati
                </a>
              </li>
              <li>
                <a
                  href={`${ROUTE_SEO.pricing.path}#beli-hp-rusak`}
                  onClick={(e) => handleNav(e, 'pricing', '#beli-hp-rusak')}
                  className="text-amber-400 hover:text-amber-300 transition cursor-pointer inline-block font-semibold"
                >
                  Jual HP Rusak / Minus Sangatta
                </a>
              </li>
              <li>
                <a
                  href={ROUTE_SEO.location.path}
                  onClick={(e) => handleNav(e, 'location')}
                  className="hover:text-white transition cursor-pointer inline-block"
                >
                  Lokasi Toko &amp; Rute Maps
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Operating Hours (WITA) */}
          <div>
            <h2 className="font-semibold text-white mb-3 text-xs uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>Jam Operasional (WITA)</span>
            </h2>
            <div className="space-y-2 leading-relaxed text-zinc-400">
              <p>
                <strong className="text-zinc-200">Setiap Hari (Senin – Minggu):</strong><br />
                08.00 – 22.00 WITA
              </p>
              <p>
                <strong className="text-zinc-200">Hari Libur:</strong><br />
                Tetap Buka 08.00 – 22.00 WITA
              </p>
              <p className="text-[11px] text-emerald-400 pt-1">
                Layanan Express Bisa Ditunggu
              </p>
            </div>
          </div>

          {/* Col 4: Official Social & Navigation */}
          <div>
            <h2 className="font-semibold text-white mb-3 text-xs uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Facebook className="w-3.5 h-3.5 text-white" />
              <span>Media Sosial &amp; Rute</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-3">
              Kunjungi akun Facebook resmi B-Cell untuk update hasil pengerjaan dan testimoni pelanggan:
            </p>
            <div className="space-y-2.5">
              <a
                href={STORE_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 bg-blue-600/15 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 rounded-xl transition text-xs font-semibold"
              >
                <Facebook className="w-4 h-4 text-white" />
                <span>Halaman Facebook B-Cell</span>
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 rounded-xl transition text-xs"
              >
                <Navigation className="w-3.5 h-3.5 text-emerald-400" />
                <span>Petunjuk Google Maps Toko</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-zinc-500">
          <div>
            © 2026 Konter B-Cell Sangatta. Jl. Margo Santoso 2 RT.41, Sangatta.
          </div>
          <div className="flex items-center gap-4">
            <a href={ROUTE_SEO.pricing.path} onClick={(e) => handleNav(e, 'pricing')} className="hover:text-zinc-400 transition cursor-pointer">Kalkulator Biaya</a>
            <span>·</span>
            <a href={ROUTE_SEO.tracking.path} onClick={(e) => handleNav(e, 'tracking')} className="hover:text-zinc-400 transition cursor-pointer">Lacak Nota</a>
            <span>·</span>
            <a href={ROUTE_SEO.location.path} onClick={(e) => handleNav(e, 'location')} className="hover:text-zinc-400 transition cursor-pointer">Lokasi Toko</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
