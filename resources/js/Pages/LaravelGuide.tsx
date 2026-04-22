import { useState } from 'react';
import { Copy, Check, ChevronRight, FolderOpen, FileCode, Settings, Layout, Navigation, Footprints, Home, Star, HelpCircle, Info, Tag, Brain, Gamepad2 } from 'lucide-react';

/* =====================================================================
   FILE CONTENTS — semua kode Laravel Blade tersimpan di sini sebagai
   string untuk ditampilkan dan disalin ke project lokal Anda.
   ===================================================================== */

const FILE_CONTENTS: Record<string, string> = {

  /* ------------------------------------------------------------------ */
  'setup': `# 🚀 Panduan Setup Laravel + Tailwind + Alpine.js

## 1. Buat project Laravel baru
composer create-project laravel/laravel lexit-app
cd lexit-app

## 2. Install Tailwind CSS via npm
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

## 3. Install Alpine.js (opsional, bisa pakai CDN)
npm install alpinejs

## 4. Konfigurasi tailwind.config.js
(Lihat tab "tailwind.config.js")

## 5. Update resources/css/app.css
(Lihat tab "resources/css/app.css")

## 6. Update resources/js/app.js
import './bootstrap';
import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();

## 7. Buat Controller
php artisan make:controller PageController

## 8. Jalankan project
php artisan serve      # buka di http://localhost:8000
npm run dev            # kompilasi Tailwind + JS

## 📁 Struktur Direktori yang Dibutuhkan:
lexit-app/
├── app/Http/Controllers/
│   └── PageController.php
├── resources/
│   ├── css/app.css
│   ├── js/app.js
│   └── views/
│       ├── layouts/
│       │   └── app.blade.php
│       ├── partials/
│       │   ├── navbar.blade.php
│       │   └── footer.blade.php
│       ├── home.blade.php
│       ├── features.blade.php
│       ├── how-it-works.blade.php
│       ├── about.blade.php
│       ├── pricing.blade.php
│       ├── lexscan.blade.php
│       └── lexplay.blade.php
└── routes/
    └── web.php`,

  /* ------------------------------------------------------------------ */
  'routes/web.php': `<?php

use App\\Http\\Controllers\\PageController;
use Illuminate\\Support\\Facades\\Route;

// Halaman utama
Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/fitur', [PageController::class, 'features'])->name('features');
Route::get('/cara-kerja', [PageController::class, 'howItWorks'])->name('how-it-works');
Route::get('/tentang', [PageController::class, 'about'])->name('about');
Route::get('/harga', [PageController::class, 'pricing'])->name('pricing');

// Halaman interaktif
Route::get('/lexscan', [PageController::class, 'lexscan'])->name('lexscan');
Route::get('/lexplay', [PageController::class, 'lexplay'])->name('lexplay');`,

  /* ------------------------------------------------------------------ */
  'app/Http/Controllers/PageController.php': `<?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;

class PageController extends Controller
{
    public function home()
    {
        $stats = [
            ['number' => '5 Juta',  'label' => 'Pelajar di Indonesia',          'color' => '#3BBFAD'],
            ['number' => '2 Juta',  'label' => 'Kasus Baru Disleksia/Tahun',    'color' => '#F5A623'],
            ['number' => '4.000',   'label' => 'Psikolog Klinis di Indonesia',   'color' => '#1A2E4A'],
        ];

        $features = [
            [
                'icon'        => 'brain',
                'title'       => 'LexScan',
                'description' => 'Skrining interaktif berbasis AI yang menganalisis pola jawaban anak untuk mendeteksi indikasi disleksia dengan akurat dalam 15 menit.',
                'color'       => '#3BBFAD',
                'link'        => route('lexscan'),
            ],
            [
                'icon'        => 'gamepad-2',
                'title'       => "Let's Play",
                'description' => 'Mini-game adaptif yang dirancang untuk terapi multi-sensori (visual, audio, kinestetik) yang menyenangkan dan efektif.',
                'color'       => '#F5A623',
                'link'        => route('lexplay'),
            ],
            [
                'icon'        => 'bar-chart-3',
                'title'       => 'Parent Mode',
                'description' => 'Dashboard komprehensif untuk memantau progres anak, mengakses riwayat skrining, dan mendapatkan rekomendasi terapi.',
                'color'       => '#1A2E4A',
                'link'        => route('features'),
            ],
        ];

        $testimonial = [
            'name'  => 'Ibu Yuni',
            'role'  => 'Ibu dari Farel (8 tahun)',
            'quote' => 'Sebelumnya saya bingung kenapa Farel kesulitan membaca padahal sudah les privat. Setelah pakai Lexit, saya baru tahu ada indikasi disleksia. Sekarang Farel lebih percaya diri dan nilai bacanya meningkat! Terima kasih Lexit.',
            'rating'=> 5,
        ];

        return view('home', compact('stats', 'features', 'testimonial'));
    }

    public function features()
    {
        return view('features');
    }

    public function howItWorks()
    {
        $steps = [
            [
                'number'      => 1,
                'title'       => 'Skrining dengan LexScan',
                'description' => 'Anak mengikuti tes interaktif yang menyenangkan selama 15 menit untuk mendeteksi indikasi disleksia',
            ],
            [
                'number'      => 2,
                'title'       => "Terapi dengan Let's Play",
                'description' => 'Bermain game edukatif yang disesuaikan dengan kebutuhan anak berdasarkan hasil skrining',
            ],
            [
                'number'      => 3,
                'title'       => 'Pantau dengan Parent Mode',
                'description' => 'Lihat progres anak, akses laporan, dan dapatkan rekomendasi personalisasi',
            ],
        ];

        return view('how-it-works', compact('steps'));
    }

    public function about()
    {
        return view('about');
    }

    public function pricing()
    {
        $freePlan = [
            '1x Skrining LexScan gratis',
            'Laporan hasil skrining dasar',
            'Akses 5 mini-game Let\'s Play',
            'Dashboard progres dasar',
            'Artikel dan panduan disleksia',
        ];

        $premiumPlan = [
            'Unlimited skrining LexScan kapan saja',
            'Laporan detail + analisis mendalam (PDF)',
            '20+ mini-game Let\'s Play dengan adaptive learning',
            'Dashboard progres lengkap + grafik perkembangan',
            'Rekomendasi terapi personalisasi',
            'Konsultasi chat dengan psikolog klinis (2x/bulan)',
            'Fitur multi-anak (hingga 3 profil)',
            'Priority support 24/7',
        ];

        return view('pricing', compact('freePlan', 'premiumPlan'));
    }

    public function lexscan()
    {
        return view('lexscan');
    }

    public function lexplay()
    {
        // Data challenges dikirim ke Blade agar bisa digunakan di Alpine.js via @json
        $challenges = [
            ['word' => 'BUKU',   'image' => '📚', 'hint' => 'Kamu membaca ini setiap hari di sekolah'],
            ['word' => 'KUCING', 'image' => '🐱', 'hint' => 'Hewan berkaki empat yang suka minum susu'],
            ['word' => 'APEL',   'image' => '🍎', 'hint' => 'Buah berwarna merah yang manis'],
            ['word' => 'RUMAH',  'image' => '🏠', 'hint' => 'Tempat kamu tinggal bersama keluarga'],
            ['word' => 'BOLA',   'image' => '⚽', 'hint' => 'Kamu menendang ini saat bermain sepak bola'],
        ];

        return view('lexplay', compact('challenges'));
    }
}`,

  /* ------------------------------------------------------------------ */
  'resources/views/layouts/app.blade.php': `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'Lexit — Dyslexia Care')</title>

    {{-- Google Fonts: Nunito (heading), Lexend (body), DM Mono (angka) --}}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Lexend:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">

    {{-- Alpine.js --}}
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>

    {{-- Lucide Icons CDN --}}
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>

    {{-- Vite (Tailwind CSS + JS) --}}
    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <style>
        body    { font-family: 'Lexend', sans-serif; letter-spacing: 0.03em; }
        h1,h2,h3,h4,h5,h6 { font-family: 'Nunito', sans-serif; }
        .font-mono, code, .mono { font-family: 'DM Mono', monospace; }
    </style>

    @stack('styles')
</head>
<body class="bg-[#F7F5F2] min-h-screen">

    {{-- Navigasi Global --}}
    @include('partials.navbar')

    {{-- Konten Halaman --}}
    <main>
        @yield('content')
    </main>

    {{-- Footer Global --}}
    @include('partials.footer')

    {{-- Inisialisasi Lucide icons setelah DOM ready --}}
    <script>
        document.addEventListener('DOMContentLoaded', () => lucide.createIcons());
    </script>

    @stack('scripts')
</body>
</html>`,

  /* ------------------------------------------------------------------ */
  'resources/views/partials/navbar.blade.php': `{{-- Navbar dengan Alpine.js untuk mobile menu --}}
<nav x-data="{ open: false }"
     class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#3BBFAD]/20 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">

            {{-- Logo --}}
            <a href="{{ route('home') }}" class="flex items-center gap-3 group">
                <div class="w-12 h-12 bg-gradient-to-br from-[#3BBFAD] to-[#2A9989] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    <span class="font-bold text-2xl text-white">L</span>
                </div>
                <div class="flex flex-col">
                    <span class="font-bold text-2xl text-[#1A2E4A]">Lexit</span>
                    <span class="text-xs text-[#3BBFAD] -mt-1">Dyslexia Care</span>
                </div>
            </a>

            {{-- Desktop Nav --}}
            <div class="hidden md:flex items-center gap-8">
                @php
                    $navItems = [
                        ['route' => 'home',         'label' => 'Beranda'],
                        ['route' => 'features',     'label' => 'Fitur'],
                        ['route' => 'lexscan',      'label' => 'LexScan'],
                        ['route' => 'lexplay',      'label' => 'LexPlay'],
                        ['route' => 'how-it-works', 'label' => 'Cara Kerja'],
                        ['route' => 'about',        'label' => 'Tentang'],
                    ];
                @endphp

                @foreach($navItems as $item)
                    <a href="{{ route($item['route']) }}"
                       class="text-base transition-colors relative group
                              {{ request()->routeIs($item['route']) 
                                 ? 'text-[#3BBFAD] font-semibold'
                                 : 'text-[#2D3748] hover:text-[#3BBFAD]' }}">
                        {{ $item['label'] }}
                        @if(request()->routeIs($item['route']))
                            <span class="absolute -bottom-7 left-0 right-0 h-1 bg-[#3BBFAD] rounded-full"></span>
                        @endif
                    </a>
                @endforeach
            </div>

            {{-- CTA Desktop --}}
            <div class="hidden md:block">
                <a href="{{ route('pricing') }}"
                   class="px-6 py-3 bg-[#3BBFAD] text-white rounded-2xl font-semibold hover:bg-[#F5A623] transition-all shadow-lg hover:shadow-xl hover:scale-105">
                    Mulai Gratis
                </a>
            </div>

            {{-- Mobile Toggle --}}
            <button @click="open = !open"
                    class="md:hidden p-2 text-[#2D3748] hover:text-[#3BBFAD]"
                    aria-label="Toggle menu">
                <i x-show="!open" data-lucide="menu" class="w-6 h-6"></i>
                <i x-show="open"  data-lucide="x"    class="w-6 h-6"></i>
            </button>
        </div>

        {{-- Mobile Menu --}}
        <div x-show="open"
             x-transition:enter="transition ease-out duration-200"
             x-transition:enter-start="opacity-0 -translate-y-2"
             x-transition:enter-end="opacity-100 translate-y-0"
             class="md:hidden py-4 border-t border-gray-200">
            <div class="flex flex-col gap-2">
                @foreach($navItems as $item)
                    <a href="{{ route($item['route']) }}"
                       @click="open = false"
                       class="px-4 py-2 rounded-xl transition-colors
                              {{ request()->routeIs($item['route'])
                                 ? 'bg-[#3BBFAD]/10 text-[#3BBFAD] font-semibold'
                                 : 'text-[#2D3748] hover:bg-gray-50' }}">
                        {{ $item['label'] }}
                    </a>
                @endforeach
                <a href="{{ route('pricing') }}" @click="open = false"
                   class="mt-2 px-4 py-3 bg-[#3BBFAD] text-white rounded-2xl font-semibold text-center hover:bg-[#F5A623] transition-colors">
                    Mulai Gratis
                </a>
            </div>
        </div>
    </div>
</nav>`,

  /* ------------------------------------------------------------------ */
  'resources/views/partials/footer.blade.php': `<footer class="bg-[#1A2E4A] text-white mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">

            {{-- Brand --}}
            <div class="space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 bg-gradient-to-br from-[#3BBFAD] to-[#2A9989] rounded-2xl flex items-center justify-center shadow-lg">
                        <span class="font-bold text-2xl text-white">L</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="font-bold text-2xl">Lexit</span>
                        <span class="text-xs text-[#3BBFAD] -mt-1">Dyslexia Care</span>
                    </div>
                </div>
                <p class="text-sm text-gray-300 leading-relaxed">Baca Lebih Mudah, Tumbuh Lebih Berani</p>
                <div class="flex gap-2 pt-2">
                    @foreach([['color' => '#3BBFAD', 'num' => 3], ['color' => '#F5A623', 'num' => 4], ['color' => '#6FCF97', 'num' => 10]] as $sdg)
                        <div class="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-mono text-white"
                             style="background-color: {{ $sdg['color'] }}">
                            SDG {{ $sdg['num'] }}
                        </div>
                    @endforeach
                </div>
            </div>

            {{-- Navigasi --}}
            <div>
                <h4 class="font-bold mb-4 text-[#F5A623]">Navigasi</h4>
                <ul class="space-y-3">
                    @foreach([
                        ['route' => 'home',         'label' => 'Beranda'],
                        ['route' => 'features',     'label' => 'Fitur'],
                        ['route' => 'how-it-works', 'label' => 'Cara Kerja'],
                        ['route' => 'about',        'label' => 'Tentang'],
                        ['route' => 'pricing',      'label' => 'Harga'],
                    ] as $item)
                        <li>
                            <a href="{{ route($item['route']) }}"
                               class="text-sm text-gray-300 hover:text-[#3BBFAD] transition-colors">
                                {{ $item['label'] }}
                            </a>
                        </li>
                    @endforeach
                </ul>
            </div>

            {{-- Sumber Daya --}}
            <div>
                <h4 class="font-bold mb-4 text-[#F5A623]">Sumber Daya</h4>
                <ul class="space-y-3">
                    @foreach(['Panduan Orang Tua', 'Artikel Disleksia', 'FAQ', 'Konsultasi Psikolog'] as $resource)
                        <li>
                            <a href="#" class="text-sm text-gray-300 hover:text-[#3BBFAD] transition-colors">
                                {{ $resource }}
                            </a>
                        </li>
                    @endforeach
                </ul>
            </div>

            {{-- Kontak --}}
            <div>
                <h4 class="font-bold mb-4 text-[#F5A623]">Kontak</h4>
                <ul class="space-y-3">
                    <li class="flex items-start gap-2 text-sm text-gray-300">
                        <i data-lucide="mail" class="w-4 h-4 text-[#3BBFAD] mt-0.5 flex-shrink-0"></i>
                        <span>support@lexit.id</span>
                    </li>
                    <li class="flex items-start gap-2 text-sm text-gray-300">
                        <i data-lucide="phone" class="w-4 h-4 text-[#3BBFAD] mt-0.5 flex-shrink-0"></i>
                        <span>+62 812-3456-7890</span>
                    </li>
                    <li class="flex items-start gap-2 text-sm text-gray-300">
                        <i data-lucide="map-pin" class="w-4 h-4 text-[#3BBFAD] mt-0.5 flex-shrink-0"></i>
                        <span>Jakarta, Indonesia</span>
                    </li>
                </ul>
            </div>
        </div>

        {{-- Bottom Bar --}}
        <div class="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-sm text-gray-400">© {{ date('Y') }} Lexit by Tim Lavan. All rights reserved.</p>
            <div class="flex items-center gap-6 text-sm text-gray-400">
                <a href="#" class="hover:text-[#3BBFAD] transition-colors">Kebijakan Privasi</a>
                <a href="#" class="hover:text-[#3BBFAD] transition-colors">Syarat & Ketentuan</a>
                <span>Sesuai UU No. 8/2016</span>
            </div>
            <p class="text-sm text-gray-400 flex items-center gap-1">
                Made with <i data-lucide="heart" class="w-3.5 h-3.5 text-[#F5A623] mx-1"></i> for Indonesian children
            </p>
        </div>
    </div>
</footer>`,

  /* ------------------------------------------------------------------ */
  'resources/views/home.blade.php': `@extends('layouts.app')
@section('title', 'Beranda — Lexit Dyslexia Care')

@section('content')
<div class="min-h-screen">

    {{-- ===================== HERO ===================== --}}
    <section class="relative overflow-hidden bg-gradient-to-br from-[#F7F5F2] via-white to-[#3BBFAD]/5 pt-20 pb-32">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center">

                {{-- Teks Hero --}}
                <div class="space-y-8">
                    <div class="inline-block px-4 py-2 bg-[#3BBFAD]/10 rounded-full">
                        <span class="text-sm font-semibold text-[#3BBFAD]">✨ AI-Powered Dyslexia Care</span>
                    </div>

                    <h1 class="text-4xl md:text-6xl font-bold text-[#1A2E4A] leading-tight">
                        Deteksi Disleksia Lebih Awal,
                        <span class="text-[#3BBFAD]">Masa Depan Lebih Cerah</span>
                    </h1>

                    <p class="text-xl text-[#2D3748] leading-relaxed">
                        Platform skrining dan terapi disleksia berbasis AI untuk anak Indonesia usia 5–12 tahun.
                        Mudah digunakan dari rumah, tanpa perlu janji temu klinis yang mahal.
                    </p>

                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="{{ route('pricing') }}"
                           class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#3BBFAD] text-white rounded-2xl font-bold text-lg hover:bg-[#F5A623] transition-all shadow-lg hover:shadow-2xl hover:scale-105">
                            Mulai Skrining Gratis
                            <i data-lucide="arrow-right" class="w-5 h-5"></i>
                        </a>
                        <a href="{{ route('how-it-works') }}"
                           class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1A2E4A] rounded-2xl font-bold text-lg border-2 border-[#3BBFAD] hover:bg-[#3BBFAD]/5 transition-all">
                            Pelajari Lebih Lanjut
                        </a>
                    </div>

                    <div class="flex flex-wrap gap-6 pt-4">
                        @foreach(['Gratis untuk skrining pertama', 'Hasil dalam 15 menit', 'Tervalidasi psikolog'] as $badge)
                            <div class="flex items-center gap-2">
                                <i data-lucide="check-circle" class="w-6 h-6 text-[#6FCF97] flex-shrink-0"></i>
                                <span class="text-sm font-semibold text-[#2D3748]">{{ $badge }}</span>
                            </div>
                        @endforeach
                    </div>
                </div>

                {{-- Gambar Hero --}}
                <div class="relative">
                    <div class="absolute inset-0 bg-gradient-to-br from-[#3BBFAD]/20 to-[#F5A623]/20 rounded-[3rem] transform rotate-3"></div>
                    <img src="https://images.unsplash.com/photo-1654860687488-119a90eafa86?w=800&q=80"
                         alt="Parent and child using tablet together"
                         class="relative rounded-[3rem] shadow-2xl object-cover w-full h-[500px]">
                    <div class="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border-l-4 border-[#F5A623]">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center">
                                <i data-lucide="users" class="w-6 h-6 text-[#F5A623]"></i>
                            </div>
                            <div>
                                <div class="font-mono text-2xl font-bold text-[#1A2E4A]">10,000+</div>
                                <div class="text-sm text-[#2D3748]">Keluarga Terbantu</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute top-20 right-10 w-32 h-32 bg-[#F5A623]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-20 left-10 w-40 h-40 bg-[#3BBFAD]/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>

    {{-- ===================== STATS BAR ===================== --}}
    <section class="py-16 bg-white border-y border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                @foreach($stats as $stat)
                    <div class="text-center">
                        <div class="text-4xl font-bold font-mono" style="color: {{ $stat['color'] }}">
                            {{ $stat['number'] }}
                        </div>
                        <div class="text-[#2D3748] mt-2">{{ $stat['label'] }}</div>
                    </div>
                @endforeach
            </div>
            <p class="text-center text-[#2D3748] mt-8 text-lg">
                Akses terbatas ke layanan profesional — Lexit hadir untuk menjembatani kesenjangan ini
            </p>
        </div>
    </section>

    {{-- ===================== FITUR UNGGULAN ===================== --}}
    <section class="py-24 bg-gradient-to-b from-white to-[#F7F5F2]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-[#1A2E4A] mb-6">Fitur Unggulan Lexit</h2>
                <p class="text-xl text-[#2D3748] max-w-3xl mx-auto">
                    Tiga pilar utama untuk mendukung deteksi dini dan terapi disleksia yang efektif
                </p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                @foreach($features as $feature)
                    <a href="{{ $feature['link'] }}"
                       class="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                        <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                             style="background-color: {{ $feature['color'] }}20">
                            <i data-lucide="{{ $feature['icon'] }}" class="w-8 h-8" style="color: {{ $feature['color'] }}"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-[#1A2E4A] mb-3">{{ $feature['title'] }}</h3>
                        <p class="text-[#2D3748] leading-relaxed">{{ $feature['description'] }}</p>
                        <div class="mt-6 flex items-center gap-2 font-semibold" style="color: {{ $feature['color'] }}">
                            Pelajari Selengkapnya
                            <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
                        </div>
                    </a>
                @endforeach
            </div>
        </div>
    </section>

    {{-- ===================== CARA KERJA ===================== --}}
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-[#1A2E4A] mb-6">Cara Kerja Lexit</h2>
                <p class="text-xl text-[#2D3748] max-w-3xl mx-auto">Proses sederhana dalam 3 langkah untuk membantu anak Anda</p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                @foreach([
                    ['num' => 1, 'title' => 'Skrining',       'desc' => 'Anak mengikuti tes interaktif LexScan selama 15 menit dengan game yang menyenangkan'],
                    ['num' => 2, 'title' => 'Terapi',          'desc' => "Bermain mini-game adaptif di Let's Play yang disesuaikan dengan kebutuhan anak"],
                    ['num' => 3, 'title' => 'Pantau Progres',  'desc' => 'Orang tua memantau perkembangan melalui dashboard dan mendapat rekomendasi lanjutan'],
                ] as $i => $step)
                    <div class="relative text-center">
                        @if($i < 2)
                            <div class="hidden md:block absolute top-10 left-full w-full h-0.5 bg-[#3BBFAD]/30 z-0 -translate-x-1/2"></div>
                        @endif
                        <div class="relative z-10 w-20 h-20 bg-[#3BBFAD] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                            <span class="text-3xl font-bold text-white font-mono">{{ $step['num'] }}</span>
                        </div>
                        <h3 class="text-xl font-bold text-[#1A2E4A] mb-3">{{ $step['title'] }}</h3>
                        <p class="text-[#2D3748]">{{ $step['desc'] }}</p>
                    </div>
                @endforeach
            </div>
            <div class="text-center mt-12">
                <a href="{{ route('how-it-works') }}"
                   class="inline-flex items-center gap-2 px-8 py-4 bg-[#1A2E4A] text-white rounded-2xl font-bold hover:bg-[#3BBFAD] transition-all shadow-lg">
                    Lihat Detail Lengkap
                    <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
            </div>
        </div>
    </section>

    {{-- ===================== TESTIMONI ===================== --}}
    <section class="py-24 bg-gradient-to-b from-[#F7F5F2] to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-[#1A2E4A] mb-6">Apa Kata Mereka</h2>
                <p class="text-xl text-[#2D3748]">Cerita nyata dari keluarga yang telah merasakan manfaat Lexit</p>
            </div>
            <div class="max-w-4xl mx-auto">
                <div class="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                    <div class="flex mb-4">
                        @for($i = 0; $i < $testimonial['rating']; $i++)
                            <i data-lucide="star" class="w-6 h-6 text-[#F5A623] fill-current"></i>
                        @endfor
                    </div>
                    <p class="text-xl text-[#2D3748] leading-relaxed mb-6 italic">"{{ $testimonial['quote'] }}"</p>
                    <div>
                        <div class="font-bold text-xl text-[#1A2E4A]">{{ $testimonial['name'] }}</div>
                        <div class="text-[#3BBFAD]">{{ $testimonial['role'] }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {{-- ===================== TRUST BADGES ===================== --}}
    <section class="py-24 bg-white border-t border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-3 gap-8">
                @foreach([
                    ['icon' => 'shield',    'color' => '#3BBFAD', 'title' => 'Berbasis Metode Orton-Gillingham', 'desc' => 'Menggunakan pendekatan terapi yang telah terbukti secara klinis untuk menangani disleksia'],
                    ['icon' => 'award',     'color' => '#F5A623', 'title' => 'Divalidasi Psikolog Klinis',        'desc' => 'Dikembangkan dan divalidasi bersama psikolog klinis profesional di Indonesia'],
                    ['icon' => 'bar-chart-3','color'=> '#6FCF97', 'title' => 'SUS Score 89 — Excellent',         'desc' => 'Usability terbaik berdasarkan System Usability Scale dengan tingkat kepuasan 90%'],
                ] as $trust)
                    <div class="flex flex-col items-center text-center p-8 rounded-3xl border"
                         style="background: linear-gradient(to bottom right, {{ $trust['color'] }}0D, white); border-color: {{ $trust['color'] }}33">
                        <div class="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                             style="background-color: {{ $trust['color'] }}">
                            <i data-lucide="{{ $trust['icon'] }}" class="w-10 h-10 text-white"></i>
                        </div>
                        <h3 class="text-xl font-bold text-[#1A2E4A] mb-3">{{ $trust['title'] }}</h3>
                        <p class="text-[#2D3748] leading-relaxed">{{ $trust['desc'] }}</p>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    {{-- ===================== CTA ===================== --}}
    <section class="py-24 bg-gradient-to-br from-[#3BBFAD] to-[#2A9989] relative overflow-hidden">
        <div class="absolute inset-0 opacity-10 pointer-events-none">
            <div class="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div class="absolute bottom-10 right-10 w-80 h-80 bg-[#F5A623] rounded-full blur-3xl"></div>
        </div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
                Mulai Perjalanan Belajar Anak Anda Hari Ini
            </h2>
            <p class="text-xl text-white/90 mb-10 leading-relaxed">
                Deteksi dini adalah kunci. Jangan tunggu sampai terlambat.
                Coba skrining gratis sekarang dan berikan anak Anda kesempatan terbaik untuk sukses.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="{{ route('pricing') }}"
                   class="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-[#3BBFAD] rounded-2xl font-bold text-lg hover:bg-[#F5A623] hover:text-white transition-all shadow-2xl hover:scale-105">
                    Mulai Gratis Sekarang
                    <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
                <a href="{{ route('about') }}"
                   class="inline-flex items-center justify-center px-10 py-5 bg-[#1A2E4A] text-white rounded-2xl font-bold text-lg hover:bg-[#F5A623] transition-all shadow-2xl">
                    Pelajari Tentang Kami
                </a>
            </div>
            <div class="grid sm:grid-cols-2 gap-4 mt-8 max-w-lg mx-auto">
                <a href="{{ route('lexscan') }}"
                   class="flex items-center justify-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-2xl font-semibold hover:bg-white/20 transition-all">
                    <i data-lucide="brain" class="w-5 h-5"></i> Coba LexScan
                </a>
                <a href="{{ route('lexplay') }}"
                   class="flex items-center justify-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-2xl font-semibold hover:bg-white/20 transition-all">
                    <i data-lucide="gamepad-2" class="w-5 h-5"></i> Main LexPlay
                </a>
            </div>
            <p class="text-sm text-white/80 mt-8">
                Sesuai dengan UU No. 8/2016 tentang Penyandang Disabilitas • SDG 3, 4, 10
            </p>
        </div>
    </section>

</div>
@endsection`,

  /* ------------------------------------------------------------------ */
  'resources/views/features.blade.php': `@extends('layouts.app')
@section('title', 'Fitur — Lexit Dyslexia Care')

@section('content')
<div class="min-h-screen">

    {{-- Hero --}}
    <section class="bg-gradient-to-br from-[#3BBFAD] to-[#2A9989] text-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-5xl md:text-6xl font-bold mb-6">Fitur Lengkap Lexit</h1>
            <p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Teknologi AI dan pendekatan multi-sensori untuk deteksi dan terapi disleksia yang efektif
            </p>
        </div>
    </section>

    {{-- LexScan Feature --}}
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div class="inline-flex items-center gap-3 px-5 py-3 bg-[#3BBFAD]/10 rounded-2xl mb-6">
                        <i data-lucide="brain" class="w-7 h-7 text-[#3BBFAD]"></i>
                        <span class="font-bold text-xl text-[#3BBFAD]">LexScan</span>
                    </div>
                    <h2 class="text-4xl md:text-5xl font-bold text-[#1A2E4A] mb-6">Skrining Interaktif Berbasis AI</h2>
                    <p class="text-xl text-[#2D3748] leading-relaxed mb-8">
                        LexScan menggunakan algoritma machine learning untuk menganalisis pola jawaban anak
                        dalam serangkaian aktivitas interaktif. Sistem dapat mendeteksi indikasi disleksia
                        dengan akurasi tinggi dalam waktu singkat.
                    </p>
                    <div class="space-y-6">
                        @foreach([
                            ['icon' => 'sparkles',   'title' => 'Analisis Pola Otomatis', 'desc' => 'AI mengidentifikasi kesulitan spesifik seperti pembalikan huruf, kebingungan urutan, dan kecepatan membaca'],
                            ['icon' => 'target',     'title' => 'Hasil Komprehensif',      'desc' => 'Laporan lengkap dengan skor risiko, area kesulitan, dan rekomendasi tindakan lanjutan'],
                            ['icon' => 'file-text',  'title' => 'Laporan PDF',             'desc' => 'Download laporan detail yang dapat dibagikan dengan guru atau psikolog'],
                        ] as $item)
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 w-12 h-12 bg-[#3BBFAD]/10 rounded-xl flex items-center justify-center">
                                    <i data-lucide="{{ $item['icon'] }}" class="w-6 h-6 text-[#3BBFAD]"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-lg text-[#1A2E4A] mb-2">{{ $item['title'] }}</h4>
                                    <p class="text-[#2D3748]">{{ $item['desc'] }}</p>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
                <div class="relative">
                    <div class="absolute inset-0 bg-gradient-to-br from-[#3BBFAD]/20 to-[#F5A623]/20 rounded-[3rem] transform -rotate-3"></div>
                    <img src="https://images.unsplash.com/photo-1646450820480-9545d263e9e6?w=800&q=80"
                         alt="Child using LexScan"
                         class="relative rounded-[3rem] shadow-2xl w-full h-[500px] object-cover">
                    <div class="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border-l-4 border-[#3BBFAD] text-center">
                        <div class="font-mono text-3xl font-bold text-[#3BBFAD]">15 Min</div>
                        <div class="text-sm text-[#2D3748]">Waktu Skrining</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {{-- Let's Play Feature --}}
    <section class="py-24 bg-gradient-to-b from-[#F7F5F2] to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="relative order-2 lg:order-1">
                    <div class="absolute inset-0 bg-gradient-to-br from-[#F5A623]/20 to-[#6FCF97]/20 rounded-[3rem] transform rotate-3"></div>
                    <img src="https://images.unsplash.com/photo-1599666527768-e8cf85741436?w=800&q=80"
                         alt="Child playing educational games"
                         class="relative rounded-[3rem] shadow-2xl w-full h-[500px] object-cover">
                    <div class="absolute -top-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border-l-4 border-[#F5A623]">
                        <div class="flex items-center gap-3">
                            <i data-lucide="gamepad-2" class="w-8 h-8 text-[#F5A623]"></i>
                            <div>
                                <div class="font-mono text-2xl font-bold text-[#F5A623]">20+</div>
                                <div class="text-sm text-[#2D3748]">Mini Games</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="order-1 lg:order-2">
                    <div class="inline-flex items-center gap-3 px-5 py-3 bg-[#F5A623]/10 rounded-2xl mb-6">
                        <i data-lucide="gamepad-2" class="w-7 h-7 text-[#F5A623]"></i>
                        <span class="font-bold text-xl text-[#F5A623]">Let's Play</span>
                    </div>
                    <h2 class="text-4xl md:text-5xl font-bold text-[#1A2E4A] mb-6">Terapi Adaptif yang Menyenangkan</h2>
                    <p class="text-xl text-[#2D3748] leading-relaxed mb-8">
                        Mini-game yang dirancang khusus untuk terapi disleksia menggunakan pendekatan
                        multi-sensori (visual, auditori, kinestetik).
                    </p>
                    <div class="space-y-6">
                        @foreach([
                            ['icon' => 'eye',        'color' => '#F5A623', 'title' => 'Visual',     'desc' => 'Game dengan animasi dan warna yang membantu pengenalan huruf dan kata'],
                            ['icon' => 'headphones', 'color' => '#F5A623', 'title' => 'Auditori',   'desc' => 'Pengucapan kata dan fonetik untuk memperkuat koneksi suara-huruf'],
                            ['icon' => 'hand',       'color' => '#F5A623', 'title' => 'Kinestetik', 'desc' => 'Interaksi drag-and-drop dan tracing huruf untuk pembelajaran motorik'],
                        ] as $item)
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center">
                                    <i data-lucide="{{ $item['icon'] }}" class="w-6 h-6 text-[#F5A623]"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-lg text-[#1A2E4A] mb-2">{{ $item['title'] }}</h4>
                                    <p class="text-[#2D3748]">{{ $item['desc'] }}</p>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </section>

    {{-- CTA --}}
    <section class="py-20 bg-gradient-to-br from-[#1A2E4A] to-[#2A4A6A]">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Siap Mencoba Semua Fitur?</h2>
            <p class="text-xl text-white/90 mb-10">Mulai dengan skrining gratis dan rasakan perbedaannya</p>
            <a href="{{ route('pricing') }}"
               class="inline-flex items-center gap-2 px-10 py-5 bg-[#3BBFAD] text-white rounded-2xl font-bold text-lg hover:bg-[#F5A623] transition-all shadow-2xl hover:scale-105">
                Mulai Gratis Sekarang
            </a>
        </div>
    </section>

</div>
@endsection`,

  /* ------------------------------------------------------------------ */
  'resources/views/pricing.blade.php': `@extends('layouts.app')
@section('title', 'Harga — Lexit Dyslexia Care')

@section('content')
<div class="min-h-screen">

    {{-- Hero --}}
    <section class="bg-gradient-to-br from-[#6FCF97] to-[#5FBF87] text-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-5xl md:text-6xl font-bold mb-6">Pilih Paket yang Tepat</h1>
            <p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Mulai dengan gratis atau unlock semua fitur premium
            </p>
        </div>
    </section>

    {{-- Pricing Cards --}}
    <section class="py-24 bg-gradient-to-b from-white to-[#F7F5F2]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                {{-- Gratis --}}
                <div class="bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-200 hover:border-[#3BBFAD] transition-all">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-14 h-14 bg-[#3BBFAD]/10 rounded-2xl flex items-center justify-center">
                            <i data-lucide="sparkles" class="w-7 h-7 text-[#3BBFAD]"></i>
                        </div>
                        <div>
                            <h3 class="text-3xl font-bold text-[#1A2E4A]">Gratis</h3>
                            <p class="text-sm text-[#2D3748]">Coba sekarang</p>
                        </div>
                    </div>
                    <div class="mb-8">
                        <div class="flex items-baseline gap-2">
                            <span class="text-5xl font-bold text-[#1A2E4A] font-mono">Rp 0</span>
                            <span class="text-[#2D3748]">/ bulan</span>
                        </div>
                        <p class="text-sm text-[#2D3748] mt-2">Tidak perlu kartu kredit</p>
                    </div>
                    <div class="space-y-4 mb-10">
                        @foreach($freePlan as $item)
                            <div class="flex items-start gap-3">
                                <i data-lucide="check" class="w-5 h-5 text-[#6FCF97] flex-shrink-0 mt-1"></i>
                                <span class="text-[#2D3748]">{!! $item !!}</span>
                            </div>
                        @endforeach
                    </div>
                    <button class="w-full py-4 bg-[#3BBFAD] text-white rounded-2xl font-bold text-lg hover:bg-[#2A9989] transition-all shadow-lg">
                        Mulai Gratis
                    </button>
                </div>

                {{-- Premium --}}
                <div class="bg-gradient-to-br from-[#F5A623] to-[#E09420] rounded-3xl p-10 shadow-2xl text-white relative overflow-hidden hover:scale-105 transition-all">
                    <div class="absolute top-6 right-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                        <span class="text-sm font-bold">🔥 Populer</span>
                    </div>
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                            <i data-lucide="crown" class="w-7 h-7 text-white"></i>
                        </div>
                        <div>
                            <h3 class="text-3xl font-bold">Premium</h3>
                            <p class="text-sm text-white/80">Fitur lengkap</p>
                        </div>
                    </div>
                    <div class="mb-8">
                        <div class="flex items-baseline gap-2">
                            <span class="text-5xl font-bold font-mono">Rp 99K</span>
                            <span class="text-white/80">/ bulan</span>
                        </div>
                        <p class="text-sm text-white/80 mt-2">atau Rp 990K/tahun (hemat 17%)</p>
                    </div>
                    <div class="space-y-4 mb-10">
                        @foreach($premiumPlan as $item)
                            <div class="flex items-start gap-3">
                                <i data-lucide="check" class="w-5 h-5 text-white flex-shrink-0 mt-1"></i>
                                <span>{!! $item !!}</span>
                            </div>
                        @endforeach
                    </div>
                    <button class="w-full py-4 bg-white text-[#F5A623] rounded-2xl font-bold text-lg hover:bg-[#1A2E4A] hover:text-white transition-all shadow-2xl">
                        Upgrade ke Premium
                    </button>
                </div>
            </div>
        </div>
    </section>

</div>
@endsection`,

  /* ------------------------------------------------------------------ */
  'resources/views/lexscan.blade.php': `@extends('layouts.app')
@section('title', 'LexScan — Skrining Disleksia AI')

@section('content')
<div class="min-h-screen bg-gradient-to-b from-[#F7F5F2] to-white">

    {{-- Hero --}}
    <section class="bg-gradient-to-br from-[#3BBFAD] to-[#2A9989] text-white py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i data-lucide="brain" class="w-10 h-10 text-white"></i>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-4">LexScan</h1>
            <p class="text-xl text-white/90 max-w-2xl mx-auto">
                Upload tulisan tangan anak dan biarkan AI kami menganalisis pola yang mengindikasikan disleksia
            </p>
        </div>
    </section>

    {{-- Scanner App (Alpine.js) --}}
    <section class="py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
             x-data="lexScan()"
             x-init="init()">

            {{-- Upload Area --}}
            <div x-show="!uploadedImage" class="bg-white rounded-3xl p-12 shadow-xl border-2 border-dashed border-[#3BBFAD]/40 text-center">
                <div class="w-24 h-24 bg-[#3BBFAD]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <i data-lucide="upload" class="w-12 h-12 text-[#3BBFAD]"></i>
                </div>
                <h2 class="text-2xl font-bold text-[#1A2E4A] mb-3">Upload Tulisan Tangan Anak</h2>
                <p class="text-[#2D3748] mb-8">Upload foto tulisan huruf atau kata yang ditulis anak Anda</p>
                <label class="cursor-pointer inline-flex items-center gap-3 px-8 py-4 bg-[#3BBFAD] text-white rounded-2xl font-bold text-lg hover:bg-[#F5A623] transition-all shadow-lg">
                    <i data-lucide="camera" class="w-5 h-5"></i>
                    Pilih Gambar
                    <input type="file" class="hidden" accept="image/*" @change="handleImageUpload($event)">
                </label>
                <p class="text-sm text-[#2D3748] mt-4">Format: JPG, PNG, WEBP. Maksimal 10MB</p>
            </div>

            {{-- Preview + Scan --}}
            <div x-show="uploadedImage && !showResults" class="space-y-6">
                <div class="bg-white rounded-3xl p-8 shadow-xl">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-2xl font-bold text-[#1A2E4A]">Pratinjau Gambar</h2>
                        <button @click="reset()" class="flex items-center gap-2 text-[#2D3748] hover:text-red-500 transition-colors">
                            <i data-lucide="rotate-ccw" class="w-5 h-5"></i>
                            <span>Ganti Gambar</span>
                        </button>
                    </div>
                    <img :src="uploadedImage" alt="Uploaded handwriting" class="w-full max-h-80 object-contain rounded-2xl bg-gray-50">
                </div>
                <div class="text-center">
                    <button @click="handleScan()"
                            :disabled="isScanning"
                            :class="isScanning ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#F5A623] hover:shadow-2xl hover:scale-105'"
                            class="inline-flex items-center gap-3 px-10 py-5 bg-[#3BBFAD] text-white rounded-2xl font-bold text-lg transition-all shadow-lg">
                        <template x-if="!isScanning">
                            <span class="flex items-center gap-2">
                                <i data-lucide="brain" class="w-5 h-5"></i>
                                Mulai Analisis AI
                            </span>
                        </template>
                        <template x-if="isScanning">
                            <span class="flex items-center gap-2">
                                <svg class="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                </svg>
                                Menganalisis Tulisan...
                            </span>
                        </template>
                    </button>
                    <p class="text-sm text-[#2D3748] mt-3">Proses analisis membutuhkan sekitar 3 detik</p>
                </div>
            </div>

            {{-- Hasil Analisis --}}
            <div x-show="showResults" class="space-y-6">
                {{-- Risk Summary --}}
                <div class="bg-white rounded-3xl p-8 shadow-xl">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-2xl font-bold text-[#1A2E4A]">Hasil Analisis AI</h2>
                        <span class="px-4 py-2 bg-[#F5A623]/20 rounded-full text-sm font-bold text-[#F5A623]" x-text="'Risiko ' + riskLevel"></span>
                    </div>
                    <div class="grid md:grid-cols-3 gap-6 mb-8">
                        <div class="text-center p-6 bg-[#3BBFAD]/5 rounded-2xl border border-[#3BBFAD]/20">
                            <div class="text-4xl font-bold font-mono text-[#3BBFAD] mb-2" x-text="riskScore + '%'"></div>
                            <div class="text-sm text-[#2D3748]">Indikasi Risiko</div>
                        </div>
                        <div class="text-center p-6 bg-[#F5A623]/5 rounded-2xl border border-[#F5A623]/20">
                            <div class="text-4xl font-bold font-mono text-[#F5A623] mb-2" x-text="scanResults.filter(r => !r.isCorrect).length"></div>
                            <div class="text-sm text-[#2D3748]">Huruf Bermasalah</div>
                        </div>
                        <div class="text-center p-6 bg-[#6FCF97]/5 rounded-2xl border border-[#6FCF97]/20">
                            <div class="text-4xl font-bold font-mono text-[#6FCF97] mb-2" x-text="scanResults.filter(r => r.isCorrect).length"></div>
                            <div class="text-sm text-[#2D3748]">Huruf Benar</div>
                        </div>
                    </div>

                    {{-- Per-letter results --}}
                    <div class="space-y-4">
                        <template x-for="result in scanResults" :key="result.letter">
                            <div class="flex items-start gap-4 p-4 rounded-2xl border"
                                 :class="result.isCorrect ? 'bg-[#6FCF97]/5 border-[#6FCF97]/30' : 'bg-red-50 border-red-200'">
                                <div class="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-2xl flex-shrink-0"
                                     :class="result.isCorrect ? 'bg-[#6FCF97] text-white' : 'bg-red-500 text-white'"
                                     x-text="result.letter"></div>
                                <div class="flex-1">
                                    <div class="flex items-center gap-2 mb-1">
                                        <span class="font-bold text-[#1A2E4A]" x-text="'Kepercayaan: ' + result.confidence + '%'"></span>
                                        <i :data-lucide="result.isCorrect ? 'check-circle' : 'alert-circle'"
                                           :class="result.isCorrect ? 'text-[#6FCF97]' : 'text-red-500'"
                                           class="w-5 h-5"></i>
                                    </div>
                                    <p class="text-sm text-[#2D3748]" x-text="result.feedback"></p>
                                    <div class="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div class="h-full rounded-full transition-all"
                                             :class="result.isCorrect ? 'bg-[#6FCF97]' : 'bg-red-500'"
                                             :style="'width: ' + result.confidence + '%'"></div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>

                {{-- Action Buttons --}}
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button @click="reset()"
                            class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1A2E4A] rounded-2xl font-bold border-2 border-[#3BBFAD] hover:bg-[#3BBFAD]/5 transition-all">
                        <i data-lucide="rotate-ccw" class="w-5 h-5"></i>
                        Scan Baru
                    </button>
                    <a href="{{ route('pricing') }}"
                       class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#3BBFAD] text-white rounded-2xl font-bold hover:bg-[#F5A623] transition-all shadow-lg">
                        <i data-lucide="download" class="w-5 h-5"></i>
                        Unduh Laporan PDF
                    </a>
                </div>
            </div>
        </div>
    </section>
</div>
@endsection

@push('scripts')
<script>
function lexScan() {
    return {
        uploadedImage: null,
        isScanning: false,
        scanResults: [],
        showResults: false,

        init() {
            // Re-init Lucide icons setelah Alpine merender
            this.$nextTick(() => lucide.createIcons());
        },

        handleImageUpload(event) {
            const file = event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (e) => {
                this.uploadedImage = e.target.result;
                this.showResults = false;
                this.scanResults = [];
                this.$nextTick(() => lucide.createIcons());
            };
            reader.readAsDataURL(file);
        },

        handleScan() {
            this.isScanning = true;
            setTimeout(() => {
                this.scanResults = [
                    { letter: 'A', confidence: 95, isCorrect: true,  feedback: 'Sempurna! Huruf A ditulis dengan baik dan jelas.' },
                    { letter: 'B', confidence: 78, isCorrect: true,  feedback: 'Bagus! Bentuk huruf B sudah benar, tapi bisa lebih rapi.' },
                    { letter: 'D', confidence: 65, isCorrect: false, feedback: 'Perhatian: Huruf D terlihat seperti B — pola umum pada disleksia.' },
                    { letter: 'P', confidence: 72, isCorrect: false, feedback: 'Perhatian: Huruf P dan Q sering tertukar.' },
                    { letter: 'S', confidence: 88, isCorrect: true,  feedback: 'Bagus sekali! Huruf S ditulis dengan kurva yang baik.' },
                ];
                this.isScanning = false;
                this.showResults = true;
                this.$nextTick(() => lucide.createIcons());
            }, 3000);
        },

        reset() {
            this.uploadedImage = null;
            this.scanResults = [];
            this.showResults = false;
            this.$nextTick(() => lucide.createIcons());
        },

        get riskScore() {
            if (!this.scanResults.length) return 0;
            return Math.round((this.scanResults.filter(r => !r.isCorrect).length / this.scanResults.length) * 100);
        },

        get riskLevel() {
            const s = this.riskScore;
            return s >= 60 ? 'Tinggi' : s >= 30 ? 'Sedang' : 'Rendah';
        }
    };
}
</script>
@endpush`,

  /* ------------------------------------------------------------------ */
  'resources/views/lexplay.blade.php': `@extends('layouts.app')
@section('title', 'LexPlay — Game Terapi Disleksia')

@section('content')
<div class="min-h-screen bg-gradient-to-b from-[#F7F5F2] to-white">

    {{-- Hero --}}
    <section class="bg-gradient-to-br from-[#F5A623] to-[#E09420] text-white py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i data-lucide="gamepad-2" class="w-10 h-10 text-white"></i>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-4">LexPlay</h1>
            <p class="text-xl text-white/90 max-w-2xl mx-auto">
                Susun huruf-huruf berikut menjadi kata yang benar. Menyenangkan dan efektif untuk terapi disleksia!
            </p>
        </div>
    </section>

    {{-- Game (Alpine.js) --}}
    <section class="py-16">
        <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8"
             x-data="lexPlay(@json($challenges))"
             x-init="init()">

            {{-- Score Bar --}}
            <div class="flex items-center justify-between mb-8 bg-white rounded-2xl p-4 shadow-md">
                <div class="flex items-center gap-2">
                    <i data-lucide="trophy" class="w-6 h-6 text-[#F5A623]"></i>
                    <span class="font-bold text-[#1A2E4A]">Skor: </span>
                    <span class="font-mono font-bold text-2xl text-[#F5A623]" x-text="score"></span>
                </div>
                <div class="flex items-center gap-2">
                    <span class="text-sm text-[#2D3748]">Level</span>
                    <span class="font-mono font-bold text-lg text-[#1A2E4A]" x-text="(currentLevel + 1) + ' / ' + challenges.length"></span>
                </div>
                <div class="flex gap-1">
                    <template x-for="i in challenges.length" :key="i">
                        <div class="w-3 h-3 rounded-full"
                             :class="(i - 1) < currentLevel ? 'bg-[#6FCF97]' : (i - 1) === currentLevel ? 'bg-[#F5A623]' : 'bg-gray-300'"></div>
                    </template>
                </div>
            </div>

            {{-- Game Card --}}
            <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">

                {{-- Challenge Header --}}
                <div class="bg-gradient-to-br from-[#F5A623] to-[#E09420] p-8 text-center">
                    <div class="text-8xl mb-4" x-text="currentChallenge.image"></div>
                    <div x-show="showHint" x-transition class="text-white/90 text-lg mt-2" x-text="currentChallenge.hint"></div>
                    <button @click="showHint = !showHint"
                            class="mt-3 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
                        <i data-lucide="help-circle" class="w-4 h-4"></i>
                        <span x-text="showHint ? 'Sembunyikan Petunjuk' : 'Tampilkan Petunjuk'"></span>
                    </button>
                </div>

                <div class="p-8">
                    {{-- Answer Slots --}}
                    <p class="text-center text-sm font-semibold text-[#2D3748] mb-4 uppercase tracking-widest">Susun Huruf di Sini</p>
                    <div class="flex justify-center gap-3 mb-8 flex-wrap">
                        <template x-for="(slot, idx) in answerSlots" :key="idx">
                            <button @click="handleSlotClick(idx)"
                                    :class="slot ? 'bg-[#3BBFAD] text-white shadow-lg scale-105' : 'bg-gray-100 border-2 border-dashed border-gray-300 text-gray-400'"
                                    class="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-2xl transition-all hover:scale-110">
                                <span x-text="slot || '?'"></span>
                            </button>
                        </template>
                    </div>

                    {{-- Shuffled Letters --}}
                    <p class="text-center text-sm font-semibold text-[#2D3748] mb-4 uppercase tracking-widest">Huruf Tersedia</p>
                    <div class="flex justify-center gap-3 mb-8 flex-wrap">
                        <template x-for="(letter, idx) in shuffledLetters" :key="idx">
                            <button @click="handleLetterClick(idx)"
                                    :disabled="letter === ''"
                                    :class="{
                                        'opacity-0 pointer-events-none': letter === '',
                                        'bg-[#F5A623] text-white shadow-xl scale-110 ring-4 ring-[#F5A623]/50': selectedLetter === idx,
                                        'bg-[#1A2E4A] text-white hover:bg-[#F5A623] hover:scale-110': letter !== '' && selectedLetter !== idx
                                    }"
                                    class="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-2xl transition-all shadow-md">
                                <span x-text="letter"></span>
                            </button>
                        </template>
                    </div>

                    {{-- Success State --}}
                    <div x-show="isCorrect" x-transition class="text-center py-6">
                        <div class="text-6xl mb-4">🎉</div>
                        <h3 class="text-2xl font-bold text-[#1A2E4A] mb-2">Luar Biasa!</h3>
                        <p class="text-[#2D3748] mb-6">Kamu berhasil menyusun kata dengan benar!</p>
                        <div class="flex gap-4 justify-center">
                            <button @click="resetLevel()"
                                    class="flex items-center gap-2 px-6 py-3 bg-white text-[#1A2E4A] rounded-2xl font-bold border-2 border-[#3BBFAD] hover:bg-[#3BBFAD]/5 transition-all">
                                <i data-lucide="rotate-ccw" class="w-5 h-5"></i>
                                Ulangi
                            </button>
                            <template x-if="currentLevel < challenges.length - 1">
                                <button @click="nextLevel()"
                                        class="flex items-center gap-2 px-6 py-3 bg-[#3BBFAD] text-white rounded-2xl font-bold hover:bg-[#F5A623] transition-all shadow-lg">
                                    Level Berikutnya
                                    <i data-lucide="arrow-right" class="w-5 h-5"></i>
                                </button>
                            </template>
                            <template x-if="currentLevel === challenges.length - 1">
                                <button @click="restartGame()"
                                        class="flex items-center gap-2 px-6 py-3 bg-[#6FCF97] text-white rounded-2xl font-bold hover:bg-[#5FBF87] transition-all shadow-lg">
                                    🏆 Main Lagi
                                </button>
                            </template>
                        </div>
                    </div>

                    {{-- Controls --}}
                    <div x-show="!isCorrect" class="flex justify-center gap-4">
                        <button @click="resetLevel()"
                                class="flex items-center gap-2 px-5 py-3 bg-gray-100 text-[#2D3748] rounded-xl font-semibold hover:bg-gray-200 transition-all">
                            <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
                            Reset
                        </button>
                        <button @click="showHint = true"
                                class="flex items-center gap-2 px-5 py-3 bg-[#F5A623]/10 text-[#F5A623] rounded-xl font-semibold hover:bg-[#F5A623]/20 transition-all">
                            <i data-lucide="help-circle" class="w-4 h-4"></i>
                            Petunjuk
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
@endsection

@push('scripts')
<script>
function lexPlay(challengesData) {
    return {
        challenges: challengesData,
        currentLevel: 0,
        shuffledLetters: [],
        answerSlots: [],
        selectedLetter: null,
        isCorrect: false,
        showHint: false,
        score: 0,
        attempts: 0,

        get currentChallenge() {
            return this.challenges[this.currentLevel];
        },

        init() {
            this.resetLevel();
        },

        resetLevel() {
            const word = this.currentChallenge.word;
            const letters = word.split('');
            // Fisher-Yates shuffle
            const shuffled = [...letters];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            this.shuffledLetters = shuffled;
            this.answerSlots = new Array(word.length).fill(null);
            this.selectedLetter = null;
            this.isCorrect = false;
            this.showHint = false;
            this.attempts = 0;
            this.$nextTick(() => lucide.createIcons());
        },

        handleLetterClick(index) {
            if (this.shuffledLetters[index] === '') return;
            this.selectedLetter = index;
        },

        handleSlotClick(slotIndex) {
            if (this.selectedLetter === null) {
                // Jika slot ada isinya, kembalikan ke bank huruf
                if (this.answerSlots[slotIndex] !== null) {
                    const letter = this.answerSlots[slotIndex];
                    const emptyIdx = this.shuffledLetters.indexOf('');
                    if (emptyIdx !== -1) {
                        this.shuffledLetters = this.shuffledLetters.map((l, i) => i === emptyIdx ? letter : l);
                    }
                    this.answerSlots = this.answerSlots.map((s, i) => i === slotIndex ? null : s);
                }
                return;
            }

            const letter = this.shuffledLetters[this.selectedLetter];
            if (!letter) return;

            // Jika slot sudah terisi, swap ke bank huruf
            if (this.answerSlots[slotIndex] !== null) {
                const existing = this.answerSlots[slotIndex];
                const emptyIdx = this.shuffledLetters.indexOf('');
                if (emptyIdx !== -1) {
                    this.shuffledLetters = this.shuffledLetters.map((l, i) => i === emptyIdx ? existing : l);
                }
            }

            // Tempatkan huruf di slot
            this.answerSlots = this.answerSlots.map((s, i) => i === slotIndex ? letter : s);
            this.shuffledLetters = this.shuffledLetters.map((l, i) => i === this.selectedLetter ? '' : l);
            this.selectedLetter = null;
            this.attempts++;

            // Cek jawaban jika semua slot terisi
            if (!this.answerSlots.includes(null)) {
                this.checkAnswer();
            }
        },

        checkAnswer() {
            if (this.answerSlots.join('') === this.currentChallenge.word) {
                this.isCorrect = true;
                this.score += Math.max(50 - (this.attempts - this.currentChallenge.word.length) * 5, 10);
                this.$nextTick(() => lucide.createIcons());
            }
        },

        nextLevel() {
            if (this.currentLevel < this.challenges.length - 1) {
                this.currentLevel++;
                this.resetLevel();
            }
        },

        restartGame() {
            this.currentLevel = 0;
            this.score = 0;
            this.resetLevel();
        }
    };
}
</script>
@endpush`,

  /* ------------------------------------------------------------------ */
  'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            colors: {
                'lexit-teal':     '#3BBFAD',
                'lexit-teal-dark':'#2A9989',
                'lexit-amber':    '#F5A623',
                'lexit-navy':     '#1A2E4A',
                'lexit-mint':     '#6FCF97',
                'lexit-offwhite': '#F7F5F2',
                'lexit-charcoal': '#2D3748',
            },
            fontFamily: {
                sans:    ['Lexend', 'system-ui', 'sans-serif'],
                heading: ['Nunito', 'system-ui', 'sans-serif'],
                mono:    ['DM Mono', 'monospace'],
            },
            borderRadius: {
                '3xl': '1.5rem',
                '4xl': '2rem',
            },
            boxShadow: {
                'lexit': '0 4px 24px -4px rgba(59, 191, 173, 0.3)',
            },
        },
    },
    plugins: [],
};`,

  /* ------------------------------------------------------------------ */
  'resources/css/app.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    /* Typography defaults — sesuai design system Lexit */
    body {
        font-family: 'Lexend', system-ui, sans-serif;
        background-color: #F7F5F2;
        color: #2D3748;
        letter-spacing: 0.03em;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Nunito', system-ui, sans-serif;
    }

    .font-mono, code, pre {
        font-family: 'DM Mono', monospace;
    }
}

@layer components {
    /* Button utilities */
    .btn-primary {
        @apply px-6 py-3 bg-[#3BBFAD] text-white rounded-2xl font-semibold
               hover:bg-[#F5A623] transition-all shadow-lg hover:shadow-xl hover:scale-105;
    }

    .btn-outline {
        @apply px-6 py-3 bg-white text-[#1A2E4A] rounded-2xl font-semibold
               border-2 border-[#3BBFAD] hover:bg-[#3BBFAD]/5 transition-all;
    }

    /* Card base */
    .card {
        @apply bg-white rounded-3xl p-8 shadow-xl border border-gray-100;
    }

    /* Section container */
    .section-container {
        @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
    }
}`,
};

/* =====================================================================
   UI CONFIG — file tree untuk sidebar navigasi
   ===================================================================== */

interface FileItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  category: string;
}

const FILE_TREE: FileItem[] = [
  { id: 'setup',                                          label: '📋 Setup & Instalasi',             icon: <Settings size={14} />,    category: 'Mulai Di Sini' },
  { id: 'routes/web.php',                                label: 'routes/web.php',                   icon: <FileCode size={14} />,    category: 'Backend' },
  { id: 'app/Http/Controllers/PageController.php',       label: 'PageController.php',               icon: <FileCode size={14} />,    category: 'Backend' },
  { id: 'resources/views/layouts/app.blade.php',        label: 'layouts/app.blade.php',            icon: <Layout size={14} />,      category: 'Views' },
  { id: 'resources/views/partials/navbar.blade.php',    label: 'partials/navbar.blade.php',        icon: <Navigation size={14} />, category: 'Views' },
  { id: 'resources/views/partials/footer.blade.php',    label: 'partials/footer.blade.php',        icon: <Footprints size={14} />,  category: 'Views' },
  { id: 'resources/views/home.blade.php',               label: 'home.blade.php',                   icon: <Home size={14} />,        category: 'Views' },
  { id: 'resources/views/features.blade.php',           label: 'features.blade.php',               icon: <Star size={14} />,        category: 'Views' },
  { id: 'resources/views/pricing.blade.php',            label: 'pricing.blade.php',                icon: <Tag size={14} />,         category: 'Views' },
  { id: 'resources/views/lexscan.blade.php',            label: 'lexscan.blade.php',                icon: <Brain size={14} />,       category: 'Views' },
  { id: 'resources/views/lexplay.blade.php',            label: 'lexplay.blade.php',                icon: <Gamepad2 size={14} />,    category: 'Views' },
  { id: 'tailwind.config.js',                           label: 'tailwind.config.js',               icon: <Settings size={14} />,    category: 'Config' },
  { id: 'resources/css/app.css',                        label: 'resources/css/app.css',            icon: <FileCode size={14} />,    category: 'Config' },
];

/* =====================================================================
   MAIN COMPONENT
   ===================================================================== */

export function LaravelGuide() {
  const [activeFile, setActiveFile] = useState('setup');
  const [copied, setCopied] = useState(false);

  const currentContent = FILE_CONTENTS[activeFile] ?? '// File tidak ditemukan';
  const isSetup = activeFile === 'setup';

  const handleCopy = () => {
    navigator.clipboard.writeText(currentContent).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const categories = [...new Set(FILE_TREE.map(f => f.category))];

  return (
    <div className="min-h-screen bg-[#F7F5F2]">

      {/* Header */}
      <div className="bg-gradient-to-br from-[#1A2E4A] to-[#2A4A6A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-[#3BBFAD]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <FileCode size={32} className="text-[#3BBFAD]" />
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-[#F5A623]/20 rounded-full text-xs font-bold text-[#F5A623] mb-2 uppercase tracking-widest">
                Referensi Lokal
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                Panduan Migrasi Laravel + Blade
              </h1>
              <p className="text-white/80 text-lg max-w-3xl">
                Struktur lengkap project <span className="text-[#3BBFAD] font-semibold">Lexit</span> menggunakan 
                Laravel 11 + Blade + Tailwind CSS + Alpine.js. Klik file di sidebar kiri, lalu salin kodenya ke project lokal Anda.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                {['Laravel 11', 'Blade Templates', 'Tailwind CSS v3', 'Alpine.js v3', 'Lucide Icons CDN'].map(t => (
                  <span key={t} className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-white/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6">

          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0 hidden md:block">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden sticky top-24">
              <div className="px-4 py-3 bg-[#1A2E4A] text-white text-xs font-bold uppercase tracking-widest">
                File Structure
              </div>
              <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
                {categories.map(cat => (
                  <div key={cat}>
                    <div className="px-4 py-2 text-xs font-bold text-[#F5A623] uppercase tracking-wider bg-gray-50 border-b border-gray-100">
                      {cat}
                    </div>
                    {FILE_TREE.filter(f => f.category === cat).map(file => (
                      <button
                        key={file.id}
                        onClick={() => setActiveFile(file.id)}
                        className={`w-full text-left px-4 py-2.5 flex items-center gap-2 text-sm transition-colors border-b border-gray-50 ${
                          activeFile === file.id
                            ? 'bg-[#3BBFAD]/10 text-[#3BBFAD] font-semibold border-l-2 border-[#3BBFAD]'
                            : 'text-[#2D3748] hover:bg-gray-50 hover:text-[#3BBFAD]'
                        }`}
                      >
                        <span className="text-[#3BBFAD] flex-shrink-0">{file.icon}</span>
                        <span className="truncate">{file.label}</span>
                        {activeFile === file.id && <ChevronRight size={12} className="ml-auto flex-shrink-0" />}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Code Viewer */}
          <main className="flex-1 min-w-0">

            {/* Mobile file selector */}
            <div className="md:hidden mb-4">
              <select
                value={activeFile}
                onChange={e => setActiveFile(e.target.value)}
                className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-sm font-semibold text-[#1A2E4A] shadow-sm"
              >
                {categories.map(cat => (
                  <optgroup key={cat} label={cat}>
                    {FILE_TREE.filter(f => f.category === cat).map(file => (
                      <option key={file.id} value={file.id}>{file.label}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            {/* File Header */}
            <div className="bg-white rounded-t-2xl border border-gray-200 px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-sm font-mono text-[#2D3748] font-semibold">
                  {activeFile === 'setup' ? 'SETUP.md' : activeFile}
                </span>
              </div>
              <button
                onClick={handleCopy}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                  copied
                    ? 'bg-[#6FCF97]/20 text-[#6FCF97]'
                    : 'bg-[#3BBFAD]/10 text-[#3BBFAD] hover:bg-[#3BBFAD]/20'
                }`}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? 'Tersalin!' : 'Salin Kode'}
              </button>
            </div>

            {/* Code Block */}
            <div className="bg-[#0D1117] rounded-b-2xl border border-t-0 border-gray-200 overflow-auto shadow-2xl">
              {isSetup ? (
                // Setup page rendered as styled text
                <div className="p-6 text-sm font-mono text-gray-300 whitespace-pre-wrap leading-relaxed">
                  {currentContent.split('\n').map((line, i) => {
                    if (line.startsWith('## ')) return (
                      <div key={i} className="text-[#F5A623] font-bold mt-6 mb-2 text-base">{line.replace('## ', '')}</div>
                    );
                    if (line.startsWith('# ')) return (
                      <div key={i} className="text-[#3BBFAD] font-bold mb-4 text-lg">{line.replace('# ', '')}</div>
                    );
                    if (line.startsWith('lexit-app/') || line.includes('├──') || line.includes('│') || line.includes('└──')) return (
                      <div key={i} className="text-[#6FCF97] font-mono">{line}</div>
                    );
                    if (line.startsWith('composer') || line.startsWith('npm') || line.startsWith('npx') || line.startsWith('php') || line.startsWith('import') || line.startsWith('cd')) return (
                      <div key={i} className="text-[#79C0FF] bg-white/5 px-2 rounded my-0.5">{line}</div>
                    );
                    return <div key={i} className="text-gray-400">{line}</div>;
                  })}
                </div>
              ) : (
                // Code rendered as-is
                <pre className="p-6 text-sm font-mono text-gray-300 overflow-x-auto leading-relaxed">
                  <code>{currentContent}</code>
                </pre>
              )}
            </div>

            {/* Notes */}
            {activeFile === 'resources/views/lexscan.blade.php' && (
              <div className="mt-4 bg-[#F5A623]/10 rounded-2xl p-5 border border-[#F5A623]/30">
                <div className="flex items-start gap-3">
                  <Info size={20} className="text-[#F5A623] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#1A2E4A] mb-1">Catatan: LexScan Alpine.js</p>
                    <p className="text-sm text-[#2D3748]">
                      File ini menggunakan <code className="bg-white px-1.5 py-0.5 rounded text-[#3BBFAD]">@push('scripts')</code> untuk 
                      menempatkan JavaScript Alpine di bawah body. Pastikan layout Anda memiliki 
                      <code className="bg-white px-1.5 py-0.5 rounded text-[#3BBFAD]">@stack('scripts')</code> sebelum tag penutup body.
                      Scan AI adalah simulasi — untuk produksi, hubungkan ke endpoint backend nyata.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeFile === 'resources/views/lexplay.blade.php' && (
              <div className="mt-4 bg-[#3BBFAD]/10 rounded-2xl p-5 border border-[#3BBFAD]/30">
                <div className="flex items-start gap-3">
                  <Info size={20} className="text-[#3BBFAD] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#1A2E4A] mb-1">Catatan: LexPlay Alpine.js + Blade</p>
                    <p className="text-sm text-[#2D3748]">
                      Data <code className="bg-white px-1.5 py-0.5 rounded text-[#3BBFAD]">$challenges</code> dari Controller 
                      di-pass ke Alpine menggunakan <code className="bg-white px-1.5 py-0.5 rounded text-[#3BBFAD]">@json($challenges)</code>. 
                      Alpine reaktif — perubahan array menggunakan spread operator 
                      <code className="bg-white px-1.5 py-0.5 rounded text-[#3BBFAD]">[...arr]</code> agar UI ter-update otomatis.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeFile === 'setup' && (
              <div className="mt-4 bg-[#6FCF97]/10 rounded-2xl p-5 border border-[#6FCF97]/30">
                <div className="flex items-start gap-3">
                  <HelpCircle size={20} className="text-[#6FCF97] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#1A2E4A] mb-1">Tips Migrasi</p>
                    <ul className="text-sm text-[#2D3748] space-y-1 list-disc list-inside">
                      <li>Mulai dari <strong>Setup</strong> → <strong>routes/web.php</strong> → <strong>PageController</strong> → <strong>layouts/app.blade.php</strong></li>
                      <li>Buat folder <code className="bg-white px-1 rounded">resources/views/partials/</code> dan <code className="bg-white px-1 rounded">resources/views/layouts/</code> secara manual</li>
                      <li>Halaman <strong>how-it-works.blade.php</strong> dan <strong>about.blade.php</strong> mengikuti pola yang sama dengan features.blade.php</li>
                      <li>Gunakan <code className="bg-white px-1 rounded">php artisan route:list</code> untuk verifikasi semua route terdaftar</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
