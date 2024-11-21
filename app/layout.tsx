import type { Metadata } from "next";
import { FONT_NOTOSANSKR } from "@/public/assets/fonts/index";
import "@/public/styles/globals.css";

export const metadata: Metadata = {
    title: "TODO-BOARD 만들기",
    description: "Shadcn UI 및 Supabase를 활용한 나만의 TODO-BOARD 만들기",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={FONT_NOTOSANSKR.className}>{children}</body>
        </html>
    );
}
