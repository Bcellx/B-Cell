import React, { useState } from 'react';
import { STORE_CONFIG, getWhatsAppLink } from '../data/storeConfig';
import { BCellLogo } from './BCellLogo';
import { MessageSquare, Phone, X, CheckCircle2, ChevronRight, MapPin, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    { label: 'Tanya Biaya Servis', msg: 'Halo B-Cell Sangatta, saya mau tanya estimasi biaya servis HP.' },
    { label: 'Jual HP Rusak / Minus', msg: 'Halo B-Cell Sangatta, saya mau tawarkan HP rusak/minus untuk bahan service di konter Jl. Margo Santoso 2.' },
    { label: 'Cek Stok Sparepart LCD/Baterai', msg: 'Halo B-Cell Sangatta, saya mau cek ketersediaan sparepart LCD/baterai untuk HP saya di konter Jl. Margo Santoso 2.' },
    { label: 'Tanya Lokasi Toko', msg: 'Halo B-Cell Sangatta, mohon panduan rute ke konter Jl. Margo Santoso 2 RT.41.' },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Expanded Quick Chat Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl p-5 text-left animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3.5 border-b border-zinc-800/80">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center p-2 text-white shadow-sm">
                <BCellLogo className="w-full h-full text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>{STORE_CONFIG.name}</span>
                </p>
                {/* Ripple status inside card header */}
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                    <span className="ripple-dot-outer absolute inline-flex h-full w-full rounded-full bg-emerald-400"></span>
                    <span className="ripple-dot-inner absolute inline-flex h-full w-full rounded-full bg-emerald-300"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span className="text-[11px] text-emerald-400 font-medium">Online Siap Melayani · Sangatta (WITA)</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition cursor-pointer"
              aria-label="Tutup jendela chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-3 text-[11px] text-zinc-300 leading-relaxed mb-3">
              👋 Halo! Butuh bantuan servis express atau cek stok sparepart di konter Jl. Margo Santoso 2 RT.41? Silakan pilih opsi atau chat langsung:
            </div>

            <div className="space-y-1.5">
              {quickMessages.map((item, idx) => (
                <a
                  key={idx}
                  href={getWhatsAppLink(item.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800/80 text-[11px] text-zinc-300 hover:text-white flex items-center justify-between transition group"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-zinc-800/80 flex items-center gap-2">
            <a
              href={`https://wa.me/${STORE_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition shadow-md shadow-emerald-700/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat WhatsApp ({STORE_CONFIG.phoneFormatted})</span>
            </a>

            <a
              href={`tel:${STORE_CONFIG.phoneRaw}`}
              className="p-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 rounded-xl transition"
              title="Telepon Langsung"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
            </a>
          </div>
        </div>
      )}

      {/* Main Trigger Button with Ripple & Wave Effects */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="wa-btn-pulse group flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-4.5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer relative"
        aria-label="Buka Chat WhatsApp B-Cell"
      >
        <div className="relative flex items-center justify-center">
          <MessageSquare className="w-5 h-5 fill-white text-emerald-600" />

          {/* Multi-layered Green Online Ripple Waves */}
          <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center">
            {/* Outer expanding ripple */}
            <span className="ripple-dot-outer absolute inline-flex h-full w-full rounded-full bg-emerald-300"></span>
            {/* Mid delayed ripple */}
            <span className="ripple-dot-inner absolute inline-flex h-full w-full rounded-full bg-emerald-400"></span>
            {/* Center solid green status dot */}
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 border border-emerald-900 shadow-sm"></span>
          </span>
        </div>

        <div className="hidden sm:flex flex-col text-left leading-none">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-emerald-100 flex items-center gap-1">
              <span>ONLINE</span>
            </span>
            <span className="text-zinc-300">·</span>
            <span className="text-[10px] text-emerald-200">B-Cell Sangatta</span>
          </div>
          <span className="text-xs font-bold tracking-tight text-white">
            {STORE_CONFIG.phoneFormatted}
          </span>
        </div>
      </button>
    </div>
  );
};
