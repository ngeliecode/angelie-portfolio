import Nav from '../../components/Nav/Nav'

type HomeProps = {
  showHomeBtn: () => void
}

const Home = ({ showHomeBtn }: HomeProps) => {
  return (
    <section id="home" className="gap-5 items-center text-center">
      <h1>
        Welcome
        <br /> web traveler,
        <br /> I’m Angelie
      </h1>

      <p>Text</p>

      <Nav showHomeBtn={showHomeBtn} />

      <div>Socials</div>
    </section>
  )
}

export default Home
