import { playfair } from '@/lib/fonts/font'
import React from 'react'

const SectionTitle = ({firstWord, secondWord}: {firstWord: string, secondWord: string}) => {
  return (
    <h2 className={`${playfair.className} text-4xl sm:text-5xl mb-13 font-semibold text-center `}>
      {firstWord + " " + secondWord}
    </h2>
  )
}

export default SectionTitle
