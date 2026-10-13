import { House } from 'lucide-react'
import { Link } from 'react-router'

type HomeButtonProps = {
  isHidden: boolean
}

const HomeButton = ({ isHidden }: HomeButtonProps) => {
  return (
    <Link
      to="/"
      className={isHidden ? 'invisible' : ''}
      aria-label="Go to home"
    >
      <House size={34} strokeWidth={1.5} />
    </Link>
  )
}

export default HomeButton
