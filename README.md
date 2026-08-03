# ✍️ Social Media Character Counter (Real-time String Metrics)

Aplikasi utilitas detektor panjang teks sosial media (*Social Media Character Counter*) menggunakan **Vanilla JavaScript**. Fokus utama dari modul edukasi bagi pemula ini adalah mempelajari penangkapan metrik string lewat manipulasi event pendengar input secara dinamis, serta melakukan transformasi tata visual antarmuka (*State-Driven Styling*) berdasarkan batasan kuantitas angka tertentu.

Sangat direkomendasikan bagi siswa SMK Jurusan RPL/PPLG tingkat dasar untuk melatih kemampuan olah manipulasi teks string asli bawaan.

---

## 🚀 Fitur Utama

* **Instant Dynamic Text Metric:** Menghimpun panjang properti `.length` string teks asli dari textarea secara real-time tepat ketika tombol papan ketik komputer dihentak.
* **Regex Word Splitter Filter:** Memanfaatkan kecerdasan ekspresi reguler `/\s+/` dipadukan pemilah larik array `.filter(Boolean)` guna menghitung jumlah total kata secara presisi tanpa terganggu distorsi ketukan spasi ganda.
* **Conditional Class Alarm System:** Melakukan intervensi nama kelas CSS (`.classList.add()`) saat angka sisa perhitungan bernilai negatif guna menyalakan efek getar alert merah pada kerangka boks.
* **Focus Retention Hook:** Menyematkan fungsi instruksi native `.focus()` pasca eksekusi pembersihan teks, menghemat kenyamanan interaksi user tanpa perlu melakukan klik arah manual ulang.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Struktur boks textarea masukan teks, papan kartu akumulator kuota, dan tombol klip reset
├── style.css        # Desain layout kartu angka berjajar, efek animasi getar alert, dan tata kelola warna pop art
└── script.js        # Engine penangkap sensor input teks, rumus regex pemisah kata, dan pengatur logika alarm
