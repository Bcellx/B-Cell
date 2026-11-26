import { FaqItem, TestimonialItem } from '../types';

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'biaya',
    question: 'Di mana rekomendasi tempat service HP di Sangatta yang bisa ditunggu?',
    answer: 'Konter B-Cell adalah pusat service HP Sangatta terpercaya di Jl. Margo Santoso 2 RT.41, Sangatta (Kutai Timur). Pengecekan dan diagnosa awal di tempat kami 100% GRATIS (Rp 0). Pengerjaan dapat ditunggu langsung di depan meja teknisi.'
  },
  {
    id: 'faq-2',
    category: 'biaya',
    question: 'Bagaimana penentuan biaya service di Konter B-Cell Sangatta?',
    answer: 'Sangat adil dan transparan: Pengecekan awal selalu GRATIS Rp 0. Teknisi akan mengecek kondisi fisik & mengukur arus komponen di depan mata Anda, lalu memberikan estimasi biaya pasti. Jika Anda setuju baru dieksekusi, dan jika tidak cocok HP dirakit kembali tanpa dipungut biaya sepeser pun.'
  },
  {
    id: 'faq-3',
    category: 'garansi',
    question: 'Apakah service HP di Konter B-Cell Sangatta bergaransi dan data aman?',
    answer: 'Ya, setiap pengerjaan servis HP di B-Cell Sangatta disertai nota garansi toko resmi hingga 30 hari. Privasi data Anda (foto, WhatsApp, mobile banking) 100% aman dan tidak kami minta password atau PIN layar jika tidak diperlukan.'
  },
  {
    id: 'faq-4',
    category: 'pengiriman',
    question: 'Apakah B-Cell melayani antar-jemput servis HP area Sangatta dan sekitarnya?',
    answer: 'Ya! Kami melayani sistem jemput-antar service HP untuk area Sangatta Utara, Sangatta Selatan, Teluk Lingga, Swarga Bara, Singa Gembara, hingga kiriman dari Bengalon dan Rantau Pulung via kurir lokal atau travel.'
  },
  {
    id: 'faq-5',
    category: 'layanan',
    question: 'Apakah B-Cell Sangatta melayani terima/beli HP rusak atau minus?',
    answer: 'Tentu. Anda bisa membawa HP rusak atau minus (mati total, layar pecah, bootloop, atau kerusakan mesin) khusus Android menengah/baru & iPhone yang bebas kuncian akun ke konter kami di Jl. Margo Santoso 2 RT.41, Sangatta. Kami taksir dengan harga transparan untuk bahan kanibal sparepart dan langsung cair tunai atau transfer.'
  },
  {
    id: 'faq-6',
    category: 'garansi',
    question: 'Apa jenis suku cadang yang digunakan di Konter B-Cell Sangatta?',
    answer: 'Kami menyediakan pilihan suku cadang OEM (standar presisi pabrik) dan Original sesuai kebutuhan serta anggaran Anda. Seluruh suku cadang telah melalui uji kelayakan fungsi dan dilindungi garansi toko resmi hingga 30 hari.'
  }
];

export const REVIEWS_DATA: TestimonialItem[] = [
  {
    id: 'rev-1',
    customerName: 'Rian Pratama',
    device: 'iPhone 13 Pro',
    repairType: 'Ganti Layar OLED Presisi',
    rating: 5,
    date: 'November 2026 · Sangatta Utara',
    comment: 'Pelayanan terbaik di Sangatta! Ganti LCD iPhone 13 Pro bisa ditunggu di konter B-Cell Jl. Margo Santoso 2. Layar mulus jernih dan bergaransi nota resmi toko.',
    verified: true
  },
  {
    id: 'rev-2',
    customerName: 'Novita Sari',
    device: 'Samsung Galaxy A53 5G',
    repairType: 'Service IC Cas & Ganti Baterai',
    rating: 5,
    date: 'Oktober 2026 · Teluk Lingga',
    comment: 'HP tiba-tiba gak bisa dicas pas lagi kerja shift. Dibawa ke B-Cell langsung dicek teliti di depan mata, ternyata cuma jalur konektor flex. Murah, jujur, gak diada-adain kerusakannya.',
    verified: true
  },
  {
    id: 'rev-3',
    customerName: 'Fajar Nugroho',
    device: 'Redmi Note 12 Pro',
    repairType: 'Pembersihan Masuk Air + Ganti Speaker',
    rating: 5,
    date: 'Oktober 2026 · Swarga Bara',
    comment: 'HP sempat tercebur parah pas hujan lebat di Sangatta. Dibawa ke B-Cell langsung dibongkar dan dibersihkan korosinya pakai cairan kimia khusus PCB, Alhamdulillah HP normal lagi dan data aman semua!',
    verified: true
  }
];
