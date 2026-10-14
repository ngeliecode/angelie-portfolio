// React
import { useState, useEffect } from 'react'

// React Router
import { Routes, Route } from 'react-router'
import { Link } from 'react-router'

// Logos
import logoBlack from './assets/logo-black.svg'
import logoWhite from './assets/logo-white.svg'

// Components
import ThemeToggle from './components/ThemeToggle'

// Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <div className="top-bar">
        <Link
          to="/"
          className="inline-flex h-11 w-11 items-center justify-center"
          aria-label="Go home"
        >
          <img src={theme === 'dark' ? logoWhite : logoBlack} alt="" />
        </Link>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
      <div className="wrapper">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
