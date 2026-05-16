import React from 'react';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    disabled?: boolean;
    children: React.ReactNode;
}

export default function PrimaryButton({ className = '', disabled, children, ...props }: PrimaryButtonProps) {
    return (
        <button
            {...props}
            disabled={disabled}
            style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                padding: "12px 28px", background: disabled ? "#ccc" : "#FF6B6B",
                color: "white", fontWeight: 900, fontSize: 15, borderRadius: 999,
                border: "none", cursor: disabled ? "not-allowed" : "pointer",
                boxShadow: disabled ? "0 4px 0 #aaa" : "0 5px 0 #CC4444",
                fontFamily: "'Nunito', sans-serif",
                transition: "all 0.15s",
                opacity: disabled ? 0.6 : 1,
            }}
            className={className}
        >
            {children}
        </button>
    );
}