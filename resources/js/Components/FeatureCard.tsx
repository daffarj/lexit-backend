import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    link?: string;
    accentColor?: string;
}

// Inline animal SVGs — no emoji
function BearIcon() {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="26" r="16" fill="#D4845A"/>
            <circle cx="24" cy="22" r="12" fill="#D4845A"/>
            <circle cx="15" cy="14" r="6" fill="#D4845A"/>
            <circle cx="33" cy="14" r="6" fill="#D4845A"/>
            <circle cx="15" cy="14" r="3.5" fill="#BF6E45"/>
            <circle cx="33" cy="14" r="3.5" fill="#BF6E45"/>
            <ellipse cx="24" cy="25" rx="7" ry="5.5" fill="#EDA882"/>
            <circle cx="20.5" cy="20" r="2" fill="#2C2C2C"/>
            <circle cx="27.5" cy="20" r="2" fill="#2C2C2C"/>
            <circle cx="21" cy="19.4" r="0.6" fill="white"/>
            <circle cx="28" cy="19.4" r="0.6" fill="white"/>
            <ellipse cx="24" cy="25" rx="2" ry="1.2" fill="#BF6E45"/>
            <path d="M21 28 Q24 31 27 28" stroke="#BF6E45" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
    );
}

function OwlIcon() {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <ellipse cx="24" cy="28" rx="12" ry="14" fill="#7B68EE"/>
            <ellipse cx="24" cy="24" rx="10" ry="11" fill="#8A7FEE"/>
            <polygon points="18,10 15,4 21,9" fill="#7B68EE"/>
            <polygon points="30,10 33,4 27,9" fill="#7B68EE"/>
            <circle cx="20" cy="22" r="6" fill="white"/>
            <circle cx="28" cy="22" r="6" fill="white"/>
            <circle cx="20" cy="22" r="4" fill="#FFD93D"/>
            <circle cx="28" cy="22" r="4" fill="#FFD93D"/>
            <circle cx="20" cy="22" r="2.5" fill="#1A1A2E"/>
            <circle cx="28" cy="22" r="2.5" fill="#1A1A2E"/>
            <circle cx="20.8" cy="21.2" r="0.8" fill="white"/>
            <circle cx="28.8" cy="21.2" r="0.8" fill="white"/>
            <path d="M21 29 Q24 32 27 29" fill="#FFAB40" stroke="none"/>
            <ellipse cx="24" cy="29" rx="2" ry="1.2" fill="#FFAB40"/>
        </svg>
    );
}

function RabbitIcon() {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <ellipse cx="24" cy="30" rx="11" ry="12" fill="#A8D8A8"/>
            <circle cx="24" cy="22" r="11" fill="#A8D8A8"/>
            <ellipse cx="18" cy="10" rx="4" ry="9" fill="#A8D8A8"/>
            <ellipse cx="30" cy="10" rx="4" ry="9" fill="#A8D8A8"/>
            <ellipse cx="18" cy="10" rx="2" ry="6.5" fill="#F8BBD9"/>
            <ellipse cx="30" cy="10" rx="2" ry="6.5" fill="#F8BBD9"/>
            <ellipse cx="24" cy="25" rx="6" ry="4.5" fill="#C8EAC8"/>
            <circle cx="20.5" cy="20" r="2" fill="#2C2C2C"/>
            <circle cx="27.5" cy="20" r="2" fill="#2C2C2C"/>
            <circle cx="21" cy="19.4" r="0.6" fill="white"/>
            <circle cx="28" cy="19.4" r="0.6" fill="white"/>
            <ellipse cx="24" cy="25" rx="1.5" ry="1" fill="#F48FB1"/>
            <path d="M21 27.5 Q24 30 27 27.5" stroke="#C8EAC8" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
    );
}

const CARD_CONFIG = [
    {
        bg: "#FFF5F5", border: "#FFAAAA", shadow: "#FF7777",
        titleColor: "#CC2222", animal: <BearIcon />,
        wavy: "#FFD6D6",
    },
    {
        bg: "#F5F0FF", border: "#C4B5FD", shadow: "#7C3AED",
        titleColor: "#5B21B6", animal: <OwlIcon />,
        wavy: "#E9D5FF",
    },
    {
        bg: "#F0FFF5", border: "#86EFAC", shadow: "#16A34A",
        titleColor: "#14532D", animal: <RabbitIcon />,
        wavy: "#BBF7D0",
    },
];

export function FeatureCard({ icon: Icon, title, description, link, accentColor = '#FF6B6B' }: FeatureCardProps) {
    const idx = accentColor === '#3BBFAD' ? 2 : accentColor === '#F5A623' ? 1 : 0;
    const cfg = CARD_CONFIG[idx];

    return (
        <div
            style={{
                background: cfg.bg, borderRadius: 28, border: `3px solid ${cfg.border}`,
                boxShadow: `0 7px 0 ${cfg.shadow}`,
                padding: "32px 24px 28px", position: "relative", overflow: "hidden",
                transition: "transform 0.18s, box-shadow 0.18s",
                cursor: link ? "pointer" : "default",
                fontFamily: "'Nunito', sans-serif",
            }}
            onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 0 ${cfg.shadow}`;
            }}
            onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 7px 0 ${cfg.shadow}`;
            }}
        >
            {/* Decorative wavy top strip */}
            <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 8,
                background: cfg.border,
            }}/>

            {/* Background blob circles */}
            <div style={{ position: "absolute", top: -30, right: -30, width: 100, height: 100, borderRadius: "50%", background: cfg.wavy, opacity: 0.6 }}/>
            <div style={{ position: "absolute", bottom: -20, left: -20, width: 70, height: 70, borderRadius: "50%", background: cfg.wavy, opacity: 0.4 }}/>

            {/* Animal character */}
            <div style={{ marginBottom: 16, position: "relative" }}>
                {cfg.animal}
            </div>

            <h3 style={{
                fontSize: 22, fontWeight: 900, color: cfg.titleColor,
                marginBottom: 10, position: "relative", lineHeight: 1.2,
            }}>
                {title}
            </h3>
            <p style={{
                fontSize: 14, color: "#555", lineHeight: 1.7,
                marginBottom: link ? 20 : 0, position: "relative",
            }}>
                {description}
            </p>
            {link && (
                <a href={link} style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    color: "white", fontWeight: 800, fontSize: 13,
                    background: cfg.shadow, padding: "8px 18px",
                    borderRadius: 999, textDecoration: "none",
                    boxShadow: `0 3px 0 ${cfg.titleColor}`,
                    position: "relative",
                }}>
                    Pelajari lebih lanjut →
                </a>
            )}
        </div>
    );
}