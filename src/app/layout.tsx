import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  title: "Omnifood – Healthy AI-Powered Meal Subscriptions",
  description:
    "Omnifood is a smart, AI-powered 365-day food subscription that helps you eat healthy every day. Personalized meals, delivered to your door.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.png",
  },
  keywords: [
    "Omnifood",
    "Healthy Meals",
    "AI Food Subscription",
    "Meal Plan",
    "Organic Food",
    "Food Delivery",
    "Weight Loss Meals",
    "Custom Diet",
  ],
  authors: [
    {
      name: "Omnifood Team",
      url: "https://omnifood-3sit.vercel.app/",
    },
  ],
  creator: "Omnifood",
  metadataBase: new URL("https://omnifood-3sit.vercel.app/"),
  openGraph: {
    title: "Omnifood – AI-Powered Healthy Food Subscription",
    description:
      "Never cook again! Omnifood AI plans and delivers your personalized meals every day of the year. 100% organic, reusable packaging, and tailored to your taste.",
    url: "https://omnifood-3sit.vercel.app/",
    siteName: "Omnifood",
    images: [
      {
        url: "/og-image.png", // Jangan lupa ganti
        width: 1200,
        height: 630,
        alt: "Omnifood meal delivery preview image",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasbi Fauzun - Full Stack Web Developer",
    description:
      "Welcome to Hasbi's portfolio. See the latest full stack web projects built with modern technologies.",
    images: ["/og-image.png"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
