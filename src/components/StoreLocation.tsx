import React, { useState } from 'react';
import { STORE_CONFIG } from '../data/storeConfig';
import { PageRoute, ROUTE_SEO } from '../data/seoRoutes';
import { MapPin, Navigation, Clock, Phone, Check, Copy, ExternalLink } from 'lucide-react';

interface StoreLocationProps {
  onNavigate?: (page: PageRoute, anchor?: string) => void;
}

export const StoreLocation: React.FC<StoreLocationProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const storeAddress = `${STORE_CONFIG.name}, ${STORE_CONFIG.address}`;
  const googleMapsUrl = STORE_CONFIG.googleMapsUrl;

  const handleBookingClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (onNavigate) {
      e.preventDefault();
      onNavigate('pricing', '#booking');
    }
  };

  const bookingHref = onNavigate ? `${ROUTE_SEO.pricing.path}#booking` : '#booking';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(storeAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-mono font-medium text-blue-400 uppercase tracking-wider mb-2">
            LOKASI & JAM OPERASIONAL
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Kunjungi Konter B-Cell Sangatta
          </h2>
          <p className="text-zinc-400 text-sm mt-3">
            Datang langsung untuk konsultasi gratis, cek fisik smartphone di depan teknisi, atau nikmati layanan antar-jemput area Sangatta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Information Column */}
          <div className="lg:col-span-7 bg-black border border-zinc-800 rounded-3xl p-6 sm:p-9 flex flex-col justify-between card-glow">
            <div className="space-y-6">
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-zinc-900">
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">KONTER FISIK RESMI</span>
                  <h3 className="text-2xl font-bold text-white mt-1">Konter B-Cell Sangatta</h3>
                  <p className="text-zinc-300 text-sm mt-2 flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Jl. Margo Santoso 2 RT.41, Sangatta, Kabupaten Kutai Timur, Kalimantan Timur</span>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="shrink-0 p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition text-xs flex items-center gap-1.5 cursor-pointer"
                  title="Salin Alamat Lengkap"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-[11px] text-emerald-400">Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-zinc-400" />
                      <span className="text-[11px]">Salin</span>
                    </>
                  )}
                </button>
              </div>

              {/* Operating Hours in WITA */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>Jadwal Buka Toko (Waktu Indonesia Tengah / WITA):</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-2xl bg-zinc-900/70 border border-zinc-800/80">
                    <span className="text-zinc-400 block font-medium">Senin – Sabtu</span>
                    <span className="text-base font-bold text-white mt-0.5 block">08.00 – 22.00 WITA</span>
                    <span className="text-[11px] text-emerald-400 mt-1 block">Layanan Express Bisa Ditunggu</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-zinc-900/70 border border-zinc-800/80">
                    <span className="text-zinc-400 block font-medium">Minggu &amp; Hari Libur</span>
                    <span className="text-base font-bold text-white mt-0.5 block">08.00 – 22.00 WITA</span>
                    <span className="text-[11px] text-emerald-400 mt-1 block">Buka Setiap Hari Siap Melayani</span>
                  </div>
                </div>
              </div>

              {/* Coverage area Sangatta */}
              <div>
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2 font-mono">
                  Jangkauan Antar-Jemput Area Sangatta:
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  {[
                    'Jl. Margo Santoso 1 & 2',
                    'Sangatta Utara',
                    'Sangatta Selatan',
                    'Teluk Lingga',
                    'Swarga Bara',
                    'Singa Gembara',
                    'Kanal 1 - 3',
                    'Bengalon / Rantau Pulung (Ekspedisi/Travel)'
                  ].map((area, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-[11px]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-900 flex flex-col sm:flex-row gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-3 px-4 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
              >
                <Navigation className="w-4 h-4" />
                <span>Buka Petunjuk Arah Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-200" />
              </a>

              <a
                href={bookingHref}
                onClick={handleBookingClick}
                className="bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 py-3 px-5 rounded-xl text-xs font-medium transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Hubungi Teknisi B-Cell</span>
              </a>
            </div>
          </div>

          {/* Interactive Visual Map & Landmark Card */}
          <div className="lg:col-span-5 bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Buka titik Google Maps Konter B-Cell Sangatta"
                className="block relative aspect-4/3 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 mb-5 group shadow-xl hover:border-blue-500/50 transition cursor-pointer"
              >
                <img
                  src="/store-location-map.jpg"
                  alt="Peta Titik Google Maps Konter B-Cell Jl. Margo Santoso 2 RT.41 Sangatta"
                  width={960}
                  height={720}
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-5">
                  <div className="bg-blue-600 text-white text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-lg w-max mb-1.5 flex items-center gap-1.5 shadow-md shadow-blue-600/30">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>BUKA GOOGLE MAPS B-CELL</span>
                  </div>
                  <p className="text-white font-bold text-sm tracking-tight flex items-center justify-between">
                    <span>Jl. Margo Santoso 2 RT.41, Sangatta</span>
                    <ExternalLink className="w-4 h-4 text-blue-400 group-hover:translate-x-0.5 transition" />
                  </p>
                </div>
              </a>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-black/60 border border-zinc-800 flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Petunjuk Mudah Dicari</strong>
                    <span className="text-zinc-400 text-[11px]">
                      Terletak di Jl. Margo Santoso 2 (RT.41), Sangatta, Kutai Timur. Hubungi WhatsApp bila butuh panduan rute.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 text-[11px] text-zinc-400 text-center">
              Punya pertanyaan sebelum datang? <a href={bookingHref} onClick={handleBookingClick} className="text-blue-400 hover:underline">Tanyakan stok suku cadang via WA</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
