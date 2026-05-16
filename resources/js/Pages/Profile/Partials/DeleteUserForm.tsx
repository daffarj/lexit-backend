import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';
import { AlertTriangle } from 'lucide-react';

const F = "'Nunito', sans-serif";

export default function DeleteUserForm({ className = '' }: { className?: string }) {
    const [confirming, setConfirming] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);
    const { data, setData, delete: destroy, processing, reset, errors, clearErrors } = useForm({ password: '' });

    const deleteUser = (e: React.FormEvent) => {
        e.preventDefault();
        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => { setConfirming(false); clearErrors(); reset(); };

    return (
        <section className={className}>
            <div style={{ marginBottom: 20 }}>
                <h2 style={{ fontSize: 20, fontWeight: 900, color: "#CC4444", margin: 0, marginBottom: 6, fontFamily: F }}>Hapus Akun</h2>
                <p style={{ fontSize: 14, color: "#666", fontWeight: 600, fontFamily: F }}>Setelah dihapus, semua data akunmu akan hilang permanen dan tidak bisa dikembalikan.</p>
            </div>

            <button onClick={() => setConfirming(true)} style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 24px", background: "#FFF0F0", color: "#CC4444",
                border: "3px solid #FFAAAA", borderRadius: 999,
                fontWeight: 900, fontSize: 14, cursor: "pointer",
                boxShadow: "0 4px 0 #FFAAAA", fontFamily: F,
            }}>
                <AlertTriangle size={16}/> Hapus Akun Saya
            </button>

            {/* Confirmation Modal */}
            {confirming && (
                <div style={{
                    position: "fixed", inset: 0, zIndex: 1000,
                    background: "rgba(0,0,0,0.5)", display: "flex",
                    alignItems: "center", justifyContent: "center", padding: 24,
                }}>
                    <div style={{
                        background: "white", borderRadius: 28, padding: "36px 32px",
                        maxWidth: 480, width: "100%",
                        border: "3px solid #FFAAAA",
                        boxShadow: "0 10px 0 #CC4444, 0 16px 40px rgba(0,0,0,0.2)",
                        fontFamily: F,
                    }}>
                        <div style={{ textAlign: "center", marginBottom: 24 }}>
                            <div style={{ width: 72, height: 72, background: "#FFF0F0", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", border: "3px solid #FFAAAA" }}>
                                <AlertTriangle size={36} color="#CC4444"/>
                            </div>
                            <h3 style={{ fontSize: 20, fontWeight: 900, color: "#1A1A2E", margin: 0, marginBottom: 8 }}>Yakin hapus akun?</h3>
                            <p style={{ fontSize: 14, color: "#666", fontWeight: 600, lineHeight: 1.6 }}>
                                Tindakan ini tidak bisa dibatalkan. Masukkan password untuk konfirmasi.
                            </p>
                        </div>

                        <form onSubmit={deleteUser} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            <div>
                                <InputLabel htmlFor="password" value="Password"/>
                                <TextInput id="password" ref={passwordInput} type="password" value={data.password} onChange={e => setData('password', e.target.value)} isFocused/>
                                <InputError message={errors.password}/>
                            </div>
                            <div style={{ display: "flex", gap: 12 }}>
                                <button type="button" onClick={closeModal} style={{ flex: 1, padding: "12px", background: "#F5F5F5", border: "3px solid #E5E7EB", borderRadius: 999, fontWeight: 900, fontSize: 14, cursor: "pointer", fontFamily: F, color: "#555", boxShadow: "0 3px 0 #E5E7EB" }}>Batal</button>
                                <button type="submit" disabled={processing} style={{ flex: 1, padding: "12px", background: "#CC4444", border: "3px solid #CC4444", borderRadius: 999, fontWeight: 900, fontSize: 14, cursor: processing ? "not-allowed" : "pointer", fontFamily: F, color: "white", boxShadow: "0 3px 0 #991111" }}>
                                    {processing ? "Menghapus..." : "Ya, Hapus"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}