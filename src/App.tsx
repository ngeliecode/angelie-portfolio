import Intro from './sections/Intro'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Nav from './components/Nav'
import { useState, useEffect } from 'react'

const App = () => {
  const [theme, setTheme] = useState('light')
  const [language, setLanguage] = useState('en')

  // Effect of state change
  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const toggleLanguage = () => {
    setLanguage(language === 'sv' ? 'en' : 'sv')
  }

  return (
    <>
      <Nav
        theme={theme}
        toggleTheme={toggleTheme}
        language={language}
        toggleLanguage={toggleLanguage}
      />
      <main>
        <Intro language={language} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
