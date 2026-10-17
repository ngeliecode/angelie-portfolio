// React
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

// Assets
import logoBlack from '../../assets/logo-black.svg'
import logoWhite from '../../assets/logo-white.svg'

// Components
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import MenuToggle from '../MenuToggle/MenuToggle'
import NavLinks from '../NavLinks/NavLinks'

// Styles
import './Navbar.css'

type NavbarProps = {
  theme: string
  setTheme: (theme: string) => void
}

const Navbar = ({ theme, setTheme }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close mobile menu on big screen
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')

    const closeMenu = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false)
      }
    }

    mediaQuery.addEventListener('change', closeMenu)

    return () => mediaQuery.removeEventListener('change', closeMenu)
  }, [])

  // No scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <nav className="navbar">
      <Link to="/" className="logo" aria-label="Go home">
        <img src={theme === 'dark' ? logoWhite : logoBlack} alt="" />
      </Link>

      <div className="desktop-menu">
        <NavLinks />
      </div>

      <div
        className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest('a')) {
            setIsMenuOpen(false)
          }
        }}
      >
        <NavLinks />
      </div>

      <ThemeToggle theme={theme} setTheme={setTheme} />

      <MenuToggle isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </nav>
  )
}

export default Navbar
