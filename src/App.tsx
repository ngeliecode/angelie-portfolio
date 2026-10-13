import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'

import ThemeToggle from './components/ThemeToggle'
import HomeLink from './components/HomeLink'

// Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const location = useLocation()
  const isHidden = location.pathname === '/'

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <div className="top-bar">
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <HomeLink isHidden={isHidden} />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
