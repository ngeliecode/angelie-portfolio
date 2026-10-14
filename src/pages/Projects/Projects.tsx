import './Projects.css'
import computer from '../../assets/computer.svg'
import { projects } from '../../data/projects'
import { useState } from 'react'

const Projects = () => {
  const [active, setActive] = useState(0)

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project">
        <div className="project-image-container">
          <img className="computer-illustration" src={computer} alt="" />
          <img className="project-image" src={projects[active].image} alt="" />
        </div>

        <h3 className="project-title">{projects[active].title}</h3>
        <p className="project-description">{projects[active].description}</p>
      </div>

      <div className="projects-buttons">
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
