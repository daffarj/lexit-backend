import { useState } from "react";
import { Link, useForm, router } from "@inertiajs/react";
import { Upload, Camera, Brain, CheckCircle, AlertCircle, Download, RotateCcw, Sparkles } from "lucide-react";
import AppLayout from "@/Layouts/AppLayout";

interface ScanResult { letter: string; confidence: number; isCorrect: boolean; feedback: string; }
interface Props { scanResults: ScanResult[] | null; overallScore: number | null; dyslexiaIndicators: string[] | null; parentFeedback: string | null; error: string | null; }

const F = "'Nunito', sans-serif";

function OwlAnalyst() {
    return (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <ellipse cx="50" cy="65" rx="28" ry="30" fill="#7B68EE"/>
            <ellipse cx="50" cy="58" rx="22" ry="24" fill="#8A7FEE"/>
            <polygon points="36,22 30,8 44,20" fill="#7B68EE"/>
            <polygon points="64,22 70,8 56,20" fill="#7B68EE"/>
            <circle cx="38" cy="44" rx="13" ry="13" fill="white"/>
            <circle cx="62" cy="44" rx="13" ry="13" fill="white"/>
            <circle cx="38" cy="44" r="9" fill="#FFD93D"/>
            <circle cx="62" cy="44" r="9" fill="#FFD93D"/>
            <circle cx="38" cy="44" r="5.5" fill="#1A1A2E"/>
            <circle cx="62" cy="44" r="5.5" fill="#1A1A2E"/>
            <circle cx="39.5" cy="42.5" r="1.8" fill="white"/>
            <circle cx="63.5" cy="42.5" r="1.8" fill="white"/>
            <ellipse cx="50" cy="58" rx="5" ry="3.5" fill="#FFAB40"/>
            <ellipse cx="36" cy="72" rx="14" ry="8" fill="#6B5FD6"/>
            <ellipse cx="64" cy="72" rx="14" ry="8" fill="#6B5FD6"/>
            <ellipse cx="36" cy="92" rx="11" ry="5" fill="#FFB347"/>
            <ellipse cx="64" cy="92" rx="11" ry="5" fill="#FFB347"/>
            <rect x="36" y="30" width="28" height="7" rx="3.5" fill="#FF6B6B" opacity="0.9"/>
        </svg>
    );
}

function BrainIdleIcon() {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <ellipse cx="40" cy="45" rx="28" ry="26" fill="#C8E6FF"/>
            <ellipse cx="40" cy="38" rx="24" ry="22" fill="#4D96FF" opacity="0.3"/>
            <circle cx="40" cy="36" r="20" fill="#4D96FF" opacity="0.2"/>
            <circle cx="32" cy="30" r="6" fill="#4D96FF" opacity="0.5"/>
            <circle cx="50" cy="28" r="5" fill="#4D96FF" opacity="0.5"/>
            <circle cx="30" cy="44" r="4" fill="#4D96FF" opacity="0.4"/>
            <circle cx="52" cy="42" r="5" fill="#4D96FF" opacity="0.4"/>
            <path d="M28 36 Q34 28 40 34 Q46 28 52 36" stroke="#4D96FF" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <circle cx="28" cy="22" r="5" fill="#FFD93D"/>
            <circle cx="52" cy="18" r="4" fill="#FF6B6B"/>
            <circle cx="22" cy="36" r="3" fill="#6BCB77"/>
        </svg>
    );
}

const S = {
    page: { minHeight: "100vh", background: "linear-gradient(180deg, #FFF9F0 0%, #F0F9FF 50%, white 100%)", padding: "72px 24px 48px", fontFamily: F } as React.CSSProperties,
    sectionBadge: (bg: string, color: string) => ({ display: "inline-flex", alignItems: "center", gap: 8, background: bg, borderRadius: 999, padding: "6px 18px", marginBottom: 16, fontWeight: 800, fontSize: 13, color } as React.CSSProperties),
    card: (border: string, shadow: string, bg = "white") => ({ background: bg, borderRadius: 28, border: `3px solid ${border}`, boxShadow: `0 7px 0 ${shadow}`, padding: "28px 24px" } as React.CSSProperties),
    btn: (bg: string, shadow: string) => ({ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px 28px", background: bg, color: "white", fontWeight: 900, fontSize: 15, borderRadius: 999, border: "none", cursor: "pointer", boxShadow: `0 5px 0 ${shadow}`, fontFamily: F, width: "100%" } as React.CSSProperties),
};

export default function LexScan({ scanResults, overallScore, dyslexiaIndicators, parentFeedback, error }: Props) {
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const showResults = scanResults !== null && scanResults !== undefined && scanResults.length > 0;
    const { data, setData, post, processing, reset } = useForm<{ image: File | null }>({ image: null });

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData("image", file);
            const reader = new FileReader();
            reader.onload = (ev) => setUploadedImage(ev.target?.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleScan = () => post(route("lexscan.analyze"), { forceFormData: true });
    const handleReset = () => { setUploadedImage(null); reset(); router.visit("/lexscan", { preserveScroll: false }); };

    return (
        <AppLayout>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&display=swap'); * { box-sizing: border-box; }`}</style>
            <div style={S.page}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>

                    {/* Header */}
                    <div style={{ textAlign: "center", marginBottom: 56 }}>
                        <div style={S.sectionBadge("#EFF6FF", "#1A5FCC")}>
                            <OwlAnalyst/>
                        </div>
                        <div style={S.sectionBadge("#EFF6FF", "#1A5FCC")}>
                            <Brain size={18}/> LexScan
                        </div>
                        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#1A1A2E", marginBottom: 12, lineHeight: 1.2 }}>
                            Scan Tulisan Tangan
                        </h1>
                        <p style={{ fontSize: 17, color: "#666", fontWeight: 600, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
                            Upload foto tulisan anak Anda dan AI akan menganalisis apakah huruf sudah ditulis dengan benar
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>

                        {/* Upload Section */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                            <div style={{ ...S.card("#BFDBFE", "#1A5FCC", "#F0F7FF"), background: "#F0F7FF" }}>
                                {!uploadedImage ? (
                                    <div style={{ textAlign: "center", padding: "40px 0" }}>
                                        <div style={{ width: 100, height: 100, background: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", boxShadow: "0 4px 0 #BFDBFE", border: "3px solid #BFDBFE" }}>
                                            <Upload size={44} color="#4D96FF"/>
                                        </div>
                                        <h3 style={{ fontSize: 22, fontWeight: 900, color: "#1A1A2E", marginBottom: 8 }}>Upload Foto Tulisan</h3>
                                        <p style={{ fontSize: 14, color: "#666", fontWeight: 600, marginBottom: 24 }}>Foto huruf yang ditulis anak di kertas atau buku tulis</p>
                                        <label style={{ ...S.btn("#4D96FF", "#1A5FCC"), width: "auto", padding: "12px 28px", cursor: "pointer" }}>
                                            <Camera size={18}/> Pilih Foto
                                            <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }}/>
                                        </label>
                                        <p style={{ fontSize: 12, color: "#aaa", marginTop: 14, fontWeight: 600 }}>Format: JPG, PNG • Maks 10MB</p>
                                    </div>
                                ) : (
                                    <div>
                                        <div style={{ position: "relative", marginBottom: 20 }}>
                                            <img src={uploadedImage} alt="Tulisan" style={{ width: "100%", height: 280, objectFit: "contain", borderRadius: 20, background: "#F8F9FA" }}/>
                                            <button onClick={handleReset} style={{ position: "absolute", top: 12, right: 12, background: "white", border: "3px solid #BFDBFE", borderRadius: 12, padding: "8px 10px", cursor: "pointer", boxShadow: "0 3px 0 #BFDBFE" }}>
                                                <RotateCcw size={18} color="#4D96FF"/>
                                            </button>
                                        </div>
                                        {!showResults && (
                                            <button onClick={handleScan} disabled={processing} style={{ ...S.btn(processing ? "#aaa" : "#4D96FF", processing ? "#888" : "#1A5FCC"), cursor: processing ? "not-allowed" : "pointer" }}>
                                                {processing ? <><Sparkles size={18} style={{ animation: "spin 1s linear infinite" }}/> Menganalisis...</> : <><Brain size={18}/> Mulai Scan dengan AI</>}
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Steps */}
                            <div style={{ ...S.card("#A8E6B0", "#338844", "#F0FFF4") }}>
                                <h4 style={{ fontWeight: 900, fontSize: 16, color: "#1A1A2E", marginBottom: 16 }}>Cara Menggunakan</h4>
                                {[
                                    { color: "#FF6B6B", shadow: "#CC4444", num: "1", text: "Minta anak menulis huruf A–Z di kertas putih dengan pensil hitam" },
                                    { color: "#FFD93D", shadow: "#CC9900", num: "2", text: "Foto tulisan dengan pencahayaan yang baik" },
                                    { color: "#6BCB77", shadow: "#338844", num: "3", text: "Upload dan tunggu hasil analisis AI" },
                                ].map(step => (
                                    <div key={step.num} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
                                        <div style={{ width: 34, height: 34, borderRadius: "50%", background: step.color, boxShadow: `0 3px 0 ${step.shadow}`, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900, fontSize: 15, flexShrink: 0 }}>{step.num}</div>
                                        <p style={{ fontSize: 14, color: "#555", fontWeight: 600, paddingTop: 6, lineHeight: 1.5 }}>{step.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Results Section */}
                        <div>
                            {showResults && scanResults ? (
                                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                                    {/* Summary Card */}
                                    <div style={{ background: "linear-gradient(135deg, #4D96FF 0%, #1A5FCC 100%)", borderRadius: 28, padding: "28px 24px", color: "white", boxShadow: "0 8px 0 #0A3A8A" }}>
                                        <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 20 }}>Hasil Analisis</h3>
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                                            <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 20, padding: "16px 20px", border: "2px solid rgba(255,255,255,0.25)" }}>
                                                <div style={{ fontSize: 40, fontWeight: 900, fontFamily: "monospace" }}>{scanResults.filter(r => r.isCorrect).length}/{scanResults.length}</div>
                                                <div style={{ fontSize: 13, opacity: 0.85, fontWeight: 700 }}>Huruf Benar</div>
                                            </div>
                                            <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 20, padding: "16px 20px", border: "2px solid rgba(255,255,255,0.25)" }}>
                                                <div style={{ fontSize: 40, fontWeight: 900, fontFamily: "monospace" }}>{overallScore ?? Math.round(scanResults.reduce((a, r) => a + r.confidence, 0) / scanResults.length)}%</div>
                                                <div style={{ fontSize: 13, opacity: 0.85, fontWeight: 700 }}>Akurasi</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Per-letter results */}
                                    <div style={S.card("#E5E7EB", "#9CA3AF")}>
                                        <h4 style={{ fontSize: 18, fontWeight: 900, color: "#1A1A2E", marginBottom: 20 }}>Detail Per Huruf</h4>
                                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                            {scanResults.map((result, i) => (
                                                <div key={i} style={{ padding: "16px 20px", borderRadius: 20, border: `3px solid ${result.isCorrect ? "#A8E6B0" : "#FFAAAA"}`, background: result.isCorrect ? "#F0FFF4" : "#FFF0F0" }}>
                                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                                                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                                            <div style={{ width: 52, height: 52, background: "white", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, fontWeight: 900, color: "#1A1A2E", border: `2px solid ${result.isCorrect ? "#A8E6B0" : "#FFAAAA"}` }}>{result.letter}</div>
                                                            <div>
                                                                <div style={{ fontWeight: 800, color: "#1A1A2E" }}>Huruf {result.letter}</div>
                                                                <div style={{ fontSize: 13, color: result.isCorrect ? "#338844" : "#CC4444", fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>
                                                                    {result.isCorrect ? <CheckCircle size={14}/> : <AlertCircle size={14}/>}
                                                                    {result.isCorrect ? "Benar" : "Perlu Perbaikan"}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div style={{ fontWeight: 900, fontSize: 22, fontFamily: "monospace", color: "#1A1A2E" }}>{result.confidence}%</div>
                                                    </div>
                                                    <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, fontWeight: 600 }}>{result.feedback}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action buttons */}
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                                        <button onClick={handleReset} style={{ padding: "14px", background: "white", color: "#4D96FF", border: "3px solid #4D96FF", borderRadius: 20, fontWeight: 900, fontSize: 14, cursor: "pointer", fontFamily: F }}>
                                            Scan Lagi
                                        </button>
                                        <button onClick={() => {
                                            const form = document.createElement("form");
                                            form.method = "POST"; form.action = route("lexscan.download-pdf");
                                            const csrf = document.createElement("input"); csrf.type = "hidden"; csrf.name = "_token";
                                            csrf.value = (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content ?? ""; form.appendChild(csrf);
                                            const add = (n: string, v: string) => { const i = document.createElement("input"); i.type = "hidden"; i.name = n; i.value = v; form.appendChild(i); };
                                            add("overallScore", String(overallScore ?? 0)); add("parentFeedback", parentFeedback ?? "");
                                            scanResults?.forEach((r, i) => { add(`scanResults[${i}][letter]`, r.letter); add(`scanResults[${i}][confidence]`, String(r.confidence)); add(`scanResults[${i}][isCorrect]`, r.isCorrect ? "1" : "0"); add(`scanResults[${i}][feedback]`, r.feedback); });
                                            dyslexiaIndicators?.forEach((ind, i) => add(`dyslexiaIndicators[${i}]`, ind));
                                            document.body.appendChild(form); form.submit(); document.body.removeChild(form);
                                        }} style={{ ...S.btn("#FFD93D", "#CC9900"), width: "auto", fontSize: 14, color: "#1A1A2E" }}>
                                            <Download size={16}/> Unduh PDF
                                        </button>
                                    </div>

                                    {/* Recommendations */}
                                    <div style={{ ...S.card("#FFE566", "#CC9900", "#FFFDE7") }}>
                                        <h4 style={{ fontWeight: 900, fontSize: 16, color: "#1A1A2E", marginBottom: 12 }}>Rekomendasi</h4>
                                        {parentFeedback ? (
                                            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, fontWeight: 600 }}>{parentFeedback}</p>
                                        ) : (
                                            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                                                {["Latih huruf yang salah dengan game Trace & Race di LexPlay", "Lakukan latihan menulis 10–15 menit setiap hari", "Gunakan kertas bergaris untuk konsistensi ukuran huruf"].map((tip, i) => (
                                                    <li key={i} style={{ display: "flex", gap: 10 }}>
                                                        <CheckCircle size={18} color="#6BCB77" style={{ flexShrink: 0, marginTop: 2 }}/>
                                                        <span style={{ fontSize: 14, color: "#555", fontWeight: 600, lineHeight: 1.6 }}>{tip}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        {dyslexiaIndicators && dyslexiaIndicators.length > 0 && (
                                            <div style={{ marginTop: 14, paddingTop: 12, borderTop: "2px dashed #FFE566" }}>
                                                <p style={{ fontSize: 12, fontWeight: 700, color: "#1A1A2E", marginBottom: 8 }}>Indikator terdeteksi:</p>
                                                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                                    {dyslexiaIndicators.map((ind, i) => (
                                                        <span key={i} style={{ background: "#FF6B6B", color: "white", borderRadius: 999, padding: "4px 12px", fontSize: 12, fontWeight: 800, boxShadow: "0 2px 0 #CC4444" }}>{ind}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div style={{ ...S.card("#E5E7EB", "#9CA3AF"), height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "60px 32px", minHeight: 400 }}>
                                    {error ? (
                                        <>
                                            <div style={{ width: 100, height: 100, background: "#FFF0F0", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", border: "3px solid #FFAAAA" }}>
                                                <AlertCircle size={52} color="#FF6B6B"/>
                                            </div>
                                            <h3 style={{ fontSize: 20, fontWeight: 900, color: "#CC4444", marginBottom: 8 }}>Scan Gagal</h3>
                                            <p style={{ fontSize: 14, color: "#666", fontWeight: 600, marginBottom: 20 }}>{error}</p>
                                            <button onClick={handleReset} style={{ ...S.btn("#FF6B6B", "#CC4444"), width: "auto", padding: "10px 24px" }}>Coba Lagi</button>
                                        </>
                                    ) : processing ? (
                                        <>
                                            <div style={{ width: 100, height: 100, background: "#EFF6FF", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", border: "3px solid #BFDBFE" }}>
                                                <Brain size={52} color="#4D96FF" style={{ animation: "pulse 1.5s ease-in-out infinite" }}/>
                                            </div>
                                            <h3 style={{ fontSize: 20, fontWeight: 900, color: "#1A1A2E", marginBottom: 8 }}>AI Sedang Menganalisis...</h3>
                                            <p style={{ fontSize: 14, color: "#666", fontWeight: 600 }}>Gemini AI sedang membaca tulisan tangan. Mohon tunggu 5–15 detik.</p>
                                        </>
                                    ) : (
                                        <>
                                            <div style={{ margin: "0 auto 20px" }}><BrainIdleIcon/></div>
                                            <h3 style={{ fontSize: 20, fontWeight: 900, color: "#1A1A2E", marginBottom: 8 }}>Hasil Scan Akan Muncul Di Sini</h3>
                                            <p style={{ fontSize: 14, color: "#888", fontWeight: 600, lineHeight: 1.6 }}>Upload foto tulisan anak dan klik "Mulai Scan dengan AI" untuk melihat analisis detail</p>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Tips Section */}
                    <div style={{ ...S.card("#FFE566", "#CC9900", "white"), marginTop: 48 }}>
                        <h3 style={{ fontSize: 22, fontWeight: 900, color: "#1A1A2E", textAlign: "center", marginBottom: 28 }}>Tips Foto yang Baik</h3>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
                            {[
                                { color: "#4D96FF", shadow: "#1A5FCC", title: "Pencahayaan Terang", desc: "Pastikan ruangan cukup terang atau foto di bawah sinar matahari",
                                  icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" fill="#4D96FF"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#4D96FF" strokeWidth="2" strokeLinecap="round"/></svg> },
                                { color: "#6BCB77", shadow: "#338844", title: "Jarak yang Pas", desc: "Foto dari jarak 20–30 cm agar huruf terlihat jelas",
                                  icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="#6BCB77" strokeWidth="2.5" strokeLinecap="round"/><rect x="2" y="4" width="20" height="16" rx="3" stroke="#6BCB77" strokeWidth="2" fill="none"/></svg> },
                                { color: "#FFD93D", shadow: "#CC9900", title: "Tegak Lurus", desc: "Foto dari atas dengan kamera sejajar kertas",
                                  icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="#FFD93D" strokeWidth="2.5" fill="none"/><path d="M3 9h18M9 3v18" stroke="#FFD93D" strokeWidth="2" strokeLinecap="round"/></svg> },
                                { color: "#FF6B6B", shadow: "#CC4444", title: "Kontras Tinggi", desc: "Gunakan tinta hitam pada kertas putih untuk hasil terbaik",
                                  icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" fill="#FF6B6B"/><path d="M12 3v18" stroke="white" strokeWidth="2.5"/><path d="M12 3a9 9 0 0 1 0 18" fill="white"/></svg> },
                            ].map(tip => (
                                <div key={tip.title} style={{ textAlign: "center", padding: "20px 16px", background: "#FAFAF8", borderRadius: 20, border: `2px solid ${tip.color}30` }}>
                                    <div style={{ width: 64, height: 64, background: tip.color + "20", border: `3px solid ${tip.color}`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", boxShadow: `0 4px 0 ${tip.shadow}40` }}>{tip.icon}</div>
                                    <h4 style={{ fontWeight: 900, color: "#1A1A2E", fontSize: 15, marginBottom: 6 }}>{tip.title}</h4>
                                    <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, fontWeight: 600 }}>{tip.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}