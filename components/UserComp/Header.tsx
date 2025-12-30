'use client';

import Link from 'next/link'
import React, { useState } from 'react'
import {FiMenu} from "react-icons/fi"
import Navigation from './Navigation';
import { AnimatePresence } from 'framer-motion';
import { dancing, playfair } from '@/lib/fonts/font';
import { usePathname } from 'next/navigation';
import { FaPlusCircle, FaBlog, FaFile, FaHome, FaColumns } from 'react-icons/fa';

const Header = () => {

    const [showNavigation, setShowNavigation] = useState(false)
    const pathname = usePathname()

    if(pathname.includes("/admin-dashboard")){
      return <header className="bg-medium w-full">
        <nav className='flex justify-evenly py-4'>
          <Link className="flex gap-3 items-center" href={"/admin-dashboard/category"}><FaColumns /> <span>Category</span></Link>
          <Link className="flex gap-3 items-center" href={"/admin-dashboard/blogs"}><FaFile /> <span>Blogs</span></Link>
          <Link className="flex gap-3 items-center" href={"/admin-dashboard"}><FaPlusCircle /> <span>Add Blog</span></Link>
          <Link className="flex gap-3 items-center" href={"/admin-dashboard/add-category"}><FaPlusCircle /> <span>Add Category</span></Link>
          <Link className="flex gap-3 items-center" href={"/"}><FaHome /> <span>Go Home</span></Link>
        </nav>
      </header>
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
