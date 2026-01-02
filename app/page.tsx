import Blogs from '@/components/UserComp/Blogs'
import FeaturedBlogs from '@/components/UserComp/FeaturedBlogs'
import LatestPosts from '@/components/UserComp/LatestPosts'
import Hero from '@/sections/Hero'

export const dynamic = "force-dynamic";

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedBlogs />
      <LatestPosts />
      <Blogs />
    </main>
  )
}

export default Home
