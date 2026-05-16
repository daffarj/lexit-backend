import { useState, useEffect } from "react";
import { router } from "@inertiajs/react";
import { Trophy, RotateCcw, ArrowRight, Star, Volume2, HelpCircle } from "lucide-react";
import AppLayout from "@/Layouts/AppLayout";

interface WordChallenge { word: string; image: string; hint: string; }
interface Props { challenges: WordChallenge[]; highScore: number; }

const DEFAULT_CHALLENGES: WordChallenge[] = [
    { word: "BUKU",   image: "buku",   hint: "Kamu membaca ini setiap hari di sekolah" },
    { word: "KUCING", image: "kucing", hint: "Hewan berkaki empat yang suka minum susu" },
    { word: "APEL",   image: "apel",   hint: "Buah berwarna merah yang manis" },
    { word: "RUMAH",  image: "rumah",  hint: "Tempat kamu tinggal bersama keluarga" },
    { word: "BOLA",   image: "bola",   hint: "Kamu menendang ini saat bermain sepak bola" },
];

const F = "'Nunito', sans-serif";

// ── Animal SVG illustrations per word ─────────────────────────────────────────
function WordIllustration({ word }: { word: string }) {
    const illustrations: Record<string, JSX.Element> = {
        BUKU: (
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <rect x="20" y="25" width="80" height="70" rx="6" fill="#FF6B6B"/>
                <rect x="26" y="25" width="68" height="70" rx="4" fill="white"/>
                <rect x="20" y="25" width="14" height="70" rx="4" fill="#CC4444"/>
                <rect x="34" y="38" width="44" height="5" rx="2.5" fill="#BFDBFE"/>
                <rect x="34" y="50" width="36" height="4" rx="2" fill="#BFDBFE" opacity="0.7"/>
                <rect x="34" y="60" width="40" height="4" rx="2" fill="#BFDBFE" opacity="0.5"/>
                <rect x="34" y="70" width="30" height="4" rx="2" fill="#BFDBFE" opacity="0.4"/>
                <circle cx="88" cy="32" r="18" fill="#FFD93D"/>
                <polygon points="88,20 91,28 100,28 93,34 96,42 88,37 80,42 83,34 76,28 85,28" fill="#FF8C00"/>
            </svg>
        ),
        KUCING: (
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <ellipse cx="60" cy="80" rx="28" ry="24" fill="#FFB347"/>
                <circle cx="60" cy="58" r="26" fill="#FFB347"/>
                <polygon points="38,38 30,18 46,36" fill="#FFB347"/>
                <polygon points="82,38 90,18 74,36" fill="#FFB347"/>
                <polygon points="38,36 32,20 44,35" fill="#FFCB80"/>
                <polygon points="82,36 88,20 76,35" fill="#FFCB80"/>
                <ellipse cx="60" cy="64" rx="14" ry="10" fill="#FFCB80"/>
                <circle cx="50" cy="52" r="5" fill="#2C2C2C"/>
                <circle cx="70" cy="52" r="5" fill="#2C2C2C"/>
                <circle cx="51.5" cy="50.5" r="1.5" fill="white"/>
                <circle cx="71.5" cy="50.5" r="1.5" fill="white"/>
                <path d="M55 64 L60 68 L65 64 L60 62 Z" fill="#FF6B6B"/>
                <line x1="32" y1="60" x2="48" y2="63" stroke="#BF8020" strokeWidth="1.5"/>
                <line x1="32" y1="65" x2="48" y2="65" stroke="#BF8020" strokeWidth="1.5"/>
                <line x1="72" y1="63" x2="88" y2="60" stroke="#BF8020" strokeWidth="1.5"/>
                <line x1="72" y1="65" x2="88" y2="65" stroke="#BF8020" strokeWidth="1.5"/>
                <path d="M52 72 Q60 78 68 72" stroke="#BF8020" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
        ),
        APEL: (
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <ellipse cx="60" cy="72" rx="32" ry="36" fill="#FF6B6B"/>
                <ellipse cx="46" cy="54" rx="16" ry="20" fill="#FF4444" opacity="0.5"/>
                <ellipse cx="74" cy="54" rx="16" ry="20" fill="#FF8888" opacity="0.4"/>
                <ellipse cx="44" cy="44" rx="6" ry="8" fill="#FF8888" opacity="0.5"/>
                <rect x="58" y="28" width="5" height="20" rx="2.5" fill="#6BCB77"/>
                <path d="M63 34 Q76 24 80 36" stroke="#6BCB77" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <ellipse cx="60" cy="100" rx="18" ry="6" fill="#CC4444" opacity="0.3"/>
            </svg>
        ),
        RUMAH: (
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <polygon points="60,18 108,58 12,58" fill="#FF6B6B"/>
                <polygon points="60,18 108,58 12,58" fill="none" stroke="#CC4444" strokeWidth="3"/>
                <rect x="22" y="56" width="76" height="50" rx="4" fill="#FFCC80"/>
                <rect x="44" y="76" width="32" height="30" rx="4" fill="#6BCB77"/>
                <rect x="36" y="66" width="20" height="18" rx="4" fill="#4D96FF"/>
                <rect x="64" y="66" width="20" height="18" rx="4" fill="#4D96FF"/>
                <rect x="36" y="74" width="20" height="2" fill="white" opacity="0.6"/>
                <rect x="44" y="66" width="2" height="18" fill="white" opacity="0.6"/>
                <rect x="64" y="74" width="20" height="2" fill="white" opacity="0.6"/>
                <rect x="72" y="66" width="2" height="18" fill="white" opacity="0.6"/>
                <circle cx="60" cy="91" r="3" fill="#FF6B6B"/>
            </svg>
        ),
        BOLA: (
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="62" r="44" fill="white" stroke="#E5E7EB" strokeWidth="2"/>
                <path d="M60 18 Q76 30 76 62 Q76 94 60 106 Q44 94 44 62 Q44 30 60 18Z" fill="#1A1A2E" opacity="0.08"/>
                <path d="M16 62 Q28 48 60 48 Q92 48 104 62" stroke="#1A1A2E" strokeWidth="2.5" fill="none" opacity="0.15"/>
                <path d="M23 44 Q36 36 60 38 Q84 36 97 44" stroke="#1A1A2E" strokeWidth="2" fill="none" opacity="0.1"/>
                <path d="M23 80 Q36 88 60 86 Q84 88 97 80" stroke="#1A1A2E" strokeWidth="2" fill="none" opacity="0.1"/>
                <circle cx="60" cy="62" r="44" fill="none" stroke="#1A1A2E" strokeWidth="3" opacity="0.15"/>
                <circle cx="60" cy="62" r="36" fill="#FF6B6B" opacity="0.6"/>
                <path d="M42 34 Q52 44 60 48 Q68 44 78 34" fill="#1A1A2E" opacity="0.15"/>
            </svg>
        ),
    };
    return illustrations[word] || (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="44" fill="#4D96FF" opacity="0.2"/>
            <circle cx="60" cy="60" r="30" fill="#4D96FF" opacity="0.3"/>
        </svg>
    );
}

// ── Trophy SVG ──
function TrophySvg() {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <rect x="28" y="60" width="24" height="8" rx="3" fill="#FFD93D"/>
            <rect x="20" y="66" width="40" height="8" rx="4" fill="#FFAB40"/>
            <rect x="32" y="52" width="16" height="14" rx="2" fill="#FFD93D"/>
            <path d="M15 14h50v24a25 25 0 01-50 0V14z" fill="#FFD93D"/>
            <path d="M15 18H8a14 14 0 0014 14" fill="none" stroke="#FFAB40" strokeWidth="4" strokeLinecap="round"/>
            <path d="M65 18h7a14 14 0 01-14 14" fill="none" stroke="#FFAB40" strokeWidth="4" strokeLinecap="round"/>
            <circle cx="40" cy="30" r="10" fill="#FFAB40" opacity="0.5"/>
            <polygon points="40,22 42.4,28.5 49.5,28.5 43.8,32.9 46.2,39.5 40,35.2 33.8,39.5 36.2,32.9 30.5,28.5 37.5,28.5" fill="white"/>
        </svg>
    );
}

// ── Component ──────────────────────────────────────────────────────────────────
export default function LexPlay({ challenges: propChallenges, highScore = 0 }: Props) {
    const challenges = propChallenges?.length > 0 ? propChallenges : DEFAULT_CHALLENGES;
    const [currentLevel, setCurrentLevel] = useState(0);
    const [shuffledLetters, setShuffledLetters] = useState<string[]>([]);
    const [answerSlots, setAnswerSlots] = useState<(string | null)[]>([]);
    const [selectedLetter, setSelectedLetter] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isWrong, setIsWrong] = useState(false);
    const [showHint, setShowHint] = useState(false);
    const [score, setScore] = useState(0);
    const [attempts, setAttempts] = useState(0);
    const [isSavingScore, setIsSavingScore] = useState(false);

    const currentChallenge = challenges[currentLevel];

    useEffect(() => { resetLevel(); }, [currentLevel]);

    const resetLevel = () => {
        const letters = currentChallenge.word.split("");
        setShuffledLetters([...letters].sort(() => Math.random() - 0.5));
        setAnswerSlots(new Array(currentChallenge.word.length).fill(null));
        setSelectedLetter(null); setIsCorrect(false); setShowHint(false);
    };

    const handleLetterClick = (index: number) => { if (shuffledLetters[index] !== "") setSelectedLetter(index); };

    const handleSlotClick = (slotIndex: number) => {
        if (selectedLetter !== null) {
            const newSlots = [...answerSlots];
            if (newSlots[slotIndex] !== null) {
                const ret = newSlots[slotIndex];
                const newShuf = [...shuffledLetters];
                const ei = newShuf.findIndex(l => l === "");
                if (ei !== -1) { newShuf[ei] = ret!; setShuffledLetters(newShuf); }
            }
            newSlots[slotIndex] = shuffledLetters[selectedLetter];
            setAnswerSlots(newSlots);
            const ns = [...shuffledLetters]; ns[selectedLetter] = "";
            setShuffledLetters(ns); setSelectedLetter(null);
            if (!newSlots.includes(null)) checkAnswer(newSlots);
        } else if (answerSlots[slotIndex] !== null) {
            const ret = answerSlots[slotIndex];
            const ns = [...answerSlots]; ns[slotIndex] = null; setAnswerSlots(ns);
            const newShuf = [...shuffledLetters];
            const ei = newShuf.findIndex(l => l === "");
            if (ei !== -1) { newShuf[ei] = ret!; setShuffledLetters(newShuf); }
        }
    };

    const checkAnswer = (slots: (string | null)[]) => {
        const answer = slots.join("");
        const newAttempts = attempts + 1; setAttempts(newAttempts);
        if (answer === currentChallenge.word) {
            setIsCorrect(true); setIsWrong(false);
            setScore(prev => prev + (showHint ? 5 : newAttempts === 1 ? 10 : 7));
        } else {
            setIsWrong(true);
            setTimeout(() => { setIsWrong(false); resetLevel(); }, 1500);
        }
    };

    const handleNextLevel = () => { if (currentLevel < challenges.length - 1) { setCurrentLevel(currentLevel + 1); setAttempts(0); } };

    const handleGameFinished = (finalScore: number) => {
        setIsSavingScore(true);
        router.post("/lexplay/save-score", { score: finalScore, levelReached: currentLevel + 1, attempts },
            { preserveState: true, preserveScroll: true, onFinish: () => setIsSavingScore(false) });
    };

    const handleRestartGame = () => { setCurrentLevel(0); setScore(0); setAttempts(0); };

    const handlePlaySound = () => {
        if ("speechSynthesis" in window) {
            const u = new SpeechSynthesisUtterance(currentChallenge.word);
            u.lang = "id-ID"; u.rate = 0.8; window.speechSynthesis.speak(u);
        }
    };

    const pointsEarned = showHint ? 5 : attempts === 1 ? 10 : 7;
    const starsEarned = Math.max(0, 3 - (attempts - 1));
    const isLastLevel = currentLevel === challenges.length - 1;

    const btn = (bg: string, shadow: string, color = "white") => ({
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
        padding: "14px 28px", background: bg, color, fontWeight: 900, fontSize: 15,
        borderRadius: 999, border: "none", cursor: "pointer",
        boxShadow: `0 5px 0 ${shadow}`, fontFamily: F,
    } as React.CSSProperties);

    return (
        <AppLayout>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&display=swap');
                * { box-sizing: border-box; }
                @keyframes wobble { 0%,100%{transform:rotate(0)} 25%{transform:rotate(-6deg)} 75%{transform:rotate(6deg)} }
                @keyframes pop { 0%{transform:scale(0.8)} 60%{transform:scale(1.12)} 100%{transform:scale(1)} }
                @keyframes float { 0%{transform:translateY(0)} 100%{transform:translateY(-10px)} }
            `}</style>
            <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #FFF9F0 0%, #F0FFF4 50%, white 100%)", padding: "56px 20px 48px", fontFamily: F }}>
                <div style={{ maxWidth: 960, margin: "0 auto" }}>

                    {/* Header */}
                    <div style={{ textAlign: "center", marginBottom: 40 }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#FFD93D", borderRadius: 999, padding: "7px 22px", marginBottom: 14, boxShadow: "0 4px 0 #CC9900" }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5S14.67 12 15.5 12s1.5.67 1.5 1.5S16.33 15 15.5 15zm3-3c-.83 0-1.5-.67-1.5-1.5S17.67 9 18.5 9s1.5.67 1.5 1.5S19.33 12 18.5 12z" fill="#1A1A2E"/></svg>
                            <span style={{ fontWeight: 900, fontSize: 14, color: "#1A1A2E" }}>LexPlay — Game Susun Huruf</span>
                        </div>
                        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, color: "#1A1A2E", margin: "0 0 10px", lineHeight: 1.2 }}>Susun Katanya!</h1>
                        <p style={{ fontSize: 16, color: "#666", fontWeight: 600 }}>Atur huruf yang berantakan jadi kata yang benar!</p>
                    </div>

                    {/* Score Board */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 28 }}>
                        {[
                            { value: score, label: "Poin", color: "#4D96FF", shadow: "#1A5FCC", bg: "#EFF6FF", border: "#BFDBFE" },
                            { value: `${currentLevel + 1}/${challenges.length}`, label: "Level", color: "#FFD93D", shadow: "#CC9900", bg: "#FFFDE7", border: "#FFE566" },
                            { value: highScore, label: "Rekor", color: "#6BCB77", shadow: "#338844", bg: "#F0FFF4", border: "#A8E6B0" },
                        ].map(s => (
                            <div key={s.label} style={{ background: s.bg, borderRadius: 24, border: `3px solid ${s.border}`, boxShadow: `0 6px 0 ${s.shadow}`, padding: "20px 12px", textAlign: "center" }}>
                                <div style={{ fontSize: 36, fontWeight: 900, color: s.color, fontFamily: "monospace", lineHeight: 1 }}>{s.value}</div>
                                <div style={{ fontSize: 13, color: "#666", fontWeight: 700, marginTop: 6 }}>{s.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Game Area */}
                    <div style={{ background: "white", borderRadius: 32, border: "3px solid #FFE566", boxShadow: "0 10px 0 #FFD700, 0 14px 32px rgba(0,0,0,0.08)", padding: "36px 28px" }}>
                        {!isCorrect ? (
                            <>
                                {/* Illustration */}
                                <div style={{ textAlign: "center", marginBottom: 28 }}>
                                    <div style={{ display: "inline-block", padding: 24, background: "linear-gradient(135deg, #FFF9F0 0%, #F0F9FF 100%)", borderRadius: 32, marginBottom: 16, border: "3px solid #FFE566", boxShadow: "0 6px 0 #FFD700" }}>
                                        <div style={{ animation: "float 3s ease-in-out infinite alternate" }}>
                                            <WordIllustration word={currentChallenge.word}/>
                                        </div>
                                    </div>
                                    <br/>
                                    <button onClick={handlePlaySound} style={{ ...btn("#4D96FF30", "#1A5FCC20", "#4D96FF"), padding: "10px 22px", fontSize: 14 }}>
                                        <Volume2 size={18}/> Dengarkan Kata
                                    </button>
                                </div>

                                {/* Answer Slots */}
                                <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 32, flexWrap: "wrap" }}>
                                    {answerSlots.map((letter, i) => (
                                        <button key={i} onClick={() => handleSlotClick(i)} style={{
                                            width: 64, height: 72, borderRadius: 20, fontWeight: 900, fontSize: 28, border: "none",
                                            cursor: "pointer", transition: "all 0.15s",
                                            background: letter ? (isWrong ? "#FF6B6B" : "#4D96FF") : "transparent",
                                            color: letter ? "white" : "transparent",
                                            boxShadow: letter ? (isWrong ? "0 5px 0 #CC4444" : "0 5px 0 #1A5FCC") : "none",
                                            borderBottom: letter ? "none" : "4px solid #FFD93D",
                                            animation: letter && !isWrong ? "pop 0.2s ease" : isWrong ? "wobble 0.4s ease" : "none",
                                        }}>
                                            {letter}
                                        </button>
                                    ))}
                                </div>

                                {isWrong && (
                                    <div style={{ textAlign: "center", marginBottom: 16 }}>
                                        <div style={{ display: "inline-block", background: "#FFF0F0", border: "3px solid #FFAAAA", borderRadius: 999, padding: "8px 24px", color: "#CC4444", fontWeight: 900, boxShadow: "0 3px 0 #CC4444" }}>
                                            Hampir benar! Coba lagi ya
                                        </div>
                                    </div>
                                )}

                                {/* Shuffled Letters */}
                                <div style={{ marginBottom: 24 }}>
                                    <p style={{ textAlign: "center", fontWeight: 800, color: "#666", fontSize: 14, marginBottom: 14 }}>Pilih Huruf:</p>
                                    <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
                                        {shuffledLetters.map((letter, i) => (
                                            <button key={i} onClick={() => handleLetterClick(i)} disabled={letter === ""} style={{
                                                width: 64, height: 72, borderRadius: 20, fontWeight: 900, fontSize: 28, border: "none",
                                                cursor: letter === "" ? "not-allowed" : "pointer", transition: "all 0.15s",
                                                background: letter === "" ? "#F5F5F5" : selectedLetter === i ? "#FFD93D" : "white",
                                                color: letter === "" ? "#ddd" : "#1A1A2E",
                                                boxShadow: letter === "" ? "none" : selectedLetter === i ? "0 5px 0 #CC9900" : "0 5px 0 #E5E7EB",
                                                transform: selectedLetter === i ? "translateY(-3px) scale(1.08)" : "none",
                                                border: `3px solid ${letter === "" ? "#F0F0F0" : selectedLetter === i ? "#FFD93D" : "#E5E7EB"}`,
                                            } as React.CSSProperties}>
                                                {letter}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Hint & Reset */}
                                <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
                                    {showHint ? (
                                        <div style={{ background: "#FFFDE7", border: "3px solid #FFE566", borderRadius: 20, padding: "12px 24px", boxShadow: "0 4px 0 #CC9900" }}>
                                            <p style={{ color: "#CC9900", fontWeight: 800, fontSize: 14, margin: 0 }}>
                                                Petunjuk: {currentChallenge.hint}
                                            </p>
                                        </div>
                                    ) : (
                                        <button onClick={() => setShowHint(true)} style={{ ...btn("#F5F5F5", "#E5E7EB", "#555"), fontSize: 14 }}>
                                            <HelpCircle size={16}/> Tampilkan Petunjuk (-5 poin)
                                        </button>
                                    )}
                                    <button onClick={resetLevel} style={{ ...btn("#FFF0F0", "#FFAAAA", "#FF6B6B"), fontSize: 14, padding: "14px 20px" }}>
                                        <RotateCcw size={16}/> Ulangi
                                    </button>
                                </div>
                            </>
                        ) : (
                            // ── Success State ──
                            <div style={{ textAlign: "center", padding: "24px 0" }}>
                                <div style={{ display: "inline-block", animation: "float 2s ease-in-out infinite alternate", marginBottom: 16 }}>
                                    <TrophySvg/>
                                </div>
                                <h2 style={{ fontSize: 40, fontWeight: 900, color: "#1A1A2E", margin: "0 0 8px" }}>Hebat!</h2>
                                <p style={{ fontSize: 20, color: "#555", fontWeight: 700, marginBottom: 24 }}>
                                    Kamu berhasil menyusun kata: <strong style={{ color: "#4D96FF" }}>{currentChallenge.word}</strong>
                                </p>

                                <div style={{ display: "inline-block", background: "linear-gradient(135deg, #FFD93D 0%, #FFAB40 100%)", borderRadius: 28, padding: "20px 32px", marginBottom: 28, boxShadow: "0 8px 0 #CC9900" }}>
                                    <div style={{ fontSize: 44, fontWeight: 900, color: "#1A1A2E", fontFamily: "monospace" }}>+{pointsEarned} Poin</div>
                                    <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 10 }}>
                                        {Array.from({ length: 3 }).map((_, i) => (
                                            <Star key={i} size={28} style={{ color: i < starsEarned ? "white" : "rgba(255,255,255,0.3)", fill: i < starsEarned ? "white" : "none" }}/>
                                        ))}
                                    </div>
                                    <div style={{ fontSize: 15, color: "#1A1A2E", fontWeight: 800, marginTop: 8 }}>{starsEarned} bintang!</div>
                                </div>

                                {!isLastLevel ? (
                                    <div>
                                        <button onClick={handleNextLevel} style={{ ...btn("#6BCB77", "#338844"), fontSize: 17, padding: "16px 40px" }}>
                                            Level Selanjutnya <ArrowRight size={22}/>
                                        </button>
                                    </div>
                                ) : (
                                    <div>
                                        <div style={{ background: "linear-gradient(135deg, #4D96FF 0%, #1A5FCC 100%)", borderRadius: 28, padding: "28px", display: "inline-block", marginBottom: 24, boxShadow: "0 8px 0 #0A3A8A" }}>
                                            <div style={{ fontSize: 56, fontWeight: 900, color: "white", fontFamily: "monospace" }}>{score}</div>
                                            <div style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", fontWeight: 700 }}>Total Poin</div>
                                            {score > highScore && (
                                                <div style={{ marginTop: 10, background: "rgba(255,255,255,0.2)", borderRadius: 999, padding: "6px 20px", fontSize: 14, color: "white", fontWeight: 800 }}>
                                                    Skor Baru Terbaik!
                                                </div>
                                            )}
                                        </div>
                                        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                                            <button onClick={() => handleGameFinished(score)} disabled={isSavingScore}
                                                style={{ ...btn("#1A1A2E", "#0A0A18"), fontSize: 15 }}>
                                                {isSavingScore ? "Menyimpan..." : "Simpan Skor"}
                                            </button>
                                            <button onClick={handleRestartGame} style={{ ...btn("#FF6B6B", "#CC4444"), fontSize: 15 }}>
                                                <RotateCcw size={18}/> Main Lagi
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Instructions */}
                    <div style={{ marginTop: 32, background: "white", borderRadius: 28, border: "3px solid #A8E6B0", boxShadow: "0 6px 0 #338844", padding: "28px 24px" }}>
                        <h3 style={{ fontSize: 20, fontWeight: 900, color: "#1A1A2E", marginBottom: 20, textAlign: "center" }}>Cara Bermain</h3>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
                            {[
                                { color: "#FF6B6B", shadow: "#CC4444", num: "1", text: "Lihat gambar dan dengarkan kata" },
                                { color: "#FFD93D", shadow: "#CC9900", num: "2", text: "Pilih huruf dan klik kotak jawaban" },
                                { color: "#6BCB77", shadow: "#338844", num: "3", text: "Susun semua huruf dengan benar!" },
                            ].map(s => (
                                <div key={s.num} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: s.color, boxShadow: `0 4px 0 ${s.shadow}`, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900, fontSize: 22, flexShrink: 0 }}>{s.num}</div>
                                    <p style={{ fontSize: 14, color: "#555", fontWeight: 700, lineHeight: 1.6, paddingTop: 8 }}>{s.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Parent Tips */}
                    <div style={{ marginTop: 20, background: "#FFFDE7", borderRadius: 28, border: "3px solid #FFE566", boxShadow: "0 6px 0 #CC9900", padding: "24px" }}>
                        <h4 style={{ fontWeight: 900, fontSize: 17, color: "#1A1A2E", marginBottom: 14 }}>Tips untuk Orang Tua</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            {["Biarkan anak mencoba sendiri sebelum memberikan bantuan",
                              "Puji usaha anak, bukan hanya hasil akhir",
                              "Batasi waktu bermain 15–20 menit per sesi",
                              "Diskusikan makna kata setelah level selesai"].map((tip, i) => (
                                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFD93D", marginTop: 6, flexShrink: 0 }}/>
                                    <span style={{ fontSize: 14, color: "#555", fontWeight: 700, lineHeight: 1.6 }}>{tip}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}