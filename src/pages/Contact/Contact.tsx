import SocialLinks from '../../components/SocialLinks/SocialLinks'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="content">
        <h1>Kontakt</h1>
        <p>
          Jag är alltid öppen för nya kontakter, spännande idéer och möjligheter
          att utvecklas inom frontendutveckling.
        </p>
        <p>Skriv till mig!</p>
        <a
          href="mailto:angelie.angman@gmail.com"
          className="button button-primary"
        >
          angelie.angman@gmail.com
        </a>
        <SocialLinks />
      </div>
    </section>
  )
}

export default Contact
