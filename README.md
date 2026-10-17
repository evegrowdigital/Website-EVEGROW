# Landing page (HTML + gambar + hotspot klik)

## Struktur
```
index.html
vercel.json
images/   <- taruh gambarmu di sini
  hero.png, bukti-1..4.png, kenapa.png, cta.png, private-course.png, pilih.png
```

## Cara pasang hotspot (overlay klik)
Setiap `<a class="hotspot" style="--top:25%;--left:26%;--w:35%;--h:15%">`:
- `--top` / `--left` = posisi TITIK TENGAH tombol di gambar (%)
- `--w` / `--h` = ukuran area klik (%)
Buka `index.html?debug` untuk melihat kotak merah area klik.

## Deploy
1. Buat repo GitHub baru, upload semua file (termasuk folder images).
2. vercel.com > Add New > Project > import repo > Deploy. (Framework: Other, tanpa build command)

## Halaman dalam
- `media-belajar-anak.html`, `belajar-ngonten.html`, `produk-digital-lainnya.html`
- Isi tiap halaman diatur di blok `window.PAGE = {...}` di dalam file HTML-nya.
- Tambah produk = salin satu baris `{ name, desc, price, image, link }`.
- Gaya bersama ada di `style.css`, renderer di `page.js`.

## Versi profesional (menu, sosial media, footer)
- Menu atas, footer, tombol WhatsApp & kartu sosial media diatur di **`site.js`** (bagian `SITE`).
  Ganti nomor WhatsApp, username/link Instagram, TikTok, Threads, Facebook, dan link kebijakan di sana.
- Foto: taruh `images/mia.jpg` (hero) dan `images/mia-2.jpg` (bagian Tentang).
  
