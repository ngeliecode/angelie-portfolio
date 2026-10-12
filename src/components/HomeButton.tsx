import { House } from 'lucide-react'

type HomeButtonProps = {
  isHidden: boolean
}

const HomeButton = ({ isHidden }: HomeButtonProps) => {
  return (
    <a href="#" className={isHidden ? 'invisible' : ''} aria-label="Go to home">
      <House size={34} strokeWidth={1.5} />
    </a>
  )
}

export default HomeButton
