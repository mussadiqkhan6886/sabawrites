'use client';

import Link from 'next/link'
import React, { useState } from 'react'
import {FiMenu} from "react-icons/fi"
import Navigation from './Navigation';
import { AnimatePresence } from 'framer-motion';
import { dancing, playfair } from '@/lib/fonts/font';

const Header = () => {

    const [showNavigation, setShowNavigation] = useState(false)

    const close = () => {
        setShowNavigation(false)
    }

  return (
    <header className='border-b border-dark py-4 px-7 sm:px-10 cursor-pointer flex items-center justify-between'>
      <div>
        <FiMenu className='text-dark text-2xl' onClick={() => setShowNavigation(true)} />
        <AnimatePresence>
            {showNavigation && <Navigation close={close} />}
        </AnimatePresence>
      </div>

      <Link href={"/"}>
        <h1 className={`${playfair.className} text-3xl sm:text-4xl`}>Saba <span className='italic font-semibold'>Writes</span></h1>
      </Link>

      <button className={`${playfair.className} bg-dark text-light px-4 py-2 rounded-full cursor-pointer hover:bg-main transition`}>
        Follow Me
      </button>
    </header>
  )
}

export default Header
