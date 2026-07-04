import { Link } from 'react-router-dom'
import { etiquetasTipo } from '../data/actividades.js'
import { getTema } from '../data/temas.js'

export default function ActivityCard({ actividad }) {
  const etiqueta = etiquetasTipo[actividad.tipo]
  const tema = getTema(actividad.temaId)

  return (
    <Link
      to={`/actividad/${actividad.id}`}
      className="activity-card"
      style={{ '--accent': tema?.color || '#10b981' }}
    >
      <div className="activity-card__top">
        <span className="activity-card__icon">{etiqueta?.emoji}</span>
        <span className="activity-card__type">{etiqueta?.nombre}</span>
      </div>
      <h3 className="activity-card__title">{actividad.titulo}</h3>
      <p className="activity-card__desc">{actividad.descripcion}</p>
      <div className="activity-card__foot">
        <span className="activity-card__tema">
          {tema?.emoji} {tema?.titulo}
        </span>
        <span className="activity-card__play">Jugar →</span>
      </div>
    </Link>
  )
}
