import { Link } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import { Brain, Gamepad2, BarChart3, Sparkles, Target, TrendingUp, Headphones, Eye, Hand, Calendar, FileText, MessageCircle, ArrowRight } from "lucide-react";

const F = "'Nunito', sans-serif";

// ── Reusable helpers ──────────────────────────────────────────────────────────
const sectionBadge = (bg: string, color: string, shadow: string, icon: React.ReactNode, text: string) => (
    <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:bg, border:`3px solid ${color}`, borderRadius:999, padding:"8px 22px", marginBottom:24, boxShadow:`0 4px 0 ${shadow}` }}>
        {icon}
        <span style={{ fontWeight:900, fontSize:14, color }}>{text}</span>
    </div>
);

const featurePoint = (icon: React.ReactNode, bg: string, shadow: string, title: string, desc: string) => (
    <div style={{ display:"flex", gap:16, alignItems:"flex-start" }}>
        <div style={{ flexShrink:0, width:52, height:52, background:bg, borderRadius:16, display:"flex", alignItems:"center", justifyContent:"center", boxShadow:`0 5px 0 ${shadow}` }}>{icon}</div>
        <div>
            <h4 style={{ fontWeight:900, fontSize:16, color:"#1A1A2E", marginBottom:6 }}>{title}</h4>
            <p style={{ color:"#666", fontSize:14, lineHeight:1.7, fontWeight:600, margin:0 }}>{desc}</p>
        </div>
    </div>
);

const card3d = (border: string, shadow: string, bg = "white") => ({
    background: bg, borderRadius:28, border:`3px solid ${border}`,
    boxShadow:`0 7px 0 ${shadow}`, padding:"28px 24px", fontFamily:F
} as React.CSSProperties);

// ── Animal SVGs ───────────────────────────────────────────────────────────────
function OwlSvg() {
    return (
        <svg width="110" height="120" viewBox="0 0 110 120" fill="none">
            <ellipse cx="55" cy="80" rx="34" ry="36" fill="#7B68EE"/>
            <ellipse cx="55" cy="70" rx="28" ry="30" fill="#8A7FEE"/>
            <polygon points="38,26 32,10 48,24" fill="#7B68EE"/>
            <polygon points="72,26 78,10 62,24" fill="#7B68EE"/>
            <ellipse cx="55" cy="76" rx="16" ry="12" fill="#C4B5FD"/>
            <circle cx="42" cy="52" r="14" fill="white"/>
            <circle cx="68" cy="52" r="14" fill="white"/>
            <circle cx="42" cy="52" r="9" fill="#FFD93D"/>
            <circle cx="68" cy="52" r="9" fill="#FFD93D"/>
            <circle cx="42" cy="52" r="5.5" fill="#1A1A2E"/>
            <circle cx="68" cy="52" r="5.5" fill="#1A1A2E"/>
            <circle cx="43.5" cy="50.5" r="1.8" fill="white"/>
            <circle cx="69.5" cy="50.5" r="1.8" fill="white"/>
            <ellipse cx="55" cy="68" rx="5.5" ry="4" fill="#FFAB40"/>
            <ellipse cx="36" cy="88" rx="16" ry="9" fill="#6B5FD6"/>
            <ellipse cx="74" cy="88" rx="16" ry="9" fill="#6B5FD6"/>
            <ellipse cx="36" cy="112" rx="12" ry="5.5" fill="#FFB347"/>
            <ellipse cx="74" cy="112" rx="12" ry="5.5" fill="#FFB347"/>
            <rect x="39" y="36" width="32" height="8" rx="4" fill="#FF6B6B" opacity="0.9"/>
        </svg>
    );
}

function RabbitSvg() {
    return (
        <svg width="100" height="115" viewBox="0 0 100 115" fill="none">
            <ellipse cx="50" cy="82" rx="28" ry="28" fill="#A8D8A8"/>
            <circle cx="50" cy="58" r="26" fill="#A8D8A8"/>
            <ellipse cx="34" cy="24" rx="10" ry="22" fill="#A8D8A8"/>
            <ellipse cx="66" cy="24" rx="10" ry="22" fill="#A8D8A8"/>
            <ellipse cx="34" cy="24" rx="6" ry="16" fill="#F8BBD9"/>
            <ellipse cx="66" cy="24" rx="6" ry="16" fill="#F8BBD9"/>
            <ellipse cx="50" cy="65" rx="15" ry="12" fill="#C8EAC8"/>
            <circle cx="41" cy="52" r="6" fill="#2C2C2C"/>
            <circle cx="59" cy="52" r="6" fill="#2C2C2C"/>
            <circle cx="42.5" cy="50.5" r="2" fill="white"/>
            <circle cx="60.5" cy="50.5" r="2" fill="white"/>
            <ellipse cx="50" cy="63" rx="4" ry="2.5" fill="#F48FB1"/>
            <path d="M44 68 Q50 73 56 68" stroke="#C8EAC8" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </svg>
    );
}

function BearSvg() {
    return (
        <svg width="100" height="100" viewBox="0 0 110 110" fill="none">
            <ellipse cx="55" cy="70" rx="36" ry="34" fill="#D4845A"/>
            <circle cx="55" cy="52" r="30" fill="#D4845A"/>
            <circle cx="32" cy="30" r="14" fill="#D4845A"/>
            <circle cx="78" cy="30" r="14" fill="#D4845A"/>
            <circle cx="32" cy="30" r="8" fill="#BF6E45"/>
            <circle cx="78" cy="30" r="8" fill="#BF6E45"/>
            <ellipse cx="55" cy="58" rx="18" ry="14" fill="#EDA882"/>
            <circle cx="44" cy="46" r="5.5" fill="#2C2C2C"/>
            <circle cx="66" cy="46" r="5.5" fill="#2C2C2C"/>
            <circle cx="45.5" cy="44.5" r="1.8" fill="white"/>
            <circle cx="67.5" cy="44.5" r="1.8" fill="white"/>
            <ellipse cx="55" cy="57" rx="5" ry="3.5" fill="#BF6E45"/>
            <path d="M47 64 Q55 70 63 64" stroke="#BF6E45" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        </svg>
    );
}

// ── Dashboard mockup ──────────────────────────────────────────────────────────
function DashboardMockup() {
    return (
        <div style={{ ...card3d("#FFE566","#CC9900","#FFFDE7") }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
                <div>
                    <div style={{ fontWeight:900, fontSize:16, color:"#1A1A2E" }}>Dashboard Farel</div>
                    <div style={{ fontSize:13, color:"#888", fontWeight:600 }}>Progress minggu ini</div>
                </div>
                <div style={{ background:"#F0FFF4", border:"2px solid #A8E6B0", borderRadius:999, padding:"5px 14px", fontWeight:800, fontSize:12, color:"#338844", boxShadow:"0 2px 0 #338844" }}>+15%</div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:18 }}>
                {[
                    { label:"Waktu Latihan", val:"8.5 jam", bg:"#EFF6FF", color:"#1A5FCC", border:"#BFDBFE", shadow:"#93C5FD" },
                    { label:"Game Selesai", val:"24", bg:"#FFFDE7", color:"#CC9900", border:"#FFE566", shadow:"#FFD93D" },
                    { label:"Akurasi", val:"87%", bg:"#F0FFF4", color:"#338844", border:"#A8E6B0", shadow:"#6BCB77" },
                    { label:"Streak", val:"12 hari", bg:"#FFF5F5", color:"#CC4444", border:"#FFAAAA", shadow:"#FF6B6B" },
                ].map(s => (
                    <div key={s.label} style={{ background:s.bg, borderRadius:14, border:`2px solid ${s.border}`, boxShadow:`0 3px 0 ${s.shadow}`, padding:"12px" }}>
                        <div style={{ fontSize:11, color:"#888", fontWeight:700, marginBottom:4 }}>{s.label}</div>
                        <div style={{ fontSize:22, fontWeight:900, color:s.color }}>{s.val}</div>
                    </div>
                ))}
            </div>
            {[
                { label:"Pengenalan Huruf", pct:92, color:"#4D96FF" },
                { label:"Kecepatan Membaca", pct:78, color:"#FFD93D" },
                { label:"Pemahaman Kata", pct:85, color:"#6BCB77" },
            ].map(b => (
                <div key={b.label} style={{ marginBottom:10 }}>
                    <div style={{ display:"flex", justifyContent:"space-between", fontSize:12, fontWeight:700, marginBottom:5 }}>
                        <span style={{ color:"#555" }}>{b.label}</span>
                        <span style={{ color:b.color }}>{b.pct}%</span>
                    </div>
                    <div style={{ height:9, background:"#F3F4F6", borderRadius:999, overflow:"hidden" }}>
                        <div style={{ height:"100%", width:`${b.pct}%`, background:b.color, borderRadius:999 }}/>
                    </div>
                </div>
            ))}
        </div>
    );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Features() {
    return (
        <AppLayout>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&display=swap');
                * { box-sizing: border-box; }
                @keyframes float { 0%{transform:translateY(0)} 100%{transform:translateY(-12px)} }
            `}</style>
            <div style={{ minHeight:"100vh", fontFamily:F }}>

                {/* ── Hero ── */}
                <section style={{ background:"linear-gradient(135deg, #FF6B6B 0%, #FF8E53 50%, #FFD93D 100%)", padding:"72px 24px", textAlign:"center", position:"relative", overflow:"hidden" }}>
                    {/* Floating blobs */}
                    {[["7%","18%","rgba(255,255,255,0.18)","#fff3"],["88%","14%","rgba(255,255,255,0.15)","#fff3"],
                      ["4%","72%","rgba(255,255,255,0.18)","#fff3"],["90%","70%","rgba(255,255,255,0.12)","#fff3"]].map(([x,y,bg,border],i)=>(
                        <div key={i} style={{ position:"absolute",left:x,top:y,width:56,height:56,borderRadius:"50%",background:bg,border:`3px solid ${border}` }}/>
                    ))}
                    {/* Stars */}
                    {[["12%","38%","#fff","14"],["84%","40%","#FFD93D","16"],["6%","52%","#fff","10"]].map(([x,y,c,s],i)=>(
                        <svg key={i} width={s} height={s} viewBox="0 0 20 20" fill={c} style={{ position:"absolute",left:x,top:y,opacity:0.6 }}>
                            <polygon points="10,1 12.9,7.5 20,8.2 14.5,13.3 16.2,20 10,16.5 3.8,20 5.5,13.3 0,8.2 7.1,7.5"/>
                        </svg>
                    ))}
                    <div style={{ maxWidth:800, margin:"0 auto", position:"relative", zIndex:2 }}>
                        <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.25)", borderRadius:999, padding:"8px 22px", marginBottom:20, border:"2px solid rgba(255,255,255,0.5)" }}>
                            <span style={{ fontWeight:900, fontSize:14, color:"white" }}>Fitur Lengkap Lexit</span>
                        </div>
                        <h1 style={{ color:"white", fontWeight:900, fontSize:"clamp(2rem,5vw,3.5rem)", lineHeight:1.2, marginBottom:16, textShadow:"0 2px 10px rgba(0,0,0,0.15)" }}>
                            Semua yang Anak Kamu Butuhkan
                        </h1>
                        <p style={{ color:"rgba(255,255,255,0.92)", fontSize:17, fontWeight:600, lineHeight:1.7 }}>
                            Teknologi AI dan pendekatan multi-sensori untuk deteksi dan terapi disleksia yang efektif dan menyenangkan
                        </p>
                    </div>
                </section>

                {/* ── LexScan ── */}
                <section style={{ padding:"88px 24px", background:"white" }}>
                    <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(320px,1fr))", gap:56, alignItems:"center" }}>
                        {/* Left text */}
                        <div>
                            {sectionBadge("#FFF5F5","#CC4444","#FF6B6B",<Brain color="#CC4444" size={18}/>,"LexScan — Skrining AI")}
                            <h2 style={{ fontSize:"clamp(1.6rem,3.5vw,2.6rem)", fontWeight:900, color:"#1A1A2E", marginBottom:18, lineHeight:1.2 }}>
                                Skrining Interaktif Berbasis AI
                            </h2>
                            <p style={{ fontSize:15, color:"#555", lineHeight:1.8, marginBottom:32, fontWeight:600 }}>
                                LexScan menggunakan algoritma machine learning untuk menganalisis pola jawaban anak dalam serangkaian aktivitas interaktif. Sistem dapat mendeteksi indikasi disleksia dengan akurasi tinggi dalam waktu singkat.
                            </p>
                            <div style={{ display:"flex", flexDirection:"column", gap:22 }}>
                                {featurePoint(<Sparkles color="white" size={22}/>, "#FF6B6B", "#CC4444", "Analisis Pola Otomatis", "AI mengidentifikasi kesulitan spesifik seperti pembalikan huruf, kebingungan urutan, dan kecepatan membaca")}
                                {featurePoint(<Target color="white" size={22}/>, "#6BCB77", "#338844", "Hasil Komprehensif", "Laporan lengkap dengan skor risiko, area kesulitan, dan rekomendasi tindakan lanjutan")}
                                {featurePoint(<FileText color="white" size={22}/>, "#4D96FF", "#1A5FCC", "Laporan PDF", "Download laporan detail yang dapat dibagikan dengan guru atau psikolog")}
                            </div>
                        </div>
                        {/* Right visual */}
                        <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
                            <div style={{ ...card3d("#C4B5FD","#7C3AED","#F5F0FF"), textAlign:"center" }}>
                                <div style={{ display:"flex", justifyContent:"center", marginBottom:16, animation:"float 3s ease-in-out infinite alternate" }}>
                                    <OwlSvg/>
                                </div>
                                <div style={{ fontWeight:900, fontSize:17, color:"#5B21B6", marginBottom:8 }}>LexScan siap menganalisis!</div>
                                <div style={{ fontSize:13, color:"#7C3AED", fontWeight:700, lineHeight:1.6 }}>Upload foto tulisan tangan anak dan dapatkan hasil dalam hitungan detik</div>
                            </div>
                            <div style={{ display:"flex", gap:16 }}>
                                <div style={{ ...card3d("#FFAAAA","#CC4444","#FFF5F5"), flex:1, textAlign:"center", padding:"20px 16px" }}>
                                    <div style={{ fontSize:36, fontWeight:900, color:"#CC4444", lineHeight:1 }}>15</div>
                                    <div style={{ fontSize:12, color:"#666", fontWeight:700, marginTop:6 }}>menit skrining</div>
                                </div>
                                <div style={{ ...card3d("#A8E6B0","#338844","#F0FFF4"), flex:1, textAlign:"center", padding:"20px 16px" }}>
                                    <div style={{ fontSize:36, fontWeight:900, color:"#338844", lineHeight:1 }}>AI</div>
                                    <div style={{ fontSize:12, color:"#666", fontWeight:700, marginTop:6 }}>powered</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── LexPlay ── */}
                <section style={{ padding:"88px 24px", background:"linear-gradient(180deg,#FFFDE7 0%,#FFF9F0 100%)" }}>
                    <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(320px,1fr))", gap:56, alignItems:"center" }}>
                        {/* Left visual */}
                        <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
                            <div style={{ ...card3d("#FDE68A","#CC9900","#FFFDE7"), textAlign:"center" }}>
                                <div style={{ display:"flex", justifyContent:"center", marginBottom:16, animation:"float 3.2s ease-in-out infinite alternate" }}>
                                    <RabbitSvg/>
                                </div>
                                <div style={{ fontWeight:900, fontSize:17, color:"#92400E", marginBottom:8 }}>Let's Play bersama!</div>
                                <div style={{ fontSize:13, color:"#B45309", fontWeight:700, lineHeight:1.6 }}>Game adaptif yang menyesuaikan diri dengan kemampuan anak kamu</div>
                            </div>
                            <div style={{ display:"flex", gap:16 }}>
                                <div style={{ ...card3d("#FDE68A","#CC9900","#FFFDE7"), flex:1, textAlign:"center", padding:"20px 16px" }}>
                                    <div style={{ fontSize:36, fontWeight:900, color:"#CC9900", lineHeight:1 }}>20+</div>
                                    <div style={{ fontSize:12, color:"#666", fontWeight:700, marginTop:6 }}>Mini Games</div>
                                </div>
                                <div style={{ ...card3d("#FFAAAA","#CC4444","#FFF5F5"), flex:1, textAlign:"center", padding:"20px 16px" }}>
                                    <div style={{ fontSize:36, fontWeight:900, color:"#CC4444", lineHeight:1 }}>3</div>
                                    <div style={{ fontSize:12, color:"#666", fontWeight:700, marginTop:6 }}>Mode Sensori</div>
                                </div>
                            </div>
                        </div>
                        {/* Right text */}
                        <div>
                            {sectionBadge("#FFFDE7","#CC9900","#FFD93D",<Gamepad2 color="#CC9900" size={18}/>,"Let's Play — Terapi Game")}
                            <h2 style={{ fontSize:"clamp(1.6rem,3.5vw,2.6rem)", fontWeight:900, color:"#1A1A2E", marginBottom:18, lineHeight:1.2 }}>
                                Terapi Adaptif yang Menyenangkan
                            </h2>
                            <p style={{ fontSize:15, color:"#555", lineHeight:1.8, marginBottom:32, fontWeight:600 }}>
                                Mini-game yang dirancang khusus untuk terapi disleksia menggunakan pendekatan multi-sensori. Setiap game menyesuaikan tingkat kesulitan berdasarkan kemampuan anak.
                            </p>
                            <div style={{ display:"flex", flexDirection:"column", gap:22 }}>
                                {featurePoint(<Eye color="white" size={22}/>, "#FFD93D", "#CC9900", "Visual", "Game dengan animasi dan warna yang membantu pengenalan huruf dan kata")}
                                {featurePoint(<Headphones color="white" size={22}/>, "#FF6B6B", "#CC4444", "Auditori", "Pengucapan kata dan fonetik untuk memperkuat koneksi suara-huruf")}
                                {featurePoint(<Hand color="white" size={22}/>, "#6BCB77", "#338844", "Kinestetik", "Interaksi drag-and-drop dan tracing huruf untuk pembelajaran motorik")}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Parent Mode ── */}
                <section style={{ padding:"88px 24px", background:"white" }}>
                    <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(320px,1fr))", gap:56, alignItems:"center" }}>
                        {/* Left text */}
                        <div>
                            {sectionBadge("#F0FFF4","#338844","#6BCB77",<BarChart3 color="#338844" size={18}/>,"Parent Mode — Dashboard")}
                            <h2 style={{ fontSize:"clamp(1.6rem,3.5vw,2.6rem)", fontWeight:900, color:"#1A1A2E", marginBottom:18, lineHeight:1.2 }}>
                                Dashboard Progres Lengkap
                            </h2>
                            <p style={{ fontSize:15, color:"#555", lineHeight:1.8, marginBottom:32, fontWeight:600 }}>
                                Dashboard khusus untuk orang tua memantau perkembangan anak secara real-time. Akses riwayat skrining, analisis progres, dan rekomendasi personalisasi dalam satu tempat.
                            </p>
                            <div style={{ display:"flex", flexDirection:"column", gap:22 }}>
                                {featurePoint(<TrendingUp color="white" size={22}/>, "#6BCB77", "#338844", "Grafik Progres", "Visualisasi perkembangan anak dalam berbagai aspek membaca dan menulis")}
                                {featurePoint(<Calendar color="white" size={22}/>, "#4D96FF", "#1A5FCC", "Riwayat Skrining", "Akses semua hasil skrining dan bandingkan perkembangan dari waktu ke waktu")}
                                {featurePoint(<MessageCircle color="white" size={22}/>, "#FF6B6B", "#CC4444", "Konsultasi Psikolog", "Hubungi psikolog klinis untuk konsultasi lanjutan")}
                            </div>
                        </div>
                        {/* Right visual */}
                        <div>
                            <DashboardMockup/>
                            <div style={{ display:"flex", alignItems:"center", gap:14, marginTop:20, background:"#F0FFF4", borderRadius:24, padding:"16px 20px", border:"3px solid #A8E6B0", boxShadow:"0 5px 0 #338844" }}>
                                <BearSvg/>
                                <div>
                                    <div style={{ fontWeight:900, color:"#338844", fontSize:15, marginBottom:4 }}>Dipantau Terus!</div>
                                    <div style={{ fontSize:13, color:"#555", fontWeight:600, lineHeight:1.5 }}>Orang tua bisa lihat progress kapan saja dan dari mana saja</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section style={{ padding:"80px 24px", background:"#FF6B6B", position:"relative", overflow:"hidden" }}>
                    {[["5%","20%","rgba(255,255,255,0.14)",80],["88%","15%","rgba(255,217,61,0.22)",100],["80%","68%","rgba(255,255,255,0.1)",70]].map(([x,y,c,s],i)=>(
                        <div key={i} style={{ position:"absolute",left:x,top:y,width:Number(s),height:Number(s),borderRadius:"50%",background:c }}/>
                    ))}
                    {/* Stars */}
                    {[["12%","30%","#FFD93D","18"],["88%","60%","#fff","14"]].map(([x,y,c,s],i)=>(
                        <svg key={i} width={s} height={s} viewBox="0 0 20 20" fill={c} style={{ position:"absolute",left:x,top:y,opacity:0.5 }}>
                            <polygon points="10,1 12.9,7.5 20,8.2 14.5,13.3 16.2,20 10,16.5 3.8,20 5.5,13.3 0,8.2 7.1,7.5"/>
                        </svg>
                    ))}
                    <div style={{ maxWidth:700, margin:"0 auto", textAlign:"center", position:"relative", zIndex:2 }}>
                        <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:900, color:"white", marginBottom:16, lineHeight:1.2 }}>
                            Siap Mencoba Semua Fitur?
                        </h2>
                        <p style={{ fontSize:17, color:"rgba(255,255,255,0.92)", marginBottom:36, fontWeight:600 }}>
                            Mulai dengan skrining gratis dan rasakan perbedaannya
                        </p>
                        <Link href="/lexscan" style={{ display:"inline-flex", alignItems:"center", gap:10, padding:"16px 40px", background:"white", color:"#FF6B6B", fontWeight:900, fontSize:16, borderRadius:999, textDecoration:"none", boxShadow:"0 6px 0 #CC4444" }}>
                            Mulai Gratis Sekarang <ArrowRight size={20}/>
                        </Link>
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}