import { playfair } from "@/lib/fonts/font";
import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Saba, the creator behind Saba Writes – a blog dedicated to fashion, beauty, skincare, makeup, and lifestyle.",

  openGraph: {
    title: "About Me | Saba Writes",
    description:
      "Meet Saba, the voice behind Saba Writes, sharing insights on fashion, beauty, skincare, and lifestyle.",
    type: "website",
    images: [
      {
        url: "/favicon.ico",
          width: 1200,
          height: 630,
          alt: "about us image open graph",
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "About Me | Saba Writes",
    description:
      "Get to know Saba, the creator of Saba Writes, covering fashion, beauty, skincare, and lifestyle blogs.",
  },
};


export default function About() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16 min-h-screen">
      <h1
        className={`text-5xl uppercase ${playfair.className} font-bold mb-14 text-center`}
      >
        About Me
      </h1>

      <article
        className={`${playfair.className} text-justify text-black leading-relaxed text-lg`}
      >
        <Image
          src="/about-me.jpg"
          alt="About Saba Writes image"
          width={460}
          height={520}
          className="
            sm:float-right
            sm:ml-8
            mb-6
            object-cover
            
          "
          priority
        />

        <p>
          That’s me, the girl who can spend hours watching skincare TikToks, adding ten products to her Amazon cart, and then debating which one she actually needs
          (most of the time, all of them).

        </p>

        <p className="mt-4">
          Beauty, skincare, and makeup have always been more than a casual interest for me. They are routines, comforts, and little things that make everyday life feel better.
        </p>

        <p className="mt-4">
         I closely follow makeup artists, skincare creators, and beauty influencers to stay updated on new launches, viral products, and trends that are genuinely worth the hype. Many of the things you see here are part of my real wishlist, items I plan to buy, or products recommended by influencers and professionals I truly trust.
        </p>

        <p className="mt-4">
         I have also worked closely with a beauty salon, where I handled high end makeup and skincare products on a daily basis. Using luxury and professional grade products on clients gave me hands on experience with textures, finishes, and real performance, even when those products were too expensive for me to buy myself.
        </p>

        <p>That is where Saba Writes began.</p>

        <p className="mt-4">
          This blog is where I share honest beauty and skincare finds, thoughtful comparisons, trends I love, and wishlist favorites that have stayed on my radar long after the hype fades. I am not here to tell you what you must buy, only to share what I genuinely like, trust, or hope to own someday.
          <br />
          <br />
          Some links on this site are affiliate links, which means I may earn a small commission at no extra cost to you. I only share products I genuinely like, trust, or would recommend to a friend.
          <br />
          <br />
          At times, I like to think of myself as a present day Bridgerton narrator, only instead of society gossip, I am sharing the inside intel on lip masks 💋, glow boosting highlighters ✨, and moisturizers that actually deliver.
          <br />
          <br />
          If you love glowy skin, soft vibes, honest talk, and the occasional “I found this on Amazon at 2 a.m.” moment, you are exactly where you belong.
          <br />
          <br />
          Because skincare and makeup should feel like a treat, not a chore.

        </p>

        <p className="mt-6 font-medium">
          Love,<br />
          <span className="font-semibold">Saba</span>
        </p>

        <div className="clear-both" />
      </article>
    </main>
  );
}


