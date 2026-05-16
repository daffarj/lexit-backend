import { Link } from "@inertiajs/react";

// Inline penguin SVG for footer
function PenguinFooter() {
    return (
        <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
            {/* Body */}
            <ellipse cx="30" cy="48" rx="18" ry="20" fill="#2C2C3E"/>
            {/* Belly */}
            <ellipse cx="30" cy="50" rx="10" ry="13" fill="white"/>
            {/* Head */}
            <circle cx="30" cy="22" r="16" fill="#2C2C3E"/>
            {/* Face */}
            <ellipse cx="30" cy="26" rx="9" ry="8" fill="white"/>
            {/* Eyes */}
            <circle cx="26" cy="20" r="3" fill="white"/>
            <circle cx="34" cy="20" r="3" fill="white"/>
            <circle cx="26.5" cy="20" r="2" fill="#2C2C3E"/>
            <circle cx="34.5" cy="20" r="2" fill="#2C2C3E"/>
            <circle cx="27" cy="19.5" r="0.6" fill="white"/>
            <circle cx="35" cy="19.5" r="0.6" fill="white"/>
            {/* Beak */}
            <path d="M27.5 27 L30 31 L32.5 27 Z" fill="#FF8C00"/>
            {/* Wings */}
            <ellipse cx="12" cy="48" rx="6" ry="13" fill="#2C2C3E" transform="rotate(-15 12 48)"/>
            <ellipse cx="48" cy="48" rx="6" ry="13" fill="#2C2C3E" transform="rotate(15 48 48)"/>
            {/* Feet */}
            <ellipse cx="23" cy="67" rx="7" ry="3" fill="#FF8C00"/>
            <ellipse cx="37" cy="67" rx="7" ry="3" fill="#FF8C00"/>
            {/* Scarf */}
            <rect x="14" y="32" width="32" height="7" rx="3.5" fill="#FF6B6B"/>
            <rect x="28" y="32" width="8" height="12" rx="3" fill="#FF6B6B"/>
        </svg>
    );
}

export default function Footer() {
    return (
        <footer style={{
            background: "#1A1A2E", color: "white",
            marginTop: 0, fontFamily: "'Nunito', sans-serif",
        }}>
            {/* Wavy top edge */}
            <div style={{ background: "#1A1A2E", overflow: "hidden", lineHeight: 0 }}>
                <svg viewBox="0 0 1200 60" preserveAspectRatio="none" style={{ display: "block", height: 60, width: "100%" }}>
                    <path d="M0 60 L0 30 Q150 0 300 25 Q450 50 600 20 Q750 0 900 30 Q1050 55 1200 25 L1200 60 Z" fill="#1A1A2E"/>
                    <path d="M0 60 L0 35 Q150 10 300 30 Q450 55 600 25 Q750 5 900 35 Q1050 60 1200 30 L1200 0 L0 0 Z" fill="white"/>
                </svg>
            </div>

            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px 32px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40 }}>
                    {/* Brand */}
                    <div>
                        <div style={{ display: "flex", alignItems: "flex-end", gap: 12, marginBottom: 16 }}>
                            <PenguinFooter/>
                            <div>
                                <div style={{ fontSize: 26, fontWeight: 900, color: "#FF6B6B", letterSpacing: -0.5 }}>LEXIT</div>
                                <div style={{ fontSize: 11, color: "#aaa", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Baca Lebih Berani</div>
                            </div>
                        </div>
                        <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.7 }}>
                            Platform deteksi disleksia berbasis AI yang menyenangkan untuk anak-anak Indonesia.
                        </p>
                    </div>

                    {/* Navigasi */}
                    <div>
                        <h4 style={{ fontWeight: 900, marginBottom: 16, color: "#FFD93D", fontSize: 16 }}>Navigasi</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                            {[
                                { href: "/", label: "Beranda" },
                                { href: "/features", label: "Fitur" },
                                { href: "/how-it-works", label: "Cara Kerja" },
                                { href: "/about", label: "Tentang" },
                            ].map(item => (
                                <li key={item.href}>
                                    <Link href={item.href} style={{ color: "#9CA3AF", textDecoration: "none", fontSize: 14, fontWeight: 600, transition: "color 0.15s" }}
                                        onMouseEnter={e => (e.currentTarget.style.color = "#6BCB77")}
                                        onMouseLeave={e => (e.currentTarget.style.color = "#9CA3AF")}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sumber Daya */}
                    <div>
                        <h4 style={{ fontWeight: 900, marginBottom: 16, color: "#FFD93D", fontSize: 16 }}>Sumber Daya</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                            {["Panduan Orang Tua", "Artikel Disleksia", "FAQ", "Konsultasi Psikolog"].map(item => (
                                <li key={item}>
                                    <a href="#" style={{ color: "#9CA3AF", textDecoration: "none", fontSize: 14, fontWeight: 600 }}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kontak */}
                    <div>
                        <h4 style={{ fontWeight: 900, marginBottom: 16, color: "#FFD93D", fontSize: 16 }}>Kontak</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            {[
                                { label: "support@lexit.id" },
                                { label: "+62 812-3456-7890" },
                                { label: "Jakarta, Indonesia" },
                            ].map(item => (
                                <div key={item.label} style={{ fontSize: 14, color: "#9CA3AF", fontWeight: 600 }}>{item.label}</div>
                            ))}
                        </div>

                        {/* Fun badge */}
                        <div style={{
                            marginTop: 20, display: "inline-block",
                            background: "#FF6B6B", borderRadius: 999,
                            padding: "6px 16px", fontSize: 12, fontWeight: 800, color: "white",
                            boxShadow: "0 3px 0 #CC4444",
                        }}>
                            Untuk Anak Indonesia
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{
                    borderTop: "2px dashed rgba(255,255,255,0.15)",
                    marginTop: 40, paddingTop: 24,
                    display: "flex", flexWrap: "wrap", justifyContent: "space-between",
                    alignItems: "center", gap: 12,
                }}>
                    <p style={{ fontSize: 13, color: "#6B7280" }}>
                        © 2026 Lexit by Tim Lavan. All rights reserved.
                    </p>
                    <div style={{ display: "flex", gap: 20 }}>
                        {["Kebijakan Privasi", "Syarat & Ketentuan"].map(label => (
                            <a key={label} href="#" style={{ fontSize: 13, color: "#6B7280", textDecoration: "none" }}>{label}</a>
                        ))}
                    </div>
                    <p style={{ fontSize: 13, color: "#6B7280" }}>
                        Dibuat dengan cinta untuk anak-anak Indonesia
                    </p>
                </div>
            </div>
        </footer>
    );
}