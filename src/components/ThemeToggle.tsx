import type { ThemeProps } from '../types/theme'

const ThemeToggle = ({ darkMode, toggleTheme }: ThemeProps) => {
  return (
    <button onClick={toggleTheme}>{darkMode ? 'Light' : 'Dark'} theme</button>
  )
}

export default ThemeToggle
