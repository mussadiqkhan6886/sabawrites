import React from 'react'
import SectionTitle from './SectionTitle'
import Featured from './Featured'
import Image from 'next/image'
import { connectDB } from '@/lib/database'
import BlogSchema from '@/lib/schema/BlogSchema'

export const revalidate = 60

const FeaturedBlogs = async () => {

  await connectDB()

  const res = await BlogSchema.find({featured: true}).lean()

  const data = JSON.parse(JSON.stringify(res))

  return (
    <section  className='py-20 max-w-7xl mx-auto relative'>
      <SectionTitle firstWord='What I&apos;m Currently' secondWord='Obsessing Over' />
      <p className="text-center mb-7 px-3">From viral makeup products to skincare everyone swears by, these are the blogs where i talk about what the internet can&apos;t stop obsessing over. <br /> Consider this my running beauty wishlist</p>
      <div>
        <Featured blogs={data} />
      </div>
    </section>
  )
}

export default FeaturedBlogs
