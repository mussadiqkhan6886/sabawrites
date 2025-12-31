import BlogCard from '@/components/UserComp/BlogCard'
import { blogs } from '@/lib/constants'
import { connectDB } from '@/lib/database'
import { playfair } from '@/lib/fonts/font'
import BlogSchema from '@/lib/schema/BlogSchema'
import { Blog } from '@/type'
import Image from 'next/image'
import React from 'react'

const SingleBlog = async ({params}: {params: Promise<{slug: string}>}) => {

  const {slug} = await params

  await connectDB()

  const res = await BlogSchema
  .findOne({ slug })
  .populate("category", "name")
  .lean();

  const blog = JSON.parse(JSON.stringify(res))

  const collection = await BlogSchema.aggregate([
    {
      $match: {
        category: blog.category._id,
        slug: { $ne: blog.slug }
      }
    },
    { $sample: { size: 4 } }
  ]);


  const collections = JSON.parse(JSON.stringify(collection))

  if(!blog){
    return (
      <main>
        <h1>No Blog Found</h1>
      </main>
    )
  }

  const publishAt = new Date(blog.createdAt).toLocaleDateString();

  return (
    <main>
      <section className='flex flex-col-reverse lg:flex-row bg-medium lg:h-screen '>
        <div className='w-full p-20 pb-10 flex justify-between flex-col'>
          <div>
            <p className='font-semibold text-sm'>{blog.category.name}</p>
            <h1 className={`${playfair.className} text-5xl lg:text-6xl `}>{blog.title}</h1>
          </div>
          <div className='flex mt-10 md:mt-0 flex-col gap-3'>
          <p>{publishAt}</p>
          <p className={`${playfair.className}`}>written by <span className='font-semibold text-xl'> Saba </span></p>
          </div>
        </div>
        <Image src={blog.coverImage} alt={blog.excerpt} width={1000} height={1000} className='w-full object-center object-cover h-full' />
      </section>

      <article className='prose max-w-4xl mx-auto xl:px-40 lg:px-30 md:px-20 sm:px-10 px-5 py-10 ' dangerouslySetInnerHTML={{ __html: blog.content || "" }}>
        
      </article>

      <hr />
      <section className='max-w-7xl mx-auto'>
        <h2 className={`${playfair.className} text-center text-2xl sm:text-3xl py-10`}>More Related Stories About {blog.category?.name}</h2>
        {collections.length > 0 ? <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4'>
          {collections.map((item: Blog) => (
            <BlogCard key={item._id} {...item} />
          ))}
        </div>: <div>
          <h2 className='text-center'>No More Blogs In This Collections</h2>
          </div>}
      </section>
    </main>
  )
}

export default SingleBlog
