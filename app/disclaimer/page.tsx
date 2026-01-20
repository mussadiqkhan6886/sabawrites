import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Disclaimer of Saba writes, learn about Disclaimer of saba writes Blogs.",
  openGraph: {
    title: "Disclaimer | Saba Writes",
    description:
      "Disclaimer of Saba writes, learn about Disclaimer of saba writes Blogs.",
    type: "website",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Disclaimer image open graph",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | Saba Writes",
    description:
      "Disclaimer of Saba writes, learn about Disclaimer of saba writes Blogs.",
  },
};

const Page = () => {
  return (
    <main className="max-w-6xl mx-auto text-justify py-5">
      <h1 className="text-center text-3xl font-bold py-10">Disclaimer</h1>

      <section className="py-5">
        <p>
          Saba Writes is intended for educational or informational use only.
        </p>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">Beauty & Skincare Disclaimer</h2>
        <p>
          The content on this site is based on each user's personal experience, individual opinions, and research. Each person's skincare results may differ based on individual factors such as skin type, sensitivities, lifestyle, etc.
        </p>
        <p>
          You should consider performing a patch test before using any product and consult a qualified dermatologist if you have any concerns.
        </p>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">Sponsored Content</h2>
        <p>
          Some blog posts on this site include sponsored content or affiliate links, where we receive a small commission at no additional cost to you. We always clearly indicate when content is sponsored or includes affiliate links.
        </p>
      </section>

      <section className="py-5">
        <h2 className="text-xl font-semibold py-2">No Professional Medical, Dermatological, or Professional Advice</h2>
        <p>
          All content available on this site is not intended to be used for healthcare, dermatological, medical, or professional recommendations.
        </p>
      </section>
    </main>
  );
};

export default Page;
