import type { LanguageProps } from '../types/language'

const LanguageToggle = ({ language, toggleLanguage }: LanguageProps) => {
  return (
    <button onClick={toggleLanguage}>{language === 'sv' ? 'EN' : 'SV'}</button>
  )
}

export default LanguageToggle
