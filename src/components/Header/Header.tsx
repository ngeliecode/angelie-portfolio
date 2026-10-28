import './Header.css'
import { useState } from 'react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import MenuToggle from '../MenuToggle/MenuToggle'
import NavLinks from '../NavLinks/NavLinks'
import MobileMenu from '../MobileMenu/MobileMenu'

type HeaderProps = {
  theme: string
  setTheme: (theme: string) => void
}

const Header = ({ theme, setTheme }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header>
      <nav className="navbar">
        <ThemeToggle theme={theme} setTheme={setTheme} />

        <div className="desktop-menu">
          <NavLinks />
        </div>

        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <MenuToggle isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </nav>
    </header>
  )
}

export default Header
