import { Link, router, usePage } from "@inertiajs/react";
import { useState } from "react";

// ─── Inline SVG Animals (no emoji) ───────────────────────────────────────────
function FoxLogo() {
    return (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Body */}
            <ellipse cx="22" cy="26" rx="13" ry="11" fill="#FF7043"/>
            {/* Head */}
            <circle cx="22" cy="15" r="10" fill="#FF7043"/>
            {/* Ears */}
            <polygon points="12,10 8,2 16,8" fill="#FF7043"/>
            <polygon points="32,10 36,2 28,8" fill="#FF7043"/>
            {/* Inner ears */}
            <polygon points="12,9 9.5,4 15,8" fill="#FFCCBC"/>
            <polygon points="32,9 34.5,4 29,8" fill="#FFCCBC"/>
            {/* Face white patch */}
            <ellipse cx="22" cy="17" rx="6" ry="5" fill="#FFCCBC"/>
            {/* Eyes */}
            <circle cx="19" cy="13" r="1.8" fill="#2C2C2C"/>
            <circle cx="25" cy="13" r="1.8" fill="#2C2C2C"/>
            <circle cx="19.6" cy="12.5" r="0.6" fill="white"/>
            <circle cx="25.6" cy="12.5" r="0.6" fill="white"/>
            {/* Nose */}
            <ellipse cx="22" cy="17" rx="1.2" ry="0.8" fill="#2C2C2C"/>
            {/* Tail */}
            <path d="M35 30 Q44 24 40 36 Q36 40 32 36" fill="#FF7043"/>
            <path d="M37 34 Q42 30 39 37" fill="#FFCCBC"/>
        </svg>
    );
}

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
    const handleLogout = () => router.post(route("logout"));
    const handleBackToParent = () => router.post(route("mode.parent"));

    return (
        <>
            {/* Child Mode Banner */}
            {auth?.isChildMode && (
                <div style={{
                    background: "linear-gradient(90deg, #FF6B6B 0%, #FF8E53 100%)",
                    color: "white", padding: "8px 20px",
                    fontFamily: "'Nunito', 'Fredoka One', sans-serif",
                }}>
                    <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 800, fontSize: 14 }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2C8.5 2 6 4.5 6 7c0 2 1 3.5 2.5 4.5L8 20h8l-.5-8.5C17 10.5 18 9 18 7c0-2.5-2.5-5-6-5z" fill="white" fillOpacity="0.9"/>
                                <circle cx="10" cy="7" r="1" fill="#FF6B6B"/>
                                <circle cx="14" cy="7" r="1" fill="#FF6B6B"/>
                            </svg>
                            Mode Anak: {auth.activeChild?.name}
                        </div>
                        <button onClick={handleBackToParent} style={{
                            background: "rgba(255,255,255,0.25)", border: "2px solid rgba(255,255,255,0.5)",
                            borderRadius: 20, padding: "4px 14px", color: "white",
                            fontWeight: 800, cursor: "pointer", fontSize: 13,
                            fontFamily: "'Nunito', sans-serif",
                        }}>
                            Kembali ke Mode Orang Tua
                        </button>
                    </div>
                </div>
            )}

            {/* Main Navbar */}
            <nav style={{
                position: "sticky", top: 0, zIndex: 50,
                background: "white",
                borderBottom: "4px solid #FFE566",
                boxShadow: "0 4px 0 0 #FFD700, 0 6px 16px rgba(0,0,0,0.08)",
                fontFamily: "'Nunito', 'Fredoka One', sans-serif",
            }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: 68 }}>

                        {/* Logo */}
                        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                            <FoxLogo />
                            <div>
                                <div style={{
                                    fontSize: 22, fontWeight: 900, color: "#FF6B6B", lineHeight: 1,
                                    letterSpacing: "-0.5px",
                                }}>LEXIT</div>
                                <div style={{ fontSize: 9, color: "#888", fontWeight: 700, letterSpacing: 1.5, lineHeight: 1, textTransform: "uppercase" }}>
                                    Belajar Bareng!
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="lexit-desktop-nav">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    style={{
                                        padding: "7px 16px",
                                        borderRadius: 999,
                                        fontWeight: 700,
                                        fontSize: 14,
                                        textDecoration: "none",
                                        transition: "all 0.15s",
                                        background: isActive(item.path) ? "#FF6B6B" : "transparent",
                                        color: isActive(item.path) ? "white" : "#444",
                                        boxShadow: isActive(item.path) ? "0 3px 0 #CC4444" : "none",
                                        transform: isActive(item.path) ? "translateY(-1px)" : "none",
                                    }}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        {/* Auth Area */}
                        <div className="lexit-desktop-auth">
                            {auth ? (
                                <div style={{ position: "relative" }}>
                                    <button
                                        onClick={() => setUserMenu(!showUserMenu)}
                                        style={{
                                            display: "flex", alignItems: "center", gap: 8,
                                            padding: "8px 14px", background: "#FFF5F5",
                                            border: "2px solid #FFCCCC", borderRadius: 999,
                                            cursor: "pointer", fontFamily: "'Nunito', sans-serif",
                                            fontWeight: 700, fontSize: 14, color: "#1A1A2E",
                                        }}
                                    >
                                        <div style={{
                                            width: 32, height: 32, borderRadius: "50%",
                                            background: "#FF6B6B", display: "flex",
                                            alignItems: "center", justifyContent: "center",
                                            color: "white", fontWeight: 900, fontSize: 14,
                                        }}>
                                            {auth.name.charAt(0).toUpperCase()}
                                        </div>
                                        {auth.isChildMode ? auth.activeChild?.name : auth.name}
                                        <span style={{ color: "#aaa", fontSize: 10 }}>▼</span>
                                    </button>

                                    {showUserMenu && (
                                        <div style={{
                                            position: "absolute", right: 0, top: "calc(100% + 8px)",
                                            background: "white", borderRadius: 20, minWidth: 210,
                                            boxShadow: "0 8px 0 #FFD700, 0 12px 24px rgba(0,0,0,0.12)",
                                            border: "3px solid #FFE566", overflow: "hidden", zIndex: 999,
                                            fontFamily: "'Nunito', sans-serif",
                                        }}>
                                            <div style={{ padding: "12px 16px", borderBottom: "2px solid #FFF5CC", background: "#FFFBE6" }}>
                                                <div style={{ fontSize: 11, color: "#999", fontWeight: 600 }}>Login sebagai</div>
                                                <div style={{ fontWeight: 800, color: "#1A1A2E" }}>{auth.name}</div>
                                                <div style={{ fontSize: 12, color: "#aaa" }}>{auth.email}</div>
                                            </div>
                                            {!auth.isChildMode && (
                                                <Link href={route("dashboard")} onClick={() => setUserMenu(false)}
                                                    style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 16px", color: "#444", fontWeight: 700, textDecoration: "none", fontSize: 14 }}>
                                                    Dashboard
                                                </Link>
                                            )}
                                            {auth.isChildMode && (
                                                <button onClick={() => { setUserMenu(false); handleBackToParent(); }}
                                                    style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: "12px 16px", color: "#FF8E53", fontWeight: 700, background: "none", border: "none", cursor: "pointer", fontSize: 14, fontFamily: "'Nunito', sans-serif" }}>
                                                    Mode Orang Tua
                                                </button>
                                            )}
                                            <button onClick={() => { setUserMenu(false); handleLogout(); }}
                                                style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: "12px 16px", color: "#FF4444", fontWeight: 700, background: "none", border: "none", cursor: "pointer", fontSize: 14, fontFamily: "'Nunito', sans-serif", borderTop: "2px solid #FFEEEE" }}>
                                                Keluar
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <>
                                    <Link href={route("login")} style={{
                                        padding: "9px 22px", fontWeight: 800, fontSize: 14,
                                        textDecoration: "none", color: "#FF6B6B",
                                        border: "2.5px solid #FF6B6B", borderRadius: 999,
                                        transition: "all 0.15s", fontFamily: "'Nunito', sans-serif",
                                    }}>
                                        Masuk
                                    </Link>
                                    <Link href={route("register")} style={{
                                        padding: "9px 22px", fontWeight: 800, fontSize: 14,
                                        textDecoration: "none", color: "white",
                                        background: "#FF6B6B", borderRadius: 999,
                                        border: "2.5px solid #FF6B6B",
                                        boxShadow: "0 4px 0 #CC4444",
                                        transition: "all 0.15s", fontFamily: "'Nunito', sans-serif",
                                    }}>
                                        Mulai Gratis
                                    </Link>
                                </>
                            )}
                        </div>

                        {/* Responsive — controlled entirely via lexit- classes, no Tailwind conflicts */}
                        <style>{`
                            .lexit-hamburger    { display: flex !important; flex-direction: column; gap: 4px; }
                            .lexit-mobile-menu  { display: block !important; }
                            .lexit-desktop-nav  { display: none !important; }
                            .lexit-desktop-auth { display: none !important; }
                            @media (min-width: 768px) {
                                .lexit-hamburger    { display: none !important; }
                                .lexit-mobile-menu  { display: none !important; }
                                .lexit-desktop-nav  { display: flex !important; align-items: center; gap: 4px; }
                                .lexit-desktop-auth { display: flex !important; align-items: center; gap: 10px; }
                            }
                        `}</style>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lexit-hamburger"
                            style={{
                                background: "#FFF5F5", border: "2px solid #FFCCCC",
                                borderRadius: 12, padding: "8px 10px",
                                cursor: "pointer", flexDirection: "column",
                                gap: 4,
                            }}
                        >
                            {[0,1,2].map(i => (
                                <span key={i} style={{ display: "block", width: 20, height: 2.5, background: "#FF6B6B", borderRadius: 4 }} />
                            ))}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div style={{ paddingBottom: 16, borderTop: "2px solid #FFF5CC" }} className="lexit-mobile-menu">
                            <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingTop: 12 }}>
                                {navItems.map((item) => (
                                    <Link key={item.path} href={item.path} onClick={() => setIsOpen(false)} style={{
                                        padding: "10px 16px", borderRadius: 14, fontWeight: 700, fontSize: 14,
                                        textDecoration: "none",
                                        background: isActive(item.path) ? "#FF6B6B" : "transparent",
                                        color: isActive(item.path) ? "white" : "#444",
                                    }}>
                                        {item.label}
                                    </Link>
                                ))}
                                <div style={{ borderTop: "2px dashed #FFEECC", marginTop: 8, paddingTop: 8, display: "flex", flexDirection: "column", gap: 6 }}>
                                    {auth ? (
                                        <button onClick={() => { setIsOpen(false); handleLogout(); }} style={{
                                            padding: "10px 16px", background: "#FFF0F0", color: "#FF4444",
                                            border: "2px solid #FFCCCC", borderRadius: 14, fontWeight: 800,
                                            cursor: "pointer", fontFamily: "'Nunito', sans-serif", fontSize: 14,
                                        }}>Keluar</button>
                                    ) : (
                                        <>
                                            <Link href={route("login")} onClick={() => setIsOpen(false)} style={{ padding: "10px 16px", border: "2px solid #FF6B6B", color: "#FF6B6B", borderRadius: 14, fontWeight: 800, textDecoration: "none", textAlign: "center", fontSize: 14 }}>Masuk</Link>
                                            <Link href={route("register")} onClick={() => setIsOpen(false)} style={{ padding: "10px 16px", background: "#FF6B6B", color: "white", borderRadius: 14, fontWeight: 800, textDecoration: "none", textAlign: "center", boxShadow: "0 3px 0 #CC4444", fontSize: 14 }}>Mulai Gratis</Link>
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