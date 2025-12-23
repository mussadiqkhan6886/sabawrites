'use client';

import Link from 'next/link'
import React, { useState } from 'react'
import {FiMenu} from "react-icons/fi"
import Navigation from './Navigation';
import { AnimatePresence } from 'framer-motion';

const Header = () => {

    const [showNavigation, setShowNavigation] = useState(false)

    const close = () => {
        setShowNavigation(false)
    }

  return (
    <header>
      <div>
        <FiMenu onClick={() => setShowNavigation(true)} />
        <AnimatePresence>
            {showNavigation && <Navigation close={close} />}
        </AnimatePresence>
      </div>

      <Link href={"/"}>
        <h1>Saba Writes</h1>
      </Link>

      <button>

      </button>
    </header>
  )
}

export default Header
