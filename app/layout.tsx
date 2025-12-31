import type { Metadata } from "next";
import "./globals.css";
import { quicksand } from "@/lib/fonts/font";
import Header from "@/components/UserComp/Header";
import Footer from "@/components/UserComp/Footer";

export const metadata: Metadata = {
  title: {
    default: "Saba Writes | Fashion Blogs",
    template: "%s",
  },
  description: "Discover fashion, makeup and skin care or lifestyle blogs by Saba",
  keywords: [
    "blogs", "lifestyle"
  ],
  authors: [
    { name: "saba writes", url: "https://sabawrites.vercel.app" }
  ],
  creator: "Mussadiq Khan",
  publisher: "Sabawrites Blog",
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
    title: "Saba Writes | Fashion, Beauty Blogs",
    description: "Discover fashion, makeup and skin care or lifestyle blogs by Saba.",
    url: "https://sabawrites.vercel.app",
    siteName: "Saba Writes",
    images: [
      {
        url: "/makeup.png",
        width: 1200,
        height: 630,
        alt: "SabaWrites Preview",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SabaWrites Blog",
    description: "Daily Blogs about lifestyle, beauty, makeup and wardrobe",
    images: ["/makeup.png"],
    creator: "@sabawrites",
  },
  icons: {
    icon: "/makeup.png",
    shortcut: "/makeup.png",
    apple: "/makeup.png",
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
        className={`${quicksand.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
