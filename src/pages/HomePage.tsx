import React from 'react';
import { Hero } from '../components/Hero';
import { RepairVisualizer } from '../components/RepairVisualizer';
import { ServicesBento } from '../components/ServicesBento';
import { QualityGuarantees } from '../components/QualityGuarantees';
import { StoreLocation } from '../components/StoreLocation';
import { CustomerReviews } from '../components/CustomerReviews';
import { FaqSection } from '../components/FaqSection';
import { STORE_CONFIG } from '../data/storeConfig';
import { ArrowRight, Banknote, MessageSquare, PhoneCall } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: 'home' | 'pricing' | 'tracking' | 'guide' | 'location', anchor?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=Halo%20Teknisi%20B-Cell%20Sangatta,%20saya%20mau%20tanya%20estimasi%20biaya%20perbaikan%20HP%20saya`;

  return (
    <div>
      {/* 1. HERO UTAMA: Langsung fokus ke Lokasi, Masalah HP, dan Tombol WA / Maps */}
      <Hero onNavigate={onNavigate} />

      {/* 2. BUKTI KERJA VISUAL NYATA: Slider Interaktif Sebelum vs Sesudah (iPhone 13 Pro White Line) */}
      <RepairVisualizer onNavigate={onNavigate} />

      {/* 3. MENU 6 KERUSAKAN HP PALING SERING: Konsumen langsung mengenali masalah HP-nya */}
      <section className="relative">
        <ServicesBento onNavigate={onNavigate} />
      </section>

      {/* 4. PROGRAM TERIMA / BELI HP RUSAK SANGATTA: Relevan untuk warga yang punya HP bangkai di rumah */}
      <section className="py-6 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-zinc-900/90 to-zinc-950 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-amber-500/5">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-semibold">
                <Banknote className="w-3.5 h-3.5" />
                <span>PROGRAM BUYBACK SPAREPART SANGATTA</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Punya HP Rusak, Layar Pecah, atau Mati Total di Rumah?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl leading-relaxed">
                Daripada disimpan di lemari, <strong className="text-white">jual saja ke Konter B-Cell</strong> untuk kanibal suku cadang resmi! Kami beli Android menengah/baru &amp; iPhone. Bebas kuncian akun, COD area Sangatta, dan langsung cair tunai.
              </p>
            </div>
            <a
              href="/harga#beli-hp-rusak"
              onClick={(e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                e.preventDefault();
                onNavigate('pricing', '#beli-hp-rusak');
              }}
              className="shrink-0 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs sm:text-sm transition flex items-center gap-2 shadow-lg shadow-amber-500/20 hover:scale-105 cursor-pointer"
            >
              <span>Jual HP Rusak Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 5. 4 SOP SERVIS JUJUR: Menghilangkan rasa takut konsumen (biaya & keamanan) */}
      <QualityGuarantees />

      {/* 6. LOKASI TOKO & PETUNJUK JL. MARGO SANTOSO 2 RT.41: Bukti fisik toko nyata */}
      <StoreLocation onNavigate={onNavigate} />

      {/* 7. ULASAN PELANGGAN SANGATTA: Social proof lokal */}
      <CustomerReviews />

      {/* 8. FAQ RINGKAS: Menjawab pertanyaan mendasar */}
      <FaqSection />

      {/* 9. BOTTOM ACTION BANNER (Pengganti form panjang, langsung aksi WA / Telepon) */}
      <section className="py-14 bg-gradient-to-b from-zinc-950 to-black border-t border-zinc-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Gadget Bermasalah? Konsultasikan Sekarang
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Pengecekan awal selalu gratis Rp 0. Teknisi B-Cell siap menjawab pertanyaan estimasi biaya dan stok suku cadang via WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition shadow-lg shadow-emerald-700/25 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat WhatsApp Teknisi (Fast Respon)</span>
            </a>
            <a
              href={`tel:${STORE_CONFIG.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 font-medium text-sm transition cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-blue-400" />
              <span>Telepon Langsung Konter</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
