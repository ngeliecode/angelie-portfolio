import './Navbar.css'
import { useState } from 'react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import MenuToggle from '../MenuToggle/MenuToggle'
import NavLinks from '../NavLinks/NavLinks'
import MobileMenu from '../MobileMenu/MobileMenu'

type NavbarProps = {
  theme: string
  setTheme: (theme: string) => void
}

const Navbar = ({ theme, setTheme }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <ThemeToggle theme={theme} setTheme={setTheme} />

      <div className="desktop-menu">
        <NavLinks />
      </div>

      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MenuToggle isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </nav>
  )
}

export default Navbar
