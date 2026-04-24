import { useState } from "react";
import { Head, Link, router, useForm } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import {
    Brain,
    Gamepad2,
    BarChart3,
    Plus,
    Trash2,
    Baby,
    Star,
    Clock,
    ChevronRight,
} from "lucide-react";

interface Child {
    id: number;
    name: string;
    age: number | null;
    avatar: string;
    avgScore: number;
    totalScans: number;
    totalPlays: number;
    highScore: number;
    recentScans: {
        id: number;
        overallScore: number;
        indicators: string[];
        date: string;
    }[];
    recentPlays: { score: number; levelReached: number; date: string }[];
}
interface Props {
    user: { name: string };
    children: Child[];
}

const AVATARS = ["🧒", "👦", "👧", "🧑", "🐣", "🦁", "🐯", "🐻", "🐸", "🦊"];

export default function Dashboard({ user, children }: Props) {
    const [showForm, setShowForm] = useState(false);
    const [selected, setSelected] = useState<Child | null>(children[0] ?? null);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        age: "",
        avatar: "🧒",
    });

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("children.store"), {
            onSuccess: () => {
                reset();
                setShowForm(false);
            },
        });
    };

    const del = (c: Child) => {
        if (confirm(`Hapus profil ${c.name}?`))
            router.delete(route("children.destroy", c.id));
    };

    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="min-h-screen bg-[#F7F5F2] py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-[#1A2E4A]">
                                Halo, {user.name}! 👋
                            </h1>
                            <p className="text-[#2D3748] mt-1">
                                Mode Orang Tua — pantau perkembangan anak dari
                                sini
                            </p>
                        </div>
                        <span className="px-4 py-2 bg-[#3BBFAD]/10 text-[#3BBFAD] rounded-2xl font-semibold text-sm">
                            Mode Orang Tua
                        </span>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Sidebar Anak */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="text-lg font-bold text-[#1A2E4A]">
                                    Profil Anak
                                </h2>
                                <button
                                    onClick={() => setShowForm(!showForm)}
                                    className="flex items-center gap-1 px-3 py-1.5 bg-[#3BBFAD] text-white rounded-xl text-sm font-semibold hover:bg-[#2A9989] transition-all"
                                >
                                    <Plus size={14} /> Tambah
                                </button>
                            </div>

                            {showForm && (
                                <form
                                    onSubmit={handleAdd}
                                    className="bg-white rounded-2xl p-5 shadow-lg border border-[#3BBFAD]/20 space-y-3"
                                >
                                    <p className="font-bold text-[#1A2E4A] text-sm">
                                        Profil Anak Baru
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {AVATARS.map((av) => (
                                            <button
                                                key={av}
                                                type="button"
                                                onClick={() =>
                                                    setData("avatar", av)
                                                }
                                                className={`text-2xl p-1.5 rounded-xl transition-all ${data.avatar === av ? "bg-[#3BBFAD]/20 ring-2 ring-[#3BBFAD]" : "hover:bg-gray-100"}`}
                                            >
                                                {av}
                                            </button>
                                        ))}
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Nama anak *"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3BBFAD]"
                                        required
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-xs">
                                            {errors.name}
                                        </p>
                                    )}
                                    <input
                                        type="number"
                                        placeholder="Usia (tahun)"
                                        value={data.age}
                                        onChange={(e) =>
                                            setData("age", e.target.value)
                                        }
                                        min={3}
                                        max={18}
                                        className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3BBFAD]"
                                    />
                                    <div className="flex gap-2">
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="flex-1 py-2 bg-[#3BBFAD] text-white rounded-xl text-sm font-bold hover:bg-[#2A9989] disabled:opacity-50 transition-all"
                                        >
                                            {processing
                                                ? "Menyimpan..."
                                                : "Simpan"}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowForm(false)}
                                            className="flex-1 py-2 bg-gray-100 text-gray-600 rounded-xl text-sm font-bold hover:bg-gray-200 transition-all"
                                        >
                                            Batal
                                        </button>
                                    </div>
                                </form>
                            )}

                            {children.length === 0 && !showForm ? (
                                <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
                                    <div className="text-5xl mb-3">👶</div>
                                    <p className="text-[#2D3748] text-sm">
                                        Belum ada profil anak.
                                    </p>
                                    <p className="text-xs text-[#2D3748] mt-1">
                                        Klik Tambah untuk membuat profil.
                                    </p>
                                </div>
                            ) : (
                                children.map((child) => (
                                    <div
                                        key={child.id}
                                        onClick={() => setSelected(child)}
                                        className={`bg-white rounded-2xl p-4 shadow-sm cursor-pointer transition-all border-2 ${selected?.id === child.id ? "border-[#3BBFAD] shadow-lg" : "border-transparent hover:border-[#3BBFAD]/30"}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="text-3xl">
                                                {child.avatar}
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-bold text-[#1A2E4A]">
                                                    {child.name}
                                                </p>
                                                <p className="text-xs text-[#2D3748]">
                                                    {child.age
                                                        ? `${child.age} tahun`
                                                        : "Usia belum diisi"}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-xl font-bold text-[#3BBFAD]">
                                                    {child.avgScore}%
                                                </div>
                                                <div className="text-xs text-[#2D3748]">
                                                    Rata-rata
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 mt-3">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    router.post(
                                                        route(
                                                            "children.switch",
                                                            child.id,
                                                        ),
                                                    );
                                                }}
                                                className="flex-1 flex items-center justify-center gap-1 py-1.5 bg-[#F5A623]/10 text-[#F5A623] rounded-xl text-xs font-bold hover:bg-[#F5A623]/20 transition-all"
                                            >
                                                <Baby size={12} /> Mode Anak
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    del(child);
                                                }}
                                                className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-6">
                            {selected ? (
                                <>
                                    {/* Stats */}
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                        {[
                                            {
                                                label: "Akurasi Rata-rata",
                                                value: `${selected.avgScore}%`,
                                                icon: BarChart3,
                                                color: "#3BBFAD",
                                            },
                                            {
                                                label: "Total Scan",
                                                value: selected.totalScans,
                                                icon: Brain,
                                                color: "#1A2E4A",
                                            },
                                            {
                                                label: "Sesi Bermain",
                                                value: selected.totalPlays,
                                                icon: Gamepad2,
                                                color: "#F5A623",
                                            },
                                            {
                                                label: "Skor Tertinggi",
                                                value: selected.highScore,
                                                icon: Star,
                                                color: "#6FCF97",
                                            },
                                        ].map((s) => (
                                            <div
                                                key={s.label}
                                                className="bg-white rounded-2xl p-4 shadow-sm"
                                            >
                                                <div
                                                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                                                    style={{
                                                        background:
                                                            s.color + "20",
                                                    }}
                                                >
                                                    <s.icon
                                                        size={20}
                                                        style={{
                                                            color: s.color,
                                                        }}
                                                    />
                                                </div>
                                                <div className="text-2xl font-bold text-[#1A2E4A]">
                                                    {s.value}
                                                </div>
                                                <div className="text-xs text-[#2D3748] mt-1">
                                                    {s.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Riwayat Scan */}
                                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                                        <div className="flex items-center justify-between mb-5">
                                            <h3 className="font-bold text-lg text-[#1A2E4A] flex items-center gap-2">
                                                <Brain
                                                    size={20}
                                                    className="text-[#3BBFAD]"
                                                />{" "}
                                                Riwayat LexScan
                                            </h3>
                                            <Link
                                                href={route("lexscan")}
                                                className="text-sm text-[#3BBFAD] hover:underline flex items-center gap-1"
                                            >
                                                Scan Baru{" "}
                                                <ChevronRight size={14} />
                                            </Link>
                                        </div>
                                        {selected.recentScans.length === 0 ? (
                                            <div className="text-center py-8">
                                                <Brain
                                                    size={40}
                                                    className="mx-auto mb-3 text-gray-300"
                                                />
                                                <p className="text-sm text-[#2D3748]">
                                                    Belum ada riwayat scan.
                                                </p>
                                            </div>
                                        ) : (
                                            selected.recentScans.map(
                                                (scan, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex items-center gap-4 p-3 rounded-xl bg-[#F7F5F2] mb-3"
                                                    >
                                                        <div
                                                            className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-sm ${scan.overallScore >= 75 ? "bg-[#3BBFAD]" : scan.overallScore >= 50 ? "bg-[#F5A623]" : "bg-red-400"}`}
                                                        >
                                                            {scan.overallScore}%
                                                        </div>
                                                        <div className="flex-1">
                                                            {scan.indicators
                                                                .length > 0 ? (
                                                                <div className="flex flex-wrap gap-1">
                                                                    {scan.indicators.map(
                                                                        (
                                                                            ind,
                                                                            j,
                                                                        ) => (
                                                                            <span
                                                                                key={
                                                                                    j
                                                                                }
                                                                                className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full text-xs"
                                                                            >
                                                                                {
                                                                                    ind
                                                                                }
                                                                            </span>
                                                                        ),
                                                                    )}
                                                                </div>
                                                            ) : (
                                                                <span className="text-xs text-[#6FCF97] font-semibold">
                                                                    Tidak ada
                                                                    indikator
                                                                    disleksia
                                                                </span>
                                                            )}
                                                        </div>
                                                        <span className="text-xs text-[#2D3748] flex items-center gap-1 whitespace-nowrap">
                                                            <Clock size={12} />{" "}
                                                            {scan.date}
                                                        </span>
                                                    </div>
                                                ),
                                            )
                                        )}
                                    </div>

                                    {/* Riwayat LexPlay */}
                                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                                        <div className="flex items-center justify-between mb-5">
                                            <h3 className="font-bold text-lg text-[#1A2E4A] flex items-center gap-2">
                                                <Gamepad2
                                                    size={20}
                                                    className="text-[#F5A623]"
                                                />{" "}
                                                Riwayat LexPlay
                                            </h3>
                                            <Link
                                                href={route("lexplay")}
                                                className="text-sm text-[#3BBFAD] hover:underline flex items-center gap-1"
                                            >
                                                Main Lagi{" "}
                                                <ChevronRight size={14} />
                                            </Link>
                                        </div>
                                        {selected.recentPlays.length === 0 ? (
                                            <div className="text-center py-8">
                                                <Gamepad2
                                                    size={40}
                                                    className="mx-auto mb-3 text-gray-300"
                                                />
                                                <p className="text-sm text-[#2D3748]">
                                                    Belum ada sesi bermain.
                                                </p>
                                            </div>
                                        ) : (
                                            selected.recentPlays.map(
                                                (play, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex items-center gap-4 p-3 rounded-xl bg-[#F7F5F2] mb-3"
                                                    >
                                                        <div className="w-12 h-12 rounded-xl bg-[#F5A623] flex items-center justify-center font-bold text-white text-sm">
                                                            {play.score}
                                                        </div>
                                                        <div className="flex-1">
                                                            <p className="text-sm font-semibold text-[#1A2E4A]">
                                                                Level{" "}
                                                                {
                                                                    play.levelReached
                                                                }{" "}
                                                                tercapai
                                                            </p>
                                                            <p className="text-xs text-[#2D3748]">
                                                                {play.score}{" "}
                                                                poin
                                                            </p>
                                                        </div>
                                                        <span className="text-xs text-[#2D3748] flex items-center gap-1 whitespace-nowrap">
                                                            <Clock size={12} />{" "}
                                                            {play.date}
                                                        </span>
                                                    </div>
                                                ),
                                            )
                                        )}
                                    </div>
                                </>
                            ) : (
                                <div className="bg-white rounded-2xl p-16 shadow-sm text-center">
                                    <div className="text-6xl mb-4">👈</div>
                                    <h3 className="text-xl font-bold text-[#1A2E4A] mb-2">
                                        Pilih profil anak
                                    </h3>
                                    <p className="text-[#2D3748]">
                                        Tambah profil anak terlebih dahulu, lalu
                                        pilih untuk melihat detail progressnya.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
