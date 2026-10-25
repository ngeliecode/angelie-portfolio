type MenuToggleProps = {
  isMenuOpen: boolean
  setIsMenuOpen: (value: boolean) => void
}

const MenuToggle = ({ isMenuOpen, setIsMenuOpen }: MenuToggleProps) => {
  return (
    <button
      className="menu-toggle button button-secondary button--menu-toggle"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-expanded={isMenuOpen}
      aria-label={isMenuOpen ? 'Stäng meny' : 'Öppna meny'}
    >
      {isMenuOpen ? 'Stäng meny' : 'Öppna meny'}
    </button>
  )
}

export default MenuToggle
