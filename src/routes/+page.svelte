<script lang="ts">
	import { onMount } from 'svelte';

	import {
		getWetonDetail,
		calculateAllPetung,
		calculateArahRumah,
		getHariBaikNikah
	} from '$lib/utils/wetonCalculator';
	import { Star, Heart, Compass, Calendar } from 'lucide-svelte';

	// Impor komponen-komponen baru
	import PersonInput from '$lib/components/PersonInput.svelte';
	import WetonSummary from '$lib/components/WetonSummary.svelte';
	import CompatibilityTab from '$lib/components/tabs/CompatibilityTab.svelte';
	import DirectionTab from '$lib/components/tabs/DirectionTab.svelte';
	import WeddingTab from '$lib/components/tabs/WeddingTab.svelte';

	// State aplikasi
	let person1Date = '';
	let person2Date = '';
	let person1Name = '';
	let person2Name = '';
	let results: any = null;
	let activeTab = 'compatibility';
	let person1AnakKe: number | null = null;
  	let person2AnakKe: number | null = null;


	onMount(() => {
		// Cek data tersimpan di localStorage
		const savedData = localStorage.getItem('wetonInputs');
		if (savedData) {
			const parsedData = JSON.parse(savedData);
			person1Name = parsedData.person1Name || '';
			person1Date = parsedData.person1Date || '';
			person2Name = parsedData.person2Name || '';
			person2Date = parsedData.person2Date || '';

			// Jika ada data, langsung hitung hasilnya
			if (person1Date && person2Date) {
				calculateCompatibility();
			}
		}
	});
	$: {
			if (typeof window !== 'undefined') {
			const dataToSave = { person1Name, person1Date, person2Name, person2Date, person1AnakKe, person2AnakKe };
			localStorage.setItem('wetonInputs', JSON.stringify(dataToSave));
			}
		}
	const calculateCompatibility = () => {
		const weton1 = getWetonDetail(person1Date);
		const weton2 = getWetonDetail(person2Date);
		if (!weton1 || !weton2) {
			alert('Silakan masukkan tanggal yang valid untuk kedua orang.');
			return;
		}
    	const compatibility = calculateAllPetung(weton1, weton2, person1AnakKe, person2AnakKe);
		results = {
			weton1,
			weton2,
			compatibility,
			totalNeptu: weton1.totalNeptu + weton2.totalNeptu,
			arahRumah: calculateArahRumah(weton1.totalNeptu + weton2.totalNeptu),
			hariBaikNikah: getHariBaikNikah(compatibility)
		};
	};

	const reset = () => {
		person1Date = '';
		person2Date = '';
		person1Name = '';
		person2Name = '';
		person1AnakKe = null;
    	person2AnakKe = null;
		results = null;
		activeTab = 'compatibility';
		if (typeof window !== 'undefined') {
			localStorage.removeItem('wetonInputs');
		}
	};
</script>

<div class="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 font-sans">
	<div class="container mx-auto px-4 py-8">
		<div class="mx-auto max-w-4xl">
			<div class="mb-8 text-center">
				<h1 class="mb-4 text-4xl font-bold text-amber-800">Kalkulator Weton Lengkap</h1>
				<p class="text-amber-700">Berdasarkan Primbon Atassadhur & Betaljemur Adammakna</p>
			</div>

			<div class="mb-8 rounded-2xl bg-white p-8 shadow-xl">
				<div class="grid md:grid-cols-2 gap-6 mb-6">
				<PersonInput title="Orang Pertama" bind:name={person1Name} bind:date={person1Date} bind:anakKe={person1AnakKe} />
				<PersonInput title="Orang Kedua" bind:name={person2Name} bind:date={person2Date} bind:anakKe={person2AnakKe} />
				</div>
				<!-- <div class="mb-6 grid gap-6 md:grid-cols-2">
					<PersonInput title="Orang Pertama" bind:name={person1Name} bind:date={person1Date} />
					<PersonInput title="Orang Kedua" bind:name={person2Name} bind:date={person2Date} />
				</div> -->
				<div class="flex justify-center gap-4">
					<button
						on:click={calculateCompatibility}
						class="flex items-center gap-2 rounded-lg bg-amber-600 px-8 py-3 font-semibold text-white transition hover:bg-amber-700"
					>
						<Star class="h-5 w-5" /> Hitung
					</button>
					<button
						on:click={reset}
						class="rounded-lg bg-gray-500 px-8 py-3 font-semibold text-white transition hover:bg-gray-600"
					>
						Reset
					</button>
				</div>
			</div>

			{#if results}
				<WetonSummary
					{person1Name}
					{person2Name}
					weton1={results.weton1}
					weton2={results.weton2}
					totalNeptu={results.totalNeptu}
				/>

				<div class="overflow-hidden rounded-2xl bg-white shadow-xl">
					<div class="flex flex-wrap border-b border-amber-200">
						<button
							on:click={() => (activeTab = 'compatibility')}
							class="flex items-center gap-2 px-6 py-4 font-semibold transition {activeTab ===
							'compatibility'
								? 'border-b-2 border-amber-600 bg-amber-100 text-amber-800'
								: 'text-amber-600 hover:bg-amber-50'}"
						>
							<Heart class="h-4 w-4" /> Kecocokan
						</button>
						<button
							on:click={() => (activeTab = 'direction')}
							class="flex items-center gap-2 px-6 py-4 font-semibold transition {activeTab ===
							'direction'
								? 'border-b-2 border-amber-600 bg-amber-100 text-amber-800'
								: 'text-amber-600 hover:bg-amber-50'}"
						>
							<Compass class="h-4 w-4" /> Arah & Tempat
						</button>
						<button
							on:click={() => (activeTab = 'wedding')}
							class="flex items-center gap-2 px-6 py-4 font-semibold transition {activeTab ===
							'wedding'
								? 'border-b-2 border-amber-600 bg-amber-100 text-amber-800'
								: 'text-amber-600 hover:bg-amber-50'}"
						>
							<Calendar class="h-4 w-4" /> Hari Baik
						</button>
					</div>

					<div class="p-8">
						{#if activeTab === 'compatibility'}
							<CompatibilityTab compatibility={results.compatibility} />
						{:else if activeTab === 'direction'}
							<DirectionTab arahRumah={results.arahRumah} />
						{:else if activeTab === 'wedding'}
							<WeddingTab hariBaikNikah={results.hariBaikNikah} />
						{/if}
					</div>
				</div>
			{/if}

			<div class="mt-8 text-center text-sm text-amber-600">
				<p>© 2024 Kalkulator Weton Jawa - Untuk Tujuan Edukasi & Budaya.</p>
			</div>
		</div>
	</div>
</div>
