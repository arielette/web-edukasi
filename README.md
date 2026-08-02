# KodeDasar

Website edukasi dasar HTML dan CSS. Dibuat sebagai proyek akhir mata kuliah
Pemrograman Web I, Program Studi Teknik Informatika, Universitas Siber Asia.

Website ini statis: tidak memakai basis data maupun bahasa sisi server.
Seluruh tampilan dibangun dengan HTML, CSS buatan sendiri, dan JavaScript.

## Struktur berkas

```
kodedasar/
├── index.html          Beranda
├── materi.html         Referensi tag HTML + pencarian
├── galeri.html         Video, audio, dan galeri gambar
├── kuis.html           Kuis 5 soal dengan penilaian otomatis
├── tentang.html        Profil kelompok + form saran
├── css/
│   └── style.css       Seluruh gaya tampilan
├── js/
│   ├── main.js         Menu layar kecil dan tahun di footer
│   ├── materi.js       Pencarian tag
│   ├── galeri.js       Penyaring gambar per kategori
│   ├── kuis.js         Pemeriksaan jawaban kuis
│   └── kontak.js       Pemeriksaan isian form saran
├── img/                Gambar dan ilustrasi
└── media/              Berkas video dan audio
```

## Cara menjalankan di komputer

Buka `index.html` lewat browser. Tidak perlu instalasi apa pun.

## Yang masih perlu diganti sebelum dikumpulkan

1. `tentang.html` — ganti "Nama Anggota 1" sampai "Nama Anggota 4" dengan nama
   dan NIM anggota kelompok yang sebenarnya.
2. `img/anggota-1.jpg` sampai `anggota-4.jpg` — ganti dengan foto masing-masing
   anggota, ukuran persegi supaya tidak gepeng.
3. `galeri.html` — cari tulisan `ID_VIDEO_KELOMPOK` lalu ganti dengan ID video
   vlog yang sudah diunggah ke YouTube.
   Contoh: alamat `https://www.youtube.com/watch?v=abc123XYZ`, maka ID-nya `abc123XYZ`.
4. `media/backsound.mp3` — bisa diganti rekaman suara penjelasan materi.
5. Tabel pembagian tugas di `tentang.html` — sesuaikan dengan pembagian nyata.

## Fitur JavaScript

| Berkas | Fitur | Cara kerja singkat |
|--------|-------|--------------------|
| main.js | Menu layar kecil | Menambah dan menghapus class `tampil` pada elemen nav |
| materi.js | Pencarian tag | Membandingkan kata kunci dengan atribut `data-nama` tiap kartu |
| galeri.js | Penyaring gambar | Mencocokkan `data-filter` tombol dengan `data-kategori` gambar |
| kuis.js | Penilaian kuis | Membandingkan jawaban dengan kunci lalu menghitung skor |
| kontak.js | Pemeriksaan form | Memastikan isian tidak kosong dan format email masuk akal |

## Pengujian yang sudah dilakukan

- Seluruh halaman dibuka di browser, tidak ada kesalahan pada console.
- Tampilan diperiksa pada lebar layar 1280px, 900px, dan 390px.
- Pencarian materi, penyaring galeri, kuis, dan form saran dicoba dengan isian
  benar maupun isian sengaja dikosongkan.
- Seluruh tautan antarhalaman dan tautan keluar diperiksa satu per satu.
