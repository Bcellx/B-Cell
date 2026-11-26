import React, { useState, useId } from 'react';
import { BookingFormData, BrandType } from '../types';
import { STORE_CONFIG } from '../data/storeConfig';
import { MessageSquare, CheckCircle2, Clock, ShieldCheck, Send, Sparkles } from 'lucide-react';

export const BookingSection: React.FC = () => {
  const nameId = useId();
  const phoneId = useId();
  const brandId = useId();
  const modelId = useId();
  const typeId = useId();
  const urgencyId = useId();
  const descId = useId();

  const [formData, setFormData] = useState<BookingFormData>({
    customerName: '',
    phoneNumber: '',
    brand: 'Apple',
    phoneModel: '',
    repairType: 'Ganti LCD / Layar Pecah',
    damageDescription: '',
    urgency: 'Express 30 Menit'
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage =
      `Halo Konter B-Cell Sangatta (Jl. Margo Santoso 2 RT.41),%0A%0A` +
      `Saya ingin booking servis / konsultasi HP:%0A` +
      `👤 *Nama*: ${encodeURIComponent(formData.customerName)}%0A` +
      `📞 *No WhatsApp*: ${encodeURIComponent(formData.phoneNumber)}%0A` +
      `📱 *Merek & Model*: ${encodeURIComponent(formData.brand)} ${encodeURIComponent(formData.phoneModel)}%0A` +
      `🔧 *Keluhan*: ${encodeURIComponent(formData.repairType)}%0A` +
      `⚡ *Prioritas*: ${encodeURIComponent(formData.urgency)}%0A` +
      `📝 *Kronologi/Catatan*: ${encodeURIComponent(formData.damageDescription || '-')}%0A%0A` +
      `Mohon info ketersediaan stok sparepart dan antrean di konter B-Cell Sangatta ya. Terima kasih!`;

    setSubmitted(true);

    setTimeout(() => {
      window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${formattedMessage}`, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <section id="booking" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-wider mb-2">
            FORMULIR KONSULTASI & BOOKING CEPAT
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Booking Service / Tanyakan Sparepart
          </h2>
          <p className="text-zinc-400 text-sm mt-3">
            Kirimkan rincian keluhan smartphone Anda untuk dijadwalkan langsung oleh teknisi kami via WhatsApp resmi toko.
          </p>
        </div>

        <div className="bg-black border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor={nameId} className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Nama Pemilik HP <span className="text-red-400">*</span>
                </label>
                <input
                  id={nameId}
                  type="text"
                  required
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  placeholder="Contoh: Andi Pratama"
                  className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label htmlFor={phoneId} className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Nomor WhatsApp Aktif <span className="text-red-400">*</span>
                </label>
                <input
                  id={phoneId}
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  placeholder="Contoh: 081234567890"
                  className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor={brandId} className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Merek HP <span className="text-red-400">*</span>
                </label>
                <select
                  id={brandId}
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value as BrandType })}
                  className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                >
                  <option value="Apple">Apple iPhone</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Xiaomi">Xiaomi / POCO / Redmi</option>
                  <option value="Oppo">Oppo</option>
                  <option value="Vivo">Vivo</option>
                  <option value="Realme">Realme</option>
                  <option value="Infinix">Infinix / Tecno</option>
                  <option value="Lainnya">Merek Lainnya</option>
                </select>
              </div>

              <div>
                <label htmlFor={modelId} className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Model & Seri HP <span className="text-red-400">*</span>
                </label>
                <input
                  id={modelId}
                  type="text"
                  required
                  value={formData.phoneModel}
                  onChange={(e) => setFormData({ ...formData, phoneModel: e.target.value })}
                  placeholder="Contoh: iPhone 13 Pro 128GB / A52s 5G"
                  className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor={typeId} className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Kategori Perbaikan
                </label>
                <select
                  id={typeId}
                  value={formData.repairType}
                  onChange={(e) => setFormData({ ...formData, repairType: e.target.value })}
                  className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                >
                  <option value="Ganti LCD / Layar Pecah">Ganti LCD / Touchscreen Pecah</option>
                  <option value="Ganti Baterai Drop/Kembung">Ganti Baterai Drop / Health Menurun</option>
                  <option value="Mati Total / Konslet Mesin">Mati Total / Kena Air / Short IC</option>
                  <option value="Port Cas Longgar / Rusak">Port Cas / Mic / Speaker Kresek</option>
                  <option value="Kamera Blur / Getar / Lensa Rusak">Kamera Blur / Getar / Lensa Rusak</option>
                  <option value="Restorasi Full Housing / Ganti Frame & Backdoor">Restorasi Full Housing / Ganti Frame &amp; Backdoor</option>
                  <option value="Install Ulang / Bootloop / Lupa Sandi">Install Ulang / Bootloop / Lupa Sandi</option>
                  <option value="Jual HP Rusak / Minus">Jual HP Rusak / Minus (Kanibal Sparepart)</option>
                  <option value="Konsultasi Kerusakan Lainnya">Konsultasi Kerusakan Lainnya</option>
                </select>
              </div>

              <div>
                <label htmlFor={urgencyId} className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Prioritas Pengerjaan
                </label>
                <select
                  id={urgencyId}
                  value={formData.urgency}
                  onChange={(e) => setFormData({ ...formData, urgency: e.target.value as any })}
                  className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                >
                  <option value="Express 30 Menit">⚡ Express (Ditunggu di Toko ~30 Menit)</option>
                  <option value="Biasa">Pengerjaan Standar / Ditinggal</option>
                  <option value="Konsultasi Dulu">Konsultasi Dulu / Cek Harga Saja</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor={descId} className="block text-xs font-medium text-zinc-400 mb-1.5">
                Detail Kronologi Kerusakan (Opsional)
              </label>
              <textarea
                id={descId}
                rows={3}
                value={formData.damageDescription}
                onChange={(e) => setFormData({ ...formData, damageDescription: e.target.value })}
                placeholder="Ceritakan singkat bagaimana kendala terjadi (contoh: HP terjatuh dari motor, layar masih ada getar tapi blank hitam...)"
                className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 px-6 rounded-xl font-semibold text-sm transition shadow-lg shadow-emerald-700/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Formulir ke WhatsApp Teknisi B-Cell Sangatta</span>
              </button>
            </div>
          </form>

          {submitted && (
            <div className="mt-5 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <strong>Data terformat siap kirim!</strong> Jendela WhatsApp telah dibuka otomatis. Silakan klik "Kirim" di WhatsApp untuk terhubung dengan teknisi kami.
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-zinc-900 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-zinc-500">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>Respon Cepat &lt; 5 Menit</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Diagnosa Awal Gratis Rp 0</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Garansi Nota Fisik & Digital Toko</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
