// resources/js/Pages/LexPlay.tsx
//
// PERUBAHAN DARI VERSI LAMA:
// 1. Export → `export default function` (wajib Inertia)
// 2. Dibungkus AppLayout
// 3. `challenges` bisa datang dari props controller (fallback ke hardcoded)
// 4. `highScore` dari props (riwayat skor user dari DB)
// 5. handleNextLevel → simpan skor ke backend saat game selesai
// 6. handlePlaySound → pakai Web Speech API (ganti alert)
// 7. "Main Lagi" → reset state lokal, tidak perlu request ke server
//
// State game (currentLevel, score, dll) TETAP di frontend —
// karena game berjalan real-time dan tidak cocok untuk round-trip server.

import { useState, useEffect } from "react";
import { router } from "@inertiajs/react"; // ← BARU
import {
    Gamepad2,
    Trophy,
    RotateCcw,
    ArrowRight,
    Star,
    Volume2,
    HelpCircle,
} from "lucide-react";
import AppLayout from "@/Layouts/AppLayout"; // ← BARU

// ─────────────────────────────────────────
// Types
// ─────────────────────────────────────────

interface WordChallenge {
    word: string;
    image: string;
    hint: string;
}

// Props yang dikirim dari LexPlayController@index
interface Props {
    challenges: WordChallenge[]; // dari controller (bisa dari DB / hardcoded di PHP)
    highScore: number; // skor tertinggi user dari DB (0 kalau belum login)
}

// ─────────────────────────────────────────
// Fallback challenges (kalau props kosong)
// ─────────────────────────────────────────

const DEFAULT_CHALLENGES: WordChallenge[] = [
    {
        word: "BUKU",
        image: "📚",
        hint: "Kamu membaca ini setiap hari di sekolah",
    },
    {
        word: "KUCING",
        image: "🐱",
        hint: "Hewan berkaki empat yang suka minum susu",
    },
    { word: "APEL", image: "🍎", hint: "Buah berwarna merah yang manis" },
    {
        word: "RUMAH",
        image: "🏠",
        hint: "Tempat kamu tinggal bersama keluarga",
    },
    {
        word: "BOLA",
        image: "⚽",
        hint: "Kamu menendang ini saat bermain sepak bola",
    },
];

// ─────────────────────────────────────────
// Component
// ─────────────────────────────────────────

export default function LexPlay({
    challenges: propChallenges,
    highScore = 0,
}: Props) {
    // Gunakan challenges dari controller, fallback ke DEFAULT kalau kosong
    const challenges =
        propChallenges?.length > 0 ? propChallenges : DEFAULT_CHALLENGES;

    // ── Game State (tetap di frontend — real-time) ──
    const [currentLevel, setCurrentLevel] = useState(0);
    const [shuffledLetters, setShuffledLetters] = useState<string[]>([]);
    const [answerSlots, setAnswerSlots] = useState<(string | null)[]>([]);
    const [selectedLetter, setSelectedLetter] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const [showHint, setShowHint] = useState(false);
    const [score, setScore] = useState(0);
    const [attempts, setAttempts] = useState(0);
    const [isSavingScore, setIsSavingScore] = useState(false); // ← BARU: loading state saat simpan skor

    const currentChallenge = challenges[currentLevel];

    useEffect(() => {
        resetLevel();
    }, [currentLevel]);

    // ── Handlers ─────────────────────────────────

    const resetLevel = () => {
        const word = currentChallenge.word;
        const letters = word.split("");
        const shuffled = [...letters].sort(() => Math.random() - 0.5);
        setShuffledLetters(shuffled);
        setAnswerSlots(new Array(word.length).fill(null));
        setSelectedLetter(null);
        setIsCorrect(false);
        setShowHint(false);
    };

    const handleLetterClick = (index: number) => {
        if (shuffledLetters[index] !== "") {
            setSelectedLetter(index);
        }
    };

    const handleSlotClick = (slotIndex: number) => {
        if (selectedLetter !== null) {
            const newAnswerSlots = [...answerSlots];

            // Kalau slot sudah ada huruf, kembalikan ke shuffled
            if (newAnswerSlots[slotIndex] !== null) {
                const returnedLetter = newAnswerSlots[slotIndex];
                const newShuffledLetters = [...shuffledLetters];
                const emptyIndex = newShuffledLetters.findIndex(
                    (l) => l === "",
                );
                if (emptyIndex !== -1) {
                    newShuffledLetters[emptyIndex] = returnedLetter!;
                    setShuffledLetters(newShuffledLetters);
                }
            }

            newAnswerSlots[slotIndex] = shuffledLetters[selectedLetter];
            setAnswerSlots(newAnswerSlots);

            const newShuffledLetters = [...shuffledLetters];
            newShuffledLetters[selectedLetter] = "";
            setShuffledLetters(newShuffledLetters);
            setSelectedLetter(null);

            if (!newAnswerSlots.includes(null)) {
                checkAnswer(newAnswerSlots);
            }
        } else if (answerSlots[slotIndex] !== null) {
            // Kembalikan huruf dari slot ke shuffled
            const returnedLetter = answerSlots[slotIndex];
            const newAnswerSlots = [...answerSlots];
            newAnswerSlots[slotIndex] = null;
            setAnswerSlots(newAnswerSlots);

            const newShuffledLetters = [...shuffledLetters];
            const emptyIndex = newShuffledLetters.findIndex((l) => l === "");
            if (emptyIndex !== -1) {
                newShuffledLetters[emptyIndex] = returnedLetter!;
                setShuffledLetters(newShuffledLetters);
            }
        }
    };

    const checkAnswer = (slots: (string | null)[]) => {
        const answer = slots.join("");
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);

        if (answer === currentChallenge.word) {
            setIsCorrect(true);
            const pointsEarned = showHint ? 5 : newAttempts === 1 ? 10 : 7;
            setScore((prev) => prev + pointsEarned);
        }
    };

    const handleNextLevel = () => {
        if (currentLevel < challenges.length - 1) {
            setCurrentLevel(currentLevel + 1);
            setAttempts(0);
        }
    };

    // ── BARU: Simpan skor ke backend saat game selesai ──
    const handleGameFinished = (finalScore: number) => {
        setIsSavingScore(true);
        router.post(
            "/lexplay/save-score",
            { score: finalScore },
            {
                preserveState: true, // jangan reload state React
                preserveScroll: true,
                onFinish: () => setIsSavingScore(false),
            },
        );
    };

    // ── BARU: Main ulang dari awal ──
    const handleRestartGame = () => {
        setCurrentLevel(0);
        setScore(0);
        setAttempts(0);
        // resetLevel dipanggil otomatis oleh useEffect saat currentLevel berubah ke 0
    };

    // ── BARU: Web Speech API menggantikan alert() ──
    const handlePlaySound = () => {
        if ("speechSynthesis" in window) {
            const utterance = new SpeechSynthesisUtterance(
                currentChallenge.word,
            );
            utterance.lang = "id-ID"; // Bahasa Indonesia
            utterance.rate = 0.8; // sedikit lambat, cocok untuk anak
            window.speechSynthesis.speak(utterance);
        } else {
            // Fallback kalau browser tidak support
            alert(`Kata: ${currentChallenge.word}`);
        }
    };

    // Hitung poin yang didapat di level ini
    const pointsEarned = showHint ? 5 : attempts === 1 ? 10 : 7;
    const starsEarned = Math.max(0, 3 - (attempts - 1));
    const isLastLevel = currentLevel === challenges.length - 1;

    // ─────────────────────────────────────────
    // JSX — sama persis dengan versi lama
    // kecuali bagian yang diberi komentar ← UBAH
    // ─────────────────────────────────────────

    return (
        <AppLayout>
            {" "}
            {/* ← BARU */}
            <div className="min-h-screen bg-gradient-to-b from-[#F7F5F2] to-white py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#F5A623]/10 rounded-2xl mb-6">
                            <Gamepad2 className="text-[#F5A623]" size={28} />
                            <span className="font-bold text-xl text-[#F5A623]">
                                LexPlay
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-[#1A2E4A] mb-6">
                            Game Susun Huruf
                        </h1>
                        <p className="text-xl text-[#2D3748] max-w-3xl mx-auto">
                            Susun huruf-huruf yang acak menjadi kata yang benar!
                        </p>
                    </div>

                    {/* Score Board */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                        <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                            <div className="text-4xl font-bold font-mono text-[#3BBFAD] mb-2">
                                {score}
                            </div>
                            <div className="text-sm text-[#2D3748]">Poin</div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                            <div className="text-4xl font-bold font-mono text-[#F5A623] mb-2">
                                {currentLevel + 1}/{challenges.length}
                            </div>
                            <div className="text-sm text-[#2D3748]">Level</div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                            {/* ← BARU: tampilkan highScore dari backend */}
                            <div className="text-4xl font-bold font-mono text-[#1A2E4A] mb-2">
                                {highScore}
                            </div>
                            <div className="text-sm text-[#2D3748]">
                                Skor Terbaik
                            </div>
                        </div>
                    </div>

                    {/* Game Area */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
                        {!isCorrect ? (
                            <>
                                {/* Challenge Image & Sound */}
                                <div className="text-center mb-8">
                                    <div className="inline-block p-8 bg-gradient-to-br from-[#3BBFAD]/10 to-[#F5A623]/10 rounded-3xl mb-6">
                                        <div className="text-9xl">
                                            {currentChallenge.image}
                                        </div>
                                    </div>
                                    <button
                                        onClick={handlePlaySound} // ← UBAH: pakai Web Speech API
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#3BBFAD]/10 text-[#3BBFAD] rounded-2xl font-bold hover:bg-[#3BBFAD]/20 transition-all"
                                    >
                                        <Volume2 size={20} />
                                        Dengarkan Kata
                                    </button>
                                </div>

                                {/* Answer Slots */}
                                <div className="flex justify-center gap-3 mb-12">
                                    {answerSlots.map((letter, index) => (
                                        <button
                                            key={index}
                                            onClick={() =>
                                                handleSlotClick(index)
                                            }
                                            className={`w-16 h-20 md:w-20 md:h-24 rounded-2xl border-4 font-bold text-3xl transition-all ${
                                                letter
                                                    ? "bg-[#3BBFAD] border-[#3BBFAD] text-white shadow-lg"
                                                    : "bg-white border-[#3BBFAD]/30 border-dashed hover:border-[#3BBFAD] hover:bg-[#3BBFAD]/5"
                                            }`}
                                        >
                                            {letter || ""}
                                        </button>
                                    ))}
                                </div>

                                {/* Shuffled Letters */}
                                <div className="mb-8">
                                    <h3 className="text-center text-lg font-bold text-[#1A2E4A] mb-4">
                                        Pilih Huruf:
                                    </h3>
                                    <div className="flex flex-wrap justify-center gap-3">
                                        {shuffledLetters.map(
                                            (letter, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() =>
                                                        handleLetterClick(index)
                                                    }
                                                    disabled={letter === ""}
                                                    className={`w-16 h-20 md:w-20 md:h-24 rounded-2xl font-bold text-3xl transition-all shadow-lg ${
                                                        letter === ""
                                                            ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                                                            : selectedLetter ===
                                                                index
                                                              ? "bg-[#F5A623] text-white scale-110 border-4 border-[#F5A623]"
                                                              : "bg-white text-[#1A2E4A] border-2 border-gray-200 hover:border-[#F5A623] hover:scale-105"
                                                    }`}
                                                >
                                                    {letter}
                                                </button>
                                            ),
                                        )}
                                    </div>
                                </div>

                                {/* Hint */}
                                <div className="text-center">
                                    {showHint ? (
                                        <div className="inline-block px-6 py-3 bg-[#F5A623]/10 rounded-2xl">
                                            <p className="text-[#F5A623] font-semibold">
                                                💡 Petunjuk:{" "}
                                                {currentChallenge.hint}
                                            </p>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => setShowHint(true)}
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-[#2D3748] rounded-2xl font-semibold hover:bg-gray-200 transition-all"
                                        >
                                            <HelpCircle size={20} />
                                            Tampilkan Petunjuk (-5 poin)
                                        </button>
                                    )}
                                </div>

                                {/* Reset Button */}
                                <div className="text-center mt-6">
                                    <button
                                        onClick={resetLevel}
                                        className="inline-flex items-center gap-2 px-6 py-3 text-[#2D3748] hover:text-[#3BBFAD] transition-all"
                                    >
                                        <RotateCcw size={18} />
                                        Ulangi Level
                                    </button>
                                </div>
                            </>
                        ) : (
                            // ── Success State ──
                            <div className="text-center py-12">
                                <div className="mb-8">
                                    <div className="inline-block p-6 bg-[#6FCF97]/20 rounded-full mb-6">
                                        <Trophy
                                            className="text-[#6FCF97]"
                                            size={80}
                                        />
                                    </div>
                                    <h2 className="text-5xl font-bold text-[#1A2E4A] mb-4">
                                        Hebat! 🎉
                                    </h2>
                                    <p className="text-2xl text-[#2D3748] mb-8">
                                        Kamu berhasil menyusun kata:{" "}
                                        <strong className="text-[#3BBFAD]">
                                            {currentChallenge.word}
                                        </strong>
                                    </p>

                                    <div className="inline-block px-8 py-4 bg-gradient-to-br from-[#F5A623] to-[#E09420] text-white rounded-2xl mb-8">
                                        <div className="text-4xl font-bold font-mono mb-2">
                                            +{pointsEarned} Poin{" "}
                                            {/* ← UBAH: pakai variabel */}
                                        </div>
                                        <div className="flex items-center justify-center gap-1 mt-2">
                                            {Array.from({ length: 3 }).map(
                                                (_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={24}
                                                        className={
                                                            i < starsEarned
                                                                ? "fill-white text-white"
                                                                : "text-white/40"
                                                        }
                                                    />
                                                ),
                                            )}
                                        </div>
                                        <div className="text-sm mt-1">
                                            {starsEarned} bintang!{" "}
                                            {/* ← UBAH: pakai variabel */}
                                        </div>
                                    </div>
                                </div>

                                {!isLastLevel ? (
                                    <button
                                        onClick={handleNextLevel}
                                        className="inline-flex items-center gap-2 px-10 py-5 bg-[#3BBFAD] text-white rounded-2xl font-bold text-lg hover:bg-[#2A9989] transition-all shadow-2xl hover:scale-105"
                                    >
                                        Level Selanjutnya
                                        <ArrowRight size={24} />
                                    </button>
                                ) : (
                                    // ── Game Over / All Levels Complete ──
                                    <div>
                                        <p className="text-2xl font-bold text-[#1A2E4A] mb-6">
                                            🏆 Selamat! Kamu telah menyelesaikan
                                            semua level!
                                        </p>
                                        <div className="bg-gradient-to-br from-[#3BBFAD] to-[#2A9989] text-white rounded-3xl p-8 inline-block mb-8">
                                            <div className="text-6xl font-bold font-mono mb-2">
                                                {score}
                                            </div>
                                            <div className="text-xl">
                                                Total Poin
                                            </div>
                                            {score > highScore && (
                                                <div className="mt-2 text-sm bg-white/20 rounded-xl px-4 py-1">
                                                    🎊 Skor Baru Terbaik!
                                                </div>
                                            )}
                                        </div>

                                        {/* ← BARU: tombol simpan skor + main lagi */}
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <button
                                                onClick={() =>
                                                    handleGameFinished(score)
                                                }
                                                disabled={isSavingScore}
                                                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#1A2E4A] text-white rounded-2xl font-bold text-lg hover:bg-[#1A2E4A]/80 transition-all shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                                            >
                                                {isSavingScore
                                                    ? "Menyimpan..."
                                                    : "💾 Simpan Skor"}
                                            </button>
                                            <button
                                                onClick={handleRestartGame} // ← UBAH: pakai handler baru
                                                className="inline-flex items-center gap-2 px-10 py-5 bg-[#F5A623] text-white rounded-2xl font-bold text-lg hover:bg-[#E09420] transition-all shadow-2xl"
                                            >
                                                <RotateCcw size={24} />
                                                Main Lagi
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Instructions */}
                    <div className="mt-12 bg-white rounded-3xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-[#1A2E4A] mb-6 text-center">
                            Cara Bermain
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#3BBFAD]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl font-bold text-[#3BBFAD]">
                                        1
                                    </span>
                                </div>
                                <p className="text-[#2D3748]">
                                    Lihat gambar dan dengarkan kata
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#F5A623]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl font-bold text-[#F5A623]">
                                        2
                                    </span>
                                </div>
                                <p className="text-[#2D3748]">
                                    Pilih huruf dan letakkan di kotak jawaban
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#1A2E4A]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl font-bold text-[#1A2E4A]">
                                        3
                                    </span>
                                </div>
                                <p className="text-[#2D3748]">
                                    Susun semua huruf dengan benar untuk menang!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Tips untuk Orang Tua */}
                    <div className="mt-8 bg-gradient-to-br from-[#3BBFAD]/10 to-[#F5A623]/10 rounded-3xl p-8 border border-[#3BBFAD]/20">
                        <h4 className="font-bold text-xl text-[#1A2E4A] mb-4">
                            💡 Tips untuk Orang Tua
                        </h4>
                        <ul className="space-y-3 text-[#2D3748]">
                            <li className="flex items-start gap-3">
                                <span className="text-[#3BBFAD] text-xl">
                                    •
                                </span>
                                <span>
                                    Biarkan anak mencoba sendiri terlebih dahulu
                                    sebelum memberikan bantuan
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#3BBFAD] text-xl">
                                    •
                                </span>
                                <span>
                                    Puji usaha anak, bukan hanya hasil akhir
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#3BBFAD] text-xl">
                                    •
                                </span>
                                <span>
                                    Batasi waktu bermain 15–20 menit per sesi
                                    untuk menghindari kelelahan
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#3BBFAD] text-xl">
                                    •
                                </span>
                                <span>
                                    Diskusikan makna kata setelah level selesai
                                    untuk memperkaya kosakata
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
