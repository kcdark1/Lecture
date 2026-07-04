import { Link } from 'react-router-dom'
import { totalPaginas } from '../data/temas.js'

// Barra de progreso del capítulo: muestra en qué página vas.
export default function ChapterProgress({ temaId, paginaActual, color }) {
  const total = totalPaginas(temaId)

  return (
    <div className="chapter-progress" style={{ '--accent': color }}>
      <span className="chapter-progress__label">
        Página {paginaActual} de {total}
      </span>
      <div className="chapter-progress__bar">
        <div
          className="chapter-progress__fill"
          style={{ width: `${(paginaActual / total) * 100}%` }}
        />
      </div>
      <div className="chapter-progress__dots">
        {Array.from({ length: total }, (_, i) => {
          const num = i + 1
          const activa = num === paginaActual
          const leida = num < paginaActual
          return (
            <Link
              key={num}
              to={`/libro/${temaId}/p/${num}`}
              className={`chapter-progress__dot ${activa ? 'is-active' : ''} ${leida ? 'is-read' : ''}`}
              title={`Página ${num}`}
            />
          )
        })}
      </div>
    </div>
  )
}
