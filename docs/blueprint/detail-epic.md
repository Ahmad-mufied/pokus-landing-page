
# Detail Epic - Pokus

---


## 2. Blocking

### Summary
Fitur untuk meminimalkan distraksi selama sesi fokus dengan cara memblokir akses ke situs tertentu melalui blacklist dan pengecualian melalui whitelist.

### Description
- Pengguna dapat mengatur daftar situs yang diblokir (blacklist) dan daftar situs yang dapat akses (whitelist)
- Sistem secara otomatis memblokir situs dari blacklist saat sesi fokus berjalan
- Halaman blokir akan muncul ketika pengguna mencoba mengakses situs dalam blacklist
- Konfigurasi daftar situs bisa dilakukan kustomisasi

### Definition of Done (DoD)
- Pengguna dapat menambahkan daftar URL yang diblokir dan dikecualikan
- Pengguna dapat melakukan pengecualian URL
- Pengguna dapat melihat tampilan halaman blokir saat mencoba mengakses situs dari daftar blacklist

### User Stories
- Sebagai pengguna, saya ingin menambahkan situs ke daftar blokir agar saya tidak terdistraksi saat fokus
- Sebagai pengguna, saya ingin tetap bisa membuka blacklist site untuk kondisi tertentu meskipun masuk dalam daftar situs diblokir
- Sebagai pengguna, saya ingin melihat notifikasi atau halaman blokir agar tahu situs tersebut dibatasi sistem

---

## 3. Pomodoro

### Summary
Fitur manajemen waktu berbasis teknik Pomodoro untuk membantu pengguna tetap fokus dan produktif.

### Description
- Menyediakan timer utama Pomodoro dengan interface yang jelas
- Memungkinkan pengguna untuk mengatur durasi fokus dan istirahat
- Notifikasi otomatis saat sesi dimulai dan berakhir
- Menyimpan dan menampilkan statistik fokus dan riwayat penggunaan

### Definition of Done (DoD)
- Pengguna dapat memulai, menjeda, dan mengatur ulang timer
- Pengguna dapat mengubah durasi sesi fokus dan istirahat
- Memberikan notifikasi saat sesi berakhir
- Sistem mencatat setiap sesi Pomodoro yang selesai
- Sistem streak focus menampilkan jumlah sesi berturut-turut

### User Stories
- Sebagai pengguna, saya ingin memulai, menjeda, dan mereset timer Pomodoro agar bisa mengatur sesi saya
- Sebagai pengguna, saya ingin menyesuaikan durasi sesi agar sesuai kebutuhan
- Sebagai pengguna, saya ingin melihat statistik fokus dan streak agar bisa mengevaluasi dan meningkatkan fokus

---

## 4. Ambience

### Summary
Fitur untuk memutar suara latar seperti hujan, alam dan white noise. Termasuk pengaturan volume dan kombinasi suara.

### Description
- Pengguna dapat memilih suara ambience (hujan, api unggun, dll)
- Memutar beberapa suara bersamaan
- Pengaturan volume tiap suara
- Menyimpan preferensi suara untuk sesi berikutnya

### Definition of Done (DoD)
- Pengguna dapat memilih dan memutar lebih dari satu ambience
- Volume tiap ambience bisa diatur independen
- Sistem menyimpan dan memuat ulang pengaturan suara

### User Stories
- Sebagai pengguna, saya ingin memilih dan memutar beberapa suara ambience
- Sebagai pengguna, saya ingin mengatur volume tiap suara
- Sebagai pengguna, saya ingin aplikasi menyimpan kombinasi suara

---

## 5. Customization

### Summary
Fitur yang memungkinkan pengguna menyesuaikan tampilan seperti tema warna dan gambar latar belakang.

### Description
- Menyediakan beberapa pilihan tema
- Menyediakan opsi latar belakang
- Menyimpan preferensi secara lokal
- Live preview saat mengubah tampilan

### Definition of Done (DoD)
- Pengguna dapat memilih dan menyimpan tema dari halaman pengaturan
- Perubahan tema dan background diterapkan
- Preferensi tetap tersimpan setelah aplikasi ditutup

### User Stories
- Sebagai pengguna, saya ingin mengubah tema aplikasi agar lebih nyaman
- Sebagai pengguna, saya ingin mengatur gambar latar agar tampilan terasa personal
- Sebagai pengguna, saya ingin aplikasi mengingat tampilan yang sudah diatur

---

## 6. Gamification

### Summary
Fitur motivasional dalam bentuk streak focus, EXP, dan reward untuk konsistensi produktif pengguna.

### Description
- Melacak streak fokus pengguna
- Memberikan EXP tiap sesi selesai
- Menyediakan reward berupa tema baru
- Badge milestone dengan Easter egg

### Definition of Done (DoD)
- Sistem mencatat streak fokus
- EXP bertambah otomatis dan bisa dilihat
- Tema baru tersedia ketika EXP tercapai
- Badge otomatis saat milestone tertentu tercapai

### User Stories
- Sebagai pengguna, saya ingin mendapatkan EXP agar termotivasi
- Sebagai pengguna, saya ingin melihat streak fokus
- Sebagai pengguna, saya ingin mendapatkan reward visual
- Sebagai pengguna, saya ingin mendapatkan badge milestone
