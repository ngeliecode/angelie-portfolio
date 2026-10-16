import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <section id="about">
      <h2>Om mig</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>

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

export default About
