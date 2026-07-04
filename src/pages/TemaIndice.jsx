import { useParams, Link } from 'react-router-dom'
import { temas, getTema, totalPaginas } from '../data/temas.js'
import { getActividadesDeTema, etiquetasTipo } from '../data/actividades.js'
import SmartImage from '../components/SmartImage.jsx'
import NotFound from './NotFound.jsx'

// Portada e índice del capítulo: lista todas sus páginas.
export default function TemaIndice() {
  const { id } = useParams()
  const tema = getTema(id)

  if (!tema) return <NotFound />

  const indice = temas.findIndex((t) => t.id === id)
  const anterior = temas[indice - 1]
  const siguiente = temas[indice + 1]
  const actividades = getActividadesDeTema(id)
  const numPaginas = totalPaginas(id)

  return (
    <article className="tema tema--indice" style={{ '--accent': tema.color }}>
      <header className="tema__portada">
        <Link to="/libro" className="tema__volver">← Volver al libro</Link>
        <div className="tema__portada-grid">
          <div className="tema__portada-text">
            <span className="tema__cap">Capítulo {tema.numero}</span>
            <h1 className="tema__titulo">
              <span className="tema__emoji">{tema.emoji}</span> {tema.titulo}
            </h1>
            <p className="tema__subtitulo">{tema.subtitulo}</p>
            <p className="tema__resumen">{tema.resumen}</p>
            <Link to={`/libro/${id}/p/1`} className="btn btn--primary btn--lg tema__comenzar">
              📖 Comenzar lectura
            </Link>
            <p className="tema__paginas-count">{numPaginas} páginas · ~{numPaginas * 3} min de lectura</p>
          </div>
          <div className="tema__portada-img">
            <SmartImage
              src={tema.imagen}
              alt={tema.imagenAlt}
              emoji={tema.emoji}
              color={tema.color}
              ratio="4 / 3"
            />
          </div>
        </div>
      </header>

      <section className="tema__indice">
        <h2>📑 Índice del capítulo</h2>
        <ol className="indice-lista">
          {tema.paginas.map((pag) => (
            <li key={pag.numero}>
              <Link to={`/libro/${id}/p/${pag.numero}`} className="indice-item">
                <span className="indice-item__num">{pag.numero}</span>
                <div>
                  <strong>{pag.titulo}</strong>
                  {pag.tipo === 'repaso' && <span className="indice-item__tag">Repaso</span>}
                </div>
                <span className="indice-item__arrow">→</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="tema__actividades">
        <h2>🎮 Actividades de este capítulo</h2>
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

      <nav className="tema__nav">
        {anterior ? (
          <Link to={`/libro/${anterior.id}`} className="tema__nav-btn">
            <span>← Capítulo anterior</span>
            <strong>{anterior.emoji} {anterior.titulo}</strong>
          </Link>
        ) : (
          <span />
        )}
        {siguiente ? (
          <Link to={`/libro/${siguiente.id}`} className="tema__nav-btn tema__nav-btn--next">
            <span>Siguiente capítulo →</span>
            <strong>{siguiente.emoji} {siguiente.titulo}</strong>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  )
}
