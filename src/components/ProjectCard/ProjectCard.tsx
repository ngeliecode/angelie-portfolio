import './ProjectCard.css'
import computer from '../../assets/computer.svg'

const ProjectCard = () => {
  return (
    <article className="project">
      <div className="computer-container">
        <img className="computer" src={computer} alt="" />
        <div className="image-container"></div>
      </div>

      <h3 className="project-title"></h3>

      <p className="project-description"></p>

      <div className="tech-stack">
        <span className="badge"></span>
      </div>
    </article>
  )
}

export default ProjectCard
