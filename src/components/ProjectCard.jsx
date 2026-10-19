import { useState } from 'react'

function ProjectCard({ proyecto }) {

  const [verDetalle, setVerDetalle] = useState(false)

  return (
    <article className="project-card">
      <h3>{proyecto.titulo}</h3>
      <p>{proyecto.descripcion}</p>

      {verDetalle && <p className="project-detalle">{proyecto.detalle}</p>}

      <ul className="project-tecnologias">
        {proyecto.tecnologias.map((tecnologia) => (
          <li key={tecnologia}>{tecnologia}</li>
        ))}
      </ul>

      <div className="project-botones">
        <button className="boton boton-chico" onClick={() => setVerDetalle(!verDetalle)}>
          {verDetalle ? 'Ver menos' : 'Ver más'}
        </button>

        {proyecto.link && (
          <a
            href={proyecto.link}
            target="_blank"
            rel="noreferrer"
            className="boton boton-secundario boton-chico"
          >
            {proyecto.textoLink}
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
