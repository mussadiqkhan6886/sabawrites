'use client';

import Link from 'next/link'
import React, { useState } from 'react'
import {FiMenu} from "react-icons/fi"
import Navigation from './Navigation';
import { AnimatePresence } from 'framer-motion';
import { playfair } from '@/lib/fonts/font';
import { usePathname } from 'next/navigation';
import { FaPlusCircle, FaFile, FaHome } from 'react-icons/fa';

const Header = () => {

    const [showNavigation, setShowNavigation] = useState(false)
    const pathname = usePathname()

    if(pathname.includes("/admin-dashboard")){
      return <aside className="bg-medium w-full md:fixed left-0 top-0 h-full px-5 md:w-45 z-50">
        <nav className='flex md:flex-col gap-3 sm:gap-20 md:pt-20 justify-start h-full py-4'>
          <Link className="flex gap-3 items-center" href={"/admin-dashboard/blogs"}><FaFile /> <span>Blogs</span></Link>
          <Link className="flex gap-3 items-center" href={"/admin-dashboard"}><FaPlusCircle /> <span>Add Blog</span></Link>
          <Link className="flex gap-3 items-center" href={"/"}><FaHome /> <span>Go Home</span></Link>
        </nav>
      </aside>
    }

    const close = () => {
        setShowNavigation(false)
    }

  return (
    <header className='border-b  w-full top-0 border-dark py-4 px-5 sm:px-10 cursor-pointer flex items-center justify-between z-50'>
      <div>
        <FiMenu className='text-dark text-2xl' onClick={() => setShowNavigation(true)} />
        <AnimatePresence>
            {showNavigation && <Navigation close={close} />}
        </AnimatePresence>
      </div>

      <Link href={"/"}>
        <h1 className={`${playfair.className} text-[27px] sm:text-4xl`}>Saba <span className='italic font-semibold'>Writes</span></h1>
      </Link>

      <button className={`${playfair.className} bg-dark text-sm sm:text-base text-light px-4 py-2 rounded-full cursor-pointer hover:bg-main transition`}>
        Follow Me
      </button>
    </header>
  )
}

export default Header
