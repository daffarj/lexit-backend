import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({ email: '' });
    const submit = (e: React.FormEvent) => { e.preventDefault(); post(route('password.email')); };

    return (
        <GuestLayout>
            <Head title="Lupa Password"/>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
                {/* Envelope SVG */}
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{ margin: "0 auto 12px" }}>
                    <rect x="4" y="14" width="56" height="40" rx="10" fill="#FFE566" stroke="#FFD700" strokeWidth="3"/>
                    <rect x="4" y="14" width="56" height="40" rx="10" fill="#FFFDE7"/>
                    <path d="M4 22 L32 38 L60 22" stroke="#FFD700" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    <rect x="4" y="14" width="56" height="10" rx="8" fill="#FFE566"/>
                    <circle cx="50" cy="12" r="10" fill="#FF6B6B"/>
                    <path d="M46 12 L50 16 L58 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h2 style={{ fontSize: 24, fontWeight: 900, color: "#1A1A2E", margin: 0, marginBottom: 8, fontFamily: "'Nunito', sans-serif" }}>Lupa Password?</h2>
                <p style={{ fontSize: 14, color: "#666", fontWeight: 600, lineHeight: 1.6, fontFamily: "'Nunito', sans-serif" }}>
                    Masukkan email-mu dan kami akan kirimkan link untuk reset password.
                </p>
            </div>

            {status && (
                <div style={{ marginBottom: 20, padding: "12px 16px", background: "#F0FFF4", border: "3px solid #86EFAC", borderRadius: 14, color: "#16A34A", fontSize: 14, fontWeight: 700, fontFamily: "'Nunito', sans-serif" }}>
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div style={{ marginBottom: 20 }}>
                    <InputLabel htmlFor="email" value="Alamat Email"/>
                    <TextInput id="email" type="email" name="email" value={data.email} isFocused onChange={e => setData('email', e.target.value)}/>
                    <InputError message={errors.email}/>
                </div>
                <PrimaryButton disabled={processing} style={{ width: "100%", justifyContent: "center" }}>
                    {processing ? "Mengirim..." : "Kirim Link Reset Password"}
                </PrimaryButton>
            </form>
        </GuestLayout>
    );
}