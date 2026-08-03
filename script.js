// --- 1. KONFIGURASI BATAS MAKSIMAL ---
const BATAS_MAKSIMAL_KARAKTER = 280; // Standar kuota panjang teks platform Twitter/X harian

// --- 2. SELEKSI ELEMEN DOM ---
const elTextarea = document.getElementById("textarea-konten");
const elTxtTotalKarakter = document.getElementById("txt-total-karakter");
const elTxtSisaKarakter = document.getElementById("txt-sisa-karakter");
const elTxtJumlahKata = document.getElementById("txt-jumlah-kata");
const btnBersihkan = document.getElementById("btn-bersihkan");

// --- 3. FUNGSI LOGIKA UTAMA ---

function analisisKetikanTeks() {
    const stringTeks = elTextarea.value;

    // A. Hitung Total Karakter (termasuk spasi dan baris baru)
    const totalKarakter = stringTeks.length;
    elTxtTotalKarakter.innerText = totalKarakter;

    // B. Hitung Sisa Kuota Karakter Tersedia
    const sisaKarakter = BATAS_MAKSIMAL_KARAKTER - totalKarakter;
    elTxtSisaKarakter.innerText = sisaKarakter;

    // C. Hitung Jumlah Kata Terpilih
    // Logika pembagi: Memecah string berdasarkan spasi/baris baru menggunakan ekspresi regex /\s+/
    // .filter(Boolean) berfungsi membuang elemen kosong agar spasi beruntung tidak dihitung kata
    const kumpulanKata = stringTeks.trim().split(/\s+/).filter(Boolean);
    elTxtJumlahKata.innerText = kumpulanKata.length;

    // --- STRUKTUR KONDISIONAL ALARM VISUAL INDIKATOR ---
    if (sisaKarakter < 0) {
        // Jika ketikan melewati batas kuota
        elTxtSisaKarakter.className = "status-lewat"; // Ubah warna angka sisa menjadi pink/merah
        elTextarea.classList.add("over-limit");      // Tambah border merah & efek getar pada textarea
    } else {
        // Jika ketikan masih aman di bawah kuota
        elTxtSisaKarakter.className = "status-aman";  // Ubah warna angka sisa menjadi hijau aman
        elTextarea.classList.remove("over-limit");
    }
}

// Fungsi Mengosongkan Textarea
function bersihkanPapanKetik() {
    elTextarea.value = "";
    analisisKetikanTeks(); // Reset ulang seluruh angka visual menjadi 0
    elTextarea.focus();    // Kembalikan fokus kursor otomatis ke dalam textarea
}

// --- 4. BINDING EVENT LISTENERS ---
// Menggunakan event 'input' agar penghitungan langsung berjalan reaktif setiap kali user mengetik/menempel teks
elTextarea.addEventListener("input", analisisKetikanTeks);
btnBersihkan.addEventListener("click", bersihkanPapanKetik);

// Inisialisasi awal untuk memastikan status teks bawaan sinkron (0) saat halaman dibuka
analisisKetikanTeks();
