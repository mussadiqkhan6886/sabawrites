import { playfair } from '@/lib/fonts/font'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    slug: string
    coverImage: string
    title: string
    excerpt: string
}

const BlogCard = ({slug, coverImage, title, excerpt}: Props) => {
  return (
    <Link href={`/blogs/${slug}`} className="h-full block">
        <Image
        width={200}
        height={200}
        src={coverImage}
        alt={title}
        className="h-[400px] w-full object-cover"
        />

        <div className=" bg-light/40 backdrop-blur-sm p-3">
        <h3 className={`${playfair.className} capitalize text-center  text-2xl font-light line-clamp-2`}>
        {title}
        </h3>

        <p className="text-gray-900 text-[13px] mt-4 text-center">{excerpt.length >= 8 ? excerpt.slice(0,80) + "..." : excerpt}</p>

        </div>
    </Link>
  )
}

export default BlogCard
