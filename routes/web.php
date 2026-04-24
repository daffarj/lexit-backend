<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\LexScanController;
use App\Http\Controllers\LexPlayController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ChildController;

// Public routes
Route::get('/',            fn() => Inertia::render('Home'))->name('home');
Route::get('/features',    fn() => Inertia::render('Features'))->name('features');
Route::get('/how-it-works',fn() => Inertia::render('HowItWorks'))->name('how-it-works');
Route::get('/about',       fn() => Inertia::render('About'))->name('about');
Route::get('/pricing',     fn() => Inertia::render('Pricing'))->name('pricing');

// LexScan — public (bisa dipakai tanpa login, tapi tanpa simpan ke DB)
Route::get('/lexscan',              [LexScanController::class, 'index'])->name('lexscan');
Route::post('/lexscan/analyze',     [LexScanController::class, 'analyze'])->name('lexscan.analyze');
Route::post('/lexscan/download-pdf',[LexScanController::class, 'downloadPdf'])->name('lexscan.download-pdf');

// LexPlay — public
Route::get('/lexplay',              [LexPlayController::class, 'index'])->name('lexplay');
Route::post('/lexplay/save-score',  [LexPlayController::class, 'saveScore'])->name('lexplay.save-score');

// Protected routes — harus login
Route::middleware('auth')->group(function () {
    // Dashboard (parent mode)
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Child management
    Route::post('/children',              [ChildController::class, 'store'])->name('children.store');
    Route::delete('/children/{child}',    [ChildController::class, 'destroy'])->name('children.destroy');
    Route::post('/children/{child}/switch',[ChildController::class, 'switchToChild'])->name('children.switch');
    Route::post('/mode/parent',           [ChildController::class, 'switchToParent'])->name('mode.parent');
});

require __DIR__.'/auth.php';