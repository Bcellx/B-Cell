import React from 'react';
import { Zap, ChevronRight, Facebook, MapPin } from 'lucide-react';
import { PageRoute, ROUTE_SEO } from '../data/seoRoutes';
import { STORE_CONFIG } from '../data/storeConfig';

interface AnnouncementBarProps {
  onNavigate?: (page: PageRoute, anchor?: string) => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onNavigate }) => {
  const handleLocationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    if (onNavigate) {
      e.preventDefault();
      onNavigate('location');
    }
  };

  return (
    <aside aria-label="Pengumuman" className="bg-zinc-950 border-b border-zinc-800/80 py-2 px-4 text-center text-xs text-zinc-400">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
        <span className="flex items-center gap-1.5 text-zinc-200">
          <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span className="font-semibold text-white">B-Cell Sangatta:</span>
          <span>Jl. Margo Santoso 2 RT.41, Sangatta</span>
        </span>
        <span className="text-zinc-700 hidden sm:inline">·</span>
        <span className="flex items-center gap-1 text-zinc-300">
          <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Layanan Service Express Bisa Ditunggu &amp; Garansi s/d 30 Hari</span>
        </span>
        <div className="flex items-center gap-3">
          <a
            href={ROUTE_SEO.location.path}
            onClick={handleLocationClick}
            className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-0.5 underline-offset-4 hover:underline transition"
          >
            Peta Lokasi Konter <ChevronRight className="w-3 h-3" />
          </a>
          <span className="text-zinc-700 hidden sm:inline">|</span>
          <a
            href={STORE_CONFIG.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white inline-flex items-center gap-1 transition"
          >
            <Facebook className="w-3 h-3 text-blue-500" />
            <span className="hidden sm:inline">Facebook Resmi</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
