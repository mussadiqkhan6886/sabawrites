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
import BlogCard from "./BlogCard";

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
          840: {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item._id}>
           <BlogCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className={`${playfair.className} bg-dark text-light text-center flex justify-center items-center mx-auto px-6 py-2 rounded-full mt-10 hover:bg-transparent hover:border-dark border transition hover:text-dark`}><Link href={"/blogs"}>Sell All</Link></button>
    </div>
  );
};

export default BlogsList;
