import { Link } from "@inertiajs/react";
import {
    Brain, Gamepad2, BarChart3, ArrowRight, Shield, Award,
} from "lucide-react";
import { FeatureCard } from "../Components/FeatureCard";
import { StepIndicator } from "../Components/StepIndicator";
import { TestimonialCard } from "../Components/TestimonialCard";
import { StatCard } from "../Components/StatCard";
import AppLayout from "@/Layouts/AppLayout";
import { useState, useEffect, useCallback, useRef } from "react";

// ─── Slide Data ────────────────────────────────────────────────────────────────
const SLIDES = [
    { url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=85&fit=crop", alt: "Anak belajar membaca bersama orang tua" },
    { url: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=1920&q=85&fit=crop", alt: "Anak menggunakan tablet untuk belajar" },
    { url: "https://images.unsplash.com/photo-1540479859555-17af45c78602?w=1920&q=85&fit=crop", alt: "Anak bermain game edukatif" },
    { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=85&fit=crop", alt: "Guru mendampingi anak belajar" },
    { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1920&q=85&fit=crop", alt: "Anak berhasil dalam belajar" },
];
const SLIDE_INTERVAL = 5000;

// ─── Inline Animal SVG for Hero ────────────────────────────────────────────────
function HeroBirdCharacter() {
    return (
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.25))" }}>
            {/* Body */}
            <ellipse cx="90" cy="120" rx="42" ry="46" fill="#4D96FF"/>
            {/* Belly */}
            <ellipse cx="90" cy="128" rx="24" ry="28" fill="#C8E6FF"/>
            {/* Head */}
            <circle cx="90" cy="72" r="38" fill="#4D96FF"/>
            {/* Crown feathers */}
            <ellipse cx="78" cy="36" rx="7" ry="14" fill="#FFD93D" transform="rotate(-20 78 36)"/>
            <ellipse cx="90" cy="32" rx="7" ry="16" fill="#FF6B6B"/>
            <ellipse cx="102" cy="36" rx="7" ry="14" fill="#6BCB77" transform="rotate(20 102 36)"/>
            {/* Eyes */}
            <circle cx="78" cy="66" r="10" fill="white"/>
            <circle cx="102" cy="66" r="10" fill="white"/>
            <circle cx="80" cy="66" r="6.5" fill="#1A1A2E"/>
            <circle cx="104" cy="66" r="6.5" fill="#1A1A2E"/>
            <circle cx="82" cy="64" r="2.2" fill="white"/>
            <circle cx="106" cy="64" r="2.2" fill="white"/>
            {/* Beak */}
            <path d="M83 78 L90 88 L97 78 Z" fill="#FFB347"/>
            {/* Wings */}
            <ellipse cx="48" cy="120" rx="16" ry="32" fill="#3A7BDB" transform="rotate(-18 48 120)"/>
            <ellipse cx="132" cy="120" rx="16" ry="32" fill="#3A7BDB" transform="rotate(18 132 120)"/>
            {/* Feet */}
            <ellipse cx="76" cy="163" rx="14" ry="6" fill="#FFB347"/>
            <ellipse cx="104" cy="163" rx="14" ry="6" fill="#FFB347"/>
            {/* Book prop */}
            <rect x="54" y="138" width="72" height="10" rx="5" fill="#FF6B6B" opacity="0.85"/>
            <rect x="58" y="132" width="64" height="14" rx="4" fill="white" opacity="0.9"/>
            <line x1="90" y1="132" x2="90" y2="146" stroke="#ddd" strokeWidth="1.5"/>
        </svg>
    );
}

// ─── Decorative floating shapes for hero ───────────────────────────────────────
function HeroDecorations() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 4 }}>
            {/* Stars / sparkles — hand-drawn SVG dots */}
            {[
                { x: "8%", y: "15%", size: 18, color: "#FFD93D", delay: 0 },
                { x: "88%", y: "12%", size: 14, color: "#FF6B6B", delay: 0.6 },
                { x: "92%", y: "78%", size: 20, color: "#6BCB77", delay: 1.2 },
                { x: "4%", y: "72%", size: 16, color: "#4D96FF", delay: 0.4 },
                { x: "75%", y: "90%", size: 12, color: "#FF6B6B", delay: 0.9 },
                { x: "18%", y: "88%", size: 15, color: "#FFD93D", delay: 1.5 },
            ].map((s, i) => (
                <div key={i} style={{
                    position: "absolute", left: s.x, top: s.y,
                    animation: `float-star 3s ease-in-out ${s.delay}s infinite alternate`,
                }}>
                    <svg width={s.size} height={s.size} viewBox="0 0 20 20" fill={s.color}>
                        <polygon points="10,1 12.9,7.5 20,8.2 14.5,13.3 16.2,20 10,16.5 3.8,20 5.5,13.3 0,8.2 7.1,7.5"/>
                    </svg>
                </div>
            ))}
            {/* Bouncing circles */}
            {[
                { x: "6%", y: "45%", size: 40, color: "rgba(255,217,61,0.25)", delay: 0 },
                { x: "85%", y: "40%", size: 60, color: "rgba(107,203,119,0.2)", delay: 1 },
            ].map((c, i) => (
                <div key={i} style={{
                    position: "absolute", left: c.x, top: c.y,
                    width: c.size, height: c.size, borderRadius: "50%",
                    background: c.color, border: "3px solid rgba(255,255,255,0.3)",
                    animation: `float-star 4s ease-in-out ${c.delay}s infinite alternate`,
                }}/>
            ))}
            <style>{`
                @keyframes float-star {
                    0% { transform: translateY(0) rotate(0deg); }
                    100% { transform: translateY(-14px) rotate(20deg); }
                }
            `}</style>
        </div>
    );
}

// ─── Hero Slideshow ─────────────────────────────────────────────────────────────
function HeroSlideshow() {
    const [current, setCurrent] = useState(0);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const startTimer = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrent((c) => (c + 1) % SLIDES.length);
        }, SLIDE_INTERVAL);
    }, []);

    useEffect(() => {
        startTimer();
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [startTimer]);

    const handleDotClick = (idx: number) => { setCurrent(idx); startTimer(); };

    return (
        <section className="relative w-full overflow-hidden"
            style={{ height: "calc(100vh - 72px)", minHeight: "540px", maxHeight: "820px" }}>

            {/* Slide images */}
            {SLIDES.map((slide, i) => (
                <div key={i} className="absolute inset-0" style={{
                    opacity: i === current ? 1 : 0,
                    transition: "opacity 0.9s ease-in-out",
                    zIndex: i === current ? 2 : 1,
                }}>
                    <img src={slide.url} alt={slide.alt} className="w-full h-full object-cover"
                        loading={i === 0 ? "eager" : "lazy"}/>
                </div>
            ))}

            {/* Dark overlay */}
            <div className="absolute inset-0" style={{
                background: "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.44) 55%, rgba(0,0,0,0.12) 100%)",
                zIndex: 3,
            }}/>
            <div className="absolute inset-0" style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 45%)",
                zIndex: 3,
            }}/>

            {/* Decorative floating elements */}
            <HeroDecorations/>

            {/* Content */}
            <div className="absolute inset-0 flex items-center" style={{ zIndex: 5 }}>
                <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div style={{ display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap" }}>

                        {/* Text block */}
                        <div style={{ flex: "1 1 340px", minWidth: 0 }}>
                            {/* Pill badge */}
                            <div style={{
                                display: "inline-flex", alignItems: "center", gap: 8,
                                background: "#FF6B6B", borderRadius: 999,
                                padding: "6px 18px", marginBottom: 20,
                                boxShadow: "0 4px 0 #CC4444",
                                fontFamily: "'Nunito', sans-serif",
                            }}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                                    <circle cx="8" cy="8" r="7" fill="none" stroke="white" strokeWidth="1.5"/>
                                    <path d="M8 4v4l3 2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                                <span style={{ color: "white", fontWeight: 800, fontSize: 13 }}>
                                    Deteksi Disleksia Lebih Awal dengan Lexit
                                </span>
                            </div>

                            {/* Headline */}
                            <h1 style={{
                                color: "white", fontWeight: 900, lineHeight: 1.2,
                                marginBottom: 28,
                                fontSize: "clamp(1.7rem, 3.5vw, 2.8rem)",
                                fontFamily: "'Nunito', sans-serif",
                                textShadow: "0 2px 12px rgba(0,0,0,0.3)",
                            }}>
                                Platform skrining disleksia berbasis AI untuk anak Indonesia, mudah digunakan dari rumah
                            </h1>

                            {/* CTA Button */}
                            <Link href="/lexscan" style={{
                                display: "inline-flex", alignItems: "center", gap: 10,
                                padding: "14px 32px", background: "#FF6B6B", color: "white",
                                fontWeight: 900, fontSize: 16, borderRadius: 999, textDecoration: "none",
                                boxShadow: "0 6px 0 #CC4444, 0 10px 20px rgba(0,0,0,0.3)",
                                transition: "all 0.18s", fontFamily: "'Nunito', sans-serif",
                                letterSpacing: "-0.2px",
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "0 9px 0 #CC4444, 0 14px 28px rgba(0,0,0,0.35)";
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 0 #CC4444, 0 10px 20px rgba(0,0,0,0.3)";
                            }}>
                                Mulai Skrining Gratis
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10h12M11 5l5 5-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                        </div>

                        {/* Bird character — hidden on very small screens */}
                        <div className="hidden md:block" style={{ flexShrink: 0 }}>
                            <div style={{ animation: "bird-float 3s ease-in-out infinite alternate" }}>
                                <HeroBirdCharacter/>
                            </div>
                            <style>{`
                                @keyframes bird-float {
                                    0% { transform: translateY(0); }
                                    100% { transform: translateY(-16px); }
                                }
                            `}</style>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dot indicators */}
            <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2" style={{ zIndex: 6 }}>
                {SLIDES.map((_, i) => (
                    <button key={i} onClick={() => handleDotClick(i)} aria-label={`Slide ${i + 1}`}
                        style={{
                            width: i === current ? 32 : 10, height: 10, borderRadius: 999,
                            background: i === current ? "#FFD93D" : "rgba(255,255,255,0.45)",
                            boxShadow: i === current ? "0 2px 0 #CC9900" : "none",
                            transition: "all 0.35s ease", border: "none",
                            cursor: "pointer", padding: 0, display: "block",
                        }}
                    />
                ))}
            </div>

            {/* Slide counter */}
            <div className="absolute top-5 right-7 text-white/50 text-xs font-mono tracking-widest select-none" style={{ zIndex: 6 }}>
                {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </div>
        </section>
    );
}

// ─── Section title helper ───────────────────────────────────────────────────────
function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
    return (
        <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900,
                color: "#1A1A2E", marginBottom: 12, lineHeight: 1.2,
                fontFamily: "'Nunito', sans-serif",
            }}>
                {children}
            </h2>
            {sub && (
                <p style={{
                    fontSize: 17, color: "#666", maxWidth: 560, margin: "0 auto",
                    lineHeight: 1.7, fontFamily: "'Nunito', sans-serif", fontWeight: 600,
                }}>
                    {sub}
                </p>
            )}
        </div>
    );
}

// ─── Page ───────────────────────────────────────────────────────────────────────
export default function Home() {
    return (
        <AppLayout>
            {/* Load Nunito from Google Fonts */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&display=swap');
                * { box-sizing: border-box; }
            `}</style>

            <div style={{ minHeight: "100vh", fontFamily: "'Nunito', sans-serif" }}>
                <HeroSlideshow/>

                {/* ── Stats Bar ── */}
                <section style={{
                    padding: "64px 24px",
                    background: "linear-gradient(180deg, #FFFDE7 0%, white 100%)",
                    borderBottom: "4px solid #FFE566",
                }}>
                    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24, marginBottom: 32 }}>
                            <StatCard number="5 Juta" label="Pelajar di Indonesia" color="#F5A623"/>
                            <StatCard number="2 Juta" label="Kasus Baru Disleksia/Tahun" color="#3BBFAD"/>
                            <StatCard number="4.000" label="Psikolog Klinis di Indonesia" color="#1A2E4A"/>
                        </div>
                        <p style={{
                            textAlign: "center", color: "#555", fontSize: 16,
                            fontWeight: 700, lineHeight: 1.6,
                        }}>
                            Akses terbatas ke layanan profesional — Lexit hadir untuk menjembatani kesenjangan ini
                        </p>
                    </div>
                </section>

                {/* ── Features ── */}
                <section style={{ padding: "88px 24px", background: "white" }}>
                    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                        <SectionTitle sub="Tiga pilar utama untuk mendukung deteksi dini dan terapi disleksia yang efektif">
                            Fitur Unggulan Lexit
                        </SectionTitle>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }}>
                            <FeatureCard icon={Brain} title="LexScan"
                                description="Skrining interaktif berbasis AI yang menganalisis pola jawaban anak untuk mendeteksi indikasi disleksia dengan akurat dalam 15 menit."
                                link="/features" accentColor="#FF6B6B"/>
                            <FeatureCard icon={Gamepad2} title="Let's Play"
                                description="Mini-game adaptif yang dirancang untuk terapi multi-sensori (visual, audio, kinestetik) yang menyenangkan dan efektif."
                                link="/features" accentColor="#F5A623"/>
                            <FeatureCard icon={BarChart3} title="Parent Mode"
                                description="Dashboard komprehensif untuk memantau progres anak, mengakses riwayat skrining, dan mendapatkan rekomendasi terapi."
                                link="/features" accentColor="#3BBFAD"/>
                        </div>
                    </div>
                </section>

                {/* ── How It Works ── */}
                <section style={{
                    padding: "88px 24px",
                    background: "linear-gradient(180deg, #F0F9FF 0%, #FFFDE7 100%)",
                }}>
                    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                        <SectionTitle sub="Proses sederhana dalam 3 langkah untuk membantu anak Anda">
                            Cara Kerja Lexit
                        </SectionTitle>
                        <StepIndicator steps={[
                            { number: 1, title: "Skrining", description: "Anak mengikuti tes interaktif LexScan selama 15 menit dengan game yang menyenangkan" },
                            { number: 2, title: "Terapi", description: "Bermain mini-game adaptif di Let's Play yang disesuaikan dengan kebutuhan anak" },
                            { number: 3, title: "Pantau Progres", description: "Orang tua memantau perkembangan melalui dashboard dan mendapat rekomendasi lanjutan" },
                        ]}/>
                        <div style={{ textAlign: "center", marginTop: 48 }}>
                            <Link href="/how-it-works" style={{
                                display: "inline-flex", alignItems: "center", gap: 10,
                                padding: "14px 32px", background: "#4D96FF", color: "white",
                                fontWeight: 900, fontSize: 16, borderRadius: 999,
                                textDecoration: "none", boxShadow: "0 5px 0 #1A5FCC",
                                fontFamily: "'Nunito', sans-serif",
                            }}>
                                Lihat Detail Lengkap
                                <ArrowRight size={20}/>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ── Testimonial ── */}
                <section style={{ padding: "88px 24px", background: "white" }}>
                    <div style={{ maxWidth: 800, margin: "0 auto" }}>
                        <SectionTitle sub="Cerita nyata dari keluarga yang telah merasakan manfaat Lexit">
                            Apa Kata Mereka
                        </SectionTitle>
                        <TestimonialCard
                            name="Ibu Yuni"
                            role="Ibu dari Farel (8 tahun)"
                            quote="Sebelumnya saya bingung kenapa Farel kesulitan membaca padahal sudah les privat. Setelah pakai Lexit, saya baru tahu ada indikasi disleksia. Sekarang Farel lebih percaya diri dan nilai bacanya meningkat!"
                            rating={5}
                        />
                    </div>
                </section>

                {/* ── Trust Badges ── */}
                <section style={{
                    padding: "88px 24px",
                    background: "linear-gradient(180deg, #F0FFF4 0%, #FFF8F0 100%)",
                    borderTop: "4px solid #A8E6B0",
                }}>
                    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                        <SectionTitle>Dipercaya & Tervalidasi</SectionTitle>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }}>
                            {[
                                { icon: Shield, color: "#6BCB77", shadow: "#338844", bg: "#F0FFF4", border: "#A8E6B0", title: "Berbasis Metode Orton-Gillingham", desc: "Menggunakan pendekatan terapi yang telah terbukti secara klinis untuk menangani disleksia" },
                                { icon: Award, color: "#FFD93D", shadow: "#CC9900", bg: "#FFFDE7", border: "#FFE566", title: "Divalidasi Psikolog Klinis", desc: "Dikembangkan dan divalidasi bersama psikolog klinis profesional di Indonesia" },
                                { icon: BarChart3, color: "#4D96FF", shadow: "#1A5FCC", bg: "#EFF6FF", border: "#BFDBFE", title: "SUS Score 89 — Excellent", desc: "Usability terbaik berdasarkan System Usability Scale dengan tingkat kepuasan 90%" },
                            ].map(({ icon: Icon, color, shadow, bg, border, title, desc }) => (
                                <div key={title} style={{
                                    background: bg, borderRadius: 28, border: `3px solid ${border}`,
                                    boxShadow: `0 6px 0 ${shadow}`, padding: "32px 24px",
                                    textAlign: "center", transition: "transform 0.18s, box-shadow 0.18s",
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                                    (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 0 ${shadow}`;
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                    (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 0 ${shadow}`;
                                }}>
                                    <div style={{
                                        width: 72, height: 72, borderRadius: "50%",
                                        background: color, display: "flex", alignItems: "center",
                                        justifyContent: "center", margin: "0 auto 20px",
                                        boxShadow: `0 4px 0 ${shadow}`,
                                    }}>
                                        <Icon color="white" size={36}/>
                                    </div>
                                    <h3 style={{ fontSize: 18, fontWeight: 900, color: "#1A1A2E", marginBottom: 10 }}>{title}</h3>
                                    <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7, fontWeight: 600 }}>{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section style={{
                    padding: "88px 24px",
                    background: "#FF6B6B",
                    position: "relative", overflow: "hidden",
                }}>
                    {/* Wavy background dots */}
                    {[
                        { x: "5%", y: "15%", size: 80, color: "rgba(255,255,255,0.12)" },
                        { x: "88%", y: "10%", size: 120, color: "rgba(255,217,61,0.18)" },
                        { x: "80%", y: "70%", size: 90, color: "rgba(255,255,255,0.10)" },
                        { x: "2%", y: "65%", size: 100, color: "rgba(107,203,119,0.15)" },
                    ].map((c, i) => (
                        <div key={i} style={{
                            position: "absolute", left: c.x, top: c.y,
                            width: c.size, height: c.size, borderRadius: "50%",
                            background: c.color,
                        }}/>
                    ))}

                    <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
                        <h2 style={{
                            fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, color: "white",
                            marginBottom: 16, fontFamily: "'Nunito', sans-serif", lineHeight: 1.2,
                        }}>
                            Mulai Perjalanan Belajar Anak Anda Hari Ini
                        </h2>
                        <p style={{
                            fontSize: 17, color: "rgba(255,255,255,0.9)", marginBottom: 40,
                            lineHeight: 1.8, fontWeight: 600, fontFamily: "'Nunito', sans-serif",
                        }}>
                            Deteksi dini adalah kunci. Jangan tunggu sampai terlambat. Coba skrining gratis sekarang dan berikan anak Anda kesempatan terbaik untuk sukses.
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", marginBottom: 32 }}>
                            <Link href="/lexscan" style={{
                                display: "inline-flex", alignItems: "center", gap: 10,
                                padding: "16px 36px", background: "white", color: "#FF6B6B",
                                fontWeight: 900, fontSize: 16, borderRadius: 999, textDecoration: "none",
                                boxShadow: "0 6px 0 #CC4444", fontFamily: "'Nunito', sans-serif",
                            }}>
                                Mulai Gratis Sekarang
                                <ArrowRight size={20}/>
                            </Link>
                            <Link href="/about" style={{
                                display: "inline-flex", alignItems: "center", gap: 10,
                                padding: "16px 36px", background: "#1A1A2E", color: "white",
                                fontWeight: 900, fontSize: 16, borderRadius: 999, textDecoration: "none",
                                boxShadow: "0 6px 0 #0A0A18", fontFamily: "'Nunito', sans-serif",
                            }}>
                                Pelajari Tentang Kami
                            </Link>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
                            {[
                                { href: "/lexscan", icon: Brain, label: "Coba LexScan" },
                                { href: "/lexplay", icon: Gamepad2, label: "Main LexPlay" },
                            ].map(({ href, icon: Icon, label }) => (
                                <Link key={href} href={href} style={{
                                    display: "inline-flex", alignItems: "center", gap: 10,
                                    padding: "12px 28px", background: "rgba(255,255,255,0.18)",
                                    color: "white", fontWeight: 800, fontSize: 15,
                                    borderRadius: 999, textDecoration: "none",
                                    border: "2.5px solid rgba(255,255,255,0.5)",
                                    fontFamily: "'Nunito', sans-serif",
                                }}>
                                    <Icon size={18}/> {label}
                                </Link>
                            ))}
                        </div>
                        <p style={{ marginTop: 28, fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
                            Sesuai dengan UU No. 8/2016 tentang Penyandang Disabilitas · SDG 3, 4, 10
                        </p>
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}