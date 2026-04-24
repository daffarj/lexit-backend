import { Head, Link, useForm } from "@inertiajs/react";
import { Eye, EyeOff, Brain, Mail, Lock } from "lucide-react";
import { useState } from "react";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const [showPass, setShowPass] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("login"), { onFinish: () => reset("password") });
    };

    return (
        <div className="min-h-screen bg-[#F7F5F2] flex">
            <Head title="Masuk" />

            {/* Kiri — Ilustrasi */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#1A2E4A] to-[#3BBFAD] flex-col items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    {["A", "B", "C", "D", "E", "P", "Q", "R"].map((l, i) => (
                        <div
                            key={i}
                            className="absolute text-white font-bold opacity-30"
                            style={{
                                fontSize: `${40 + i * 10}px`,
                                top: `${10 + i * 11}%`,
                                left: `${5 + i * 12}%`,
                                transform: `rotate(${-15 + i * 5}deg)`,
                            }}
                        >
                            {l}
                        </div>
                    ))}
                </div>
                <div className="relative text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                        <Brain size={48} className="text-white" />
                    </div>
                    <h1 className="text-4xl font-bold mb-4">
                        Selamat Datang
                        <br />
                        Kembali!
                    </h1>
                    <p className="text-white/80 text-lg max-w-sm">
                        Pantau perkembangan baca anak kamu dan lihat progress
                        mereka hari ini.
                    </p>
                    <div className="mt-12 flex items-center justify-center gap-6">
                        {[
                            ["5M+", "Pelajar Indonesia"],
                            ["2M+", "Kasus Disleksia/Thn"],
                            ["76%", "Tingkat Keberhasilan"],
                        ].map(([num, label]) => (
                            <div key={label} className="text-center">
                                <div className="text-2xl font-bold">{num}</div>
                                <div className="text-white/60 text-xs mt-1">
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Kanan — Form */}
            <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
                <div className="w-full max-w-md">
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
                                Masuk ke Lexit
                            </h2>
                            <p className="text-[#2D3748] mt-1 text-sm">
                                Gunakan email dan password kamu
                            </p>
                        </div>

                        {status && (
                            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl text-sm text-green-700">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-5">
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
                                <div className="flex justify-between items-center mb-1.5">
                                    <label className="text-sm font-semibold text-[#1A2E4A]">
                                        Password
                                    </label>
                                    {canResetPassword && (
                                        <Link
                                            href={route("password.request")}
                                            className="text-xs text-[#3BBFAD] hover:underline"
                                        >
                                            Lupa password?
                                        </Link>
                                    )}
                                </div>
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
                                        placeholder="••••••••"
                                        className={`w-full pl-10 pr-12 py-3 border-2 rounded-2xl text-sm focus:outline-none transition-all ${errors.password ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#3BBFAD]"}`}
                                        autoComplete="current-password"
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

                            {/* Remember me */}
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                    className="w-4 h-4 accent-[#3BBFAD] rounded"
                                />
                                <span className="text-sm text-[#2D3748]">
                                    Ingat saya
                                </span>
                            </label>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full py-3.5 bg-[#3BBFAD] text-white rounded-2xl font-bold text-base hover:bg-[#2A9989] disabled:opacity-60 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
                            >
                                {processing ? "Memproses..." : "Masuk Sekarang"}
                            </button>
                        </form>

                        <p className="text-center text-sm text-[#2D3748] mt-6">
                            Belum punya akun?{" "}
                            <Link
                                href={route("register")}
                                className="text-[#3BBFAD] font-bold hover:underline"
                            >
                                Daftar Gratis
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
