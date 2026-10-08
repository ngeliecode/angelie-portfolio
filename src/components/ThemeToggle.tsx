import type { ThemeProps } from '../types/theme'

const ThemeToggle = ({ theme, toggleTheme }: ThemeProps) => {
  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Dark' : 'Light'} theme
    </button>
  )
}

export default ThemeToggle
