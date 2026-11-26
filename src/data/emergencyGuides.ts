export interface EmergencyGuide {
  id: string;
  title: string;
  subtitle: string;
  urgency: 'Darurat Kritis' | 'Sangat Penting' | 'Perhatian';
  icon: 'droplets' | 'flame' | 'smartphone-charging' | 'shield-alert';
  summary: string;
  dos: string[];
  donts: string[];
  technicianAdvice: string;
}

export const EMERGENCY_GUIDES: EmergencyGuide[] = [
  {
    id: 'air',
    title: 'HP Tercebur / Kemasukan Air',
    subtitle: 'Langkah Penyelamatan 10 Menit Pertama',
    urgency: 'Darurat Kritis',
    icon: 'droplets',
    summary: 'Air yang masuk ke sirkuit motherboard akan memicu elektrolisis dan korosi instan jika ada arus listrik aktif.',
    dos: [
      'Segera matikan daya (Power Off) ponsel secepatnya.',
      'Lepas kartu SIM tray, casing luar, dan kartu memori.',
      'Keringkan bagian luar dengan kain mikrofiber / tisu bersih secara tegak lurus.',
      'Bawa segera ke B-Cell Jl. Margo Santoso 2 untuk dekontaminasi dan pembersihan korosi kimia khusus PCB.'
    ],
    donts: [
      'JANGAN dicolok kabel cas sama sekali! Arus 5V/9V akan langsung membakar jalur IC.',
      'JANGAN direndam beras! Debu beras justru masuk ke lubang speaker dan menjadi adonan lembab korosif.',
      'JANGAN ditiup hairdryer suhu panas! Udara bertekanan mendorong air lebih dalam ke modul kamera & LCD.',
      'JANGAN dikocok-kocok terlalu keras.'
    ],
    technicianAdvice: 'Makin cepat dibawa ke konter (kurang dari 24 jam), peluang HP selamat mencapai 90% karena korosi belum mengikis jalur tembaga PCB.'
  },
  {
    id: 'baterai-kembung',
    title: 'Baterai Menggembung / Panas Ekstrem',
    subtitle: 'Bahaya Kebocoran Gas Lithium',
    urgency: 'Darurat Kritis',
    icon: 'flame',
    summary: 'Gas hidrogen terperangkap di dalam kantung baterai akibat degradasi kimia sel lithium.',
    dos: [
      'Hentikan pemakaian dan jauhkan dari bahan yang mudah terbakar (kasur, karpet).',
      'Matikan ponsel dan simpan di permukaan lantai semen / keramik yang sejuk.',
      'Bawa hati-hati ke B-Cell untuk pengangkatan baterai dengan pelarut khusus.'
    ],
    donts: [
      'JANGAN menusuk atau menekan kantung baterai yang gembung dengan jarum/obeng (bisa meledak dan memicu kobaran api).',
      'JANGAN mengisi daya semalaman (overcharge).',
      'JANGAN memaksakan memasang casing ketat yang menekan layar melengkung.'
    ],
    technicianAdvice: 'Jika layar atau backdoor sudah terdorong naik, segera ganti baterai sebelum panel layar OLED yang mahal ikut pecah tertekan dari dalam.'
  },
  {
    id: 'ghost-touch',
    title: 'Layar Garis Hijau / Ghost Touch',
    subtitle: 'Layar Sentuh Bergerak Sendiri',
    urgency: 'Perhatian',
    icon: 'shield-alert',
    summary: 'Digitizer sensor fleksibel mengalami keretakan mikron atau gangguan ground arus statis.',
    dos: [
      'Kunci layar sementara (Lock Screen) jika sentuhan liar berisiko salah pencet atau transfer uang.',
      'Aktifkan mode cadangan data ke cloud jika layar masih separuh terlihat.',
      'Gunakan mouse USB via sambungan OTG bila layar tidak bisa disentuh untuk input PIN sandi.'
    ],
    donts: [
      'JANGAN menekan kaca dengan tenaga berlebih, bisa merusak panel AMOLED di bawahnya.',
      'JANGAN mengabaikan garis kecil, karena biasanya garis akan bertambah seiring getaran di saku.'
    ],
    technicianAdvice: 'Di B-Cell Sangatta, penggantian LCD sudah termasuk pembersihan lem lama, pelurusan frame bezel, dan pengetesan sentuhan presisi.'
  }
];
