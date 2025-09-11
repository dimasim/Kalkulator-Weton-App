<script lang="ts">
  import { RESULTS_TEXT } from '$lib/data/primbonData';

  export let compatibility: any[];

  function getCompatibilityColor(nama: string, tipe: string | undefined) {
      if (tipe) {
        switch (tipe) {
          case 'sangat-baik': return 'text-green-600 bg-green-50';
          case 'baik': return 'text-blue-600 bg-blue-50';
          case 'waspada': return 'text-yellow-600 bg-yellow-50';
          case 'buruk': return 'text-orange-600 bg-orange-50';
          case 'sangat-buruk': return 'text-red-600 bg-red-50';
          default: return 'text-gray-600 bg-gray-50';
        }
      }
      if (nama === 'Perlu Waspada') return 'text-red-600 bg-red-50';
      if (nama === 'Aman') return 'text-green-600 bg-green-50';
      return 'text-gray-600 bg-gray-50';
  }
</script>

<div class="space-y-6">
  <h2 class="text-2xl font-bold text-amber-800 mb-6 text-center">
    Hasil Perhitungan Kecocokan
  </h2>
  {#each compatibility as result}
    <div class="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border-l-4 border-amber-400">
      <h3 class="text-lg font-semibold text-amber-800 mb-2">{result.title}</h3>
      <div class="flex flex-wrap gap-2 mb-3">
        <span class="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
          {result.sisa}
        </span>
        {#if result.nama}
          <span class="px-3 py-1 rounded-full text-sm font-medium {getCompatibilityColor(result.nama, RESULTS_TEXT.dibagi8.find(r => r.nama === result.nama)?.tipe)}">
            {result.nama}
          </span>
        {/if}
      </div>
      <p class="text-amber-700">{result.deskripsi}</p>
    </div>
  {/each}
</div>