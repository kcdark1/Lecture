import { useState } from 'react'

export default function Quiz({ actividad }) {
  const total = actividad.preguntas.length
  const [actual, setActual] = useState(0)
  const [elegida, setElegida] = useState(null)
  const [aciertos, setAciertos] = useState(0)
  const [terminado, setTerminado] = useState(false)

  const pregunta = actividad.preguntas[actual]

  const responder = (i) => {
    if (elegida !== null) return
    setElegida(i)
    if (i === pregunta.correcta) setAciertos((a) => a + 1)
  }

  const siguiente = () => {
    if (actual + 1 < total) {
      setActual((a) => a + 1)
      setElegida(null)
    } else {
      setTerminado(true)
    }
  }

  const reiniciar = () => {
    setActual(0)
    setElegida(null)
    setAciertos(0)
    setTerminado(false)
  }

  if (terminado) {
    const perfecto = aciertos === total
    return (
      <div className={`resultado ${perfecto ? 'resultado--ok' : 'resultado--fail'}`}>
        <p className="resultado__emoji">{perfecto ? '🏆' : aciertos >= total / 2 ? '👏' : '📚'}</p>
        <p className="resultado__titulo">Obtuviste {aciertos} de {total}</p>
        <p className="resultado__sub">
          {perfecto ? '¡Puntuación perfecta!' : aciertos >= total / 2 ? '¡Muy bien! Casi lo logras.' : '¡Repasa el capítulo y vuelve a intentarlo!'}
        </p>
        <button className="btn btn--accent" onClick={reiniciar}>🔄 Volver a jugar</button>
      </div>
    )
  }

  return (
    <div className="quiz">
      <div className="quiz__barra">
        <div className="quiz__progreso" style={{ width: `${(actual / total) * 100}%` }} />
      </div>
      <p className="quiz__contador">Pregunta {actual + 1} de {total}</p>
      <h3 className="quiz__pregunta">{pregunta.pregunta}</h3>

      <div className="quiz__opciones">
        {pregunta.opciones.map((op, i) => {
          let estado = ''
          if (elegida !== null) {
            if (i === pregunta.correcta) estado = 'is-ok'
            else if (i === elegida) estado = 'is-no'
          }
          return (
            <button
              key={i}
              className={`quiz__opcion ${estado}`}
              onClick={() => responder(i)}
              disabled={elegida !== null}
            >
              <span className="quiz__letra">{String.fromCharCode(65 + i)}</span>
              {op}
            </button>
          )
        })}
      </div>

      {elegida !== null && (
        <div className="quiz__feedback">
          <p className={elegida === pregunta.correcta ? 'is-ok' : 'is-no'}>
            {elegida === pregunta.correcta ? '✅ ¡Correcto!' : '❌ Respuesta correcta: ' + pregunta.opciones[pregunta.correcta]}
          </p>
          <button className="btn btn--accent" onClick={siguiente}>
            {actual + 1 < total ? 'Siguiente →' : 'Ver resultado'}
          </button>
        </div>
      )}
    </div>
  )
}
