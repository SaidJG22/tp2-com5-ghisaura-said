
function Header({ titulo, resaltado, subtitulo }) {
  return (
    <header className="page-header">
      <h1 className="seccion-titulo">
        {titulo} <span>{resaltado}</span>
      </h1>
      {subtitulo && <p className="page-header-subtitulo">{subtitulo}</p>}
    </header>
  )
}

export default Header
