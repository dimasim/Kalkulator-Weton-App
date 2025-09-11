<script>
	import DatePicker from '$lib/components/DatePicker.svelte';
	import ResultCard from '$lib/components/ResultCard.svelte';
	import { getWetonDetail, calculateAllPetung } from '$lib/utils/wetonCalculator.js';

	let tanggalOrang1 = '2003-03-01'; // Default value for example
	let tanggalOrang2 = '2002-07-30'; // Default value for example

	let wetonOrang1 = null;
	let wetonOrang2 = null;
	let hasilRamalan = [];

	// Blok reaktif: akan berjalan otomatis setiap kali variabel di dalamnya berubah
	$: {
		wetonOrang1 = getWetonDetail(tanggalOrang1);
		wetonOrang2 = getWetonDetail(tanggalOrang2);

		if (wetonOrang1 && wetonOrang2) {
			hasilRamalan = calculateAllPetung(wetonOrang1, wetonOrang2);
		} else {
			hasilRamalan = [];
		}
	}
</script>

<svelte:head>
	<title>Kalkulator Primbon Jodoh Lengkap</title>
</svelte:head>

<div class="min-h-screen bg-slate-50 p-4 font-sans md:p-8">
	<main class="mx-auto w-full max-w-3xl rounded-2xl bg-white p-6 shadow-lg md:p-10">
		<div class="text-center">
			<h1 class="text-3xl font-bold text-slate-800">Primbon Jodoh Betaljemur Adammakna</h1>
			<p class="mt-2 text-slate-500">
				Analisis perjodohan berdasarkan 6 metode perhitungan primbon Jawa.
			</p>
		</div>

		<div class="my-8 flex flex-col justify-center gap-8 md:flex-row">
			<DatePicker label="Tanggal Lahir Pasangan 1" bind:value={tanggalOrang1} {wetonOrang1} />
			<DatePicker label="Tanggal Lahir Pasangan 2" bind:value={tanggalOrang2} {wetonOrang2} />
		</div>

		{#if hasilRamalan.length > 0}
			<div class="mt-10">
				<h2 class="mb-4 text-center text-2xl font-bold text-slate-800">
					Hasil Analisis Perjodohan
				</h2>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
					{#each hasilRamalan as hasil}
						<ResultCard
							title={hasil.title}
							sisa={hasil.sisa}
							nama={hasil.nama}
							deskripsi={hasil.deskripsi}
						/>
					{/each}
				</div>
				<div class="mt-8 rounded-lg bg-yellow-50 p-4 text-center text-sm text-yellow-800">
					<strong>Penting:</strong> Ramalan ini adalah warisan budaya untuk referensi, bukan penentu
					takdir. Hasil positif dapat mengurangi pengaruh negatif, begitu pula sebaliknya.
				</div>
			</div>
		{/if}
	</main>
</div>
