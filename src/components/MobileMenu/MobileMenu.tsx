import './MobileMenu.css'
import { useEffect } from 'react'
import NavLinks from '../NavLinks/NavLinks'
import SocialLinks from '../SocialLinks/SocialLinks'

type MobileMenuProps = {
  isMenuOpen: boolean
  setIsMenuOpen: (value: boolean) => void
}

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) => {
  // Close mobile menu on big screen
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')

    const closeMenu = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false)
      }
    }

    mediaQuery.addEventListener('change', closeMenu)
    return () => mediaQuery.removeEventListener('change', closeMenu)
  }, [setIsMenuOpen])

  return (
    <div
      className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest('a')) {
          setIsMenuOpen(false)
        }
      }}
    >
      <NavLinks />
      <footer>
        <p>♥ 2026 ANGELIE ÅNGMAN</p>
        <SocialLinks />
      </footer>
    </div>
  )
}

export default MobileMenu
