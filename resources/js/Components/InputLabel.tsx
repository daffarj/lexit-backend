interface InputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    value?: string;
    className?: string;
    children?: React.ReactNode;
}

export default function InputLabel({ value, className = '', children, ...props }: InputLabelProps) {
    return (
        <label
            {...props}
            style={{ display: "block", fontSize: 14, fontWeight: 800, color: "#1A1A2E", marginBottom: 6, fontFamily: "'Nunito', sans-serif" }}
            className={className}
        >
            {value ?? children}
        </label>
    );
}