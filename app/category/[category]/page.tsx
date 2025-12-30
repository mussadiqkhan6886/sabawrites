import BlogCard from '@/components/UserComp/BlogCard'
import { blogs } from '@/lib/constants'
import { dancing } from '@/lib/fonts/font'
import Image from 'next/image'
import React from 'react'

const page = async ({params}: {params: Promise<{category: string}>}) => {

  const {category} = await params

  const categoryBasedBlogs = blogs.filter(blog => blog.category.toLowerCase() === category)

  if(!categoryBasedBlogs){
    return (<main>
      <h1>NO CATEGORY AVAILABLE</h1>
    </main>)
  }


  return (
    <main className='max-w-7xl mx-auto'>
      <Image src={"/spin.svg"} alt='spinner image flower' width={60} height={60} className='spinAnimation absolute left-[55%] -translate-x-1/2' />
      <h1 className={`${dancing.className} text-3xl md:text-5xl text-center py-10 capitalize`}>{category}</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {categoryBasedBlogs.map(blog => (
          <BlogCard key={blog._id} {...blog} />
        ))}
      </div>
    </main>
  )
}

export default page
