import React, { useState } from 'react';
import { EMERGENCY_GUIDES, EmergencyGuide } from '../data/emergencyGuides';
import { STORE_CONFIG, getWhatsAppLink } from '../data/storeConfig';
import { AlertTriangle, Droplets, Flame, ShieldAlert, Check, X, PhoneCall, ArrowRight, Sparkles } from 'lucide-react';

export const EmergencyGuideSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('air');
  const activeGuide = EMERGENCY_GUIDES.find((g) => g.id === selectedId) || EMERGENCY_GUIDES[0];

  const getIcon = (type: string) => {
    switch (type) {
      case 'droplets': return <Droplets className="w-5 h-5 text-blue-400" />;
      case 'flame': return <Flame className="w-5 h-5 text-amber-400" />;
      default: return <ShieldAlert className="w-5 h-5 text-red-400" />;
    }
  };

  return (
    <section id="emergency-guide" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="text-xs font-mono font-medium text-amber-400 uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
          <span>PANDUAN DARURAT TEKNISI B-CELL</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Pertolongan Pertama HP Rusak
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-3">
          Tindakan cepat dalam 15 menit pertama sangat menentukan keselamatan data dan komponen penting HP Anda sebelum dibawa ke konter Jl. Margo Santoso 2 RT.41.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {EMERGENCY_GUIDES.map((g) => {
          const isActive = selectedId === g.id;
          return (
            <button
              key={g.id}
              type="button"
              onClick={() => setSelectedId(g.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition flex items-center gap-2 ${
                isActive
                  ? 'bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              {getIcon(g.icon)}
              <span>{g.title}</span>
            </button>
          );
        })}
      </div>

      {/* Guide Card */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-10 card-glow shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-zinc-800 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
              <span>TINGKAT URGENSI:</span>
              <span className="font-bold uppercase tracking-wider bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                {activeGuide.urgency}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {activeGuide.title} — {activeGuide.subtitle}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-2xl">
              {activeGuide.summary}
            </p>
          </div>

          <a
            href={getWhatsAppLink(`Halo B-Cell Sangatta, HP saya mengalami kondisi darurat: ${activeGuide.title}. Mohon panduan teknisi langsung sebelum saya bawa ke konter Jl. Margo Santoso 2 ya.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-xl text-xs font-semibold flex items-center gap-2 transition shadow-lg shadow-emerald-700/25"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Hotline Darurat ({STORE_CONFIG.phoneFormatted})</span>
          </a>
        </div>

        {/* Dos and Donts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          {/* WHAT TO DO */}
          <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/20">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase font-bold tracking-wider mb-4">
              <Check className="w-4 h-4" />
              <span>YANG WAJIB ANDA LAKUKAN (DO'S)</span>
            </div>
            <ul className="space-y-3 text-xs text-zinc-300">
              {activeGuide.dos.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* WHAT NOT TO DO */}
          <div className="p-6 rounded-2xl bg-red-950/20 border border-red-500/20">
            <div className="flex items-center gap-2 text-red-400 text-xs font-mono uppercase font-bold tracking-wider mb-4">
              <X className="w-4 h-4" />
              <span>JANGAN PERNAH LAKUKAN (DON'TS)</span>
            </div>
            <ul className="space-y-3 text-xs text-zinc-300">
              {activeGuide.donts.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    ✕
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technician Advice Banner */}
        <div className="mt-8 p-4.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block mb-0.5">Saran Teknisi B-Cell Sangatta:</strong>
            <p className="text-zinc-400 leading-relaxed">
              {activeGuide.technicianAdvice}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
