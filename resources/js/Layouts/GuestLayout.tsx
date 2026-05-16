import { Link } from '@inertiajs/react';

// Fox SVG for guest pages
function FoxLogo() {
    return (
        <svg width="48" height="48" viewBox="0 0 44 44" fill="none">
            <ellipse cx="22" cy="26" rx="13" ry="11" fill="#FF7043"/>
            <circle cx="22" cy="15" r="10" fill="#FF7043"/>
            <polygon points="12,10 8,2 16,8" fill="#FF7043"/>
            <polygon points="32,10 36,2 28,8" fill="#FF7043"/>
            <polygon points="12,9 9.5,4 15,8" fill="#FFCCBC"/>
            <polygon points="32,9 34.5,4 29,8" fill="#FFCCBC"/>
            <ellipse cx="22" cy="17" rx="6" ry="5" fill="#FFCCBC"/>
            <circle cx="19" cy="13" r="1.8" fill="#2C2C2C"/>
            <circle cx="25" cy="13" r="1.8" fill="#2C2C2C"/>
            <circle cx="19.6" cy="12.5" r="0.6" fill="white"/>
            <circle cx="25.6" cy="12.5" r="0.6" fill="white"/>
            <ellipse cx="22" cy="17" rx="1.2" ry="0.8" fill="#2C2C2C"/>
        </svg>
    );
}

export default function GuestLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #FFF9F0 0%, #F0F9FF 100%)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            padding: "24px 16px",
            fontFamily: "'Nunito', sans-serif",
        }}>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&display=swap'); * { box-sizing: border-box; }`}</style>

            {/* Logo */}
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 28 }}>
                <FoxLogo/>
                <div>
                    <div style={{ fontSize: 24, fontWeight: 900, color: "#FF6B6B", lineHeight: 1 }}>LEXIT</div>
                    <div style={{ fontSize: 10, color: "#aaa", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>Belajar Bareng!</div>
                </div>
            </Link>

            {/* Card */}
            <div style={{
                width: "100%", maxWidth: 440,
                background: "white", borderRadius: 28,
                border: "3px solid #FFE566",
                boxShadow: "0 8px 0 #FFD700, 0 12px 32px rgba(0,0,0,0.08)",
                padding: "36px 32px",
            }}>
                {children}
            </div>

            {/* Footer note */}
            <p style={{ marginTop: 20, fontSize: 13, color: "#aaa", fontWeight: 600 }}>
                Platform deteksi disleksia untuk anak Indonesia
            </p>
        </div>
    );
}