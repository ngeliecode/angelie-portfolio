// React
import { useState, useEffect } from 'react'

// Routing
import { Link } from 'react-router'

// Icons
import { TextAlignEnd, X } from 'lucide-react'

// Assets
import logoBlack from '../../assets/logo-black.svg'
import logoWhite from '../../assets/logo-white.svg'

// Components
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import Menu from '../Menu/Menu'

// Styles
import './Navbar.css'

const Navbar = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')

    const closeMenu = (event: MediaQueryListEvent) => {
      console.log('Window is big?', mediaQuery.matches)
      if (event.matches) {
        setIsMenuOpen(false)
      }
    }

    mediaQuery.addEventListener('change', closeMenu)

    return () => mediaQuery.removeEventListener('change', closeMenu)
  }, [])

  return (
    <nav className="navbar">
      <Link to="/" className="logo" aria-label="Go home">
        <img src={theme === 'dark' ? logoWhite : logoBlack} alt="" />
      </Link>

      <div className="desktop-menu">
        <Menu />
      </div>

      <div
        className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest('a')) {
            setIsMenuOpen(false)
          }
        }}
      >
        <Menu />
      </div>

      <ThemeToggle theme={theme} setTheme={setTheme} />

      <button
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMenuOpen ? (
          <X size={28} strokeWidth={1.5} />
        ) : (
          <TextAlignEnd size={28} strokeWidth={1.5} />
        )}
      </button>
    </nav>
  )
}

export default Navbar
