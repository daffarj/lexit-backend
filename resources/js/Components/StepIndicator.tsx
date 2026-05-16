interface StepIndicatorProps {
    steps: {
        number: number;
        title: string;
        description: string;
    }[];
}

const STEP_COLORS = [
    { bg: "#FF6B6B", shadow: "#CC4444", text: "white", ring: "#FFAAAA" },
    { bg: "#FFD93D", shadow: "#CC9900", text: "#1A1A2E", ring: "#FFE988" },
    { bg: "#6BCB77", shadow: "#338844", text: "white", ring: "#A8E6B0" },
];

// Inline paw print SVG for connectors
function PawPrint({ color }: { color: string }) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <ellipse cx="12" cy="14" rx="5.5" ry="4.5" fill={color} opacity="0.7"/>
            <ellipse cx="7" cy="10" rx="2" ry="2.5" fill={color} opacity="0.7"/>
            <ellipse cx="17" cy="10" rx="2" ry="2.5" fill={color} opacity="0.7"/>
            <ellipse cx="9.5" cy="7" rx="1.8" ry="2.2" fill={color} opacity="0.7"/>
            <ellipse cx="14.5" cy="7" rx="1.8" ry="2.2" fill={color} opacity="0.7"/>
        </svg>
    );
}

export function StepIndicator({ steps }: StepIndicatorProps) {
    return (
        <div style={{ position: "relative" }}>
            {/* Dashed connector line */}
            <div className="hidden lg:block" style={{
                position: "absolute", top: 52, left: "16.5%", right: "16.5%", height: 4,
                background: "repeating-linear-gradient(90deg, #FFD93D 0px, #FFD93D 12px, transparent 12px, transparent 24px)",
                borderRadius: 4, zIndex: 0,
            }}/>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, position: "relative", zIndex: 1 }}>
                {steps.map((step, idx) => {
                    const c = STEP_COLORS[idx % STEP_COLORS.length];
                    return (
                        <div key={step.number} style={{
                            display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
                            fontFamily: "'Nunito', sans-serif",
                        }}>
                            {/* Step circle with ring */}
                            <div style={{ position: "relative", marginBottom: 24 }}>
                                <div style={{
                                    width: 88, height: 88, borderRadius: "50%",
                                    background: c.ring, display: "flex",
                                    alignItems: "center", justifyContent: "center",
                                }}>
                                    <div style={{
                                        width: 72, height: 72, borderRadius: "50%",
                                        background: c.bg,
                                        boxShadow: `0 6px 0 ${c.shadow}`,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        fontSize: 32, fontWeight: 900, color: c.text,
                                    }}>
                                        {step.number}
                                    </div>
                                </div>
                                {/* Paw prints on the side for first two steps */}
                                {idx < steps.length - 1 && (
                                    <div className="hidden lg:block" style={{ position: "absolute", top: "50%", left: "calc(100% + 8px)", transform: "translateY(-50%)" }}>
                                        <PawPrint color="#FFD93D"/>
                                    </div>
                                )}
                            </div>

                            <h3 style={{
                                fontSize: 22, fontWeight: 900, color: "#1A1A2E",
                                marginBottom: 10,
                            }}>
                                {step.title}
                            </h3>
                            <p style={{
                                fontSize: 14, color: "#666", lineHeight: 1.7,
                                maxWidth: 240,
                            }}>
                                {step.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}