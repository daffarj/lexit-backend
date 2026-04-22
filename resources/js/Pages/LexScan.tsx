// resources/js/Pages/LexScan.tsx
//
// PERUBAHAN DARI VERSI LAMA:
// 1. Export → `export default function` (wajib untuk Inertia)
// 2. Import Link & useForm dari '@inertiajs/react'
// 3. handleImageUpload → tetap sama (hanya untuk preview lokal)
// 4. handleScan → diganti useForm + post() ke '/lexscan/analyze'
// 5. isScanning → diganti `processing` dari useForm
// 6. scanResults & showResults → dari props controller, bukan state
// 7. handleReset → reset form + router.visit untuk reload halaman bersih
// 8. Dibungkus AppLayout

import { useState } from "react";
import { Link, useForm, router } from "@inertiajs/react"; // ← BARU
import {
    Upload,
    Camera,
    Brain,
    CheckCircle,
    AlertCircle,
    Download,
    RotateCcw,
    Sparkles,
} from "lucide-react";
import AppLayout from "@/Layouts/AppLayout"; // ← BARU

// ─────────────────────────────────────────
// Types
// ─────────────────────────────────────────

interface ScanResult {
    letter: string;
    confidence: number;
    isCorrect: boolean;
    feedback: string;
}

// Props yang dikirim dari LexScanController@index / @analyze
interface Props {
    scanResults: ScanResult[] | null;
    overallScore: number | null;
    dyslexiaIndicators: string[] | null;
    parentFeedback: string | null;
}

// ─────────────────────────────────────────
// Component
// ─────────────────────────────────────────

export default function LexScan({
    // ← UBAH: tambah `default`, terima props
    scanResults,
    overallScore,
    dyslexiaIndicators,
    parentFeedback,
}: Props) {
    // Preview gambar — tetap state lokal karena hanya untuk tampilan
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);

    // showResults ditentukan dari props, bukan state
    const showResults = scanResults !== null && scanResults.length > 0;

    // ── Inertia Form ──────────────────────────────
    // `processing` menggantikan `isScanning`
    // `data`, `setData` mengelola file yang akan dikirim ke backend
    const { data, setData, post, processing, reset } = useForm<{
        image: File | null;
    }>({
        image: null,
    });

    // ── Handlers ─────────────────────────────────

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Simpan file ke Inertia form (untuk dikirim ke backend)
            setData("image", file);

            // Preview lokal — tetap pakai FileReader, tidak berubah
            const reader = new FileReader();
            reader.onload = (event) => {
                setUploadedImage(event.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleScan = () => {
        // Kirim form ke Laravel controller via POST /lexscan/analyze
        // `processing` otomatis true saat request berjalan
        post("/lexscan/analyze", {
            forceFormData: true, // ← wajib untuk upload file
        });
    };

    const handleReset = () => {
        // Reset state lokal
        setUploadedImage(null);
        reset(); // reset Inertia form

        // Reload halaman bersih (hapus props hasil scan)
        router.visit("/lexscan", { preserveScroll: false });
    };

    // ─────────────────────────────────────────
    // JSX — sama persis dengan versi lama
    // kecuali: isScanning → processing
    // ─────────────────────────────────────────

    return (
        <AppLayout>
            {" "}
            {/* ← BARU: bungkus dengan AppLayout */}
            <div className="min-h-screen bg-gradient-to-b from-[#F7F5F2] to-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#3BBFAD]/10 rounded-2xl mb-6">
                            <Brain className="text-[#3BBFAD]" size={28} />
                            <span className="font-bold text-xl text-[#3BBFAD]">
                                LexScan
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-[#1A2E4A] mb-6">
                            Scan Tulisan Tangan
                        </h1>
                        <p className="text-xl text-[#2D3748] max-w-3xl mx-auto">
                            Upload foto tulisan anak Anda dan AI akan
                            menganalisis apakah huruf sudah ditulis dengan benar
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Upload Section */}
                        <div>
                            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-dashed border-[#3BBFAD]/30">
                                {!uploadedImage ? (
                                    <div className="text-center py-12">
                                        <div className="w-24 h-24 bg-[#3BBFAD]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <Upload
                                                className="text-[#3BBFAD]"
                                                size={48}
                                            />
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#1A2E4A] mb-4">
                                            Upload Foto Tulisan
                                        </h3>
                                        <p className="text-[#2D3748] mb-8">
                                            Foto huruf yang ditulis anak di
                                            kertas atau buku tulis
                                        </p>

                                        <label className="inline-flex items-center gap-2 px-8 py-4 bg-[#3BBFAD] text-white rounded-2xl font-bold text-lg hover:bg-[#2A9989] transition-all shadow-lg cursor-pointer">
                                            <Camera size={20} />
                                            Pilih Foto
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                                className="hidden"
                                            />
                                        </label>

                                        <p className="text-sm text-[#2D3748] mt-6">
                                            Format: JPG, PNG • Maksimal 10MB
                                        </p>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="relative mb-6">
                                            <img
                                                src={uploadedImage}
                                                alt="Uploaded handwriting"
                                                className="w-full h-80 object-contain rounded-2xl bg-gray-50"
                                            />
                                            <button
                                                onClick={handleReset}
                                                className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:bg-white transition-all"
                                            >
                                                <RotateCcw
                                                    size={20}
                                                    className="text-[#1A2E4A]"
                                                />
                                            </button>
                                        </div>

                                        {!showResults && (
                                            <button
                                                onClick={handleScan}
                                                disabled={processing} // ← UBAH: isScanning → processing
                                                className="w-full px-8 py-4 bg-[#3BBFAD] text-white rounded-2xl font-bold text-lg hover:bg-[#2A9989] transition-all shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
                                            >
                                                {processing ? ( // ← UBAH: isScanning → processing
                                                    <span className="flex items-center justify-center gap-3">
                                                        <Sparkles
                                                            className="animate-spin"
                                                            size={20}
                                                        />
                                                        Menganalisis Tulisan...
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center justify-center gap-3">
                                                        <Brain size={20} />
                                                        Mulai Scan dengan AI
                                                    </span>
                                                )}
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* How It Works */}
                            <div className="mt-8 bg-gradient-to-br from-[#3BBFAD]/5 to-white rounded-3xl p-8 border border-[#3BBFAD]/20">
                                <h4 className="font-bold text-lg text-[#1A2E4A] mb-4">
                                    Cara Menggunakan
                                </h4>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-[#3BBFAD] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                            1
                                        </div>
                                        <p className="text-[#2D3748]">
                                            Minta anak menulis huruf A-Z di
                                            kertas putih dengan pensil/pulpen
                                            hitam
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-[#F5A623] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                            2
                                        </div>
                                        <p className="text-[#2D3748]">
                                            Foto tulisan dengan pencahayaan yang
                                            baik
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-[#1A2E4A] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                            3
                                        </div>
                                        <p className="text-[#2D3748]">
                                            Upload dan tunggu hasil analisis AI
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Results Section */}
                        <div>
                            {showResults && scanResults ? (
                                <div className="space-y-6">
                                    {/* Summary */}
                                    <div className="bg-gradient-to-br from-[#3BBFAD] to-[#2A9989] rounded-3xl p-8 text-white shadow-2xl">
                                        <h3 className="text-3xl font-bold mb-4">
                                            Hasil Analisis
                                        </h3>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div>
                                                <div className="text-5xl font-bold font-mono mb-2">
                                                    {
                                                        scanResults.filter(
                                                            (r) => r.isCorrect,
                                                        ).length
                                                    }
                                                    /{scanResults.length}
                                                </div>
                                                <div className="text-white/80">
                                                    Huruf Benar
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-5xl font-bold font-mono mb-2">
                                                    {/* Pakai overallScore dari backend kalau ada */}
                                                    {overallScore ??
                                                        Math.round(
                                                            scanResults.reduce(
                                                                (acc, r) =>
                                                                    acc +
                                                                    r.confidence,
                                                                0,
                                                            ) /
                                                                scanResults.length,
                                                        )}
                                                    %
                                                </div>
                                                <div className="text-white/80">
                                                    Akurasi Rata-rata
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Detailed Results */}
                                    <div className="bg-white rounded-3xl p-8 shadow-xl">
                                        <h4 className="text-2xl font-bold text-[#1A2E4A] mb-6">
                                            Detail Per Huruf
                                        </h4>
                                        <div className="space-y-4">
                                            {scanResults.map(
                                                (result, index) => (
                                                    <div
                                                        key={index}
                                                        className={`p-6 rounded-2xl border-2 ${
                                                            result.isCorrect
                                                                ? "bg-[#6FCF97]/5 border-[#6FCF97]/30"
                                                                : "bg-red-50 border-red-200"
                                                        }`}
                                                    >
                                                        <div className="flex items-start justify-between mb-3">
                                                            <div className="flex items-center gap-4">
                                                                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-md">
                                                                    <span className="text-3xl font-bold text-[#1A2E4A]">
                                                                        {
                                                                            result.letter
                                                                        }
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <h5 className="font-bold text-lg text-[#1A2E4A]">
                                                                        Huruf{" "}
                                                                        {
                                                                            result.letter
                                                                        }
                                                                    </h5>
                                                                    <div className="flex items-center gap-2 mt-1">
                                                                        {result.isCorrect ? (
                                                                            <CheckCircle
                                                                                size={
                                                                                    18
                                                                                }
                                                                                className="text-[#6FCF97]"
                                                                            />
                                                                        ) : (
                                                                            <AlertCircle
                                                                                size={
                                                                                    18
                                                                                }
                                                                                className="text-red-500"
                                                                            />
                                                                        )}
                                                                        <span
                                                                            className={`text-sm font-bold ${
                                                                                result.isCorrect
                                                                                    ? "text-[#6FCF97]"
                                                                                    : "text-red-500"
                                                                            }`}
                                                                        >
                                                                            {result.isCorrect
                                                                                ? "Benar"
                                                                                : "Perlu Perbaikan"}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="text-right">
                                                                <div className="text-2xl font-bold font-mono text-[#1A2E4A]">
                                                                    {
                                                                        result.confidence
                                                                    }
                                                                    %
                                                                </div>
                                                                <div className="text-xs text-[#2D3748]">
                                                                    Confidence
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="text-[#2D3748] leading-relaxed">
                                                            {result.feedback}
                                                        </p>
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-4">
                                        <button
                                            onClick={handleReset}
                                            className="flex-1 px-6 py-4 bg-white text-[#1A2E4A] border-2 border-[#3BBFAD] rounded-2xl font-bold hover:bg-[#3BBFAD]/5 transition-all"
                                        >
                                            Scan Tulisan Lain
                                        </button>
                                        <button className="flex-1 px-6 py-4 bg-[#F5A623] text-white rounded-2xl font-bold hover:bg-[#E09420] transition-all shadow-lg flex items-center justify-center gap-2">
                                            <Download size={20} />
                                            Download Laporan
                                        </button>
                                    </div>

                                    {/* Recommendations — pakai parentFeedback dari backend kalau ada */}
                                    <div className="bg-gradient-to-br from-[#F5A623]/10 to-white rounded-3xl p-8 border border-[#F5A623]/20">
                                        <h4 className="font-bold text-xl text-[#1A2E4A] mb-4">
                                            💡 Rekomendasi
                                        </h4>
                                        {parentFeedback ? (
                                            // Tampilkan feedback dari Gemini kalau sudah ada
                                            <p className="text-[#2D3748] leading-relaxed">
                                                {parentFeedback}
                                            </p>
                                        ) : (
                                            // Fallback statis
                                            <ul className="space-y-3 text-[#2D3748]">
                                                <li className="flex items-start gap-3">
                                                    <CheckCircle
                                                        size={20}
                                                        className="text-[#F5A623] flex-shrink-0 mt-0.5"
                                                    />
                                                    <span>
                                                        Latih huruf D dengan
                                                        game "Trace & Race" di
                                                        LexPlay
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <CheckCircle
                                                        size={20}
                                                        className="text-[#F5A623] flex-shrink-0 mt-0.5"
                                                    />
                                                    <span>
                                                        Lakukan latihan menulis
                                                        10–15 menit setiap hari
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <CheckCircle
                                                        size={20}
                                                        className="text-[#F5A623] flex-shrink-0 mt-0.5"
                                                    />
                                                    <span>
                                                        Gunakan kertas bergaris
                                                        untuk membantu
                                                        konsistensi ukuran huruf
                                                    </span>
                                                </li>
                                            </ul>
                                        )}

                                        {/* Tampilkan indikator disleksia dari backend */}
                                        {dyslexiaIndicators &&
                                            dyslexiaIndicators.length > 0 && (
                                                <div className="mt-4 pt-4 border-t border-[#F5A623]/20">
                                                    <p className="text-sm font-semibold text-[#1A2E4A] mb-2">
                                                        Indikator terdeteksi:
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {dyslexiaIndicators.map(
                                                            (indicator, i) => (
                                                                <span
                                                                    key={i}
                                                                    className="px-3 py-1 bg-[#F5A623]/20 text-[#1A2E4A] rounded-full text-sm font-medium"
                                                                >
                                                                    {indicator}
                                                                </span>
                                                            ),
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-white rounded-3xl p-12 shadow-xl text-center h-full flex flex-col items-center justify-center">
                                    <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                                        <Brain
                                            className="text-gray-400"
                                            size={64}
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#1A2E4A] mb-4">
                                        Hasil Scan Akan Muncul Di Sini
                                    </h3>
                                    <p className="text-[#2D3748] max-w-md">
                                        Upload foto tulisan anak dan klik "Mulai
                                        Scan dengan AI" untuk melihat analisis
                                        detail
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Tips Section */}
                    <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl">
                        <h3 className="text-3xl font-bold text-[#1A2E4A] mb-8 text-center">
                            Tips Foto yang Baik
                        </h3>
                        <div className="grid md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-[#3BBFAD]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <span className="text-4xl">💡</span>
                                </div>
                                <h4 className="font-bold text-[#1A2E4A] mb-2">
                                    Pencahayaan Terang
                                </h4>
                                <p className="text-sm text-[#2D3748]">
                                    Pastikan ruangan cukup terang atau foto di
                                    bawah sinar matahari
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 bg-[#F5A623]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <span className="text-4xl">📏</span>
                                </div>
                                <h4 className="font-bold text-[#1A2E4A] mb-2">
                                    Jarak yang Pas
                                </h4>
                                <p className="text-sm text-[#2D3748]">
                                    Foto dari jarak 20–30 cm agar huruf terlihat
                                    jelas
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 bg-[#1A2E4A]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <span className="text-4xl">📐</span>
                                </div>
                                <h4 className="font-bold text-[#1A2E4A] mb-2">
                                    Tegak Lurus
                                </h4>
                                <p className="text-sm text-[#2D3748]">
                                    Foto dari atas dengan kamera sejajar kertas
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 bg-[#6FCF97]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <span className="text-4xl">⚫</span>
                                </div>
                                <h4 className="font-bold text-[#1A2E4A] mb-2">
                                    Kontras Tinggi
                                </h4>
                                <p className="text-sm text-[#2D3748]">
                                    Gunakan tinta hitam pada kertas putih untuk
                                    hasil terbaik
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
