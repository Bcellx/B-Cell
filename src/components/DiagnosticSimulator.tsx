import React, { useState } from 'react';
import { DIAGNOSTIC_DATA } from '../data/diagnostics';
import { PageRoute, ROUTE_SEO } from '../data/seoRoutes';
import { DiagnosticKey } from '../types';
import { Clock, Shield, Sparkles, Check, ArrowRight, AlertCircle } from 'lucide-react';

interface DiagnosticSimulatorProps {
  onNavigate?: (page: PageRoute, anchor?: string) => void;
}

export const DiagnosticSimulator: React.FC<DiagnosticSimulatorProps> = ({ onNavigate }) => {
  const [selectedKey, setSelectedKey] = useState<DiagnosticKey>('lcd');
  const currentItem = DIAGNOSTIC_DATA[selectedKey];

  const formatIDR = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="diagnostics" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="text-xs font-mono font-medium text-blue-400 uppercase tracking-wider mb-2">
          SISTEM DIAGNOSA INTERAKTIF
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Simulasi Kerusakan & Penanganan Cepat
        </h2>
        <p className="text-zinc-400 text-sm mt-3">
          Pilih keluhan utama pada smartphone Anda untuk melihat prosedur perbaikan, estimasi durasi, dan spesifikasi suku cadang yang digunakan.
        </p>
      </div>

      {/* Segmented Control Filter (Functional buttons with active states) */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-zinc-950 border border-zinc-800 rounded-2xl max-w-2xl mx-auto mb-8">
        {(Object.keys(DIAGNOSTIC_DATA) as DiagnosticKey[]).map((key) => {
          const item = DIAGNOSTIC_DATA[key];
          const isActive = selectedKey === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedKey(key)}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Diagnostic Display Card */}
      <div className="bg-zinc-950 border border-zinc-800/90 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-10 card-glow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Details Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="font-mono text-blue-400 uppercase tracking-wider">{currentItem.badge}</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-zinc-500" />
                <span>Pengerjaan: {currentItem.estimatedTime}</span>
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {currentItem.title}
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed">
              {currentItem.description}
            </p>

            {/* Symptoms Checklist */}
            <div className="bg-zinc-900/80 border border-zinc-800/70 rounded-2xl p-4 sm:p-5">
              <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Gejala Kerusakan yang Kerap Muncul:</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300">
                {currentItem.symptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Meta Pricing & Warranty Info */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 border-t border-zinc-900 text-xs">
              <div>
                <span className="text-zinc-500 block mb-0.5">Garansi Toko</span>
                <span className="font-semibold text-white flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  {currentItem.warranty}
                </span>
              </div>
              <div>
                <span className="text-zinc-500 block mb-0.5">Estimasi Biaya</span>
                <span className="font-bold text-emerald-400 text-sm flex items-center gap-1">
                  Konsultasi via WA
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-zinc-500 block mb-0.5">Suku Cadang Rekomendasi</span>
                <span className="font-medium text-zinc-300">{currentItem.recommendedPart}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`${ROUTE_SEO.pricing.path}#calculator`}
                onClick={(e) => {
                  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('pricing', '#calculator');
                  }
                }}
                className="inline-flex items-center gap-2 bg-emerald-600/15 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/30 px-5 py-2.5 rounded-xl text-xs font-semibold transition"
              >
                <span>Tanya Estimasi Kerusakan Ini ke Teknisi</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Visual Showcase Column */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 relative aspect-4/3 group shadow-2xl">
              <img
                src={currentItem.imageUrl}
                alt={currentItem.title}
                width={800}
                height={600}
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Animated Laser Scanning Beam */}
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_15px_#3b82f6] animate-scan pointer-events-none z-10" />

              {/* Grid overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#3b82f615_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-5 z-10">
                <div className="flex items-center gap-2 text-white font-medium text-xs mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Teknisi Berpengalaman & Lab Mikroskopis</span>
                </div>
                <p className="text-[11px] text-zinc-300">
                  Dikerjakan dengan thermal mat antistatis dan tools obeng kalibrasi pabrik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
