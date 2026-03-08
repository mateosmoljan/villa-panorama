import React from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Arbutus_Slab, Poppins } from "next/font/google";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { getVacationRentalJsonLd, OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

const arbutus = Arbutus_Slab({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-arbutus",
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Villa Panorama",
  description:
    "Luxury villa accommodation in Istria with private pool, panoramic views, premium amenities, and easy access to local attractions.",
  icons: {
    icon: "/assets/images/logo.png",
  },
  applicationName: SITE_NAME,
  keywords: ["Accommodation", "Villa Panorama", "Istria", "Croatia"],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Villa Panorama",
    description:
      "Luxury villa accommodation in Istria with private pool, panoramic views, premium amenities, and easy access to local attractions.",
    url: SITE_URL,
    images: [{ url: OG_IMAGE, width: 1600, height: 1067, alt: "Villa Panorama" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa Panorama",
    description:
      "Luxury villa accommodation in Istria with private pool, panoramic views, premium amenities, and easy access to local attractions.",
    images: [OG_IMAGE],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const ldJson = getVacationRentalJsonLd(locale);

  return (
    <html lang={locale}>
      <body
        className={`${poppins.variable} font-poppins ${arbutus.variable} font-arbutus min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
        {process.env.NEXT_PUBLIC_MEASUREMENT_ID ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID} />
        ) : null}
      </body>
    </html>
  );
}
