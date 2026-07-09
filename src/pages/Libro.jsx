import { temas, UNIDAD, NIVEL } from '../data/temas.js'
import TopicCard from '../components/TopicCard.jsx'

export default function Libro() {
  return (
    <div className="page">
      <header className="page__header">
        <span className="page__eyebrow">📖 {NIVEL} — Unidad: {UNIDAD}</span>
        <h1 className="page__title">Origen de la vida</h1>
        <p className="page__lead">
          {temas.length} temas para comprender cómo surgió la vida en la Tierra.
          Cada uno tiene 2 páginas de lectura. Elige un tema y comienza.
        </p>
      </header>

      <div className="grid grid--cards">
        {temas.map((tema) => (
          <TopicCard key={tema.id} tema={tema} />
        ))}
      </div>
    </div>
  )
}
