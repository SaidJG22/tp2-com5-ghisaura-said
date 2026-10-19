function ContactCard({ medio, texto, enlace }) {
  
  const esExterno = enlace.startsWith('http')

  return (
    <li className="contact-card">
      <span>{medio}</span>
      <a
        href={enlace}
        target={esExterno ? '_blank' : undefined}
        rel={esExterno ? 'noreferrer' : undefined}
      >
        {texto}
      </a>
    </li>
  )
}

export default ContactCard
