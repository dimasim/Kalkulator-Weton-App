# Kalkulator Weton Jawa

Aplikasi web untuk menghitung dan menganalisis weton berdasarkan **Primbon Atassadhur** dan **Betaljemur Adammakna** — dua kitab primbon Jawa yang menjadi referensi utama perhitungan adat.

## Fitur

### Kecocokan Pasangan
Menganalisis kecocokan dua orang berdasarkan beberapa metode petung:
- **Petung Neptu Dibagi 9** — kecocokan berdasarkan sisa pembagian neptu masing-masing
- **Petung Hari Lahir** — analisis berdasarkan kombinasi hari lahir
- **Petung Dibagi 4** — menentukan keturunan (Ganthi, Gembili, Sri, Punggel)
- **Petung Dibagi 5** — menentukan nasib (Sri, Dhana, Lara, Pati, Lungguh)
- **Petung Dibagi 8** — metode populer (Pegat, Ratu, Jodoh, Topo, Tinari, Padu, Sujanan, Pesthi)
- **Petung Dibagi 10** — ramalan berdasarkan sisa 10 (Wasesa Segara, Tunggak Semi, dst.)
- **Ramalan Pernikahan Dibagi 7** — prediksi kehidupan rumah tangga
- **Analisis Hitungan Sial** — cek apakah jumlah neptu termasuk kategori yang perlu diwaspadai
- **Petung Urutan Kelahiran** — kecocokan berdasarkan posisi anak dalam keluarga (opsional)

### Arah & Tempat Tinggal
Rekomendasi arah hadap rumah yang baik berdasarkan total neptu pasangan, lengkap dengan tips pemilihan hunian.

### Hari Baik Pernikahan
Rekomendasi hari weton yang baik untuk pernikahan berdasarkan hasil petung, disertai tips persiapan prosesi adat Jawa.

## Tech Stack

- **[SvelteKit](https://kit.svelte.dev/)** v2 + Svelte 5
- **[Tailwind CSS](https://tailwindcss.com/)** v4
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Lucide Svelte](https://lucide.dev/)** — icon library
- **[Vite](https://vite.dev/)** — build tool
- **Docker** — untuk deployment

## Menjalankan Secara Lokal

Pastikan Node.js v18+ sudah terinstall.

```bash
# Install dependensi
npm install

# Jalankan development server
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`.

### Perintah Lain

```bash
# Build untuk produksi
npm run build

# Preview hasil build
npm run preview

# Type checking
npm run check

# Lint & format
npm run lint
npm run format
```

## Menjalankan dengan Docker

### Menggunakan Docker Compose (direkomendasikan)

```bash
docker compose up -d
```

Aplikasi akan berjalan di `http://localhost:3005`.

### Build & Run Manual

```bash
# Build image
docker build -t weton-app .

# Jalankan container
docker run -p 3005:3000 weton-app
```

## Cara Penggunaan

1. Masukkan nama dan tanggal lahir untuk orang pertama dan kedua
2. Isi urutan anak ke- (opsional) untuk perhitungan tambahan
3. Klik **Hitung**
4. Lihat hasil di tiga tab: **Kecocokan**, **Arah & Tempat**, dan **Hari Baik**

Input tersimpan otomatis di `localStorage`, sehingga saat halaman di-refresh data tidak hilang.

## Struktur Proyek

```
src/
├── lib/
│   ├── components/
│   │   ├── tabs/
│   │   │   ├── CompatibilityTab.svelte   # Tab hasil kecocokan
│   │   │   ├── DirectionTab.svelte       # Tab arah rumah
│   │   │   └── WeddingTab.svelte         # Tab hari baik nikah
│   │   ├── DatePicker.svelte
│   │   ├── PersonInput.svelte
│   │   ├── ResultCard.svelte
│   │   └── WetonSummary.svelte
│   ├── data/
│   │   └── primbonData.ts                # Seluruh data primbon
│   └── utils/
│       └── wetonCalculator.ts            # Logika kalkulasi weton
└── routes/
    └── +page.svelte                      # Halaman utama
```

## Catatan

Aplikasi ini dibuat untuk tujuan **edukasi dan pelestarian budaya Jawa**. Hasil perhitungan bersifat referensi dan tidak dimaksudkan sebagai keputusan mutlak.

---

© 2024 Kalkulator Weton Jawa
