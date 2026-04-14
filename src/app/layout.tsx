import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";

import { MainNav } from "@/components/site/MainNav";
import { SiteFooter } from "@/components/site/SiteFooter";

import "./globals.css";

const manrope = Nunito_Sans({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fraunces = Cormorant_Garamond({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The MoonCricket Grille",
  description: "MoonCricket Grille in Winter Garden, FL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="coastal-warm" className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <MainNav />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
