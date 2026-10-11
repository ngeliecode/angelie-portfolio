import './Nav.css'

type NavProps = {
  showHomeBtn: () => void
}

const Nav = ({ showHomeBtn }: NavProps) => {
  return (
    <nav className="home-menu flex flex-col gap-2 uppercase">
      <ul>
        <li>
          <a href="#about" onClick={showHomeBtn}>
            <span>About me</span>
            <span>I</span>
          </a>
        </li>
        <li>
          <a href="#projects" onClick={showHomeBtn}>
            <span>Projects</span>
            <span>II</span>
          </a>
        </li>
        <li>
          <a href="#contact" onClick={showHomeBtn}>
            <span>Contact</span>
            <span>III</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={showHomeBtn}>
            <span>Resume PDF</span>
            <span>IV</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
