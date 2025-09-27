import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Analytics from "@/components/Analytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, absoluteUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Yiting Liu - Award-winning Creative Technologist in XR and AI",
  description: "With a background in XR development and creative tech, I create interactive experiences that blend art and technology. My work ranges from VR mental health tools to AI-driven music video generation, always focusing on meaningful and memorable experiences.",
  keywords: "creative technology, XR, AR, VR, interactive design, Unity, web development",
  authors: [{ name: "Yiting Liu" }],
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Yiting Liu - Award-winning Creative Technologist in XR and AI",
    description: "With a background in XR development and creative tech, I create interactive experiences that blend art and technology.",
    url: SITE_URL,
    siteName: "Yiting Liu Portfolio",
    images: [
      {
        url: absoluteUrl(DEFAULT_OG_IMAGE)!,
        width: 1200,
        height: 630,
        alt: "Portrait of Yiting Liu",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yiting Liu - Award-winning Creative Technologist in XR and AI",
    description: "With a background in XR development and creative tech, I create interactive experiences that blend art and technology.",
    images: [absoluteUrl(DEFAULT_OG_IMAGE)!],
    creator: "@yitingliu",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Analytics />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
