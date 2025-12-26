import { playfair } from "@/lib/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FeaturedBlogCardProps {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  category: string;
  publishedAt: string;
  readTime: string;
  reverse?: boolean; // new prop to alternate layout
}

const FeaturedBlogCard: React.FC<FeaturedBlogCardProps> = ({
  title,
  slug,
  excerpt,
  coverImage,
  category,
  publishedAt,
  readTime,
  reverse = false,
}) => {
  return (
    <Link href={`/blogs/${slug}`} className="block group px-2 sm:px-0 h-125">
      <div className="overflow-hidden sm:border-r sm:px-2 md:px-10 border-main transition duration-500  flex flex-col">
        {reverse ? (
          <>
            {/* Details First */}
            <div className="p-5 order-1 bg-light/40 backdrop-blur-sm">
              <span className="text-sm text-dark font-semibold">{category}</span>
              <h3 className={`${playfair.className} mt-2 text-xl font-light line-clamp-2`}>
                {title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm line-clamp-3">{excerpt}</p>
              <div className="mt-4 text-xs text-gray-500 flex justify-between">
                <span>{readTime}</span>
                <span>{publishedAt}</span>
              </div>
            </div>

            {/* Image Second */}
            <div className="relative h-72 mb-7 w-full order-2">
              <Image
                src={coverImage}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </>
        ) : (
          <>
            {/* Image First */}
            <div className="relative h-72 w-full order-1">
              <Image
                src={coverImage}
                alt={title}
                fill
                className="object-cover"
              />
            </div>

            {/* Details Second */}
            <div className="p-5 order-2 bg-light/40 backdrop-blur-sm">
              <span className="text-sm text-dark font-semibold">{category}</span>
              <h3 className={`${playfair.className} mt-2 text-xl font-light line-clamp-2`}>
                {title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm line-clamp-3">{excerpt}</p>
              <div className="mt-4 text-xs text-gray-500 flex justify-between">
                <span>{readTime}</span>
                <span>{publishedAt}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default FeaturedBlogCard;
