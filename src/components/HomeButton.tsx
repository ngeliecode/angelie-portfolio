import { House } from 'lucide-react'

type HomeButtonProps = {
  isHidden: boolean
  hideHomeBtn: () => void
}

const HomeButton = ({ isHidden, hideHomeBtn }: HomeButtonProps) => {
  return (
    <a
      href="#home"
      className={isHidden ? 'invisible' : ''}
      onClick={hideHomeBtn}
      aria-label="Go to home"
    >
      <House size={34} strokeWidth={1.5} />
    </a>
  )
}

export default HomeButton
