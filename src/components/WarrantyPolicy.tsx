import React from 'react';
import { WARRANTY_RULES } from '../data/accessories';
import { STORE_CONFIG, getWhatsAppLink } from '../data/storeConfig';
import { ShieldCheck, Check, AlertOctagon, FileText, MessageSquare } from 'lucide-react';

export const WarrantyPolicy: React.FC = () => {
  return (
    <section id="warranty-policy" className="py-24 bg-zinc-950/70 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-wider mb-2">
            TRANSPARANSI HUKUM & KONSUMEN
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            SOP & Kebijakan Garansi B-Cell
          </h2>
          <p className="text-zinc-400 text-sm mt-3">
            Garansi tertulis jelas demi ketenangan Anda. Kami mengutamakan pertanggungjawaban purna jual tanpa berbelit-belit.
          </p>
        </div>

        {/* Periods Table */}
        <div className="bg-black border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl mb-8">
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>Masa Berlaku Garansi Berdasarkan Komponen</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WARRANTY_RULES.coveragePeriods.map((rule, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-semibold text-white text-xs sm:text-sm">{rule.part}</span>
                    <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {rule.period}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed mt-1">
                    {rule.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Covered vs Void Rules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Covered */}
          <div className="p-6 sm:p-8 rounded-3xl bg-black border border-zinc-800">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase mb-4">
              <Check className="w-4 h-4" />
              <span>KONDISI YANG DIJAMIN GARANSI</span>
            </div>
            <ul className="space-y-3 text-xs text-zinc-300">
              {WARRANTY_RULES.coveredItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Void */}
          <div className="p-6 sm:p-8 rounded-3xl bg-black border border-zinc-800">
            <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase mb-4">
              <AlertOctagon className="w-4 h-4" />
              <span>HAL YANG MENGGUGURKAN GARANSI</span>
            </div>
            <ul className="space-y-3 text-xs text-zinc-300">
              {WARRANTY_RULES.voidItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                    ✕
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Claim Procedure */}
        <div className="mt-8 p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-white">Cara Mudah Klaim Garansi B-Cell:</h3>
              <p className="text-[11px] text-zinc-400 mt-0.5">
                Cukup bawa nota fisik atau tunjukkan riwayat chat WhatsApp terdaftar ke konter Jl. Margo Santoso 2 RT.41. Langsung diprioritaskan!
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppLink('Halo B-Cell Sangatta, saya ingin konsultasi terkait klaim garansi servis HP saya.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2.5 rounded-xl text-xs font-medium transition flex items-center gap-2 border border-zinc-700"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>Konsultasi Klaim via WA</span>
          </a>
        </div>
      </div>
    </section>
  );
};
