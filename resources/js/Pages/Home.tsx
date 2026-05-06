import { Link } from "@inertiajs/react";
import {
    Brain,
    Gamepad2,
    BarChart3,
    ArrowRight,
    CheckCircle,
    Shield,
    Award,
    Users,
} from "lucide-react";
import { FeatureCard } from "../components/FeatureCard";
import { StepIndicator } from "../components/StepIndicator";
import { TestimonialCard } from "../components/TestimonialCard";
import { StatCard } from "../components/StatCard";
import AppLayout from "@/Layouts/AppLayout";

export default function Home() {
    return (
        <AppLayout>
            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-[#F7F5F2] via-white to-[#3BBFAD]/5 pt-20 pb-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Hero Text */}
                            <div className="space-y-8">
                                <div className="inline-block px-4 py-2 bg-[#3BBFAD]/10 rounded-full">
                                    <span className="text-sm font-semibold text-[#3BBFAD]">
                                        ✨ AI-Powered Dyslexia Care
                                    </span>
                                </div>

                                <h1 className="text-4xl md:text-6xl font-bold text-[#1A2E4A] leading-tight">
                                    Deteksi Disleksia Lebih Awal,{" "}
                                    <span className="text-[#3BBFAD]">
                                        Masa Depan Lebih Cerah
                                    </span>
                                </h1>

                                <p className="text-xl text-[#2D3748] leading-relaxed">
                                    Platform skrining dan terapi disleksia
                                    berbasis AI untuk anak Indonesia usia 5–12
                                    tahun. Mudah digunakan dari rumah, tanpa
                                    perlu janji temu klinis yang mahal.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/lexscan"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#3BBFAD] text-white rounded-2xl font-bold text-lg hover:bg-[#F5A623] transition-all shadow-lg hover:shadow-2xl hover:scale-105"
                                    >
                                        Mulai Skrining Gratis
                                        <ArrowRight size={20} />
                                    </Link>
                                    <Link
                                        href="/how-it-works"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1A2E4A] rounded-2xl font-bold text-lg border-2 border-[#3BBFAD] hover:bg-[#3BBFAD]/5 transition-all"
                                    >
                                        Pelajari Lebih Lanjut
                                    </Link>
                                </div>

                                {/* Quick Stats */}
                                <div className="flex flex-wrap gap-6 pt-4">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle
                                            className="text-[#6FCF97]"
                                            size={24}
                                        />
                                        <span className="text-sm font-semibold text-[#2D3748]">
                                            Gratis untuk skrining pertama
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle
                                            className="text-[#6FCF97]"
                                            size={24}
                                        />
                                        <span className="text-sm font-semibold text-[#2D3748]">
                                            Hasil dalam 15 menit
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle
                                            className="text-[#6FCF97]"
                                            size={24}
                                        />
                                        <span className="text-sm font-semibold text-[#2D3748]">
                                            Tervalidasi psikolog
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#3BBFAD]/20 to-[#F5A623]/20 rounded-[3rem] transform rotate-3" />
                                <img
                                    src="https://images.unsplash.com/photo-1654860687488-119a90eafa86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwY2hpbGQlMjBwYXJlbnQlMjB0YWJsZXQlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzU0ODk5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Parent and child using tablet together"
                                    className="relative rounded-[3rem] shadow-2xl object-cover w-full h-[500px]"
                                />

                                {/* Floating Stats Badge */}
                                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border-l-4 border-[#F5A623]">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center">
                                            <Users
                                                className="text-[#F5A623]"
                                                size={24}
                                            />
                                        </div>
                                        <div>
                                            <div className="font-mono text-2xl font-bold text-[#1A2E4A]">
                                                10,000+
                                            </div>
                                            <div className="text-sm text-[#2D3748]">
                                                Keluarga Terbantu
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-20 right-10 w-32 h-32 bg-[#F5A623]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#3BBFAD]/10 rounded-full blur-3xl" />
                </section>

                {/* Stats Bar */}
                <section className="py-16 bg-white border-y border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <StatCard
                                number="5 Juta"
                                label="Pelajar di Indonesia"
                                color="#3BBFAD"
                            />
                            <StatCard
                                number="2 Juta"
                                label="Kasus Baru Disleksia/Tahun"
                                color="#F5A623"
                            />
                            <StatCard
                                number="4.000"
                                label="Psikolog Klinis di Indonesia"
                                color="#1A2E4A"
                            />
                        </div>
                        <p className="text-center text-[#2D3748] mt-8 text-lg">
                            Akses terbatas ke layanan profesional — Lexit hadir
                            untuk menjembatani kesenjangan ini
                        </p>
                    </div>
                </section>

                {/* Features Overview */}
                <section className="py-24 bg-gradient-to-b from-white to-[#F7F5F2]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#1A2E4A] mb-6">
                                Fitur Unggulan Lexit
                            </h2>
                            <p className="text-xl text-[#2D3748] max-w-3xl mx-auto">
                                Tiga pilar utama untuk mendukung deteksi dini
                                dan terapi disleksia yang efektif
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <FeatureCard
                                icon={Brain}
                                title="LexScan"
                                description="Skrining interaktif berbasis AI yang menganalisis pola jawaban anak untuk mendeteksi indikasi disleksia dengan akurat dalam 15 menit."
                                link="/features"
                                accentColor="#3BBFAD"
                            />
                            <FeatureCard
                                icon={Gamepad2}
                                title="Let's Play"
                                description="Mini-game adaptif yang dirancang untuk terapi multi-sensori (visual, audio, kinestetik) yang menyenangkan dan efektif."
                                link="/features"
                                accentColor="#F5A623"
                            />
                            <FeatureCard
                                icon={BarChart3}
                                title="Parent Mode"
                                description="Dashboard komprehensif untuk memantau progres anak, mengakses riwayat skrining, dan mendapatkan rekomendasi terapi."
                                link="/features"
                                accentColor="#1A2E4A"
                            />
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#1A2E4A] mb-6">
                                Cara Kerja Lexit
                            </h2>
                            <p className="text-xl text-[#2D3748] max-w-3xl mx-auto">
                                Proses sederhana dalam 3 langkah untuk membantu
                                anak Anda
                            </p>
                        </div>

                        <StepIndicator
                            steps={[
                                {
                                    number: 1,
                                    title: "Skrining",
                                    description:
                                        "Anak mengikuti tes interaktif LexScan selama 15 menit dengan game yang menyenangkan",
                                },
                                {
                                    number: 2,
                                    title: "Terapi",
                                    description:
                                        "Bermain mini-game adaptif di Let's Play yang disesuaikan dengan kebutuhan anak",
                                },
                                {
                                    number: 3,
                                    title: "Pantau Progres",
                                    description:
                                        "Orang tua memantau perkembangan melalui dashboard dan mendapat rekomendasi lanjutan",
                                },
                            ]}
                        />

                        <div className="text-center mt-12">
                            <Link
                                href="/how-it-works"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A2E4A] text-white rounded-2xl font-bold hover:bg-[#3BBFAD] transition-all shadow-lg"
                            >
                                Lihat Detail Lengkap
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Testimonial */}
                <section className="py-24 bg-gradient-to-b from-[#F7F5F2] to-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#1A2E4A] mb-6">
                                Apa Kata Mereka
                            </h2>
                            <p className="text-xl text-[#2D3748]">
                                Cerita nyata dari keluarga yang telah merasakan
                                manfaat Lexit
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <TestimonialCard
                                name="Ibu Yuni"
                                role="Ibu dari Farel (8 tahun)"
                                quote="Sebelumnya saya bingung kenapa Farel kesulitan membaca padahal sudah les privat. Setelah pakai Lexit, saya baru tahu ada indikasi disleksia. Sekarang Farel lebih percaya diri dan nilai bacanya meningkat! Terima kasih Lexit."
                                rating={5}
                            />
                        </div>
                    </div>
                </section>

                {/* Trust Badges */}
                <section className="py-24 bg-white border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-[#3BBFAD]/5 to-white rounded-3xl border border-[#3BBFAD]/20">
                                <div className="w-20 h-20 bg-[#3BBFAD] rounded-2xl flex items-center justify-center mb-6">
                                    <Shield className="text-white" size={40} />
                                </div>
                                <h3 className="text-xl font-bold text-[#1A2E4A] mb-3">
                                    Berbasis Metode Orton-Gillingham
                                </h3>
                                <p className="text-[#2D3748] leading-relaxed">
                                    Menggunakan pendekatan terapi yang telah
                                    terbukti secara klinis untuk menangani
                                    disleksia
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-[#F5A623]/5 to-white rounded-3xl border border-[#F5A623]/20">
                                <div className="w-20 h-20 bg-[#F5A623] rounded-2xl flex items-center justify-center mb-6">
                                    <Award className="text-white" size={40} />
                                </div>
                                <h3 className="text-xl font-bold text-[#1A2E4A] mb-3">
                                    Divalidasi Psikolog Klinis
                                </h3>
                                <p className="text-[#2D3748] leading-relaxed">
                                    Dikembangkan dan divalidasi bersama psikolog
                                    klinis profesional di Indonesia
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-[#6FCF97]/5 to-white rounded-3xl border border-[#6FCF97]/20">
                                <div className="w-20 h-20 bg-[#6FCF97] rounded-2xl flex items-center justify-center mb-6">
                                    <BarChart3
                                        className="text-white"
                                        size={40}
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#1A2E4A] mb-3">
                                    SUS Score 89 — Excellent
                                </h3>
                                <p className="text-[#2D3748] leading-relaxed">
                                    Usability terbaik berdasarkan System
                                    Usability Scale dengan tingkat kepuasan 90%
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-br from-[#3BBFAD] to-[#2A9989] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
                        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#F5A623] rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Mulai Perjalanan Belajar Anak Anda Hari Ini
                        </h2>
                        <p className="text-xl text-white/90 mb-10 leading-relaxed">
                            Deteksi dini adalah kunci. Jangan tunggu sampai
                            terlambat. Coba skrining gratis sekarang dan berikan
                            anak Anda kesempatan terbaik untuk sukses.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <Link
                                href="/pricing"
                                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-[#3BBFAD] rounded-2xl font-bold text-lg hover:bg-[#F5A623] hover:text-white transition-all shadow-2xl hover:scale-105"
                            >
                                Mulai Gratis Sekarang
                                <ArrowRight size={20} />
                            </Link>
                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#1A2E4A] text-white rounded-2xl font-bold text-lg hover:bg-[#F5A623] transition-all shadow-2xl"
                            >
                                Pelajari Tentang Kami
                            </Link>
                        </div>

                        {/* Quick Access to Interactive Features */}
                        <div className="grid sm:grid-cols-2 gap-4 mt-8">
                            <Link
                                href="/lexscan"
                                className="flex items-center justify-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-2xl font-semibold hover:bg-white/20 transition-all"
                            >
                                <Brain size={20} />
                                Coba LexScan
                            </Link>
                            <Link
                                href="/lexplay"
                                className="flex items-center justify-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-2xl font-semibold hover:bg-white/20 transition-all"
                            >
                                <Gamepad2 size={20} />
                                Main LexPlay
                            </Link>
                        </div>

                        <p className="text-sm text-white/80 mt-8">
                            Sesuai dengan UU No. 8/2016 tentang Penyandang
                            Disabilitas • SDG 3, 4, 10
                        </p>
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
