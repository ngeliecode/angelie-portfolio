import { Link } from 'react-router'

const NavLinks = () => {
  return (
    <ul>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  )
}

export default NavLinks
