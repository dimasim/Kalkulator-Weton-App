<script lang="ts">
  import { Home, Compass, Activity } from 'lucide-svelte';
  export let arahRumah: { arah: string; deskripsi: string };
</script>

<div class="space-y-6">
  <h2 class="text-2xl font-bold text-amber-800 mb-6 text-center flex items-center gap-2 justify-center">
    <Home class="w-6 h-6" />
    Arah dan Tempat Tinggal
  </h2>
  <div class="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-8 text-center">
    <Compass class="w-16 h-16 text-amber-600 mx-auto mb-4" />
    <h3 class="text-2xl font-bold text-amber-800 mb-2">
      Arah Terbaik: {arahRumah.arah}
    </h3>
    <p class="text-amber-700 text-lg">{arahRumah.deskripsi}</p>
  </div>
  
  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-white border border-amber-200 rounded-xl p-6">
      <h4 class="text-lg font-semibold text-amber-800 mb-3 flex items-center gap-2">
        <Home class="w-5 h-5" />
        Rekomendasi Rumah
      </h4>
      <ul class="text-amber-700 space-y-2 list-disc pl-5">
        <li>Pintu utama menghadap {arahRumah.arah}</li>
        <li>Kamar tidur di bagian yang tenang</li>
        <li>Ruang tamu di area yang terang</li>
        <li>Dapur di bagian belakang rumah</li>
      </ul>
    </div>
    
    <div class="bg-white border border-amber-200 rounded-xl p-6">
      <h4 class="text-lg font-semibold text-amber-800 mb-3 flex items-center gap-2">
        <Activity class="w-5 h-5" />
        Tips Tambahan
      </h4>
      <ul class="text-amber-700 space-y-2 list-disc pl-5">
        <li>Hindari rumah di ujung jalan (tusuk sate)</li>
        <li>Pilih lingkungan yang aman dan nyaman</li>
        <li>Pastikan sirkulasi udara dan cahaya baik</li>
        <li>Dekat dengan fasilitas umum jika memungkinkan</li>
      </ul>
    </div>
  </div>
</div>