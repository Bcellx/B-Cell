import { ServiceOffering } from '../types';

export const CORE_SERVICES: ServiceOffering[] = [
  {
    id: 'lcd-replacement',
    title: 'Ganti LCD & Touchscreen Presisi',
    category: 'Display & Glass',
    description: 'Pemasangan rapi anti-renggang untuk iPhone, Samsung, Xiaomi, Oppo, Vivo, Infinix. Dilengkapi pembersihan bezel dan lem waterproof sealant standar pabrik.',
    duration: 'Bisa Ditunggu',
    startingPrice: 150000,
    warrantyText: 'Garansi s/d 30 Hari',
    highlights: ['Bisa ditunggu langsung', 'Suku Cadang OEM & Original', 'Respon Sentuhan Presisi'],
    iconName: 'smartphone'
  },
  {
    id: 'battery-replacement',
    title: 'Ganti Baterai Health 100%',
    category: 'Power Management',
    description: 'Baterai original baru dengan sel kobalt berkualitas tinggi. Menghilangkan notifikasi service, suhu stabil saat multitasking, dan daya tahan maksimal seharian.',
    duration: 'Bisa Ditunggu',
    startingPrice: 100000,
    warrantyText: 'Garansi 30 Hari',
    highlights: ['Bypass Notifikasi Non-Ori', 'Kapasitas Murni 100%', 'Aman Fast Charging'],
    iconName: 'battery-charging'
  },
  {
    id: 'ic-motherboard-repair',
    title: 'Service Mesin IC & Mati Total',
    category: 'Hardware Level 3',
    description: 'Spesialis reballing chip CPU, IC Power, IC Cas, IC Audio (iPhone loop speaker abu-abu), dan Baseband sinyal hilang. Ditangani dengan mikroskop 1000x presisi.',
    duration: '1 - 3 Jam',
    startingPrice: 300000,
    warrantyText: 'Garansi s/d 30 Hari',
    highlights: ['Peralatan Laboratorium', 'Tingkat Sukses 92%', 'Diagnosa Awal Gratis'],
    iconName: 'cpu'
  },
  {
    id: 'software-unlock',
    title: 'Install Ulang, Lupa Pola & Unlock Akun',
    category: 'Software & Firmware',
    description: 'Penanganan ponsel bootloop mentok logo, bricking, gagal update, lupa pola/PIN kunci layar, bypass akun Google FRP, dan unlock jaringan operator.',
    duration: 'Bisa Ditunggu',
    startingPrice: 75000,
    warrantyText: 'Garansi Sukses & Data Aman',
    highlights: ['Firmware Official Resmi', 'Bypass FRP Legal', 'Opsi Backup Data Pribadi'],
    iconName: 'terminal',
    isWide: true
  },
  {
    id: 'camera-speaker-repair',
    title: 'Ganti Kamera, Port Cas & Speaker',
    category: 'Acoustics & Sensors',
    description: 'Perbaikan port Type-C/Lightning longgar, speaker kresek, mic telepon mati, modul getar Taptic Engine, hingga lensa kamera belakang yang berjamur atau bergetar.',
    duration: 'Bisa Ditunggu',
    startingPrice: 85000,
    warrantyText: 'Garansi s/d 30 Hari',
    highlights: ['Suara Jernih Kembali', 'Fast Charging Normal', 'Kamera Fokus Tajam'],
    iconName: 'camera'
  },
  {
    id: 'full-housing-restoration',
    title: 'Restorasi Full Housing, Frame & Backdoor',
    category: 'Body & Cosmetic Restoration',
    description: 'Ubah tampilan HP lama yang penyok, lecet parah, atau kaca backdoor pecah menjadi mulus seperti baru. Penggantian rapi dari frame tengah, bezel, tombol, hingga backdoor—mesin & data asli Anda 100% tetap utuh.',
    duration: '1 - 3 Jam (Ready / PO)',
    startingPrice: 200000,
    warrantyText: 'Garansi Presisi & Fungsi Normal',
    highlights: ['Ganti Frame, Bezel & Backdoor', 'Mesin & Data Asli Tetap Utuh', 'Bisa Pesan (PO) Warna & Tipe'],
    iconName: 'sparkles',
    isWide: true
  },
  {
    id: 'buy-broken-phone',
    title: 'Terima / Beli HP Rusak & Minus',
    category: 'Buyback & Kanibal Sparepart',
    description: 'Punya HP mati total, layar pecah, atau bootloop yang tidak terpakai? Kami beli dengan harga pantas untuk bahan service & kanibal sparepart resmi di Sangatta.',
    duration: 'Taksiran 10 Menit',
    startingPrice: 100000,
    warrantyText: 'Langsung Cair Tunai / COD',
    highlights: ['Khusus Android Menengah/Baru & iPhone', 'Wajib Bebas Akun iCloud/FRP', 'Langsung Cair Tunai / Transfer'],
    iconName: 'banknote'
  }
];
