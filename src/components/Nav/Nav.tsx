import { NavLink } from 'react-router'

const Nav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/" className="button button-secondary nav-link">
          Hem
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" className="button button-secondary nav-link">
          Projekt
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="button button-secondary nav-link">
          Om mig
        </NavLink>
      </li>
      <li>
        <a
          href="/cv-angelie-angman.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="button button-secondary nav-link"
        >
          CV
        </a>
      </li>
      <li>
        <NavLink to="/contact" className="button button-secondary nav-link">
          Kontakt
        </NavLink>
      </li>
    </ul>
  )
}

export default Nav
