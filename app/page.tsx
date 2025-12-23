import FeaturedBlogs from '@/components/UserComp/FeaturedBlogs'
import Velocity from '@/components/UserComp/Velocity'
import Hero from '@/sections/Hero'
import React from 'react'

const Home = () => {
  return (
    <main>
      <Hero />
      <Velocity />
      <FeaturedBlogs />
    </main>
  )
}

export default Home
