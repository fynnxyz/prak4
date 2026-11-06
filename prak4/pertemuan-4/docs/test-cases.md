# Test Cases - Pertemuan 4 (Tracking AR)

| ID | Skenario | Langkah | Expected Result | Actual / Status / Bukti |
|---|---|---|---|---|
| TC-01 | Halaman terbuka tanpa error fatal | Buka tiga halaman (index, image, face) | Halaman tampil; tidak ada error merah di Console | Berhasil (OK) |
| TC-02 | Izin kamera diberikan | Tekan Mulai, pilih Izinkan | Video tampil; status "Mencari ..." | Berhasil (OK) |
| TC-03 | Image target terdeteksi | Arahkan kamera ke target-card.png | Status "Target terdeteksi"; objek 3D muncul di atas gambar | Berhasil (OK) |
| TC-04 | Objek mengikuti posisi/orientasi target | Geser, miringkan, putar target | Objek tetap menempel presisi pada gambar | Berhasil (OK) |
| TC-05 | Target hilang | Tutup/jauhkan target dari kamera | Objek hilang; status "Target hilang..." | Berhasil (OK) |
| TC-06 | Wajah terdeteksi | Hadapkan wajah ke kamera depan | Status "Wajah terdeteksi"; topeng tampil di wajah | Berhasil (OK) |
| TC-07 | Aksesori mengikuti gerakan wajah | Toleh, angguk, miringkan kepala | Topeng ikut bergerak mengikuti wajah | Berhasil (OK) |
| TC-08 | Wajah tidak terdeteksi | Tutup wajah atau keluar bingkai | Topeng hilang; status berubah menjadi mencari | Berhasil (OK) |
| TC-09 | Dua kondisi cahaya (terang & redup) | Ulangi TC-03 & TC-06 pada cahaya berbeda | Hasil tiap kondisi tercatat | Terang: stabil. Redup: tracking agak lambat/kehilangan target |
| TC-10 | Lebih dari satu jarak | Uji TC-03 pada jarak dekat, sedang, jauh | Rentang jarak berhasil tercatat (optimal 20-50 cm) | Berhasil pada jarak 20-60 cm |
| TC-11 | Perangkat HP | Jalankan TC-02..08 di HP (via HTTPS) | Hasil tercatat di device-matrix | Berhasil di Android Chrome |
| TC-12 | Deployment HTTPS | Buka URL GitHub Pages di HP | Halaman terbuka via HTTPS; kamera dapat diminta | Berhasil (OK) |
