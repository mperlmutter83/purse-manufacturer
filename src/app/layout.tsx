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
  title: {
    default: "Purse Manufacturer | Custom Handbag Manufacturing",
    template: "%s | Purse Manufacturer",
  },
  description: "Experts in purse and handbag manufacturing. From concept to production, we transform your handbag ideas into high-quality products ready for market success.",
  keywords: ["purse manufacturer", "handbag manufacturing", "custom handbags", "private label bags", "bag production", "purse design", "handbag prototyping"],
  openGraph: {
    title: "Purse Manufacturer | Custom Handbag Manufacturing",
    description: "Experts in purse and handbag manufacturing. From concept to production, we transform your handbag ideas into high-quality products.",
    url: "https://pursemanufacturer.com",
    siteName: "Purse Manufacturer",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Purse Manufacturer | Custom Handbag Manufacturing",
    description: "Experts in purse and handbag manufacturing. From concept to production.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Purse Manufacturer",
              "description": "Experts in the world of purse and handbag manufacturing. From concept to production, we transform your handbag ideas into high-quality products.",
              "url": "https://pursemanufacturer.com",
              "telephone": "+1-818-855-5821",
              "email": "info@pursemanufacturer.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "17119 Lassen St",
                "addressLocality": "Northridge",
                "addressRegion": "CA",
                "postalCode": "91325",
                "addressCountry": "US"
              },
              "sameAs": [],
              "serviceType": ["Handbag Manufacturing", "Purse Design", "Prototyping", "Private Label Production"]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
