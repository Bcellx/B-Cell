import React from 'react';
import { CORE_SERVICES } from '../data/services';
import { PageRoute, ROUTE_SEO } from '../data/seoRoutes';
import { Smartphone, BatteryCharging, Cpu, Terminal, Camera, Sparkles, ArrowRight, Clock, Shield, Banknote } from 'lucide-react';

interface ServicesBentoProps {
  onNavigate?: (page: PageRoute, anchor?: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onNavigate }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'smartphone': return <Smartphone className="w-5 h-5" />;
      case 'battery-charging': return <BatteryCharging className="w-5 h-5 text-emerald-400" />;
      case 'cpu': return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'terminal': return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'camera': return <Camera className="w-5 h-5 text-blue-400" />;
      case 'banknote': return <Banknote className="w-5 h-5 text-amber-400" />;
      case 'sparkles': return <Sparkles className="w-5 h-5 text-cyan-400" />;
      default: return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  const formatIDR = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="services" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="text-xs font-mono font-medium text-blue-400 uppercase tracking-wider mb-2">
          LAYANAN SERVICE HP SANGATTA
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Solusi Servis HP Sangatta Bergaransi
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-3">
          Pusat service HP express di Sangatta untuk iPhone, Samsung, Xiaomi, Oppo, Vivo, Infinix. Dikerjakan transparan di hadapan Anda dengan suku cadang OEM dan Original serta garansi toko resmi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CORE_SERVICES.map((svc) => (
          <div
            key={svc.id}
            className={`bg-zinc-950 border border-zinc-800 rounded-3xl p-7 flex flex-col justify-between card-glow relative ${
              svc.isWide ? 'md:col-span-2 bg-gradient-to-br from-zinc-950 to-zinc-900/60' : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-400">
                  {getIcon(svc.iconName)}
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 font-mono">
                  <Clock className="w-3 h-3 text-zinc-400" />
                  <span>{svc.duration}</span>
                </div>
              </div>

              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
                {svc.category}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {svc.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed">
                {svc.description}
              </p>

              {/* Highlights */}
              <div className="mt-5 flex flex-wrap gap-2">
                {svc.highlights.map((hl, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800/80 text-zinc-300 font-medium"
                  >
                    {hl}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-900 flex items-center justify-between text-xs">
              <span className="text-emerald-400 font-medium flex items-center gap-1">
                <Shield className="w-3.5 h-3.5" />
                {svc.warrantyText}
              </span>
              <a
                href={`${ROUTE_SEO.pricing.path}#booking`}
                onClick={(e) => {
                  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('pricing', '#booking');
                  }
                }}
                className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 transition"
              >
                <span>Konsultasi Biaya</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
