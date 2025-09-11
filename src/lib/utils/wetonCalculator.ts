import {
	NEPTU_VALUES,
	RESULTS_TEXT,
	SIAL_TEXT,
	RAMALAN_PERNIKAHAN_TEXT,
	ARAH_RUMAH, HARI_BAIK_NIKAH
} from '$lib/data/primbonData';

interface WetonDetail {
	hari: string;
	pasaran: string;
	weton: string;
	totalNeptu: number;
}
interface PetungResult {
	title: string;
	sisa: string;
	nama?: string; // Tanda tanya (?) berarti properti ini opsional
	deskripsi: string;
}
export type Hari = 'Minggu' | 'Senin' | 'Selasa' | 'Rabu' | 'Kamis' | 'Jumat' | 'Sabtu';
export type Pasaran = 'Legi' | 'Pahing' | 'Pon' | 'Wage' | 'Kliwon';

const DAFTAR_HARI = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const DAFTAR_PASARAN = ['Legi', 'Pahing', 'Pon', 'Wage', 'Kliwon'];

/**
 * Menghitung detail Weton dari string tanggal (YYYY-MM-DD).
 * @param {string} dateString
 * @returns {WetonDetail|null} Objek berisi detail weton atau null jika input tidak valid.
 */
export function calculateArahRumah(totalNeptu: number) {
  const sisa = totalNeptu % 8;
  return ARAH_RUMAH[sisa];
}
export function getHariBaikNikah(compatibility: PetungResult[]) {
  const result8 = compatibility.find(r => r.title.includes('Dibagi 8'));
  if (result8 && result8.nama) {
    return HARI_BAIK_NIKAH[result8.nama] || HARI_BAIK_NIKAH.default;
  }
  return HARI_BAIK_NIKAH.default;
}
export function getWetonDetail(dateString: string): WetonDetail | null {
	if (!dateString) return null;

	const tanggal = new Date(dateString);
	if (isNaN(tanggal.getTime())) return null;

	const namaHari = DAFTAR_HARI[tanggal.getDay()];
	const neptuHari = NEPTU_VALUES.hari[namaHari as Hari];

	const tanggalAcuan = new Date('1970-01-01'); // Kamis Wage
	const selisihHari = Math.floor((tanggal.getTime() - tanggalAcuan.getTime()) / 86400000);
	const indexPasaran = (selisihHari + 3) % 5;
	const namaPasaran = DAFTAR_PASARAN[indexPasaran < 0 ? indexPasaran + 5 : indexPasaran];
	const neptuPasaran = NEPTU_VALUES.pasaran[namaPasaran as Pasaran];

	return {
		hari: namaHari,
		pasaran: namaPasaran,
		weton: `${namaHari} ${namaPasaran}`,
		totalNeptu: neptuHari + neptuPasaran
	};
}

/**
 * Menjalankan semua 6 petung perjodohan.
 * @param {WetonDetail} weton1 Detail weton orang pertama.
 * @param {WetonDetail} weton2 Detail weton orang kedua.
 * @returns {PetungResult[]} Array berisi hasil dari semua 6 petung.
 */
export function calculateAllPetung(weton1: WetonDetail, weton2: WetonDetail): PetungResult[] {
	if (!weton1 || !weton2) return [];

	const totalNeptu = weton1.totalNeptu + weton2.totalNeptu;
	const results: PetungResult[] = [];

	// 1. Dibagi 9
	const sisa1 = weton1.totalNeptu % 9 || 9;
	const sisa2 = weton2.totalNeptu % 9 || 9;
	const key9 = sisa1 < sisa2 ? `${sisa1}&${sisa2}` : `${sisa2}&${sisa1}`;
	results.push({
		title: 'Petung Neptu Dibagi 9',
		sisa: `Sisa ${sisa1} & ${sisa2}`,
		deskripsi: RESULTS_TEXT.dibagi9[key9] || 'Tidak ditemukan kecocokan spesifik.'
	});

	const keyHari =
		weton1.hari < weton2.hari ? `${weton1.hari}&${weton2.hari}` : `${weton2.hari}&${weton1.hari}`;
	results.push({
		title: 'Petung Hari Lahir',
		sisa: `${weton1.hari} & ${weton2.hari}`,
		deskripsi: RESULTS_TEXT.hariLahir[keyHari] || 'Tidak ditemukan kecocokan spesifik.'
	});

	// 3. Dibagi 4
	const sisa4 = totalNeptu % 4 || 4;
	const res4 = RESULTS_TEXT.dibagi4[sisa4 - 1];
	results.push({
		title: 'Petung Jumlah Neptu Dibagi 4',
		sisa: `Sisa ${sisa4}`,
		nama: res4.nama,
		deskripsi: res4.deskripsi
	});

	// 4. Dibagi 5
	const sisa5 = totalNeptu % 5 || 5;
	const res5 = RESULTS_TEXT.dibagi5[sisa5 - 1];
	results.push({
		title: 'Petung Jumlah Neptu Dibagi 5',
		sisa: `Sisa ${sisa5}`,
		nama: res5.nama,
		deskripsi: res5.deskripsi
	});

	// 5. Dibagi 8 (Metode Populer)
	const sisa8 = totalNeptu % 8 || 8;
	const res8 = RESULTS_TEXT.dibagi8[sisa8 - 1];
	results.push({
		title: 'Petung Jumlah Neptu Dibagi 8',
		sisa: `Sisa ${sisa8}`,
		nama: res8.nama,
		deskripsi: `Hasil perhitungan ini adalah ${res8.nama}.`
	});

	// 6. Dibagi 10
	const sisa10 = totalNeptu % 10 || 10;
	const res10 = RESULTS_TEXT.dibagi10[sisa10 - 1];
	results.push({
		title: 'Petung Jumlah Neptu Dibagi 10/7',
		sisa: `Sisa ${sisa10}`,
		nama: res10?.nama || '-',
		deskripsi: res10?.deskripsi || 'Tidak ditemukan kecocokan spesifik.'
	});

	// 7. Ramalan Pernikahan (dibagi 7)
	const sisa7 = totalNeptu % 7 || 7;
	const res7 = RAMALAN_PERNIKAHAN_TEXT[sisa7 - 1];
	results.push({
		title: 'Ramalan Pernikahan (Dibagi 7)',
		sisa: `Sisa ${sisa7}`,
		nama: res7.nama,
		deskripsi: res7.deskripsi
	});

	// 8. TAMBAHAN: Analisis Hitungan Sial
	const resSial = SIAL_TEXT[totalNeptu];
	results.push({
		title: 'Analisis Hitungan "Sial"',
		sisa: `Jumlah Neptu ${totalNeptu}`,
		nama: resSial ? 'Perlu Waspada' : 'Aman',
		deskripsi:
			resSial ||
			'Jumlah neptu Anda tidak termasuk dalam kategori yang perlu diwaspadai secara khusus.'
	});

	

	return results;
}
