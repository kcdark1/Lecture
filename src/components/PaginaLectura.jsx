import SmartImage from './SmartImage.jsx'

// Renderiza el contenido de una página del libro:
// párrafos, puntos clave, caja destacada e imagen opcional.
export default function PaginaLectura({ pagina, tema }) {
  return (
    <div className="pagina-lectura">
      <header className="pagina-lectura__header">
        <span className="pagina-lectura__num">Página {pagina.numero}</span>
        <h1 className="pagina-lectura__titulo">{pagina.titulo}</h1>
      </header>

      {pagina.imagen && (
        <div className="pagina-lectura__img">
          <SmartImage
            src={pagina.imagen}
            alt={pagina.imagenAlt || pagina.titulo}
            emoji={tema.emoji}
            color={tema.color}
            ratio="16 / 9"
          />
          {pagina.imagenFuente && (
            <p className="pagina-lectura__fuente">{pagina.imagenFuente}</p>
          )}
        </div>
      )}

      <div className="pagina-lectura__cuerpo">
        {pagina.parrafos?.map((p, i) => (
          <p key={i} className="pagina-lectura__parrafo">{p}</p>
        ))}

        {pagina.subtemas?.map((sub, i) => (
          <section key={i} className="pagina-lectura__subtema">
            <h2 className="pagina-lectura__subtema-titulo">{sub.titulo}</h2>
            {sub.parrafos?.map((p, j) => (
              <p key={j} className="pagina-lectura__parrafo">{p}</p>
            ))}
          </section>
        ))}

        {pagina.tipo === 'repaso' && pagina.destacado && (
          <aside className="pagina-lectura__destacado">{pagina.destacado}</aside>
        )}

        {pagina.tipo === 'repaso' && pagina.puntosClave?.length > 0 && (
          <div className="pagina-lectura__puntos">
            <h3>📌 Puntos clave</h3>
            <ul>
              {pagina.puntosClave.map((punto, i) => (
                <li key={i}>{punto}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
