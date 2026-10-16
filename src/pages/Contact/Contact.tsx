import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <section id="contact">
      <h2>Kontakt</h2>

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

export default Contact
