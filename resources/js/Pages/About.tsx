import { Target, Users, Lightbulb, Award, Globe, Heart } from "lucide-react";
import { Link } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

export default function About() {
    return (
        <AppLayout>
            <div className="min-h-screen">
                {/* Hero */}
                <section className="bg-gradient-to-br from-[#1A2E4A] to-[#2A4A6A] text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Tentang Lexit
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                            Demokratisasi layanan deteksi dan terapi disleksia
                            untuk semua anak Indonesia
                        </p>
                    </div>
                </section>

                {/* Mission */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#3BBFAD]/10 rounded-2xl mb-6">
                                    <Target
                                        className="text-[#3BBFAD]"
                                        size={28}
                                    />
                                    <span className="font-bold text-xl text-[#3BBFAD]">
                                        Misi Kami
                                    </span>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-bold text-[#1A2E4A] mb-6">
                                    Mengubah Masa Depan Anak Indonesia
                                </h2>

                                <p className="text-xl text-[#2D3748] leading-relaxed mb-6">
                                    Di Indonesia, diperkirakan 5-15% dari 5 juta
                                    pelajar mengalami disleksia. Namun hanya ada
                                    sekitar 4.000 psikolog klinis — menciptakan
                                    kesenjangan akses yang sangat besar.
                                </p>

                                <p className="text-xl text-[#2D3748] leading-relaxed mb-6">
                                    Lexit hadir untuk menjembatani gap ini
                                    dengan teknologi AI yang dapat diakses dari
                                    rumah, terjangkau, dan terbukti efektif.
                                    Kami percaya setiap anak berhak mendapatkan
                                    dukungan untuk tumbuh dengan percaya diri.
                                </p>

                                <div className="bg-gradient-to-br from-[#3BBFAD]/10 to-white rounded-2xl p-6 border-l-4 border-[#3BBFAD]">
                                    <p className="text-lg font-bold text-[#1A2E4A] italic">
                                        "Baca Lebih Mudah, Tumbuh Lebih Berani"
                                    </p>
                                    <p className="text-[#2D3748] mt-2">
                                        Tagline kami bukan hanya slogan — ini
                                        adalah komitmen kami untuk setiap
                                        keluarga.
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1654860687488-119a90eafa86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwZmFtaWx5JTIwZWR1Y2F0aW9uJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzc1NDg5OTgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Indonesian family learning together"
                                    className="rounded-[3rem] shadow-2xl object-cover w-full h-[500px]"
                                />

                                {/* SDG Badges */}
                                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-6 flex gap-3">
                                    <div className="w-16 h-16 bg-[#3BBFAD] rounded-xl flex flex-col items-center justify-center text-white">
                                        <span className="text-xs font-bold">
                                            SDG
                                        </span>
                                        <span className="text-2xl font-bold">
                                            3
                                        </span>
                                    </div>
                                    <div className="w-16 h-16 bg-[#F5A623] rounded-xl flex flex-col items-center justify-center text-white">
                                        <span className="text-xs font-bold">
                                            SDG
                                        </span>
                                        <span className="text-2xl font-bold">
                                            4
                                        </span>
                                    </div>
                                    <div className="w-16 h-16 bg-[#6FCF97] rounded-xl flex flex-col items-center justify-center text-white">
                                        <span className="text-xs font-bold">
                                            SDG
                                        </span>
                                        <span className="text-2xl font-bold">
                                            10
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SDG Alignment */}
                <section className="py-24 bg-gradient-to-b from-[#F7F5F2] to-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#1A2E4A] mb-6">
                                Kontribusi untuk SDGs
                            </h2>
                            <p className="text-xl text-[#2D3748] max-w-3xl mx-auto">
                                Lexit mendukung pencapaian Sustainable
                                Development Goals PBB
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-[#3BBFAD]">
                                <div className="w-20 h-20 bg-[#3BBFAD] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                    <span className="text-4xl font-bold text-white">
                                        3
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-[#1A2E4A] mb-4 text-center">
                                    Good Health & Well-being
                                </h3>
                                <p className="text-[#2D3748] leading-relaxed text-center">
                                    Mendukung kesehatan mental anak dengan
                                    mendeteksi dan menangani disleksia lebih
                                    awal, mengurangi risiko kecemasan dan
                                    depresi akibat kesulitan belajar.
                                </p>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-[#F5A623]">
                                <div className="w-20 h-20 bg-[#F5A623] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                    <span className="text-4xl font-bold text-white">
                                        4
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-[#1A2E4A] mb-4 text-center">
                                    Quality Education
                                </h3>
                                <p className="text-[#2D3748] leading-relaxed text-center">
                                    Memberikan akses pendidikan inklusif dengan
                                    alat terapi yang terjangkau, memastikan
                                    tidak ada anak yang tertinggal karena
                                    keterbatasan finansial atau geografis.
                                </p>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-[#6FCF97]">
                                <div className="w-20 h-20 bg-[#6FCF97] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                    <span className="text-4xl font-bold text-white">
                                        10
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-[#1A2E4A] mb-4 text-center">
                                    Reduced Inequalities
                                </h3>
                                <p className="text-[#2D3748] leading-relaxed text-center">
                                    Menyetarakan akses layanan disleksia antara
                                    keluarga kaya dan kurang mampu, kota besar
                                    dan daerah terpencil, dengan solusi digital
                                    yang mudah dijangkau.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#F5A623]/10 rounded-2xl mb-6">
                                <Users className="text-[#F5A623]" size={28} />
                                <span className="font-bold text-xl text-[#F5A623]">
                                    Tim Kami
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#1A2E4A] mb-6">
                                Tim Lavan
                            </h2>
                            <p className="text-xl text-[#2D3748] max-w-3xl mx-auto">
                                Multidisiplin team yang berdedikasi untuk
                                pendidikan inklusif
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#3BBFAD]/5 to-white rounded-3xl p-12 border border-[#3BBFAD]/20">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#3BBFAD] to-[#2A9989] rounded-2xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                                        UX
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-[#1A2E4A] mb-2">
                                            UX Researcher & Designer
                                        </h4>
                                        <p className="text-[#2D3748]">
                                            Memahami kebutuhan pengguna melalui
                                            riset mendalam dengan orang tua,
                                            anak, dan psikolog klinis
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#F5A623] to-[#E09420] rounded-2xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                                        AI
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-[#1A2E4A] mb-2">
                                            AI Engineer
                                        </h4>
                                        <p className="text-[#2D3748]">
                                            Mengembangkan algoritma machine
                                            learning untuk deteksi pola dan
                                            personalisasi terapi
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#1A2E4A] to-[#2A4A6A] rounded-2xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                                        ED
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-[#1A2E4A] mb-2">
                                            Education Specialist
                                        </h4>
                                        <p className="text-[#2D3748]">
                                            Merancang konten terapi berdasarkan
                                            metode Orton-Gillingham dan
                                            kurikulum Indonesia
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#6FCF97] to-[#5FBF87] rounded-2xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                                        PSY
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-[#1A2E4A] mb-2">
                                            Psikolog Klinis (Advisor)
                                        </h4>
                                        <p className="text-[#2D3748]">
                                            Validasi klinis untuk memastikan
                                            metode skrining dan terapi sesuai
                                            standar profesional
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Methodology */}
                <section className="py-24 bg-gradient-to-b from-[#F7F5F2] to-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#1A2E4A]/10 rounded-2xl mb-6">
                                <Lightbulb
                                    className="text-[#1A2E4A]"
                                    size={28}
                                />
                                <span className="font-bold text-xl text-[#1A2E4A]">
                                    Metode Kami
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#1A2E4A] mb-6">
                                Design Thinking & Participatory Design
                            </h2>
                            <p className="text-xl text-[#2D3748] max-w-3xl mx-auto">
                                Pendekatan berbasis riset untuk menciptakan
                                solusi yang benar-benar dibutuhkan pengguna
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="bg-white rounded-3xl p-8 shadow-lg">
                                <h3 className="text-2xl font-bold text-[#1A2E4A] mb-6">
                                    Design Thinking Process
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-[#3BBFAD]/20 rounded-xl flex items-center justify-center text-[#3BBFAD] font-bold flex-shrink-0">
                                            1
                                        </div>
                                        <div>
                                            <div className="font-bold text-[#1A2E4A]">
                                                Empathize
                                            </div>
                                            <div className="text-sm text-[#2D3748]">
                                                Wawancara mendalam dengan 15
                                                orang tua & anak
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-[#3BBFAD]/20 rounded-xl flex items-center justify-center text-[#3BBFAD] font-bold flex-shrink-0">
                                            2
                                        </div>
                                        <div>
                                            <div className="font-bold text-[#1A2E4A]">
                                                Define
                                            </div>
                                            <div className="text-sm text-[#2D3748]">
                                                Identifikasi pain points &
                                                kebutuhan spesifik
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-[#3BBFAD]/20 rounded-xl flex items-center justify-center text-[#3BBFAD] font-bold flex-shrink-0">
                                            3
                                        </div>
                                        <div>
                                            <div className="font-bold text-[#1A2E4A]">
                                                Ideate
                                            </div>
                                            <div className="text-sm text-[#2D3748]">
                                                Brainstorming solusi dengan
                                                stakeholder
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-[#3BBFAD]/20 rounded-xl flex items-center justify-center text-[#3BBFAD] font-bold flex-shrink-0">
                                            4
                                        </div>
                                        <div>
                                            <div className="font-bold text-[#1A2E4A]">
                                                Prototype
                                            </div>
                                            <div className="text-sm text-[#2D3748]">
                                                Low-fi to high-fi prototype
                                                dengan iterasi cepat
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-[#3BBFAD]/20 rounded-xl flex items-center justify-center text-[#3BBFAD] font-bold flex-shrink-0">
                                            5
                                        </div>
                                        <div>
                                            <div className="font-bold text-[#1A2E4A]">
                                                Test
                                            </div>
                                            <div className="text-sm text-[#2D3748]">
                                                Usability testing dengan 20
                                                keluarga
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-lg">
                                <h3 className="text-2xl font-bold text-[#1A2E4A] mb-6">
                                    Participatory Design
                                </h3>
                                <p className="text-[#2D3748] mb-6 leading-relaxed">
                                    Kami melibatkan pengguna aktual (orang tua,
                                    anak, psikolog) dalam setiap tahap desain
                                    untuk memastikan solusi benar-benar sesuai
                                    kebutuhan mereka.
                                </p>
                                <div className="space-y-4">
                                    <div className="bg-[#F5A623]/5 rounded-xl p-4">
                                        <div className="font-bold text-[#1A2E4A] mb-1">
                                            Co-Design Workshop
                                        </div>
                                        <div className="text-sm text-[#2D3748]">
                                            Orang tua memberi input untuk fitur
                                            Parent Mode
                                        </div>
                                    </div>
                                    <div className="bg-[#3BBFAD]/5 rounded-xl p-4">
                                        <div className="font-bold text-[#1A2E4A] mb-1">
                                            Child Play Testing
                                        </div>
                                        <div className="text-sm text-[#2D3748]">
                                            Anak-anak mencoba game dan memberi
                                            feedback
                                        </div>
                                    </div>
                                    <div className="bg-[#1A2E4A]/5 rounded-xl p-4">
                                        <div className="font-bold text-[#1A2E4A] mb-1">
                                            Clinical Review
                                        </div>
                                        <div className="text-sm text-[#2D3748]">
                                            Psikolog validasi konten terapi dan
                                            skrining
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Validation Metrics */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#6FCF97]/10 rounded-2xl mb-6">
                                <Award className="text-[#6FCF97]" size={28} />
                                <span className="font-bold text-xl text-[#6FCF97]">
                                    Validasi
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#1A2E4A] mb-6">
                                Terbukti Efektif & User-Friendly
                            </h2>
                            <p className="text-xl text-[#2D3748] max-w-3xl mx-auto">
                                Hasil testing dengan pengguna nyata
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-32 h-32 bg-gradient-to-br from-[#3BBFAD] to-[#2A9989] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                                    <span className="text-5xl font-bold text-white font-mono">
                                        89
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-[#1A2E4A] mb-3">
                                    SUS Score
                                </h3>
                                <p className="text-[#2D3748]">
                                    System Usability Scale — Excellent
                                </p>
                                <div className="mt-4 inline-block px-4 py-2 bg-[#6FCF97]/20 rounded-full">
                                    <span className="text-sm font-bold text-[#6FCF97]">
                                        Grade: A
                                    </span>
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="w-32 h-32 bg-gradient-to-br from-[#F5A623] to-[#E09420] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                                    <span className="text-5xl font-bold text-white font-mono">
                                        7
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-[#1A2E4A] mb-3">
                                    SEQ Score
                                </h3>
                                <p className="text-[#2D3748]">
                                    Single Ease Question (0-7 scale)
                                </p>
                                <div className="mt-4 inline-block px-4 py-2 bg-[#6FCF97]/20 rounded-full">
                                    <span className="text-sm font-bold text-[#6FCF97]">
                                        Very Easy to Use
                                    </span>
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="w-32 h-32 bg-gradient-to-br from-[#1A2E4A] to-[#2A4A6A] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                                    <span className="text-5xl font-bold text-white font-mono">
                                        90%
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-[#1A2E4A] mb-3">
                                    User Satisfaction
                                </h3>
                                <p className="text-[#2D3748]">
                                    Overall satisfaction dengan platform
                                </p>
                                <div className="mt-4 inline-block px-4 py-2 bg-[#6FCF97]/20 rounded-full">
                                    <span className="text-sm font-bold text-[#6FCF97]">
                                        Highly Satisfied
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 bg-gradient-to-br from-[#3BBFAD]/10 to-white rounded-3xl p-8 border border-[#3BBFAD]/20 text-center">
                            <p className="text-lg text-[#2D3748] leading-relaxed">
                                <strong className="text-[#1A2E4A]">
                                    Catatan:
                                </strong>{" "}
                                Metrics ini diperoleh dari usability testing
                                dengan 20 keluarga pengguna aktual (orang tua
                                dan anak) serta validasi oleh 3 psikolog klinis
                                berlisensi di Indonesia.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Legal Compliance */}
                <section className="py-24 bg-gradient-to-b from-[#F7F5F2] to-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-3xl p-12 shadow-xl border-l-4 border-[#1A2E4A]">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 bg-[#1A2E4A]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <Globe
                                        className="text-[#1A2E4A]"
                                        size={32}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-[#1A2E4A] mb-4">
                                        Sesuai UU No. 8/2016
                                    </h3>
                                    <p className="text-lg text-[#2D3748] leading-relaxed mb-4">
                                        Lexit berkomitmen penuh terhadap{" "}
                                        <strong>
                                            Undang-Undang Republik Indonesia
                                            Nomor 8 Tahun 2016 tentang
                                            Penyandang Disabilitas
                                        </strong>
                                        , khususnya:
                                    </p>
                                    <ul className="space-y-3 text-[#2D3748]">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#3BBFAD] font-bold">
                                                •
                                            </span>
                                            <span>
                                                <strong>Pasal 10:</strong> Hak
                                                pendidikan yang inklusif dan
                                                bebas diskriminasi
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#3BBFAD] font-bold">
                                                •
                                            </span>
                                            <span>
                                                <strong>Pasal 40:</strong> Akses
                                                layanan deteksi dini dan
                                                intervensi
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#3BBFAD] font-bold">
                                                •
                                            </span>
                                            <span>
                                                <strong>Pasal 129:</strong>{" "}
                                                Teknologi asistif untuk
                                                meningkatkan kualitas hidup
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-gradient-to-br from-[#3BBFAD] to-[#2A9989]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <Heart className="text-white" size={40} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Bergabunglah dalam Misi Kami
                        </h2>
                        <p className="text-xl text-white/90 mb-10">
                            Bersama kita ciptakan Indonesia yang lebih inklusif
                            untuk semua anak
                        </p>
                        <a
                            href="/pricing"
                            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[#3BBFAD] rounded-2xl font-bold text-lg hover:bg-[#F5A623] hover:text-white transition-all shadow-2xl hover:scale-105"
                        >
                            Mulai Gratis Sekarang
                        </a>
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
