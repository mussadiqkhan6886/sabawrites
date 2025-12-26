import Blogs from '@/components/UserComp/Blogs'
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
      <Blogs />
    </main>
  )
}

export default Home
