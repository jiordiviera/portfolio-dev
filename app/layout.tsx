import React from "react";
import type {Metadata} from "next";
import {Bricolage_Grotesque, JetBrains_Mono, Poppins} from "next/font/google";
import "./globals.css";
import {Header} from "@/app/_components/Header";
import {MobHeader} from "@/app/_components/MobHeader";
import {ThemeProvider} from "@/components/theme-provider";
import {cn} from "@/utils/cn";
import {Toaster} from "@/components/ui/sonner";

const poppins = Poppins(
    {
        weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
        style: ["normal"],
        subsets: ["latin"],
        variable: "--font-poppins"
    });
const bricolageGrotesque = Bricolage_Grotesque(
    {
        weight: ["200", "300", "400", "500", "600", "700", "800"],
        style: ["normal"],
        variable: "--font-heading",
        subsets: ["latin"]
    });
const jetBrainsMono = JetBrains_Mono(
    {
        subsets: ['latin'],
        variable: "--font-mono"
    },
)


export const metadata: Metadata = {
    description: "I am jiordi viera",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={cn(poppins.className, bricolageGrotesque.variable, jetBrainsMono.variable,'overflow-x-hidden' +
            ' scroll-smooth')}>
        <ThemeProvider attribute="class">
            <Header/>
            <MobHeader/>
            {children}
        </ThemeProvider>
        <Toaster/>
        </body>
        </html>
    );
}
