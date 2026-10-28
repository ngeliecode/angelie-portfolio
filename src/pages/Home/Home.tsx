import './Home.css'
import { Link } from 'react-router'

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="content">
        <h1>
          Hej, jag heter
          <br /> Angelie.
        </h1>
        <p>
          Jag studerar till frontendutvecklare. Varsågod att utforska min
          portfolio!
        </p>
        <Link to="/projects" className="button button-primary">
          Se utvalda projekt
        </Link>
      </div>
    </section>
  )
}

export default Home
