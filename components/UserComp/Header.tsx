'use client';

import Link from 'next/link'
import React, { useState } from 'react'
import {FiMenu} from "react-icons/fi"
import Navigation from './Navigation';

const Header = () => {

    const [showNavigation, setShowNavigation] = useState(false)

    const close = () => {
        setShowNavigation(false)
    }

  return (
    <header>
      <div>
        <FiMenu onClick={() => setShowNavigation(true)} />
        {showNavigation && <Navigation close={close} />}
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
