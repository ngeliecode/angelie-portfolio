import './Projects.css'
import computer from '../../assets/computer.svg'
import { projects } from '../../data/projects'
import { useState } from 'react'

const Projects = () => {
  const [active, setActive] = useState(0)

  function nextProject() {
    setActive((current) => (current + 1) % projects.length)
  }

  function prevProject() {
    setActive((current) => (current - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-image-container">
        <img className="computer-illustration" src={computer} alt="" />
        <img className="project-image" src={projects[active].image} alt="" />
      </div>

      <h3>{projects[active].title}</h3>
      <p>{projects[active].description}</p>

      <div className="swipe">
        <button onClick={prevProject}>←</button>
        <button onClick={nextProject}>→</button>
      </div>
    </section>
  )
}

export default Projects
