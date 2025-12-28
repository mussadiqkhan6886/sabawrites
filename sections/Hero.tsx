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
      />

      {/* stickers end */}

      <div className='sm:bg-light p-9 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[100px] sm:-translate-y-1/2 max-w-2xl text-center rounded sm:shadow-lg w-full'>
        <div className='relative '>
          {/* <Image src={"/makeup.png"} alt='makeup icon' width={130} height={130} className='rotate-12 absolute -top-[150px] md:top-0  -left-14 md:-left-27 z-30 block' />
          <Image src={"/lipstick.png"} alt='makeup icon' width={130} height={130} className='rotate-12 absolute -top-22 md:-right-20 -right-10 z-30 block' />
          <Image src={"/sticker-1.png"} alt='makeup icon' width={130} height={130} className='rotate-12 absolute md:-bottom-[250px] -bottom-[470px] -right-6 md:-right-20 z-30 block' /> */}
        </div>

        <h1 className={`${playfair.className} text-white sm:text-black font-semibold text-4xl mb-4`}>
          Inspiring Everyday Life & Style
        </h1>
        <p className='mb-6 text-white sm:text-black'>
          Join me as I share tips, stories, and inspiration on lifestyle, fashion, beauty, and wellness. Discover ideas that make every day a little brighter and uniquely yours.
        </p>
        <Link href="/about-me" className={`inline-block bg-dark ${playfair.className} text-white px-6 py-2 rounded-full transition`}>
          Know More About Me
        </Link>
      </div>
    </section>
  )
}

export default Hero
