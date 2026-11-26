# Konter B-Cell Sangatta — Official Website

Website resmi **Konter B-Cell Sangatta** (`https://servicehpsangatta.com`), pusat layanan service HP express bergaransi di Jl. Margo Santoso 2 RT.41, Sangatta, Kabupaten Kutai Timur, Kalimantan Timur.

## Fitur Utama

- **Beranda (`/`)**: Profil layanan, perbandingan visual interaktif sebelum & sesudah servis, daftar layanan inti (LCD, baterai, IC/mati total, restorasi full housing, software, beli HP rusak), SOP servis jujur, lokasi toko, testimoni, dan FAQ.
- **Layanan & Biaya (`/harga`)**: Formulir konsultasi estimasi biaya via WhatsApp, panduan layanan & garansi, program terima/beli HP rusak, dan formulir booking servis.
- **Panduan HP (`/panduan`)**: Pertolongan pertama HP masuk air/rusak, simulasi kerusakan & penanganan cepat, dan kebijakan garansi resmi toko.
- **Lokasi Toko (`/lokasi`)**: Alamat lengkap, jam operasional (setiap hari 08.00 – 22.00 WITA), cakupan antar-jemput area Sangatta, dan petunjuk arah Google Maps.
- **Lacak Nota (`/lacak-nota`)**: Pratinjau pelacakan nota servis (sedang dalam tahap integrasi dengan aplikasi internal konter).

## Menjalankan Secara Lokal

Prasyarat: **Node.js 20+**

```bash
npm install
npm run dev
```

## Build Produksi & Deploy (Vercel)

```bash
npm run lint
npm run build
```

Proyek ini sudah dilengkapi `vercel.json` untuk routing URL bersih (`/harga`, `/panduan`, `/lokasi`, `/lacak-nota`), header keamanan HTTP, dan optimasi cache aset statis.
