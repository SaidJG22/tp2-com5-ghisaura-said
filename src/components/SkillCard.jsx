function SkillCard({ nombre, descripcion, categoria }) {
  return (
    <article className="skill-card">
      <span className="skill-categoria">{categoria}</span>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
    </article>
  )
}

export default SkillCard
