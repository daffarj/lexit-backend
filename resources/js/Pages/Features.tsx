import { Link } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import {
    Brain,
    Gamepad2,
    BarChart3,
    Sparkles,
    Target,
    TrendingUp,
    Headphones,
    Eye,
    Hand,
    Calendar,
    FileText,
    MessageCircle,
} from "lucide-react";

export default function Features() {
    return (
        <AppLayout>
            <div className="min-h-screen">
                {/* Hero */}
                <section className="bg-gradient-to-br from-[#3BBFAD] to-[#2A9989] text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Fitur Lengkap Lexit
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                            Teknologi AI dan pendekatan multi-sensori untuk
                            deteksi dan terapi disleksia yang efektif
                        </p>
                    </div>
                </section>

                {/* LexScan Feature */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#3BBFAD]/10 rounded-2xl mb-6">
                                    <Brain
                                        className="text-[#3BBFAD]"
                                        size={28}
                                    />
                                    <span className="font-bold text-xl text-[#3BBFAD]">
                                        LexScan
                                    </span>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-bold text-[#1A2E4A] mb-6">
                                    Skrining Interaktif Berbasis AI
                                </h2>

                                <p className="text-xl text-[#2D3748] leading-relaxed mb-8">
                                    LexScan menggunakan algoritma machine
                                    learning untuk menganalisis pola jawaban
                                    anak dalam serangkaian aktivitas interaktif.
                                    Sistem dapat mendeteksi indikasi disleksia
                                    dengan akurasi tinggi dalam waktu singkat.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#3BBFAD]/10 rounded-xl flex items-center justify-center">
                                            <Sparkles
                                                className="text-[#3BBFAD]"
                                                size={24}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-[#1A2E4A] mb-2">
                                                Analisis Pola Otomatis
                                            </h4>
                                            <p className="text-[#2D3748]">
                                                AI mengidentifikasi kesulitan
                                                spesifik seperti pembalikan
                                                huruf, kebingungan urutan, dan
                                                kecepatan membaca
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#3BBFAD]/10 rounded-xl flex items-center justify-center">
                                            <Target
                                                className="text-[#3BBFAD]"
                                                size={24}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-[#1A2E4A] mb-2">
                                                Hasil Komprehensif
                                            </h4>
                                            <p className="text-[#2D3748]">
                                                Laporan lengkap dengan skor
                                                risiko, area kesulitan, dan
                                                rekomendasi tindakan lanjutan
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#3BBFAD]/10 rounded-xl flex items-center justify-center">
                                            <FileText
                                                className="text-[#3BBFAD]"
                                                size={24}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-[#1A2E4A] mb-2">
                                                Laporan PDF
                                            </h4>
                                            <p className="text-[#2D3748]">
                                                Download laporan detail yang
                                                dapat dibagikan dengan guru atau
                                                psikolog
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#3BBFAD]/20 to-[#F5A623]/20 rounded-[3rem] transform -rotate-3" />
                                <img
                                    src="https://images.unsplash.com/photo-1646450820480-9545d263e9e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGluZG9uZXNpYW4lMjBjaGlsZCUyMHJlYWRpbmclMjBib29rfGVufDF8fHx8MTc3NTQ4OTk4MXww&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Child using LexScan"
                                    className="relative rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                                />

                                {/* Floating Badge */}
                                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border-l-4 border-[#3BBFAD]">
                                    <div className="text-center">
                                        <div className="font-mono text-3xl font-bold text-[#3BBFAD]">
                                            15 Min
                                        </div>
                                        <div className="text-sm text-[#2D3748]">
                                            Waktu Skrining
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Let's Play Feature */}
                <section className="py-24 bg-gradient-to-b from-[#F7F5F2] to-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Image First on Desktop */}
                            <div className="relative order-2 lg:order-1">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/20 to-[#6FCF97]/20 rounded-[3rem] transform rotate-3" />
                                <img
                                    src="https://images.unsplash.com/photo-1599666527768-e8cf85741436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGxlYXJuaW5nJTIwZGlnaXRhbCUyMHRhYmxldCUyMHNjaG9vbHxlbnwxfHx8fDE3NzU0ODk5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Child playing educational games"
                                    className="relative rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                                />

                                {/* Floating Badge */}
                                <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border-l-4 border-[#F5A623]">
                                    <div className="flex items-center gap-3">
                                        <Gamepad2
                                            className="text-[#F5A623]"
                                            size={32}
                                        />
                                        <div>
                                            <div className="font-mono text-2xl font-bold text-[#F5A623]">
                                                20+
                                            </div>
                                            <div className="text-sm text-[#2D3748]">
                                                Mini Games
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 lg:order-2">
                                <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#F5A623]/10 rounded-2xl mb-6">
                                    <Gamepad2
                                        className="text-[#F5A623]"
                                        size={28}
                                    />
                                    <span className="font-bold text-xl text-[#F5A623]">
                                        Let's Play
                                    </span>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-bold text-[#1A2E4A] mb-6">
                                    Terapi Adaptif yang Menyenangkan
                                </h2>

                                <p className="text-xl text-[#2D3748] leading-relaxed mb-8">
                                    Mini-game yang dirancang khusus untuk terapi
                                    disleksia menggunakan pendekatan
                                    multi-sensori (visual, auditori,
                                    kinestetik). Setiap game menyesuaikan
                                    tingkat kesulitan berdasarkan kemampuan
                                    anak.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center">
                                            <Eye
                                                className="text-[#F5A623]"
                                                size={24}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-[#1A2E4A] mb-2">
                                                Visual
                                            </h4>
                                            <p className="text-[#2D3748]">
                                                Game dengan animasi dan warna
                                                yang membantu pengenalan huruf
                                                dan kata
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center">
                                            <Headphones
                                                className="text-[#F5A623]"
                                                size={24}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-[#1A2E4A] mb-2">
                                                Auditori
                                            </h4>
                                            <p className="text-[#2D3748]">
                                                Pengucapan kata dan fonetik
                                                untuk memperkuat koneksi
                                                suara-huruf
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center">
                                            <Hand
                                                className="text-[#F5A623]"
                                                size={24}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-[#1A2E4A] mb-2">
                                                Kinestetik
                                            </h4>
                                            <p className="text-[#2D3748]">
                                                Interaksi drag-and-drop dan
                                                tracing huruf untuk pembelajaran
                                                motorik
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Parent Mode Feature */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#1A2E4A]/10 rounded-2xl mb-6">
                                    <BarChart3
                                        className="text-[#1A2E4A]"
                                        size={28}
                                    />
                                    <span className="font-bold text-xl text-[#1A2E4A]">
                                        Parent Mode
                                    </span>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-bold text-[#1A2E4A] mb-6">
                                    Dashboard Progres Lengkap
                                </h2>

                                <p className="text-xl text-[#2D3748] leading-relaxed mb-8">
                                    Dashboard khusus untuk orang tua memantau
                                    perkembangan anak secara real-time. Akses
                                    riwayat skrining, analisis progres, dan
                                    rekomendasi personalisasi dalam satu tempat.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#1A2E4A]/10 rounded-xl flex items-center justify-center">
                                            <TrendingUp
                                                className="text-[#1A2E4A]"
                                                size={24}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-[#1A2E4A] mb-2">
                                                Grafik Progres
                                            </h4>
                                            <p className="text-[#2D3748]">
                                                Visualisasi perkembangan anak
                                                dalam berbagai aspek membaca dan
                                                menulis
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#1A2E4A]/10 rounded-xl flex items-center justify-center">
                                            <Calendar
                                                className="text-[#1A2E4A]"
                                                size={24}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-[#1A2E4A] mb-2">
                                                Riwayat Skrining
                                            </h4>
                                            <p className="text-[#2D3748]">
                                                Akses semua hasil skrining
                                                sebelumnya dan bandingkan
                                                perkembangan dari waktu ke waktu
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#1A2E4A]/10 rounded-xl flex items-center justify-center">
                                            <MessageCircle
                                                className="text-[#1A2E4A]"
                                                size={24}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-[#1A2E4A] mb-2">
                                                Konsultasi Psikolog
                                            </h4>
                                            <p className="text-[#2D3748]">
                                                Hubungi psikolog klinis melalui
                                                chat atau video call untuk
                                                konsultasi lanjutan
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Dashboard Mockup */}
                            <div className="relative">
                                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <h3 className="text-2xl font-bold text-[#1A2E4A]">
                                                Dashboard Farel
                                            </h3>
                                            <p className="text-sm text-[#2D3748]">
                                                Progress minggu ini
                                            </p>
                                        </div>
                                        <div className="px-4 py-2 bg-[#6FCF97]/20 rounded-xl">
                                            <span className="text-sm font-bold text-[#6FCF97]">
                                                +15% 📈
                                            </span>
                                        </div>
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        <div className="bg-[#3BBFAD]/10 rounded-2xl p-5">
                                            <div className="text-sm text-[#2D3748] mb-1">
                                                Waktu Latihan
                                            </div>
                                            <div className="text-3xl font-bold text-[#3BBFAD] font-mono">
                                                8.5 jam
                                            </div>
                                        </div>
                                        <div className="bg-[#F5A623]/10 rounded-2xl p-5">
                                            <div className="text-sm text-[#2D3748] mb-1">
                                                Game Selesai
                                            </div>
                                            <div className="text-3xl font-bold text-[#F5A623] font-mono">
                                                24
                                            </div>
                                        </div>
                                        <div className="bg-[#1A2E4A]/10 rounded-2xl p-5">
                                            <div className="text-sm text-[#2D3748] mb-1">
                                                Akurasi
                                            </div>
                                            <div className="text-3xl font-bold text-[#1A2E4A] font-mono">
                                                87%
                                            </div>
                                        </div>
                                        <div className="bg-[#6FCF97]/10 rounded-2xl p-5">
                                            <div className="text-sm text-[#2D3748] mb-1">
                                                Streak
                                            </div>
                                            <div className="text-3xl font-bold text-[#6FCF97] font-mono">
                                                12 hari
                                            </div>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="text-[#2D3748]">
                                                    Pengenalan Huruf
                                                </span>
                                                <span className="font-bold text-[#3BBFAD]">
                                                    92%
                                                </span>
                                            </div>
                                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-[#3BBFAD] to-[#2A9989] w-[92%] rounded-full" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="text-[#2D3748]">
                                                    Kecepatan Membaca
                                                </span>
                                                <span className="font-bold text-[#F5A623]">
                                                    78%
                                                </span>
                                            </div>
                                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-[#F5A623] to-[#E09420] w-[78%] rounded-full" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="text-[#2D3748]">
                                                    Pemahaman Kata
                                                </span>
                                                <span className="font-bold text-[#6FCF97]">
                                                    85%
                                                </span>
                                            </div>
                                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-[#6FCF97] to-[#5FBF87] w-[85%] rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#3BBFAD]/20 rounded-full blur-2xl" />
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#F5A623]/20 rounded-full blur-2xl" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-gradient-to-br from-[#1A2E4A] to-[#2A4A6A]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Siap Mencoba Semua Fitur?
                        </h2>
                        <p className="text-xl text-white/90 mb-10">
                            Mulai dengan skrining gratis dan rasakan
                            perbedaannya
                        </p>
                        <a
                            href="/pricing"
                            className="inline-flex items-center gap-2 px-10 py-5 bg-[#3BBFAD] text-white rounded-2xl font-bold text-lg hover:bg-[#F5A623] transition-all shadow-2xl hover:scale-105"
                        >
                            Mulai Gratis Sekarang
                        </a>
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
