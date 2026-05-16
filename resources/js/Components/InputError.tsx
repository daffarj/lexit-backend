interface InputErrorProps {
    message?: string;
    className?: string;
}

export default function InputError({ message, className = '' }: InputErrorProps) {
    return message ? (
        <p style={{ color: "#FF4444", fontSize: 13, fontWeight: 700, marginTop: 6, fontFamily: "'Nunito', sans-serif" }} className={className}>
            {message}
        </p>
    ) : null;
}