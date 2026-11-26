import React from 'react';
import { STORE_CONFIG } from '../data/storeConfig';
import { PageRoute } from '../data/seoRoutes';
import { MessageSquare, Navigation, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onNavigate?: (page: PageRoute, anchor?: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const googleMapsUrl = STORE_CONFIG.googleMapsUrl;
  const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=Halo%20Teknisi%20B-Cell%20Sangatta,%20saya%20mau%20konsultasi%20kondisi%20HP%20saya%20yang%20rusak`;

  return (
    <section aria-label="Pengenalan Layanan" className="relative pt-10 pb-12 md:pt-16 md:pb-16 hero-glow overflow-hidden text-center border-b border-zinc-900">
      {/* Background Animated Tech Gradients */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-pulse"
        style={{ animationDuration: '4s' }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Lokasi & Status Buka Konter (Langsung menjawab "Toko ini nyata & buka di mana") */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-zinc-300 font-medium">B-CELL SANGATTA</span>
          <span className="text-zinc-600">·</span>
          <span className="text-blue-400">Jl. Margo Santoso 2 RT.41</span>
          <span className="text-zinc-600">·</span>
          <span className="text-zinc-400 font-sans">Setiap Hari 08.00 – 22.00 WITA</span>
        </div>

        {/* Hero Title: Render langsung tanpa opacity:0 agar LCP optimal */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent leading-[1.15]">
          Service HP Express Sangatta. Dikerjakan di Depan Mata Anda.
        </h1>

        {/* Hero Subtitle: Menghilangkan rasa takut konsumen (biaya & privasi) */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-normal mb-8 leading-relaxed">
          Spesialis ganti LCD, baterai, mati total, &amp; kena air untuk iPhone dan Android. <strong className="text-white">Pengecekan awal selalu GRATIS</strong>, estimasi biaya disepakati di awal tanpa biaya siluman.
        </p>

        {/* Action Buttons: HANYA 2 TOMBOL UTAMA (Chat WA & Rute Maps) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-3.5 rounded-xl font-bold transition text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 hover:scale-[1.02] cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Konsultasi Kerusakan via WhatsApp</span>
          </a>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 px-6 py-3.5 rounded-xl font-semibold transition text-sm flex items-center justify-center gap-2 hover:scale-[1.02] cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-blue-400" />
            <span>Petunjuk Arah Konter (Maps)</span>
          </a>
        </div>

        {/* 3 Realita Penenang Pikiran (Menjawab 3 Ketakutan Terbesar Pelanggan HP Rusak) */}
        <div className="mt-8 pt-6 border-t border-zinc-900/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-zinc-400 max-w-2xl mx-auto text-left sm:text-center">
          <div className="flex items-center sm:justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong>Cek Awal Rp 0 (Gratis)</strong> jika batal</span>
          </div>
          <div className="flex items-center sm:justify-center gap-2">
            <Clock className="w-4 h-4 text-blue-400 shrink-0" />
            <span><strong>Bisa Ditunggu</strong></span>
          </div>
          <div className="flex items-center sm:justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
            <span><strong>Privasi Aman:</strong> Tak perlu pin/password</span>
          </div>
        </div>
      </div>
    </section>
  );
};
