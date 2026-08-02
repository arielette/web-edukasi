// Penyaring gambar berdasarkan kategori pada halaman galeri

var tombolFilter = document.querySelectorAll("#filterGaleri button");
var itemGaleri = document.querySelectorAll(".item-galeri");

tombolFilter.forEach(function (tombol) {
  tombol.addEventListener("click", function () {

    // Pindahkan penanda tombol aktif ke tombol yang baru diklik
    tombolFilter.forEach(function (t) {
      t.classList.remove("aktif");
    });
    tombol.classList.add("aktif");

    var pilihan = tombol.getAttribute("data-filter");

    itemGaleri.forEach(function (item) {
      var kategori = item.getAttribute("data-kategori");

      if (pilihan === "semua" || kategori === pilihan) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

  });
});
