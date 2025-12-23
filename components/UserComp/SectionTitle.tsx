import { playfair } from '@/lib/fonts/font'
import React from 'react'

const SectionTitle = ({title}: {title: string}) => {
  return (
    <h3 className={`${playfair.className} text-3xl sm:text-5xl  font-light text-center text-dark`}>
      {title}
    </h3>
  )
}

export default SectionTitle
