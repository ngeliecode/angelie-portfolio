import './MenuToggle.css'
import { TextAlignEnd, X } from 'lucide-react'

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
      {isMenuOpen ? (
        <X size={28} strokeWidth={1.5} />
      ) : (
        <TextAlignEnd size={28} strokeWidth={1.5} />
      )}
    </button>
  )
}

export default MenuToggle
