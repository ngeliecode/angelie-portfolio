import Intro from './sections/Intro'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Nav from './components/Nav'

const App = () => {
  return (
    <>
      <Nav />

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
