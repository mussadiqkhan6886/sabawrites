import Blogs from '@/components/UserComp/Blogs'
import FeaturedBlogs from '@/components/UserComp/FeaturedBlogs'
import LatestPosts from '@/components/UserComp/LatestPosts'
import AboutSection from '@/sections/AboutSection';
import Hero from '@/sections/Hero'

export const dynamic = "force-dynamic";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutSection />
      <FeaturedBlogs />
      <LatestPosts />
      <Blogs />
    </main>
  )
}

export default Home
