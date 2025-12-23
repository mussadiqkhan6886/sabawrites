'use client';

import Link from 'next/link'
import React from 'react'
import { FiInstagram, FiFacebook, FiX } from "react-icons/fi";
import { FaTiktok, FaPinterest } from "react-icons/fa";

const Navigation = ({close}: {close: () => void}) => {

    const navItems = [
        {title: "Home", link: "/"},
        {title: "Blogs", link: "/blogs"},
        {title: "Categories", link: "/category"},
        {title: "About", link: "/about-me"},
        {title: "Contact", link: "/contact"},
    ]

  return (
    <nav className='w-[320px] sm:w-[400px] h-screen flex flex-col justify-between p-10 border-r border-dark bg-medium fixed top-0 z-50'>
        <FiX onClick={close} className='absolute right-5 top-5 cursor-pointer text-dark text-2xl ' />
      <ul className='flex flex-col mt-4 gap-4 mb-14'>
        {navItems.map(item => (
            <li onClick={close} className='text-lg tracking-wider hover:text-dark' key={item.title}><Link href={item.link}>{item.title}</Link></li>
        ))}
      </ul>
      <div className='flex justify-between items-center sm:px-5'>
        <Link href="#"><FiInstagram className="text-2xl text-dark hover:text-main" /></Link>
        <Link href="#"><FaTiktok className="text-2xl text-dark hover:text-main" /></Link>
        <Link href="#"><FiFacebook className="text-2xl text-dark hover:text-main" /></Link>
        <Link href="#"><FaPinterest className="text-2xl text-dark hover:text-main" /></Link>
      </div>
    </nav>
  )
}

export default Navigation
