import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    className?: string;
    isFocused?: boolean;
}

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props }: TextInputProps,
    ref: React.Ref<HTMLInputElement>,
) {
    const localRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => localRef.current!);
    useEffect(() => { if (isFocused) localRef.current?.focus(); }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            ref={localRef}
            style={{
                width: "100%", padding: "12px 16px",
                border: "3px solid #FFE566", borderRadius: 14,
                fontSize: 15, fontFamily: "'Nunito', sans-serif",
                fontWeight: 600, outline: "none",
                background: "white", color: "#1A1A2E",
                transition: "border-color 0.15s",
                ...((props as any).style || {}),
            }}
            onFocus={e => { e.currentTarget.style.borderColor = "#FF6B6B"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255,107,107,0.2)"; if (props.onFocus) props.onFocus(e); }}
            onBlur={e => { e.currentTarget.style.borderColor = "#FFE566"; e.currentTarget.style.boxShadow = "none"; if (props.onBlur) props.onBlur(e); }}
            className={className}
        />
    );
});