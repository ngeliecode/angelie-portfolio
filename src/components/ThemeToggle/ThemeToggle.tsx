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
      // If theme is light, switch to dark. Otherwise, switch to light.
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Byt tema"
    >
      {theme === 'light' ? (
        <Moon size={30} strokeWidth={1.5} />
      ) : (
        <Sun size={30} strokeWidth={1.5} />
      )}
    </button>
  )
}

export default ThemeToggle
