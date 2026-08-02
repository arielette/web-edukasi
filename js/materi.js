// Pencarian tag pada halaman materi

var inputCari = document.getElementById("inputCari");
var daftarKartu = document.querySelectorAll(".kartu-tag");
var pesanKosong = document.getElementById("pesanKosong");

inputCari.addEventListener("input", function () {
  var kataKunci = inputCari.value.toLowerCase().trim();
  var jumlahTampil = 0;

  for (var i = 0; i < daftarKartu.length; i++) {
    var kartu = daftarKartu[i];

    // Kata kunci dicocokkan dengan data-nama dan isi judul kartu
    var kataKartu = kartu.getAttribute("data-nama") + " " + kartu.querySelector("h3").textContent;

    if (kataKartu.toLowerCase().indexOf(kataKunci) !== -1) {
      kartu.style.display = "block";
      jumlahTampil++;
    } else {
      kartu.style.display = "none";
    }
  }

  // Tampilkan pemberitahuan kalau tidak ada satu pun kartu yang cocok
  if (jumlahTampil === 0) {
    pesanKosong.style.display = "block";
  } else {
    pesanKosong.style.display = "none";
  }
});
