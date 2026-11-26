import React from 'react';
import { ServiceTracker } from '../components/ServiceTracker';
import { BookingSection } from '../components/BookingSection';
import { FileText, CheckCircle2, Clock, Phone, Wrench, MessageSquare, Info } from 'lucide-react';
import { STORE_CONFIG, getWhatsAppLink } from '../data/storeConfig';

export const TrackingPage: React.FC = () => {
  return (
    <div className="py-12">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium mb-4">
          <Wrench className="w-3.5 h-3.5" />
          <span>DALAM TAHAP PENGEMBANGAN · INTEGRASI SISTEM KONTER</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Lacak Status Nota Service HP Sangatta
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Fitur pelacakan nota digital online saat ini sedang dalam tahap pengembangan untuk dihubungkan langsung dengan aplikasi internal Konter B-Cell Sangatta.
        </p>
      </div>

      {/* Catatan Sementara Pengembangan */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-10">
        <div className="rounded-2xl border border-amber-500/35 bg-gradient-to-r from-amber-950/40 via-zinc-950 to-zinc-950 p-5 sm:p-6 shadow-lg shadow-amber-500/5">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-sm sm:text-base font-bold text-white">
                  Catatan Sementara: Integrasi Aplikasi Internal Konter
                </h2>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  SEGERA HADIR
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Sistem lacak nota otomatis sedang kami hubungkan ke <strong className="text-white">aplikasi kasir &amp; servis internal Konter B-Cell</strong> agar status pengerjaan teknisi bisa tampil real-time di halaman ini. Tampilan pelacakan di bawah saat ini masih menggunakan <strong className="text-amber-300">data simulasi (pratinjau)</strong>.
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Untuk mengecek status servis HP Anda secara langsung hari ini, silakan kirim nomor nota fisik Anda ke WhatsApp resmi kami:
              </p>
              <div className="pt-2">
                <a
                  href={getWhatsAppLink('Halo B-Cell Sangatta, saya ingin cek status pengerjaan servis HP saya. Nomor nota saya: ')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-md shadow-emerald-700/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Cek Status Nota Langsung via WhatsApp ({STORE_CONFIG.phoneFormatted})</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Komponen Service Tracker (Pratinjau Simulasi) */}
      <ServiceTracker />

      {/* Informasi Pengambilan & Bantuan */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-400" />
            <span>Petunjuk Pengambilan Unit Servis</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-zinc-400">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-zinc-200 block mb-1">Bawa Nota Fisik / Chat WA</strong>
                Tunjukkan lembar nota fisik atau chat WhatsApp resmi saat pengambilan unit di konter.
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-zinc-200 block mb-1">Jam Buka Pengambilan</strong>
                Buka setiap hari (Senin – Minggu) pukul 08.00 – 22.00 WITA di Jl. Margo Santoso 2 RT.41.
              </div>
            </div>
          </div>
          <div className="mt-6 pt-5 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
            <span>Nota hilang atau belum mendapat konfirmasi?</span>
            <a
              href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=Halo%20B-Cell,%20saya%20ingin%20menanyakan%20status%20servis%20HP%20saya`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600/15 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/30 transition font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Hubungi CS Servis via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Booking / Pertanyaan Baru */}
      <BookingSection />
    </div>
  );
};
