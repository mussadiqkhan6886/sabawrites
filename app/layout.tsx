import type { Metadata } from "next";
import "./globals.css";
import { quicksand } from "@/lib/fonts/font";
import Header from "@/components/UserComp/Header";
import Footer from "@/components/UserComp/Footer";


export const metadata: Metadata = {
  title: "Saba Writes | Fashion Blogs",
  description: "Discover fashion, makeup and skin care or lifestyle blogs by Saba",
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
