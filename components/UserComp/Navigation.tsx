'use client';

import Link from 'next/link'
import React from 'react'
import { FiInstagram, FiFacebook, FiX } from "react-icons/fi";
import { FaTiktok, FaPinterest } from "react-icons/fa";
import {delay, motion} from "framer-motion"
import Image from 'next/image';

const Navigation = ({close}: {close: () => void}) => {

    const navItems = [
        {title: "Home", link: "/"},
        {title: "Blogs", link: "/blogs"},
        {title: "Categories", link: "/category"},
        {title: "About", link: "/about-me"},
        {title: "Contact", link: "/contact"},
    ]

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
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            x: -420,
            transition: {
                duration: 0.4,
                ease: "easeIn"
            }
        },
    }
    const variant2 = {
        hidden: {
            opacity: 0,
            x: -420
        },
        view: {
            opacity: 1,
            x:0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
                delay: 0.3
            }
        },
    }

  return (
    <motion.nav variants={variant} initial={"hidden"} animate={"view"} exit={"exit"} className='w-[320px] sm:w-[400px] h-screen flex flex-col justify-between p-10 border-r border-dark bg-medium fixed top-0 z-50'>
        <FiX onClick={close} className='absolute right-5 top-5 cursor-pointer text-dark text-2xl ' />
      <ul className='flex flex-col mt-4 gap-4 mb-14'>
        {navItems.map(item => (
            <li onClick={close} className='text-lg tracking-wider hover:text-dark hover:scale-110 transition hover:shadow-2xl py-1 hover:font-semibold' key={item.title}><Link href={item.link}>{item.title}</Link></li>
        ))}
      </ul>
      <motion.div className='absolute -right-18 bottom-30' variants={variant2} initial={"hidden"} animate={"view"}>
        <Image src={"/spin.svg"} alt='flower image animation' width={150} height={150} className='spinAnimation ' />
      </motion.div>
      <div className='flex justify-between items-center sm:px-5'>
        <Link onClick={close} href="#"><FiInstagram className="text-2xl text-dark hover:text-main" /></Link>
        <Link onClick={close} href="#"><FaTiktok className="text-2xl text-dark hover:text-main" /></Link>
        <Link onClick={close} href="#"><FiFacebook className="text-2xl text-dark hover:text-main" /></Link>
        <Link onClick={close} href="#"><FaPinterest className="text-2xl text-dark hover:text-main" /></Link>
      </div>
    </motion.nav>
  )
}

export default Navigation
