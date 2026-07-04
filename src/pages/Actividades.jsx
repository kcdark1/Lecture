import { useState } from 'react'
import { actividades, etiquetasTipo } from '../data/actividades.js'
import ActivityCard from '../components/ActivityCard.jsx'

const FILTROS = [
  { id: 'todos', nombre: 'Todas', emoji: '🌟' },
  { id: 'ahorcado', nombre: 'Ahorcado', emoji: '🎯' },
  { id: 'completar', nombre: 'Completar', emoji: '✏️' },
  { id: 'quiz', nombre: 'Quiz', emoji: '❓' },
  { id: 'verdaderofalso', nombre: 'Verdadero o Falso', emoji: '⚖️' },
  { id: 'memoria', nombre: 'Memorama', emoji: '🃏' },
  { id: 'secuencia', nombre: 'Ordena la secuencia', emoji: '🔢' },
  { id: 'anagrama', nombre: 'Ordena la palabra', emoji: '🔤' },
  { id: 'sopa', nombre: 'Sopa de letras', emoji: '🔎' },
  { id: 'clasificar', nombre: 'Clasifica', emoji: '🗂️' },
  { id: 'relacionar', nombre: 'Relaciona', emoji: '🔗' },
]

export default function Actividades() {
  const [filtro, setFiltro] = useState('todos')

  const visibles =
    filtro === 'todos' ? actividades : actividades.filter((a) => a.tipo === filtro)

  return (
    <div className="page">
      <header className="page__header">
        <span className="page__eyebrow">🎮 Zona de juegos</span>
        <h1 className="page__title">Actividades interactivas</h1>
        <p className="page__lead">
          {actividades.length} actividades para demostrar lo que aprendiste en el libro.
          ¡Elige una y a jugar!
        </p>
      </header>

      <div className="filtros">
        {FILTROS.map((f) => (
          <button
            key={f.id}
            className={`filtro ${filtro === f.id ? 'is-active' : ''}`}
            onClick={() => setFiltro(f.id)}
          >
            <span>{f.emoji}</span> {f.nombre}
            {f.id !== 'todos' && (
              <em className="filtro__count">
                {actividades.filter((a) => a.tipo === f.id).length}
              </em>
            )}
          </button>
        ))}
      </div>

      <div className="grid grid--act">
        {visibles.map((act) => (
          <ActivityCard key={act.id} actividad={act} />
        ))}
      </div>
    </div>
  )
}
