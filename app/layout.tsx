import type { Metadata } from "next";
import "./globals.css";


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
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
