import BlogCard from '@/components/UserComp/BlogCard'
import { blogs } from '@/lib/constants'
import { connectDB } from '@/lib/database'
import { dancing } from '@/lib/fonts/font'
import BlogSchema from '@/lib/schema/BlogSchema'
import CategorySchema from '@/lib/schema/CategorySchema'
import { Blog } from '@/type'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const revalidate = 60

export async function generateMetadata({params}: {params: Promise<{ category: string }>}): Promise<Metadata> {

  const category = (await params).category
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return {
    title: `${categoryName} Blogs `,
    description: `Read the latest ${categoryName.toLowerCase()} blogs on Saba Writes.`,

    openGraph: {
      title: `${categoryName} Blogs `,
      description: `Explore ${categoryName.toLowerCase()} blogs curated by Saba.`,
      type: "website",
    },
  };
}


export async function generateStaticParams() {
  await connectDB();

  const categories = await CategorySchema.find({}).lean();

  return categories.map((item) => ({
    category: item.slug,
  }));
}


const page = async ({params}: {params: Promise<{category: string}>}) => {

  await connectDB()

  const {category} = await params

  const res = await BlogSchema.find({}).lean().populate("category", "name")

  const blogs = JSON.parse(JSON.stringify(res))

  const categoryBasedBlogs = blogs.filter(
    (blog: Blog) => blog.category?.name.toLowerCase() === category.toLowerCase()
  )

  const cat = await CategorySchema.find({name: category}).lean()
  
  const categoryRes = JSON.parse(JSON.stringify(cat))

  if(categoryBasedBlogs.length === 0){
    return (<main>
      <h1>NO CATEGORY AVAILABLE</h1>
    </main>)
  }

  return (
    <main className='max-w-7xl mx-auto'>
      <Image src={"/spin.svg"} alt='spinner image flower' width={60} height={60} className='spinAnimation absolute left-[55%] -translate-x-1/2' />
      <h1 className={`${dancing.className} text-3xl md:text-5xl text-center py-10 capitalize`}>{category}</h1>
      <p className='text-center max-x-4xl mx-auto mb-3'>{categoryRes[0].description}</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {categoryBasedBlogs.map((blog: Blog) => (
          <BlogCard key={blog._id} {...blog} />
        ))}
      </div>
    </main>
  )
}

export default page
