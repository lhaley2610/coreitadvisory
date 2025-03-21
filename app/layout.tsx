import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from './components/ClientLayout'

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
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
