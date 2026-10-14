import { Link } from 'react-router'

const Nav = () => {
  return (
    <nav className="home-menu flex flex-col gap-2 uppercase">
      <ul>
        <li>
          <Link to="/about">
            <span>About me</span>
            <span>I</span>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <span>Projects</span>
            <span>II</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <span>Contact</span>
            <span>III</span>
          </Link>
        </li>
        <li>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <span>Resume PDF</span>
            <span>IV</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
