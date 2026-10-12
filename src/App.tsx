import Home from './sections/Home/Home'
import About from './sections/About/About'
import Projects from './sections/Projects/Projects'
import Contact from './sections/Contact/Contact'
import { useState, useEffect } from 'react'
import ThemeToggle from './components/ThemeToggle'
import HomeButton from './components/HomeButton'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [isHidden, setIsHidden] = useState(
    window.location.hash === '' || window.location.hash === '#',
  )

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const handleHashChange = () => {
      setIsHidden(window.location.hash === '' || window.location.hash === '#')
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <>
      <nav className="navbar">
        <HomeButton isHidden={isHidden} />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </nav>

      <Home />

      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
