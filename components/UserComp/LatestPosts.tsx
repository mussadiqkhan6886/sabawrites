import React from 'react'
import SectionTitle from './SectionTitle'
import Latest from './Latest'
import { blogs } from '@/lib/constants'
import { connectDB } from '@/lib/database'
import BlogSchema from '@/lib/schema/BlogSchema'

const LatestPosts = async () => {

   await connectDB()

   const oneWeekAgo = new Date()
   oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
  
  const res = await BlogSchema.find({createdAt: { $gte : oneWeekAgo}}).sort({createdAt: -1}).lean()
  const data = JSON.parse(JSON.stringify(res))


  return (
    <section className='py-10 max-w-[1380px] mx-auto'>
      <SectionTitle firstWord='Latest' secondWord='Stories' />
      <div className='mx-3 lg:mx-10'>
        <Latest data={data} />
      </div>
    </section>
  )
}

export default LatestPosts
