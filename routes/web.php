<?php
// routes/web.php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\LexScanController;
use App\Http\Controllers\LexPlayController;

// ==========================================
// Public Routes — Halaman Statis
// ==========================================
Route::get('/', fn() => Inertia::render('Home'))->name('home');
Route::get('/features', fn() => Inertia::render('Features'))->name('features');
Route::get('/how-it-works', fn() => Inertia::render('HowItWorks'))->name('how-it-works');
Route::get('/about', fn() => Inertia::render('About'))->name('about');
Route::get('/pricing', fn() => Inertia::render('Pricing'))->name('pricing');

// ==========================================
// LexScan Routes
// ==========================================
Route::get('/lexscan', [LexScanController::class, 'index'])->name('lexscan');
Route::post('/lexscan/analyze', [LexScanController::class, 'analyze'])->name('lexscan.analyze');
Route::post('/lexscan/download-pdf', [LexScanController::class, 'downloadPdf'])->name('lexscan.download-pdf');

// ==========================================
// LexPlay Routes
// ==========================================
Route::get('/lexplay', [LexPlayController::class, 'index'])->name('lexplay');
Route::post('/lexplay/save-score', [LexPlayController::class, 'saveScore'])->name('lexplay.save-score');

// ==========================================
// Auth Routes (dari Breeze)
// ==========================================
require __DIR__.'/auth.php';