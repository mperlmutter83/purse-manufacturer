import type { Metadata } from "next";
import { Abril_Fatface, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-abril",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pursemanufacturer.com"),
  title:
    "Purse Manufacturer | Experts in the world of purse and handbag manufacturing",
  description:
    "Purse Manufacturer transforms your handbag concepts into high-quality products. Custom design, prototyping, and full-scale production for brands of all sizes. Call (818) 855-5821.",
  openGraph: {
    siteName: "Purse Manufacturer",
    locale: "en_US",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Purse Manufacturer",
  url: "https://pursemanufacturer.com",
  telephone: "(818) 855-5821",
  email: "info@pursemanufacturer.com",
  logo: "https://pursemanufacturer.com/images/logo.png",
  image: "https://pursemanufacturer.com/images/hero.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "17119 Lassen St",
    addressLocality: "Northridge",
    addressRegion: "CA",
    postalCode: "91325",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${abril.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
