<script lang="ts">
  import { Calendar, Star, Baby } from 'lucide-svelte';
  export let hariBaikNikah: string[];
</script>

<div class="space-y-6">
  <h2 class="text-2xl font-bold text-amber-800 mb-6 text-center flex items-center gap-2 justify-center">
    <Calendar class="w-6 h-6" />
    Hari Baik untuk Pernikahan
  </h2>
  
  <div class="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-8 text-center">
    <h3 class="text-xl font-bold text-amber-800 mb-4">
      Rekomendasi Hari Pernikahan
    </h3>
    <div class="grid md:grid-cols-3 gap-4">
      {#each hariBaikNikah as hari}
        <div class="bg-white rounded-lg p-4 shadow-md">
          <p class="text-amber-800 font-semibold">{hari}</p>
        </div>
      {/each}
    </div>
  </div>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-white border border-amber-200 rounded-xl p-6">
      <h4 class="text-lg font-semibold text-amber-800 mb-3 flex items-center gap-2">
        <Star class="w-5 h-5" />
        Tips Memilih Hari
      </h4>
      <ul class="text-amber-700 space-y-2 list-disc pl-5">
        <li>Konsultasikan dengan orang tua/sesepuh</li>
        <li>Pertimbangkan musim dan cuaca</li>
        <li>Hindari bulan-bulan sibuk keluarga</li>
        <li>Sesuaikan dengan ketersediaan tempat</li>
      </ul>
    </div>
    
    <div class="bg-white border border-amber-200 rounded-xl p-6">
      <h4 class="text-lg font-semibold text-amber-800 mb-3 flex items-center gap-2">
        <Baby class="w-5 h-5" />
        Persiapan Lainnya
      </h4>
      <ul class="text-amber-700 space-y-2 list-disc pl-5">
        <li>Siapkan siraman dengan air 7 sumur</li>
        <li>Gunakan kembang setaman (bunga 7 rupa)</li>
        <li>Lakukan ritual adat sesuai tradisi</li>
        <li>Yang terpenting adalah niat baik dan doa restu</li>
      </ul>
    </div>
  </div>
</div>