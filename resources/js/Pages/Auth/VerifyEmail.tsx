import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});
    const submit = (e: React.FormEvent) => { e.preventDefault(); post(route('verification.send')); };

    return (
        <GuestLayout>
            <Head title="Verifikasi Email"/>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
                {/* Mail SVG */}
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" style={{ margin: "0 auto 12px" }}>
                    <circle cx="36" cy="36" r="32" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="3"/>
                    <rect x="16" y="24" width="40" height="28" rx="6" fill="#4D96FF" opacity="0.15"/>
                    <rect x="16" y="24" width="40" height="28" rx="6" fill="none" stroke="#4D96FF" strokeWidth="2.5"/>
                    <path d="M16 30 L36 42 L56 30" stroke="#4D96FF" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                    <circle cx="54" cy="22" r="10" fill="#6BCB77" stroke="white" strokeWidth="2"/>
                    <path d="M49 22 L53 26 L61 17" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h2 style={{ fontSize: 22, fontWeight: 900, color: "#1A1A2E", margin: 0, marginBottom: 8, fontFamily: "'Nunito', sans-serif" }}>Verifikasi Email Kamu</h2>
                <p style={{ fontSize: 14, color: "#666", fontWeight: 600, lineHeight: 1.6, fontFamily: "'Nunito', sans-serif" }}>
                    Terima kasih sudah mendaftar! Cek emailmu dan klik link verifikasi yang kami kirimkan.
                </p>
            </div>

            {status === 'verification-link-sent' && (
                <div style={{ marginBottom: 20, padding: "12px 16px", background: "#F0FFF4", border: "3px solid #86EFAC", borderRadius: 14, color: "#16A34A", fontSize: 14, fontWeight: 700, fontFamily: "'Nunito', sans-serif" }}>
                    Link verifikasi baru sudah dikirim ke emailmu!
                </div>
            )}

            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <PrimaryButton disabled={processing} style={{ width: "100%", justifyContent: "center" }}>
                    {processing ? "Mengirim..." : "Kirim Ulang Email Verifikasi"}
                </PrimaryButton>
                <Link href={route('logout')} method="post" as="button"
                    style={{ background: "#FFF0F0", border: "3px solid #FFAAAA", borderRadius: 999, padding: "12px 28px", color: "#FF4444", fontWeight: 900, fontSize: 15, cursor: "pointer", fontFamily: "'Nunito', sans-serif", textAlign: "center", textDecoration: "none", display: "block" }}>
                    Keluar
                </Link>
            </form>
        </GuestLayout>
    );
}