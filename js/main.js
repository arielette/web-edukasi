// Script yang dipakai di semua halaman

// Buka tutup menu navigasi saat dibuka di layar kecil
var tombolMenu = document.getElementById("tombolMenu");
var menuUtama = document.getElementById("menuUtama");

if (tombolMenu) {
  tombolMenu.addEventListener("click", function () {
    menuUtama.classList.toggle("tampil");
  });
}

// Isi tahun pada bagian hak cipta supaya tidak perlu diubah manual tiap tahun
var tahun = document.getElementById("tahun");

if (tahun) {
  tahun.textContent = new Date().getFullYear();
}
