import type { ThemeProps } from '../types/theme'
import { Moon, Sun } from 'lucide-react'

const ThemeToggle = ({ theme, toggleTheme }: ThemeProps) => {
  return (
    <button type="button" onClick={toggleTheme}>
      {theme === 'light' ? (
        <Moon size={36} strokeWidth={1.5} />
      ) : (
        <Sun size={36} strokeWidth={1.5} />
      )}
    </button>
  )
}

export default ThemeToggle
