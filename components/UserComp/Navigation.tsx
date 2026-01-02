'use client';

import Link from 'next/link'
import React from 'react'
import { FiInstagram, FiFacebook, FiX } from "react-icons/fi";
import { FaTiktok, FaPinterest } from "react-icons/fa";
import {delay, easeIn, easeOut, motion} from "framer-motion"
import { navItems } from '@/lib/constants';

const Navigation = ({close}: {close: () => void}) => {

    const variant = {
        hidden: {
            opacity: 0,
            x: -420
        },
        view: {
            opacity: 1,
            x:0,
            transition: {
                duration: 0.4,
                ease: easeOut
            }
        },
        exit: {
            opacity: 0,
            x: -420,
            transition: {
                duration: 0.4,
                ease: easeIn
            }
        },
    }
  return (
    <motion.nav variants={variant} initial={"hidden"} animate={"view"} exit={"exit"} className='w-[320px] sm:w-[400px] h-dvh flex flex-col justify-between p-10 border-r border-dark bg-medium fixed left-0 top-0 z-50'>
        <FiX onClick={close} className='absolute right-5 top-5 cursor-pointer text-black z-10 text-2xl ' />
      <ul className='flex flex-col mt-4 gap-4 mb-14'>
        {navItems.map(item => (
            <li style={{listStyle: "none"}} onClick={close} className='text-lg tracking-wider hover:text-dark hover:scale-110 transition hover:shadow-2xl py-1 hover:font-semibold' key={item.title}><Link className='w-full py-2' href={item.link}>{item.title}</Link></li>
        ))}
      </ul>
      <div className='flex justify-between items-center mb-6 sm:px-5'>
        <Link onClick={close} href="#"><FiInstagram className="text-2xl text-black" /></Link>
        <Link onClick={close} href="#"><FaTiktok className="text-2xl text-black" /></Link>
        <Link onClick={close} href="#"><FiFacebook className="text-2xl text-black" /></Link>
        <Link onClick={close} href="#"><FaPinterest className="text-2xl text-black" /></Link>
      </div>
    </motion.nav>
  )
}

export default Navigation
