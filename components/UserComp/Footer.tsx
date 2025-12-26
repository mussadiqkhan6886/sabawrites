import { blogCategories } from "@/lib/constants";
import { playfair } from "@/lib/fonts/font";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-pink-50 text-gray-800 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <h6 className={`${playfair.className} text-[27px] sm:text-4xl`}>Saba <span className='italic font-semibold'>Writes</span></h6>
          <p className="text-gray-600">
            A lifestyle & beauty blog celebrating elegance, wellness, and feminine energy.
          </p>
          <div className="flex space-x-3 mt-2">
            <a href="#" className="text-pink-600 hover:text-pink-400 transition">Instagram</a>
            <a href="#" className="text-pink-600 hover:text-pink-400 transition">Facebook</a>
            <a href="#" className="text-pink-600 hover:text-pink-400 transition">Pinterest</a>
            <a href="#" className="text-pink-600 hover:text-pink-400 transition">Twitter</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="ml-10">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/" className="hover:text-pink-500 transition">Home</a></li>
            <li><a href="/about" className="hover:text-pink-500 transition">About</a></li>
            <li><a href="/contact" className="hover:text-pink-500 transition">Contact</a></li>
            <li><a href="/blog" className="hover:text-pink-500 transition">Blog</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-600">
            {blogCategories.slice(0, 5).map((category) => (
              <li key={category.id}>
                <a href={category.link} className="hover:text-pink-500 transition">{category.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-600 mb-4">
            Subscribe to get the latest posts, beauty tips, and lifestyle inspiration.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 flex-1"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 mt-8 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} saba writes. All rights reserved.
      </div>
    </footer>
  );
}
