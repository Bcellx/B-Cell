import React from 'react';
import { STORE_CONFIG } from '../data/storeConfig';
import { Shield, Clock, Info, MessageSquare, Wrench, CheckCircle, ExternalLink } from 'lucide-react';

interface ServiceGuideRow {
  serviceName: string;
  category: string;
  description: string;
  typicalDuration: string;
  warrantyPeriod: string;
  notes: string;
}

const SERVICE_GUIDELINES: ServiceGuideRow[] = [
  {
    serviceName: 'Ganti Layar LCD & Touchscreen',
    category: 'Display & Glass',
    description: 'Pemasangan rapi anti-renggang untuk iPhone, Samsung, Xiaomi, Oppo, Vivo, Infinix. Dilengkapi lem waterproof gasket baru.',
    typicalDuration: 'Bisa Ditunggu',
    warrantyPeriod: 's/d 30 Hari',
    notes: 'Tersedia pilihan suku cadang OEM dan Original bergaransi toko.'
  },
  {
    serviceName: 'Ganti Baterai Health 100%',
    category: 'Power Management',
    description: 'Baterai baru sel kobalt murni. Suhu stabil, kapasitas tahan lama, dan aman pengisian daya cepat.',
    typicalDuration: 'Bisa Ditunggu',
    warrantyPeriod: '30 Hari',
    notes: 'Bisa ditunggu langsung di depan meja teknisi konter Sangatta.'
  },
  {
    serviceName: 'Perbaikan Mesin IC Mati Total / Konslet',
    category: 'Board & Micro-Soldering',
    description: 'Penanganan IC Power, IC Cas, CPU/RAM, dan jalur PCB yang short akibat jatuh atau tegangan listrik tidak stabil.',
    typicalDuration: '1 - 3 Hari',
    warrantyPeriod: 's/d 30 Hari',
    notes: 'Pengukuran tegangan awal dengan power supply gratis tanpa biaya.'
  },
  {
    serviceName: 'Pembersihan Korosi HP Tercebur Air',
    category: 'Emergency Cleaning',
    description: 'Treatment kimiawi ultrasonik khusus PCB untuk melarutkan jamur & oksidasi tembaga sebelum merusak jalur mikron.',
    typicalDuration: 'Ringan: Bisa Ditunggu · Area Mesin: Lebih Lama',
    warrantyPeriod: 'Garansi Fungsi Normal',
    notes: 'Kasus ringan (belum parah) bisa ditunggu; jika air sudah masuk area mesin/PCB butuh waktu lebih lama. Bawa HP dalam keadaan mati, jangan dicas.'
  },
  {
    serviceName: 'Ganti Konektor Charger (Flex / Port Type-C / Lightning)',
    category: 'Charging Port',
    description: 'Solusi kabel longgar, tidak merespons saat dicolok, atau notifikasi suhu baterai terlalu dingin/panas.',
    typicalDuration: 'Bisa Ditunggu',
    warrantyPeriod: '30 Hari',
    notes: 'Pembersihan kotoran/debu konektor gratis jika hanya tersumbat serat kain.'
  },
  {
    serviceName: 'Perbaikan Modul Kamera & Lensa Pecah',
    category: 'Camera System',
    description: 'Mengatasi kamera getar/berisik (OIS rusak), hasil foto buram, atau penggantian kaca luar pelindung lensa.',
    typicalDuration: 'Bisa Ditunggu',
    warrantyPeriod: 's/d 30 Hari',
    notes: 'Kaca lensa diganti presisi tanpa perlu bongkar mesin berlebihan.'
  },
  {
    serviceName: 'Restorasi Full Housing (Ganti Frame, Bezel & Backdoor)',
    category: 'Body Restoration',
    description: 'Penggantian menyeluruh dari frame tengah, bezel, tombol, hingga backdoor agar unit HP lama tampil seperti baru. Mesin, IMEI, dan data asli tetap 100% utuh.',
    typicalDuration: '1 - 3 Jam (Ready) / PO Part',
    warrantyPeriod: 'Garansi Presisi & Fungsi',
    notes: 'Tersedia untuk iPhone & Android populer. Warna atau tipe khusus dapat dipesan (PO) terlebih dahulu.'
  },
  {
    serviceName: 'Pemulihan Software, Bootloop & Lupa Sandi',
    category: 'System & OS',
    description: 'Flash ROM resmi pabrik, mengatasi stuck di logo merek, update OS gagal, dan pemulihan performa lambat.',
    typicalDuration: 'Bisa Ditunggu',
    warrantyPeriod: 'Garansi Sistem Stabil',
    notes: 'Wajib membawa bukti kepemilikan unit untuk buka sandi/pola.'
  }
];

export const PricingTable: React.FC = () => {
  const handleOpenGeneralWhatsApp = (serviceName: string) => {
    const text = `Halo Teknisi B-Cell Sangatta, saya mau tanya estimasi biaya & ketersediaan suku cadang untuk layanan: *${serviceName}*. HP saya tipenya: ...`;
    window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="pricing-table" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-wider mb-2">
          PANDUAN LENGKAP LAYANAN
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Kategori Perbaikan & Standar Garansi
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-3">
          Seluruh pengerjaan di B-Cell Sangatta menggunakan suku cadang teruji, dikerjakan transparan di hadapan meja teknisi, dan bergaransi nota resmi toko.
        </p>
      </div>

      <div className="overflow-x-auto custom-scrollbar pb-4 rounded-3xl border border-zinc-800 bg-zinc-950/80 shadow-2xl">
        <table className="w-full text-left border-collapse min-w-[760px]">
          <thead>
            <tr className="border-b border-zinc-800 text-xs font-mono text-zinc-400 uppercase bg-zinc-900/60">
              <th className="py-4 px-5">Layanan Perbaikan</th>
              <th className="py-4 px-4 font-semibold text-zinc-300">Deskripsi & Solusi</th>
              <th className="py-4 px-4 font-semibold text-zinc-300">Durasi Pengerjaan</th>
              <th className="py-4 px-4 font-semibold text-emerald-400">Garansi Toko</th>
              <th className="py-4 px-5 text-right font-semibold text-white">Konsultasi Biaya</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-900 text-xs sm:text-sm">
            {SERVICE_GUIDELINES.map((row, idx) => (
              <tr key={idx} className="hover:bg-zinc-900/40 transition">
                <td className="py-4 px-5">
                  <div className="font-semibold text-white">{row.serviceName}</div>
                  <div className="text-[11px] text-blue-400 font-mono mt-0.5">{row.category}</div>
                </td>
                <td className="py-4 px-4 text-zinc-300 max-w-xs text-xs">
                  <p>{row.description}</p>
                  <span className="text-[10px] text-zinc-500 font-mono block mt-1">
                    {row.notes}
                  </span>
                </td>
                <td className="py-4 px-4 text-zinc-400 whitespace-nowrap">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                    <span>{row.typicalDuration}</span>
                  </span>
                </td>
                <td className="py-4 px-4 text-emerald-400 font-medium whitespace-nowrap">
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 shrink-0" />
                    <span>{row.warrantyPeriod}</span>
                  </span>
                </td>
                <td className="py-4 px-5 text-right whitespace-nowrap">
                  <button
                    type="button"
                    onClick={() => handleOpenGeneralWhatsApp(row.serviceName)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/15 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/30 transition text-xs font-semibold cursor-pointer"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>Tanya Biaya</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-blue-400 shrink-0" />
          <span>
            <strong>Prinsip Kami:</strong> Biaya selalu diinformasikan dan disepakati bersama sebelum teknisi membongkar unit. Cek kerusakan di konter 100% Gratis.
          </span>
        </div>
        <a
          href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=Halo%20B-Cell%20Sangatta,%20saya%20mau%20konsultasi%20langsung%20kondisi%20HP%20saya`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 hover:underline shrink-0 flex items-center gap-1 font-medium"
        >
          <span>Chat WhatsApp Sekarang</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};
