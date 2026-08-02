// Pemeriksaan jawaban kuis pada halaman kuis

var formKuis = document.getElementById("formKuis");
var kotakHasil = document.getElementById("kotakHasil");
var nilaiSkor = document.getElementById("nilaiSkor");
var keteranganHasil = document.getElementById("keteranganHasil");
var rincianJawaban = document.getElementById("rincianJawaban");
var pesanPeringatan = document.getElementById("pesanPeringatan");
var tombolUlang = document.getElementById("tombolUlang");

// Kunci jawaban untuk soal pilihan tunggal
var kunci = {
  soal1: "h1",
  soal2: "href",
  soal3: "ol",
  soal5: "."
};

// Jawaban benar untuk soal pilihan ganda nomor 4
var kunciSemantik = ["header", "article", "footer"];

formKuis.addEventListener("submit", function (event) {
  event.preventDefault(); // supaya halaman tidak dimuat ulang

  var nama = document.getElementById("namaPeserta").value.trim();

  if (nama === "") {
    tampilkanPeringatan("Isi dulu nama kamu sebelum memeriksa jawaban.");
    return;
  }

  var jawaban1 = ambilPilihan("soal1");
  var jawaban2 = ambilPilihan("soal2");
  var jawaban3 = document.getElementById("soal3").value;
  var jawaban4 = ambilCentang("soal4");
  var jawaban5 = document.getElementById("soal5").value.trim().toLowerCase();

  if (jawaban1 === "" || jawaban2 === "" || jawaban3 === "" || jawaban4.length === 0 || jawaban5 === "") {
    tampilkanPeringatan("Masih ada soal yang belum dijawab. Periksa lagi ya.");
    return;
  }

  pesanPeringatan.style.display = "none";

  var benar = 0;
  var rincian = [];

  // Soal 1 sampai 3 dan soal 5 diperiksa dengan cara yang sama
  if (jawaban1 === kunci.soal1) {
    benar++;
    rincian.push("Soal 1 benar.");
  } else {
    rincian.push("Soal 1 kurang tepat, jawabannya <h1>.");
  }

  if (jawaban2 === kunci.soal2) {
    benar++;
    rincian.push("Soal 2 benar.");
  } else {
    rincian.push("Soal 2 kurang tepat, jawabannya href.");
  }

  if (jawaban3 === kunci.soal3) {
    benar++;
    rincian.push("Soal 3 benar.");
  } else {
    rincian.push("Soal 3 kurang tepat, jawabannya <ol>.");
  }

  // Soal 4 dihitung benar bila semua pilihan yang dicentang tepat dan jumlahnya pas
  if (cocokSemua(jawaban4, kunciSemantik)) {
    benar++;
    rincian.push("Soal 4 benar.");
  } else {
    rincian.push("Soal 4 kurang tepat, yang termasuk tag semantik adalah header, article, dan footer.");
  }

  // Jawaban soal 5 diterima berupa tanda titik atau kata titik
  if (jawaban5 === kunci.soal5 || jawaban5 === "titik") {
    benar++;
    rincian.push("Soal 5 benar.");
  } else {
    rincian.push("Soal 5 kurang tepat, selector class diawali tanda titik.");
  }

  tampilkanHasil(nama, benar, rincian);
});

// Mengambil nilai dari kelompok radio, kosong bila belum ada yang dipilih
function ambilPilihan(namaSoal) {
  var pilihan = document.querySelector("input[name='" + namaSoal + "']:checked");

  if (pilihan === null) {
    return "";
  }
  return pilihan.value;
}

// Mengambil semua nilai checkbox yang dicentang
function ambilCentang(namaSoal) {
  var dicentang = document.querySelectorAll("input[name='" + namaSoal + "']:checked");
  var hasil = [];

  dicentang.forEach(function (kotak) {
    hasil.push(kotak.value);
  });

  return hasil;
}

// Membandingkan dua daftar jawaban tanpa memedulikan urutannya
function cocokSemua(jawaban, kunciJawaban) {
  if (jawaban.length !== kunciJawaban.length) {
    return false;
  }

  for (var i = 0; i < kunciJawaban.length; i++) {
    if (jawaban.indexOf(kunciJawaban[i]) === -1) {
      return false;
    }
  }
  return true;
}

function tampilkanHasil(nama, benar, rincian) {
  var skor = benar * 20;

  nilaiSkor.textContent = skor;

  var keterangan = "";
  if (skor === 100) {
    keterangan = nama + ", semua jawaban kamu benar. Materi dasarnya sudah dikuasai.";
  } else if (skor >= 60) {
    keterangan = nama + ", kamu menjawab benar " + benar + " dari 5 soal. Sedikit lagi lengkap.";
  } else {
    keterangan = nama + ", kamu menjawab benar " + benar + " dari 5 soal. Coba baca ulang materinya lalu ulangi kuis.";
  }
  keteranganHasil.textContent = keterangan;

  rincianJawaban.innerHTML = "";
  rincian.forEach(function (baris) {
    var li = document.createElement("li");
    li.textContent = baris;
    rincianJawaban.appendChild(li);
  });

  kotakHasil.style.display = "block";
  kotakHasil.scrollIntoView({ behavior: "smooth" });
}

function tampilkanPeringatan(pesan) {
  pesanPeringatan.textContent = pesan;
  pesanPeringatan.style.display = "block";
  kotakHasil.style.display = "none";
}

// Sembunyikan kembali hasil dan peringatan saat tombol ulangi ditekan
tombolUlang.addEventListener("click", function () {
  kotakHasil.style.display = "none";
  pesanPeringatan.style.display = "none";
});
