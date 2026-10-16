import { Link } from 'react-router'

const NavLinks = () => {
  return (
    <ul>
      <li>
        <Link to="/">Hem</Link>
      </li>
      <li>
        <Link to="/projects">Projekt</Link>
      </li>
      <li>
        <Link to="/about">Om mig</Link>
      </li>
      <li>
        <Link to="/contact">Kontakt</Link>
      </li>
    </ul>
  )
}

export default NavLinks
