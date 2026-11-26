import React, { useState } from 'react';
import { SMARTPHONE_CATALOG } from '../data/phones';
import { SmartphoneProduct } from '../types';
import { STORE_CONFIG } from '../data/storeConfig';
import { Check, ShieldCheck, Repeat, ArrowRight, BatteryMedium } from 'lucide-react';

export const PhoneCatalog: React.FC = () => {
  const [filterBrand, setFilterBrand] = useState<string>('All');

  const filteredPhones = SMARTPHONE_CATALOG.filter((item) => {
    if (filterBrand === 'All') return true;
    if (filterBrand === 'Apple') return item.brand === 'Apple';
    if (filterBrand === 'Samsung') return item.brand === 'Samsung';
    if (filterBrand === 'Android') return item.brand !== 'Apple';
    return true;
  });

  const formatIDR = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  const handleAskStock = (phone: SmartphoneProduct) => {
    const text = `Halo Konter B-Cell Sangatta (Jl. Margo Santoso 2 RT.41), saya tertarik dengan unit smartphone berikut:%0A%0A` +
      `📱 *Nama Unit*: ${encodeURIComponent(phone.name)}%0A` +
      `📦 *Kondisi*: ${encodeURIComponent(phone.condition)}%0A` +
      `💰 *Harga*: ${encodeURIComponent(formatIDR(phone.price))}%0A%0A` +
      `Apakah unit masih ready di konter B-Cell Sangatta? Terima kasih!`;
    window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleTradeInInquiry = () => {
    const text = `Halo Konter B-Cell Sangatta, saya mau tanya program *Tukar Tambah / Jual HP Bekas*.%0A%0ASaya punya HP yang ingin dijual/ditukar tambah di konter Jl. Margo Santoso 2 RT.41. Mohon info taksiran harga dan persyaratannya ya. Terima kasih!`;
    window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="catalog" className="py-24 bg-zinc-950/60 border-y border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono font-medium text-blue-400 uppercase tracking-wider mb-2">
              KONTER & JUAL BELI SMARTPHONE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              HP Second & Baru Bergaransi Toko
            </h2>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-md leading-relaxed">
            Setiap unit second telah melalui 35+ titik pengecekan teknisi (Hardware, IMEI Kemenperin, Face ID/Fingerprint, Baterai, dan Layar Original).
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {[
            { id: 'All', label: 'Semua Stok' },
            { id: 'Apple', label: 'iPhone Second Resmi' },
            { id: 'Samsung', label: 'Samsung Galaxy Series' },
            { id: 'Android', label: 'Android Baru & Second' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilterBrand(tab.id)}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition ${
                filterBrand === tab.id
                  ? 'bg-blue-600 text-white shadow-sm font-semibold'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhones.map((phone) => (
            <div
              key={phone.id}
              className="bg-black border border-zinc-800 rounded-3xl p-5 flex flex-col justify-between card-glow group"
            >
              <div>
                <div className="aspect-4/3 bg-zinc-900 rounded-2xl overflow-hidden mb-4 relative">
                  <img
                    src={phone.imageUrl}
                    alt={phone.name}
                    width={600}
                    height={450}
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-mono text-zinc-200 border border-zinc-700">
                    {phone.condition}
                  </div>
                  {phone.batteryHealth && (
                    <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-mono text-emerald-400 border border-zinc-800 flex items-center gap-1">
                      <BatteryMedium className="w-3 h-3" />
                      <span>BH {phone.batteryHealth}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-zinc-500 mb-1">
                  <span>{phone.brand}</span>
                  <span className="font-mono">{phone.storage}</span>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight group-hover:text-blue-400 transition">
                  {phone.name}
                </h3>

                <ul className="mt-3 space-y-1.5 text-xs text-zinc-400">
                  {phone.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span className="truncate">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-900">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-xs text-zinc-500">Harga Spesial</span>
                  {phone.originalPrice && (
                    <span className="text-[11px] text-zinc-600 line-through">
                      {formatIDR(phone.originalPrice)}
                    </span>
                  )}
                </div>
                <div className="text-xl font-extrabold text-blue-400 mb-4">
                  {formatIDR(phone.price)}
                </div>

                <div className="text-[11px] text-zinc-400 flex items-center gap-1 mb-3">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{phone.warrantyNote}</span>
                </div>

                <button
                  type="button"
                  onClick={() => handleAskStock(phone)}
                  className="w-full bg-zinc-900 hover:bg-blue-600 text-zinc-200 hover:text-white py-2.5 rounded-xl text-xs font-semibold transition border border-zinc-800 hover:border-blue-600"
                >
                  Tanyakan Ketersediaan Stok
                </button>
              </div>
            </div>
          ))}

          {/* Trade-in Card */}
          <div className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-black border border-amber-500/30 rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                <Repeat className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
                LAYANAN KHUSUS KONTER
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Terima Tukar Tambah & Jual HP Bekas
              </h3>
              <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                Punya HP lama, lecet, atau bahkan mati total yang menumpuk di laci? Bawa ke konter kami untuk ditaksir langsung secara profesional.
              </p>

              <div className="mt-5 space-y-2 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Taksiran harga adil & transparan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Bisa potong harga ke unit HP baru / second</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Pencairan dana tunai instan 15 menit</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800">
              <button
                type="button"
                onClick={handleTradeInInquiry}
                className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 py-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10"
              >
                <span>Cek Taksiran HP Bekas Saya</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
