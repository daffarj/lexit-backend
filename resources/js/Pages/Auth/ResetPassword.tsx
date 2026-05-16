import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import { Eye, EyeOff, Lock } from 'lucide-react';
import { useState } from 'react';

export default function ResetPassword({ token, email }: { token: string; email: string }) {
    const [showPass, setShowPass] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({ token, email, password: '', password_confirmation: '' });
    const submit = (e: React.FormEvent) => { e.preventDefault(); post(route('password.store'), { onFinish: () => reset('password', 'password_confirmation') }); };

    const F = "'Nunito', sans-serif";
    const inputWrap = { position: "relative" as const };
    const eyeBtn = { position: "absolute" as const, right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" };

    return (
        <GuestLayout>
            <Head title="Reset Password"/>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
                <div style={{ width: 72, height: 72, background: "#FFF5F5", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", border: "3px solid #FFAAAA" }}>
                    <Lock size={32} color="#FF6B6B"/>
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 900, color: "#1A1A2E", margin: 0, marginBottom: 8, fontFamily: F }}>Buat Password Baru</h2>
                <p style={{ fontSize: 14, color: "#666", fontWeight: 600, fontFamily: F }}>Pastikan password baru kamu mudah diingat tapi aman ya!</p>
            </div>

            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div>
                    <InputLabel htmlFor="email" value="Email"/>
                    <TextInput id="email" type="email" name="email" value={data.email} onChange={e => setData('email', e.target.value)} autoComplete="username"/>
                    <InputError message={errors.email}/>
                </div>
                <div>
                    <InputLabel htmlFor="password" value="Password Baru"/>
                    <div style={inputWrap}>
                        <TextInput id="password" type={showPass ? "text" : "password"} name="password" value={data.password} onChange={e => setData('password', e.target.value)} autoComplete="new-password" isFocused style={{ paddingRight: 48 }}/>
                        <button type="button" onClick={() => setShowPass(!showPass)} style={eyeBtn}>{showPass ? <EyeOff size={18} color="#aaa"/> : <Eye size={18} color="#aaa"/>}</button>
                    </div>
                    <InputError message={errors.password}/>
                </div>
                <div>
                    <InputLabel htmlFor="password_confirmation" value="Konfirmasi Password"/>
                    <div style={inputWrap}>
                        <TextInput id="password_confirmation" type={showConfirm ? "text" : "password"} name="password_confirmation" value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)} autoComplete="new-password" style={{ paddingRight: 48 }}/>
                        <button type="button" onClick={() => setShowConfirm(!showConfirm)} style={eyeBtn}>{showConfirm ? <EyeOff size={18} color="#aaa"/> : <Eye size={18} color="#aaa"/>}</button>
                    </div>
                    <InputError message={errors.password_confirmation}/>
                </div>
                <PrimaryButton disabled={processing} style={{ width: "100%", justifyContent: "center", marginTop: 4 }}>
                    {processing ? "Menyimpan..." : "Simpan Password Baru"}
                </PrimaryButton>
            </form>
        </GuestLayout>
    );
}