import React from 'react'
import SectionTitle from './SectionTitle'
import { blogs } from '@/lib/constants'
import Featured from './Featured'
import Image from 'next/image'

const FeaturedBlogs = () => {
  return (
    <section  className='py-20 relative'>
      <SectionTitle firstWord='Featured' secondWord='Stories' />
      <div >
        <Featured blogs={blogs} />
      </div>
    </section>
  )
}

export default FeaturedBlogs
