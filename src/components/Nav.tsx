import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'

import type { ThemeProps } from '../types/theme'
import type { LanguageProps } from '../types/language'

const Nav = ({
  theme,
  toggleTheme,
  language,
  toggleLanguage,
}: ThemeProps & LanguageProps) => {
  return (
    <nav className="sticky top-0 px-6 py-4 bg-[var(--color-background)]">
      <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </nav>
  )
}

export default Nav
