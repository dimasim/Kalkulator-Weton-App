<script lang="ts">
  export let person1Name: string;
  export let person2Name: string;
  export let weton1: any;
  export let weton2: any;
  export let totalNeptu: number;
</script>

<div class="bg-white rounded-2xl shadow-xl p-8 mb-8">
  <h2 class="text-2xl font-bold text-amber-800 mb-6 text-center">Informasi Weton</h2>
  <div class="grid md:grid-cols-2 gap-6">
    <div class="text-center p-6 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl">
      <h3 class="text-xl font-semibold text-amber-800 mb-2">
        {person1Name || 'Orang Pertama'}
      </h3>
      <p class="text-lg text-amber-700 mb-2">{weton1.weton}</p>
      <p class="text-sm text-amber-600">Neptu: {weton1.totalNeptu}</p>
    </div>
    <div class="text-center p-6 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl">
      <h3 class="text-xl font-semibold text-amber-800 mb-2">
        {person2Name || 'Orang Kedua'}
      </h3>
      <p class="text-lg text-amber-700 mb-2">{weton2.weton}</p>
      <p class="text-sm text-amber-600">Neptu: {weton2.totalNeptu}</p>
    </div>
  </div>
  <div class="text-center mt-4 p-4 bg-amber-50 rounded-lg">
    <p class="text-lg font-semibold text-amber-800">
      Total Neptu: {totalNeptu}
    </p>
  </div>
</div>