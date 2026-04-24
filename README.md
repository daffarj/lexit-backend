# 🧠 Lexit — Platform Deteksi Disleksia Berbasis AI

<div align="center">

**Platform AI untuk deteksi dini dan terapi disleksia pada anak Indonesia usia 5–12 tahun**

[![Laravel](https://img.shields.io/badge/Laravel-13.x-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Inertia.js](https://img.shields.io/badge/Inertia.js-2.x-9553E9?style=for-the-badge&logo=inertia&logoColor=white)](https://inertiajs.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Gemini AI](https://img.shields.io/badge/Gemini-AI-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://aistudio.google.com)

</div>

---

## 📋 Daftar Isi

- [Tentang Lexit](#-tentang-lexit)
- [Fitur Utama](#-fitur-utama)
- [Tech Stack](#-tech-stack)
- [Prasyarat](#-prasyarat)
- [Instalasi](#-instalasi)
- [Konfigurasi](#%EF%B8%8F-konfigurasi)
- [Menjalankan Aplikasi](#%EF%B8%8F-menjalankan-aplikasi)
- [Struktur Project](#-struktur-project)
- [Panduan Penggunaan](#-panduan-penggunaan)
- [Konfigurasi Gemini AI](#-konfigurasi-gemini-ai)
- [Database](#%EF%B8%8F-database)
- [Kontribusi](#-kontribusi)

---

## 🎯 Tentang Lexit

Lexit adalah platform berbasis AI yang dirancang untuk membantu orang tua dan pendidik mendeteksi dini tanda-tanda disleksia pada anak Indonesia. Dengan memanfaatkan **Google Gemini AI**, Lexit dapat menganalisis tulisan tangan anak secara otomatis dan memberikan laporan perkembangan yang mudah dipahami.

> **Latar Belakang:** 5 juta pelajar Indonesia, 2 juta kasus disleksia per tahun, namun hanya ~4.000 psikolog klinis tersedia. Lexit hadir sebagai solusi accessible berbasis AI. Selaras dengan **SDG 3, 4, dan 10**.

---

## ✨ Fitur Utama

| Fitur                       | Deskripsi                                                                             |
| --------------------------- | ------------------------------------------------------------------------------------- |
| 🔍 **LexScan**              | Upload foto tulisan tangan → Gemini AI menganalisis huruf per huruf → feedback instan |
| 🎮 **LexPlay**              | Game susun huruf interaktif dengan sistem poin dan level                              |
| 📊 **Parent Dashboard**     | Pantau riwayat scan dan skor game semua profil anak                                   |
| 👶 **Multi-Profil Anak**    | Satu akun orang tua bisa kelola banyak profil anak dengan avatar emoji                |
| 🔄 **Dual Mode**            | Switch antara Mode Orang Tua dan Mode Anak dengan mudah                               |
| 📄 **Laporan PDF**          | Download laporan lengkap per sesi scan                                                |
| 🤖 **Gemini AI + Fallback** | Exponential backoff otomatis + mock data saat API quota habis                         |

---

## 🛠 Tech Stack

### Backend

- **Laravel 13** — PHP framework
- **Inertia.js 2** — Jembatan antara Laravel dan React (tanpa API terpisah)
- **MySQL** — Database utama
- **Laravel Breeze** — Authentication (register, login, reset password)
- **Barryvdh DomPDF** — Generate laporan PDF
- **Spatie Media Library** — Manajemen file upload

### Frontend

- **React 19** + **TypeScript** — UI library + type safety
- **Tailwind CSS v4** — Utility-first styling
- **Vite 8** — Build tool & Hot Module Replacement
- **Lucide React** — Icon library
- **Font Lexend** — Dirancang khusus untuk penderita disleksia

### AI

- **Google Gemini API** — Analisis tulisan tangan & generate laporan narasi
    - `gemini-2.0-flash-lite` → LexScan (cepat & hemat)
    - `gemini-2.5-flash` → Generate laporan PDF

---

## 📦 Prasyarat

| Software | Versi Minimum |
| -------- | ------------- |
| PHP      | 8.2+          |
| Composer | 2.x           |
| Node.js  | 18+           |
| npm      | 9+            |
| MySQL    | 8.0+          |

---

## 🚀 Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/daffarj/lexit-backend.git
cd lexit-backend
```

### 2. Install Dependencies

```bash
# PHP dependencies
composer install

# Node.js dependencies
npm install
```

### 3. Buat File Environment

```bash
cp .env.example .env
php artisan key:generate
```

---

## ⚙️ Konfigurasi

Buka file `.env` dan sesuaikan:

### Database

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=lexit_db
DB_USERNAME=root
DB_PASSWORD=
```

Buat database di MySQL terlebih dahulu:

```sql
CREATE DATABASE lexit_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### Gemini AI

```env
GEMINI_API_KEY=your_api_key_here
GEMINI_MODEL_FLASH=gemini-2.0-flash-lite
GEMINI_MODEL_PRO=gemini-2.5-flash
```

> **Cara mendapatkan API Key gratis:**
>
> 1. Buka [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
> 2. Klik **Create API key** → **Create API key in new project**
> 3. Copy key → paste ke `.env`

### Queue & Cache

```env
QUEUE_CONNECTION=database
CACHE_STORE=file
```

---

## ▶️ Menjalankan Aplikasi

### Jalankan Migration

```bash
php artisan migrate
```

### Development — Jalankan 3 Terminal

```bash
# Terminal 1 — Laravel server
php artisan serve

# Terminal 2 — Vite asset bundler
npm run dev

# Terminal 3 — Queue worker (async AI jobs)
php artisan queue:work
```

Buka di browser: **http://localhost:8000**

### Production Build

```bash
npm run build
php artisan optimize
```

---

## 📁 Struktur Project

```
lexit-backend/
├── app/
│   ├── Http/Controllers/
│   │   ├── Auth/                    # Breeze auth controllers
│   │   ├── ChildController.php      # Kelola profil anak & switch mode
│   │   ├── DashboardController.php  # Data parent dashboard
│   │   ├── LexPlayController.php    # Game logic & simpan skor
│   │   └── LexScanController.php    # Upload, analisis AI, download PDF
│   ├── Http/Middleware/
│   │   └── HandleInertiaRequests.php # Share auth data ke semua halaman
│   ├── Models/
│   │   ├── Child.php           # Profil anak
│   │   ├── GameSession.php     # Riwayat sesi LexPlay
│   │   ├── ScanResult.php      # Riwayat hasil LexScan
│   │   └── User.php            # Akun orang tua
│   └── Services/
│       └── GeminiService.php   # Gemini API wrapper + exponential backoff
├── database/migrations/        # Semua migration tabel
├── resources/
│   ├── css/app.css             # Tailwind + Google Fonts
│   ├── js/
│   │   ├── app.tsx             # Inertia entry point
│   │   ├── Components/
│   │   │   └── Navigation.tsx  # Navbar dengan auth & child mode banner
│   │   ├── Layouts/
│   │   │   └── AppLayout.tsx   # Layout utama (Nav + Footer)
│   │   └── Pages/
│   │       ├── Auth/           # Login, Register, Reset Password
│   │       ├── Dashboard.tsx   # Parent dashboard
│   │       ├── Home.tsx        # Landing page
│   │       ├── LexPlay.tsx     # Game susun huruf
│   │       ├── LexScan.tsx     # Analisis tulisan tangan
│   │       ├── Features.tsx    # Halaman fitur
│   │       ├── Pricing.tsx     # Paket harga
│   │       ├── HowItWorks.tsx  # Cara kerja
│   │       └── About.tsx       # Tentang tim
│   └── views/
│       ├── App.blade.php               # Root Blade template
│       └── pdf/lexscan-report.blade.php # Template laporan PDF
└── routes/
    ├── web.php     # Semua route web
    └── auth.php    # Route autentikasi
```

---

## 📖 Panduan Penggunaan

### 1. Daftar & Login

```
Buka /register → isi nama, email, password → Daftar Sekarang
Otomatis masuk ke Dashboard (Mode Orang Tua)
```

### 2. Tambah Profil Anak

```
Dashboard → klik Tambah → pilih avatar → isi nama & usia → Simpan
```

### 3. Menggunakan LexScan

> ⚠️ Aktifkan **Mode Anak** terlebih dahulu agar hasil tersimpan ke profil anak.

```
Dashboard → klik "Mode Anak" pada profil anak
  ↓ banner orange muncul di navbar
Buka LexScan → upload foto tulisan tangan
  ↓ klik "Mulai Scan dengan AI"
  ↓ tunggu 5–15 detik (Gemini memproses)
Hasil analisis per huruf muncul di panel kanan
  ↓ klik "Download Laporan" untuk simpan PDF
Klik "Kembali ke Mode Orang Tua" → lihat riwayat di Dashboard
```

### 4. Menggunakan LexPlay

```
Aktifkan Mode Anak → buka LexPlay
  ↓ lihat gambar + petunjuk kata
  ↓ klik huruf untuk menyusun kata
  ↓ klik "Cek Jawaban"
Selesaikan semua level → klik "Simpan Skor"
Cek Dashboard → riwayat bermain muncul
```

### 5. Parent Dashboard

| Statistik         | Keterangan                            |
| ----------------- | ------------------------------------- |
| Akurasi Rata-rata | Persentase skor scan keseluruhan      |
| Total Scan        | Jumlah sesi LexScan                   |
| Sesi Bermain      | Total sesi LexPlay                    |
| Skor Tertinggi    | Rekor poin LexPlay                    |
| Riwayat LexScan   | 5 scan terakhir + indikator disleksia |
| Riwayat LexPlay   | 5 sesi bermain terakhir               |

---

## 🤖 Konfigurasi Gemini AI

### Exponential Backoff (Rate Limit Protection)

Jika terkena rate limit (error 429), sistem otomatis retry:

```
Request → 429? → tunggu 1 detik → retry
              → 429? → tunggu 2 detik → retry
              → 429? → tunggu 4 detik → retry
              → masih gagal → tampilkan Mock Data [Mode Demo]
```

Tidak perlu konfigurasi tambahan — sudah berjalan otomatis.

### Cek Model Tersedia di API Key Kamu

```bash
php artisan tinker --execute="
\$res = \Illuminate\Support\Facades\Http::get(
    'https://generativelanguage.googleapis.com/v1beta/models',
    ['key' => config('services.gemini.api_key')]
);
collect(\$res->json('models'))->pluck('name')->each(fn(\$m) => print(\$m . PHP_EOL));
"
```

---

## 🗄️ Database

### Skema Tabel

| Tabel           | Kolom Utama                                                                      |
| --------------- | -------------------------------------------------------------------------------- |
| `users`         | id, name, email, password, active_child_id                                       |
| `children`      | id, user_id, name, age, avatar                                                   |
| `scan_results`  | id, user_id, child_id, overall_score, letters (JSON), dyslexia_indicators (JSON) |
| `game_sessions` | id, user_id, child_id, score, level_reached, total_attempts                      |

### Relasi

```
User (orang tua)
  ├── hasMany → Children
  │     ├── hasMany → ScanResults
  │     └── hasMany → GameSessions
  └── belongsTo → Child (active_child)
```

### Perintah Berguna

```bash
# Lihat status migration
php artisan migrate:status

# Reset semua data (development only!)
php artisan migrate:fresh

# Cek koneksi database
php artisan tinker --execute="DB::connection()->getPdo(); echo 'DB OK';"
```

---

## 🤝 Kontribusi

Project ini dikembangkan oleh **Tim Lavan**.

### Langkah Kontribusi

```bash
# 1. Fork & clone
git clone https://github.com/YOUR_USERNAME/lexit-backend.git

# 2. Buat branch baru
git checkout -b feature/nama-fitur

# 3. Commit dengan pesan yang jelas
git commit -m "feat: tambah fitur X"

# 4. Push & buat Pull Request
git push origin feature/nama-fitur
```

### Konvensi Commit Message

| Prefix      | Digunakan untuk       |
| ----------- | --------------------- |
| `feat:`     | Fitur baru            |
| `fix:`      | Perbaikan bug         |
| `docs:`     | Perubahan dokumentasi |
| `style:`    | Perubahan UI/styling  |
| `refactor:` | Refactoring kode      |

---

## 📄 Lisensi

Dikembangkan untuk keperluan akademik dan sosial. Selaras dengan **SDG 3** (Kesehatan), **SDG 4** (Pendidikan Berkualitas), dan **SDG 10** (Mengurangi Kesenjangan).

---

<div align="center">

Adaptasi Ide dari **Tim Lavan** juara pada lomba gemastik cabang perancangan kenyamanan pengguna, code dibuat oleh Kelompok x Mata Kuliah Teknologi Integrasi Sistem FILKOM UB untuk anak-anak Indonesia 🇮🇩

_"Baca Lebih Mudah, Tumbuh Lebih Berani"_

</div>
