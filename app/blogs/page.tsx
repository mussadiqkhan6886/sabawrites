import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/lib/constants";
import { playfair } from "@/lib/fonts/font";
import BlogCard from "@/components/UserComp/BlogCard";

const Blogs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      
      <div className="text-center mb-12 z-10">
        <h1 className={`${playfair.className} text-4xl md:text-5xl font-semibold mb-4`}>
          Our Journal
        </h1>
        <p className="max-w-2xl mx-auto">
          Thoughts on beauty, skincare, slow living, and all the little
          moments that make life softer.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 z-10">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} {...blog} />
        ))}
      </div>
      <Image src={"/flower-4.png"} alt="blogs page image flower" width={1000} height={1000} className="w-full h-full object-center object-cover fixed bottom-0 -z-10" />
    </section>
  );
};

export default Blogs;
