# ORDER 22: Portofolio apt. Nabila Hasim Hasibuan (desain dan daftar perbedaan CV vs foto)

Tanggal: 2026-11-05. Sumber: `CV_apt. Nabila Hasim Hasibuan, S.Farm. (umum).pdf` dan 40 foto di `FOTO KEGIATAN PROF-20261105T030443Z-1-001`.

## Tujuan
Situs portofolio dwibahasa (ID/EN) dari Template 1 (Next.js 14, situs apoteker). Kode dasar diambil dari ORDER 21 (turunan Template 1 yang sudah dirapikan), lalu bagian Organisasi ditambahkan kembali karena CV ini memuat organisasi. Isi hanya dari CV dan foto klien. Tidak ada data karangan.

## Keputusan desain (pilihan pembuat situs)
- Bagian Pencapaian dan Karya & Proyek dihapus: CV tidak memuat prestasi, publikasi, atau karya.
- Pengalaman: lima kartu PKPA, diurut berdasarkan bulan mulai (RSUD Dr. Pirngadi, PT Muthia Farma, PT Rajawali Nusindo, Puskesmas Padang Bulan, Apotek Keshia). Urutan CV terbalik (terbaru di atas).
- Bagian baru "Akademik & Organisasi": tiga kartu teks untuk asisten laboratorium (Farmakoterapi, Botani, Mikrobiologi) dan satu kartu BEM dengan tumpukan 2 foto.
- Lisensi & Sertifikasi: dua kartu tanpa gambar (STR Apoteker dan Sertifikat Kompetensi), karena tidak ada berkas dokumennya.
- Foto hero: `WG-04745.JPEG` (foto sumpah apoteker, cutout rembg, dipotong setengah badan). Selempang di foto bertuliskan nama klien.
- Pendidikan: foto sumpah apoteker (5 foto) untuk Profesi dan foto wisuda S1 (4 foto) untuk S1, tumpukan foto klik-ganti.
- Halaman `/projects` berisi 14 butir yang dipecah dari butir-butir CV, dua bahasa.
- Kontak: email, WhatsApp (081269221378 menjadi wa.me/6281269221378), dan lokasi sesuai CV ("Kab. Asahan, Kota Kisaran"). Tidak ada LinkedIn di CV.
- Teks buatan pembuat situs (diturunkan dari butir CV): judul Tentang Saya, kutipan, empat karakter kerja, tagline, lencana hero, dan deskripsi kemampuan personal dan software.

## Daftar perbedaan CV vs foto (untuk klien)
1. CV tidak punya foto profil. Hero memakai foto sumpah (`WG-04745`). Foto lain yang bisa dipakai: `WG-04716` (memegang buku sumpah), `WG-04764`, atau pas foto latar merah `IMG_5114.PNG`.
2. STR Apoteker dan Sertifikat Kompetensi tercantum di CV (2026), tetapi tidak ada berkas atau foto dokumennya. Ditampilkan sebagai kartu teks. Kirim berkasnya bila ingin ditampilkan seperti sertifikat di situs lain.
3. Tidak ada foto untuk tiga asisten laboratorium (Farmakoterapi, Botani, Mikrobiologi); kartunya hanya teks.
4. CV menulis nama kampus "Al- WASHLIYH" (salah ketik); situs memakai "Al-Washliyah". Folder foto menulis "RS. Pringadi", CV menulis "RSUD DR. PIRNGADI"; situs memakai ejaan CV (papan di foto juga "Pirngadi").
5. Nama apotek di CV "APOTEK KESHIA", papan di foto bertuliskan "Keshia Farma Health Centre". Situs memakai ejaan CV.
6. Periode saling tumpuk di CV: PKPA RSUD Sep–Nov 2025 dan PKPA PT Muthia Farma Nov–Des 2025 (Nov 2025 sama), dan Asisten Lab Farmakoterapi Oktober 2025 jatuh di tengah PKPA RSUD. Ditampilkan apa adanya.
7. CV tidak menyebut kota PT Muthia Farma, PT Rajawali Nusindo, Puskesmas Padang Bulan, dan Apotek Keshia, jadi lokasinya tidak ditulis (papan di foto menunjukkan Medan, tetapi tidak dicantumkan di CV).
8. Selempang di foto wisuda S1 bertuliskan predikat (kemungkinan "Cum Laude"), tetapi CV tidak menyebut predikat. Predikat tidak ditulis di teks.
9. Foto Industri `61d959dc…` memperlihatkan formulir produksi pabrik (catatan pengujian produk jadi). Tidak dipakai karena dokumen internal perusahaan. Foto industri yang dipakai hanya 2 (`IMG_6682`, `IMG_6684`) dan tidak ada foto gedung atau tim di PT Muthia Farma.
10. Foto Puskesmas `c2da8791…` memperlihatkan banyak pasien dan anak-anak (wajah kecil); dipakai di kartu Puskesmas. Perlu persetujuan klien. Foto tersebut diasumsikan kegiatan UKM/Posyandu.
11. Foto PBF `IMG_6674` (poster cara membaca VVM) dan `IMG_6675` (gudang) tidak berlabel; diasumsikan dari PT Rajawali Nusindo.
12. Foto yang tidak dipakai: pas foto latar merah (`IMG_5114.PNG`), pas foto hitam putih (`Hitam.JPG`), 4 foto sumpah (`0I7A6264`, `WG-04770`, `WG-04914`, `WG-04929`), foto wisuda S1 `DOY05170`, dan foto industri `61d959dc…` (lihat butir 9). Semua foto lain terpakai.
