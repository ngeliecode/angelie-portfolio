import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Main />
    </>
  )
}

export default App
