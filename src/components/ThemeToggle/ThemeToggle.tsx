import { Moon, Sun } from 'lucide-react'

type ThemeProps = {
  theme: string
  setTheme: (theme: string) => void
}

const ThemeToggle = ({ theme, setTheme }: ThemeProps) => {
  return (
    <button
      className="button button-secondary button--theme-toggle theme-toggle"
      type="button"
      // If theme is light, switch to dark. Otherwise, switch to light.
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Byt tema"
    >
      {theme === 'light' ? (
        <>
          <Moon size={15} strokeWidth={1} />
          Byt till dark mode
        </>
      ) : (
        <>
          <Sun size={15} strokeWidth={1} />
          Byt till light mode
        </>
      )}
    </button>
  )
}

export default ThemeToggle
