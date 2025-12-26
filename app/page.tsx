import FeaturedBlogs from '@/components/UserComp/FeaturedBlogs'
import LatestPosts from '@/components/UserComp/LatestPosts'
import Velocity from '@/components/UserComp/Velocity'
import Hero from '@/sections/Hero'
import React from 'react'

const Home = () => {
  return (
    <main>
      <Hero />
      <Velocity />
      <FeaturedBlogs />
      <LatestPosts />
    </main>
  )
}

export default Home
