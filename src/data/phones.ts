import { SmartphoneProduct } from '../types';

export const SMARTPHONE_CATALOG: SmartphoneProduct[] = [
  {
    id: 'p-1',
    name: 'iPhone 13 Pro 128GB Graphite',
    brand: 'Apple',
    condition: 'Ex Resmi iBox',
    price: 9850000,
    originalPrice: 11200000,
    storage: '128 GB',
    batteryHealth: '91%',
    specs: ['Super Retina XDR 120Hz ProMotion', 'A15 Bionic 6-Core', 'Fisik 98% Mulus', '3utools All Green 100%'],
    imageUrl: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=600&auto=format&fit=crop&q=80',
    isAvailable: true,
    warrantyNote: 'Garansi Toko 30 Hari + IMEI Seumur Hidup'
  },
  {
    id: 'p-2',
    name: 'Samsung Galaxy S23 Ultra 256GB Phantom Black',
    brand: 'Samsung',
    condition: 'Second Mulus',
    price: 12400000,
    originalPrice: 13900000,
    storage: '256 GB',
    specs: ['Snapdragon 8 Gen 2 for Galaxy', 'Kamera 200MP + S-Pen Bawaan', 'Layar Dynamic AMOLED 2X', 'Fullset Dus Charger'],
    imageUrl: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&auto=format&fit=crop&q=80',
    isAvailable: true,
    warrantyNote: 'Garansi SEIN Resmi Masih On + Toko 30 Hari'
  },
  {
    id: 'p-3',
    name: 'Redmi Note 13 Pro 5G 8/256GB Midnight Black',
    brand: 'Xiaomi',
    condition: 'Baru Segel',
    price: 3799000,
    originalPrice: 4199000,
    storage: '256 GB',
    specs: ['200MP OIS Camera Ultra Clear', 'AMOLED 1.5K 120Hz', '67W Turbo Charge In Box', 'Brand New In Box (Segel Pabrik)'],
    imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80',
    isAvailable: true,
    warrantyNote: 'Garansi Resmi Xiaomi Indonesia 15 Bulan'
  },
  {
    id: 'p-4',
    name: 'iPhone 11 64GB White',
    brand: 'Apple',
    condition: 'Ex Resmi iBox',
    price: 4950000,
    originalPrice: 5600000,
    storage: '64 GB',
    batteryHealth: '89%',
    specs: ['Liquid Retina HD Display', 'A13 Bionic Chip', 'TrueTone & Face ID Normal', 'Fullset Lengkap'],
    imageUrl: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600&auto=format&fit=crop&q=80',
    isAvailable: true,
    warrantyNote: 'Garansi Toko 30 Hari Bebas Reset'
  },
  {
    id: 'p-5',
    name: 'Vivo V30 5G 12/512GB Green Sea',
    brand: 'Vivo',
    condition: 'Like New',
    price: 4850000,
    originalPrice: 5999000,
    storage: '512 GB',
    specs: ['Aura Light Portrait 3.0', 'Snapdragon 7 Gen 3 (4nm)', 'Fisik 99% Mulus Like New', 'FlashCharge 80W'],
    imageUrl: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&auto=format&fit=crop&q=80',
    isAvailable: true,
    warrantyNote: 'Garansi Resmi Vivo Indonesia'
  },
  {
    id: 'p-6',
    name: 'Infinix Note 40 Pro 8/256GB Vintage Green',
    brand: 'Infinix',
    condition: 'Baru Segel',
    price: 3199000,
    originalPrice: 3499000,
    storage: '256 GB',
    specs: ['3D-Curved 120Hz AMOLED', '70W All-Round FastCharge 2.0', '20W Wireless MagCharge', 'Baru Segel Toko'],
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80',
    isAvailable: true,
    warrantyNote: 'Garansi Resmi Infinix 12 Bulan'
  }
];
