document.addEventListener('DOMContentLoaded', () => {
// Fungsionalitas Tombol Menu
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
mainNav.classList.toggle('active');
if (mainNav.classList.contains('active')) {
menuToggle.textContent = 'Tutup';
} else {
menuToggle.textContent = 'Menu';
}
});

// Sembunyikan menu saat link diklik (khusus mobile)
mainNav.querySelectorAll('a').forEach(link => {
link.addEventListener('click', () => {
if (window.innerWidth <= 768) { // Cek jika di perangkat mobile
mainNav.classList.remove('active');
menuToggle.textContent = 'Menu';
}
});
});

// Fungsionalitas Tombol Mulai Musik
const playMusicButton = document.getElementById('playMusic');
const backgroundMusic = document.getElementById('backgroundMusic');

playMusicButton.addEventListener('click', () => {
if (backgroundMusic.paused) {
backgroundMusic.play()
.then(() => {
playMusicButton.textContent = 'Pause Musik';
console.log('Musik dimulai');
})
.catch(error => {
console.error('Gagal memutar musik:', error);
alert('Gagal memutar musik. Pastikan Anda berinteraksi dengan halaman terlebih dahulu.');
});
} else {
backgroundMusic.pause();
playMusicButton.textContent = 'Mulai Musik';
console.log('Musik dijeda');
}
});

// Opsional: Otomatis matikan musik jika tab tidak aktif (untuk menghemat resource)
document.addEventListener('visibilitychange', () => {
if (document.hidden && !backgroundMusic.paused) {
backgroundMusic.pause();
playMusicButton.textContent = 'Mulai Musik';
console.log('Musik dijeda karena tab tidak aktif');
}
});
});