import BlogCard from '@/components/UserComp/BlogCard'
import { blogs } from '@/lib/constants'
import { playfair } from '@/lib/fonts/font'
import Image from 'next/image'
import React from 'react'

const SingleBlog = async ({params}: {params: Promise<{slug: string}>}) => {

  const {slug} = await params

  const blog = blogs.find(item => item.slug === slug)

  const more = blogs.filter(item => item.category === blog?.category)

  if(!blog){
    return (
      <main>
        <h1>No Blog Found</h1>
      </main>
    )
  }

  return (
    <main>
      <div className='flex flex-col-reverse lg:flex-row bg-medium lg:h-screen pb-20'>
        <div className='w-full p-20 pb-0 flex justify-between flex-col'>
          <div>
            <p className='font-semibold text-sm'>{blog.category}</p>
            <h1 className={`${playfair.className} text-5xl lg:text-6xl `}>{blog.title}</h1>
          </div>
          <div className='flex mt-10 md:mt-0 flex-col gap-3'>
          <p>{blog.publishedAt}</p>
          <p className={`${playfair.className}`}>written by <span className='font-semibold text-xl'> {blog.author.name}</span></p>
          </div>
        </div>
        <Image src={blog.coverImage} alt={blog.excerpt} width={1000} height={1000} className='w-full object-center object-cover h-full' />
      </div>
      <div className='bg-black mb-3 text-white h-[200vh]'>
        blog
      </div>
      <hr />
      <div className='max-w-7xl mx-auto'>
        <h2 className={`${playfair.className} text-center text-2xl sm:text-3xl py-5`}>More Related Stores About {blog.category}</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
          {more.slice(0,5).map(item => (
            <BlogCard key={item._id} {...item} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default SingleBlog
