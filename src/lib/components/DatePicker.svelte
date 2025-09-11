<script>
	export let label;
	export let value = '';
	export let wetonDetail = null;
</script>

<div class="flex-1">
	<label class="mb-2 block text-left font-semibold text-slate-700">{label}</label>
	<input
		type="date"
		bind:value
		class="w-full rounded-lg border border-slate-300 p-3 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
	/>
	{#if wetonDetail}
		<div class="mt-3 rounded-md bg-slate-100 p-2 text-sm text-slate-600">
			<strong>{wetonDetail.weton}</strong> (Neptu: {wetonDetail.totalNeptu})
		</div>
	{/if}
</div>