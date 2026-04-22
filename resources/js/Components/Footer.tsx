import { Link } from "@inertiajs/react";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#1A2E4A] text-white mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Link
                                href="/"
                                className="flex items-center gap-3 group"
                            >
                                <img
                                    src="/LEXIT LOGO.svg"
                                    alt="Lexit Logo"
                                    className="h-20 object-contain group-hover:scale-105 transition-transform"
                                />
                            </Link>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Baca Lebih Mudah, Tumbuh Lebih Berani
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-4 text-[#F5A623]">
                            Navigasi
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="text-sm text-gray-300 hover:text-[#3BBFAD] transition-colors"
                                >
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/features"
                                    className="text-sm text-gray-300 hover:text-[#3BBFAD] transition-colors"
                                >
                                    Fitur
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/how-it-works"
                                    className="text-sm text-gray-300 hover:text-[#3BBFAD] transition-colors"
                                >
                                    Cara Kerja
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-sm text-gray-300 hover:text-[#3BBFAD] transition-colors"
                                >
                                    Tentang
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pricing"
                                    className="text-sm text-gray-300 hover:text-[#3BBFAD] transition-colors"
                                >
                                    Harga
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-bold mb-4 text-[#F5A623]">
                            Sumber Daya
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-300 hover:text-[#3BBFAD] transition-colors"
                                >
                                    Panduan Orang Tua
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-300 hover:text-[#3BBFAD] transition-colors"
                                >
                                    Artikel Disleksia
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-300 hover:text-[#3BBFAD] transition-colors"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-300 hover:text-[#3BBFAD] transition-colors"
                                >
                                    Konsultasi Psikolog
                                </a>
                            </li>
                            <li>
                                <Link
                                    href="/design-system"
                                    className="text-sm text-gray-300 hover:text-[#3BBFAD] transition-colors"
                                >
                                    Design System
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold mb-4 text-[#F5A623]">
                            Kontak
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-sm text-gray-300">
                                <Mail
                                    size={16}
                                    className="text-[#3BBFAD] mt-0.5"
                                />
                                <span>support@lexit.id</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-300">
                                <Phone
                                    size={16}
                                    className="text-[#3BBFAD] mt-0.5"
                                />
                                <span>+62 812-3456-7890</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-300">
                                <MapPin
                                    size={16}
                                    className="text-[#3BBFAD] mt-0.5"
                                />
                                <span>Jakarta, Indonesia</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">
                        © 2026 Lexit by Tim Lavan. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                        <a
                            href="#"
                            className="hover:text-[#3BBFAD] transition-colors"
                        >
                            Kebijakan Privasi
                        </a>
                        <a
                            href="#"
                            className="hover:text-[#3BBFAD] transition-colors"
                        >
                            Syarat & Ketentuan
                        </a>
                        <span className="flex items-center gap-1">
                            Sesuai UU No. 8/2016
                        </span>
                    </div>
                    <p className="text-sm text-gray-400 flex items-center gap-1">
                        Made with <Heart size={14} className="text-[#F5A623]" />{" "}
                        for Indonesian children
                    </p>
                </div>
            </div>
        </footer>
    );
}
