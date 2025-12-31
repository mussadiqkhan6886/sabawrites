import React from "react";
import Image from "next/image";
import Link from "next/link";
import { playfair } from "@/lib/fonts/font";
import BlogCard from "@/components/UserComp/BlogCard";
import { connectDB } from "@/lib/database";
import BlogSchema from "@/lib/schema/BlogSchema";
import { Blog } from "@/type";

export const revalidate = 60

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    " Thoughts on beauty, skincare, slow living, and all the little moments that make life softer.",

  keywords: [
    "blog categories",
    "fashion blogs",
    "beauty blogs",
    "makeup blogs",
    "skincare blogs",
    "lifestyle blogs",
    "Saba Writes",
    "blogs",
    "tiktok"
  ],

  openGraph: {
    title: "Blogs",
    description:
      "Thoughts on beauty, skincare, slow living, and all the little moments that make life softer.",
    type: "website",
  },
}

const Blogs = async () => {

  await connectDB()

  const res = await BlogSchema.find().lean().populate("category", "name")

  const data = JSON.parse(JSON.stringify(res))


  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      
      <div className="text-center mb-12 z-10">
        <h1 className={`${playfair.className} text-4xl md:text-5xl font-semibold mb-4`}>
          Our Journal
        </h1>
        <p className="max-w-2xl mx-auto">
          Thoughts on beauty, skincare, slow living, and all the little
          moments that make life softer.
        </p>
      </div>

      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 z-10">
        {data.map((blog: Blog) => (
          <BlogCard key={blog._id} {...blog} />
        ))}
      </section>
      <Image src={"/flower-4.png"} alt="blogs page image flower" width={1000} height={1000} className="w-full h-full object-center object-cover fixed bottom-0 -z-10" />
    </main>
  );
};

export default Blogs;
