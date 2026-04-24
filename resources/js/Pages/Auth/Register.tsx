import { Head, Link, useForm } from "@inertiajs/react";
import { Eye, EyeOff, Brain, Mail, Lock, User } from "lucide-react";
import { useState } from "react";

export default function Register() {
    const [showPass, setShowPass] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    const steps = [
        { icon: "📸", title: "Upload Foto", desc: "Foto tulisan tangan anak" },
        { icon: "🤖", title: "AI Analisis", desc: "Gemini AI membaca huruf" },
        { icon: "📊", title: "Hasil & Laporan", desc: "Pantau perkembangan" },
    ];

    return (
        <div className="min-h-screen bg-[#F7F5F2] flex">
            <Head title="Daftar" />

            {/* Kiri — Ilustrasi */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#1A2E4A] via-[#2A4A6B] to-[#3BBFAD] flex-col items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    {["🧠", "📚", "✏️", "🎮", "⭐", "🏆"].map((em, i) => (
                        <div
                            key={i}
                            className="absolute text-4xl"
                            style={{
                                top: `${8 + i * 15}%`,
                                left: `${5 + i * 15}%`,
                                transform: `rotate(${-20 + i * 8}deg)`,
                            }}
                        >
                            {em}
                        </div>
                    ))}
                </div>
                <div className="relative text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                        <Brain size={48} />
                    </div>
                    <h1 className="text-4xl font-bold mb-4">
                        Mulai Perjalanan
                        <br />
                        Belajar Anak Kamu
                    </h1>
                    <p className="text-white/80 text-lg max-w-sm mb-10">
                        Gratis selamanya. Daftarkan akun dan mulai deteksi
                        disleksia hari ini.
                    </p>
                    <div className="space-y-4 text-left">
                        {steps.map((s, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-4 bg-white/10 rounded-2xl p-4"
                            >
                                <div className="text-3xl">{s.icon}</div>
                                <div>
                                    <p className="font-bold">{s.title}</p>
                                    <p className="text-white/60 text-sm">
                                        {s.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Kanan — Form */}
            <div className="flex-1 flex items-center justify-center p-6 lg:p-12 overflow-y-auto">
                <div className="w-full max-w-md py-6">
                    {/* Logo mobile */}
                    <div className="lg:hidden text-center mb-8">
                        <Link href="/">
                            <img
                                src="/LEXIT LOGO.svg"
                                alt="Lexit"
                                className="h-16 mx-auto"
                            />
                        </Link>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-[#1A2E4A]">
                                Buat Akun Gratis
                            </h2>
                            <p className="text-[#2D3748] mt-1 text-sm">
                                Satu akun untuk orang tua dan semua profil anak
                            </p>
                        </div>

                        <form onSubmit={submit} className="space-y-4">
                            {/* Nama */}
                            <div>
                                <label className="text-sm font-semibold text-[#1A2E4A] mb-1.5 block">
                                    Nama Lengkap
                                </label>
                                <div className="relative">
                                    <User
                                        size={16}
                                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                                    />
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        placeholder="Nama orang tua"
                                        className={`w-full pl-10 pr-4 py-3 border-2 rounded-2xl text-sm focus:outline-none transition-all ${errors.name ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#3BBFAD]"}`}
                                        autoComplete="name"
                                        required
                                    />
                                </div>
                                {errors.name && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-sm font-semibold text-[#1A2E4A] mb-1.5 block">
                                    Email
                                </label>
                                <div className="relative">
                                    <Mail
                                        size={16}
                                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                                    />
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        placeholder="orangtua@email.com"
                                        className={`w-full pl-10 pr-4 py-3 border-2 rounded-2xl text-sm focus:outline-none transition-all ${errors.email ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#3BBFAD]"}`}
                                        autoComplete="username"
                                        required
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Password */}
                            <div>
                                <label className="text-sm font-semibold text-[#1A2E4A] mb-1.5 block">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock
                                        size={16}
                                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                                    />
                                    <input
                                        type={showPass ? "text" : "password"}
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        placeholder="Minimal 8 karakter"
                                        className={`w-full pl-10 pr-12 py-3 border-2 rounded-2xl text-sm focus:outline-none transition-all ${errors.password ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#3BBFAD]"}`}
                                        autoComplete="new-password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPass(!showPass)}
                                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#3BBFAD]"
                                    >
                                        {showPass ? (
                                            <EyeOff size={16} />
                                        ) : (
                                            <Eye size={16} />
                                        )}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            {/* Konfirmasi Password */}
                            <div>
                                <label className="text-sm font-semibold text-[#1A2E4A] mb-1.5 block">
                                    Konfirmasi Password
                                </label>
                                <div className="relative">
                                    <Lock
                                        size={16}
                                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                                    />
                                    <input
                                        type={showConfirm ? "text" : "password"}
                                        value={data.password_confirmation}
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value,
                                            )
                                        }
                                        placeholder="Ulangi password"
                                        className={`w-full pl-10 pr-12 py-3 border-2 rounded-2xl text-sm focus:outline-none transition-all ${errors.password_confirmation ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#3BBFAD]"}`}
                                        autoComplete="new-password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirm(!showConfirm)
                                        }
                                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#3BBFAD]"
                                    >
                                        {showConfirm ? (
                                            <EyeOff size={16} />
                                        ) : (
                                            <Eye size={16} />
                                        )}
                                    </button>
                                </div>
                                {errors.password_confirmation && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.password_confirmation}
                                    </p>
                                )}
                            </div>

                            {/* Info */}
                            <div className="flex items-start gap-2 p-3 bg-[#3BBFAD]/10 rounded-2xl">
                                <span className="text-lg">🔒</span>
                                <p className="text-xs text-[#1A2E4A]">
                                    Data anak kamu aman dan terenkripsi. Kami
                                    tidak menjual data ke pihak ketiga.
                                </p>
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full py-3.5 bg-[#3BBFAD] text-white rounded-2xl font-bold text-base hover:bg-[#2A9989] disabled:opacity-60 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
                            >
                                {processing
                                    ? "Mendaftarkan..."
                                    : "Daftar Sekarang — Gratis!"}
                            </button>
                        </form>

                        <p className="text-center text-sm text-[#2D3748] mt-6">
                            Sudah punya akun?{" "}
                            <Link
                                href={route("login")}
                                className="text-[#3BBFAD] font-bold hover:underline"
                            >
                                Masuk di sini
                            </Link>
                        </p>
                    </div>

                    {/* Trust badges */}
                    <div className="flex items-center justify-center gap-6 mt-6 text-xs text-gray-400">
                        <span>✅ Gratis Selamanya</span>
                        <span>🔒 Data Aman</span>
                        <span>🇮🇩 Dibuat di Indonesia</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
