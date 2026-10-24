import SocialLinks from '../../components/SocialLinks/SocialLinks'
import './Contact.css'

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
        <SocialLinks />
      </div>
    </section>
  )
}

export default Contact
