import React from 'react'
import SectionTitle from './SectionTitle'
import BlogsList from './BlogsList'
import { connectDB } from '@/lib/database'
import BlogSchema from '@/lib/schema/BlogSchema'

export const revalidate = 60

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
    </section>
  )
}

export default Blogs
