import { playfair } from '@/lib/fonts/font'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className='h-screen relative p-4'>

      <div className='bg-black/30 sm:hidden absolute w-[94%] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 h-[95%] inset-0 rounded-xl' />
      
      <Image
        src="/heroSection.jpg"
        alt="hero image"
        width={1000}
        height={1000}
        className='w-full h-full object-cover rounded-xl'
      />

      {/* stickers */}

      <Image src={"/makeup.png"} alt='makeup icon' width={130} height={130} className='rotate-12 absolute top-1/2 left-[20%] -translate-y-1/2 z-30' />
      <Image src={"/lipstick.png"} alt='makeup icon' width={130} height={130} className='rotate-12 absolute top-1/2 right-[20%] -translate-y-3/3 z-30' />

      {/* stickers end */}

      <div className='sm:bg-light p-9 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[100px] sm:-translate-y-1/2 max-w-2xl text-center rounded sm:shadow-lg w-full'>
        <h1 className={`${playfair.className} text-white sm:text-black font-semibold text-4xl mb-4`}>
          Inspiring Everyday Life & Style
        </h1>
        <p className='mb-6 text-white sm:text-black'>
          Join me as I share tips, stories, and inspiration on lifestyle, fashion, beauty, and wellness. Discover ideas that make every day a little brighter and uniquely yours.
        </p>
        <Link href="/about-me" className={`inline-block bg-main ${playfair.className} text-white px-6 py-2 rounded-full transition`}>
          Know More About Me
        </Link>
      </div>
    </section>
  )
}

export default Hero
