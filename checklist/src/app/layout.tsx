import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Caprasimo } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const alfaSlabOne = Caprasimo({
  variable: "--font-caprasimo",
  subsets: ["latin"],
  weight: "400",
});


export const metadata: Metadata = {
  title: "Cheng Checker",
  description: "Checklsit for Daniel Cheng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${alfaSlabOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
