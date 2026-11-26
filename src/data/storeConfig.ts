/**
 * Konfigurasi Utama Konter B-Cell Sangatta
 * Digunakan secara terpusat untuk konsistensi nomor kontak, alamat, dan link komunikasi.
 */

export const STORE_CONFIG = {
  name: 'Konter B-Cell Sangatta',
  shortName: 'B-Cell',
  tagline: 'Service HP Express, Suku Cadang OEM & Original, Konter Terpercaya Sangatta',
  address: 'Jl. Margo Santoso 2 RT.41, Sangatta, Kab. Kutai Timur, Kalimantan Timur',
  streetAddress: 'Jl. Margo Santoso 2 RT.41',
  locality: 'Sangatta',
  region: 'Kalimantan Timur',
  postalCode: '75611',
  phoneRaw: '082259116538',
  phoneFormatted: '0822-5911-6538',
  whatsappNumber: '6282259116538',
  facebookUrl: 'https://web.facebook.com/profile.php?id=61576051101379&locale=id_ID',
  googleMapsUrl: 'https://share.google/jbobJleO475vg9wHw',
  latitude: 0.509548,
  longitude: 117.5436914,
  operatingHours: {
    weekday: 'Setiap Hari (Senin – Minggu): 08.00 – 22.00 WITA',
    weekend: 'Hari Libur Tetap Buka: 08.00 – 22.00 WITA'
  }
};

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
