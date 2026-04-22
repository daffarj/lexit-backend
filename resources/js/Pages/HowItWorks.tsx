import {
    ArrowRight,
    User,
    CheckCircle,
    Clock,
    FileText,
    Gamepad2,
    BarChart3,
} from "lucide-react";
import { StepIndicator } from "../components/StepIndicator";
import { Link } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

export default function HowItWorks() {
    return (
        <AppLayout>
            <div className="min-h-screen">
                {/* Hero */}
                <section className="bg-gradient-to-br from-[#F5A623] to-[#E09420] text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Cara Kerja Lexit
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                            Proses mudah dan menyenangkan untuk mendukung
                            perkembangan membaca anak Anda
                        </p>
                    </div>
                </section>

                {/* Main Steps */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#1A2E4A] mb-6">
                                3 Langkah Sederhana
                            </h2>
                            <p className="text-xl text-[#2D3748] max-w-3xl mx-auto">
                                Dari skrining hingga terapi dan monitoring —
                                semua dalam satu aplikasi
                            </p>
                        </div>

                        <StepIndicator
                            steps={[
                                {
                                    number: 1,
                                    title: "Skrining dengan LexScan",
                                    description:
                                        "Anak mengikuti tes interaktif yang menyenangkan selama 15 menit untuk mendeteksi indikasi disleksia",
                                },
                                {
                                    number: 2,
                                    title: "Terapi dengan Let's Play",
                                    description:
                                        "Bermain game edukatif yang disesuaikan dengan kebutuhan anak berdasarkan hasil skrining",
                                },
                                {
                                    number: 3,
                                    title: "Pantau dengan Parent Mode",
                                    description:
                                        "Lihat progres anak, akses laporan, dan dapatkan rekomendasi personalisasi",
                                },
                            ]}
                        />
                    </div>
                </section>

                {/* Detailed Walkthrough - Persona Story */}
                <section className="py-24 bg-gradient-to-b from-[#F7F5F2] to-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#3BBFAD]/10 rounded-2xl mb-6">
                                <User className="text-[#3BBFAD]" size={24} />
                                <span className="font-bold text-lg text-[#3BBFAD]">
                                    Cerita Pengguna
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#1A2E4A] mb-6">
                                Kisah Farel & Ibu Yuni
                            </h2>
                            <p className="text-xl text-[#2D3748] max-w-3xl mx-auto">
                                Bagaimana Lexit membantu keluarga Indonesia
                                mengatasi tantangan disleksia
                            </p>
                        </div>

                        {/* Timeline Story */}
                        <div className="max-w-4xl mx-auto space-y-12">
                            {/* Step 1 - Problem */}
                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                                    <span className="text-3xl">😟</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-[#1A2E4A] mb-3">
                                        Masalah Awal
                                    </h3>
                                    <p className="text-lg text-[#2D3748] leading-relaxed">
                                        Farel (8 tahun) kesulitan membaca
                                        meskipun sudah ikut les privat. Ibu Yuni
                                        khawatir tetapi bingung harus kemana —
                                        biaya konsultasi psikolog mahal dan
                                        jadwal penuh. Dia mendengar tentang
                                        disleksia tapi tidak yakin apakah itu
                                        yang dialami Farel.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 - Discovery */}
                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                                    <span className="text-3xl">💡</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-[#1A2E4A] mb-3">
                                        Menemukan Lexit
                                    </h3>
                                    <p className="text-lg text-[#2D3748] leading-relaxed">
                                        Ibu Yuni menemukan Lexit melalui
                                        rekomendasi grup parenting WhatsApp. Dia
                                        tertarik karena skrining pertama gratis
                                        dan bisa dilakukan dari rumah. Tidak
                                        perlu janji temu atau antri — cukup
                                        download aplikasi dan mulai.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 - First Screening */}
                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-16 h-16 bg-[#3BBFAD]/20 rounded-2xl flex items-center justify-center">
                                    <CheckCircle
                                        className="text-[#3BBFAD]"
                                        size={32}
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-[#1A2E4A] mb-3">
                                        Skrining Pertama (15 Menit)
                                    </h3>
                                    <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#3BBFAD] mb-4">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Clock
                                                className="text-[#3BBFAD]"
                                                size={24}
                                            />
                                            <span className="font-bold text-lg text-[#1A2E4A]">
                                                Pengalaman Farel
                                            </span>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle
                                                    className="text-[#6FCF97] flex-shrink-0 mt-1"
                                                    size={20}
                                                />
                                                <span className="text-[#2D3748]">
                                                    Farel merasa seperti bermain
                                                    game, bukan tes — dia
                                                    menyukai karakter animasi
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle
                                                    className="text-[#6FCF97] flex-shrink-0 mt-1"
                                                    size={20}
                                                />
                                                <span className="text-[#2D3748]">
                                                    Aktivitas beragam: menyusun
                                                    kata, mengenali huruf,
                                                    membaca kalimat pendek
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle
                                                    className="text-[#6FCF97] flex-shrink-0 mt-1"
                                                    size={20}
                                                />
                                                <span className="text-[#2D3748]">
                                                    AI mencatat pola kesalahan
                                                    tanpa Farel sadari — tidak
                                                    ada tekanan
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <p className="text-lg text-[#2D3748] leading-relaxed">
                                        Setelah 15 menit, Ibu Yuni mendapat
                                        laporan lengkap: Farel memiliki indikasi
                                        disleksia ringan-sedang dengan kesulitan
                                        utama pada pengenalan urutan huruf dan
                                        kecepatan membaca.
                                    </p>
                                </div>
                            </div>

                            {/* Step 4 - Understanding Report */}
                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-16 h-16 bg-[#F5A623]/20 rounded-2xl flex items-center justify-center">
                                    <FileText
                                        className="text-[#F5A623]"
                                        size={32}
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-[#1A2E4A] mb-3">
                                        Memahami Hasil
                                    </h3>
                                    <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#F5A623]">
                                        <p className="text-lg text-[#2D3748] leading-relaxed mb-4">
                                            <strong className="text-[#1A2E4A]">
                                                Laporan yang Ibu Yuni terima
                                                mencakup:
                                            </strong>
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-[#3BBFAD]/5 rounded-xl p-4">
                                                <div className="font-bold text-[#1A2E4A] mb-2">
                                                    📊 Skor Risiko
                                                </div>
                                                <div className="text-[#2D3748]">
                                                    Level: Ringan-Sedang
                                                    (45/100)
                                                </div>
                                            </div>
                                            <div className="bg-[#F5A623]/5 rounded-xl p-4">
                                                <div className="font-bold text-[#1A2E4A] mb-2">
                                                    🎯 Area Kesulitan
                                                </div>
                                                <div className="text-[#2D3748]">
                                                    Urutan huruf, kecepatan
                                                </div>
                                            </div>
                                            <div className="bg-[#6FCF97]/5 rounded-xl p-4">
                                                <div className="font-bold text-[#1A2E4A] mb-2">
                                                    💪 Area Kuat
                                                </div>
                                                <div className="text-[#2D3748]">
                                                    Pemahaman kata, pendengaran
                                                </div>
                                            </div>
                                            <div className="bg-[#1A2E4A]/5 rounded-xl p-4">
                                                <div className="font-bold text-[#1A2E4A] mb-2">
                                                    📝 Rekomendasi
                                                </div>
                                                <div className="text-[#2D3748]">
                                                    Game fonetik, tracing huruf
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 5 - Therapy Journey */}
                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-16 h-16 bg-[#6FCF97]/20 rounded-2xl flex items-center justify-center">
                                    <Gamepad2
                                        className="text-[#6FCF97]"
                                        size={32}
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-[#1A2E4A] mb-3">
                                        Terapi Rutin (Let's Play)
                                    </h3>
                                    <p className="text-lg text-[#2D3748] leading-relaxed mb-4">
                                        Farel mulai bermain 20 menit setiap hari
                                        setelah pulang sekolah. Game yang muncul
                                        disesuaikan dengan kebutuhannya — lebih
                                        fokus pada urutan huruf dan kecepatan.
                                    </p>
                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="font-bold text-[#1A2E4A] mb-4">
                                            Game Favorit Farel:
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 p-3 bg-[#3BBFAD]/5 rounded-xl">
                                                <div className="text-2xl">
                                                    🔤
                                                </div>
                                                <div>
                                                    <div className="font-bold text-[#1A2E4A]">
                                                        Letter Builder
                                                    </div>
                                                    <div className="text-sm text-[#2D3748]">
                                                        Menyusun huruf jadi kata
                                                        dengan drag-and-drop
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 bg-[#F5A623]/5 rounded-xl">
                                                <div className="text-2xl">
                                                    🎵
                                                </div>
                                                <div>
                                                    <div className="font-bold text-[#1A2E4A]">
                                                        Sound Match
                                                    </div>
                                                    <div className="text-sm text-[#2D3748]">
                                                        Mencocokkan suara dengan
                                                        huruf yang benar
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 bg-[#6FCF97]/5 rounded-xl">
                                                <div className="text-2xl">
                                                    ✏️
                                                </div>
                                                <div>
                                                    <div className="font-bold text-[#1A2E4A]">
                                                        Trace & Race
                                                    </div>
                                                    <div className="text-sm text-[#2D3748]">
                                                        Menggambar bentuk huruf
                                                        dengan jari
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 6 - Progress & Results */}
                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-16 h-16 bg-[#1A2E4A]/20 rounded-2xl flex items-center justify-center">
                                    <BarChart3
                                        className="text-[#1A2E4A]"
                                        size={32}
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-[#1A2E4A] mb-3">
                                        Melihat Progres (Parent Mode)
                                    </h3>
                                    <p className="text-lg text-[#2D3748] leading-relaxed mb-4">
                                        Setiap minggu, Ibu Yuni melihat grafik
                                        progres Farel. Setelah 3 bulan:
                                    </p>
                                    <div className="bg-gradient-to-br from-[#3BBFAD] to-[#2A9989] rounded-2xl p-8 text-white shadow-2xl">
                                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                                            <div className="text-center">
                                                <div className="text-5xl font-bold font-mono mb-2">
                                                    +35%
                                                </div>
                                                <div className="text-white/90">
                                                    Kecepatan Membaca
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-5xl font-bold font-mono mb-2">
                                                    +42%
                                                </div>
                                                <div className="text-white/90">
                                                    Akurasi Kata
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-5xl font-bold font-mono mb-2">
                                                    90%
                                                </div>
                                                <div className="text-white/90">
                                                    Konsistensi Harian
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center text-lg">
                                            "Nilai bahasa Indonesia Farel naik
                                            dari 65 jadi 82! Dia juga lebih
                                            percaya diri saat presentasi di
                                            kelas." — Ibu Yuni
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 7 - Success */}
                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center">
                                    <span className="text-3xl">🎉</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-[#1A2E4A] mb-3">
                                        Hasil Akhir
                                    </h3>
                                    <p className="text-lg text-[#2D3748] leading-relaxed">
                                        Farel tidak hanya lebih baik membaca —
                                        dia juga lebih suka buku cerita dan
                                        tidak lagi takut saat disuruh membaca
                                        keras-keras. Ibu Yuni berbagi cerita di
                                        grup parenting, dan 5 teman-temannya
                                        juga mulai pakai Lexit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Reference */}
                <section className="py-24 bg-white border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-[#1A2E4A] mb-6">
                                Referensi Cepat
                            </h2>
                            <p className="text-xl text-[#2D3748]">
                                Informasi penting yang perlu Anda ketahui
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-gradient-to-br from-[#3BBFAD]/5 to-white rounded-3xl p-8 border border-[#3BBFAD]/20">
                                <Clock
                                    className="text-[#3BBFAD] mb-4"
                                    size={40}
                                />
                                <h3 className="text-2xl font-bold text-[#1A2E4A] mb-4">
                                    Waktu yang Dibutuhkan
                                </h3>
                                <ul className="space-y-3 text-[#2D3748]">
                                    <li>• Skrining: 15 menit</li>
                                    <li>• Terapi harian: 20-30 menit</li>
                                    <li>• Review progres: 5 menit/minggu</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-[#F5A623]/5 to-white rounded-3xl p-8 border border-[#F5A623]/20">
                                <Gamepad2
                                    className="text-[#F5A623] mb-4"
                                    size={40}
                                />
                                <h3 className="text-2xl font-bold text-[#1A2E4A] mb-4">
                                    Usia yang Cocok
                                </h3>
                                <ul className="space-y-3 text-[#2D3748]">
                                    <li>• Target: 5-12 tahun</li>
                                    <li>• Optimal: 6-10 tahun</li>
                                    <li>• Dapat disesuaikan untuk usia lain</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-[#1A2E4A]/5 to-white rounded-3xl p-8 border border-[#1A2E4A]/20">
                                <FileText
                                    className="text-[#1A2E4A] mb-4"
                                    size={40}
                                />
                                <h3 className="text-2xl font-bold text-[#1A2E4A] mb-4">
                                    Hasil yang Diharapkan
                                </h3>
                                <ul className="space-y-3 text-[#2D3748]">
                                    <li>• Minggu 1: Laporan skrining</li>
                                    <li>• Bulan 1: Progres awal terlihat</li>
                                    <li>• Bulan 3: Peningkatan signifikan</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-gradient-to-br from-[#3BBFAD] to-[#2A9989]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Siap Memulai Perjalanan Seperti Farel?
                        </h2>
                        <p className="text-xl text-white/90 mb-10">
                            Coba skrining gratis hari ini dan lihat bagaimana
                            Lexit dapat membantu anak Anda
                        </p>
                        <a
                            href="/pricing"
                            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[#3BBFAD] rounded-2xl font-bold text-lg hover:bg-[#F5A623] hover:text-white transition-all shadow-2xl hover:scale-105"
                        >
                            Mulai Gratis Sekarang
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
