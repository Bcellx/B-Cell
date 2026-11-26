import React, { useState } from 'react';
import { STORE_CONFIG } from '../data/storeConfig';
import { 
  BadgePercent, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  MapPin, 
  MessageSquare, 
  ArrowRight, 
  Smartphone, 
  Camera, 
  BatteryWarning, 
  Cpu, 
  HelpCircle,
  Banknote,
  Send
} from 'lucide-react';

export const BuyBrokenPhoneSection: React.FC = () => {
  const [deviceBrand, setDeviceBrand] = useState('iPhone');
  const [deviceModel, setDeviceModel] = useState('');
  const [conditionNote, setConditionNote] = useState('Layar Pecah');
  const [accessoriesNote, setAccessoriesNote] = useState('Unit + Dus Box');

  const conditions = [
    'Mati Total / Kerusakan Mesin',
    'Layar Pecah / Touchscreen Error',
    'Bootloop / Mentok Logo',
    'Baterai Drop Parah',
    'Kamera Off / Masuk Air',
    'Minus Lainnya'
  ];

  const brands = [
    'iPhone',
    'Samsung',
    'Xiaomi / Poco / Redmi',
    'Oppo / Realme',
    'Vivo / iQOO',
    'Infinix / Tecno'
  ];

  const generateWaMessage = () => {
    const text = `Halo Konter B-Cell Sangatta, saya mau jual HP minus/rusak untuk bahan service:
- Merk / Tipe: ${deviceBrand} ${deviceModel ? deviceModel : '(Seri Menengah/Terbaru)'}
- Kondisi Kerusakan: ${conditionNote}
- Kelengkapan: ${accessoriesNote}
- Status Akun: Bebas iCloud / Google FRP / Mi Account (Unit Milik Pribadi)
- Lokasi: Area Sangatta

Bisa bantu taksir harga estimasinya? Berikut saya lampirkan foto unitnya:`;
    return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="beli-hp-rusak" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium mb-3">
          <BadgePercent className="w-4 h-4 text-amber-400" />
          <span>PROGRAM BUYBACK & KANIBAL SPAREPART SANGATTA</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
          Jasa Terima / Beli HP Minus & Rusak Layak Pakai — Sangatta
        </h2>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          Punya HP Android atau iPhone yang rusak, pecah, atau tidak terpakai lagi di rumah? 
          Daripada hanya disimpan di lemari dan nilainya makin turun, <strong className="text-white">jual saja ke Konter B-Cell</strong> untuk bahan perbaikan dan kanibal sparepart!
        </p>
      </div>

      {/* 3 Main Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Pillar 1: Kondisi yang Diterima */}
        <div className="bg-zinc-950/90 border border-zinc-800 hover:border-amber-500/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all shadow-lg hover:shadow-amber-500/5 group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-105 transition">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span>Kondisi HP yang Diterima</span>
            </h3>
            <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
              Kami menerima berbagai kondisi kerusakan untuk dijadikan bahan riset dan kanibal komponen:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Mati total</strong> / Kerusakan mesin & IC</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Layar pecah</strong> / Touchscreen error / Bergaris</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Bootloop</strong> / Baterai drop kembung / Kamera off</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-900 bg-zinc-900/40 rounded-xl p-3 text-[11px] text-amber-300 font-medium border border-amber-500/20">
            ⚠️ <strong>Catatan Unit:</strong> Khusus Android keluaran terbaru / seri menengah & iPhone (Bukan HP jadul).
          </div>
        </div>

        {/* Pillar 2: Syarat Legalitas & Keamanan */}
        <div className="bg-zinc-950/90 border border-zinc-800 hover:border-emerald-500/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all shadow-lg hover:shadow-emerald-500/5 group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-105 transition">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Syarat Legalitas (Wajib)
            </h3>
            <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
              Demi keamanan hukum dan privasi bersama, kami menerapkan standar seleksi ketat:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Bebas Kuncian Akun:</strong> Wajib bebas dari kuncian iCloud, Google FRP, atau Mi Account.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Unit Milik Pribadi:</strong> Bukan barang temuan atau curian (diutamakan ada kelengkapan dus/nota jika ada).</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-900 bg-emerald-950/20 rounded-xl p-3 text-[11px] text-emerald-300 font-medium border border-emerald-500/20">
            🛡️ <strong>Keamanan Transaksi:</strong> Data pribadi Anda akan diformat dan dipastikan bersih dari sisa riwayat lama.
          </div>
        </div>

        {/* Pillar 3: Sistem Transaksi Sangatta */}
        <div className="bg-zinc-950/90 border border-zinc-800 hover:border-blue-500/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all shadow-lg hover:shadow-blue-500/5 group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-105 transition">
              <Banknote className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Sistem Transaksi Cepat
            </h3>
            <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
              Mekanisme mudah tanpa ribet, langsung cair di tempat setelah pengecekan teknis:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Harga Transparan:</strong> Disesuaikan tipe, kelengkapan, dan tingkat kerusakan.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>COD Area Sangatta:</strong> Cek fisik unit di tempat atau datang ke konter Jl. Margo Santoso 2 RT.41.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Khusus Ambil HP Rusak:</strong> Fokus pembelian unit rusak/minus untuk bahan kanibal sparepart &amp; riset servis.</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-900 bg-blue-950/20 rounded-xl p-3 text-[11px] text-blue-300 font-medium border border-blue-500/20">
            💵 <strong>Pembayaran Instan:</strong> Uang langsung tunai (Cash) atau Transfer Bank saat kesepakatan selesai.
          </div>
        </div>
      </div>

      {/* Interactive WhatsApp Estimator Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-950 via-zinc-900/90 to-black p-6 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Info */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/20 text-amber-300 text-xs font-mono font-semibold">
              <span>PENGAJUAN PENAWARAN HARGA CEPAT</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Kirim Foto Unit & Dapatkan Taksiran Harga Langsung
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Silakan foto bagian depan, belakang, dan kondisi layar HP Anda. Kirimkan detail tipe dan kelengkapannya via WhatsApp atau datang langsung ke konter kami di Sangatta.
            </p>

            {/* Quick Specs Selector for WhatsApp Draft */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="text-zinc-400 block mb-1 font-mono">Merk Perangkat:</label>
                <select
                  value={deviceBrand}
                  onChange={(e) => setDeviceBrand(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2 text-zinc-200 focus:outline-none focus:border-amber-400"
                >
                  {brands.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-zinc-400 block mb-1 font-mono">Tipe / Model Spesifik:</label>
                <input
                  type="text"
                  placeholder="Contoh: iPhone 11 / Redmi Note 12"
                  value={deviceModel}
                  onChange={(e) => setDeviceModel(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-zinc-400 block mb-1 font-mono">Kondisi Kerusakan:</label>
                <select
                  value={conditionNote}
                  onChange={(e) => setConditionNote(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2 text-zinc-200 focus:outline-none focus:border-amber-400"
                >
                  {conditions.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-zinc-400 block mb-1 font-mono">Kelengkapan Unit:</label>
                <select
                  value={accessoriesNote}
                  onChange={(e) => setAccessoriesNote(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2 text-zinc-200 focus:outline-none focus:border-amber-400"
                >
                  <option value="Unit HP Saja (Batangan)">Unit HP Saja (Batangan)</option>
                  <option value="Unit + Dus Box Asli">Unit + Dus Box Asli</option>
                  <option value="Fullset (Unit + Dus + Nota)">Fullset (Unit + Dus + Nota)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right Action Box */}
          <div className="lg:col-span-5 bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-1">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>LOKASI TOKO & AREA COD:</span>
              </div>
              <div className="text-sm font-bold text-white mb-3">
                Jl. Margo Santoso 2 RT.41, Sangatta, Kutai Timur
              </div>
              <div className="text-xs text-zinc-400 leading-relaxed border-t border-zinc-800 pt-3">
                Bisa janjian COD area Sangatta Utara, Sangatta Selatan, Teluk Lingga, Swarga Bara, atau bawa langsung ke konter saat jam operasional.
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={generateWaMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Kirim Detail via WhatsApp ({STORE_CONFIG.phoneFormatted})</span>
              </a>

              <a
                href={STORE_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white font-medium text-xs flex items-center justify-center gap-2 transition"
              >
                <span>Kirim via Facebook Messenger</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
