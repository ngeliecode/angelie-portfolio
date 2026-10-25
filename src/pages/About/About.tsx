import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="content">
        <h1>Om mig</h1>
        <div className="content-text">
          <p>
            Hejsan! Jag heter Angelie Ångman. Jag studerar till Frontend
            Developer vid Medieinstitutet. Jag bor i Skellefteå, Västerbotten.
          </p>
          <p>
            Jag är intresserad av estetik och visuellt uttryck och trivs med
            struktur och systematik. Jag tycker om att utforska och lära mig nya
            saker, även när det innebär att ge mig ut på okänd mark.
          </p>
          <p>
            På fritiden går jag förmodligen runt i mitt hem och försöker
            förbättra det estetiskt. Annars blir det gärna soffan med en film,
            serie eller bok, eller så spenderar jag tid med min sambo – eller
            både och. Får jag feeling så går jag en lång skogspromenad.
          </p>
          <p>
            Nu söker jag en LIA-plats inom frontendutveckling och ser fram emot
            att få utvecklas som yrkesperson.
          </p>
          <p>
            <a
              className="button button-primary resume-link"
              href="/cv-angelie-angman.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Läs mer om mig i mitt CV.
            </a>
          </p>
        </div>
        <img src="./images/portrait.png" alt="Porträtt av Angelie Ångman" />
      </div>
    </section>
  )
}

export default About
