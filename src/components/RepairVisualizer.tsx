import React, { useState, useRef, useEffect } from 'react';
import { PageRoute, ROUTE_SEO } from '../data/seoRoutes';
import {
  Smartphone,
  BatteryCharging,
  Droplets,
  Check,
  ArrowLeftRight,
  Wrench,
  Play,
  Pause,
  Eye,
  Sparkles,
  SlidersHorizontal
} from 'lucide-react';

interface RepairCase {
  id: 'lcd-iphone' | 'battery-swollen' | 'water-corrosion';
  title: string;
  subtitle: string;
  part: string;
  time: string;
  timeNote?: string;
  beforeLabel: string;
  afterLabel: string;
  beforeBadge: string;
  afterBadge: string;
  beforeImg: string;
  afterImg: string;
  details: string[];
}

const REPAIR_CASES: RepairCase[] = [
  {
    id: 'lcd-iphone',
    title: 'Ganti Layar OLED Presisi',
    subtitle: 'Kasus: Layar Pecah & Garis Hijau/Putih OLED',
    part: 'Suku Cadang OLED OEM & Original Bergaransi Toko',
    time: 'Pengerjaan: Bisa Ditunggu',
    beforeLabel: 'Sebelum servis: kaca layar smartphone retak parah dan muncul garis vertikal OLED',
    afterLabel: 'Sesudah servis di B-Cell Sangatta: panel layar OLED baru mulus, jernih, dan presisi',
    beforeBadge: 'SEBELUM: PECAH & GARIS',
    afterBadge: 'SESUDAH: LAYAR BARU',
    beforeImg: '/images/repair/lcd-before.jpg',
    afterImg: '/images/repair/lcd-after.jpg',
    details: [
      'Garis hijau/putih OLED dan retakan kaca teratasi tuntas dengan penggantian panel presisi',
      'Sentuhan responsif serta kecerahan layar normal dan merata',
      'Pemasangan lem seal gasket baru yang rapi di sekeliling frame bezel',
      'Pembersihan total serpihan kaca sebelum pemasangan panel baru'
    ]
  },
  {
    id: 'battery-swollen',
    title: 'Baterai Kembung & Health 100%',
    subtitle: 'Kasus: Baterai Kembung Mendorong Casing & Drop Cepat',
    part: 'Baterai OEM & Original High-Density Pure Cell',
    time: 'Pengerjaan: Bisa Ditunggu',
    beforeLabel: 'Sebelum servis: baterai lithium-ion smartphone kembung dan menggelembung di dalam bodi',
    afterLabel: 'Sesudah servis di B-Cell Sangatta: baterai baru rata, presisi, dan suhu stabil',
    beforeBadge: 'SEBELUM: KEMBUNG',
    afterBadge: 'SESUDAH: BATERAI BARU',
    beforeImg: '/images/repair/battery-before.jpg',
    afterImg: '/images/repair/battery-after.jpg',
    details: [
      'Baterai kembung dilepas aman tanpa merusak fleksibel layar dan motherboard',
      'Pemasangan sel baterai baru dengan perekat pull-tab rapi standar pabrik',
      'Uji arus pengisian daya (ampere) dan kestabilan suhu sebelum diserahkan'
    ]
  },
  {
    id: 'water-corrosion',
    title: 'Dekontaminasi HP Masuk Air',
    subtitle: 'Kasus: PCB Terkena Air & Jamur Korosi di Jalur Konektor',
    part: 'Ultrasonic Chemical PCB Cleaning & Micro-Soldering',
    time: 'Ringan: Bisa Ditunggu · Area Mesin: Lebih Lama',
    timeNote:
      'Jika air hanya mengenai area ringan dan belum parah, pengerjaan bisa ditunggu. Namun bila cairan sudah masuk ke area mesin/motherboard atau memicu korosi jalur, pengerjaan membutuhkan waktu lebih lama untuk pembersihan menyeluruh dan uji kestabilan.',
    beforeLabel: 'Sebelum servis: motherboard HP terkena tetesan air dan korosi mineral pada jalur komponen',
    afterLabel: 'Sesudah servis di B-Cell Sangatta: papan PCB bersih dan kering setelah pembersihan ultrasonic',
    beforeBadge: 'SEBELUM: AIR & KOROSI',
    afterBadge: 'SESUDAH: PCB BERSIH',
    beforeImg: '/images/repair/water-before.jpg',
    afterImg: '/images/repair/water-after.jpg',
    details: [
      'Pembersihan total jamur korosi dan sisa cairan dengan cairan kimia khusus PCB',
      'Pengeringan terkontrol serta pengecekan jalur short dengan multimeter',
      'Data penting, foto, dan aplikasi tetap aman selama memori tidak rusak'
    ]
  }
];

interface RepairVisualizerProps {
  onNavigate?: (page: PageRoute, anchor?: string) => void;
}

export const RepairVisualizer: React.FC<RepairVisualizerProps> = ({ onNavigate }) => {
  const [activeCaseId, setActiveCaseId] = useState<RepairCase['id']>('lcd-iphone');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isAutoComparing, setIsAutoComparing] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = REPAIR_CASES.find((c) => c.id === activeCaseId) || REPAIR_CASES[0];

  // Smooth 60fps sinusoidal comparison animation (stops automatically on user interaction)
  useEffect(() => {
    if (!isAutoComparing) return;

    let rafId = 0;
    let startTime: number | null = null;
    const cycleDurationMs = 5200;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % cycleDurationMs) / cycleDurationMs;
      // Smooth sine wave between 14% and 86%
      const nextPos = 50 + Math.sin(progress * Math.PI * 2) * 36;
      setSliderPosition(nextPos);
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isAutoComparing, activeCaseId]);

  const updatePositionFromClientX = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsAutoComparing(false);
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePositionFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePositionFromClientX(e.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const getCaseIcon = (id: RepairCase['id']) => {
    switch (id) {
      case 'battery-swollen':
        return <BatteryCharging className="w-3.5 h-3.5" />;
      case 'water-corrosion':
        return <Droplets className="w-3.5 h-3.5" />;
      default:
        return <Smartphone className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>PERBANDINGAN SEBELUM &amp; SESUDAH SERVIS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Hasil Presisi Pengerjaan Teknisi B-Cell
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3">
            Geser garis pembanding untuk melihat perbedaan kondisi perangkat sebelum dan sesudah ditangani di meja teknisi kami.
          </p>
        </div>

        {/* Highlight Banner: Ruang Tunggu Nyaman & Meja Teknisi Terbuka */}
        <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-blue-950/60 via-zinc-900/90 to-blue-950/60 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-blue-950/30">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0 shadow-inner">
              <Eye className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="text-white font-bold text-sm tracking-tight">
                  Ruang Tunggu Nyaman &amp; Meja Teknisi Terbuka
                </h3>
              </div>
              <p className="text-zinc-400 text-xs mt-0.5">
                Saksikan proses perbaikan gadget Anda langsung di hadapan meja teknisi tanpa rasa was-was. Tidak ada komponen yang ditutup-tutupi.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transparan &amp; Bisa Ditunggu</span>
            </span>
          </div>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {REPAIR_CASES.map((item) => {
            const isActive = item.id === activeCaseId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveCaseId(item.id);
                  setSliderPosition(50);
                  setIsAutoComparing(true);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/30'
                    : 'bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                {getCaseIcon(item.id)}
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Comparison Stage */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-4 sm:p-8 shadow-2xl card-glow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Pixel-Aligned Before/After Slider Area */}
            <div className="lg:col-span-8 flex flex-col items-center">
              <div
                ref={containerRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                role="slider"
                tabIndex={0}
                aria-label={`Perbandingan sebelum dan sesudah ${activeCase.title}`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(sliderPosition)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowLeft') {
                    setIsAutoComparing(false);
                    setSliderPosition((p) => Math.max(0, p - 5));
                  } else if (e.key === 'ArrowRight') {
                    setIsAutoComparing(false);
                    setSliderPosition((p) => Math.min(100, p + 5));
                  }
                }}
                className="relative w-full aspect-4/3 rounded-2xl overflow-hidden cursor-ew-resize select-none touch-none border border-zinc-800 bg-zinc-950 group shadow-2xl"
              >
                {/* BASE LAYER: SESUDAH (REPAIRED) */}
                <img
                  src={activeCase.afterImg}
                  alt={activeCase.afterLabel}
                  width={800}
                  height={600}
                  decoding="async"
                  loading="lazy"
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />

                {/* CLIPPED OVERLAY: SEBELUM (DAMAGED) - GPU clip-path keeps 100% pixel alignment */}
                <img
                  src={activeCase.beforeImg}
                  alt={activeCase.beforeLabel}
                  width={800}
                  height={600}
                  decoding="async"
                  loading="lazy"
                  draggable={false}
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />

                {/* Top Corner Status Pills */}
                <div className="absolute top-3 left-3 bg-red-600/90 backdrop-blur-md text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg border border-red-400/40 shadow-lg flex items-center gap-1.5 pointer-events-none z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>{activeCase.beforeBadge}</span>
                </div>

                <div className="absolute top-3 right-3 bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg border border-emerald-400/40 shadow-lg flex items-center gap-1.5 pointer-events-none z-10">
                  <Check className="w-3 h-3" />
                  <span>{activeCase.afterBadge}</span>
                </div>

                {/* Clean Comparison Divider Handle */}
                <div
                  className="absolute top-0 bottom-0 pointer-events-none z-20 flex flex-col items-center justify-center"
                  style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                  <div className="w-0.5 h-full bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.85)]" />
                  <div className="absolute w-9 h-9 rounded-full bg-black/85 border-2 border-white shadow-xl flex items-center justify-center text-white backdrop-blur-md transition-transform group-hover:scale-110">
                    <ArrowLeftRight className="w-4 h-4 text-blue-400" />
                  </div>
                </div>

                {/* Subtle Bottom Drag Hint */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-zinc-200 font-mono border border-zinc-700/80 flex items-center gap-1.5 pointer-events-none z-20 whitespace-nowrap">
                  <ArrowLeftRight className="w-3 h-3 text-blue-400" />
                  <span>{isAutoComparing ? 'Geser kiri / kanan untuk membandingkan manual' : 'Tahan & geser untuk melihat perbedaan'}</span>
                </div>
              </div>

              {/* Controls Toolbar & Quick Presets */}
              <div className="mt-4 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400 px-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-mono text-zinc-500 mr-1 hidden sm:inline">TAMPILAN:</span>
                  <button
                    type="button"
                    onClick={() => {
                      setIsAutoComparing(false);
                      setSliderPosition(100);
                    }}
                    className={`px-2.5 py-1 rounded-lg border text-[11px] font-mono transition cursor-pointer ${
                      sliderPosition > 95
                        ? 'bg-red-950/60 text-red-300 border-red-700/50'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Sebelum
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsAutoComparing(false);
                      setSliderPosition(50);
                    }}
                    className={`px-2.5 py-1 rounded-lg border text-[11px] font-mono transition cursor-pointer ${
                      sliderPosition >= 45 && sliderPosition <= 55
                        ? 'bg-blue-950/60 text-blue-300 border-blue-700/50'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Split 50:50
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsAutoComparing(false);
                      setSliderPosition(0);
                    }}
                    className={`px-2.5 py-1 rounded-lg border text-[11px] font-mono transition cursor-pointer ${
                      sliderPosition < 5
                        ? 'bg-emerald-950/60 text-emerald-300 border-emerald-700/50'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Sesudah
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setIsAutoComparing(!isAutoComparing)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition cursor-pointer text-xs"
                >
                  {isAutoComparing ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-amber-400" />
                      <span>Jeda Animasi</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Jalankan Animasi</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Case Details Info Column */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 block mb-1">
                  SPESIFIKASI PENGERJAAN EKSPRES
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {activeCase.subtitle}
                </h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Ditangani langsung menggunakan peralatan kalibrasi dan mikroskop di konter B-Cell Jl. Margo Santoso 2 RT.41, Sangatta.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-3 pt-1 text-xs">
                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <span className="text-zinc-500 block text-[11px] mb-1 font-mono">KOMPONEN TERPASANG</span>
                  <strong className="text-white text-xs">{activeCase.part}</strong>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <span className="text-zinc-500 block text-[11px] mb-1 font-mono">ESTIMASI WAKTU</span>
                  <strong className="text-emerald-400 text-xs">{activeCase.time}</strong>
                  {activeCase.timeNote && (
                    <p className="text-[11px] text-zinc-400 mt-1.5 leading-relaxed">
                      {activeCase.timeNote}
                    </p>
                  )}
                </div>

                <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-900/40 text-blue-200">
                  <span className="text-blue-400 block text-[11px] mb-1 font-mono font-semibold">
                    JAMINAN KEAMANAN &amp; TRANSPARANSI
                  </span>
                  <p className="text-[11px] text-zinc-300 leading-relaxed">
                    Dikerjakan langsung di hadapan Anda. Konter kami dilengkapi ruang tunggu nyaman dan meja teknisi terbuka tanpa sekat tertutup.
                  </p>
                </div>
              </div>

              {/* Verified Checklist */}
              <div className="space-y-2 text-xs text-zinc-300 pt-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                  STANDAR QUALITY CONTROL B-CELL:
                </span>
                {activeCase.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-[11px] leading-tight">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={`${ROUTE_SEO.pricing.path}#booking`}
                  onClick={(e) => {
                    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('pricing', '#booking');
                    }
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 px-4 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Konsultasikan Kerusakan HP Anda via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
