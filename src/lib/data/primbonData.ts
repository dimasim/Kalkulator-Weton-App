import type { Hari, Pasaran } from '$lib/utils/wetonCalculator';

export const NEPTU_VALUES: {
	hari: Record<Hari, number>;
	pasaran: Record<Pasaran, number>;
} = {
	hari: { Minggu: 5, Senin: 4, Selasa: 3, Rabu: 7, Kamis: 8, Jumat: 6, Sabtu: 9 },
	pasaran: { Legi: 5, Pahing: 9, Pon: 7, Wage: 4, Kliwon: 8 }
};

export const SIAL_TEXT: Record<number, string> = {
    15: "Potensi cekcok sangat tinggi dan kemungkinan hadirnya orang ketiga sangat besar.",
    20: "Kurang harmonis sehingga peluang perpisahan cukup tinggi, baik cerai hidup maupun cerai mati.",
    23: "Sering bertengkar sehingga peluang perpisahan juga tinggi.",
    25: "Akan sering mendapatkan kesialan dalam berumah tangga.",
    26: "Bakal sering menghadapi permasalahan sosial akibat perilakunya sendiri.",
    28: "Kurang harmonis karena masalah komunikasi jika mereka berumah tangga.",
    30: "Akan menemui berbagai persoalan rumah tangga yang sering kali berujung kepada perpisahan.",
    32: "Diprediksi bermasalah, tetapi potensi perpisahan termasuk paling rendah di antara yang lain.",
    33: "Berpotensi menghadirkan orang ketiga dalam rumah tangga yang mengarah kepada perceraian."
};
export const RAMALAN_PERNIKAHAN_TEXT: { nama: string; deskripsi: string; }[] = [
    { nama: 'Wasesa Segara', deskripsi: 'Pasangan ini bersifat pemaaf, rendah hati, penuh wibawa, dan memiliki visi pernikahan yang luas.' }, // Sisa 1
    { nama: 'Tunggak Semi', deskripsi: 'Memiliki kemampuan mendulang rezeki, namun berisiko mengalami masalah kesehatan.' }, // Sisa 2
    { nama: 'Satriya Wibawa', deskripsi: 'Akan dianugerahi rezeki yang melimpah dan menciptakan kehidupan yang sejahtera.' }, // Sisa 3
    { nama: 'Sumur Sinaba', deskripsi: 'Menjadi teladan bagi banyak pasangan dan rumah tangganya penuh ilmu.' }, // Sisa 4
    { nama: 'Satria Wirang', deskripsi: 'Mungkin menghadapi cobaan dan kekurangan finansial dalam pernikahan.' }, // Sisa 5
    { nama: 'Bumi Kepetak', deskripsi: 'Orang yang tertutup tetapi gigih bekerja dan solid dalam menghadapi kesulitan.' }, // Sisa 6
    { nama: 'Lebu Ketiyup Angin', deskripsi: 'Cita-cita sulit terkabul dan ketidakpastian mengitari kehidupan mereka.' }  // Sisa 7 (atau 0)
];
export const ARAH_RUMAH: Record<number, { arah: string; deskripsi: string }> = {
  1: { arah: 'Timur', deskripsi: 'Membawa keberuntungan dalam karir dan kesehatan' },
  2: { arah: 'Tenggara', deskripsi: 'Mendukung hubungan harmonis dan kekayaan' },
  3: { arah: 'Selatan', deskripsi: 'Meningkatkan popularitas dan kreativitas' },
  4: { arah: 'Barat Daya', deskripsi: 'Memperkuat ikatan keluarga dan stabilitas' },
  5: { arah: 'Barat', deskripsi: 'Mendukung pendidikan anak dan komunikasi' },
  6: { arah: 'Barat Laut', deskripsi: 'Membawa dukungan dari orang berpengaruh' },
  7: { arah: 'Utara', deskripsi: 'Meningkatkan karir dan rezeki' },
  0: { arah: 'Timur Laut', deskripsi: 'Mendukung spiritual dan kebijaksanaan' }
};

export const HARI_BAIK_NIKAH: Record<string, string[]> = {
  'Jodoh': ['Jumat Pahing', 'Minggu Pon', 'Selasa Kliwon'],
  'Ratu': ['Kamis Wage', 'Sabtu Legi', 'Senin Pahing'],
  'Pesthi': ['Rabu Pon', 'Jumat Kliwon', 'Minggu Wage'],
  'default': ['Jumat Kliwon', 'Minggu Legi', 'Selasa Pahing']
};
// Teks hasil ramalan berdasarkan sisa pembagian atau kategori
export const RESULTS_TEXT: {
    dibagi9: Record<string, string>;
    hariLahir: Record<string, string>;
    dibagi4: { nama: string; deskripsi: string; }[];
    dibagi5: { nama: string; deskripsi: string; }[];
    dibagi8: { nama: string; tipe: string; }[];
    dibagi10: ({ nama: string; deskripsi: string; } | null)[];
} = {
	
	dibagi9: {
		'3&5': 'Rumah tangganya akan mengalami perceraian dengan cepat.',
		'5&9':'Rumah tangganya akan banyak mendapat rejeki',
	},
	hariLahir: {
		'Selasa&Sabtu': 'Kehidupan rumah tangganya akan mengalami banyak pertengkaran.',
		'Senin&Sabtu': 'Kehidupan rumah tangganya selalu berkecukupan, tidak pernah kurang.',
// yang bawah ngarang copilot
		'Rabu&Jumat': 'Kehidupan rumah tangganya akan bahagia dan sejahtera.',
		'Kamis&Minggu': 'kehidupan rumah tangganya akan banyak mendapat rejeki.',
		'Senin': 'Kehidupan rumah tangganya akan mengalami kesusahan dan penderitaan.',
		'Senin&Selasa': 'Kehidupan rumah tangganya akan mengalami kesusahan dan penderitaan.',
		'Rabu&Sabtu': 'Kehidupan rumah tangganya akan bahagia dan sejahtera.',
		'Kamis&Jumat': 'Kehidupan rumah tangganya akan banyak mendapat rejeki.',
		'Kamis&Sabtu': 'Kehidupan rumah tangganya akan bahagia dan sejahtera.',
		'Jumat&Minggu': 'Kehidupan rumah tangganya akan banyak mendapat rejeki.',
		'Rabu&Minggu': 'Kehidupan rumah tangganya akan bahagia dan sejahtera.',
		'Selasa&Jumat': 'Kehidupan rumah tangganya akan mengalami banyak pertengkaran.',
		'Senin&Jumat': 'Kehidupan rumah tangganya akan mengalami kesusahan dan penderitaan.',
		'Selasa&Minggu': 'Kehidupan rumah tangganya akan mengalami banyak pertengkaran.'

	},
    dibagi4: [
		{ nama: 'Ganthi', deskripsi: 'Akan sulit memiliki keturunan.' }, // Sisa 1
		{ nama: 'Gembili', deskripsi: 'Akan dikaruniai banyak keturunan.' }, // Sisa 2
		{ nama: 'Sri', deskripsi: 'Akan memiliki rejeki yang melimpah.' }, // Sisa 3
		{ nama: 'Punggel', deskripsi: 'Salah satu akan meninggal dunia.' } // Sisa 4 (atau 0)
	],
	dibagi5: [
		{ nama: 'Sri', deskripsi: 'Memiliki rejeki yang melimpah.' }, // Sisa 1
		{ nama: 'Dhana', deskripsi: 'Akan menjadi kaya raya.' }, // Sisa 2
		{ nama: 'Lara', deskripsi: 'Akan mengalami banyak penyakit.' }, // Sisa 3
		{ nama: 'Pati', deskripsi: 'Salah satu akan meninggal dunia.' }, // Sisa 4
		{ nama: 'Lungguh', deskripsi: 'Akan memiliki jabatan atau pangkat.' } // Sisa 5 (atau 0)
	],
	dibagi8: [
		{ nama: 'Pegat', tipe: 'buruk' }, // Sisa 1
		{ nama: 'Ratu', tipe: 'baik' }, // Sisa 2
		{ nama: 'Jodoh', tipe: 'sangat-baik' }, // Sisa 3
		{ nama: 'Topo', tipe: 'waspada' }, // Sisa 4
		{ nama: 'Tinari', tipe: 'baik' }, // Sisa 5
		{ nama: 'Padu', tipe: 'buruk' }, // Sisa 6
		{ nama: 'Sujanan', tipe: 'sangat-buruk' }, // Sisa 7
		{ nama: 'Pesthi', tipe: 'baik' } // Sisa 8 (atau 0)
	],
	dibagi10: [
		null, // sisa 1
		null, // sisa 2
		null, // sisa 3
		null, // sisa 4
		null, // sisa 5
		{ nama: 'Bumi Kapetak', deskripsi: 'Tahan sengsara, rajin bekerja, dan menjaga kebersihan.' }, // sisa 6
        null, null, null, null // Sisa 7-10
	]
};