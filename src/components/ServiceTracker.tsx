import React, { useState } from 'react';
import { SAMPLE_TICKETS, ServiceTicket } from '../data/serviceTickets';
import { STORE_CONFIG, getWhatsAppLink } from '../data/storeConfig';
import { BCellLogo } from './BCellLogo';
import { Search, CheckCircle2, Clock, Shield, Wrench, MessageSquare, AlertCircle, ArrowRight, Smartphone } from 'lucide-react';

export const ServiceTracker: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('BC-8821');
  const [ticketResult, setTicketResult] = useState<ServiceTicket | null>(SAMPLE_TICKETS[0]);
  const [hasSearched, setHasSearched] = useState(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanQuery = searchQuery.trim().toUpperCase();

    const found = SAMPLE_TICKETS.find(
      (t) =>
        t.ticketNumber.toUpperCase() === cleanQuery ||
        t.phoneNumberMasked.includes(cleanQuery) ||
        t.deviceModel.toUpperCase().includes(cleanQuery) ||
        t.customerName.toUpperCase().includes(cleanQuery)
    );

    setTicketResult(found || null);
    setHasSearched(true);
  };

  const formatIDR = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  const steps = [
    { num: 1, label: 'Pengecekan Awal', desc: 'Diagnosa fisik & uji multimeter' },
    { num: 2, label: 'Pengerjaan', desc: 'Bongkar & pasang part presisi' },
    { num: 3, label: 'Quality Control', desc: 'Uji fungsi sensor & ketahanan' },
    { num: 4, label: 'Siap Diambil', desc: 'Selesai di konter Jl. Margo Santoso' }
  ];

  return (
    <section id="tracking" className="py-24 bg-zinc-950/80 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono font-medium text-amber-400 uppercase tracking-wider mb-2">
            PRATINJAU FITUR · DATA SIMULASI
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Pratinjau Tampilan Lacak Nota B-Cell
          </h2>
          <p className="text-zinc-400 text-sm mt-3">
            Berikut contoh tampilan pelacakan nota yang akan terhubung langsung ke aplikasi internal konter setelah proses integrasi selesai.
          </p>
        </div>

        {/* Search Bar Form */}
        <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-10">
          <div className="flex gap-2 p-1.5 bg-black border border-zinc-800 rounded-2xl shadow-xl focus-within:border-blue-500 transition">
            <div className="flex items-center pl-3.5 text-zinc-500">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ketik No. Nota (contoh: BC-8821) atau No HP..."
              className="w-full bg-transparent px-2 py-2.5 text-sm text-white focus:outline-none placeholder:text-zinc-600"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition shrink-0 cursor-pointer"
            >
              Lacak Nota
            </button>
          </div>

          {/* Quick Demo Helpers */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-[11px] text-zinc-500">
            <span>Coba contoh nota demo:</span>
            {['BC-8821', 'BC-8822', 'BC-8823'].map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => {
                  setSearchQuery(code);
                  const found = SAMPLE_TICKETS.find((t) => t.ticketNumber === code);
                  setTicketResult(found || null);
                  setHasSearched(true);
                }}
                className={`px-2 py-0.5 rounded-md font-mono border transition ${
                  searchQuery === code
                    ? 'bg-blue-600/20 border-blue-500 text-blue-400 font-bold'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        </form>

        {/* Search Result Ticket Presentation */}
        {ticketResult ? (
          <div className="bg-black border border-zinc-800 rounded-3xl p-6 sm:p-9 shadow-2xl card-glow animate-in fade-in duration-300">
            {/* Ticket Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-800/80 gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 p-2.5 shrink-0 hidden sm:flex items-center justify-center">
                  <BCellLogo className="w-full h-full text-white" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-zinc-400">CONTOH TIKET SIMULASI:</span>
                    <span className="text-sm font-mono font-bold text-white bg-zinc-900 px-2.5 py-1 rounded-lg border border-zinc-800">
                      {ticketResult.ticketNumber}
                    </span>
                    <span className="text-[10px] font-mono font-semibold text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded">
                      DEMO
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-blue-400" />
                    <span>{ticketResult.deviceModel}</span>
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Pemilik: <strong className="text-zinc-200">{ticketResult.customerName}</strong> ({ticketResult.phoneNumberMasked}) · Masuk: {ticketResult.intakeDate}
                  </p>
                </div>
              </div>

              <div className="sm:text-right">
                <span className="text-xs text-zinc-500 block mb-1">Status Pengerjaan:</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{ticketResult.status}</span>
                </span>
              </div>
            </div>

            {/* Stepper Progress Bar */}
            <div className="py-8 border-b border-zinc-800/80">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {steps.map((st) => {
                  const isDone = ticketResult.statusStep >= st.num;
                  const isCurrent = ticketResult.statusStep === st.num;
                  return (
                    <div
                      key={st.num}
                      className={`p-3.5 rounded-2xl border transition ${
                        isDone
                          ? 'bg-zinc-900/90 border-blue-500/40 text-white'
                          : 'bg-zinc-950 border-zinc-850 text-zinc-600'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                          isDone ? 'bg-blue-600 text-white' : 'bg-zinc-800 text-zinc-500'
                        }`}>
                          LANGKAH {st.num}
                        </span>
                        {isDone && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                      </div>
                      <div className={`text-xs font-bold ${isDone ? 'text-white' : 'text-zinc-500'}`}>
                        {st.label}
                      </div>
                      <div className="text-[11px] text-zinc-400 mt-0.5 leading-tight">
                        {st.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Ticket Breakdown Details */}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start text-xs">
              <div className="md:col-span-7 space-y-3">
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                  <span className="text-zinc-400 font-medium block mb-1">Catatan Diagnosa & Teknisi:</span>
                  <p className="text-zinc-200 leading-relaxed">
                    {ticketResult.notes}
                  </p>
                  {ticketResult.replacedParts && ticketResult.replacedParts.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-zinc-800 text-[11px]">
                      <span className="text-zinc-400 block mb-1">Komponen yang Diganti / Dikerjakan:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {ticketResult.replacedParts.map((part, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono">
                            {part}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4 text-zinc-400">
                  <span>Ditangani oleh: <strong className="text-white">{ticketResult.technician}</strong></span>
                  <span>·</span>
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Garansi {ticketResult.warrantyDays} Hari Toko</span>
                  </span>
                </div>
              </div>

              <div className="md:col-span-5 p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
                <div>
                  <span className="text-zinc-400 block mb-1">Estimasi Waktu Pengambilan:</span>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>{ticketResult.estimatedCompletion}</span>
                  </div>
                </div>

                <div>
                  <span className="text-zinc-400 block mb-1">Total Biaya Perbaikan:</span>
                  <div className="text-2xl font-extrabold text-blue-400 font-mono">
                    {formatIDR(ticketResult.estimatedCost)}
                  </div>
                  <span className="text-[11px] text-zinc-500">*Sudah termasuk suku cadang OEM / Original & jasa pasang</span>
                </div>

                <a
                  href={getWhatsAppLink(`Halo B-Cell Sangatta, saya mau konfirmasi nota servis no ${ticketResult.ticketNumber} (${ticketResult.deviceModel}). Kapan bisa diambil di konter Jl. Margo Santoso 2 ya?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 px-4 rounded-xl font-semibold text-xs transition flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Konfirmasi Pengambilan via WA</span>
                </a>
              </div>
            </div>
          </div>
        ) : hasSearched ? (
          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 text-center max-w-xl mx-auto space-y-4">
            <AlertCircle className="w-10 h-10 text-amber-400 mx-auto" />
            <h3 className="text-lg font-bold text-white">Sistem Integrasi Nota Masih Dalam Pengembangan</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Nomor nota <code className="text-amber-400 bg-zinc-900 px-1.5 py-0.5 rounded">{searchQuery}</code> belum dapat dicek otomatis karena koneksi ke aplikasi internal konter sedang dalam tahap pengembangan. Klik tombol di bawah untuk menanyakan status nota Anda langsung ke teknisi via WhatsApp.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppLink(`Halo B-Cell Sangatta, saya mau cek status servis HP saya dengan no nota / no HP: ${searchQuery}. Mohon infonya ya.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 px-5 rounded-xl text-xs font-semibold transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Cek Status Nota ke WhatsApp Teknisi</span>
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};
