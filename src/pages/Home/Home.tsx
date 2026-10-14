import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import './Home.css'

const Home = () => {
  return (
    <section id="home" className="home">
      <h1>
        Welcome
        <br /> web traveler,
        <br /> I’m Angelie
      </h1>

      <p>Frontend Developer</p>

      <div className="socials">
        <a
          href="#"
          aria-label="GitHub"
          className="inline-flex h-11 w-11 items-center justify-center"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="inline-flex h-11 w-11 items-center justify-center"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
    </section>
  )
}

export default Home
