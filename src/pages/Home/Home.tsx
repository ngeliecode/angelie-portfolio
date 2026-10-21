import './Home.css'
import { Link } from 'react-router'

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Välkommen, webbresenär..</h1>
        <p className="hero-text">
          Jag heter Angelie Ångman och jag studerar till frontendutvecklare.
          Varsågod att utforska min portfolio!
        </p>
      </div>

      <div className="hero-actions">
        <Link to="/about" className="button button-primary">
          Lär känna mig <span>↗</span>
        </Link>
        <Link to="/projects" className="button button-secondary">
          Utvalda projekt <span>↗</span>
        </Link>
      </div>
    </section>
  )
}

export default Home
