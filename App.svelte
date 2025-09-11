{/* <script>
  // Variabel untuk menyimpan tanggal input dari kedua orang
  let tanggalOrang1 = '';
  let tanggalOrang2 = '';

  // Variabel untuk menyimpan hasil perhitungan
  let wetonOrang1 = null;
  let wetonOrang2 = null;
  let hasilCocok = null;

  // Objek untuk menyimpan nilai Neptu hari dan pasaran
  const neptu = {
    hari: {
      'Minggu': 5, 'Senin': 4, 'Selasa': 3, 'Rabu': 7, 
      'Kamis': 8, 'Jumat': 6, 'Sabtu': 9
    },
    pasaran: {
      'Legi': 5, 'Pahing': 9, 'Pon': 7, 'Wage': 4, 'Kliwon': 8
    }
  };

  // Daftar nama hari dan pasaran
  const daftarHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const daftarPasaran = ['Legi', 'Pahing', 'Pon', 'Wage', 'Kliwon'];

  // Fungsi utama untuk mendapatkan detail weton dari sebuah tanggal
  function getWetonDetail(tanggalString) {
    if (!tanggalString) return null;

    const tanggal = new Date(tanggalString);

    // 1. Dapatkan Hari dan Neptu Hari
    const namaHari = daftarHari[tanggal.getDay()];
    const neptuHari = neptu.hari[namaHari];

    // 2. Dapatkan Pasaran dan Neptu Pasaran (menggunakan algoritma sebelumnya)
    const tanggalAcuan = new Date('1970-01-01');
    const selisihMilidetik = tanggal.getTime() - tanggalAcuan.getTime();
    const selisihHari = Math.floor(selisihMilidetik / (1000 * 60 * 60 * 24));
    const namaPasaran = daftarPasaran[selisihHari % 5];
    const neptuPasaran = neptu.pasaran[namaPasaran];
    
    // 3. Hitung total Neptu
    const totalNeptu = neptuHari + neptuPasaran;

    return {
      weton: `${namaHari} ${namaPasaran}`,
      totalNeptu: totalNeptu
    };
  }

  // Fungsi untuk menentukan hasil kecocokan berdasarkan sisa pembagian
  function getHasilKecocokan(sisa) {
    switch (sisa) {
      case 1: return { nama: 'PEGAT', deskripsi: 'Sering menghadapi masalah, bisa berupa ekonomi, kekuasaan, hingga perselingkuhan yang akhirnya menyebabkan perpisahan.', tipe: 'buruk' };
      case 2: return { nama: 'RATU', deskripsi: 'Pasangan ini memang sudah jodohnya. Sangat dihargai dan disegani oleh tetangga maupun lingkungan sekitar.', tipe: 'baik' };
      case 3: return { nama: 'JODOH', deskripsi: 'Pasangan ini benar-benar cocok dan bisa saling menerima segala kelebihan dan kekurangan masing-masing.', tipe: 'sangat-baik' };
      case 4: return { nama: 'TOPO', deskripsi: 'Pada awal hubungan akan sering mengalami kesulitan, namun akan bahagia pada akhirnya jika sabar dan bertahan.', tipe: 'waspada' };
      case 5: return { nama: 'TINARI', deskripsi: 'Pasangan ini akan menemukan kebahagiaan, mudah dalam mencari rezeki, dan tidak akan hidup kekurangan.', tipe: 'baik' };
      case 6: return { nama: 'PADU', deskripsi: 'Dalam rumah tangga, pasangan ini akan sering mengalami pertengkaran, namun tidak akan sampai bercerai.', tipe: 'buruk' };
      case 7: return { nama: 'SUJANAN', deskripsi: 'Pasangan ini akan sering mengalami pertengkaran dan masalah perselingkuhan, bisa dari pihak laki-laki maupun perempuan.', tipe: 'sangat-buruk' };
      case 0: // Sisa 8 sama dengan sisa 0
      case 8: return { nama: 'PESTHI', deskripsi: 'Dalam rumah tangga akan rukun, tentram, damai, dan harmonis hingga tua. Jarang ditemui masalah.', tipe: 'baik' };
      default: return null;
    }
  }

  // Blok reaktif Svelte: kode di dalamnya akan otomatis berjalan
  // setiap kali nilai `tanggalOrang1` atau `tanggalOrang2` berubah.
  $: {
    wetonOrang1 = getWetonDetail(tanggalOrang1);
    wetonOrang2 = getWetonDetail(tanggalOrang2);

    if (wetonOrang1 && wetonOrang2) {
      const totalNeptu = wetonOrang1.totalNeptu + wetonOrang2.totalNeptu;
      const sisa = totalNeptu % 8;
      hasilCocok = getHasilKecocokan(sisa);
      hasilCocok.totalNeptu = totalNeptu;
    } else {
      hasilCocok = null;
    }
  }
</script>

<main>
  <div class="card">
    <h1>Cek Kecocokan Weton Jodoh</h1>
    <p class="subtitle">Masukkan tanggal lahir Anda dan pasangan untuk melihat ramalan berdasarkan Primbon Jawa.</p>
    
    <div class="inputs">
      <div class="person-input">
        <label for="orang1">Tanggal Lahir Anda</label>
        <input type="date" id="orang1" bind:value={tanggalOrang1}>
        {#if wetonOrang1}
          <div class="weton-result">
            <strong>{wetonOrang1.weton}</strong> (Neptu: {wetonOrang1.totalNeptu})
          </div>
        {/if}
      </div>
      
      <div class="person-input">
        <label for="orang2">Tanggal Lahir Pasangan</label>
        <input type="date" id="orang2" bind:value={tanggalOrang2}>
         {#if wetonOrang2}
          <div class="weton-result">
            <strong>{wetonOrang2.weton}</strong> (Neptu: {wetonOrang2.totalNeptu})
          </div>
        {/if}
      </div>
    </div>

    {#if hasilCocok}
      <div class="final-result card {hasilCocok.tipe}">
        <h2>Hasil Perhitungan: {hasilCocok.nama}</h2>
        <p>Total Neptu gabungan Anda dan pasangan adalah <strong>{hasilCocok.totalNeptu}</strong>.</p>
        <p>{hasilCocok.deskripsi}</p>
      </div>
    {/if}

  </div>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --bg-color: #f0f4f8;
    --card-bg: #ffffff;
    --text-color: #333;
    --primary-color: #4a90e2;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  main {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    background-color: var(--bg-color);
    padding: 2rem;
    box-sizing: border-box;
  }

  .card {
    background: var(--card-bg);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: var(--shadow);
    width: 100%;
    max-width: 600px;
    text-align: center;
  }
  
  h1 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  .subtitle {
    margin-top: 0;
    margin-bottom: 2rem;
    color: #666;
  }

  .inputs {
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  .person-input {
    flex: 1;
    min-width: 200px;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #555;
  }

  input[type="date"] {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    box-sizing: border-box;
  }
  
  .weton-result {
      margin-top: 0.75rem;
      padding: 0.5rem;
      background-color: #e9ecef;
      border-radius: 6px;
      font-size: 0.9rem;
  }

  .final-result {
    margin-top: 2rem;
    padding: 1.5rem;
    text-align: left;
    border-left-width: 6px;
    border-left-style: solid;
  }

  .final-result.baik { border-color: #28a745; background-color: #e9f5ec; }
  .final-result.sangat-baik { border-color: #17a2b8; background-color: #e8f6f8; }
  .final-result.waspada { border-color: #ffc107; background-color: #fff8e1; }
  .final-result.buruk { border-color: #dc3545; background-color: #fbebed; }
  .final-result.sangat-buruk { border-color: #8B0000; background-color: #f5e3e3; }
  
  .final-result h2 {
      margin-top: 0;
  }

</style>x */}