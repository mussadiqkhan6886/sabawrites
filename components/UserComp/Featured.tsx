'use client';

import { Blog } from '@/type'
import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation} from "swiper/modules"

import "swiper/css";
import "swiper/css/navigation"
import FeaturedBlogCard from './FeaturedBlogCard';

const Featured = ({blogs}: {blogs: Blog[]}) => {
  return (
    <>
    <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{nextEl: "#featuredNextNav", prevEl: "#featuredPrevNav"}}
        className='max-w-7xl mx-auto'
    >
      {blogs.filter(post => post.featured === true).map((blog: Blog, index: number) => (
        <SwiperSlide key={blog._id}>
            <FeaturedBlogCard key={blog._id} title={blog.title} slug={blog.slug} excerpt={blog.excerpt} coverImage={blog.coverImage} category={blog.category.name} publishedAt={blog.createdAt} readTime={blog.readTime} reverse={index % 2 === 1}   />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="flex z-40 justify-center gap-4 mt-6">
        <button
            id="featuredPrevNav"
            className="px-4 py-3 border border-dark text-dark rounded-full hover:bg-dark hover:text-white transition"
        >
            ←
        </button>

        <button
            id="featuredNextNav"
            className="px-4 py-3 border border-dark text-dark rounded-full hover:bg-dark hover:text-white transition"
        >
            →
        </button>
    </div>
    </>
  )
}

export default Featured
