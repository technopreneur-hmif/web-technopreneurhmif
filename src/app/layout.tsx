import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Technopreneur HMIF — Kami Bangun Produk Digital yang Bekerja",
  description:
    "Divisi Technopreneur HMIF menawarkan layanan pengembangan web, mobile app, dan desain UI/UX berkualitas tinggi untuk UMKM, startup, dan institusi. Mulai dari landing page hingga web app custom.",
  keywords: [
    "Technopreneur HMIF",
    "jasa web developer",
    "web app Indonesia",
    "landing page",
    "company profile",
    "UI UX designer",
    "informatika",
  ],
  authors: [{ name: "Technopreneur HMIF" }],
  openGraph: {
    title: "Technopreneur HMIF — Produk Digital yang Bekerja",
    description:
      "Layanan pengembangan web & app profesional dari Divisi Technopreneur HMIF.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technopreneur HMIF",
    description: "Kami Bangun Produk Digital yang Bekerja",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

