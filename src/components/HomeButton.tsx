import { Link } from 'react-router'

type HomeButtonProps = {
  isHidden: boolean
}

const HomeButton = ({ isHidden }: HomeButtonProps) => {
  return (
    <Link to="/" className={isHidden ? 'invisible' : ''}>
      Go home
    </Link>
  )
}

export default HomeButton
