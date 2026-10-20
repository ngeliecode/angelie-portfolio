// React
import { useState, useEffect } from 'react'

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
      <ThemeToggle theme={theme} setTheme={setTheme} />

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

      <MenuToggle isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </nav>
  )
}

export default Navbar
