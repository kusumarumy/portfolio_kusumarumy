# Portofolio — Wahyu Cahyaningrum Kusumawati

Website portofolio interaktif dua bahasa (Indonesia/Inggris) yang menyesuaikan tampilan
sesuai kebutuhan pengunjung: **Gabungan**, **Data Analyst**, atau **GIS & WebGIS**.
Situs **statis murni** (HTML + CSS + JavaScript, tanpa backend) — cepat, aman, dan siap
di-hosting di Vercel tanpa proses build.

---

## 1. Struktur folder

```
portfolio-wahyu/
├── index.html              ← halaman utama (tidak perlu diedit)
├── vercel.json             ← header keamanan (CSP, HSTS, anti-clickjacking)
├── robots.txt
├── assets/
│   ├── css/styles.css      ← tampilan (tidak perlu diedit)
│   ├── js/data.js          ← ★ SATU-SATUNYA FILE ISI YANG PERLU KAMU EDIT
│   ├── js/app.js           ← logika interaktif (tidak perlu diedit)
│   ├── cv/                 ← taruh CV_Wahyu_..._ID.pdf & _EN.pdf di sini
│   └── img/
│       ├── screenshots/    ← tangkapan layar WebGIS
│       ├── maps/           ← gambar peta
│       └── docs/           ← cuplikan dokumen (SOP, metadata, dll.)
└── README.md
```

---

## 2. Menjalankan di komputer sendiri

Karena ini situs statis, cukup buka `index.html`. Namun agar CV & gambar termuat benar,
jalankan server lokal sederhana:

```bash
# opsi 1 (Python)
python3 -m http.server 5173
# lalu buka http://localhost:5173

# opsi 2 (Node)
npx serve .
```

---

## 3. Deploy ke Vercel

**Cara A — lewat GitHub (disarankan, ada auto-deploy):**
1. Buat repo di GitHub, push seluruh folder ini.
2. Buka [vercel.com](https://vercel.com) → **Add New → Project** → pilih repo.
3. Framework Preset: **Other**. Build Command & Output: **kosongkan**. Klik **Deploy**.
4. Setiap `git push` otomatis update situs.

**Cara B — lewat Vercel CLI:**
```bash
npm i -g vercel
cd portfolio-wahyu
vercel            # ikuti prompt, pilih "Other"
vercel --prod     # untuk produksi
```

`vercel.json` sudah mengatur `cleanUrls` dan seluruh header keamanan otomatis.

---

## 4. Mengganti / menambah isi (edit `assets/js/data.js`)

Semua teks ditulis dua bahasa: `{ id: "teks Indonesia", en: "English text" }`.
Setiap proyek punya tag **`discipline`** yang menentukan filternya:

| Nilai `discipline` | Muncul di filter |
|--------------------|------------------|
| `"gis"`            | GIS & WebGIS     |
| `"data"`           | Data Analytics   |
| `"both"`           | keduanya (mis. Data Governance) |

### Menambah bukti dukung (evidence)
Di dalam tiap proyek ada array `evidence`. Tambah/hapus item sesuai jenis:

```js
// Dashboard Tableau (embed langsung + tombol buka)
{ kind:"tableau", url:"https://public.tableau.com/views/NamaViz/Sheet1",
  label:{ id:"Judul dashboard", en:"Dashboard title" } }

// Tangkapan layar WebGIS
{ kind:"image", src:"assets/img/screenshots/sitijo-1.png",
  label:{ id:"Tampilan SITIJO", en:"SITIJO view" } }

// Peta
{ kind:"map", src:"assets/img/maps/idi-thematic.png",
  label:{ id:"Peta Tematik IDI", en:"IDI Thematic Map" } }

// Cuplikan dokumen (SOP, metadata, laporan)
{ kind:"doc", src:"assets/img/docs/sop-idi.png",
  label:{ id:"Cuplikan SOP", en:"SOP excerpt" } }

// Tautan eksternal (Google Drive, dll.)
{ kind:"link", url:"https://drive.google.com/...",
  label:{ id:"Laporan lengkap", en:"Full report" } }
```

> Jika file gambar belum ada, website tetap tampil rapi dengan placeholder "menyusul".
> Cukup taruh file dengan **nama persis** seperti di `data.js`, lalu commit.

---

## 5. Publikasi & embed dashboard Tableau

1. Buka Tableau Public Desktop → **Server → Tableau Public → Save to Tableau Public**.
2. Setelah tersimpan, buka dashboard di browser, klik **Share** → salin **Link**.
   Contoh: `https://public.tableau.com/views/NamaViz/Sheet1`
3. Tempel link itu ke field `url` pada evidence `kind:"tableau"`. Selesai — embed muncul otomatis.

> Hanya publikasikan dashboard yang **datanya boleh publik**. Lihat bagian Keamanan.

---

## 6. Menambahkan CV (ID & EN)

Simpan dua PDF di `assets/cv/` dengan nama **persis**:
- `CV_Wahyu_Cahyaningrum_ID.pdf`
- `CV_Wahyu_Cahyaningrum_EN.pdf`

Tombol unduh di bagian "Tentang" sudah otomatis mengarah ke sana.
(Ingin ganti nama file? Ubah di `data.js` bagian `cv:`.)

---

## 7. Keamanan & kerahasiaan (prioritas)

Situs ini sudah dirancang dengan permukaan serangan minimal:

- **Statis murni** — tidak ada server, database, atau form login yang bisa dieksploitasi.
  Tidak ada endpoint dinamis, tidak ada SQL, tidak ada input pengguna yang diproses server.
- **Header keamanan** (di `vercel.json`) aktif otomatis:
  - `Content-Security-Policy` ketat — hanya skrip milik sendiri yang boleh jalan;
    iframe hanya dari `public.tableau.com`.
  - `frame-ancestors 'none'` + `X-Frame-Options: DENY` — situs tidak bisa di-*iframe* orang lain (anti-clickjacking).
  - `Strict-Transport-Security` — memaksa HTTPS.
  - `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy` (matikan kamera/mikrofon/lokasi).
- HTTPS & DDoS mitigation **sudah bawaan Vercel**.

**Checklist kerahasiaan sebelum publish — WAJIB:**
- [ ] Jangan pernah commit data mentah rahasia (shapefile penuh, tabel atribut sensitif, dataset internal K/L). Repo GitHub bisa terbaca publik.
- [ ] WebGIS ditampilkan **hanya sebagai screenshot** (sesuai rencanamu) — jangan unggah database/GeoJSON aslinya.
- [ ] Pada screenshot & peta, **sensor** koordinat presisi, NIK, nama pemilik, nomor sertifikat, atau info instansi yang tidak boleh publik (blur/crop).
- [ ] Beri **watermark** ringan pada gambar bukti dukung (mis. nama + "portfolio") agar tak disalahgunakan.
- [ ] Tableau: publikasikan **hanya** dashboard dengan data agregat/publik. Data Tableau Public bisa diunduh siapa saja — pastikan tidak ada baris sensitif.
- [ ] Untuk bukti yang lebih sensitif, pakai **tautan Google Drive "hanya yang punya link"** (`kind:"link"`) alih-alih menaruh gambarnya di situs.

**Opsi proteksi tambahan (jika perlu):**
- **Vercel Password Protection** (fitur paket Pro) — kunci seluruh situs atau halaman preview dengan kata sandi. Cocok bila ingin berbagi ke perekrut tertentu saja.
- **Custom domain** — hubungkan domain sendiri lewat Vercel → Settings → Domains.

---

## 8. Bukti dukung yang disarankan untuk melengkapi (rekomendasi)

Agar portofolio terasa "advance & kompleks" tapi tetap aman, lengkapi ini secara bertahap:

**Data Analyst**
- Publikasikan 4–6 dashboard Tableau terkuat (IDI, BTS, IKP, Rekomendasi Kebijakan, dst.) — bukan semua 19, cukup yang paling representatif & datanya publik.
- 1–2 *insight report* singkat (cuplikan `kind:"doc"`) yang menunjukkan alur: masalah → analisis → rekomendasi.
- (Opsional) tautkan repo GitHub kecil berisi notebook Python data-cleaning sebagai bukti kemampuan teknis.

**GIS / WebGIS**
- 1–2 screenshot bersih per WebGIS (SITIJO, LINTAS, SIAKNA, WebGIS nasional). Rekam juga **GIF/video pendek** interaksi peta — jauh lebih meyakinkan daripada screenshot statis (bisa ditaruh sebagai `kind:"link"` ke YouTube unlisted).
- 4–6 peta tematik terbaik untuk galeri kartografi (sudah disiapkan slotnya).

**Data Governance (pembeda kuatmu)**
- Cuplikan 1 halaman: SOP, Spesifikasi Produk Data (SPD), metadata ISO 19115, dan matriks QC/QE/QA. Ini jarang dimiliki kandidat lain — tonjolkan.

**Kredibilitas**
- Scan sertifikat (BNSP, Komdigi, Google, ESRI) sebagai `kind:"link"` atau `doc`.
- Surat keterangan magang Kemenko Polkam (tautan Drive) untuk verifikasi.

---

## 9. Ringkasan alur kerja rutin

1. Edit `assets/js/data.js` (teks, tautan Tableau, nama gambar).
2. Taruh gambar/CV di folder `assets/...` sesuai nama.
3. `git add . && git commit -m "update konten" && git push`.
4. Vercel deploy otomatis dalam ±30 detik.

Selamat — portofoliomu siap tayang. 🚀
