import React, { useState, useId } from 'react';
import { BrandType } from '../types';
import { STORE_CONFIG } from '../data/storeConfig';
import {
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  HelpCircle,
  Wrench,
  AlertTriangle,
  ArrowRight,
  Search,
  Check
} from 'lucide-react';

interface IssueOption {
  id: string;
  name: string;
  category: string;
  desc: string;
  recommendedPhoto: string;
  typicalTime: string;
}

const COMMON_ISSUES: IssueOption[] = [
  {
    id: 'lcd',
    name: 'Layar / LCD Pecah / Garis / Blank',
    category: 'Display & Glass',
    desc: 'Layar bergaris, tompel tinta hitam, touchscreen loncat/tidak merespons, atau kaca depan retak parah.',
    recommendedPhoto: 'Foto layar menyala dan tampak depan HP',
    typicalTime: 'Bisa Ditunggu'
  },
  {
    id: 'battery',
    name: 'Baterai Drop / Kembung / Mati Mendadak',
    category: 'Power & Charging',
    desc: 'Persentase baterai lompat, HP mati padahal 30%, layar terangkat akibat baterai kembung, atau panas.',
    recommendedPhoto: 'Foto samping HP (apakah layar terdorong kembung)',
    typicalTime: 'Bisa Ditunggu'
  },
  {
    id: 'matot',
    name: 'Mati Total / Tidak Merespons Sama Sekali',
    category: 'Hardware & Mesin',
    desc: 'Tidak ada getar, tidak muncul logo cas, atau mati setelah jatuh / konslet charger.',
    recommendedPhoto: 'Foto riwayat kronologi (jatuh / charger KW / korslet)',
    typicalTime: 'Cek Arus Awal Gratis'
  },
  {
    id: 'water',
    name: 'Kemasukan Air / Tercebur Air Hujan',
    category: 'Emergency Cleaning',
    desc: 'HP terkena air tawar/laut, basah di saku, atau embun di kamera. Kasus ringan bisa ditunggu; jika masuk area mesin butuh waktu lebih lama.',
    recommendedPhoto: 'Kondisi luar & sudah berapa hari sejak kejadian',
    typicalTime: 'Ringan: Bisa Ditunggu · Area Mesin: Lebih Lama'
  },
  {
    id: 'charging',
    name: 'Tidak Bisa Dicas / Port Cas Longgar',
    category: 'Connector Port',
    desc: 'Kabel harus ditekan/goyang baru cas, lambat mengisi, atau muncul peringatan port basah.',
    recommendedPhoto: 'Foto lubang konektor charger',
    typicalTime: 'Bisa Ditunggu'
  },
  {
    id: 'camera',
    name: 'Kamera Blur / Getar / Kaca Lensa Pecah',
    category: 'Optics & Sensor',
    desc: 'Kamera bergetar saat video, fokus tidak jalan, bintik hitam, atau kaca pelindung pecah.',
    recommendedPhoto: 'Tangkapan layar hasil kamera',
    typicalTime: 'Bisa Ditunggu'
  },
  {
    id: 'restoration',
    name: 'Restorasi Full Housing (Frame & Backdoor)',
    category: 'Body Restoration',
    desc: 'Frame/tulang bengkok atau penyok, bezel lecet parah, atau kaca backdoor pecah — disegarkan jadi seperti baru tanpa ganti mesin/data.',
    recommendedPhoto: 'Foto tampak belakang, samping frame, dan warna housing yang diinginkan',
    typicalTime: '1 - 3 Jam (Stok Ready / PO Part)'
  },
  {
    id: 'software',
    name: 'Bootloop / Mentok Logo / Lupa Akun & Sandi',
    category: 'Firmware & System',
    desc: 'HP restart terus menerus di logo merek, gagal update sistem, atau lupa pola/kunci layar.',
    recommendedPhoto: 'Foto layar saat mentok di logo',
    typicalTime: 'Bisa Ditunggu'
  },
  {
    id: 'other',
    name: 'Kendala Lainnya (Speaker, Mic, Sinyal, dll)',
    category: 'General Inspection',
    desc: 'Suara speaker kresek, sinyal hilang/panggilan darurat, tombol volume keras, dll.',
    recommendedPhoto: 'Jelaskan kronologi kendala',
    typicalTime: 'Konsultasi Bebas'
  }
];

export const PriceCalculator: React.FC = () => {
  const phoneModelInputId = useId();
  const notesInputId = useId();

  const [selectedBrand, setSelectedBrand] = useState<BrandType>('Apple');
  const [phoneModel, setPhoneModel] = useState<string>('iPhone 13');
  const [selectedIssueId, setSelectedIssueId] = useState<string>('lcd');
  const [conditionHistory, setConditionHistory] = useState<string>('Jatuh saat dipakai');

  const selectedIssue = COMMON_ISSUES.find((i) => i.id === selectedIssueId) || COMMON_ISSUES[0];

  const handleConsultWhatsApp = () => {
    const text =
      `Halo Teknisi B-Cell Sangatta (Jl. Margo Santoso 2 RT.41), saya ingin konsultasi estimasi biaya & ketersediaan sparepart:%0A%0A` +
      `📱 *Merek*: ${encodeURIComponent(selectedBrand)}%0A` +
      `📦 *Tipe/Model*: ${encodeURIComponent(phoneModel || selectedBrand)}%0A` +
      `🔧 *Keluhan Utama*: ${encodeURIComponent(selectedIssue.name)}%0A` +
      `📝 *Kronologi/Kondisi*: ${encodeURIComponent(conditionHistory || 'Belum diketahui pasti')}%0A%0A` +
      `Apakah suku cadangnya ready di konter Sangatta dan berapa estimasi biayanya? Terima kasih!`;

    window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="calculator" className="py-20 bg-zinc-950/70 border-y border-zinc-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-medium mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>KONSULTASI LANGSUNG DENGAN TEKNISI MEJA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Cek Estimasi Biaya & Ketersediaan Suku Cadang
          </h2>
          <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
            Kondisi tiap kerusakan HP bersifat unik. Konsultasikan langsung dengan teknisi kami via WhatsApp untuk mendapatkan taksiran biaya yang tepat, jujur, dan tanpa komitmen.
          </p>
        </div>

        <div className="bg-black border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Pemilih Kendala */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pilih Merek */}
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-2">1. Pilih Merek Smartphone</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['Apple', 'Samsung', 'Xiaomi', 'Oppo', 'Vivo', 'Realme', 'Infinix', 'Lainnya'] as BrandType[]).map((brand) => (
                  <button
                    key={brand}
                    type="button"
                    onClick={() => setSelectedBrand(brand)}
                    className={`py-2 px-3 text-xs rounded-xl font-medium border text-center transition cursor-pointer ${
                      selectedBrand === brand
                        ? 'border-blue-500 bg-blue-600/15 text-blue-400 font-semibold shadow-sm'
                        : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-white hover:border-zinc-700'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>

            {/* Model / Seri Spesifik */}
            <div>
              <label htmlFor={phoneModelInputId} className="block text-xs font-medium text-zinc-400 mb-1.5">
                2. Tipe / Seri Smartphone Anda
              </label>
              <input
                id={phoneModelInputId}
                type="text"
                value={phoneModel}
                onChange={(e) => setPhoneModel(e.target.value)}
                placeholder="Contoh: iPhone 13 Pro, Samsung A54, Redmi Note 12, Reno 8..."
                className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            {/* Pilih Kerusakan */}
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-2">
                3. Gejala Kerusakan Utama
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[300px] overflow-y-auto custom-scrollbar pr-1">
                {COMMON_ISSUES.map((issue) => {
                  const isSelected = issue.id === selectedIssueId;
                  return (
                    <button
                      key={issue.id}
                      type="button"
                      onClick={() => setSelectedIssueId(issue.id)}
                      className={`p-3 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-emerald-500/80 bg-emerald-950/25 text-white'
                          : 'border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-semibold text-white flex items-center justify-between mb-1">
                          <span>{issue.name}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-1" />}
                        </div>
                        <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">
                          {issue.desc}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 mt-2 block">
                        Durasi rata-rata: {issue.typicalTime}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Riwayat / Kronologi Singkat */}
            <div>
              <label htmlFor={notesInputId} className="block text-xs font-medium text-zinc-400 mb-1.5">
                4. Kronologi Singkat (Opsional - Sangat Membantu Diagnosa)
              </label>
              <input
                id={notesInputId}
                type="text"
                value={conditionHistory}
                onChange={(e) => setConditionHistory(e.target.value)}
                placeholder="Contoh: Jatuh dari meja, kena hujan di saku, tiba-tiba mati saat dicharge..."
                className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-blue-500 transition"
              />
            </div>
          </div>

          {/* Kotak Preview Konsultasi & Alasan Kenapa Harga via WA */}
          <div className="lg:col-span-5 bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 sm:p-7 space-y-6">
            <div>
              <span className="text-[11px] text-emerald-400 font-mono uppercase tracking-wider block mb-1">
                KONSULTASI GRATIS & BEBAS KOMITMEN
              </span>
              <h3 className="text-lg font-bold text-white">Ringkasan Konsultasi</h3>
              <p className="text-xs text-zinc-400 mt-1">
                {selectedBrand} {phoneModel || 'Smartphone'} · {selectedIssue.name}
              </p>
            </div>

            {/* Kenapa Harga di-Chat Langsung? */}
            <div className="p-3.5 rounded-xl bg-blue-950/25 border border-blue-500/30 text-xs space-y-2">
              <div className="flex items-center gap-2 text-blue-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Kenapa Harga Tidak Dikunci Otomatis?</span>
              </div>
              <p className="text-zinc-300 text-[11px] leading-relaxed">
                Tiap kerusakan memiliki variasi komponen (misal: hanya kaca pecah vs kena panel OLED dalam). Teknisi kami memberikan estimasi akurat setelah Anda mengirim foto atau menjelaskan detailnya di WA, <strong>menghindari kesalahpahaman biaya di akhir</strong>.
              </p>
            </div>

            {/* Standar SOP B-Cell Sangatta */}
            <div className="space-y-2.5 text-xs text-zinc-300 pt-1">
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                STANDAR LAYANAN B-CELL SANGATTA:
              </span>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-[11px]">
                  <strong>Cek Awal 100% Gratis:</strong> Pengecekan dan pembongkaran awal di depan Anda tidak dipungut biaya bila batal.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-[11px]">
                  <strong>Konfirmasi Sebelum Eksekusi:</strong> Tidak ada biaya mendadak. Biaya disepakati bersama sebelum obeng bekerja.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-[11px]">
                  <strong>Suku Cadang Bergaransi:</strong> Nota fisik & digital resmi konter Jl. Margo Santoso 2 RT.41 Sangatta.
                </span>
              </div>
            </div>

            {/* Tips Foto untuk Chat */}
            <div className="pt-2 border-t border-zinc-800 text-[11px] text-zinc-400">
              <span className="text-zinc-500 block mb-0.5 font-mono">TIPS KONSULTASI CEPAT:</span>
              <span>Siapkan: {selectedIssue.recommendedPhoto} agar teknisi bisa langsung memberikan estimasi tepat.</span>
            </div>

            {/* CTA Button Langsung ke WhatsApp */}
            <button
              type="button"
              onClick={handleConsultWhatsApp}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 px-4 rounded-xl font-bold text-xs transition shadow-lg shadow-emerald-700/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Tanyakan Estimasi Biaya ke WhatsApp Teknisi</span>
            </button>
            <p className="text-center text-[10px] text-zinc-500">
              Chat terhubung langsung ke meja teknisi B-Cell Sangatta (Buka setiap hari 08.00 – 22.00 WITA)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
