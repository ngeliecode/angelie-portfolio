import './Home.css'
import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'

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
          Lär känna mig
          <ArrowUpRight size="1.2em" strokeWidth={2.5} />
        </Link>
        <Link to="/projects" className="button button-secondary">
          Utvalda projekt
          <ArrowUpRight size="1.2em" strokeWidth={2.5} />
        </Link>
      </div>
    </section>
  )
}

export default Home
