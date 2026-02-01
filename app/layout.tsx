import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as requested for premium look
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zealix - AI Development & Product Engineering",
  description: "We build ideas into scalable AI-powered products. Partner with Zealix to build web apps, mobile apps, and AI solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="font-sans antialiased"
        style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
