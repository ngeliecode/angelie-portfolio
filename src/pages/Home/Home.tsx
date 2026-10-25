import './Home.css'

const Home = () => {
  console.log(document.documentElement.scrollHeight - innerHeight)
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
        <a href="/projects" className="button button-primary">
          Se utvalda projekt
        </a>
      </div>
      <footer>
        <p>♥ 2026 ANGELIE ÅNGMAN</p>
      </footer>
    </section>
  )
}

export default Home
