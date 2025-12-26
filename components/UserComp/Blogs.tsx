import React from 'react'
import SectionTitle from './SectionTitle'
import BlogsList from './BlogsList'
import { blogs } from '@/lib/constants'
import Image from 'next/image'

const Blogs = () => {
  return (
    <section className='py-10 max-w-7xl mx-auto relative'>
      <SectionTitle title='Blogs' />
      <div>
        <BlogsList data={blogs} />
      </div>
        <Image
        width={1000}
        height={1000}
          src="/flower-3.png"
          alt="flower iamge"
          className="absolute -right-20 bottom-0 w-full scale-x-[-1]"
        />
    </section>
  )
}

export default Blogs
