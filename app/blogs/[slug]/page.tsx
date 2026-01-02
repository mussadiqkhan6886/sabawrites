import BlogCard from '@/components/UserComp/BlogCard'
import { connectDB } from '@/lib/database'
import { playfair } from '@/lib/fonts/font'
import BlogSchema from '@/lib/schema/BlogSchema'
import { Blog } from '@/type'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const revalidate = 60

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const slug = (await params).slug;

  await connectDB();

  const blog = await BlogSchema.findOne({ slug }).lean();

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "Sorry, this blog does not exist.",
      robots: { index: false, follow: false },
    };
  }

  const formattedSlug = blog.title || slug;

  // Full URL for OpenGraph/Twitter
  const imageUrl = blog.coverImage

  return {
    title: `${formattedSlug}`,
    description: blog.excerpt || `Read the latest ${formattedSlug} blog on Saba Writes.`,

    openGraph: {
      title: `${formattedSlug} | Saba Writes`,
      description: blog.excerpt || `Explore ${formattedSlug} blog curated by Saba.`,
      type: "article",
      url: `https://sabawrites.vercel.app/blogs/${slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: formattedSlug,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${formattedSlug} | Saba Writes`,
      description: blog.excerpt || `Discover ${formattedSlug} blog on Saba Writes.`,
      images: [imageUrl],
    },
  };
}


export async function generateStaticParams() {
  await connectDB();

  const blogs = await BlogSchema.find({}).lean();

  return blogs.map((item) => ({
    slug: item.slug,
  }));
}

const SingleBlog = async ({params}: {params: Promise<{slug: string}>}) => {

  const {slug} = await params

  await connectDB()

  const res = await BlogSchema
  .findOne({ slug })
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
        <h2>No Blog Found</h2>
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
            <h1 className={`${playfair.className} capitalize text-5xl lg:text-6xl `}>{blog.title}</h1>
          </div>
          <div className='flex mt-10 md:mt-0 flex-col gap-3'>
          <p>{publishAt}</p>
          <p className={`${playfair.className}`}>written by <span className='font-semibold text-xl'> Saba </span></p>
          </div>
        </div>
        <Image priority fetchPriority='high' src={blog.coverImage} alt={blog.excerpt} width={1000} height={1000} className='w-full object-center object-contain h-full' />
      </section>

      <article id='blog' className='prose max-w-4xl mx-auto xl:px-40 lg:px-30 md:px-20 sm:px-10 px-5 py-10 ' dangerouslySetInnerHTML={{ __html: blog.content || "" }}>
        
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
