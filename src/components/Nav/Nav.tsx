import ThemeToggle from '../ThemeToggle'

import type { ThemeProps } from '../../types/theme'

import './Nav.css'

const Nav = ({ theme, toggleTheme }: ThemeProps) => {
  return (
    <nav className="navbar">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </nav>
  )
}

export default Nav
