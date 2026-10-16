import './About.css'

const About = () => {
  return (
    <section id="about">
      <h2>Om mig</h2>
      <div className="about-content">
        <img
          className="about-image"
          src="./images/portrait.png"
          alt="Porträtt av Angelie Ångman"
        />
        <div className="about-text">
          <p>
            Hejsan! Jag heter Angelie Ångman och jag är 33 år gammal. Jag
            studerar till Frontend Developer vid Medieinstitutet. Jag bor i
            Skellefteå, Västerbotten.
          </p>
          <p>
            Jag är intresserad av estetik och visuellt uttryck och trivs med
            struktur och systematik. Jag tycker om att utforska och lära mig nya
            saker, även när det innebär att ge mig ut på okänd mark.
          </p>
          <p>
            På fritiden när jag inte sitter vid tangentbordet, går jag runt och
            förbättrar mitt hem estetiskt, eller har soffhäng till en film,
            serie eller bok, eller så spenderar jag tid med min sambo eller
            bägge delarna. Får jag riktigt feeling plockar jag fram gitarren
            eller börjar måla!
          </p>
          <p>
            Nu söker jag en LIA-plats inom frontendutveckling och ser fram emot
            att få utvecklas som yrkesperson.
          </p>
          <a
            className="resume-link"
            href="/cv-angelie-angman.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mer om mig hittar du i mitt CV – ja, det har jag också kodat själv!
            <span>😉</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
