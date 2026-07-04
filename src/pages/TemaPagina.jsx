import { useParams, Link } from 'react-router-dom'
import { temas, getTema, getPagina, totalPaginas } from '../data/temas.js'
import { getActividadesDeTema, etiquetasTipo } from '../data/actividades.js'
import ChapterProgress from '../components/ChapterProgress.jsx'
import PaginaLectura from '../components/PaginaLectura.jsx'
import NotFound from './NotFound.jsx'

// Una página individual del capítulo, con navegación anterior/siguiente.
export default function TemaPagina() {
  const { id, num } = useParams()
  const tema = getTema(id)
  const pagina = getPagina(id, num)

  if (!tema || !pagina) return <NotFound />

  const numActual = Number(num)
  const total = totalPaginas(id)
  const esRepaso = pagina.tipo === 'repaso'
  const actividades = getActividadesDeTema(id)

  const indiceCap = temas.findIndex((t) => t.id === id)
  const capSiguiente = temas[indiceCap + 1]

  return (
    <article className="tema tema--pagina" style={{ '--accent': tema.color }}>
      {/* CABECERA DEL LIBRO */}
      <div className="libro-header">
        <Link to={`/libro/${id}`} className="tema__volver">
          ← Cap. {tema.numero}: {tema.titulo}
        </Link>
        <ChapterProgress temaId={id} paginaActual={numActual} color={tema.color} />
      </div>

      <div className="libro-layout">
        {/* CONTENIDO PRINCIPAL */}
        <div className="libro-pagina">
          <PaginaLectura pagina={pagina} tema={tema} />

          {/* En la página de repaso: vocabulario, datos curiosos y actividades */}
          {esRepaso && (
            <div className="libro-repaso">
              <section className="datos">
                <h2>💡 ¿Sabías que...?</h2>
                <ul className="datos__lista">
                  {tema.datosCuriosos.map((dato, i) => (
                    <li key={i}>{dato}</li>
                  ))}
                </ul>
              </section>

              <section className="vocab vocab--inline">
                <h2>📚 Vocabulario del capítulo</h2>
                <dl className="vocab__grid">
                  {tema.vocabulario.map((v, i) => (
                    <div key={i} className="vocab__item">
                      <dt>{v.palabra}</dt>
                      <dd>{v.definicion}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section className="tema__actividades tema__actividades--inline">
                <h2>🎮 ¡Practica lo aprendido!</h2>
                <div className="tema__act-grid">
                  {actividades.map((act) => {
                    const etq = etiquetasTipo[act.tipo]
                    return (
                      <Link key={act.id} to={`/actividad/${act.id}`} className="mini-act">
                        <span className="mini-act__icon">{etq.emoji}</span>
                        <div>
                          <strong>{act.titulo}</strong>
                          <span className="mini-act__tipo">{etq.nombre}</span>
                        </div>
                        <span className="mini-act__arrow">→</span>
                      </Link>
                    )
                  })}
                </div>
              </section>
            </div>
          )}
        </div>

        {/* ÍNDICE LATERAL (escritorio) */}
        <aside className="libro-sidebar">
          <h3>📑 Páginas</h3>
          <ol className="sidebar-paginas">
            {tema.paginas.map((p) => (
              <li key={p.numero}>
                <Link
                  to={`/libro/${id}/p/${p.numero}`}
                  className={`sidebar-pagina ${p.numero === numActual ? 'is-active' : ''} ${p.numero < numActual ? 'is-read' : ''}`}
                >
                  <span className="sidebar-pagina__num">{p.numero}</span>
                  <span className="sidebar-pagina__titulo">{p.titulo}</span>
                </Link>
              </li>
            ))}
          </ol>
        </aside>
      </div>

      {/* NAVEGACIÓN ENTRE PÁGINAS */}
      <nav className="pagina-nav">
        {numActual > 1 ? (
          <Link to={`/libro/${id}/p/${numActual - 1}`} className="pagina-nav__btn">
            ← Página anterior
          </Link>
        ) : (
          <Link to={`/libro/${id}`} className="pagina-nav__btn pagina-nav__btn--ghost">
            ← Índice del capítulo
          </Link>
        )}

        {numActual < total ? (
          <Link to={`/libro/${id}/p/${numActual + 1}`} className="pagina-nav__btn pagina-nav__btn--next">
            Siguiente página →
          </Link>
        ) : capSiguiente ? (
          <Link to={`/libro/${capSiguiente.id}`} className="pagina-nav__btn pagina-nav__btn--next">
            Siguiente capítulo: {capSiguiente.emoji} {capSiguiente.titulo} →
          </Link>
        ) : (
          <Link to="/libro" className="pagina-nav__btn pagina-nav__btn--next">
            🎉 Fin del libro →
          </Link>
        )}
      </nav>
    </article>
  )
}
