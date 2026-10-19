import Header from '../components/Header.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import proyectos from '../data/proyectos.js'
import '../styles/Projects.css'

function Projects() {
  return (
    <section>
      <Header
        titulo="Mis"
        resaltado="proyectos"
        subtitulo="Algunos trabajos que desarrollé. Tocá «Ver más» para conocer el detalle."
      />

      <div className="projects-grilla">
        {proyectos.map((proyecto) => (
          <ProjectCard key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </section>
  )
}

export default Projects
