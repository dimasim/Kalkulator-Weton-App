# --- Tahap 1: Build Stage ---
# Menggunakan image Node.js versi 20 yang ringan (alpine) sebagai basis untuk build
FROM node:20-alpine AS builder

# Menentukan direktori kerja di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json terlebih dahulu untuk caching
COPY package*.json ./

# Install semua dependensi, termasuk devDependencies yang dibutuhkan untuk build
RUN npm install

# Salin sisa kode aplikasi
COPY . .

# Jalankan skrip build dari SvelteKit
RUN npm run build


# --- Tahap 2: Run Stage ---
# Menggunakan image Node.js yang sama, tapi sebagai stage baru yang bersih
FROM node:20-alpine AS runner

WORKDIR /app

# Salin hanya output build dari 'builder' stage
COPY --from=builder /app/build ./build

# Salin package.json untuk menginstall dependensi produksi
COPY --from=builder /app/package.json ./package.json

# Install HANYA dependensi produksi untuk menjaga image tetap kecil
RUN npm install --omit=dev

# PENTING: Set environment variable agar server Node.js bisa diakses dari luar container
ENV HOST=0.0.0.0
ENV PORT=3000

# Beritahu Docker bahwa container akan berjalan di port 3000
EXPOSE  3000

# Perintah untuk menjalankan aplikasi saat container dimulai
CMD ["node", "build"]