import React from 'react'
import SectionTitle from './SectionTitle'
import { blogs } from '@/lib/constants'
import Featured from './Featured'

const FeaturedBlogs = () => {
  return (
    <section className='py-20'>
      <SectionTitle title='Featured Stories' />
      <div>
        <Featured blogs={blogs} />
      </div>
    </section>
  )
}

export default FeaturedBlogs
