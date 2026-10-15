// React
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import { Link } from 'react-router'

// Icons / logos
import { TextAlignEnd, X } from 'lucide-react'
import logoBlack from './assets/logo-black.svg'
import logoWhite from './assets/logo-white.svg'

// Components
import ThemeToggle from './components/ThemeToggle'
import Menu from './components/Menu'

// Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'

// Styles
import './styles/navbar.css'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

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
    <>
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

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}

export default App
