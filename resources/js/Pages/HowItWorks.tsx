import { ArrowRight, Clock, Gamepad2, FileText } from "lucide-react";
import { StepIndicator } from "../Components/StepIndicator";
import { Link } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

const F = "'Nunito', sans-serif";

function FrogSvg() {
    return (
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
            <ellipse cx="45" cy="62" rx="30" ry="24" fill="#6BCB77"/>
            <ellipse cx="45" cy="50" rx="26" ry="22" fill="#6BCB77"/>
            <circle cx="22" cy="30" r="12" fill="#6BCB77"/>
            <circle cx="68" cy="30" r="12" fill="#6BCB77"/>
            <circle cx="22" cy="30" r="8" fill="white"/>
            <circle cx="68" cy="30" r="8" fill="white"/>
            <circle cx="22" cy="30" r="5" fill="#FFD93D"/>
            <circle cx="68" cy="30" r="5" fill="#FFD93D"/>
            <circle cx="22" cy="30" r="3" fill="#1A1A2E"/>
            <circle cx="68" cy="30" r="3" fill="#1A1A2E"/>
            <circle cx="23" cy="29" r="1" fill="white"/>
            <circle cx="69" cy="29" r="1" fill="white"/>
            <ellipse cx="45" cy="56" rx="12" ry="8" fill="#90EE90"/>
            <ellipse cx="33" cy="77" rx="10" ry="5" fill="#4AB854"/>
            <ellipse cx="57" cy="77" rx="10" ry="5" fill="#4AB854"/>
            <path d="M37 59 Q45 65 53 59" stroke="#4AB854" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </svg>
    );
}

function StoryStep({ color, shadow, bg, border, numLabel, title, children }: {
    color: string; shadow: string; bg: string; border: string;
    numLabel: string; title: string; children: React.ReactNode;
}) {
    return (
        <div style={{ display:"flex", gap:20, alignItems:"flex-start" }}>
            <div style={{ flexShrink:0, width:56, height:56, borderRadius:20, background:color, boxShadow:`0 5px 0 ${shadow}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, fontWeight:900, color:"white" }}>
                {numLabel}
            </div>
            <div style={{ flex:1, background:bg, borderRadius:24, border:`3px solid ${border}`, boxShadow:`0 5px 0 ${shadow}`, padding:"20px 24px" }}>
                <div style={{ fontWeight:900, fontSize:16, color:"#1A1A2E", marginBottom:8 }}>{title}</div>
                <div style={{ fontSize:14, color:"#555", lineHeight:1.7, fontWeight:600 }}>{children}</div>
            </div>
        </div>
    );
}

function QuickCard({ icon, color, shadow, bg, border, title, items }: {
    icon: React.ReactNode; color: string; shadow: string; bg: string; border: string; title: string; items: string[];
}) {
    return (
        <div style={{ background:bg, borderRadius:28, border:`3px solid ${border}`, boxShadow:`0 7px 0 ${shadow}`, padding:"28px 24px", fontFamily:F }}>
            <div style={{ width:56, height:56, borderRadius:18, background:color, boxShadow:`0 4px 0 ${shadow}`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:18 }}>
                {icon}
            </div>
            <h3 style={{ fontSize:18, fontWeight:900, color:"#1A1A2E", marginBottom:14 }}>{title}</h3>
            <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:10 }}>
                {items.map(item => (
                    <li key={item} style={{ display:"flex", alignItems:"flex-start", gap:10, fontSize:14, color:"#555", fontWeight:600 }}>
                        <div style={{ width:8, height:8, borderRadius:"50%", background:color, marginTop:5, flexShrink:0 }}/>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function HowItWorks() {
    return (
        <AppLayout>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&display=swap');
                * { box-sizing: border-box; }
                @keyframes float { 0%{transform:translateY(0)} 100%{transform:translateY(-12px)} }
            `}</style>
            <div style={{ minHeight:"100vh", fontFamily:F }}>

                {/* ── Hero ── */}
                <section style={{ background:"linear-gradient(135deg, #FFD93D 0%, #FF8E53 100%)", padding:"72px 24px", textAlign:"center", position:"relative", overflow:"hidden" }}>
                    {[["6%","18%"],["86%","12%"],["4%","72%"],["88%","74%"]].map(([x,y],i)=>(
                        <div key={i} style={{ position:"absolute",left:x,top:y,width:50,height:50,borderRadius:"50%",background:"rgba(255,255,255,0.2)",border:"3px solid rgba(255,255,255,0.35)" }}/>
                    ))}
                    {[["14%","42%","white","16"],["88%","38%","#FF6B6B","14"]].map(([x,y,c,s],i)=>(
                        <svg key={i} width={s} height={s} viewBox="0 0 20 20" fill={c} style={{ position:"absolute",left:x,top:y,opacity:0.6 }}>
                            <polygon points="10,1 12.9,7.5 20,8.2 14.5,13.3 16.2,20 10,16.5 3.8,20 5.5,13.3 0,8.2 7.1,7.5"/>
                        </svg>
                    ))}
                    <div style={{ maxWidth:800, margin:"0 auto", position:"relative", zIndex:2 }}>
                        <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.28)", borderRadius:999, padding:"8px 22px", marginBottom:20, border:"2px solid rgba(255,255,255,0.55)" }}>
                            <span style={{ fontWeight:900, fontSize:14, color:"#92400E" }}>Cara Kerja Lexit</span>
                        </div>
                        <h1 style={{ color:"white", fontWeight:900, fontSize:"clamp(2rem,5vw,3.5rem)", lineHeight:1.2, marginBottom:16, textShadow:"0 2px 8px rgba(0,0,0,0.12)" }}>
                            Mudah, Menyenangkan, Efektif!
                        </h1>
                        <p style={{ color:"rgba(255,255,255,0.92)", fontSize:17, fontWeight:600, lineHeight:1.7 }}>
                            Proses mudah dan menyenangkan untuk mendukung perkembangan membaca anak Anda
                        </p>
                    </div>
                </section>

                {/* ── 3 Steps ── */}
                <section style={{ padding:"88px 24px", background:"white" }}>
                    <div style={{ maxWidth:1000, margin:"0 auto" }}>
                        <div style={{ textAlign:"center", marginBottom:56 }}>
                            <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:900, color:"#1A1A2E", marginBottom:12 }}>3 Langkah Sederhana</h2>
                            <p style={{ fontSize:16, color:"#666", fontWeight:600 }}>Dari skrining hingga terapi dan monitoring — semua dalam satu aplikasi</p>
                        </div>
                        <StepIndicator steps={[
                            { number:1, title:"Skrining dengan LexScan", description:"Anak mengikuti tes interaktif yang menyenangkan selama 15 menit untuk mendeteksi indikasi disleksia" },
                            { number:2, title:"Terapi dengan Let's Play", description:"Bermain game edukatif yang disesuaikan dengan kebutuhan anak berdasarkan hasil skrining" },
                            { number:3, title:"Pantau dengan Parent Mode", description:"Lihat progres anak, akses laporan, dan dapatkan rekomendasi personalisasi" },
                        ]}/>
                    </div>
                </section>

                {/* ── Kisah Farel ── */}
                <section style={{ padding:"88px 24px", background:"linear-gradient(180deg,#FFFDE7 0%,#F0FFF4 100%)" }}>
                    <div style={{ maxWidth:900, margin:"0 auto" }}>
                        <div style={{ textAlign:"center", marginBottom:48 }}>
                            <div style={{ display:"inline-flex", alignItems:"center", gap:12, background:"#F0FFF4", border:"3px solid #A8E6B0", borderRadius:999, padding:"10px 24px", marginBottom:20, boxShadow:"0 4px 0 #338844" }}>
                                <div style={{ animation:"float 2.5s ease-in-out infinite alternate" }}>
                                    <FrogSvg/>
                                </div>
                                <span style={{ fontWeight:900, fontSize:14, color:"#338844" }}>Cerita Pengguna</span>
                            </div>
                            <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.6rem)", fontWeight:900, color:"#1A1A2E", marginBottom:12 }}>Kisah Farel & Ibu Yuni</h2>
                            <p style={{ fontSize:16, color:"#666", fontWeight:600 }}>Bagaimana Lexit mengubah cara belajar Farel (8 tahun)</p>
                        </div>

                        <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
                            <StoryStep numLabel="1" color="#FF6B6B" shadow="#CC4444" bg="#FFF5F5" border="#FFAAAA" title="Ibu Yuni Menyadari Masalah">
                                Farel (8 tahun) sering menulis huruf terbalik dan kesulitan membaca meski sudah les privat. Gurunya menyarankan bantuan profesional, tapi antrian psikolog panjang dan biaya mahal.
                            </StoryStep>
                            <StoryStep numLabel="2" color="#FFD93D" shadow="#CC9900" bg="#FFFDE7" border="#FFE566" title="Menemukan Lexit & Upload Tulisan Tangan">
                                Ibu Yuni meminta Farel menulis alfabet lalu mengunggah foto ke LexScan — dalam 30 detik, AI Gemini menganalisis dan menemukan pola pembalikan huruf yang konsisten pada b, d, p, dan q.
                            </StoryStep>
                            <StoryStep numLabel="3" color="#4D96FF" shadow="#1A5FCC" bg="#EFF6FF" border="#BFDBFE" title="Memulai Terapi dengan Let's Play">
                                Farel bermain mini-game setiap hari selama 20 menit. Game menyesuaikan tingkat kesulitan otomatis. Dalam 2 minggu, Farel bahkan meminta waktu bermain tambahan!
                            </StoryStep>
                            <StoryStep numLabel="4" color="#6BCB77" shadow="#338844" bg="#F0FFF4" border="#A8E6B0" title="Melihat Progres di Parent Mode">
                                Setelah 3 bulan: kecepatan membaca naik +35%, akurasi kata naik +42%, nilai bahasa Indonesia naik dari 65 menjadi 82!
                            </StoryStep>
                        </div>

                        {/* Testimonial */}
                        <div style={{ marginTop:36, background:"#FF6B6B", borderRadius:28, border:"3px solid #CC4444", boxShadow:"0 7px 0 #CC4444", padding:"32px", textAlign:"center" }}>
                            <div style={{ fontSize:60, color:"rgba(255,255,255,0.3)", lineHeight:0.7, fontFamily:"Georgia,serif", marginBottom:16 }}>"</div>
                            <p style={{ fontSize:17, color:"white", fontWeight:700, lineHeight:1.8, marginBottom:16, fontStyle:"italic" }}>
                                Nilai bahasa Indonesia Farel naik dari 65 jadi 82! Dia juga lebih percaya diri saat presentasi di kelas. Terima kasih Lexit!
                            </p>
                            <div style={{ fontWeight:900, color:"#FFE566", fontSize:16 }}>— Ibu Yuni, Jakarta</div>
                        </div>
                    </div>
                </section>

                {/* ── Referensi Cepat ── */}
                <section style={{ padding:"88px 24px", background:"white" }}>
                    <div style={{ maxWidth:1000, margin:"0 auto" }}>
                        <div style={{ textAlign:"center", marginBottom:56 }}>
                            <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.6rem)", fontWeight:900, color:"#1A1A2E", marginBottom:12 }}>Referensi Cepat</h2>
                            <p style={{ fontSize:16, color:"#666", fontWeight:600 }}>Informasi penting yang perlu Anda ketahui</p>
                        </div>
                        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px,1fr))", gap:24 }}>
                            <QuickCard icon={<Clock color="white" size={28}/>} color="#4D96FF" shadow="#1A5FCC" bg="#EFF6FF" border="#BFDBFE" title="Waktu yang Dibutuhkan"
                                items={["Skrining: 15 menit","Terapi harian: 20–30 menit","Review progres: 5 menit/minggu"]}/>
                            <QuickCard icon={<Gamepad2 color="#1A1A2E" size={28}/>} color="#FFD93D" shadow="#CC9900" bg="#FFFDE7" border="#FFE566" title="Usia yang Cocok"
                                items={["Target: 5–12 tahun","Optimal: 6–10 tahun","Dapat disesuaikan untuk usia lain"]}/>
                            <QuickCard icon={<FileText color="white" size={28}/>} color="#6BCB77" shadow="#338844" bg="#F0FFF4" border="#A8E6B0" title="Hasil yang Diharapkan"
                                items={["Minggu 1: Laporan skrining","Bulan 1: Progres awal terlihat","Bulan 3: Peningkatan signifikan"]}/>
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section style={{ padding:"80px 24px", background:"linear-gradient(135deg,#6BCB77 0%,#338844 100%)", position:"relative", overflow:"hidden" }}>
                    {[["5%","22%","rgba(255,255,255,0.15)",80],["88%","65%","rgba(255,217,61,0.2)",100]].map(([x,y,c,s],i)=>(
                        <div key={i} style={{ position:"absolute",left:x,top:y,width:Number(s),height:Number(s),borderRadius:"50%",background:c }}/>
                    ))}
                    {[["12%","30%","#FFD93D","18"],["88%","58%","white","14"]].map(([x,y,c,s],i)=>(
                        <svg key={i} width={s} height={s} viewBox="0 0 20 20" fill={c} style={{ position:"absolute",left:x,top:y,opacity:0.5 }}>
                            <polygon points="10,1 12.9,7.5 20,8.2 14.5,13.3 16.2,20 10,16.5 3.8,20 5.5,13.3 0,8.2 7.1,7.5"/>
                        </svg>
                    ))}
                    <div style={{ maxWidth:700, margin:"0 auto", textAlign:"center", position:"relative", zIndex:2 }}>
                        <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:900, color:"white", marginBottom:16, lineHeight:1.2 }}>
                            Siap Memulai Perjalanan Seperti Farel?
                        </h2>
                        <p style={{ fontSize:17, color:"rgba(255,255,255,0.92)", marginBottom:36, fontWeight:600 }}>
                            Coba skrining gratis hari ini dan lihat bagaimana Lexit dapat membantu anak Anda
                        </p>
                        <Link href="/lexscan" style={{ display:"inline-flex", alignItems:"center", gap:10, padding:"16px 40px", background:"white", color:"#338844", fontWeight:900, fontSize:16, borderRadius:999, textDecoration:"none", boxShadow:"0 6px 0 #1A5C2A" }}>
                            Mulai Gratis Sekarang <ArrowRight size={20}/>
                        </Link>
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}