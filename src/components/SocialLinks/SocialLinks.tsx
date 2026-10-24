import './SocialLinks.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://github.com/ngeliecode"
        aria-label="GitHub"
        className="social-link social-link--github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://linkedin.com/in/angelieångman"
        aria-label="LinkedIn"
        className="social-link social-link--linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </div>
  )
}

export default SocialLinks
