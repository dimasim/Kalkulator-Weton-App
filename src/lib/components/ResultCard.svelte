<script>
	export let title;
	export let sisa;
	export let nama = null;
	export let deskripsi;
</script>

<div class="rounded-lg border border-slate-200 bg-white p-4 text-left shadow-sm">
	<p class="text-sm font-semibold text-blue-600">{title} &middot; <span class="font-normal text-slate-500">{sisa}</span></p>
	<h3 class="mt-1 text-xl font-bold text-slate-800">{nama || 'Hasil'}</h3>
	<p class="mt-1 text-slate-600">{deskripsi}</p>
</div>