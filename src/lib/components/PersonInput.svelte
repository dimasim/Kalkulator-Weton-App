<script lang="ts">
	import { Heart } from 'lucide-svelte';

	export let title: string;
	export let name: string;
	export let date: string;
	// Tambahkan prop baru
	export let anakKe: number | null;
</script>

<div class="space-y-4">
	<h3 class="flex items-center gap-2 text-xl font-semibold text-amber-800">
		<Heart class="h-5 w-5" />
		{title}
	</h3>
	<input
		type="text"
		placeholder="Nama"
		bind:value={name}
		class="w-full rounded-lg border border-amber-200 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-amber-300"
	/>
	<input
		type="date"
		bind:value={date}
		class="w-full rounded-lg border border-amber-200 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-amber-300"
	/>
	<input
		type="number"
		placeholder="Anak ke-"
		min="1"
		bind:value={anakKe}
		class="w-full rounded-lg border border-amber-200 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-amber-300"
	/>
</div>
