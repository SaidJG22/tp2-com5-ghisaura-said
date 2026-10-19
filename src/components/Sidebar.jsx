import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Sidebar.css'


const opciones = [
  { ruta: '/', texto: 'Home' },
  { ruta: '/about', texto: 'Sobre mí' },
  { ruta: '/skills', texto: 'Habilidades' },
  { ruta: '/projects', texto: 'Proyectos' },
  { ruta: '/contact', texto: 'Contacto' },
]

function Sidebar({ nombre, profesion }) {
  
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <aside className="sidebar">
      <div className="sidebar-cabecera">
        <Link to="/" className="sidebar-marca" onClick={() => setMenuAbierto(false)}>
          <span className="sidebar-foto">
            <img src="/foto-mia.jpeg" alt={`Foto de ${nombre}`} />
          </span>
          <span>
            <span className="sidebar-nombre">{nombre}</span>
            <span className="sidebar-profesion">{profesion}</span>
          </span>
        </Link>

        <button
          className="sidebar-boton-menu"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-expanded={menuAbierto}
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuAbierto ? '✕' : '☰'}
        </button>
      </div>

      <nav className={menuAbierto ? 'sidebar-nav abierto' : 'sidebar-nav'}>
        {opciones.map((opcion) => (
          <NavLink
            key={opcion.ruta}
            to={opcion.ruta}
            end={opcion.ruta === '/'}
            className={({ isActive }) => (isActive ? 'sidebar-link activo' : 'sidebar-link')}
            onClick={() => setMenuAbierto(false)}
          >
            {opcion.texto}
          </NavLink>
        ))}
      </nav>

      <p className="sidebar-pie">saidcode.dev</p>
    </aside>
  )
}

export default Sidebar
