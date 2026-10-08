import Intro from './sections/Intro'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Nav from './components/Nav'
import { useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    document.body.classList.toggle('dark', theme === 'light')
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
