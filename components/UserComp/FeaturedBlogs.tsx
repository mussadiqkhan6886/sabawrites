import React from 'react'
import SectionTitle from './SectionTitle'
import { blogs } from '@/lib/constants'
import Featured from './Featured'
import Image from 'next/image'
import { connectDB } from '@/lib/database'
import BlogSchema from '@/lib/schema/BlogSchema'

const FeaturedBlogs = async () => {

  await connectDB()

  const res = await BlogSchema.find({featured: true}).lean().populate("category", "name")

  const data = JSON.parse(JSON.stringify(res))

  return (
    <section  className='py-20 relative'>
      <SectionTitle firstWord='Featured' secondWord='Stories' />
      <div >
        <Featured blogs={data} />
      </div>
    </section>
  )
}

export default FeaturedBlogs
