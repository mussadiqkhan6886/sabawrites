import { playfair } from "@/lib/fonts/font";
import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 relative">
      
       <Image src={"/flower-5.png"} alt="flower in end about me" width={1000} height={1000} className="w-full h-full " />
      {/* Heading */}
      <h1 className={`text-4xl ${playfair.className} font-bold mb-10 text-center`}>
        About Me
      </h1>

      {/* Content */}
      <div className="text-gray-700 leading-relaxed text-lg">

        {/* Image */}
        <Image
          src="/makeup-5.jpg" // change image path
          alt="Saba"
          width={360}
          height={360}
          className="
            mb-6
            w-full
            object-cover object-left
            lg:w-[600px]
            lg:h-[600px]
            lg:float-left
            lg:mr-8
            lg:mb-4
          "
        />

        {/* Paragraphs */}
        <p>
          That’s me, the girl who on one hand easily spends hours watching skincare
          TikTok videos, putting 10 items into her Amazon cart, and then
          contemplating for another hour which item she really needs (hint: most
          of the time all of them).
        </p>

        <p className="mt-4">
          During the day, I am a part-time content writer who mostly types words
          that (hopefully) have some sense, and during the night, I usually get
          overwhelmed with skincare + makeup reviews, Pinterest boards, and beauty
          wishlists that I have totally lost control of. 😅
        </p>

        <p className="mt-4">
          This tiny bit of the web is where I feel happiest, a place of my beauty,
          skincare, and all the little things that give us that good feeling in
          our own skin. I am not pretending to be a professional or telling you
          what you “must” purchase. I am simply showing the things that I really
          love, what’s in vogue, and what has kept my wishlist haunted for months.
        </p>

        <p className="mt-4">
          At times, I think of myself as the present-day narrator of the
          Bridgerton series, only instead of indulging in the gossip of the royal
          and the new society, I’m sharing the intel of the lip masks 💋,
          highlighters ✨ and the moisturizers. 😌
        </p>

        <p className="mt-4">
          In case you are a fan of glowy skin, soft vibes, truthful talk, and the
          rare “I found this on Amazon at 2 a.m.” incident, then you are at the
          perfect place.
        </p>

        <p className="mt-4">
          It is here we honor self-care that is uncomplicated, warm, and genuine.
          Viral beauty, skincare routines, or just the delight of discovering
          something that makes you smile when you look in the mirror, I am on
          your side with every case.
        </p>

        <p className="mt-4">
          So, take your preferred drink, wear your coziest hoodie, and let us get
          into everything that has to do with glow-up, Amazon finds, and
          self-love. 💕
        </p>

        <p className="mt-4">
          Actually, skincare and makeup 💄 should not be a drag, it should be a
          treat.
        </p>

        <p className="mt-6 font-medium">
          Love,<br />
          Saba
        </p>

        {/* Clear float */}
        <div className="clear-both"></div>
      </div>
           
    </section>
  );
}
