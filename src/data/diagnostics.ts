import { DiagnosticItem, DiagnosticKey } from '../types';

export const DIAGNOSTIC_DATA: Record<DiagnosticKey, DiagnosticItem> = {
  lcd: {
    id: 'lcd',
    label: 'Layar / LCD Retak',
    badge: 'Display & Touchscreen',
    title: 'Ganti LCD Suku Cadang OEM & Original',
    description: 'Solusi untuk layar retak, garis hijau/putih, blank hitam, dead pixel, atau touchscreen tidak merespons sentuhan. Warna akurat & presisi terjamin.',
    symptoms: [
      'Layar bergaris vertikal atau horizontal',
      'Sentuhan loncat / ghost touch',
      'Kaca retak parah meski gambar masih tampil',
      'Layar gelap total namun nada dering tetap berbunyi'
    ],
    estimatedTime: 'Bisa Ditunggu',
    warranty: 's/d 30 Hari Garansi',
    startingPrice: 250000,
    imageUrl: '/images/diagnostics/diag-lcd.jpg',
    recommendedPart: 'Panel Layar OEM & Original'
  },
  battery: {
    id: 'battery',
    label: 'Baterai Drop / Kembung',
    badge: 'Power & Battery Health',
    title: 'Ganti Baterai OEM & Original Bergaransi',
    description: 'Atasi baterai cepat terkuras, HP restart sendiri saat persentase di bawah 30%, backcover terangkat karena kembung, atau Battery Health menurun drastis.',
    symptoms: [
      'Battery Health < 75% atau status Service',
      'HP tiba-tiba drop dari 50% ke 10%',
      'Suhu bagian belakang sering panas tanpa sebab',
      'Baterai kembung hingga layar atau backdoor terangkat'
    ],
    estimatedTime: 'Bisa Ditunggu',
    warranty: '30 Hari Tukar Baru',
    startingPrice: 120000,
    imageUrl: '/images/diagnostics/diag-battery.jpg',
    recommendedPart: 'Baterai OEM & Original'
  },
  matot: {
    id: 'matot',
    label: 'Mati Total / IC Rusak',
    badge: 'Hardware Level 3 Micro-Soldering',
    title: 'Perbaikan Mesin, Jalur Short & IC Power',
    description: 'Penanganan kerusakan motherboard kompleks dengan mikroskop digital: IC Power konslet, IC Charging mati, CPU Reballing, hingga sinyal hilang (No Service).',
    symptoms: [
      'HP tidak merespon charger sama sekali (ampere 0.00A)',
      'Lampu indikator berkedip merah atau getar saja',
      'HP mati mendadak saat bermain game berat',
      'Kerusakan akibat lonjakan arus charger tidak resmi'
    ],
    estimatedTime: '1 - 3 Jam (Tergantung Tingkat Kerusakan)',
    warranty: 's/d 30 Hari Garansi',
    startingPrice: 350000,
    imageUrl: '/images/diagnostics/diag-matot.jpg',
    recommendedPart: 'IC OEM & Original BGA Replacement + Thermal Paste'
  },
  camera: {
    id: 'camera',
    label: 'Kamera Blur / Getar',
    badge: 'Optics & Sensor Module',
    title: 'Ganti Modul Kamera Depan & Belakang',
    description: 'Perbaikan sensor kamera bergetar (OIS rusak akibat dudukan motor), lensa baret/pecah, kamera hitam blank, atau autofokus tidak bisa mengunci objek.',
    symptoms: [
      'Kamera bergetar berisik saat dibuka',
      'Muncul bintik hitam permanen pada hasil foto',
      'Aplikasi kamera force close atau blank hitam',
      'Kaca luar kamera retak kemasukan debu halus'
    ],
    estimatedTime: 'Bisa Ditunggu',
    warranty: 's/d 30 Hari Garansi',
    startingPrice: 180000,
    imageUrl: '/images/diagnostics/diag-camera.jpg',
    recommendedPart: 'Modul Kamera OEM & Original Precision'
  },
  water: {
    id: 'water',
    label: 'Kemasukan Air',
    badge: 'Emergency Chemical PCB Cleaning',
    title: 'Pertolongan Darurat Korosi Air & Pembersihan Kimia',
    description: 'Dekontaminasi cairan menggunakan cairan kimia khusus PCB dan pengeringan suhu terkontrol. Jika kasus masih ringan dan area terdampak tidak parah bisa ditunggu, namun bila air sudah masuk ke area mesin/motherboard pengerjaan membutuhkan waktu lebih lama untuk pembersihan menyeluruh dan pengecekan jalur.',
    symptoms: [
      'HP tercebur air toilet, kolam renang, atau kehujanan',
      'Muncul embun di dalam kaca kamera',
      'Port charger mendeteksi cairan terus menerus',
      'HP terasa panas padahal dalam keadaan mati'
    ],
    estimatedTime: 'Ringan: Bisa Ditunggu · Masuk Area Mesin: Lebih Lama',
    warranty: 'Garansi Mesin Normal',
    startingPrice: 150000,
    imageUrl: '/images/diagnostics/diag-water.jpg',
    recommendedPart: 'Chemical Drying + PCB Deep Cleaning + Anti-Oxidation Seal'
  }
};
