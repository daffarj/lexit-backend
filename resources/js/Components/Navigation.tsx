import { Link, router, usePage } from "@inertiajs/react";
import {
    Menu,
    X,
    LayoutDashboard,
    LogOut,
    Baby,
    ArrowLeft,
    User,
} from "lucide-react";
import { useState } from "react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [showUserMenu, setUserMenu] = useState(false);
    const { url, props } = usePage<any>();
    const auth = props.auth?.user;

    const navItems = [
        { path: "/", label: "Beranda" },
        { path: "/features", label: "Fitur" },
        { path: "/lexscan", label: "LexScan" },
        { path: "/lexplay", label: "LexPlay" },
        { path: "/how-it-works", label: "Cara Kerja" },
        { path: "/about", label: "Tentang" },
    ];

    const isActive = (path: string) => url === path;

    const handleLogout = () => {
        router.post(route("logout"));
    };

    const handleBackToParent = () => {
        router.post(route("mode.parent"));
    };

    return (
        <>
            {/* ── Child Mode Banner ── */}
            {auth?.isChildMode && (
                <div className="bg-[#F5A623] text-white py-2 px-4">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm font-semibold">
                            <Baby size={16} />
                            Mode Anak:{" "}
                            <span className="font-bold">
                                {auth.activeChild?.avatar}{" "}
                                {auth.activeChild?.name}
                            </span>
                        </div>
                        <button
                            onClick={handleBackToParent}
                            className="flex items-center gap-1.5 text-sm font-bold bg-white/20 hover:bg-white/30 px-3 py-1 rounded-xl transition-all"
                        >
                            <ArrowLeft size={14} /> Kembali ke Mode Orang Tua
                        </button>
                    </div>
                </div>
            )}

            {/* ── Main Navbar ── */}
            <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#3BBFAD]/20 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-3 group"
                        >
                            <img
                                src="/LEXIT LOGO.svg"
                                alt="Lexit"
                                className="h-20 object-contain group-hover:scale-105 transition-transform"
                            />
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`text-base transition-colors relative group ${isActive(item.path) ? "text-[#3BBFAD] font-semibold" : "text-[#2D3748] hover:text-[#3BBFAD]"}`}
                                >
                                    {item.label}
                                    {isActive(item.path) && (
                                        <span className="absolute -bottom-7 left-0 right-0 h-1 bg-[#3BBFAD] rounded-full" />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Auth Area */}
                        <div className="hidden md:flex items-center gap-3">
                            {auth ? (
                                // ── Sudah login ──
                                <div className="relative">
                                    <button
                                        onClick={() =>
                                            setUserMenu(!showUserMenu)
                                        }
                                        className="flex items-center gap-2 px-4 py-2 bg-[#F7F5F2] hover:bg-[#3BBFAD]/10 rounded-2xl transition-all"
                                    >
                                        <div className="w-8 h-8 bg-[#3BBFAD] rounded-full flex items-center justify-center text-white text-sm font-bold">
                                            {auth.isChildMode ? (
                                                <span>
                                                    {auth.activeChild?.avatar}
                                                </span>
                                            ) : (
                                                auth.name
                                                    .charAt(0)
                                                    .toUpperCase()
                                            )}
                                        </div>
                                        <span className="text-sm font-semibold text-[#1A2E4A]">
                                            {auth.isChildMode
                                                ? auth.activeChild?.name
                                                : auth.name}
                                        </span>
                                        <span className="text-xs text-gray-400">
                                            ▼
                                        </span>
                                    </button>

                                    {showUserMenu && (
                                        <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                                            <div className="px-4 py-2 border-b border-gray-100 mb-1">
                                                <p className="text-xs text-gray-400">
                                                    Login sebagai
                                                </p>
                                                <p className="text-sm font-bold text-[#1A2E4A]">
                                                    {auth.name}
                                                </p>
                                                <p className="text-xs text-gray-400">
                                                    {auth.email}
                                                </p>
                                            </div>

                                            {!auth.isChildMode && (
                                                <Link
                                                    href={route("dashboard")}
                                                    onClick={() =>
                                                        setUserMenu(false)
                                                    }
                                                    className="flex items-center gap-2 px-4 py-2 text-sm text-[#2D3748] hover:bg-[#3BBFAD]/10 hover:text-[#3BBFAD] transition-all"
                                                >
                                                    <LayoutDashboard
                                                        size={15}
                                                    />{" "}
                                                    Dashboard
                                                </Link>
                                            )}

                                            {auth.isChildMode && (
                                                <button
                                                    onClick={() => {
                                                        setUserMenu(false);
                                                        handleBackToParent();
                                                    }}
                                                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-[#F5A623] hover:bg-[#F5A623]/10 transition-all"
                                                >
                                                    <ArrowLeft size={15} /> Mode
                                                    Orang Tua
                                                </button>
                                            )}

                                            <button
                                                onClick={() => {
                                                    setUserMenu(false);
                                                    handleLogout();
                                                }}
                                                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-all"
                                            >
                                                <LogOut size={15} /> Keluar
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                // ── Belum login ──
                                <>
                                    <Link
                                        href={route("login")}
                                        className="px-5 py-2.5 text-[#3BBFAD] border-2 border-[#3BBFAD] rounded-2xl font-semibold hover:bg-[#3BBFAD]/10 transition-all text-sm"
                                    >
                                        Masuk
                                    </Link>
                                    <Link
                                        href={route("register")}
                                        className="px-5 py-2.5 bg-[#3BBFAD] text-white rounded-2xl font-semibold hover:bg-[#F5A623] transition-all shadow-lg text-sm"
                                    >
                                        Mulai Gratis
                                    </Link>
                                </>
                            )}
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-[#2D3748] hover:text-[#3BBFAD]"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="md:hidden py-4 border-t border-gray-200">
                            <div className="flex flex-col gap-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.path}
                                        href={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`px-4 py-2 rounded-xl transition-colors ${isActive(item.path) ? "bg-[#3BBFAD]/10 text-[#3BBFAD] font-semibold" : "text-[#2D3748] hover:bg-gray-50"}`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <div className="pt-2 border-t border-gray-100 mt-2 flex flex-col gap-2">
                                    {auth ? (
                                        <>
                                            {!auth.isChildMode && (
                                                <Link
                                                    href={route("dashboard")}
                                                    onClick={() =>
                                                        setIsOpen(false)
                                                    }
                                                    className="flex items-center gap-2 px-4 py-2.5 bg-[#3BBFAD]/10 text-[#3BBFAD] rounded-xl font-semibold"
                                                >
                                                    <LayoutDashboard
                                                        size={16}
                                                    />{" "}
                                                    Dashboard
                                                </Link>
                                            )}
                                            <button
                                                onClick={() => {
                                                    setIsOpen(false);
                                                    handleLogout();
                                                }}
                                                className="flex items-center gap-2 px-4 py-2.5 bg-red-50 text-red-500 rounded-xl font-semibold"
                                            >
                                                <LogOut size={16} /> Keluar
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <Link
                                                href={route("login")}
                                                onClick={() => setIsOpen(false)}
                                                className="px-4 py-2.5 border-2 border-[#3BBFAD] text-[#3BBFAD] rounded-xl font-semibold text-center"
                                            >
                                                Masuk
                                            </Link>
                                            <Link
                                                href={route("register")}
                                                onClick={() => setIsOpen(false)}
                                                className="px-4 py-2.5 bg-[#3BBFAD] text-white rounded-xl font-semibold text-center"
                                            >
                                                Mulai Gratis
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}
