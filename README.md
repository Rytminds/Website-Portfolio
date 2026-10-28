# Template Portofolio

Template portofolio statis (HTML/CSS/JS murni, tanpa framework/build tool) — tinggal diisi kontennya dan langsung siap deploy.

## Struktur Folder

```
portfolio-template/
├── index.html        → semua konten & struktur halaman
├── css/style.css      → desain, warna, tipografi, responsif
├── js/script.js        → toggle tema, menu mobile, scroll reveal
└── assets/images/      → taruh foto & gambar proyek Anda di sini
```

## Cara Mengisi Konten

1. Buka `index.html`, ganti semua teks placeholder ("Nama Anda", deskripsi, dll).
2. Ganti `<div class="photo-placeholder">` dengan `<img src="assets/images/foto-anda.jpg" alt="Nama Anda">` setelah foto diletakkan di `assets/images/`.
3. Di bagian **Proyek**, ganti `<div class="project-thumb">` dengan `<img>` untuk setiap proyek, lalu sesuaikan judul, deskripsi, tag teknologi, dan tautan.
4. Sesuaikan tautan sosial media dan kontak (email, telepon, lokasi).
5. Warna aksen dan tipografi bisa diubah lewat variabel `:root` paling atas di `css/style.css`.

## Cara Deploy (gratis)

**Netlify / Vercel** — paling mudah:
1. Buat akun di [netlify.com](https://netlify.com) atau [vercel.com](https://vercel.com).
2. Drag-and-drop folder ini ke dashboard, atau hubungkan ke repo GitHub Anda.
3. Situs otomatis online dengan URL gratis.

**GitHub Pages**:
1. Push folder ini ke repository GitHub.
2. Buka **Settings → Pages**, pilih branch `main` dan folder root.
3. Situs akan tersedia di `https://username.github.io/nama-repo`.

## Catatan

- Form kontak di bagian Kontak belum terhubung ke mana pun. Sambungkan ke layanan seperti [Formspree](https://formspree.io) atau [EmailJS](https://www.emailjs.com) agar pesan benar-benar terkirim.
- Mode gelap/terang sudah otomatis mengikuti preferensi sistem, dan bisa diganti manual lewat tombol di navbar.
