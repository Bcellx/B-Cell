import React, { useState } from 'react';
import { STORE_CONFIG } from '../data/storeConfig';
import { ROUTE_SEO, PageRoute } from '../data/seoRoutes';
import { BCellLogo } from './BCellLogo';
import { Menu, X, MessageSquare, MapPin, PhoneCall } from 'lucide-react';

export type { PageRoute };

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, anchor?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: PageRoute,
    anchor?: string
  ) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    onNavigate(page, anchor);
    setMobileMenuOpen(false);
  };

  const navLinks: { id: PageRoute; label: string; badge?: string }[] = [
    { id: 'home', label: 'Beranda' },
    { id: 'pricing', label: 'Layanan & Biaya' },
    { id: 'tracking', label: 'Lacak Nota', badge: 'SEGERA' },
    { id: 'guide', label: 'Panduan HP' },
    { id: 'location', label: 'Lokasi Toko' },
  ];

  return (
    <nav aria-label="Navigasi Utama" className="sticky top-0 left-0 right-0 z-50 glass-nav border-b border-zinc-800/80 transition-all bg-black/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-15 flex items-center justify-between text-xs font-medium text-zinc-400">
        {/* Brand Logo & Name */}
        <a
          href={ROUTE_SEO.home.path}
          onClick={(e) => handleLinkClick(e, 'home')}
          className="flex items-center gap-2.5 text-zinc-100 hover:text-white transition group text-left cursor-pointer"
        >
          <div className="w-8.5 h-8.5 rounded-xl bg-black border border-zinc-800 flex items-center justify-center text-white group-hover:border-blue-500/50 group-hover:scale-105 transition shadow-sm p-1.5">
            <BCellLogo className="w-full h-full text-white" />
          </div>
          <div>
            <div className="tracking-tight font-bold text-sm text-white flex items-center gap-1.5">
              <span>B-Cell Sangatta</span>
              <span className="text-[10px] text-blue-400 font-mono font-normal">SERVICE &amp; STORE</span>
            </div>
            <div className="text-[10px] text-zinc-500 hidden sm:flex items-center gap-1">
              <MapPin className="w-2.5 h-2.5 text-zinc-400" />
              <span>Jl. Margo Santoso 2 RT.41</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <a
                key={item.id}
                href={ROUTE_SEO[item.id].path}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`px-3.5 py-1.5 rounded-lg transition-all font-medium text-xs flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600/15 text-blue-400 border border-blue-500/30 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="bg-amber-500/15 text-amber-400 border border-amber-500/30 text-[9px] font-mono px-1.5 py-0.2 rounded font-bold">
                    {item.badge}
                  </span>
                )}
              </a>
            );
          })}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${STORE_CONFIG.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-1.5 text-zinc-300 hover:text-white px-2.5 py-1.5 rounded-lg border border-zinc-800 hover:bg-zinc-900 transition text-xs"
            title="Telepon Langsung B-Cell"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-mono">{STORE_CONFIG.phoneFormatted}</span>
          </a>

          <a
            href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=Halo%20B-Cell%20Sangatta,%20saya%20ingin%20konsultasi%20service%20HP`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg transition font-medium text-xs shadow-sm hover:shadow-emerald-500/20"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat WA</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-zinc-300 hover:text-white focus:outline-none p-1.5 rounded-lg border border-zinc-800"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-5 space-y-4 animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-1.5 text-sm">
            <div className="text-xs text-blue-400 font-mono flex items-center gap-1 pb-2 border-b border-zinc-900">
              <MapPin className="w-3.5 h-3.5" />
              <span>Jl. Margo Santoso 2 RT.41, Sangatta</span>
            </div>

            {navLinks.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <a
                  key={item.id}
                  href={ROUTE_SEO[item.id].path}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`w-full text-left py-2 px-3 rounded-lg flex items-center justify-between text-sm transition cursor-pointer ${
                    isActive
                      ? 'bg-blue-600/15 text-blue-400 font-bold border border-blue-500/30'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-900/50'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="bg-amber-500/15 text-amber-400 border border-amber-500/30 text-[10px] font-mono px-2 py-0.5 rounded font-bold">
                      {item.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
            <a
              href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=Halo%20B-Cell%20Sangatta,%20saya%20ingin%20konsultasi%20service%20HP`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 rounded-lg text-center text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" /> Chat WhatsApp ({STORE_CONFIG.phoneFormatted})
            </a>
            <a
              href={`tel:${STORE_CONFIG.phoneRaw}`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full border border-zinc-700 text-zinc-300 hover:text-white py-2 rounded-lg text-center text-xs flex items-center justify-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" /> Telepon Langsung Seluler
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
