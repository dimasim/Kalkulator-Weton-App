import type { Hari, Pasaran } from '$lib/utils/wetonCalculator';

export const NEPTU_VALUES: {
	hari: Record<Hari, number>;
	pasaran: Record<Pasaran, number>;
} = {
	hari: { Minggu: 5, Senin: 4, Selasa: 3, Rabu: 7, Kamis: 8, Jumat: 6, Sabtu: 9 },
	pasaran: { Legi: 5, Pahing: 9, Pon: 7, Wage: 4, Kliwon: 8 }
};

export const SIAL_TEXT: Record<number, string> = {
	15: 'Potensi cekcok sangat tinggi dan kemungkinan hadirnya orang ketiga sangat besar.',
	20: 'Kurang harmonis sehingga peluang perpisahan cukup tinggi, baik cerai hidup maupun cerai mati.',
	23: 'Sering bertengkar sehingga peluang perpisahan juga tinggi.',
	25: 'Akan sering mendapatkan kesialan dalam berumah tangga.',
	26: 'Bakal sering menghadapi permasalahan sosial akibat perilakunya sendiri.',
	28: 'Kurang harmonis karena masalah komunikasi jika mereka berumah tangga.',
	30: 'Akan menemui berbagai persoalan rumah tangga yang sering kali berujung kepada perpisahan.',
	32: 'Diprediksi bermasalah, tetapi potensi perpisahan termasuk paling rendah di antara yang lain.',
	33: 'Berpotensi menghadirkan orang ketiga dalam rumah tangga yang mengarah kepada perceraian.'
};
export const RAMALAN_PERNIKAHAN_TEXT: { nama: string; deskripsi: string }[] = [
	{
		nama: 'Wasesa Segara',
		deskripsi:
			'Pasangan ini bersifat pemaaf, rendah hati, penuh wibawa, dan memiliki visi pernikahan yang luas.'
	}, // Sisa 1
	{
		nama: 'Tunggak Semi',
		deskripsi: 'Memiliki kemampuan mendulang rezeki, namun berisiko mengalami masalah kesehatan.'
	}, // Sisa 2
	{
		nama: 'Satriya Wibawa',
		deskripsi: 'Akan dianugerahi rezeki yang melimpah dan menciptakan kehidupan yang sejahtera.'
	}, // Sisa 3
	{
		nama: 'Sumur Sinaba',
		deskripsi: 'Menjadi teladan bagi banyak pasangan dan rumah tangganya penuh ilmu.'
	}, // Sisa 4
	{
		nama: 'Satria Wirang',
		deskripsi: 'Mungkin menghadapi cobaan dan kekurangan finansial dalam pernikahan.'
	}, // Sisa 5
	{
		nama: 'Bumi Kepetak',
		deskripsi: 'Orang yang tertutup tetapi gigih bekerja dan solid dalam menghadapi kesulitan.'
	}, // Sisa 6
	{
		nama: 'Lebu Ketiyup Angin',
		deskripsi: 'Cita-cita sulit terkabul dan ketidakpastian mengitari kehidupan mereka.'
	} // Sisa 7 (atau 0)
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
	Jodoh: ['Jumat Pahing', 'Minggu Pon', 'Selasa Kliwon'],
	Ratu: ['Kamis Wage', 'Sabtu Legi', 'Senin Pahing'],
	Pesthi: ['Rabu Pon', 'Jumat Kliwon', 'Minggu Wage'],
	default: ['Jumat Kliwon', 'Minggu Legi', 'Selasa Pahing']
};
// Teks hasil ramalan berdasarkan sisa pembagian atau kategori
export const ANAK_KE_COMPATIBILITY: Record<number, number[]> = {
  1: [2, 4, 5],
  2: [1, 3],
  3: [2, 4],
  4: [1, 3],
  5: [1, 2],
};

// Pesan hasil untuk perhitungan urutan anak
export const ANAK_KE_MESSAGES = {
  cocok: {
    nama: 'Cocok',
    deskripsi: 'Berdasarkan urutan lahir, pasangan ini memiliki kecocokan dan dapat saling melengkapi.'
  },
  tidakCocok: {
    nama: 'Kurang Cocok',
    deskripsi: 'Menurut perhitungan urutan lahir, pasangan ini tidak masuk dalam kategori yang dianjurkan dan mungkin perlu usaha ekstra untuk saling memahami.'
  },
  sulungVsSulung: {
    nama: 'Perlu Waspada',
    deskripsi: 'Sama-sama anak pertama. Perlu waspada karena ada potensi bentrok ego dan keinginan untuk mendominasi. Komunikasi dan saling mengalah menjadi kunci utama.'
  }
};
export const RESULTS_TEXT: {
	dibagi9: Record<string, string>;
	hariLahir: Record<string, string>;
	dibagi4: { nama: string; deskripsi: string }[];
	dibagi5: { nama: string; deskripsi: string }[];
	dibagi8: { nama: string; tipe: string }[];
	dibagi10: ({ nama: string; deskripsi: string } | null)[];
} = {
	dibagi9: {
		'3&5': 'Rumah tangganya akan mengalami perceraian dengan cepat.',
		'5&3': 'Rumah tangganya akan mengalami perceraian dengan cepat.',
		'5&9': 'Rumah tangganya akan banyak mendapat rejeki',
		'9&5': 'Rumah tangganya akan banyak mendapat rejeki',
		'3&7': 'Rumah tangganya akan mendapat celaka dan bahaya.',
		'7&3': 'Rumah tangganya akan mendapat celaka dan bahaya.',
		'2&3': 'Salah satu pasangan akan meninggal terlebih dahulu.',
		'3&2': 'Salah satu pasangan akan meninggal terlebih dahulu.',
		'2&6': 'Rumah tangganya akan cepat menjadi kaya.',
		'6&2': 'Rumah tangganya akan cepat menjadi kaya.',
		'7&2': 'Anaknya akan meninggal lebih dulu.',
		'2&7': 'Anaknya akan meninggal lebih dulu.',
		'3&6': 'Rumah tangganya akan mendapat banyak anugerah.',
		'6&3': 'Rumah tangganya akan mendapat banyak anugerah.',
		'1&4': ' Rumah tangganya tidak tentram dan mengalami banyak celaka.',
		'4&1': ' Rumah tangganya tidak tentram dan mengalami banyak celaka.',
		'3&4':'Rumah tangganya akan banyak mendapat celaka.',
		'4&3':'Rumah tangganya akan banyak mendapat celaka.',
		'6&9':'Rumah tangganya akan mengalami kesengsaraan hidup.',
		'9&6':'Rumah tangganya akan mengalami kesengsaraan hidup.',
		'5&6':'Rumah tangganya akan mudah dalam mencari rejeki.',
		'6&5':'Rumah tangganya akan mudah dalam mencari rejeki.',
		'4&6':'Rumah tangganya akan banyak rejeki mengalir.',
		'6&4':'Rumah tangganya akan banyak rejeki mengalir.',
		'6&8':'Rumah tangganya akan memiliki banyak musuh.',
		'8&6':'Rumah tangganya akan memiliki banyak musuh.',
		'1&2':'Rumah tangganya akan tentram dan baik-baik saja.',
		'2&1':'Rumah tangganya akan tentram dan baik-baik saja.',
		'1&1':'Rumah tangganya akan berjalan baik, bahagia dan saling mencintai.',
		'4&7':'Rumah tangganya akan hidup miskin dan melarat.',
		'8&8':'Rumah tangganya menyenangkan dan disukai orang lain.',
		'7&4':'Rumah tangganya akan hidup miskin dan melarat.',
		'4&8':'Rumah tangganya akan cenderung mengalami berbagai macam rintangan.',
		'8&4':'Rumah tangganya akan cenderung mengalami berbagai macam rintangan.',	


	},
	hariLahir: {
		'Selasa&Sabtu': 'Kehidupan rumah tangganya akan mengalami banyak pertengkaran.',
		'Sabtu&Selasa': 'Kehidupan rumah tangganya akan mengalami banyak pertengkaran.',
		'Minggu&Selasa': 'Kehidupan rumah tangganya miskin.',
		'Selasa&Minggu': 'Kehidupan rumah tangganya miskin.',
		'Senin&Sabtu': 'Kehidupan rumah tangganya selalu berkecukupan, tidak pernah kurang.',
		'Sabtu&Senin': 'Kehidupan rumah tangganya selalu berkecukupan, tidak pernah kurang.',
		'Rabu&Jumat': 'Rumah tangganya akan mendapatkan keselamatan, meskipun difitnah.',
		'Jumat&Sabtu': 'Rumah tangganya akan mendapatkan celaka.',
		'Sabtu&Jumat': 'Rumah tangganya akan mendapatkan celaka.',
		'Jumat&Selasa':'Rumah tangganya akan mengalami perceraian.',
		'Selasa&Jumat':'Rumah tangganya akan mengalami perceraian.',
		'Senin&Selasa': 'Rumah tangganya selamat, meskipun mendapat fitnah.',
		'Selasa&Senin': 'Rumah tangganya selamat, meskipun mendapat fitnah.',
		'Selasa&Selasa':'Rumah tangganya cenderung tidak cocok dan banyak mengalami pertengkaran.',
		'Selasa&Rabu':'Kehidupannya dapat menjadi kaya.',
		'Rabu&Selasa':'Kehidupannya akan menjadi kaya.',
		'Selasa&Kamis':'Kehidupan rumah tangganya banyak rejeki.',
		'Kamis&Selasa':'Kehidupan rumah tangganya banyak rejeki.',
		'Senin&Jumat': 'Rumah tangganya selamat, meskipun mendapat fitnah.',
		'Jumat&Senin':'Rumah tangganya selamat, meskipun mendapat fitnah.',
		'Minggu&Jumat': 'Rumah tangganya selamat, meskipun mendapat fitnah.',
		'Jumat&Minggu': 'Rumah tangganya selamat, meskipun mendapat fitnah.',
		'Jumat&Jumat' :'Rumah tangganya akan mengalami kemiskinan.',
		'Senin&Kamis': 'Kehidupan rumah tangganya baik dan disenangi banyak orang.',
		'Kamis&Senin': 'Kehidupan rumah tangganya baik dan disenangi banyak orang.',
		'Senin&Rabu': 'Akan mendapatkan anak perempuan.',
		'Rabu&Senin': 'Akan mendapatkan anak perempuan.',
		'Kamis&Sabtu':'Rumah tangganya akan mengalami perceraian.',
		'Sabtu&Kamis':'Rumah tangganya akan mengalami perceraian.',
		// 'Senin&Selasa':' Rumah tangganya selamat, meskipun mendapat fitnah.',



		// yang bawah ngarang copilot

		// 'Kamis&Minggu': 'kehidupan rumah tangganya akan banyak mendapat rejeki.',
		// Senin: 'Kehidupan rumah tangganya akan mengalami kesusahan dan penderitaan.',
		// 'Rabu&Sabtu': 'Kehidupan rumah tangganya akan bahagia dan sejahtera.',
		// 'Kamis&Jumat': 'Kehidupan rumah tangganya akan banyak mendapat rejeki.',
		// 'Kamis&Sabtu': 'Kehidupan rumah tangganya akan bahagia dan sejahtera.',
		// 'Jumat&Minggu': 'Kehidupan rumah tangganya akan banyak mendapat rejeki.',
		// 'Rabu&Minggu': 'Kehidupan rumah tangganya akan bahagia dan sejahtera.',
		// 'Senin&Jumat': 'Kehidupan rumah tangganya akan mengalami kesusahan dan penderitaan.',
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
		{ nama: 'Pegat', tipe: 'Pasangan yang dalam perhitungan termasuk kategori Pegat, maka dalam kehidupan rumah tangganya akan banyak menemui masalah, misalnya kesulitan ekonomi, komunikasi yang kurang baik, perselingkuhan, sehingga rawan terjadi perceraian.' }, // Sisa 1
		{ nama: 'Ratu', tipe: 'Pasangan yang dalam perhitungan termasuk kategori Ratu, maka dalam kehidupan rumah tangganya akan disegani banyak orang, tetangga, keluarga dan teman dekatnya, banyak orang yang iri dengan keharmonisannya.' }, // Sisa 2
		{ nama: 'Jodoh', tipe: 'Pasangan yang dalam perhitungan termasuk kategori Jodoh, maka kehidupan rumah tangganya akan harmonis, saling cocok satu dengan yang lain, saling bisa menerima kelebihan dan kekurangan masing-masing, rumah tangganya akan langgeng sampai tua.' }, // Sisa 3
		{ nama: 'Topo', tipe: ' Pasangan yang dalam perhitungan termasuk kategori Topo, maka pada awal kehidupan rumah tangganya akan banyak mengalami kesulitan, terutama dari segi ekonomi. Namun seiring berjalannya waktu, kehidupannya akan membaik, terutama setelah mempunyai anak.' }, // Sisa 4
		{ nama: 'Tinari', tipe: 'Pasangan yang dalam perhitungan termasuk kategori Tinari, maka kehidupan rumah tangganya akan banyak menemui kesenangan, beruntung, mudah mencari rejeki sehingga tidak sampai kekurangan.' }, // Sisa 5
		{ nama: 'Padu', tipe: 'Pasangan yang dalam perhitungan termasuk kategori Padu, maka kehidupan rumah tangganya akan sering terjadi konflik, pertengkaran ataupun beda pendapat, tetapi tidak sampai terjadi perceraian.' }, // Sisa 6
		{ nama: 'Sujanan', tipe: 'Pasangan yang dalam perhitungan termasuk kategori Sujanan, maka kehidupan rumah tangganya akan sering bertengkar, tidak harmonis, dan rawan sekali terjadi perselingkuhan.' }, // Sisa 7
		{ nama: 'Pesthi', tipe: 'Pasangan yang dalam perhitungan termasuk kategori Pesthi, maka kehidupan rumah tangganya akan damai, rukun, dan tentram. Tidak ada masalah apapun yang dapat merusak keharmonisannya.' } // Sisa 8 (atau 0)
	],
	dibagi10: [
		{nama:'Wasesa Segara',deskripsi:'Pasangan ini memiliki keluhuran budi pekerti, mudah memberikan maaf, memiliki wibawa dimata orang lain, dan berlapang dada dalam berbagai hal.'},
		{nama:'Tunggak Semi',deskripsi:'Pasangan yang masuk perhitungan ini akan memiliki rejeki yang melimpah dalam rumah tangganya.'}, // sisa 2
		{nama:'Satria Wibawa',deskripsi:'Dalam kehidupan rumah tangganya, pasangan ini memiliki kemuliaan dan keluhuran didalam keluarga maupun masyarakat.'},
		{nama:'Sumur Sinaba',deskripsi:'Pasangan suami-istri ini memiliki kepandaian yang luar biasa sehingga sering menjadi tempat bertanya bagi orang lain.'},
		{nama:'Satria Wirang', deskripsi:'Pasangan suami-istri ini dalam kehidupannya seringkali menanggung malu dan susah.'},
		{nama: 'Bumi Kapetak', deskripsi: 'Pasangan suami-istri ini dalam kehidupan rumah tangganya akan tahan pada kondisi sengsara dan kalut hati. Sisi baik pasangan ini adalah rajin bekerja dan selalu menjaga kebersihan.' }, // sisa 6
		{nama:'Lebu Katiup Angin',deskripsi:'Pasangan suami-istri yang masuk dalam kategori ini akan mengalami kehidupan yang sengsara, keinginan seringkali tidak terkabul, dan memiliki kecenderungan sering berpindah rumah.'},
		null,
		null,
		null // Sisa 7-10
	]
};
