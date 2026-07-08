import { Link } from 'react-router-dom'
import { totalPaginas } from '../data/temas.js'
import { capitulosCurso } from '../data/curso.js'
import SmartImage from './SmartImage.jsx'

export default function TopicCard({ tema }) {
  const paginas = totalPaginas(tema.id)
  const cap = capitulosCurso.find((c) => c.temaId === tema.id)
  const primerPaso = cap?.pasos[0]?.id

  return (
    <Link to={primerPaso ? `/curso/${primerPaso}` : '/curso'} className="topic-card" style={{ '--accent': tema.color }}>
      <div className="topic-card__media">
        <SmartImage
          src={tema.imagen}
          alt={tema.imagenAlt}
          emoji={tema.emoji}
          color={tema.color}
          ratio="16 / 10"
        />
        <span className="topic-card__badge">Capítulo {tema.numero} · {paginas} págs.</span>
      </div>
      <div className="topic-card__body">
        <h3 className="topic-card__title">
          <span className="topic-card__emoji">{tema.emoji}</span>
          {tema.titulo}
        </h3>
        <p className="topic-card__subtitle">{tema.subtitulo}</p>
        <p className="topic-card__resumen">{tema.resumen}</p>
        <span className="topic-card__link">Ir al capítulo →</span>
      </div>
    </Link>
  )
}
