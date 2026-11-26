import React from 'react';
import { StoreLocation } from '../components/StoreLocation';
import { CustomerReviews } from '../components/CustomerReviews';
import { BookingSection } from '../components/BookingSection';
import { MapPin, Navigation, Phone, Clock } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export const LocationPage: React.FC = () => {
  return (
    <div className="py-12">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium mb-4">
          <MapPin className="w-3.5 h-3.5" />
          <span>LOKASI RESMI KONTER B-CELL SANGATTA</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Lokasi Konter Service HP Sangatta — B-Cell
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Bisa ditunggu langsung! Pusat servis HP terpercaya di Jl. Margo Santoso 2 RT.41, Sangatta, Kutai Timur. Dapatkan diagnosa gratis dan pengerjaan express di depan Anda.
        </p>
      </div>

      {/* Detail Lokasi Fisik, Peta & Jam Buka */}
      <StoreLocation />

      {/* Ulasan Pelanggan Terverifikasi */}
      <CustomerReviews />

      {/* Booking & Konsultasi */}
      <BookingSection />
    </div>
  );
};
