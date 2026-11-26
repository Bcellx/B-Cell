export interface PriceMatrixRow {
  serviceName: string;
  category: string;
  iphoneEstimate: string;
  androidEstimate: string;
  duration: string;
  warranty: string;
}

export const PRICING_MATRIX: PriceMatrixRow[] = [
  {
    serviceName: 'Ganti Baterai Health 100% (OEM / Original)',
    category: 'Baterai',
    iphoneEstimate: 'Mulai Rp 175.000',
    androidEstimate: 'Mulai Rp 100.000',
    duration: 'Bisa Ditunggu',
    warranty: '30 Hari Tukar Baru'
  },
  {
    serviceName: 'Ganti Layar LCD (OEM / Original)',
    category: 'Layar / LCD',
    iphoneEstimate: 'Mulai Rp 350.000',
    androidEstimate: 'Mulai Rp 150.000',
    duration: 'Bisa Ditunggu',
    warranty: 's/d 30 Hari'
  },
  {
    serviceName: 'Ganti Konektor Charger Type-C / Lightning Flex',
    category: 'Konektivitas',
    iphoneEstimate: 'Mulai Rp 150.000',
    androidEstimate: 'Mulai Rp 85.000',
    duration: 'Bisa Ditunggu',
    warranty: '30 Hari'
  },
  {
    serviceName: 'Service Mesin Mati Total / Konslet (IC Power/Cas)',
    category: 'Mesin / Motherboard',
    iphoneEstimate: 'Mulai Rp 450.000',
    androidEstimate: 'Mulai Rp 300.000',
    duration: '1 - 3 Jam',
    warranty: 's/d 30 Hari'
  },
  {
    serviceName: 'Ganti Kaca Kamera / Modul Kamera Utama',
    category: 'Kamera',
    iphoneEstimate: 'Mulai Rp 200.000',
    androidEstimate: 'Mulai Rp 120.000',
    duration: 'Bisa Ditunggu',
    warranty: 's/d 30 Hari'
  },
  {
    serviceName: 'Restorasi Full Housing (Ganti Frame, Bezel & Backdoor)',
    category: 'Body Restoration',
    iphoneEstimate: 'Mulai Rp 350.000',
    androidEstimate: 'Mulai Rp 200.000',
    duration: '1 - 3 Jam (Ready / PO)',
    warranty: 'Garansi Presisi & Fungsi'
  },
  {
    serviceName: 'Install Ulang, Bootloop & Lupa Sandi Kunci Layar',
    category: 'Software',
    iphoneEstimate: 'Mulai Rp 100.000',
    androidEstimate: 'Mulai Rp 75.000',
    duration: 'Bisa Ditunggu',
    warranty: 'Garansi Berhasil'
  },
  {
    serviceName: 'Pembersihan Korosi HP Kemasukan Air (Chemical Cleaning)',
    category: 'Emergency',
    iphoneEstimate: 'Mulai Rp 180.000',
    androidEstimate: 'Mulai Rp 120.000',
    duration: 'Ringan: Bisa Ditunggu · Area Mesin: Lebih Lama',
    warranty: 'Cek Jalur Bersih'
  }
];

export const BRAND_COST_MULTIPLIERS: Record<string, { multiplier: number; label: string }> = {
  Apple: { multiplier: 1.45, label: 'iPhone Series' },
  Samsung: { multiplier: 1.25, label: 'Samsung Galaxy Series' },
  Xiaomi: { multiplier: 1.0, label: 'Xiaomi / Redmi / POCO' },
  Oppo: { multiplier: 1.05, label: 'Oppo Series' },
  Vivo: { multiplier: 1.05, label: 'Vivo Series' },
  Realme: { multiplier: 1.0, label: 'Realme Series' },
  Infinix: { multiplier: 0.95, label: 'Infinix / Tecno' },
  Lainnya: { multiplier: 1.0, label: 'Merek Lainnya' }
};

export const ISSUE_BASE_PRICES: Record<string, { base: number; time: string; warranty: string }> = {
  lcd: { base: 260000, time: 'Bisa Ditunggu', warranty: 's/d 30 Hari' },
  battery: { base: 130000, time: 'Bisa Ditunggu', warranty: '30 Hari' },
  charging: { base: 95000, time: 'Bisa Ditunggu', warranty: '30 Hari' },
  matot: { base: 360000, time: '1-3 Jam', warranty: 's/d 30 Hari' },
  camera: { base: 160000, time: 'Bisa Ditunggu', warranty: 's/d 30 Hari' },
  software: { base: 80000, time: 'Bisa Ditunggu', warranty: 'Garansi Sukses' },
  water: { base: 140000, time: 'Ringan: Bisa Ditunggu · Area Mesin: Lebih Lama', warranty: 'Garansi Bersih' },
  restoration: { base: 250000, time: '1-3 Jam (Ready / PO)', warranty: 'Garansi Presisi' }
};
