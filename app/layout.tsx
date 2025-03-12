import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asiful Ahsan | Portfolio",
  description: "A front-end portfolio built with Next.js, TypeScript, Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-800`}>
        <nav className="p-4 bg-emerald-900 text-white sticky top-0 shadow-md z-10">
          <div className="max-w-4xl mx-auto flex justify-between items-center px-8">
            <Link href="#home" className="text-xl font-bold">
              Asiful Ahsan
            </Link>
            <div className="space-x-6">
              <Link href="#home" className="hover:underline">
                Home
              </Link>
              <Link href="#about" className="hover:underline">
                About
              </Link>
              <Link href="#contact" className="hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </nav>
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-200 text-center py-4 text-gray-600">
          © 2025 Asiful Ahsan | Built with Next.js
        </footer>
      </body>
    </html>
  );
}