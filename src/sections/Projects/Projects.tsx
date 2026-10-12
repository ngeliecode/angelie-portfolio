import './Projects.css'
import computer from '../../assets/computer.svg'
import { projects } from '../../data/projects'

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      {/* {projects.map((project) => (
        <div className="project-image" key={project.id}>
          <img src={project.image} />
        </div>
      ))} */}

      <div className="project-image-container">
        <img className="computer-illustration" src={computer} alt="" />
        <img className="project-image" src={projects[0].image} alt="" />
      </div>

      <h3>{projects[0].title}</h3>
    </section>
  )
}

export default Projects
