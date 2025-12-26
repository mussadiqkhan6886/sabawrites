import React from 'react'
import SectionTitle from './SectionTitle'
import Latest from './Latest'
import { blogs } from '@/lib/constants'

const LatestPosts = () => {

  return (
    <section style={{backgroundImage: `URL(${"/flower-2.png"})`, backgroundPosition: "calc(100% - 100% - 90px) calc(100% + 80px)", backgroundSize:"contain", backgroundRepeat: "no-repeat"}} className='py-10 max-w-[1380px] mx-auto'>
      <SectionTitle title='Latest Stories' />
      <div className='mx-10'>
        <Latest data={blogs} />
      </div>
    </section>
  )
}

export default LatestPosts
