import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Arbutus_Slab, Poppins } from "next/font/google";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalitics";
import { Partytown } from "@builder.io/partytown/react";
import Script from "next/script";

const arbutus = Arbutus_Slab({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-arbutus",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Villa Panorama",
  description:
    "Welcome to Villa Panorama, your luxurious accommodation in Istria. Experience breathtaking views, modern amenities, and personalized service. ⭐⭐⭐⭐⭐",
  icons: {
    icon: "/assets/images/logo.png",
  },
  generator: "Next.js",
  applicationName: "Accommodation Villa Panorama",
  referrer: "origin-when-cross-origin",
  keywords: ["Accommodation", "Villa Panorama", "Istria", "Croatia"],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    type: "website",
    title: "Accommodation Villa Panorama - Istria",
    description:
      "Welcome to Villa Panorama, your luxurious accommodation in Istria. Experience breathtaking views, modern amenities, and personalized service. ⭐⭐⭐⭐⭐",
    url: "https://villapanoramaistria.com",
  },
  twitter: {
    card: "summary_large_image",
    // site: "@YourTwitterHandle",
    title: "Accommodation Villa Panorama - Istria",
    description:
      "Welcome to Villa Panorama, your luxurious accommodation in Istria. Experience breathtaking views, modern amenities, and personalized service. ⭐⭐⭐⭐⭐",
    images: [
      {
        url: "https://www.villapanoramaistria.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F27.92c57344.jpg&w=3840&q=75",
        alt: "Villa Panorama",
      },
    ],
  },
  authors: [
    { name: "Boost Web" },
    { name: "Boost Web", url: "https://boostweb.io" },
  ],
  creator: "Boost Web",
  publisher: "Boost Web",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <html lang={locale}>
        <GoogleAnalytics />
        <Head>
          <Partytown debug={true} forward={["dataLayer.push"]} />
          <Script
            src="/_next/static/chunks/fd9d1056-686591216e0936c1.js"
            type="text/partytown"
          ></Script>
          <Script
            src="/_next/static/chunks/69-3b7a27a34904e331.js"
            type="text/partytown"
          ></Script>
          <Script
            src="/_next/static/chunks/main-app-a91ab301754ae529.js"
            type="text/partytown"
          ></Script>
          <Script
            src="/_next/static/chunks/bc9c3264-078848876db9e6e7.js"
            type="text/partytown"
          ></Script>
          <Script
            src="/_next/static/chunks/9081a741-289d202b19f579c4.js"
            type="text/partytown"
          ></Script>
          <Script
            src="/_next/static/chunks/12038df7-875ac13ac71eb02d.js"
            type="text/partytown"
          ></Script>
          <Script
            src="/_next/static/chunks/4f9d9cd8-d71d947714713c9a.js"
            type="text/partytown"
          ></Script>
          <Script
            src="/_next/static/chunks/b5c10047-b7d844d8d5a79f81.js"
            type="text/partytown"
          ></Script>
          <Script
            src="/_next/static/chunks/358ff52d-c2171dcb04801515.js"
            type="text/partytown"
          ></Script>
          <Script
            src="/_next/static/chunks/4cb6dfa8-6f4246661de80c85.js"
            type="text/partytown"
          ></Script>
          <Script
            src="/_next/static/chunks/522-543e1f5c7c1f0753.js"
            type="text/partytown"
          ></Script>
          <Script
            src="/_next/static/chunks/703-32a69bd4f262ad9a.js"
            type="text/partytown"
          ></Script>
          <Script
            src="/_next/static/chunks/602-3a12f8f5addb34d2.js"
            type="text/partytown"
          ></Script>
          <Script
            src="/_next/static/chunks/155-133665824bc93ae1.js"
            type="text/partytown"
          ></Script>
          <Script
            src="/_next/static/chunks/723-5dc9894e6d9b809c.js"
            type="text/partytown"
          ></Script>
          <Script
            src="/_next/static/chunks/531-2c643b4cd1baf2bc.js"
            type="text/partytown"
          ></Script>
          <Script
            src="/_next/static/chunks/941-3ed1971962f7ff6b.js"
            type="text/partytown"
          ></Script>
          <Script
            src="/_next/static/chunks/app/%5Blocale%5D/page-9d2afbf166ac0cb0.js"
            type="text/partytown"
          ></Script>
          <Script
            src="/_next/static/chunks/390-38ab80b49230933b.js"
            type="text/partytown"
          ></Script>
          <Script
            src="/_next/static/chunks/710-c36a78b30921e379.js"
            type="text/partytown"
          ></Script>
          <Script
            src="/_next/static/chunks/app/%5Blocale%5D/layout-03a2249a06581fc9.js"
            type="text/partytown"
          ></Script>
          <Script
            src="/_next/static/chunks/app/not-found-4957bce621856fb8.js"
            type="text/partytown"
          ></Script>
        </Head>
        <body
          className={`${poppins.variable} font-poppins ${arbutus.variable} font-arbutus`}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
