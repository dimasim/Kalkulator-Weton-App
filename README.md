# Kalkulator Weton Jodoh Lengkap (SvelteKit)

![Svelte](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Sebuah aplikasi web modern yang dibangun menggunakan SvelteKit dan TypeScript untuk menghitung kecocokan jodoh berdasarkan sistem Weton Primbon Jawa. [cite_start]Aplikasi ini mengimplementasikan berbagai metode perhitungan yang ditemukan dalam kitab-kitab primbon kuno seperti *Betaljemur Adammakna* dan *Atassadhur Adammakna*[cite: 2, 21, 23], memberikan analisis yang komprehensif dari berbagai aspek perjodohan.

## Fitur Utama

-   **Input Tanggal Lahir Dinamis**: Memasukkan tanggal lahir untuk kedua pasangan dengan mudah.
-   **Perhitungan Neptu Otomatis**: Menghitung nilai Neptu berdasarkan Hari (Senin-Minggu) dan Pasaran (Legi, Pahing, Pon, Wage, Kliwon).
-   **Tampilan Ringkasan Weton**: Menampilkan hasil Weton (misal: "Sabtu Legi") dan total Neptu untuk masing-masing individu serta gabungannya.
-   **Antarmuka Tab Modern**: Navigasi yang mudah antara berbagai jenis ramalan.
-   **Analisis Kecocokan Multi-Petung**:
    -   [cite_start]**Metode Dibagi 8**: Menghasilkan kategori populer seperti `Pegat`, `Ratu`, `Jodoh`, `Topo`, `Tinari`, `Padu`, `Sujanan`, dan `Pesthi`. [cite: 1716]
    -   [cite_start]**Metode Dibagi 7 (Ramalan Pernikahan)**: Menghasilkan kategori seperti `Wasesa Segara`, `Tunggak Semi`, `Satriya Wibawa`, dll. [cite: 1471]
    -   **Metode Dibagi 5 & 4**: Memberikan prediksi terkait rezeki dan keturunan (`Sri`, `Gembili`, dll).
    -   [cite_start]**Analisis "Hitungan Sial"**: Memberikan peringatan khusus untuk jumlah Neptu tertentu yang dianggap perlu waspada. [cite: 1459]
    -   **Petung Lainnya**: Mencakup perhitungan berdasarkan hari lahir dan Neptu masing-masing yang dibagi 9.
-   **Fitur Tambahan**:
    -   **Rekomendasi Arah Rumah**: Menyarankan arah rumah terbaik yang selaras dengan total Neptu pasangan.
    -   **Saran Hari Baik Pernikahan**: Memberikan rekomendasi hari-hari baik untuk melangsungkan pernikahan berdasarkan hasil kecocokan.
-   **Desain Responsif**: Tampilan yang optimal di perangkat desktop maupun mobile.

## Teknologi yang Digunakan

-   **Framework**: SvelteKit
-   **Bahasa**: TypeScript
-   **Styling**: Tailwind CSS
-   **Ikon**: Lucide Svelte

## Struktur Proyek

Proyek ini disusun dengan memisahkan antara data, logika, dan komponen tampilan untuk kemudahan pengelolaan dan skalabilitas.
/src
├── lib/
│   ├── components/
│   │   ├── PersonInput.svelte      # Komponen input untuk nama & tanggal
│   │   ├── WetonSummary.svelte     # Komponen untuk ringkasan hasil weton
│   │   └── tabs/
│   │       ├── CompatibilityTab.svelte # Konten Tab Kecocokan
│   │       ├── DirectionTab.svelte   # Konten Tab Arah Rumah
│   │       └── WeddingTab.svelte     # Konten Tab Hari Baik Nikah
│   ├── data/
│   │   └── primbonData.ts          # "Database" statis untuk semua data primbon
│   └── utils/
│       └── wetonCalculator.ts      # "Otak" aplikasi, berisi semua fungsi perhitungan
└── routes/
└── +page.svelte              # Halaman utama yang mengatur state & komponen
## Cara Menjalankan Proyek

Pastikan Anda memiliki [Node.js](https://nodejs.org/) terinstall di sistem Anda.

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/nama-anda/weton-checker.git](https://github.com/nama-anda/weton-checker.git)
    cd weton-checker
    ```

2.  **Install dependensi:**
    ```bash
    npm install
    ```

3.  **Jalankan server development:**
    ```bash
    npm run dev
    ```

    Buka browser Anda dan kunjungi `http://localhost:5173` untuk melihat aplikasi berjalan.

## Ringkasan Logika

-   **`src/lib/data/primbonData.ts`**: File ini berfungsi sebagai sumber data utama. Semua nilai Neptu, deskripsi hasil ramalan dari berbagai metode `petung`, rekomendasi arah rumah, dan data primbon lainnya disimpan di sini dalam bentuk objek dan array yang diekspor.

-   **`src/lib/utils/wetonCalculator.ts`**: File ini adalah pusat logika. Ia berisi fungsi-fungsi murni untuk:
    -   `getWetonDetail()`: Mengambil string tanggal dan mengubahnya menjadi objek Weton yang berisi nama hari, pasaran, dan total Neptu.
    -   `calculateAllPetung()`: Menerima detail Weton dari kedua pasangan dan menjalankan semua metode perhitungan yang tersedia.
    -   `calculateArahRumah()` & `getHariBaikNikah()`: Fungsi pembantu untuk fitur tambahan.

-   **`src/routes/+page.svelte`**: Halaman ini bertindak sebagai "konduktor". Ia mengelola semua state (input tanggal, nama, hasil perhitungan) dan secara dinamis menampilkan komponen-komponen yang relevan berdasarkan interaksi pengguna (misalnya, menampilkan hasil setelah tombol "Hitung" ditekan atau beralih antar tab).

## Disclaimer

Aplikasi ini dibuat untuk tujuan **edukasi dan pelestarian budaya**. Perhitungan yang ditampilkan didasarkan pada interpretasi dari kitab primbon Jawa seperti Kitab Primbon Atassadhur Adammakna. [cite_start]Hasil ramalan tidak seharusnya menjadi satu-satunya penentu dalam mengambil keputusan hidup yang penting seperti pernikahan[cite: 1547]. Kebijaksanaan, komunikasi, dan komitmen antar pasangan tetap menjadi fondasi utama dalam sebuah hubungan.






