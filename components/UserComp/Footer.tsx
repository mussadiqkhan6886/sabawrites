import { blogCategories } from "@/lib/constants";
import { playfair } from "@/lib/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{backgroundImage: `URL(${"/footer.jpg"})`, backgroundPosition: "bottom", backgroundSize:"cover"}} className="text-gray-800  mt-12 relative">
      <div className="absolute inset-0 w-full h-full bg-white/40" />
      <div className="max-w-7xl z-40 mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2  gap-8">
        {/* Brand */}
        <div className="space-y-4 z-30 relative">
          <h6 className={`${playfair.className} text-[27px] sm:text-4xl`}>Saba <span className='italic font-semibold'>Writes</span></h6>
          {/* <Image src={"/spin.svg"} alt="spin image footer" width={50} height={50} className="spinAnimation absolute -top-4 left-30 md:right-17" /> */}
          <p className="text-black">
            A lifestyle & beauty blog celebrating elegance, wellness, and feminine energy.
          </p>
        </div>

        {/* Quick Links
        <div className="md:ml-10 z-30">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-black">
            <li><a href="/" className="hover:text-pink-500 transition">Home</a></li>
            <li><a href="/about" className="hover:text-pink-500 transition">About</a></li>
            <li><a href="/contact" className="hover:text-pink-500 transition">Contact</a></li>
            <li><a href="/blog" className="hover:text-pink-500 transition">Blog</a></li>
          </ul>
        </div> */}

        {/* Categories
        <div className="z-30">
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-black">
            {blogCategories.slice(0, 5).map((category) => (
              <li key={category.id}>
                <a href={category.link} className="hover:text-pink-500 transition">{category.name}</a>
              </li>
            ))}
          </ul>
        </div> */}

          <div className="flex flex-col space-y-3 mt-2 z-30">
            <h6 className="text-lg font-semibold mb-4">Social Links</h6>
            <div className="flex gap-6">
              <Link className="text-2xl" href={"#"}><FaInstagram /></Link>
              <Link className="text-2xl" href={"#"}><FaFacebook /></Link>
              <Link className="text-2xl" href={"#"}><FaPinterest /></Link>
            </div>
          </div>
      </div>

      <div className="border-t border-gray-300 mt-8 py-4 text-center text-black text-sm">
        &copy; {new Date().getFullYear()} saba writes. All rights reserved.
      </div>
    </footer>
  );
}
