import type { Metadata } from "next";
import { quicksand } from "@/lib/fonts/font";


export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <body
        className={`${quicksand.className} antialiased`}
      >
        {children}
      </body>
  );
}
