import { galleryImages } from '@/lib/constants'
import { playfair } from '@/lib/fonts/font'
import Image from 'next/image'
import React from 'react'

const Gallery = () => {
  return (
    <section className='pt-10 mt-10 max-w-7xl mx-auto bg-dark text-light'>
      <h3 className={`${playfair.className} text-3xl sm:text-5xl mb-10 font-semibold text-center`}>Gallery</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {galleryImages.map(img => (
            <Image src={img.src} alt={img.alt} key={img.id} width={400} height={400} className='w-full h-full' />
        ))}
      </div>
    </section>
  )
}

export default Gallery
