import { dancing, playfair } from '@/lib/fonts/font'
import React from 'react'

const SectionTitle = ({firstWord, secondWord}: {firstWord: string, secondWord: string}) => {
  return (
    <h2 className={`${dancing.className} text-4xl sm:text-5xl mb-10 font-semibold text-center `}>
      <span>{firstWord}</span><span className={`inline-block ml-8`}> {secondWord}</span>
    </h2>
  )
}

export default SectionTitle
