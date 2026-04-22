// resources/js/Layouts/AppLayout.tsx
import { ReactNode } from "react";
import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";

interface Props {
    children: ReactNode;
}

export default function AppLayout({ children }: Props) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}
