import { Moon, Sun } from 'lucide-react'

export type ThemeProps = {
  theme: string
  setTheme: (theme: string) => void
}

const ThemeToggle = ({ theme, setTheme }: ThemeProps) => {
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon size={34} strokeWidth={1.5} />
      ) : (
        <Sun size={34} strokeWidth={1.5} />
      )}
    </button>
  )
}

export default ThemeToggle
