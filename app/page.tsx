import Blogs from '@/components/UserComp/Blogs'
import { Categories } from '@/components/UserComp/Categories'
import FeaturedBlogs from '@/components/UserComp/FeaturedBlogs'
import Gallery from '@/components/UserComp/Gallery'
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
      <Categories />
      <Gallery />
    </main>
  )
}

export default Home
