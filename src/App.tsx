import Intro from './sections/Intro/Intro'
import Home from './sections/Home/Home'
import About from './sections/About/About'
import Projects from './sections/Projects/Projects'
import Contact from './sections/Contact/Contact'
import Nav from './components/Nav/Nav'
import { useState, useEffect } from 'react'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Intro />
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
