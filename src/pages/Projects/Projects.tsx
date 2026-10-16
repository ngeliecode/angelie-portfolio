import './Projects.css'
import { projects } from '../../data/projects'

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projekt</h2>
      <div className="projects-content">
        <div className="projects-list">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Besök ${project.title}`}
              >
                <img src={project.image} alt={project.title} />
              </a>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Läs mer om projektet på GitHub
                </a>
              )}

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology} className="technology-tag">
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
