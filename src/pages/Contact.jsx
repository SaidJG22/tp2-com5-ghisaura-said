import Header from '../components/Header.jsx'
import ContactCard from '../components/ContactCard.jsx'
import contactos from '../data/contactos.js'
import '../styles/Contact.css'

function Contact({ nombre }) {
  const anio = new Date().getFullYear()

  return (
    <section>
      <Header
        titulo="¿Trabajamos"
        resaltado="juntos?"
        subtitulo="Si tenés una idea o un proyecto, escribime por cualquiera de estos medios."
      />

      <ul className="contact-lista">
        {contactos.map((contacto) => (
          <ContactCard
            key={contacto.id}
            medio={contacto.medio}
            texto={contacto.texto}
            enlace={contacto.enlace}
          />
        ))}
      </ul>

      <p className="contact-final">© {anio} {nombre} · saidcode.dev</p>
    </section>
  )
}

export default Contact
