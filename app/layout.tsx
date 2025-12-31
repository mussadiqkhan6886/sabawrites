import type { Metadata } from "next";
import "./globals.css";
import { quicksand } from "@/lib/fonts/font";
import Header from "@/components/UserComp/Header";
import Footer from "@/components/UserComp/Footer";


export const metadata: Metadata = {
  metadataBase: new URL("https://sabawrites.vercel.app"),

  title: {
    default: "Saba Writes | Fashion, Beauty & Lifestyle Blog",
    template: "%s | Saba Writes",
  },

  description:
    "Saba Writes is a fashion, beauty, makeup, skincare and lifestyle blog sharing trends, tips, personal stories and inspiration for modern women.",

  keywords: [
    "Saba Writes",
    "fashion blog",
    "beauty blog",
    "makeup blog",
    "skincare tips",
    "lifestyle blog",
    "women fashion",
    "wardrobe ideas",
    "self care",
    "feminine lifestyle",
    "Pakistani fashion blog",
  ],

  authors: [
    {
      name: "Saba",
      url: "https://sabawrites.vercel.app/about",
    },
  ],

  creator: "Mussadiq Khan",
  publisher: "Saba Writes",

  category: "Fashion & Lifestyle",

  alternates: {
    canonical: "https://sabawrites.vercel.app",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Saba Writes | Fashion, Beauty & Lifestyle",
    description:
      "Explore fashion trends, makeup tips, skincare routines and lifestyle stories curated by Saba.",
    url: "https://sabawrites.vercel.app",
    siteName: "Saba Writes",
    images: [
      {
        url: "/makeup.png",
        width: 1200,
        height: 630,
        alt: "Saba Writes – Fashion & Beauty Blog",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Saba Writes | Fashion & Beauty Blog",
    description:
      "Daily fashion, beauty, skincare and lifestyle blogs for modern women.",
    images: ["/makeup.png"],
    creator: "@sabawrites",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },

  // manifest: "/site.webmanifest",

  // verification: {
  //   google: "GOOGLE_SEARCH_CONSOLE_CODE",
  // },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
