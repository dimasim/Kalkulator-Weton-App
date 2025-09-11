<script lang="ts">
  import { Heart } from 'lucide-svelte';

  export let title: string;
  export let name: string;
  export let date: string;
</script>

<div class="space-y-4">
  <h3 class="text-xl font-semibold text-amber-800 flex items-center gap-2">
    <Heart class="w-5 h-5" />
    {title}
  </h3>
  <input
    type="text"
    placeholder="Nama"
    bind:value={name}
    class="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-transparent"
  />
  <input
    type="date"
    bind:value={date}
    class="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-transparent"
  />
</div>