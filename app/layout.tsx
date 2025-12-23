import type { Metadata } from "next";
import "./globals.css";
import { quicksand } from "@/lib/fonts/font";


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
        {children}
      </body>
    </html>
  );
}
