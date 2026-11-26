import React from 'react';
import { EmergencyGuideSection } from '../components/EmergencyGuide';
import { DiagnosticSimulator } from '../components/DiagnosticSimulator';
import { WarrantyPolicy } from '../components/WarrantyPolicy';
import { BookingSection } from '../components/BookingSection';
import { ShieldAlert } from 'lucide-react';
import { PageRoute } from '../data/seoRoutes';

interface GuidePageProps {
  onNavigate?: (page: PageRoute, anchor?: string) => void;
}

export const GuidePage: React.FC<GuidePageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium mb-4">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>PERTOLONGAN PERTAMA &amp; EDUKASI PERANGKAT</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Panduan Darurat &amp; Kebijakan Garansi
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Langkah kritis saat smartphone kemasukan air atau mati tiba-tiba, simulator diagnosa teknisi, serta SOP garansi resmi di Konter B-Cell Sangatta.
        </p>
      </div>

      {/* Panduan Pertolongan Pertama HP Tercebur Air / Rusak */}
      <EmergencyGuideSection />

      {/* Simulator Diagnosa Interaktif */}
      <DiagnosticSimulator onNavigate={onNavigate} />

      {/* Kebijakan Garansi & SOP Pengerjaan */}
      <WarrantyPolicy />

      {/* Konsultasi & Booking Langsung */}
      <BookingSection />
    </div>
  );
};
