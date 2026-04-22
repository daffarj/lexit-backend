import { Link, usePage } from "@inertiajs/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const { url } = usePage(); // ← FIX: destructure url langsung

    const navItems = [
        { path: "/", label: "Beranda" },
        { path: "/features", label: "Fitur" },
        { path: "/lexscan", label: "LexScan" },
        { path: "/lexplay", label: "LexPlay" },
        { path: "/how-it-works", label: "Cara Kerja" },
        { path: "/about", label: "Tentang" },
    ];

    const isActive = (path: string) => url === path; // ← FIX: pakai url

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#3BBFAD]/20 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <img
                            src="/LEXIT LOGO.svg"
                            alt="Lexit Logo"
                            className="h-20 object-contain group-hover:scale-105 transition-transform"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path} // ← FIX: to → href
                                className={`text-base transition-colors relative group ${
                                    isActive(item.path)
                                        ? "text-[#3BBFAD] font-semibold"
                                        : "text-[#2D3748] hover:text-[#3BBFAD]"
                                }`}
                            >
                                {item.label}
                                {isActive(item.path) && (
                                    <span className="absolute -bottom-7 left-0 right-0 h-1 bg-[#3BBFAD] rounded-full" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/pricing" // ← FIX: to → href
                            className="px-6 py-3 bg-[#3BBFAD] text-white rounded-2xl font-semibold hover:bg-[#F5A623] transition-all shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Mulai Gratis
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-[#2D3748] hover:text-[#3BBFAD]"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path} // ← FIX: to → href
                                    onClick={() => setIsOpen(false)}
                                    className={`px-4 py-2 rounded-xl transition-colors ${
                                        isActive(item.path)
                                            ? "bg-[#3BBFAD]/10 text-[#3BBFAD] font-semibold"
                                            : "text-[#2D3748] hover:bg-gray-50"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                href="/pricing" // ← FIX: to → href
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-3 bg-[#3BBFAD] text-white rounded-2xl font-semibold text-center hover:bg-[#F5A623] transition-colors"
                            >
                                Mulai Gratis
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
