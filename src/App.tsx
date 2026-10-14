// React
import { useState, useEffect } from 'react'

// React Router
import { Routes, Route, useLocation } from 'react-router'
import { Link } from 'react-router'

// Components
import ThemeToggle from './components/ThemeToggle'

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
        <Link
          to="/"
          className={`${isHidden ? 'invisible' : ''} home-link min-h-[44px] flex items-center`}
        >
          Go home
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
