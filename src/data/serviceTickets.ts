export interface ServiceTicket {
  ticketNumber: string;
  customerName: string;
  phoneNumberMasked: string;
  deviceModel: string;
  issue: string;
  repairCategory: string;
  status: 'Pengecekan Awal' | 'Menunggu Suku Cadang' | 'Proses Pengerjaan' | 'Quality Control Selesai' | 'Siap Diambil di Konter';
  statusStep: number; // 1 to 4
  technician: string;
  intakeDate: string;
  estimatedCompletion: string;
  estimatedCost: number;
  notes: string;
  replacedParts?: string[];
  warrantyDays: number;
}

export const SAMPLE_TICKETS: ServiceTicket[] = [
  {
    ticketNumber: 'BC-8821',
    customerName: 'Ahmad S.',
    phoneNumberMasked: '0812-****-3312',
    deviceModel: 'iPhone 11 128GB Black',
    issue: 'Layar LCD pecah dan sentuhan bagian atas macet',
    repairCategory: 'Ganti LCD OEM / Original',
    status: 'Siap Diambil di Konter',
    statusStep: 4,
    technician: 'Teknisi Utama B-Cell',
    intakeDate: '11 Okt 2026, 10:15 WITA',
    estimatedCompletion: '11 Okt 2026, 11:00 WITA (Selesai)',
    estimatedCost: 385000,
    notes: 'LCD OEM / Original terpasang rapi, sentuhan responsif normal, seal lem anti-debu baru terpasang.',
    replacedParts: ['Panel LCD OEM / Original', 'Waterproof Adhesive Gasket'],
    warrantyDays: 30
  },
  {
    ticketNumber: 'BC-8822',
    customerName: 'Maya Lestari',
    phoneNumberMasked: '0852-****-9104',
    deviceModel: 'Samsung Galaxy A52 8/128GB',
    issue: 'Baterai drop drastis dari 60% langsung mati',
    repairCategory: 'Ganti Baterai OEM / Original',
    status: 'Quality Control Selesai',
    statusStep: 3,
    technician: 'Teknisi B-Cell',
    intakeDate: '11 Okt 2026, 13:30 WITA',
    estimatedCompletion: '11 Okt 2026, 14:15 WITA',
    estimatedCost: 165000,
    notes: 'Baterai OEM / Original kapasitas murni 4500mAh terpasang, sedang proses uji siklus pengisian daya fast charge.',
    replacedParts: ['Baterai OEM / Original Samsung A52'],
    warrantyDays: 30
  },
  {
    ticketNumber: 'BC-8823',
    customerName: 'Hendra W.',
    phoneNumberMasked: '0821-****-5578',
    deviceModel: 'Redmi Note 10 Pro',
    issue: 'Mati total setelah terkena tumpahan air hujan di motor',
    repairCategory: 'Chemical Cleaning & Service IC Power',
    status: 'Proses Pengerjaan',
    statusStep: 2,
    technician: 'Teknisi Hardware Level 3',
    intakeDate: '11 Okt 2026, 14:00 WITA',
    estimatedCompletion: '11 Okt 2026, 17:00 WITA',
    estimatedCost: 320000,
    notes: 'Pembersihan cairan korosi dengan chemical khusus PCB selesai, saat ini penanganan short jalur VDD_MAIN di mikroskop.',
    replacedParts: ['Kapasitor Filter Short', 'Thermal Paste Baru'],
    warrantyDays: 30
  }
];
