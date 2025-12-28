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

const Latest = ({data}: {data: Blog[]}) => {

    const latestUniqueBlogs: Blog[] = Object.values(
    data.reduce<Record<string, Blog>>((acc, blog) => {
        const existing = acc[blog.slug];

        if (
        !existing ||
        new Date(blog.publishedAt) > new Date(existing.publishedAt)
        ) {
        acc[blog.slug] = blog;
        }

        return acc;
    }, {})
    ).sort(
    (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime()
    ).slice(0,4);

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
          prevEl: "#prevNav",
          nextEl: "#nextNav",
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
        {latestUniqueBlogs.map((blog, index) => (
          <SwiperSlide key={blog._id}>
            <Link href={`/blogs/${blog.slug}`} className="relative xl:h-[92vh] flex  flex-col">

              <Image
                width={400} height={400}
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-[400px] object-cover"
              />

            <div className='p-8 h-full bg-light/40 backdrop-blur-sm'>
               

                <h3 className={`${playfair.className} text-center text-xl sm:text-2xl font-semibold mt-2`}>
                    {blog.title}
                </h3>

                <p className=" text-sm text-center mt-2">
                    {blog.excerpt}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-4 mt-6">
        <button
          id="prevNav"
          className="px-4 py-3 border border-dark text-dark rounded-full hover:bg-dark hover:text-white transition"
        >
          ←
        </button>

        <button
          id="nextNav"
          className="px-4 py-3 border border-dark text-dark rounded-full hover:bg-dark hover:text-white transition"
        >
          →
        </button>
      </div>
    </div>
  )
}

export default Latest
