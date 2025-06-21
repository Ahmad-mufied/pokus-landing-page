
# Pokus - Inisiasi Definitif

## 1. Site Blocker

### Business or Customer Need
Pengguna membutuhkan mekanisme untuk meminimalkan distraksi saat sesi kerja berlangsung dengan memblokir akses ke situs yang tidak relevan (misal: media sosial, streaming, dll).

### Requested Features
- Daftar situs yang bisa dikustomisasi oleh pengguna
- Pemblokiran otomatis saat timer aktif
- Tampilan pesan pengganti saat situs diblok

### Difference from Current Experience
Biasanya pengguna harus menggunakan ekstensi terpisah hanya untuk blokir situs, dan tidak sinkron dengan waktu kerja Pomodoro.

### Engineering Specifics
- Background script untuk intercept dan redirect URL
- UI untuk konfigurasi situs blokir
- Sinkronisasi dengan timer (aktif hanya saat sesi berjalan)

### App Should
- Memblokir situs sesuai daftar yang dipilih pengguna
- Memungkinkan pengguna menambah/menghapus situs
- Menampilkan halaman blokir saat user mencoba mengakses

### Expected Deliverables
- Daftar blokir dapat dikonfigurasi
- Fungsi blokir aktif saat sesi berjalan
- Halaman notifikasi blokir tampil saat akses

### Delivery Date
Sprint 1 selesai: 25 Juli 2025

### Size Story Points
- Konfigurasi daftar situs blokir: 3 SP
- Logic pemblokiran URL: 5 SP
- Sinkronisasi dengan timer: 2 SP

---

## 2. Pomodoro Timer

### Business or Customer Need
Pengguna membutuhkan alat bantu manajemen waktu berbasis teknik Pomodoro untuk meningkatkan fokus kerja dan menghindari burnout, khususnya saat bekerja di depan komputer dalam waktu lama.

### Requested Features
- Pengaturan waktu sesi kerja dan istirahat
- Notifikasi saat sesi berakhir atau dimulai
- Opsi untuk mengatur jumlah siklus dan durasi

### Difference from Current Experience
Pengguna sering menggunakan timer biasa atau aplikasi terpisah yang tidak mendukung integrasi langsung dengan aktivitas online mereka.

### Engineering Specifics
- Frontend untuk menampilkan dan mengontrol timer
- State management untuk logika Pomodoro
- Background script untuk menjalankan countdown
- Notifikasi sederhana (browser alert)

### App Should
- Memungkinkan pengguna memulai, menjeda, dan menyelesaikan sesi
- Menyesuaikan durasi sesi kerja dan istirahat
- Menampilkan waktu tersisa secara visual

### Expected Deliverables
- UI prototipe timer
- Timer fungsional pada ekstensi
- Notifikasi saat sesi berakhir

### Delivery Date
Sprint 2 selesai: 15 Agustus 2025

### Size Story Points
- Timer UI & Logic dasar: 4 SP
- State & session handling: 3 SP
- Notifikasi sesi: 2 SP

---

## 3. Background Sound

### Business or Customer Need
Pengguna membutuhkan suasana kerja yang lebih kondusif melalui pemutaran suara latar relaksasi seperti hujan, alam, atau noise.

### Requested Features
- Pilihan beberapa jenis suara latar
- Kombinasi beberapa suara sekaligus
- Pengaturan volume masing-masing suara

### Difference from Current Experience
Pengguna harus membuka aplikasi musik terpisah seperti Spotify atau YouTube yang justru dapat menjadi distraksi. Tidak ada integrasi antara music dengan timer atau blocking system.

### Engineering Specifics
- Audio player yang bisa memutar lebih dari satu track bersamaan
- UI untuk memilih suara dan mengatur volume
- Penyimpanan preferensi pengguna

### App Should
- Memungkinkan pengguna memilih suara dan mengatur volume
- Menyimpan preferensi pengguna untuk sesi berikutnya
- Menghentikan/memulai musik seiring timer

### Expected Deliverables
- Pemutar suara latar dengan kontrol volume
- UI pemilihan suara
- Fungsi kombinasi suara

### Delivery Date
Sprint 3 selesai: 5 September 2025

### Size Story Points
- Audio player + mixing logic: 5 SP
- UI pengaturan suara & volume: 4 SP
- Persistensi preferensi: 2 SP

---

## 4. UI Customization

### Business or Customer Need
Pengguna membutuhkan tampilan antarmuka yang dapat disesuaikan dengan preferensi visual pribadi, seperti tema dan latar belakang gambar.

### Requested Features
- Kustomisasi tema
- Kustomisasi latar belakang gambar

### Difference from Current Experience
UI saat ini standar dan tidak bisa disesuaikan, tidak ada kesan personalisasi.

### Engineering Specifics
- Kustomisasi pengaturan UI dinamis (switch theme)
- Pengelolaan background image dan penyimpanan lokal
- Integrasi preferensi dengan state global UI

### App Should
- Menyediakan beberapa opsi tema & skema warna
- Menyediakan galeri default + gambar background
- Menyimpan preferensi pengguna dan menerapkannya setiap kali aplikasi dibuka
- Memungkinkan preview langsung sebelum menyimpan pengaturan

### Expected Deliverables
- Menu “Appearance” di Settings
- UI live preview saat mengubah tema
- Penyimpanan preferensi di local storage/user config

### Delivery Date
Sprint 4 selesai: 19 September 2025

### Size Story Points
- UI Tema & Background (dengan preview): 5 SP
- Simpan & load preferensi tampilan: 3 SP

---

## 5. Motivation & Rewards (Gamification)

### Business or Customer Need
Pengguna membutuhkan dorongan motivasional dan bentuk penghargaan atas konsistensi mereka dalam fokus, agar tercipta kebiasaan produktif yang berkelanjutan.

### Requested Features
- Streak Focus (berbasis sesi pomodoro)
- Pengumpulan EXP dari tiap sesi fokus yang berhasil
- Penukaran EXP dengan item visual seperti tema atau background unik
- Easter egg badge reward untuk milestone tertentu

### Difference from Current Experience
Tidak ada feedback atau reward yang mendorong konsistensi fokus. Tanpa gamifikasi, pengguna kehilangan motivasi.

### Engineering Specifics
- Mekanisme penyimpanan dan kalkulasi streak
- Logika sistem EXP per sesi
- Modul store & redeem reward
- Sistem trigger Easter egg berdasarkan milestone tertentu

### App Should
- Menyimpan dan menampilkan progress streak pengguna
- Memberikan EXP setelah sesi selesai
- Menyediakan menu untuk menukar EXP
- Memberikan badge saat pengguna mencapai milestone

### Expected Deliverables
- Menampilkan EXP dan streak aktif
- Notifikasi reward setelah milestone tercapai
- Menu EXP reward untuk menampilkan tema baru
- Fungsi backend untuk tracking dan updating streak/EXP

### Delivery Date
Sprint 5 selesai: 3 Oktober 2025

### Size Story Points
- Tracking sesi fokus & streak + logika EXP: 5 SP
- UI profil dan EXP reward: 4 SP
- Sistem badge & Easter egg logic: 3 SP
