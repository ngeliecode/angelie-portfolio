import { Moon, Sun } from 'lucide-react'

export type ThemeProps = {
  theme: string
  setTheme: (theme: string) => void
}

const ThemeToggle = ({ theme, setTheme }: ThemeProps) => {
  return (
    <button
      className="theme-toggle inline-flex h-11 w-11 items-center justify-center"
      type="button"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon size={28} strokeWidth={1} />
      ) : (
        <Sun size={28} strokeWidth={1} />
      )}
    </button>
  )
}

export default ThemeToggle
