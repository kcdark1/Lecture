import { temas } from '../data/temas.js'
import TopicCard from '../components/TopicCard.jsx'

export default function Libro() {
  return (
    <div className="page">
      <header className="page__header">
        <span className="page__eyebrow">📖 El libro</span>
        <h1 className="page__title">Libro de Biología</h1>
        <p className="page__lead">
          {temas.length} capítulos para descubrir el fascinante mundo de los seres vivos.
          Cada uno tiene 5 páginas de lectura. Elige un capítulo y comienza.
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
