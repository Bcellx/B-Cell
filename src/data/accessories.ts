export interface AccessoryItem {
  id: string;
  name: string;
  category: 'Screen Protector' | 'Charger & Cable' | 'Audio & Misc';
  price: number;
  highlight: string;
  freeInstall: boolean;
  warranty: string;
  imageUrl: string;
}

export const READY_ACCESSORIES: AccessoryItem[] = [
  {
    id: 'acc-1',
    name: 'Hydrogel Anti-Spy (Privacy) Full Coverage',
    category: 'Screen Protector',
    price: 45000,
    highlight: 'Anti-intip dari samping, self-healing goresan halus, licin untuk gaming.',
    freeInstall: true,
    warranty: 'Pasang Presisi di Konter',
    imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'acc-2',
    name: 'Tempered Glass 9D Curved Full Lem',
    category: 'Screen Protector',
    price: 35000,
    highlight: 'Kaca kekerasan 9H tebal, tepi lengkung halus, bening jernih tanpa pelangi.',
    freeInstall: true,
    warranty: 'Bebas Gelembung',
    imageUrl: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'acc-3',
    name: 'Adaptor Charger 20W / 33W Fast Charging Safe',
    category: 'Charger & Cable',
    price: 95000,
    highlight: 'Support Power Delivery (PD) & Quick Charge 3.0, suhu dingin saat ngecas.',
    freeInstall: false,
    warranty: 'Garansi Toko 30 Hari',
    imageUrl: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'acc-4',
    name: 'Kabel Data Braided Type-C to Type-C / Lightning',
    category: 'Charger & Cable',
    price: 40000,
    highlight: 'Anyaman nilon tahan 10.000 lekukan, support transfer data 480Mbps & cas 60W.',
    freeInstall: false,
    warranty: 'Garansi Toko 14 Hari',
    imageUrl: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=600&auto=format&fit=crop&q=80'
  }
];

export const WARRANTY_RULES = {
  coveragePeriods: [
    { part: 'LCD & Touchscreen OEM / Original', period: 's/d 30 Hari', detail: 'Garansi fungsi sentuhan presisi dan garis abnormal cacat pabrik.' },
    { part: 'Baterai OEM / Original', period: '30 Hari Tukar Baru', detail: 'Garansi kapasitas drop ekstrem, kembung, atau mati mendadak.' },
    { part: 'Perbaikan IC Mesin & Mati Total', period: 's/d 30 Hari', detail: 'Garansi jalur sirkuit yang diperbaiki tetap stabil.' },
    { part: 'Port Charger, Kamera & Speaker OEM / Original', period: '30 Hari', detail: 'Garansi fungsi arus dan kejernihan tangkapan suara/gambar.' }
  ],
  coveredItems: [
    'Layar touchscreen tidak merespons atau loncat sendiri tanpa benturan baru',
    'Baterai mengalami penurunan daya drastis atau mati di atas persentase 20%',
    'Ponsel kembali restart atau tidak mengisi daya setelah pergantian part',
    'Kerusakan murni dari cacat suku cadang (bukan human error)'
  ],
  voidItems: [
    'Segel garansi toko B-Cell dalam keadaan sobek, rusak, atau dilepas',
    'Ponsel mengalami benturan fisik baru, kaca pecah luar/dalam, atau retak rambut',
    'Terkena cairan/air baru setelah tanggal pengambilan servis',
    'Telah dibongkar atau diservis oleh pihak ketiga di luar teknisi B-Cell Sangatta'
  ]
};
