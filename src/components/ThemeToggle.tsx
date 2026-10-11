import { Moon, Sun } from 'lucide-react'

export type ThemeProps = {
  theme: string
  toggleTheme: () => void
}

const ThemeToggle = ({ theme, toggleTheme }: ThemeProps) => {
  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme}>
      {theme === 'light' ? (
        <Moon size={34} strokeWidth={1.5} />
      ) : (
        <Sun size={34} strokeWidth={1.5} />
      )}
    </button>
  )
}

export default ThemeToggle
