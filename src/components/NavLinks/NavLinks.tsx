import { NavLink } from 'react-router'

const NavLinks = () => {
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'menu-link menu-link--active' : 'menu-link'
          }
        >
          Hem
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? 'menu-link menu-link--active' : 'menu-link'
          }
        >
          Projekt
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'menu-link menu-link--active' : 'menu-link'
          }
        >
          Om mig
        </NavLink>
      </li>
      <li>
        <a
          href="/cv-angelie-angman.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'menu-link menu-link--active' : 'menu-link'
          }
        >
          Kontakt
        </NavLink>
      </li>
    </ul>
  )
}

export default NavLinks
