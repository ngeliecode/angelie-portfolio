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
          <a
            href={projects[active].liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="project-image"
              src={projects[active].image}
              alt=""
            />
          </a>
        </div>

        <div className="project-links">
          <a
            href={projects[active].liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="project-title">{projects[active].title}</h3>
          </a>
          <a
            href={projects[active].githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
        </div>
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
