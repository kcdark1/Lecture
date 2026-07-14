import { useMemo, useState } from 'react'
import { normalizar } from '../../utils/texto.js'
import { useReportarCompletado } from '../../utils/actividadCallback.js'
import ResultadoNota from './ResultadoNota.jsx'

const ALFABETO = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('')
const MAX_ERRORES = 6

export default function Ahorcado({ actividad, onCompletar }) {
  const palabra = useMemo(() => normalizar(actividad.palabra), [actividad.palabra])
  const [usadas, setUsadas] = useState([])

  const letrasUnicas = useMemo(
    () => [...new Set(palabra.replace(/[^A-ZÑ]/g, '').split(''))],
    [palabra]
  )

  const errores = usadas.filter((l) => !palabra.includes(l))
  const perdio = errores.length >= MAX_ERRORES
  const gano = letrasUnicas.every((l) => usadas.includes(l))
  const terminado = perdio || gano

  useReportarCompletado(
    terminado,
    { gano, porcentaje: gano ? 100 : 0, detalle: gano ? 'Adivinó la palabra' : 'Sin completar' },
    onCompletar
  )

  const intentar = (letra) => {
    if (terminado || usadas.includes(letra)) return
    setUsadas((prev) => [...prev, letra])
  }

  const reiniciar = () => setUsadas([])

  return (
    <div className="ahorcado">
      <div className="ahorcado__top">
        <MunecoSVG errores={errores.length} />
        <div className="ahorcado__info">
          <p className="ahorcado__pista">
            <strong>Pista:</strong> {actividad.pista}
          </p>
          <p className="ahorcado__intentos">
            Intentos restantes:{' '}
            <span className={errores.length >= 4 ? 'is-danger' : ''}>
              {MAX_ERRORES - errores.length}
            </span>
          </p>
        </div>
      </div>

      <div className="ahorcado__palabra">
        {palabra.split('').map((letra, i) => {
          if (letra === ' ') return <span key={i} className="ahorcado__espacio" />
          const revelada = usadas.includes(letra) || perdio
          return (
            <span
              key={i}
              className={`ahorcado__letra ${revelada ? 'is-revelada' : ''} ${
                perdio && !usadas.includes(letra) ? 'is-fallo' : ''
              }`}
            >
              {revelada ? letra : ''}
            </span>
          )
        })}
      </div>

      {terminado ? (
        <div className={`resultado ${gano ? 'resultado--ok' : 'resultado--fail'}`}>
          <p className="resultado__titulo">
            {gano ? '🎉 ¡Muy bien! Adivinaste la palabra.' : '😔 ¡Casi! La palabra era:'}
          </p>
          {!gano && <p className="resultado__palabra">{palabra}</p>}
          <ResultadoNota gano={gano} porcentaje={gano ? 100 : 0} />
          <button className="btn btn--accent" onClick={reiniciar}>
            🔄 Jugar de nuevo
          </button>
        </div>
      ) : (
        <div className="teclado">
          {ALFABETO.map((letra) => {
            const usada = usadas.includes(letra)
            const acierto = usada && palabra.includes(letra)
            return (
              <button
                key={letra}
                className={`teclado__tecla ${usada ? (acierto ? 'is-ok' : 'is-no') : ''}`}
                onClick={() => intentar(letra)}
                disabled={usada}
              >
                {letra}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

// Dibujo del ahorcado: se van mostrando partes según los errores.
function MunecoSVG({ errores }) {
  return (
    <svg className="ahorcado__dibujo" viewBox="0 0 160 180">
      {/* Horca */}
      <line x1="10" y1="170" x2="110" y2="170" />
      <line x1="40" y1="170" x2="40" y2="10" />
      <line x1="40" y1="10" x2="110" y2="10" />
      <line x1="110" y1="10" x2="110" y2="35" />
      {/* Partes del cuerpo */}
      {errores > 0 && <circle cx="110" cy="50" r="15" className="ahorcado__cuerpo" />}
      {errores > 1 && <line x1="110" y1="65" x2="110" y2="110" className="ahorcado__cuerpo" />}
      {errores > 2 && <line x1="110" y1="75" x2="90" y2="95" className="ahorcado__cuerpo" />}
      {errores > 3 && <line x1="110" y1="75" x2="130" y2="95" className="ahorcado__cuerpo" />}
      {errores > 4 && <line x1="110" y1="110" x2="92" y2="140" className="ahorcado__cuerpo" />}
      {errores > 5 && <line x1="110" y1="110" x2="128" y2="140" className="ahorcado__cuerpo" />}
    </svg>
  )
}
