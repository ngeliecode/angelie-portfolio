import './Nav.css'

type NavProps = {
  showHomeBtn: () => void
}

const Nav = ({ showHomeBtn }: NavProps) => {
  return (
    <nav className="flex flex-col uppercase">
      <a href="#about" onClick={showHomeBtn}>
        About me
      </a>
      <a href="#projects" onClick={showHomeBtn}>
        Projects
      </a>
      <a href="#contact" onClick={showHomeBtn}>
        Contact
      </a>
    </nav>
  )
}

export default Nav
