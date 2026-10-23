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
        <X size={30} strokeWidth={1.5} />
      ) : (
        <Plus size={30} strokeWidth={1.5} />
      )}
    </button>
  )
}

export default MenuToggle
