import './Home.css'
import { Link } from 'react-router'

const Home = () => {
  return (
    <section id="home">
      <h1>
        Välkommen
        <br /> webbresenär, jag
        <br /> heter Angelie
      </h1>

      <div className="action">
        <Link to="/about">Lär känna mig ☺️</Link>
      </div>
    </section>
  )
}

export default Home
