// React
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'

// Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'

// Components
import Navbar from './components/Navbar/Navbar'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />

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
