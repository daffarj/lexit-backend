import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import { Lock } from 'lucide-react';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({ password: '' });
    const submit = (e: React.FormEvent) => { e.preventDefault(); post(route('password.confirm'), { onFinish: () => reset('password') }); };
    const F = "'Nunito', sans-serif";

    return (
        <GuestLayout>
            <Head title="Konfirmasi Password"/>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
                <div style={{ width: 72, height: 72, background: "#FFF8E1", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", border: "3px solid #FFE566" }}>
                    <Lock size={32} color="#FFD93D"/>
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 900, color: "#1A1A2E", margin: 0, marginBottom: 8, fontFamily: F }}>Konfirmasi Password</h2>
                <p style={{ fontSize: 14, color: "#666", fontWeight: 600, lineHeight: 1.6, fontFamily: F }}>Ini area aman. Masukkan password kamu untuk lanjut.</p>
            </div>
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div>
                    <InputLabel htmlFor="password" value="Password"/>
                    <TextInput id="password" type="password" name="password" value={data.password} onChange={e => setData('password', e.target.value)} isFocused/>
                    <InputError message={errors.password}/>
                </div>
                <PrimaryButton disabled={processing} style={{ width: "100%", justifyContent: "center" }}>
                    {processing ? "Mengonfirmasi..." : "Konfirmasi"}
                </PrimaryButton>
            </form>
        </GuestLayout>
    );
}