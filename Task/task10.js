/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
function showDownload(result) {
    console.log(`Download selesai`);
    console.log(`Hasil Download: ${result}`);
  }
  
  /**
   * Fungsi untuk download file
   * @param {function} callback - Function callback show
   */
  function download(callShowDownload) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = `windows-10.exe`;
        resolve(result);
      }, 3000);
    }).then(callShowDownload);
  }
  
  download(showDownload);
  
  // Alternatif menggunakan async/await
  async function processDownload() {
    const result = await download(showDownload);
  }
  
  processDownload(); 
  
  // Perubahan utama:
  
  // Menggunakan Template Literals (`)
  // Mengubah callback menjadi Promise
  // Menambahkan fungsi processDownload dengan async/await
  // Mempertahankan sintaks function tradisional