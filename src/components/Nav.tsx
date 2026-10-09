import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'

import type { ThemeProps } from '../types/theme'
import type { LanguageProps } from '../types/language'

import './Nav.css'

const Nav = ({
  theme,
  toggleTheme,
  language,
  toggleLanguage,
}: ThemeProps & LanguageProps) => {
  return (
    <nav className="navbar">
      <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </nav>
  )
}

export default Nav
