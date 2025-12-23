import React from 'react'
import ScrollVelocity from './ui/ScrollVelocity'
import Image from 'next/image'

const Velocity = () => {
  return (
    <div className='relative'>
      <Image src={"/icon.svg"} alt='icon' width={70} height={70} className='spinAnimation absolute -right-2 -top-13 z-10 hue-rotate-150' />
        <ScrollVelocity
        texts={[' LifeStyle ✦', ' Beauty ✦']} 
        className="custom-scroll-text"
        />
      <Image src={"/bouquet.png"} alt='bouquet icon' width={120} height={120} className='rotate-12 absolute' />
    </div>
  )
}

export default Velocity
