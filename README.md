# Pertemuan 4: Tracking AR dengan MindAR dan Three.js

Praktikum Augmented dan Virtual Reality (ITIA730591) - Program Studi Teknologi Informasi, FIKTI UMSU.

## Nama & NIM
- **Nama**: [Fanny Fhadillah]
- **NIM**: [2409020083]

## Deskripsi Proyek
Proyek ini mengimplementasikan **Image Tracking** dan **Face Tracking** menggunakan perpustakaan MindAR (v1.2.5) dan Three.js (v0.160.0).

## Struktur Folder
```text
pertemuan-4/
├── index.html
├── image-tracking.html
├── face-tracking.html
├── .nojekyll
├── src/
│   ├── styles.css
│   ├── common.js
│   ├── image-demo.js
│   └── face-demo.js
├── vendor/
│   ├── three/
│   └── mindar/
├── targets/
│   └── target-card.mind
├── assets/
│   └── images/
│       └── target-card.png
└── docs/
    ├── test-cases.md
    └── device-matrix.md
```

## Cara Menjalankan
1. Clone repository ini atau buka folder `pertemuan-4`.
2. Jalankan server lokal di root folder menggunakan Python:
   ```bash
   python -m http.server 8080
   ```
3. Buka browser di `http://localhost:8080`.
4. Pilih Demo 1 (Image Tracking) atau Demo 2 (Face Tracking), tekan **Mulai**, dan izinkan akses kamera.

## GitHub Pages & Deployment
- URL GitHub Pages: `https://fynnxyz.github.io/prak4/pertemuan-4/`
- Pastikan menggunakan HTTPS saat menguji di perangkat seluler (HP) agar izin kamera diizinkan oleh browser.

## Masalah dan Investigasi
- **Masalah**: Kamera tidak meminta izin saat diakses dari HP via IP lokal (`http://192.168.x.x:8080`).
- **Investigasi & Solusi**: Browser modern memerlukan *secure context* (HTTPS atau `localhost`) untuk mengakses `navigator.mediaDevices.getUserMedia`. Pengujian di HP diselesaikan dengan melakukan deployment ke GitHub Pages (HTTPS).
