import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Providers from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MelodyMind - AI Adaptive Music Learning", // Updated title
  description: "The AI-Powered Personalized Music Learning Platform.", // Updated description
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white dark`} // Force dark mode via 'dark' class
      >
        <Providers> {/* Wrap the whole app in the context provider */}
          {/* Navbar */}
          <Navbar />

          {/* Page Content: Increased padding-top for fixed navbar and better visual space */}
          <main className="pt-28 min-h-screen w-full"> 
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}