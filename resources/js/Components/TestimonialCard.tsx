import { Star } from 'lucide-react';

interface TestimonialCardProps {
    name: string;
    role: string;
    quote: string;
    rating: number;
    avatarUrl?: string;
}

// Inline cat SVG for testimonial mascot
function CatMascot() {
    return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <circle cx="28" cy="30" r="18" fill="#FFB347"/>
            <circle cx="28" cy="26" r="14" fill="#FFB347"/>
            {/* ears */}
            <polygon points="17,16 13,6 21,14" fill="#FFB347"/>
            <polygon points="39,16 43,6 35,14" fill="#FFB347"/>
            <polygon points="17,15 14.5,8 20,13" fill="#FFCB80"/>
            <polygon points="39,15 41.5,8 36,13" fill="#FFCB80"/>
            {/* face */}
            <ellipse cx="28" cy="29" rx="8" ry="6" fill="#FFCB80"/>
            {/* eyes */}
            <circle cx="23.5" cy="23" r="2.5" fill="#2C2C2C"/>
            <circle cx="32.5" cy="23" r="2.5" fill="#2C2C2C"/>
            <circle cx="24.2" cy="22.2" r="0.8" fill="white"/>
            <circle cx="33.2" cy="22.2" r="0.8" fill="white"/>
            {/* nose */}
            <path d="M26.5 28 L28 29.5 L29.5 28 L28 27 Z" fill="#FF6B6B"/>
            {/* whiskers */}
            <line x1="14" y1="27" x2="22" y2="28" stroke="#BF8020" strokeWidth="1.2"/>
            <line x1="14" y1="29" x2="22" y2="29" stroke="#BF8020" strokeWidth="1.2"/>
            <line x1="34" y1="28" x2="42" y2="27" stroke="#BF8020" strokeWidth="1.2"/>
            <line x1="34" y1="29" x2="42" y2="29" stroke="#BF8020" strokeWidth="1.2"/>
            {/* smile */}
            <path d="M24.5 31 Q28 34 31.5 31" stroke="#BF8020" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
    );
}

export function TestimonialCard({ name, role, quote, rating, avatarUrl }: TestimonialCardProps) {
    return (
        <div style={{
            background: "white", borderRadius: 28, padding: "36px 36px 32px",
            boxShadow: "0 8px 0 #FFD700, 0 12px 32px rgba(0,0,0,0.08)",
            border: "3px solid #FFE566", position: "relative", overflow: "hidden",
            fontFamily: "'Nunito', sans-serif",
        }}>
            {/* Top color bar */}
            <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 8,
                background: "linear-gradient(90deg, #FF6B6B, #FFD93D, #6BCB77, #4D96FF)",
            }}/>

            {/* Decorative blobs */}
            <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: "#FFFDE7", zIndex: 0 }}/>
            <div style={{ position: "absolute", bottom: -16, left: -16, width: 70, height: 70, borderRadius: "50%", background: "#E8F5E9", zIndex: 0 }}/>

            <div style={{ position: "relative", zIndex: 1 }}>
                {/* Stars */}
                <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={22}
                            style={{ color: i < rating ? "#FFD93D" : "#DDD", fill: i < rating ? "#FFD93D" : "none" }}
                        />
                    ))}
                </div>

                {/* Big quote mark */}
                <div style={{ fontSize: 80, color: "#FFE566", lineHeight: 0.6, marginBottom: 16, fontFamily: "Georgia, serif" }}>
                    "
                </div>

                {/* Quote */}
                <p style={{
                    fontSize: 17, color: "#444", lineHeight: 1.8,
                    marginBottom: 28, fontStyle: "italic", fontWeight: 600,
                }}>
                    {quote}
                </p>

                {/* Author */}
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{
                        width: 56, height: 56, borderRadius: "50%",
                        border: "3px solid #FFE566", overflow: "hidden",
                        background: "#FFF8E1", flexShrink: 0,
                    }}>
                        {avatarUrl ? (
                            <img src={avatarUrl} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
                        ) : (
                            <CatMascot/>
                        )}
                    </div>
                    <div>
                        <p style={{ fontWeight: 900, color: "#1A1A2E", fontSize: 17, margin: 0 }}>{name}</p>
                        <p style={{ fontSize: 13, color: "#FF6B6B", fontWeight: 700, margin: 0 }}>{role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}