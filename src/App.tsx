import Home from './sections/Home/Home'
import About from './sections/About/About'
import Projects from './sections/Projects/Projects'
import Contact from './sections/Contact/Contact'
import { useState, useEffect } from 'react'
import ThemeToggle from './components/ThemeToggle'
import HomeButton from './components/HomeButton'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  function showHomeBtn() {
    setIsHidden(false)
  }

  function hideHomeBtn() {
    setIsHidden(true)
  }

  return (
    <>
      <nav className="navbar">
        <HomeButton isHidden={isHidden} hideHomeBtn={hideHomeBtn} />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </nav>

      <Home showHomeBtn={showHomeBtn} />

      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
