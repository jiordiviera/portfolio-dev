import React from "react";
import type {Metadata} from "next";
import {Bricolage_Grotesque, JetBrains_Mono, Poppins} from "next/font/google";
import "./globals.css";
import {cn} from "@/utils/cn";
import GlobalProvider from "@/components/global-provider";

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
  title: 'Jiordi Viera | Fullstack Laravel Developer',
  description: 'Portfolio of Jiordi Viera, a passionate fullstack Laravel developer specializing in web development and database design.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devjiordi.vercel.app',
    siteName: 'Jiordi Viera Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jiordi_kengne',
    creator: '@jiordi_kengne',
  },
}

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
   return (
        <html lang="en" suppressHydrationWarning>
           <body className={cn(poppins.className, bricolageGrotesque.variable, jetBrainsMono.variable, 'overflow-x-hidden scroll-smooth')}>
              <GlobalProvider>
                   {children}
                   </GlobalProvider>
        </body>
        </html>
    );
}
