import './Nav.css'

const Nav = () => {
  return (
    <nav className="home-menu flex flex-col gap-2 uppercase">
      <ul>
        <li>
          <a href="#about">
            <span>About me</span>
            <span>I</span>
          </a>
        </li>
        <li>
          <a href="#projects">
            <span>Projects</span>
            <span>II</span>
          </a>
        </li>
        <li>
          <a href="#contact">
            <span>Contact</span>
            <span>III</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>Resume PDF</span>
            <span>IV</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
