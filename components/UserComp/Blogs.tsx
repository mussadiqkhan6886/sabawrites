import React from 'react'
import SectionTitle from './SectionTitle'
import BlogsList from './BlogsList'
import { blogs } from '@/lib/constants'
import Image from 'next/image'
import { connectDB } from '@/lib/database'
import BlogSchema from '@/lib/schema/BlogSchema'

const Blogs = async () => {

  await connectDB()

  const res = await BlogSchema.find({}).limit(10).lean()

  const data = JSON.parse(JSON.stringify(res)) 

  return (
    <section className='py-10 px-3 overflow-x-hidden max-w-7xl mx-auto relative bg-medium/30'>
      <SectionTitle firstWord='Blogs' secondWord='Stories' />
      <div>
        <BlogsList data={data} />
      </div>
        {/* <Image
        width={1000}
        height={1000}
          src="/flower-3.png"
          alt="flower iamge"
          className="absolute -right-20 bottom-0 w-full scale-x-[-1]"
        /> */}
    </section>
  )
}

export default Blogs
