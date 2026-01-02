'use client';

import { Blog } from '@/type'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation"
import Image from 'next/image';
import Link from 'next/link';
import { playfair } from '@/lib/fonts/font';
import BlogCard from './BlogCard';

const Latest = ({data}: {data: Blog[]}) => {


  return (
    <div className="relative px-0 sm:px-10">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
            delay: 2800
        }}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: "#latestPrevNav",
          nextEl: "#latestNextNav",
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1040: {
            slidesPerView: 3
          }
        }}
        loop={true}
      >
        {data.map((blog, index) => (
          <SwiperSlide key={blog._id}>
            <BlogCard {...blog} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-4 mt-6">
        <button
          id="latestPrevNav"
          className="px-4 py-3 border border-dark text-dark rounded-full hover:bg-dark hover:text-white transition"
        >
          ←
        </button>

        <button
          id="latestNextNav"
          className="px-4 py-3 border border-dark text-dark rounded-full hover:bg-dark hover:text-white transition"
        >
          →
        </button>
      </div>
    </div>
  )
}

export default Latest
