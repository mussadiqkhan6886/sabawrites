import React from 'react'
import SectionTitle from './SectionTitle'
import Latest from './Latest'
import { blogs } from '@/lib/constants'

const LatestPosts = () => {

  return (
    <section className='py-10 max-w-[1380px] mx-auto'>
      <SectionTitle firstWord='Latest' secondWord='Stories' />
      <div className='mx-3 lg:mx-10'>
        <Latest data={blogs} />
      </div>
    </section>
  )
}

export default LatestPosts
