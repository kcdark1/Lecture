import { useParams, Link } from 'react-router-dom'
import { getActividad, getActividadesDeTema, etiquetasTipo } from '../data/actividades.js'
import { getTema } from '../data/temas.js'
import Ahorcado from '../components/activities/Ahorcado.jsx'
import Completar from '../components/activities/Completar.jsx'
import Quiz from '../components/activities/Quiz.jsx'
import VerdaderoFalso from '../components/activities/VerdaderoFalso.jsx'
import Memoria from '../components/activities/Memoria.jsx'
import Secuencia from '../components/activities/Secuencia.jsx'
import Anagrama from '../components/activities/Anagrama.jsx'
import SopaLetras from '../components/activities/SopaLetras.jsx'
import Clasificar from '../components/activities/Clasificar.jsx'
import Relacionar from '../components/activities/Relacionar.jsx'
import NotFound from './NotFound.jsx'

const COMPONENTES = {
  ahorcado: Ahorcado,
  completar: Completar,
  quiz: Quiz,
  verdaderofalso: VerdaderoFalso,
  memoria: Memoria,
  secuencia: Secuencia,
  anagrama: Anagrama,
  sopa: SopaLetras,
  clasificar: Clasificar,
  relacionar: Relacionar,
}

export default function ActividadDetalle() {
  const { id } = useParams()
  const actividad = getActividad(id)

  if (!actividad) return <NotFound />

  const tema = getTema(actividad.temaId)
  const etq = etiquetasTipo[actividad.tipo]
  const Componente = COMPONENTES[actividad.tipo]

  // Otra actividad del mismo tema, para sugerir "continuar"
  const otra = getActividadesDeTema(actividad.temaId).find((a) => a.id !== actividad.id)

  return (
    <div className="actividad" style={{ '--accent': tema?.color || '#10b981' }}>
      <header className="actividad__header">
        <Link to="/actividades" className="tema__volver">← Volver a las actividades</Link>
        <div className="actividad__tag">
          <span>{etq.emoji} {etq.nombre}</span>
          <Link to={`/libro/${tema.id}`} className="actividad__tema-link">
            {tema.emoji} {tema.titulo}
          </Link>
        </div>
        <h1 className="actividad__titulo">{actividad.titulo}</h1>
        <p className="actividad__desc">{actividad.descripcion}</p>
      </header>

      <div className="actividad__juego">
        {Componente ? <Componente actividad={actividad} /> : <p>Actividad no disponible.</p>}
      </div>

      <div className="actividad__siguiente">
        <Link to={`/libro/${tema.id}`} className="btn btn--ghost">📖 Repasar el capítulo</Link>
        {otra && (
          <Link to={`/actividad/${otra.id}`} className="btn btn--primary">
            {etiquetasTipo[otra.tipo].emoji} Otra actividad de este tema →
          </Link>
        )}
      </div>
    </div>
  )
}
