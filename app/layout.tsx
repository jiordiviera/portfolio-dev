import React from "react";
import type {Metadata} from "next";
import {Bricolage_Grotesque, JetBrains_Mono, Poppins} from "next/font/google";
import "./globals.css";
import {cn} from "@/utils/cn";
import GlobalProvider from "@/components/global-provider";
import { Analytics } from "@vercel/analytics/react"

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
   verification: {
        google: 'AqmcDzLsntfuyuhWPb4P3reWv0wVyKPcaImn7x0hDSM'
    },
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
         <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TN676HMC');
            `
          }}
        />
               {/* End Google Tag Manager */}
                {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7TBRH8PB79"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7TBRH8PB79');
            `
          }}
        />
        {/* End Google Analytics */}
         {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "p8sf3x8fea");
            `
          }}
        />
        {/* End Microsoft Clarity */}
      </head>
           <body className={cn(poppins.className, bricolageGrotesque.variable, jetBrainsMono.variable, 'overflow-x-hidden scroll-smooth')}>
            {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-TN676HMC"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              ></iframe>
            `
          }}
        />
        {/* End Google Tag Manager (noscript) */}
              <GlobalProvider>
                   {children}
                   </GlobalProvider>
                   <Analytics/>
        </body>
        </html>
    );
}
