import Intro from './sections/Intro'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Nav from './components/Nav'
import { useState } from 'react'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    const toggled = !darkMode

    setDarkMode(toggled)
    document.body.classList.toggle('dark', toggled)
  }

  return (
    <>
      <Nav darkMode={darkMode} toggleTheme={toggleTheme} />
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
