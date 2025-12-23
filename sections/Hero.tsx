import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='h-screen'>
      <Image src={"/flower-3.png"} alt='hero image' width={1000} height={1000} className='w-full h-full object-cover' />
    </section>
  )
}

export default Hero
