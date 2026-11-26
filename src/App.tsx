/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense, lazy } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar, PageRoute } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';
import { ROUTE_SEO, getPageFromLocation, applyRouteSeoMeta } from './data/seoRoutes';

const PricingPage = lazy(() =>
  import('./pages/PricingPage').then((m) => ({ default: m.PricingPage }))
);
const TrackingPage = lazy(() =>
  import('./pages/TrackingPage').then((m) => ({ default: m.TrackingPage }))
);
const GuidePage = lazy(() =>
  import('./pages/GuidePage').then((m) => ({ default: m.GuidePage }))
);
const LocationPage = lazy(() =>
  import('./pages/LocationPage').then((m) => ({ default: m.LocationPage }))
);

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() =>
    getPageFromLocation(window.location.pathname, window.location.hash)
  );

  // Sync page metadata (title, description, canonical, OG tags) per route
  useEffect(() => {
    applyRouteSeoMeta(currentPage);
  }, [currentPage]);

  // Normalize legacy hash URLs (e.g. /#/harga -> /harga) on initial load
  useEffect(() => {
    if (window.location.hash.startsWith('#/')) {
      const targetPage = getPageFromLocation(window.location.pathname, window.location.hash);
      const hashAnchorMatch = window.location.hash.match(/#[^/]+$/);
      const anchor = hashAnchorMatch && !hashAnchorMatch[0].startsWith('#/') ? hashAnchorMatch[0] : '';
      const nextUrl = `${ROUTE_SEO[targetPage].path}${anchor}`;
      window.history.replaceState({ page: targetPage }, '', nextUrl);
    }
  }, []);

  // Listen for browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const page = getPageFromLocation(window.location.pathname, window.location.hash);
      setCurrentPage(page);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: PageRoute, anchor?: string) => {
    setCurrentPage(page);

    const basePath = ROUTE_SEO[page].path;
    const targetUrl = anchor ? `${basePath}${anchor}` : basePath;

    if (`${window.location.pathname}${window.location.hash}` !== targetUrl) {
      window.history.pushState({ page }, '', targetUrl);
    }

    // Smooth scroll to top or targeted anchor (with retry for lazy-loaded pages)
    const scrollToTarget = (attempts = 0) => {
      if (anchor) {
        const el = document.querySelector(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
        if (attempts < 10) {
          setTimeout(() => scrollToTarget(attempts + 1), 60);
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    setTimeout(() => scrollToTarget(0), 50);
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Announcement Bar */}
      <AnnouncementBar onNavigate={handleNavigate} />

      {/* Main Glass Navigation with Active Page Indicators */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area: Renders the active dedicated page */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        <Suspense
          fallback={
            <div className="min-h-[60vh] flex items-center justify-center text-xs font-mono text-zinc-500">
              Memuat halaman...
            </div>
          }
        >
          {currentPage === 'pricing' && <PricingPage />}
          {currentPage === 'tracking' && <TrackingPage />}
          {currentPage === 'guide' && <GuidePage onNavigate={handleNavigate} />}
          {currentPage === 'location' && <LocationPage />}
        </Suspense>
      </main>

      {/* Clean Footer with Page Navigation */}
      <Footer onNavigate={handleNavigate} />

      {/* Quick Access Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
