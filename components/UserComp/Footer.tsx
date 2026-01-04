'use client';

import { playfair } from "@/lib/fonts/font";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

export default function Footer() {

  const pathname = usePathname()

  if(pathname.startsWith("/admin-dashboard")){
    return <footer>
      <p className="text-center py-2 ">&copy; {new Date().getFullYear()} saba writes. All rights reserved.</p>
    </footer>
  }
  
  return (
    <footer className="text-gray-800 bg-white  mt-12 relative">
      <div className="max-w-7xl z-40 mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="space-y-4 z-30 relative">
          <h6 className={`${playfair.className} text-[27px] sm:text-4xl`}>Saba <span className='italic font-semibold'>Writes</span></h6>
          <p className="text-black">
            A lifestyle & beauty blog celebrating elegance, wellness, and feminine energy.
          </p>
        </div>

        <div className="flex flex-col space-y-3 mt-2 z-30">
          <h6 className="text-lg font-semibold mb-4">Social Links</h6>
          <div className="flex gap-6">
            <Link className="text-2xl" aria-label="instagram link" href={"#"}><FaInstagram name="instagram" aria-label="instagram" /></Link>
            <Link className="text-2xl" aria-label="facebook link" href={"#"}><FaFacebook name="facebook" aria-label="facebook" /></Link>
            <Link className="text-2xl" aria-label="pinterest link" href={"#"}><FaPinterest name="pinterest" aria-label="pinterest" /></Link>
          </div>
        </div>

        <div>
          <h6>Quick Links</h6>
          <Link href={"/privacy-policy"}>Privacy Policy</Link>
          <Link href={"/terms-and-condition"}>Terms And Condition</Link>
          <Link href={"/disclaimer"}>Disclaimer</Link>
          <Link href={"/cookie-policy"}>Cookies Policy</Link>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 py-4 text-center text-black text-sm">
        &copy; {new Date().getFullYear()} saba writes. All rights reserved.
      </div>
    </footer>
  );
}
