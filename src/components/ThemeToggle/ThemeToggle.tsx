import { Moon, Sun } from 'lucide-react'

type ThemeProps = {
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
        <Moon size={25} strokeWidth={1} />
      ) : (
        <Sun size={25} strokeWidth={1} />
      )}
    </button>
  )
}

export default ThemeToggle
