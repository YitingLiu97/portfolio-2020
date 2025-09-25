import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Analytics from "@/components/Analytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yiting Liu - Award-winning Creative Technologist in XR and AI",
  description: "With a background in XR development and creative tech, I create interactive experiences that blend art and technology. My work ranges from VR mental health tools to AI-driven music video generation, always focusing on meaningful and memorable experiences.",
  keywords: "creative technology, XR, AR, VR, interactive design, Unity, web development",
  authors: [{ name: "Yiting Liu" }],
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "Yiting Liu - Award-winning Creative Technologist in XR and AI",
    description: "With a background in XR development and creative tech, I create interactive experiences that blend art and technology.",
    url: "https://www.yitingliu.com",
    siteName: "Yiting Liu Portfolio",
    images: [
      {
        url: "https://www.yitingliu.com/profile_square.jpg",
        width: 300,
        height: 200,
      },
    ],
    locale: "en_US",
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
      <body className={`${inter.variable} antialiased`}>
        <Analytics />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
