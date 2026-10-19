import { useState } from 'react'
import Header from '../components/Header.jsx'
import '../styles/About.css'

function About() {
  const [mostrarMas, setMostrarMas] = useState(false)

  return (
    <section className="about">
      <Header titulo="Sobre" resaltado="mí" subtitulo="Un poco de mi historia y hacia dónde voy." />

      <div className="about-texto">
        <p>
          Soy Said Ghisaura, programador full stack con 2 años de experiencia
          y estudiante de la UTN Facultad Regional Tucumán. Me gusta
          transformar necesidades concretas en software simple y útil.
        </p>
        <p>
          Trabajo como freelance bajo la marca <strong>saidcode.dev</strong>,
          desarrollando sistemas a medida para organizaciones y
          emprendimientos de Tucumán.
        </p>

        {mostrarMas && (
          <div className="about-extra">
            <p>
              <strong>Intereses:</strong> me interesa el desarrollo web con
              React, el diseño de bases de datos y la creación de herramientas
              que simplifiquen el trabajo diario de las personas.
            </p>
            <p>
              <strong>Objetivos:</strong> terminar la carrera, seguir creciendo
              como desarrollador y sumar proyectos freelance cada vez más
              completos, cuidando tanto el código como la experiencia de uso.
            </p>
            <p>
              <strong>Perfil profesional:</strong> trabajo tanto en el frontend
              (React, JavaScript, HTML y CSS) como en el backend (Node.js, C# y
              MySQL), y uso Git para organizar cada proyecto.
            </p>
          </div>
        )}
      </div>

      <button className="boton boton-secundario" onClick={() => setMostrarMas(!mostrarMas)}>
        {mostrarMas ? 'Ver menos' : 'Ver más'}
      </button>

      <div className="about-formacion">
        <h2>Formación</h2>
        <ul>
          <li>
            <strong>Tecnicatura Universitaria en Programación</strong>
            <span>UTN — Facultad Regional Tucumán · En curso</span>
          </li>
          <li>
            <strong>Inglés</strong>
            <span>Nivel intermedio</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
