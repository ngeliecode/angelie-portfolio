import ThemeToggle from './ThemeToggle'
import type { ThemeProps } from '../types/theme'

const Nav = ({ darkMode, toggleTheme }: ThemeProps) => {
  return (
    <nav className="sticky top-0">
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
    </nav>
  )
}

export default Nav
