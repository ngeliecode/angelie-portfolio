import { Plus, X } from 'lucide-react'

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
      aria-label={isMenuOpen ? 'Stäng meny' : 'Öppna meny'}
    >
      {isMenuOpen ? (
        <X className="close-icon" size={30} strokeWidth={1.5} />
      ) : (
        <Plus className="open-icon" size={30} strokeWidth={1.5} />
      )}
    </button>
  )
}

export default MenuToggle
