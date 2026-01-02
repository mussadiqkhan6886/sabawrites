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
          That’s me, the girl who on one hand easily spends hours watching skincare
          TikTok videos, putting 10 items into her Amazon cart, and then
          contemplating for another hour which item she really needs.
        </p>

        <p className="mt-4">
          During the day, I am a part-time content writer who mostly types words
          that (hopefully) have some sense, and during the night, I usually get
          overwhelmed with skincare and makeup reviews.
        </p>

        <p className="mt-4">
          This tiny bit of the web is where I feel happiest, a place of my beauty,
          skincare, and all the little things that give us that good feeling in
          our own skin.
        </p>

        <p className="mt-4">
          At times, I think of myself as the present-day narrator of the
          Bridgerton series — only instead of gossip, I share intel on lip masks,
          highlighters, and moisturizers.
        </p>

        <p className="mt-4">
          In case you are a fan of glowy skin, soft vibes, truthful talk, and the
          rare “I found this on Amazon at 2 a.m.” incident, then you are at the
          perfect place.
        </p>

        <p className="mt-6 font-medium">
          Love,<br />
          Saba
        </p>

        <div className="clear-both" />
      </article>
    </main>
  );
}


