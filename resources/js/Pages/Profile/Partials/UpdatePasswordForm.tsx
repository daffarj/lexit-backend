import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { useRef } from 'react';

const F = "'Nunito', sans-serif";

export default function UpdatePasswordForm({ className = '' }: { className?: string }) {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);
    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({ current_password: '', password: '', password_confirmation: '' });

    const updatePassword = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors: any) => {
                if (errors.password) { reset('password', 'password_confirmation'); passwordInput.current?.focus(); }
                if (errors.current_password) { reset('current_password'); currentPasswordInput.current?.focus(); }
            },
        });
    };

    return (
        <section className={className}>
            <div style={{ marginBottom: 20 }}>
                <h2 style={{ fontSize: 20, fontWeight: 900, color: "#1A1A2E", margin: 0, marginBottom: 6, fontFamily: F }}>Ubah Password</h2>
                <p style={{ fontSize: 14, color: "#666", fontWeight: 600, fontFamily: F }}>Gunakan password yang kuat dan unik untuk keamanan akunmu.</p>
            </div>

            <form onSubmit={updatePassword} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div>
                    <InputLabel htmlFor="current_password" value="Password Saat Ini"/>
                    <TextInput id="current_password" ref={currentPasswordInput} type="password" value={data.current_password} onChange={e => setData('current_password', e.target.value)} autoComplete="current-password"/>
                    <InputError message={errors.current_password}/>
                </div>
                <div>
                    <InputLabel htmlFor="password" value="Password Baru"/>
                    <TextInput id="password" ref={passwordInput} type="password" value={data.password} onChange={e => setData('password', e.target.value)} autoComplete="new-password"/>
                    <InputError message={errors.password}/>
                </div>
                <div>
                    <InputLabel htmlFor="password_confirmation" value="Konfirmasi Password Baru"/>
                    <TextInput id="password_confirmation" type="password" value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)} autoComplete="new-password"/>
                    <InputError message={errors.password_confirmation}/>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <PrimaryButton disabled={processing}>{processing ? "Menyimpan..." : "Perbarui Password"}</PrimaryButton>
                    <Transition show={recentlySuccessful} enter="transition ease-in-out" enterFrom="opacity-0" leave="transition ease-in-out" leaveTo="opacity-0">
                        <p style={{ fontSize: 14, color: "#16A34A", fontWeight: 700, fontFamily: F }}>Password berhasil diperbarui!</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}