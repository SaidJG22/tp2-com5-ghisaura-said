import { useState } from 'react'
import Header from '../components/Header.jsx'
import SkillCard from '../components/SkillCard.jsx'
import habilidades from '../data/habilidades.js'
import '../styles/Skills.css'

const categorias = ['Todas', 'Frontend', 'Backend', 'Herramientas']

function Skills() {
  
  const [categoria, setCategoria] = useState('Todas')

  const habilidadesFiltradas =
    categoria === 'Todas'
      ? habilidades
      : habilidades.filter((habilidad) => habilidad.categoria === categoria)

  return (
    <section>
      <Header titulo="Mis" resaltado="habilidades" subtitulo="Tecnologías y herramientas con las que trabajo." />

      <div className="skills-filtros">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={cat === categoria ? 'filtro activo' : 'filtro'}
            onClick={() => setCategoria(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="skills-grilla">
        {habilidadesFiltradas.map((habilidad) => (
          <SkillCard
            key={habilidad.id}
            nombre={habilidad.nombre}
            descripcion={habilidad.descripcion}
            categoria={habilidad.categoria}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills
