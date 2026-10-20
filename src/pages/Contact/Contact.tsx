import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-content">
        <h2>Ska vi höras?</h2>
        <p>
          Jag är alltid öppen för nya kontakter, spännande idéer och möjligheter
          att utvecklas inom frontendutveckling.
        </p>
        <p>Skriv till mig!</p>
        <a href="mailto:angelie.angman@gmail.com" className="contact-email">
          angelie.angman@gmail.com
        </a>
        <div className="socials">
          <a
            href="https://github.com/ngeliecode"
            aria-label="GitHub"
            className="inline-flex h-11 w-11 items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://linkedin.com/in/angelieångman"
            aria-label="LinkedIn"
            className="inline-flex h-11 w-11 items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
