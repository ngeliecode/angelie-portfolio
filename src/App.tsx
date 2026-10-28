import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Main />
    </>
  )
}

export default App
