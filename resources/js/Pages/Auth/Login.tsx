import { Head, Link, useForm } from "@inertiajs/react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useState } from "react";

const F = "'Nunito', sans-serif";

// ── Fox character ─────────────────────────────────────────────────────────────
function FoxHero() {
    return (
        <svg width="170" height="170" viewBox="0 0 160 160" fill="none"
            style={{ filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.25))", animation: "float 3s ease-in-out infinite alternate" }}>
            <ellipse cx="80" cy="110" rx="48" ry="42" fill="#FF7043"/>
            <circle cx="80" cy="68" r="44" fill="#FF7043"/>
            <polygon points="42,34 30,6 60,30" fill="#FF7043"/>
            <polygon points="118,34 130,6 100,30" fill="#FF7043"/>
            <polygon points="42,32 32,9 58,29" fill="#FFCCBC"/>
            <polygon points="118,32 128,9 102,29" fill="#FFCCBC"/>
            <ellipse cx="80" cy="76" rx="26" ry="22" fill="#FFCCBC"/>
            <circle cx="66" cy="58" r="9" fill="#2C2C2C"/>
            <circle cx="94" cy="58" r="9" fill="#2C2C2C"/>
            <circle cx="68" cy="56" r="3" fill="white"/>
            <circle cx="96" cy="56" r="3" fill="white"/>
            <ellipse cx="80" cy="76" rx="6" ry="4" fill="#2C2C2C"/>
            <path d="M72 86 Q80 93 88 86" stroke="#BF5530" strokeWidth="3" fill="none" strokeLinecap="round"/>
            {/* Tail */}
            <ellipse cx="120" cy="112" rx="24" ry="38" fill="#CC5530" transform="rotate(18 120 112)"/>
            <ellipse cx="126" cy="124" rx="12" ry="18" fill="#FFCCBC" transform="rotate(18 126 124)"/>
            {/* Book prop */}
            <rect x="30" y="130" width="55" height="12" rx="5" fill="#FFD93D" opacity="0.9"/>
            <rect x="32" y="122" width="51" height="14" rx="4" fill="white" opacity="0.9"/>
            <line x1="57" y1="122" x2="57" y2="136" stroke="#ddd" strokeWidth="1.5"/>
        </svg>
    );
}

// ── Floating star decoration ──────────────────────────────────────────────────
function Star({ x, y, color, size, delay }: { x: string; y: string; color: string; size: number; delay: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill={color}
            style={{ position: "absolute", left: x, top: y, opacity: 0.7, animation: `float ${2.5 + delay}s ease-in-out ${delay}s infinite alternate` }}>
            <polygon points="10,1 12.9,7.5 20,8.2 14.5,13.3 16.2,20 10,16.5 3.8,20 5.5,13.3 0,8.2 7.1,7.5"/>
        </svg>
    );
}

export default function Login({ status, canResetPassword }: { status?: string; canResetPassword: boolean }) {
    const [showPass, setShowPass] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({ email: "", password: "", remember: false });
    const submit = (e: React.FormEvent) => { e.preventDefault(); post(route("login"), { onFinish: () => reset("password") }); };

    const inputStyle = (hasError: boolean) => ({
        width: "100%",
        padding: "13px 14px 13px 42px",
        border: `3px solid ${hasError ? "#FF6B6B" : "#FFE566"}`,
        borderRadius: 16,
        fontSize: 15,
        fontFamily: F,
        fontWeight: 600,
        background: hasError ? "#FFF0F0" : "white",
        color: "#1A1A2E",
        outline: "none",
        transition: "border-color 0.15s, box-shadow 0.15s",
    } as React.CSSProperties);

    return (
        <div style={{ minHeight: "100vh", display: "flex", fontFamily: F }}>
            <Head title="Masuk"/>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&display=swap');
                * { box-sizing: border-box; }
                @keyframes float { 0%{transform:translateY(0) rotate(0deg)} 100%{transform:translateY(-14px) rotate(8deg)} }
                @keyframes wiggle { 0%,100%{transform:rotate(-3deg)} 50%{transform:rotate(3deg)} }
                .login-input:focus { border-color: #FF6B6B !important; box-shadow: 0 0 0 4px rgba(255,107,107,0.18) !important; }
                .login-btn:hover { transform: translateY(-3px); box-shadow: 0 8px 0 #CC4444 !important; }
                .login-btn:active { transform: translateY(1px); box-shadow: 0 2px 0 #CC4444 !important; }
            `}</style>

            {/* ── Left panel — kids colorful ── */}
            <div className="hidden lg:flex" style={{
                width: "48%",
                background: "linear-gradient(160deg, #FF6B6B 0%, #FF8E53 50%, #FFD93D 100%)",
                flexDirection: "column", alignItems: "center", justifyContent: "center",
                padding: "60px 48px", position: "relative", overflow: "hidden",
            }}>
                {/* Wavy bottom edge */}
                <svg viewBox="0 0 100 12" preserveAspectRatio="none"
                    style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%", height: 40 }}>
                    <path d="M0 12 L0 6 Q12.5 0 25 6 Q37.5 12 50 6 Q62.5 0 75 6 Q87.5 12 100 6 L100 12 Z" fill="white"/>
                </svg>

                {/* Star decorations */}
                <Star x="7%" y="12%" color="#fff" size={20} delay={0}/>
                <Star x="88%" y="10%" color="#FF6B6B" size={16} delay={0.5}/>
                <Star x="92%" y="75%" color="#FFD93D" size={22} delay={1}/>
                <Star x="4%" y="78%" color="#white" size={14} delay={0.8}/>
                <Star x="82%" y="44%" color="rgba(255,255,255,0.6)" size={12} delay={1.4}/>

                {/* Floating circles */}
                {[
                    { x: "6%", y: "18%", size: 48, color: "rgba(255,255,255,0.22)", border: "rgba(255,255,255,0.4)", delay: 0 },
                    { x: "80%", y: "14%", size: 36, color: "rgba(255,255,255,0.18)", border: "rgba(255,255,255,0.35)", delay: 0.7 },
                    { x: "78%", y: "82%", size: 52, color: "rgba(255,255,255,0.15)", border: "rgba(255,255,255,0.3)", delay: 1.2 },
                    { x: "2%", y: "65%", size: 40, color: "rgba(255,255,255,0.2)", border: "rgba(255,255,255,0.4)", delay: 0.4 },
                ].map((c, i) => (
                    <div key={i} style={{
                        position: "absolute", left: c.x, top: c.y,
                        width: c.size, height: c.size, borderRadius: "50%",
                        background: c.color, border: `3px solid ${c.border}`,
                        animation: `float ${3 + c.delay}s ease-in-out ${c.delay}s infinite alternate`,
                    }}/>
                ))}

                {/* Fox character */}
                <div style={{ position: "relative", zIndex: 2 }}>
                    <FoxHero/>
                </div>

                {/* Text */}
                <h1 style={{
                    color: "white", fontWeight: 900, fontSize: 38, textAlign: "center",
                    margin: "20px 0 12px", lineHeight: 1.2,
                    textShadow: "0 3px 10px rgba(0,0,0,0.15)",
                    position: "relative", zIndex: 2,
                }}>
                    Selamat Datang<br/>Kembali!
                </h1>
                <p style={{
                    color: "rgba(255,255,255,0.92)", fontSize: 15, textAlign: "center",
                    fontWeight: 700, lineHeight: 1.7, maxWidth: 300,
                    position: "relative", zIndex: 2,
                }}>
                    Pantau perkembangan baca anak kamu dan lihat progress mereka hari ini.
                </p>

                {/* Stat badges */}
                <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap", justifyContent: "center", position: "relative", zIndex: 2 }}>
                    {[
                        { num: "5M+",  label: "Pelajar Indonesia",    bg: "rgba(255,255,255,0.25)", border: "rgba(255,255,255,0.5)" },
                        { num: "2M+",  label: "Kasus Disleksia/Thn", bg: "rgba(255,255,255,0.25)", border: "rgba(255,255,255,0.5)" },
                        { num: "76%",  label: "Tingkat Keberhasilan", bg: "rgba(255,255,255,0.25)", border: "rgba(255,255,255,0.5)" },
                    ].map(({ num, label, bg, border }) => (
                        <div key={label} style={{
                            textAlign: "center", background: bg,
                            borderRadius: 20, padding: "14px 18px",
                            border: `2.5px solid ${border}`,
                            backdropFilter: "blur(4px)",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                        }}>
                            <div style={{ fontSize: 26, fontWeight: 900, color: "white", lineHeight: 1 }}>{num}</div>
                            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.85)", fontWeight: 700, marginTop: 5 }}>{label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Right panel — form ── */}
            <div style={{
                flex: 1,
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "40px 24px",
                background: "linear-gradient(180deg, #FFF9F0 0%, #FFFDE7 100%)",
            }}>
                <div style={{ width: "100%", maxWidth: 440 }}>

                    {/* Mobile logo */}
                    <div className="lg:hidden" style={{ textAlign: "center", marginBottom: 28 }}>
                        <Link href="/" style={{ textDecoration: "none" }}>
                            <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                                <svg width="40" height="40" viewBox="0 0 44 44" fill="none">
                                    <ellipse cx="22" cy="26" rx="13" ry="11" fill="#FF7043"/>
                                    <circle cx="22" cy="15" r="10" fill="#FF7043"/>
                                    <polygon points="12,10 8,2 16,8" fill="#FF7043"/>
                                    <polygon points="32,10 36,2 28,8" fill="#FF7043"/>
                                    <ellipse cx="22" cy="17" rx="6" ry="5" fill="#FFCCBC"/>
                                    <circle cx="19" cy="13" r="1.8" fill="#2C2C2C"/>
                                    <circle cx="25" cy="13" r="1.8" fill="#2C2C2C"/>
                                </svg>
                                <span style={{ fontSize: 24, fontWeight: 900, color: "#FF6B6B" }}>LEXIT</span>
                            </div>
                        </Link>
                    </div>

                    {/* Card */}
                    <div style={{
                        background: "white",
                        borderRadius: 32,
                        boxShadow: "0 8px 0 #FFD700, 0 14px 40px rgba(0,0,0,0.09)",
                        border: "3px solid #FFE566",
                        padding: "40px 36px",
                    }}>
                        <div style={{ marginBottom: 28 }}>
                            <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1A1A2E", margin: "0 0 8px" }}>Masuk ke Lexit</h2>
                            <p style={{ fontSize: 14, color: "#888", fontWeight: 600, margin: 0 }}>Gunakan email dan password kamu</p>
                        </div>

                        {status && (
                            <div style={{ marginBottom: 20, padding: "12px 16px", background: "#F0FFF4", border: "3px solid #A8E6B0", borderRadius: 16, fontSize: 14, color: "#338844", fontWeight: 700 }}>
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                            {/* Email */}
                            <div>
                                <label style={{ fontSize: 14, fontWeight: 800, color: "#1A1A2E", display: "block", marginBottom: 8 }}>Email</label>
                                <div style={{ position: "relative" }}>
                                    <Mail size={16} color="#aaa" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}/>
                                    <input
                                        className="login-input"
                                        type="email"
                                        value={data.email}
                                        onChange={e => setData("email", e.target.value)}
                                        placeholder="orangtua@email.com"
                                        autoComplete="username"
                                        required
                                        style={inputStyle(!!errors.email)}
                                    />
                                </div>
                                {errors.email && <p style={{ color: "#FF6B6B", fontSize: 12, fontWeight: 700, marginTop: 4 }}>{errors.email}</p>}
                            </div>

                            {/* Password */}
                            <div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                                    <label style={{ fontSize: 14, fontWeight: 800, color: "#1A1A2E" }}>Password</label>
                                    {canResetPassword && (
                                        <Link href={route("password.request")} style={{ fontSize: 12, color: "#FF6B6B", fontWeight: 800, textDecoration: "none" }}>
                                            Lupa password?
                                        </Link>
                                    )}
                                </div>
                                <div style={{ position: "relative" }}>
                                    <Lock size={16} color="#aaa" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}/>
                                    <input
                                        className="login-input"
                                        type={showPass ? "text" : "password"}
                                        value={data.password}
                                        onChange={e => setData("password", e.target.value)}
                                        placeholder="••••••••"
                                        autoComplete="current-password"
                                        required
                                        style={{ ...inputStyle(!!errors.password), paddingRight: 44 }}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPass(!showPass)}
                                        style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", padding: 2 }}
                                    >
                                        {showPass ? <EyeOff size={17} color="#aaa"/> : <Eye size={17} color="#aaa"/>}
                                    </button>
                                </div>
                                {errors.password && <p style={{ color: "#FF6B6B", fontSize: 12, fontWeight: 700, marginTop: 4 }}>{errors.password}</p>}
                            </div>

                            {/* Remember me */}
                            <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                                <div style={{ position: "relative", width: 20, height: 20, flexShrink: 0 }}>
                                    <input
                                        type="checkbox"
                                        checked={data.remember}
                                        onChange={e => setData("remember", e.target.checked)}
                                        style={{ width: 20, height: 20, accentColor: "#FF6B6B", cursor: "pointer", borderRadius: 6 }}
                                    />
                                </div>
                                <span style={{ fontSize: 14, color: "#555", fontWeight: 700 }}>Ingat saya</span>
                            </label>

                            {/* Submit button */}
                            <button
                                type="submit"
                                disabled={processing}
                                className="login-btn"
                                style={{
                                    width: "100%", padding: "15px",
                                    background: processing ? "#ccc" : "#FF6B6B",
                                    color: "white", fontWeight: 900, fontSize: 16,
                                    borderRadius: 999, border: "none",
                                    cursor: processing ? "not-allowed" : "pointer",
                                    boxShadow: processing ? "0 4px 0 #aaa" : "0 5px 0 #CC4444",
                                    fontFamily: F, transition: "all 0.15s",
                                }}
                            >
                                {processing ? "Memproses..." : "Masuk Sekarang"}
                            </button>
                        </form>

                        {/* Divider */}
                        <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "20px 0 0" }}>
                            <div style={{ flex: 1, height: 2, background: "#F3F4F6", borderRadius: 2 }}/>
                            <span style={{ fontSize: 13, color: "#bbb", fontWeight: 700 }}>atau</span>
                            <div style={{ flex: 1, height: 2, background: "#F3F4F6", borderRadius: 2 }}/>
                        </div>

                        <p style={{ textAlign: "center", fontSize: 14, color: "#888", fontWeight: 600, marginTop: 16 }}>
                            Belum punya akun?{" "}
                            <Link href={route("register")} style={{ color: "#FF6B6B", fontWeight: 900, textDecoration: "none" }}>
                                Daftar Gratis
                            </Link>
                        </p>
                    </div>

                    {/* Bottom note */}
                    <p style={{ textAlign: "center", fontSize: 12, color: "#aaa", fontWeight: 600, marginTop: 20 }}>
                        Platform deteksi disleksia untuk anak Indonesia
                    </p>
                </div>
            </div>
        </div>
    );
}