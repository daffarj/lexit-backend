interface StatCardProps {
    number: string;
    label: string;
    color?: string;
}

const STAT_THEMES = [
    { bg: "#FFF5E6", border: "#FFCC80", shadow: "#FF9800", numColor: "#E65100", dot: "#FFB74D" },
    { bg: "#E8F5E9", border: "#A5D6A7", shadow: "#388E3C", numColor: "#1B5E20", dot: "#66BB6A" },
    { bg: "#EDE7F6", border: "#CE93D8", shadow: "#7B1FA2", numColor: "#4A148C", dot: "#AB47BC" },
];

let statIdx = 0;

export function StatCard({ number, label, color = '#3BBFAD' }: StatCardProps) {
    const idx = color === "#3BBFAD" ? 1 : color === "#F5A623" ? 0 : 2;
    const t = STAT_THEMES[idx];

    return (
        <div style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
            padding: "28px 20px 24px", background: t.bg,
            borderRadius: 24, border: `3px solid ${t.border}`,
            boxShadow: `0 6px 0 ${t.shadow}`,
            transition: "transform 0.18s, box-shadow 0.18s",
            fontFamily: "'Nunito', sans-serif",
            position: "relative", overflow: "hidden",
        }}
        onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
            (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 0 ${t.shadow}`;
        }}
        onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 0 ${t.shadow}`;
        }}
        >
            {/* Decorative dots */}
            <div style={{ position: "absolute", top: 10, right: 14, width: 10, height: 10, borderRadius: "50%", background: t.dot, opacity: 0.6 }}/>
            <div style={{ position: "absolute", top: 20, right: 30, width: 6, height: 6, borderRadius: "50%", background: t.dot, opacity: 0.4 }}/>
            <div style={{ position: "absolute", bottom: 12, left: 14, width: 8, height: 8, borderRadius: "50%", background: t.dot, opacity: 0.5 }}/>

            <div style={{
                fontSize: 44, fontWeight: 900, color: t.numColor, lineHeight: 1,
                letterSpacing: "-1px",
            }}>
                {number}
            </div>
            <div style={{
                fontSize: 14, color: "#666", textAlign: "center",
                fontWeight: 700, lineHeight: 1.3,
            }}>
                {label}
            </div>
        </div>
    );
}