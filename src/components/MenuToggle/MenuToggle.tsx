import './MenuToggle.css'

type MenuToggleProps = {
  isMenuOpen: boolean
  setIsMenuOpen: (value: boolean) => void
}

const MenuToggle = ({ isMenuOpen, setIsMenuOpen }: MenuToggleProps) => {
  return (
    <button
      className="menu-toggle"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-expanded={isMenuOpen}
      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
    >
      {isMenuOpen ? 'Stäng' : 'Meny'}
    </button>
  )
}

export default MenuToggle
