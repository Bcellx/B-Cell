import React from 'react';
import { Eye, ShieldCheck, CheckCircle2, RotateCcw, Award, HandCoins } from 'lucide-react';

export const QualityGuarantees: React.FC = () => {
  const pillars = [
    {
      icon: <HandCoins className="w-5 h-5 text-emerald-400" />,
      title: 'Pengecekan Awal 100% GRATIS',
      description: 'HP dibongkar dan diukur arusnya di depan Anda. Jika biaya perbaikan dirasa tidak cocok, HP dirakit kembali dan dibawa pulang tanpa dipungut biaya sepeser pun.'
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-blue-400" />,
      title: 'Persetujuan Biaya di Awal',
      description: 'Tidak ada biaya siluman atau tagihan mendadak di akhir. Teknisi dilarang mengeksekusi obeng sebelum estimasi biaya disepakati bersama oleh Anda.'
    },
    {
      icon: <Eye className="w-5 h-5 text-indigo-400" />,
      title: 'Meja Teknisi Terbuka & Nyaman',
      description: 'Proses perbaikan dapat Anda saksikan langsung di depan meja teknisi konter kami di Jl. Margo Santoso 2 RT.41 tanpa sekat tertutup. Aman dari kecurangan.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
      title: 'Garansi Toko Resmi & Bertanggung Jawab',
      description: 'Dilengkapi nota fisik dan digital bergaransi toko resmi. Jika kendala serupa kambuh dalam masa garansi, kami perbaiki kembali dengan cepat dan ramah.'
    }
  ];

  return (
    <section className="py-24 bg-zinc-950/80 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-wider mb-2">
            SOP & INTEGRITAS LAYANAN
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            SOP Servis Jujur Tanpa Was-Was
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3">
            Komitmen kami di Sangatta: diagnosa jujur di depan mata, biaya disepakati di awal, dan jaminan pengerjaan yang bertanggung jawab.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-black border border-zinc-800 rounded-3xl flex flex-col justify-between card-glow"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-900/80 flex items-center gap-1.5 text-[11px] text-zinc-500 font-mono">
                <Award className="w-3.5 h-3.5 text-zinc-400" />
                <span>Standar Mutu B-Cell Sangatta</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
