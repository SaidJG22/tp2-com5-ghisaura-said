import { Link } from 'react-router-dom'
import '../styles/Home.css'

// Accesos rápidos a las demás páginas del sitio
const secciones = [
  { ruta: '/about', titulo: 'Sobre mí', texto: 'Quién soy, mi formación y mis objetivos.' },
  { ruta: '/skills', titulo: 'Habilidades', texto: 'Las tecnologías y herramientas que uso.' },
  { ruta: '/projects', titulo: 'Proyectos', texto: 'Trabajos reales que desarrollé.' },
  { ruta: '/contact', titulo: 'Contacto', texto: 'Cómo comunicarte conmigo.' },
]

function Home({ nombre }) {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-info">
          <p className="hero-saludo">Hola, soy</p>
          <h1 className="hero-titulo">{nombre}</h1>
          <h2 className="hero-subtitulo">
            Programador full stack · <span>saidcode.dev</span>
          </h2>
          <p className="hero-texto">
            Desarrollo aplicaciones web y de escritorio, desde la base de datos
            hasta la interfaz. Estudiante de la UTN FRT con 2 años de
            experiencia trabajando en proyectos reales.
          </p>

          <div className="hero-botones">
            <Link to="/projects" className="boton">Ver proyectos</Link>
            <Link to="/contact" className="boton boton-secundario">Contactame</Link>
          </div>
        </div>

        <div className="hero-foto">
          <img src="/foto-mia.jpeg" alt={`Foto de ${nombre}`} />
        </div>
      </div>

      <h2 className="home-intro-titulo">¿Qué vas a encontrar en este sitio?</h2>
      <div className="home-intro">
        {secciones.map((seccion) => (
          <Link key={seccion.ruta} to={seccion.ruta} className="home-intro-card">
            <h3>{seccion.titulo} →</h3>
            <p>{seccion.texto}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Home
