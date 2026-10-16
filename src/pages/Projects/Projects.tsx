import './Projects.css'
import { projects } from '../../data/projects'
import { useState } from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

const Projects = () => {
  const [active, setActive] = useState(0)

  return (
    <section id="projects" className="projects">
      <h2>Projekt</h2>

      <div className="projects-content">
        <ProjectCard active={active} />
      </div>

      <div className="projects-navigate">
        {projects.map((project, index) => (
          <button
            key={project.id}
            onClick={() => setActive(index)}
            className={active === index ? 'active' : ''}
            aria-label={`Project ${project.id}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
