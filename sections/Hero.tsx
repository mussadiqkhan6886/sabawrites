import { playfair } from '@/lib/fonts/font'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className='h-screen overflow-x-hidden relative p-4'>

      <div className='bg-black/30 sm:hidden absolute w-[92%] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 h-[97%] inset-0 rounded-xl' />
      
      <Image
        src="/heroSection.jpg"
        alt="hero image"
        width={1000}
        height={1000}
        className='w-full h-full object-cover rounded-xl'
        fetchPriority='high'
        priority
      />

      <div className='sm:bg-light p-9 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[100px] sm:-translate-y-1/2 max-w-2xl text-center rounded sm:shadow-lg w-full'>

        <h1 className={`${playfair.className} text-white px-4 leading-12 sm:text-black font-semibold text-4xl mb-4`}>
          Beauty I&apos;m obsessed with but haven&apos;t bought yet.
        </h1>
        <p className='mb-6 text-white  sm:text-black'>
         Welcome to my little corner of the internet where viral beauty products, skincare trends and wishlist dreams live rent free in my head. If TikTok made you want it too, you&apos;re in the right place
        </p>
        <Link href="/about-me" className={`inline-block bg-dark ${playfair.className} text-white px-6 py-2 rounded-full transition`}>
          Know More About Me
        </Link>
      </div>
    </section>
  )
}

export default Hero
