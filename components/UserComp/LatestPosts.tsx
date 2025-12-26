import React from 'react'
import SectionTitle from './SectionTitle'
import Latest from './Latest'
import { blogs } from '@/lib/constants'

const LatestPosts = () => {

  return (
    <section className='py-10 max-w-7xl mx-auto'>
      <SectionTitle title='Latest Stories' />
      <div>
        <Latest data={blogs} />
      </div>
    </section>
  )
}

export default LatestPosts
