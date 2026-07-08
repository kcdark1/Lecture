import { useMemo, useState } from 'react'
import { useReportarCompletado } from '../../utils/actividadCallback.js'

// Relaciona: dos columnas. El estudiante toca un término y luego su
// definición para unirlos. Si acierta, la pareja queda fijada.
export default function Relacionar({ actividad, onCompletar }) {
  const [seed, setSeed] = useState(0)
  const definiciones = useMemo(
    () => mezclar(actividad.pares.map((p, i) => ({ texto: p.definicion, par: i }))),
    [actividad.pares, seed]
  )

  const [seleccion, setSeleccion] = useState(null) // índice del término seleccionado
  const [emparejados, setEmparejados] = useState([]) // índices de pares resueltos
  const [error, setError] = useState(null) // par de definición con error momentáneo
  const [intentos, setIntentos] = useState(0)

  const clicTermino = (i) => {
    if (emparejados.includes(i)) return
    setSeleccion((prev) => (prev === i ? null : i))
    setError(null)
  }

  const clicDefinicion = (def) => {
    if (emparejados.includes(def.par) || seleccion === null) return
    setIntentos((n) => n + 1)
    if (def.par === seleccion) {
      setEmparejados((prev) => [...prev, def.par])
      setSeleccion(null)
    } else {
      setError(def.par)
      setTimeout(() => setError(null), 700)
    }
  }

  const gano = emparejados.length === actividad.pares.length

  useReportarCompletado(
    gano,
    { porcentaje: 100, intentos, detalle: `Parejas en ${intentos} intentos` },
    onCompletar
  )

  const reiniciar = () => {
    setSeleccion(null)
    setEmparejados([])
    setError(null)
    setIntentos(0)
    setSeed((s) => s + 1)
  }

  return (
    <div className="relacionar">
      <p className="relacionar__ayuda">
        Toca un <strong>término</strong> y luego su <strong>definición</strong>.
      </p>

      <div className="relacionar__cols">
        <div className="relacionar__col">
          {actividad.pares.map((par, i) => {
            const resuelto = emparejados.includes(i)
            const activo = seleccion === i
            return (
              <button
                key={i}
                className={`relacionar__termino ${resuelto ? 'is-ok' : ''} ${activo ? 'is-activo' : ''}`}
                onClick={() => clicTermino(i)}
                disabled={resuelto}
              >
                {par.termino}
              </button>
            )
          })}
        </div>

        <div className="relacionar__col">
          {definiciones.map((def) => {
            const resuelto = emparejados.includes(def.par)
            const conError = error === def.par
            return (
              <button
                key={def.par}
                className={`relacionar__def ${resuelto ? 'is-ok' : ''} ${conError ? 'is-error' : ''}`}
                onClick={() => clicDefinicion(def)}
                disabled={resuelto}
              >
                {def.texto}
              </button>
            )
          })}
        </div>
      </div>

      {gano ? (
        <div className="resultado resultado--ok">
          <p className="resultado__emoji">🎉</p>
          <p className="resultado__titulo">¡Uniste todas las parejas!</p>
          <p className="resultado__sub">Lo lograste en {intentos} intentos.</p>
          <button className="btn btn--accent" onClick={reiniciar}>🔄 Jugar de nuevo</button>
        </div>
      ) : (
        <p className="relacionar__marcador">
          Unidas: <strong>{emparejados.length} / {actividad.pares.length}</strong>
        </p>
      )}
    </div>
  )
}

function mezclar(arr) {
  const copia = [...arr]
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copia[i], copia[j]] = [copia[j], copia[i]]
  }
  return copia
}
