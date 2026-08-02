// Pemeriksaan isian form saran pada halaman tentang

var formSaran = document.getElementById("formSaran");
var pesanKirim = document.getElementById("pesanKirim");

formSaran.addEventListener("submit", function (event) {
  event.preventDefault(); // website ini tanpa basis data, jadi data tidak dikirim ke server

  var nama = document.getElementById("nama").value.trim();
  var email = document.getElementById("email").value.trim();
  var topik = document.getElementById("topik").value;
  var saran = document.getElementById("saran").value.trim();

  if (nama === "" || email === "" || topik === "" || saran === "") {
    tampilkanPesan("Semua isian wajib diisi sebelum saran dikirim.", false);
    return;
  }

  // Pemeriksaan sederhana untuk memastikan email berisi tanda @ dan titik
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    tampilkanPesan("Format email belum benar, contoh yang benar nama@email.com.", false);
    return;
  }

  if (saran.length < 10) {
    tampilkanPesan("Saran terlalu pendek, tulis minimal 10 karakter.", false);
    return;
  }

  tampilkanPesan("Terima kasih " + nama + ", saran kamu sudah kami terima.", true);
  formSaran.reset();
});

function tampilkanPesan(teks, berhasil) {
  pesanKirim.textContent = teks;
  pesanKirim.style.display = "block";

  if (berhasil) {
    pesanKirim.classList.remove("pesan-error");
  } else {
    pesanKirim.classList.add("pesan-error");
  }

  pesanKirim.scrollIntoView({ behavior: "smooth", block: "center" });
}
