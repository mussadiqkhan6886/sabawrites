"use client";

import { Blog } from "@/type";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { playfair } from "@/lib/fonts/font";
import Link from "next/link";

const BlogsList = ({ data }: { data: Blog[] }) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          480: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item._id}>
            <Link href={`/blogs/${item.slug}`} className="h-[300px] block">
              <Image
              width={200}
              height={200}
                src={item.coverImage}
                alt={item.title}
                className="h-53 w-full mb-7 object-cover"
              />

              <h3 className={`${playfair.className} mt-3 text-sm font-semibold line-clamp-2`}>
                {item.title}
              </h3>

              <p className="text-gray-700 text-[13px]">{item.excerpt.length >= 100 ? item.excerpt.slice(0,100) + "..." : item.excerpt}</p>

              <p className="mt-1 text-xs text-gray-500">
                {item.publishedAt}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className={`${playfair.className} bg-dark text-light text-center flex justify-center items-center mx-auto px-6 py-2 rounded-full mt-10 hover:bg-transparent hover:border-dark border transition hover:text-dark`}><Link href={"/blogs"}>Sell All</Link></button>
    </div>
  );
};

export default BlogsList;
