import './ProjectCard.css'
import computer from '../../assets/computer.svg'
import { projects } from '../../data/projects'

const ProjectCard = ({ active }) => {
  return (
    <article className="project-card">
      <div className="project-image">
        <img className="computer-illustration" src={computer} alt="" />
        <a
          className="live-link"
          href={projects[active].liveUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="project-screenshot"
            src={projects[active].image}
            alt=""
          />
        </a>
      </div>

      <div className="project-info">
        {/* Title */}
        <div className="project-title">
          <a
            href={projects[active].liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="project-title">{projects[active].title}</h3>
          </a>
        </div>

        {/* Description */}
        <p className="project-description">{projects[active].description}</p>

        {/* GitHub Repo */}
        <a
          className="project-github"
          href={projects[active].githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Klicka här för att läsa mer om projektet på GitHub
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
