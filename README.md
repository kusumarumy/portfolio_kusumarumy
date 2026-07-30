# Portofolio — Wahyu Cahyaningrum Kusumawati

Website portofolio pribadi satu-halaman: **Data Analyst · GIS & WebGIS Specialist · Data Governance**.
Desain terang & minimalis, dwibahasa (ID/EN), dengan selektor peran yang memfilter portofolio
sekaligus mengganti warna aksen situs (teal untuk GIS, amber untuk Data).

Dibangun murni **HTML + CSS + JavaScript** — tanpa framework, tanpa proses build, tanpa dependency
eksternal. Cocok untuk hosting statis (Vercel) dan aman untuk Content-Security-Policy ketat.

## Struktur

```
index.html                 Halaman (satu-halaman, semantik)
assets/css/styles.css      Gaya visual
assets/js/data.js          >>> KONTEN — SATU-SATUNYA FILE UTAMA UNTUK DIEDIT <<<
assets/js/app.js           Logika interaktif (jarang perlu disentuh)
vercel.json                Security headers (CSP, HSTS, dll.)
robots.txt / .gitignore
assets/cv/                 Taruh 2 file CV (PDF) di sini
assets/img/screenshots/    Tangkapan layar WebGIS/aplikasi
assets/img/maps/           Gambar peta
assets/img/docs/           Cuplikan dokumen (SOP, metadata, laporan)
assets/img/people/         Foto profil & foto pemberi testimoni (opsional)
```

## Cara deploy ke Vercel

1. Unggah folder ini ke sebuah repository GitHub (atau pakai Vercel CLI).
2. Di Vercel: **Add New → Project → Import** repo tersebut.
3. Framework Preset: **Other**. Build Command: **(kosongkan)**. Output Directory: **(kosongkan)**.
4. **Deploy**. Selesai — `vercel.json` otomatis menerapkan header keamanan.

Uji lokal (opsional): `python3 -m http.server 8080` lalu buka `http://localhost:8080`.

## Cara mengedit isi (semua di `assets/js/data.js`)

Semua teks berformat dwibahasa `{ id: "…", en: "…" }`.

- **Dashboard Tableau** → di proyek `kemenko-dashboards`, isi `url` tiap item `evidence`
  dengan tautan **Tableau Public** (mis. `https://public.tableau.com/views/NamaViz/Sheet`).
  Selama `url` kosong, tampil placeholder rapi.
- **Gambar** (screenshot/peta/dokumen) → taruh file di folder `assets/img/...`,
  lalu samakan namanya dengan `src` pada `evidence`/`mapGallery`. Belum ada file =
  placeholder otomatis (tidak error).
- **CV** → taruh `CV_Wahyu_Cahyaningrum_ID.pdf` & `..._EN.pdf` di `assets/cv/`
  (atau ubah nama file pada objek `cv`).
- **Foto profil** → taruh di `assets/img/people/wahyu.jpg` (atau ubah `profile.photo`).
  Bila tak ada, tampil ikon placeholder.
- **Testimoni** → ganti isi array `testimonials` dengan kutipan asli (nama, jabatan, foto opsional).
- **Tautan aksi proyek** → isi array `links` tiap proyek (`type`: `live`/`tableau`/`github`/`doc`/`link`).

Tag `discipline` (`data` / `gis` / `both`) di tiap proyek, skill, dan sertifikasi menentukan
apa yang tampil saat pengunjung memilih peran di hero — biarkan terisi.

## Keamanan & kerahasiaan

- Tidak ada data mentah di kode. Tampilkan hanya **agregat / tangkapan layar**.
- Sensor koordinat presisi, NIK, dan nomor dokumen sebelum mengunggah gambar; beri watermark bila perlu.
- Embed Tableau sebaiknya hanya data publik/agregat.
- CSP membatasi sumber ke domain sendiri + Tableau Public saja.
- Untuk bukti sensitif, gunakan tautan Google Drive berizin (jenis `link`) alih-alih menaruh file.
