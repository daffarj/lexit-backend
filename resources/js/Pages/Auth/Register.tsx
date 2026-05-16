import { Head, Link, useForm } from "@inertiajs/react";
import { Eye, EyeOff, Mail, Lock, User, Shield, Check, Flag } from "lucide-react";
import { useState } from "react";

const F = "'Nunito', sans-serif";

function RabbitHero() {
    return (
        <svg width="150" height="165" viewBox="0 0 150 165" fill="none" style={{ animation: "float 3s ease-in-out infinite alternate" }}>
            <ellipse cx="75" cy="120" rx="42" ry="40" fill="#A8D8A8"/>
            <circle cx="75" cy="82" r="38" fill="#A8D8A8"/>
            <ellipse cx="56" cy="36" rx="14" ry="32" fill="#A8D8A8"/>
            <ellipse cx="94" cy="36" rx="14" ry="32" fill="#A8D8A8"/>
            <ellipse cx="56" cy="36" rx="8" ry="24" fill="#F8BBD9"/>
            <ellipse cx="94" cy="36" rx="8" ry="24" fill="#F8BBD9"/>
            <ellipse cx="75" cy="90" rx="22" ry="17" fill="#C8EAC8"/>
            <circle cx="63" cy="76" r="8" fill="#2C2C2C"/>
            <circle cx="87" cy="76" r="8" fill="#2C2C2C"/>
            <circle cx="65" cy="74" r="2.5" fill="white"/>
            <circle cx="89" cy="74" r="2.5" fill="white"/>
            <ellipse cx="75" cy="90" rx="5.5" ry="3.5" fill="#F48FB1"/>
            <path d="M68 97 Q75 104 82 97" stroke="#C8EAC8" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <line x1="48" y1="88" x2="66" y2="90" stroke="#8BC88B" strokeWidth="1.5"/>
            <line x1="48" y1="92" x2="66" y2="92" stroke="#8BC88B" strokeWidth="1.5"/>
            <line x1="84" y1="90" x2="102" y2="88" stroke="#8BC88B" strokeWidth="1.5"/>
            <line x1="84" y1="92" x2="102" y2="92" stroke="#8BC88B" strokeWidth="1.5"/>
            <ellipse cx="58" cy="140" rx="18" ry="22" fill="#90C890" transform="rotate(-12 58 140)"/>
            <ellipse cx="92" cy="140" rx="18" ry="22" fill="#90C890" transform="rotate(12 92 140)"/>
        </svg>
    );
}

function FieldInput({ label, type, value, onChange, placeholder, autoComplete, error, showToggle, onToggle, show }: any) {
    return (
        <div>
            <label style={{ fontSize: 14, fontWeight: 800, color: "#1A1A2E", display: "block", marginBottom: 8 }}>{label}</label>
            <div style={{ position: "relative" }}>
                {type === "email" && <Mail size={16} color="#aaa" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }}/>}
                {(type === "password" || showToggle) && <Lock size={16} color="#aaa" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }}/>}
                {type === "text" && !showToggle && <User size={16} color="#aaa" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }}/>}
                <input type={showToggle ? (show ? "text" : "password") : type} value={value} onChange={onChange} placeholder={placeholder} autoComplete={autoComplete} required
                    style={{ width: "100%", padding: "12px 44px 12px 40px", border: `3px solid ${error ? "#FF6B6B" : "#E5E7EB"}`, borderRadius: 16, fontSize: 14, fontFamily: F, fontWeight: 600, background: error ? "#FFF0F0" : "white", color: "#1A1A2E" }}/>
                {showToggle && (
                    <button type="button" onClick={onToggle} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer" }}>
                        {show ? <EyeOff size={16} color="#aaa"/> : <Eye size={16} color="#aaa"/>}
                    </button>
                )}
            </div>
            {error && <p style={{ color: "#FF6B6B", fontSize: 12, fontWeight: 700, marginTop: 4 }}>{error}</p>}
        </div>
    );
}

export default function Register() {
    const [showPass, setShowPass] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({ name: "", email: "", password: "", password_confirmation: "" });
    const submit = (e: React.FormEvent) => { e.preventDefault(); post(route("register"), { onFinish: () => reset("password", "password_confirmation") }); };

    return (
        <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #F0FFF4 0%, #FFF9F0 100%)", display: "flex", fontFamily: F }}>
            <Head title="Daftar"/>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&display=swap');
                * { box-sizing: border-box; }
                @keyframes float { 0%{transform:translateY(0)} 100%{transform:translateY(-14px)} }
                input:focus { border-color: #6BCB77 !important; outline: none; box-shadow: 0 0 0 3px rgba(107,203,119,0.2) !important; }
            `}</style>

            {/* Left panel */}
            <div className="hidden lg:flex" style={{ width: "45%", background: "linear-gradient(160deg, #0F3A1F 0%, #1B6B35 60%, #2D9B55 100%)", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 48px", position: "relative", overflow: "hidden" }}>
                {/* Floating dots */}
                {[["6%","12%","#FFD93D"], ["82%","8%","#FF6B6B"], ["88%","80%","#4D96FF"], ["4%","76%","#6BCB77"]].map(([x,y,c], i) => (
                    <div key={i} style={{ position: "absolute", left: x, top: y, width: 44, height: 44, borderRadius: "50%", background: c + "40", border: `3px solid ${c}60`, animation: `float ${2.5+i*0.5}s ease-in-out ${i*0.3}s infinite alternate` }}/>
                ))}
                {/* Star decorations */}
                {[["14%","40%","#FFD93D"], ["88%","42%","#FF6B6B"]].map(([x,y,c], i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill={c} style={{ position: "absolute", left: x, top: y, opacity: 0.6 }}>
                        <polygon points="10,1 12.9,7.5 20,8.2 14.5,13.3 16.2,20 10,16.5 3.8,20 5.5,13.3 0,8.2 7.1,7.5"/>
                    </svg>
                ))}
                <RabbitHero/>
                <h1 style={{ color: "white", fontWeight: 900, fontSize: 32, textAlign: "center", margin: "24px 0 12px", lineHeight: 1.25 }}>Mulai Perjalanan<br/>Belajar Anak Kamu</h1>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, textAlign: "center", fontWeight: 600, lineHeight: 1.7, maxWidth: 300, marginBottom: 32 }}>Gratis selamanya. Daftarkan akun dan mulai deteksi disleksia hari ini.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%", maxWidth: 300 }}>
                    {[
                        { color: "#FFD93D", shadow: "#CC9900", num: "1", title: "Upload Foto", desc: "Foto tulisan tangan anak" },
                        { color: "#FF6B6B", shadow: "#CC4444", num: "2", title: "AI Analisis", desc: "Gemini AI membaca huruf" },
                        { color: "#4D96FF", shadow: "#1A5FCC", num: "3", title: "Hasil & Laporan", desc: "Pantau perkembangan" },
                    ].map(step => (
                        <div key={step.num} style={{ display: "flex", alignItems: "center", gap: 14, background: "rgba(255,255,255,0.12)", borderRadius: 20, padding: "14px 18px", border: "2px solid rgba(255,255,255,0.18)" }}>
                            <div style={{ width: 36, height: 36, borderRadius: "50%", background: step.color, boxShadow: `0 3px 0 ${step.shadow}`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#1A1A2E", fontSize: 16, flexShrink: 0 }}>{step.num}</div>
                            <div>
                                <div style={{ fontWeight: 800, color: "white", fontSize: 14 }}>{step.title}</div>
                                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", fontWeight: 600 }}>{step.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right form */}
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px", overflowY: "auto" }}>
                <div style={{ width: "100%", maxWidth: 460 }}>
                    {/* Mobile logo */}
                    <div className="lg:hidden" style={{ textAlign: "center", marginBottom: 28 }}>
                        <Link href="/" style={{ textDecoration: "none" }}>
                            <span style={{ fontSize: 22, fontWeight: 900, color: "#6BCB77" }}>LEXIT</span>
                        </Link>
                    </div>

                    <div style={{ background: "white", borderRadius: 32, boxShadow: "0 8px 0 #A8E6B0, 0 12px 40px rgba(0,0,0,0.08)", border: "3px solid #A8E6B0", padding: "36px 32px" }}>
                        <div style={{ marginBottom: 28 }}>
                            <h2 style={{ fontSize: 24, fontWeight: 900, color: "#1A1A2E", margin: "0 0 6px" }}>Buat Akun Gratis</h2>
                            <p style={{ fontSize: 14, color: "#888", fontWeight: 600, margin: 0 }}>Satu akun untuk orang tua dan semua profil anak</p>
                        </div>

                        <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            <FieldInput label="Nama Lengkap" type="text" value={data.name} onChange={(e: any) => setData("name", e.target.value)} placeholder="Nama orang tua" autoComplete="name" error={errors.name}/>
                            <FieldInput label="Email" type="email" value={data.email} onChange={(e: any) => setData("email", e.target.value)} placeholder="orangtua@email.com" autoComplete="username" error={errors.email}/>
                            <FieldInput label="Password" type="password" value={data.password} onChange={(e: any) => setData("password", e.target.value)} placeholder="Minimal 8 karakter" autoComplete="new-password" error={errors.password} showToggle onToggle={() => setShowPass(!showPass)} show={showPass}/>
                            <FieldInput label="Konfirmasi Password" type="password" value={data.password_confirmation} onChange={(e: any) => setData("password_confirmation", e.target.value)} placeholder="Ulangi password" autoComplete="new-password" error={errors.password_confirmation} showToggle onToggle={() => setShowConfirm(!showConfirm)} show={showConfirm}/>

                            {/* Security note — SVG icon, no emoji */}
                            <div style={{ display: "flex", alignItems: "flex-start", gap: 10, background: "#F0FFF4", borderRadius: 16, padding: "12px 14px", border: "2px solid #A8E6B0" }}>
                                <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#6BCB77", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 2px 0 #338844" }}>
                                    <Shield size={16} color="white"/>
                                </div>
                                <p style={{ fontSize: 12, color: "#338844", fontWeight: 700, lineHeight: 1.5, margin: 0 }}>Data anak kamu aman dan terenkripsi. Kami tidak menjual data ke pihak ketiga.</p>
                            </div>

                            <button type="submit" disabled={processing} style={{ width: "100%", padding: "14px", background: processing ? "#aaa" : "#6BCB77", color: "white", fontWeight: 900, fontSize: 16, borderRadius: 999, border: "none", cursor: processing ? "not-allowed" : "pointer", boxShadow: processing ? "none" : "0 5px 0 #338844", fontFamily: F }}>
                                {processing ? "Mendaftarkan..." : "Daftar Sekarang — Gratis!"}
                            </button>
                        </form>

                        <p style={{ textAlign: "center", fontSize: 14, color: "#888", fontWeight: 600, marginTop: 20 }}>
                            Sudah punya akun?{" "}
                            <Link href={route("login")} style={{ color: "#6BCB77", fontWeight: 900, textDecoration: "none" }}>Masuk di sini</Link>
                        </p>
                    </div>

                    {/* Trust badges — SVG icons, no emoji */}
                    <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 20, flexWrap: "wrap" }}>
                        {[
                            { icon: <Check size={14} color="#6BCB77"/>, label: "Gratis Selamanya", bg: "#F0FFF4", border: "#A8E6B0" },
                            { icon: <Shield size={14} color="#4D96FF"/>, label: "Data Aman", bg: "#EFF6FF", border: "#BFDBFE" },
                            { icon: <Flag size={14} color="#FF6B6B"/>, label: "Dibuat di Indonesia", bg: "#FFF5F5", border: "#FFAAAA" },
                        ].map(({ icon, label, bg, border }) => (
                            <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#888", fontWeight: 700, background: bg, border: `2px solid ${border}`, borderRadius: 999, padding: "5px 12px" }}>
                                {icon} {label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}