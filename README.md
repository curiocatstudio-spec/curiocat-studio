# CurioCat Studio — Website

Website resmi CurioCat Studio, dibangun dengan [Astro](https://astro.build) + Tailwind CSS.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:4321`.

## Build untuk production

```bash
npm run build
npm run preview   # untuk cek hasil build sebelum deploy
```

Hasil build statis ada di folder `dist/` — tinggal upload ke Vercel, Netlify, Cloudflare Pages, atau hosting statis apa pun.

## Struktur proyek

```
src/
  components/       Navbar, Footer, GameCard, logo animasi (SVG draw-in)
  layouts/Layout.astro   Layout utama (head, navbar, footer)
  content/
    games/*.md      Data tiap game (judul, genre, trailer, gallery, dll)
    blog/*.md        Post dev blog
  pages/
    index.astro       Beranda (hero + animasi logo + featured games)
    games/index.astro Daftar semua game
    games/[...slug].astro   Detail game (trailer + gallery)
    about.astro        Tentang studio
    contact.astro       Form kontak (placeholder, perlu dihubungkan ke backend)
    blog/index.astro    Daftar dev blog
    blog/[...slug].astro   Detail post
  styles/global.css  Font, animasi, efek glassmorphism, scroll reveal
public/images/       Logo, cover game, screenshot (placeholder — ganti dengan aset asli)
```

## Yang perlu diganti sebelum go-live

1. **Logo** — `public/images/logo.png` sudah pakai logo asli kamu. Kalau mau versi SVG line-art yang dianimasikan di hero (`CatLogoAnimated.astro`), path-nya adalah pendekatan manual dari logo — sesuaikan lagi kalau mau lebih presisi.
2. **Screenshot & cover game** — semua gambar di `public/images/games/` saat ini masih placeholder abu-abu bertuliskan nama file. Ganti dengan render/screenshot asli.
3. **Trailer** — isi field `trailerUrl` di `src/content/games/*.md` dengan link video (mp4 self-hosted, atau ganti komponen `<video>` di `games/[...slug].astro` dengan embed YouTube/Vimeo kalau kamu upload ke sana).
4. **Form kontak** — `contact.astro` saat ini cuma menampilkan pesan sukses palsu di sisi client. Hubungkan ke layanan seperti Formspree, Resend, atau serverless function biar pesannya benar-benar terkirim.
5. **Link sosial media** — ganti `href="#"` di Footer dan halaman Contact dengan link Instagram/X/itch.io asli.
6. **Dev blog** — 3 post yang ada sekarang cuma contoh, ganti isinya dengan devlog asli kalian.
7. **Alamat email & lokasi** — cek lagi `hello@curiocatstudio.com` dan detail Surabaya di Footer/Contact/About, sesuaikan kalau perlu.

## Fitur yang sudah ada

- ✅ Logo dengan animasi *draw-in* (SVG stroke animation) saat halaman dibuka
- ✅ Navbar transparan → jadi glass saat discroll
- ✅ Efek glassmorphism (navbar, card, form kontak)
- ✅ Animasi buka halaman (logo → judul kata-per-kata → tombol CTA)
- ✅ Scroll reveal (fade/slide/scale) pakai IntersectionObserver, hormat `prefers-reduced-motion`
- ✅ Halaman Games (list + detail per game, trailer + gallery)
- ✅ Halaman About
- ✅ Halaman Contact
- ✅ Dev Blog (list + detail, pakai Astro Content Collections — tinggal tambah file `.md` baru)
