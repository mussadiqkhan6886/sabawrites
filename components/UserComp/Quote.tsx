import { dancing } from '@/lib/fonts/font'
import Image from 'next/image'
import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const Quote = () => {
  return (
    <section className='py-10 max-w-6xl relative mx-auto h-[90vh]'>
      {/* stickers */}
        <Image src={"/girl-power (1).png"} alt='girl power one sticker' width={100} height={100} className='absolute left-0 -top-5' />
        <Image src={"/girl-power.png"} alt='girl power two sticker' width={100} height={100} className='absolute right-0 bottom-0' />
      {/* end */}
        <div className='absolute w-[52%] top-[45%] sm:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
          <FaQuoteLeft className='text-center w-full text-4xl mb-10' />
            <h4 className={`${dancing.className} text-center text-3xl md:text-5xl text-black `}>Invest in your skin. It’s going to represent you for a very long time.</h4>
            <p className='mt-4'>~ Linden Tyler</p>
        </div>
        <Image src="/makeup-6.jpg" alt="quote image" width={600} height={400} className='object-cover w-full h-full object-bottom' />
    </section>
  )
}

export default Quote
