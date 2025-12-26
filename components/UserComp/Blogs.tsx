import React from 'react'
import SectionTitle from './SectionTitle'
import BlogsList from './BlogsList'
import { blogs } from '@/lib/constants'

const Blogs = () => {
  return (
    <section className='py-10 max-w-7xl mx-auto'>
      <SectionTitle title='Blogs' />
      <div>
        <BlogsList data={blogs} />
      </div>
    </section>
  )
}

export default Blogs
