import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';

const F = "'Nunito', sans-serif";

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }: { mustVerifyEmail?: boolean; status?: string; className?: string }) {
    const user = (usePage().props as any).auth.user;
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({ name: user.name, email: user.email });
    const submit = (e: React.FormEvent) => { e.preventDefault(); patch(route('profile.update')); };

    return (
        <section className={className}>
            <div style={{ marginBottom: 20 }}>
                <h2 style={{ fontSize: 20, fontWeight: 900, color: "#1A1A2E", margin: 0, marginBottom: 6, fontFamily: F }}>Informasi Profil</h2>
                <p style={{ fontSize: 14, color: "#666", fontWeight: 600, fontFamily: F }}>Perbarui nama dan email akun kamu.</p>
            </div>

            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div>
                    <InputLabel htmlFor="name" value="Nama"/>
                    <TextInput id="name" value={data.name} onChange={e => setData('name', e.target.value)} required isFocused autoComplete="name"/>
                    <InputError message={errors.name}/>
                </div>
                <div>
                    <InputLabel htmlFor="email" value="Email"/>
                    <TextInput id="email" type="email" value={data.email} onChange={e => setData('email', e.target.value)} required autoComplete="username"/>
                    <InputError message={errors.email}/>
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div style={{ padding: "12px 16px", background: "#FFF8E1", border: "3px solid #FFE566", borderRadius: 14 }}>
                        <p style={{ fontSize: 14, color: "#666", fontWeight: 600, fontFamily: F }}>
                            Email belum terverifikasi.{' '}
                            <Link href={route('verification.send')} method="post" as="button"
                                style={{ color: "#FF6B6B", fontWeight: 800, background: "none", border: "none", cursor: "pointer", fontFamily: F, fontSize: 14 }}>
                                Kirim ulang email verifikasi
                            </Link>
                        </p>
                        {status === 'verification-link-sent' && (
                            <p style={{ fontSize: 13, color: "#16A34A", fontWeight: 700, marginTop: 8, fontFamily: F }}>Link verifikasi baru sudah dikirim!</p>
                        )}
                    </div>
                )}

                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <PrimaryButton disabled={processing}>{processing ? "Menyimpan..." : "Simpan Perubahan"}</PrimaryButton>
                    <Transition show={recentlySuccessful} enter="transition ease-in-out" enterFrom="opacity-0" leave="transition ease-in-out" leaveTo="opacity-0">
                        <p style={{ fontSize: 14, color: "#16A34A", fontWeight: 700, fontFamily: F }}>Tersimpan!</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}