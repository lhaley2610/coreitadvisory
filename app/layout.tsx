'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from './context/LanguageContext'
import LanguageSwitcher from './components/LanguageSwitcher'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoreIT Advisory - IT-Strategie & Digitale Transformation",
  description: "Ihr Partner für IT-Strategie, digitale Transformation und innovative Technologien",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          <LanguageSwitcher />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
