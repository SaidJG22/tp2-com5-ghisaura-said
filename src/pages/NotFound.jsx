import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'


function NotFound() {
  return (
    <section>
      <Header titulo="Página no" resaltado="encontrada" subtitulo="La dirección que escribiste no existe en este sitio." />
      <Link to="/" className="boton">Volver al inicio</Link>
    </section>
  )
}

export default NotFound
