import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sama Alnukhba IT | Elevating Brands to the Digital Sky",
  description:
    "Dubai-based IT company offering web development, app development, and digital marketing. Creators of Asli UAE delivery app.",
  keywords:
    "IT services Dubai, web development UAE, app development Dubai, digital marketing, Asli UAE, delivery app Dubai",
  openGraph: {
    title: "Sama Alnukhba Information Technology LLC",
    description:
      "Elevating Brands to the Digital Sky. Web development, app development, and digital marketing from Dubai.",
    url: "https://nukhbatech.com",
    siteName: "Nukhba Tech",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
