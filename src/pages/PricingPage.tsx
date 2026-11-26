import React from 'react';
import { PriceCalculator } from '../components/PriceCalculator';
import { PricingTable } from '../components/PricingTable';
import { BuyBrokenPhoneSection } from '../components/BuyBrokenPhoneSection';
import { BookingSection } from '../components/BookingSection';
import { Calculator } from 'lucide-react';

export const PricingPage: React.FC = () => {
  return (
    <div className="py-12">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-4">
          <Calculator className="w-3.5 h-3.5" />
          <span>KONSULTASI ESTIMASI BIAYA SERVICE B-CELL</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Layanan &amp; Estimasi Biaya Service HP Sangatta
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Konsultasikan estimasi biaya perbaikan HP Anda langsung ke meja teknisi via WhatsApp: ganti LCD, baterai, hingga perbaikan mesin IC. Pengecekan awal di konter B-Cell 100% GRATIS dan tanpa komitmen.
        </p>
      </div>

      {/* Kalkulator Biaya Interaktif */}
      <PriceCalculator />

      {/* Tabel Transparansi Tarif */}
      <PricingTable />

      {/* Layanan Terima / Beli HP Rusak & Minus Sangatta */}
      <BuyBrokenPhoneSection />

      {/* Konsultasi & Booking Langsung */}
      <BookingSection />
    </div>
  );
};
