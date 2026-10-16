import { Routes, Route } from 'react-router'

// Pages
import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import Projects from '../../pages/Projects/Projects'
import Contact from '../../pages/Contact/Contact'

// Style
import './Main.css'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  )
}

export default Main
