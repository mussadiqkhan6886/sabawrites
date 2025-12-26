import React from 'react'
import SectionTitle from './SectionTitle'
import { blogs } from '@/lib/constants'
import Featured from './Featured'
import Image from 'next/image'

const FeaturedBlogs = () => {
  return (
    <section style={{backgroundImage: `URL(${"/flower-1.png"})`, backgroundPosition: "bottom right", backgroundSize:"contain", backgroundRepeat: "no-repeat"}} className='py-20 relative'>
      <SectionTitle title='Featured Stories' />
      <div >
        <Featured blogs={blogs} />
      </div>
    </section>
  )
}

export default FeaturedBlogs
