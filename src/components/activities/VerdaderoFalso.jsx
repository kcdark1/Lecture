import { useState } from 'react'
import { useReportarCompletado } from '../../utils/actividadCallback.js'
import ResultadoNota from './ResultadoNota.jsx'

export default function VerdaderoFalso({ actividad, onCompletar }) {
  const total = actividad.afirmaciones.length
  const [respuestas, setRespuestas] = useState(() => actividad.afirmaciones.map(() => null))
  const [comprobado, setComprobado] = useState(false)

  const responder = (i, valor) => {
    if (comprobado) return
    setRespuestas((prev) => {
      const copia = [...prev]
      copia[i] = valor
      return copia
    })
  }

  const todasRespondidas = respuestas.every((r) => r !== null)
  const aciertos = respuestas.filter((r, i) => r === actividad.afirmaciones[i].esVerdadero).length

  const comprobar = () => setComprobado(true)
  const reiniciar = () => {
    setRespuestas(actividad.afirmaciones.map(() => null))
    setComprobado(false)
  }

  useReportarCompletado(
    comprobado,
    { aciertos, total, porcentaje: Math.round((aciertos / total) * 100) },
    onCompletar
  )

  return (
    <div className="vf">
      <ul className="vf__lista">
        {actividad.afirmaciones.map((af, i) => {
          const elegida = respuestas[i]
          const correcta = elegida === af.esVerdadero
          return (
            <li key={i} className={`vf__item ${comprobado ? (correcta ? 'is-ok' : 'is-no') : ''}`}>
              <p className="vf__texto">{af.texto}</p>
              <div className="vf__botones">
                <button
                  className={`vf__btn vf__btn--v ${elegida === true ? 'is-sel' : ''}`}
                  onClick={() => responder(i, true)}
                  disabled={comprobado}
                >
                  ✓ Verdadero
                </button>
                <button
                  className={`vf__btn vf__btn--f ${elegida === false ? 'is-sel' : ''}`}
                  onClick={() => responder(i, false)}
                  disabled={comprobado}
                >
                  ✗ Falso
                </button>
              </div>
              {comprobado && (
                <p className={`vf__explica ${correcta ? 'is-ok' : 'is-no'}`}>
                  {correcta ? '✅ ' : '❌ '}
                  {af.explicacion}
                </p>
              )}
            </li>
          )
        })}
      </ul>

      {comprobado ? (
        <div className={`resultado ${aciertos === total ? 'resultado--ok' : 'resultado--fail'}`}>
          <p className="resultado__titulo">
            Acertaste {aciertos} de {total}
            {aciertos === total ? ' 🎉 ¡Excelente!' : ' 💪 ¡Buen intento!'}
          </p>
          <ResultadoNota aciertos={aciertos} total={total} />
          <button className="btn btn--accent" onClick={reiniciar}>🔄 Intentar de nuevo</button>
        </div>
      ) : (
        <button className="btn btn--accent" onClick={comprobar} disabled={!todasRespondidas}>
          {todasRespondidas ? 'Comprobar respuestas' : 'Responde todas las afirmaciones'}
        </button>
      )}
    </div>
  )
}
