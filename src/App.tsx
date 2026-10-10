import Intro from './sections/Intro/Intro'
import Home from './sections/Home/Home'
import About from './sections/About/About'
import Projects from './sections/Projects/Projects'
import Contact from './sections/Contact/Contact'
import Nav from './components/Nav/Nav'
import { useState, useEffect } from 'react'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [lang, setLang] = useState(localStorage.getItem('language') || 'en')

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    document.body.classList.toggle('eng', lang === 'en')
    localStorage.setItem('language', lang)
  }, [lang])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const toggleLanguage = () => {
    setLang(lang === 'sv' ? 'en' : 'sv')
  }

  return (
    <>
      <Nav
        theme={theme}
        toggleTheme={toggleTheme}
        language={lang}
        toggleLanguage={toggleLanguage}
      />
      <main>
        <Intro language={lang} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
