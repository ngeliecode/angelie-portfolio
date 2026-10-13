import { Link } from 'react-router'

type HomeLinkProps = {
  isHidden: boolean
}

const HomeLink = ({ isHidden }: HomeLinkProps) => {
  return (
    <Link
      to="/"
      className={`home-link min-h-[44px] flex items-center ${isHidden ? 'invisible' : ''}`}
    >
      Go home
    </Link>
  )
}

export default HomeLink
