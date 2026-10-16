import './Projects.css'
import { projects } from '../../data/projects'
import { useState } from 'react'

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState('Alla')

  const technologies = [
    ...new Set(projects.flatMap((project) => project.technologies)),
  ]

  const filteredProjects =
    selectedTech === 'Alla'
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(selectedTech),
        )

  return (
    <section id="projects" className="projects">
      <h2>Projekt</h2>
      <div className="project-filters">
        <button
          type="button"
          onClick={() => setSelectedTech('Alla')}
          className={selectedTech === 'Alla' ? 'active' : ''}
        >
          Alla
        </button>

        {technologies.map((technology) => (
          <button
            key={technology}
            type="button"
            onClick={() => setSelectedTech(technology)}
            className={selectedTech === technology ? 'active' : ''}
          >
            {technology}
          </button>
        ))}
      </div>
      <div className="projects-content">
        <div className="projects-list">
          {filteredProjects.map((project) => (
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
