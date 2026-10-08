import ThemeToggle from './ThemeToggle'
import type { ThemeProps } from '../types/theme'

const Nav = ({ theme, toggleTheme }: ThemeProps) => {
  return (
    <nav className="sticky top-0">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </nav>
  )
}

export default Nav
