import React from 'react';
import { READY_ACCESSORIES } from '../data/accessories';
import { STORE_CONFIG, getWhatsAppLink } from '../data/storeConfig';
import { Sparkles, Check, ShieldCheck, ArrowRight, ShoppingBag } from 'lucide-react';

export const AccessoriesCatalog: React.FC = () => {
  const formatIDR = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="accessories" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="text-xs font-mono font-medium text-blue-400 uppercase tracking-wider mb-2">
            PROTEKSI LAYAR & AKSESORI READY STOCK
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Aksesori & Pasang Hydrogel di Sangatta
          </h2>
        </div>
        <p className="text-zinc-400 text-xs sm:text-sm max-w-md leading-relaxed">
          Semua pelindung layar dan tempered glass dipasangkan langsung oleh teknisi B-Cell secara presisi, bebas gelembung, dan bebas debu di Jl. Margo Santoso 2 RT.41.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {READY_ACCESSORIES.map((item) => (
          <div
            key={item.id}
            className="bg-black border border-zinc-800 rounded-3xl p-5 flex flex-col justify-between card-glow group"
          >
            <div>
              <div className="aspect-square bg-zinc-900 rounded-2xl overflow-hidden mb-4 relative">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  width={600}
                  height={600}
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-mono text-zinc-300 border border-zinc-800">
                  {item.category}
                </div>
                {item.freeInstall && (
                  <div className="absolute bottom-3 left-3 bg-emerald-600/90 text-white px-2 py-0.5 rounded text-[10px] font-bold">
                    Gratis Pasang di Konter
                  </div>
                )}
              </div>

              <h3 className="text-sm font-bold text-white tracking-tight group-hover:text-blue-400 transition">
                {item.name}
              </h3>

              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                {item.highlight}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-900">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-[11px] text-zinc-500">Harga Pasang</span>
                <span className="text-lg font-extrabold text-blue-400 font-mono">
                  {formatIDR(item.price)}
                </span>
              </div>

              <div className="text-[11px] text-zinc-400 flex items-center gap-1 mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">{item.warranty}</span>
              </div>

              <a
                href={getWhatsAppLink(`Halo B-Cell Sangatta, saya mau pasang/beli: ${item.name} (${formatIDR(item.price)}). Apakah stok masih ready di konter Jl. Margo Santoso 2?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-zinc-900 hover:bg-emerald-600 text-zinc-200 hover:text-white py-2 rounded-xl text-xs font-semibold transition border border-zinc-800 hover:border-emerald-600 flex items-center justify-center gap-1.5"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Pesan / Pasang di Toko</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
