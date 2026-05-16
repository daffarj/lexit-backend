import { Target, Users, Award, Globe, Heart, ArrowRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

const F = "'Nunito', sans-serif";

function LionSvg() {
    return (
        <svg width="120" height="120" viewBox="0 0 110 110" fill="none" style={{ animation:"float 3s ease-in-out infinite alternate", filter:"drop-shadow(0 6px 16px rgba(0,0,0,0.2))" }}>
            <circle cx="55" cy="58" r="40" fill="#FFB347"/>
            <circle cx="55" cy="55" r="33" fill="#FFCC80"/>
            <circle cx="55" cy="50" r="28" fill="#FFB347"/>
            <ellipse cx="55" cy="56" rx="18" ry="16" fill="#FFCC80"/>
            <circle cx="30" cy="26" r="10" fill="#FF8C00"/>
            <circle cx="80" cy="26" r="10" fill="#FF8C00"/>
            <circle cx="30" cy="26" r="5.5" fill="#FFAB40"/>
            <circle cx="80" cy="26" r="5.5" fill="#FFAB40"/>
            <circle cx="44" cy="42" r="7" fill="white"/>
            <circle cx="66" cy="42" r="7" fill="white"/>
            <circle cx="44" cy="42" r="4.5" fill="#33691E"/>
            <circle cx="66" cy="42" r="4.5" fill="#33691E"/>
            <circle cx="44" cy="42" r="2.5" fill="#1A1A2E"/>
            <circle cx="66" cy="42" r="2.5" fill="#1A1A2E"/>
            <circle cx="45" cy="41" r="1" fill="white"/>
            <circle cx="67" cy="41" r="1" fill="white"/>
            <path d="M50 54 L55 59 L60 54 L55 52 Z" fill="#FF6B6B"/>
            <line x1="26" y1="53" x2="44" y2="55" stroke="#BF8020" strokeWidth="1.5"/>
            <line x1="26" y1="57" x2="44" y2="57" stroke="#BF8020" strokeWidth="1.5"/>
            <line x1="66" y1="55" x2="84" y2="53" stroke="#BF8020" strokeWidth="1.5"/>
            <line x1="66" y1="57" x2="84" y2="57" stroke="#BF8020" strokeWidth="1.5"/>
            <path d="M46 62 Q55 70 64 62" stroke="#BF6030" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <path d="M35 30 L42 18 L50 28 L58 14 L66 28 L74 18 L80 30" stroke="#FFD93D" strokeWidth="3.5" fill="none" strokeLinejoin="round" strokeLinecap="round"/>
        </svg>
    );
}

function TeamCard({ name, role, color, shadow, bg, border, initial }: {
    name: string; role: string; color: string; shadow: string; bg: string; border: string; initial: string;
}) {
    return (
        <div style={{ background:bg, borderRadius:24, border:`3px solid ${border}`, boxShadow:`0 6px 0 ${shadow}`, padding:"24px 20px", textAlign:"center", fontFamily:F, transition:"transform 0.18s, box-shadow 0.18s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 0 ${shadow}`; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 0 ${shadow}`; }}>
            <div style={{ width:72, height:72, borderRadius:"50%", background:color, boxShadow:`0 4px 0 ${shadow}`, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px", fontSize:28, fontWeight:900, color:"white" }}>
                {initial}
            </div>
            <div style={{ fontWeight:900, fontSize:17, color:"#1A1A2E", marginBottom:4 }}>{name}</div>
            <div style={{ fontSize:13, color:color, fontWeight:700 }}>{role}</div>
        </div>
    );
}

function SdgBadge({ num, color, shadow, label }: { num: string; color: string; shadow: string; label: string }) {
    return (
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:8 }}>
            <div style={{ width:72, height:72, borderRadius:18, background:color, boxShadow:`0 5px 0 ${shadow}`, display:"flex", alignItems:"center", justifyContent:"center", fontWeight:900, fontSize:24, color:"white" }}>
                {num}
            </div>
            <div style={{ fontSize:12, color:"#555", fontWeight:700, textAlign:"center", maxWidth:70, lineHeight:1.4 }}>SDG {label}</div>
        </div>
    );
}

export default function About() {
    return (
        <AppLayout>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&display=swap');
                * { box-sizing: border-box; }
                @keyframes float { 0%{transform:translateY(0)} 100%{transform:translateY(-14px)} }
            `}</style>
            <div style={{ minHeight:"100vh", fontFamily:F }}>

                {/* ── Hero ── */}
                <section style={{ background:"linear-gradient(135deg, #FF6B6B 0%, #FF8E53 50%, #FFD93D 100%)", padding:"80px 24px", textAlign:"center", position:"relative", overflow:"hidden" }}>
                    {/* Blobs */}
                    {[["7%","16%","rgba(255,255,255,0.2)"],["88%","12%","rgba(255,255,255,0.15)"],["4%","72%","rgba(255,255,255,0.18)"],["90%","70%","rgba(255,255,255,0.12)"]].map(([x,y,c],i)=>(
                        <div key={i} style={{ position:"absolute",left:x,top:y,width:56,height:56,borderRadius:"50%",background:c,border:"3px solid rgba(255,255,255,0.3)" }}/>
                    ))}
                    {/* Stars */}
                    {[["12%","38%","white","18"],["88%","42%","#FFD93D","14"],["5%","58%","white","12"]].map(([x,y,c,s],i)=>(
                        <svg key={i} width={s} height={s} viewBox="0 0 20 20" fill={c} style={{ position:"absolute",left:x,top:y,opacity:0.6 }}>
                            <polygon points="10,1 12.9,7.5 20,8.2 14.5,13.3 16.2,20 10,16.5 3.8,20 5.5,13.3 0,8.2 7.1,7.5"/>
                        </svg>
                    ))}
                    <div style={{ maxWidth:800, margin:"0 auto", position:"relative", zIndex:2 }}>
                        <div style={{ display:"flex", justifyContent:"center", marginBottom:24 }}>
                            <LionSvg/>
                        </div>
                        <h1 style={{ color:"white", fontWeight:900, fontSize:"clamp(2rem,5vw,3.5rem)", lineHeight:1.2, marginBottom:16, textShadow:"0 2px 10px rgba(0,0,0,0.15)" }}>
                            Tentang Lexit
                        </h1>
                        <p style={{ color:"rgba(255,255,255,0.92)", fontSize:17, fontWeight:600, lineHeight:1.7 }}>
                            Demokratisasi layanan deteksi dan terapi disleksia untuk semua anak Indonesia
                        </p>
                    </div>
                </section>

                {/* ── Mission ── */}
                <section style={{ padding:"88px 24px", background:"white" }}>
                    <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(320px,1fr))", gap:56, alignItems:"center" }}>
                        <div>
                            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#FFF5F5", border:"3px solid #FFAAAA", borderRadius:999, padding:"8px 22px", marginBottom:24, boxShadow:"0 4px 0 #FF6B6B" }}>
                                <Target color="#CC4444" size={18}/>
                                <span style={{ fontWeight:900, fontSize:14, color:"#CC4444" }}>Misi Kami</span>
                            </div>
                            <h2 style={{ fontSize:"clamp(1.6rem,3.5vw,2.6rem)", fontWeight:900, color:"#1A1A2E", marginBottom:18, lineHeight:1.2 }}>
                                Mengubah Masa Depan Anak Indonesia
                            </h2>
                            <p style={{ fontSize:15, color:"#555", lineHeight:1.8, marginBottom:18, fontWeight:600 }}>
                                Di Indonesia, diperkirakan 5–15% dari 5 juta pelajar mengalami disleksia. Namun hanya ada sekitar 4.000 psikolog klinis — menciptakan kesenjangan akses yang sangat besar.
                            </p>
                            <p style={{ fontSize:15, color:"#555", lineHeight:1.8, marginBottom:28, fontWeight:600 }}>
                                Lexit hadir untuk menjembatani gap ini dengan teknologi AI yang dapat diakses dari rumah, terjangkau, dan terbukti efektif.
                            </p>
                            <div style={{ background:"#FFF5F5", borderRadius:20, padding:"20px 24px", border:"3px solid #FFAAAA", borderLeft:"6px solid #FF6B6B", boxShadow:"0 5px 0 #FFAAAA" }}>
                                <p style={{ fontSize:17, fontWeight:900, color:"#1A1A2E", fontStyle:"italic", margin:"0 0 8px" }}>"Baca Lebih Mudah, Tumbuh Lebih Berani"</p>
                                <p style={{ fontSize:14, color:"#666", fontWeight:600, margin:0 }}>Tagline kami adalah komitmen kami untuk setiap keluarga.</p>
                            </div>
                        </div>
                        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                            {[
                                { val:"5–15%", label:"Anak Indonesia dengan disleksia", color:"#CC4444", shadow:"#FF6B6B", bg:"#FFF5F5", border:"#FFAAAA" },
                                { val:"5 Juta", label:"Total pelajar yang berisiko", color:"#CC9900", shadow:"#FFD93D", bg:"#FFFDE7", border:"#FFE566" },
                                { val:"4.000", label:"Psikolog klinis tersedia", color:"#1A5FCC", shadow:"#4D96FF", bg:"#EFF6FF", border:"#BFDBFE" },
                            ].map(s => (
                                <div key={s.label} style={{ background:s.bg, borderRadius:20, border:`3px solid ${s.border}`, boxShadow:`0 5px 0 ${s.shadow}`, padding:"16px 20px", display:"flex", alignItems:"center", gap:16 }}>
                                    <div style={{ fontSize:30, fontWeight:900, color:s.color, minWidth:90, textAlign:"center", fontVariantNumeric:"tabular-nums" }}>{s.val}</div>
                                    <div style={{ fontSize:14, color:"#555", fontWeight:700, lineHeight:1.4 }}>{s.label}</div>
                                </div>
                            ))}
                            <div style={{ background:"#F0FFF4", borderRadius:20, border:"3px solid #A8E6B0", boxShadow:"0 5px 0 #6BCB77", padding:"20px 24px" }}>
                                <div style={{ fontWeight:900, color:"#338844", fontSize:15, marginBottom:6 }}>Lexit menjembatani kesenjangan ini</div>
                                <div style={{ fontSize:13, color:"#555", fontWeight:600, lineHeight:1.6 }}>Platform AI yang bisa diakses dari rumah, kapan saja, dengan biaya minimal namun efektif</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Team ── */}
                <section style={{ padding:"88px 24px", background:"linear-gradient(180deg,#FFFDE7 0%,#FFF5F5 100%)" }}>
                    <div style={{ maxWidth:900, margin:"0 auto" }}>
                        <div style={{ textAlign:"center", marginBottom:56 }}>
                            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#FFF5F5", border:"3px solid #FFAAAA", borderRadius:999, padding:"8px 22px", marginBottom:16, boxShadow:"0 4px 0 #CC4444" }}>
                                <Users color="#CC4444" size={18}/>
                                <span style={{ fontWeight:900, fontSize:14, color:"#CC4444" }}>Tim Lavan</span>
                            </div>
                            <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.6rem)", fontWeight:900, color:"#1A1A2E", marginBottom:12 }}>Tim di Balik Lexit</h2>
                            <p style={{ fontSize:16, color:"#666", fontWeight:600 }}>Dibuat dengan cinta untuk anak-anak Indonesia</p>
                        </div>
                        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(170px,1fr))", gap:20 }}>
                            <TeamCard name="Daffa RJ" role="Fullstack Dev" color="#FF6B6B" shadow="#CC4444" bg="#FFF5F5" border="#FFAAAA" initial="D"/>
                            <TeamCard name="Anggota 2" role="UI/UX Designer" color="#4D96FF" shadow="#1A5FCC" bg="#EFF6FF" border="#BFDBFE" initial="A"/>
                            <TeamCard name="Anggota 3" role="AI Engineer" color="#6BCB77" shadow="#338844" bg="#F0FFF4" border="#A8E6B0" initial="A"/>
                            <TeamCard name="Anggota 4" role="Psikolog Klinis" color="#FFD93D" shadow="#CC9900" bg="#FFFDE7" border="#FFE566" initial="A"/>
                        </div>
                    </div>
                </section>

                {/* ── Metrics ── */}
                <section style={{ padding:"88px 24px", background:"white" }}>
                    <div style={{ maxWidth:1000, margin:"0 auto" }}>
                        <div style={{ textAlign:"center", marginBottom:56 }}>
                            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#FFFDE7", border:"3px solid #FFE566", borderRadius:999, padding:"8px 22px", marginBottom:16, boxShadow:"0 4px 0 #CC9900" }}>
                                <Award color="#CC9900" size={18}/>
                                <span style={{ fontWeight:900, fontSize:14, color:"#92400E" }}>Tervalidasi & Terbukti</span>
                            </div>
                            <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.6rem)", fontWeight:900, color:"#1A1A2E", marginBottom:12 }}>Metrics Usability</h2>
                            <p style={{ fontSize:16, color:"#666", fontWeight:600 }}>Diuji langsung dengan pengguna nyata</p>
                        </div>
                        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(200px,1fr))", gap:24 }}>
                            {[
                                { val:"89", label:"SUS Score", sub:"System Usability Scale — Excellent", color:"#4D96FF", shadow:"#1A5FCC", bg:"#EFF6FF", border:"#BFDBFE", grade:"A" },
                                { val:"7", label:"SEQ Score", sub:"Single Ease Question (0–7 scale)", color:"#6BCB77", shadow:"#338844", bg:"#F0FFF4", border:"#A8E6B0", grade:"Very Easy" },
                                { val:"90%", label:"Kepuasan", sub:"Overall satisfaction dengan platform", color:"#FF6B6B", shadow:"#CC4444", bg:"#FFF5F5", border:"#FFAAAA", grade:"Tinggi" },
                            ].map(m => (
                                <div key={m.label} style={{ background:m.bg, borderRadius:28, border:`3px solid ${m.border}`, boxShadow:`0 7px 0 ${m.shadow}`, padding:"32px 24px", textAlign:"center",
                                    transition:"transform 0.18s, box-shadow 0.18s" }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 11px 0 ${m.shadow}`; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 7px 0 ${m.shadow}`; }}>
                                    <div style={{ fontSize:52, fontWeight:900, color:m.color, marginBottom:8, lineHeight:1 }}>{m.val}</div>
                                    <div style={{ fontWeight:900, fontSize:18, color:"#1A1A2E", marginBottom:6 }}>{m.label}</div>
                                    <div style={{ fontSize:13, color:"#666", fontWeight:600, marginBottom:14, lineHeight:1.4 }}>{m.sub}</div>
                                    <div style={{ display:"inline-block", background:m.color, color:"white", borderRadius:999, padding:"4px 16px", fontSize:12, fontWeight:800, boxShadow:`0 3px 0 ${m.shadow}` }}>{m.grade}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── SDG & Legal ── */}
                <section style={{ padding:"88px 24px", background:"linear-gradient(180deg,#F0FFF4 0%,#EFF6FF 100%)" }}>
                    <div style={{ maxWidth:900, margin:"0 auto" }}>
                        <div style={{ textAlign:"center", marginBottom:48 }}>
                            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#EFF6FF", border:"3px solid #BFDBFE", borderRadius:999, padding:"8px 22px", marginBottom:16, boxShadow:"0 4px 0 #4D96FF" }}>
                                <Globe color="#1A5FCC" size={18}/>
                                <span style={{ fontWeight:900, fontSize:14, color:"#1A5FCC" }}>Kepatuhan & SDGs</span>
                            </div>
                            <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.6rem)", fontWeight:900, color:"#1A1A2E", marginBottom:12 }}>Sesuai UU & SDGs</h2>
                        </div>
                        <div style={{ display:"flex", justifyContent:"center", gap:32, flexWrap:"wrap", marginBottom:48 }}>
                            <SdgBadge num="3" color="#4CAF50" shadow="#2E7D32" label="Kesehatan"/>
                            <SdgBadge num="4" color="#1976D2" shadow="#0D47A1" label="Pendidikan"/>
                            <SdgBadge num="10" color="#7B1FA2" shadow="#4A148C" label="Kesetaraan"/>
                        </div>
                        <div style={{ background:"white", borderRadius:28, border:"3px solid #BFDBFE", boxShadow:"0 7px 0 #4D96FF", padding:"32px 36px" }}>
                            <div style={{ display:"flex", alignItems:"flex-start", gap:20 }}>
                                <div style={{ width:56, height:56, borderRadius:18, background:"#4D96FF", boxShadow:"0 4px 0 #1A5FCC", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                                    <Globe color="white" size={28}/>
                                </div>
                                <div>
                                    <h3 style={{ fontSize:19, fontWeight:900, color:"#1A1A2E", marginBottom:16 }}>Sesuai UU No. 8/2016 tentang Penyandang Disabilitas</h3>
                                    <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                                        {[
                                            { pasal:"Pasal 10", desc:"Hak pendidikan yang inklusif dan bebas diskriminasi" },
                                            { pasal:"Pasal 40", desc:"Akses layanan deteksi dini dan intervensi" },
                                            { pasal:"Pasal 129", desc:"Teknologi asistif untuk meningkatkan kualitas hidup" },
                                        ].map(p => (
                                            <div key={p.pasal} style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
                                                <div style={{ background:"#4D96FF", color:"white", borderRadius:999, padding:"4px 14px", fontWeight:800, fontSize:12, flexShrink:0, boxShadow:"0 2px 0 #1A5FCC" }}>{p.pasal}</div>
                                                <div style={{ fontSize:14, color:"#555", fontWeight:600, lineHeight:1.5, paddingTop:3 }}>{p.desc}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section style={{ padding:"80px 24px", background:"#FF6B6B", position:"relative", overflow:"hidden" }}>
                    {[["5%","22%","rgba(255,255,255,0.14)",80],["88%","18%","rgba(255,217,61,0.22)",100],["80%","70%","rgba(255,255,255,0.1)",70]].map(([x,y,c,s],i)=>(
                        <div key={i} style={{ position:"absolute",left:x,top:y,width:Number(s),height:Number(s),borderRadius:"50%",background:c }}/>
                    ))}
                    {[["12%","30%","#FFD93D","18"],["88%","58%","white","14"]].map(([x,y,c,s],i)=>(
                        <svg key={i} width={s} height={s} viewBox="0 0 20 20" fill={c} style={{ position:"absolute",left:x,top:y,opacity:0.5 }}>
                            <polygon points="10,1 12.9,7.5 20,8.2 14.5,13.3 16.2,20 10,16.5 3.8,20 5.5,13.3 0,8.2 7.1,7.5"/>
                        </svg>
                    ))}
                    <div style={{ maxWidth:700, margin:"0 auto", textAlign:"center", position:"relative", zIndex:2 }}>
                        <div style={{ display:"flex", justifyContent:"center", marginBottom:20 }}>
                            <Heart color="white" size={44}/>
                        </div>
                        <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:900, color:"white", marginBottom:16, lineHeight:1.2 }}>
                            Bergabunglah dalam Misi Kami
                        </h2>
                        <p style={{ fontSize:17, color:"rgba(255,255,255,0.92)", marginBottom:36, fontWeight:600 }}>
                            Bersama kita ciptakan Indonesia yang lebih inklusif untuk semua anak
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