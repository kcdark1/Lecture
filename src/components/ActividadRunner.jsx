import Ahorcado from './activities/Ahorcado.jsx'
import Completar from './activities/Completar.jsx'
import Quiz from './activities/Quiz.jsx'
import VerdaderoFalso from './activities/VerdaderoFalso.jsx'
import Memoria from './activities/Memoria.jsx'
import Secuencia from './activities/Secuencia.jsx'
import Anagrama from './activities/Anagrama.jsx'
import SopaLetras from './activities/SopaLetras.jsx'
import Clasificar from './activities/Clasificar.jsx'
import Relacionar from './activities/Relacionar.jsx'

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

export default function ActividadRunner({ actividad, onCompletar }) {
  const Componente = COMPONENTES[actividad.tipo]
  if (!Componente) return <p>Actividad no disponible.</p>
  return <Componente actividad={actividad} onCompletar={onCompletar} />
}
