import { useMemo, useState } from 'react'
import { sonIguales } from '../../utils/texto.js'
import { useReportarCompletado } from '../../utils/actividadCallback.js'

export default function Completar({ actividad, onCompletar }) {
  const banco = useMemo(() => mezclar(actividad.banco), [actividad.banco])
  const [respuestas, setRespuestas] = useState(() => actividad.frases.map(() => null))
  const [seleccionada, setSeleccionada] = useState(null) // índice del hueco activo
  const [comprobado, setComprobado] = useState(false)

  const usadas = respuestas.filter(Boolean)
  const disponibles = banco.filter((p) => !usadas.includes(p))

  const colocarPalabra = (palabra) => {
    if (comprobado) return
    let destino = seleccionada
    if (destino === null) destino = respuestas.findIndex((r) => r === null)
    if (destino === -1 || destino === null) return
    setRespuestas((prev) => {
      const copia = [...prev]
      copia[destino] = palabra
      return copia
    })
    setSeleccionada(null)
  }

  const clicHueco = (i) => {
    if (comprobado) return
    if (respuestas[i]) {
      // quitar la palabra y devolverla al banco
      setRespuestas((prev) => {
        const copia = [...prev]
        copia[i] = null
        return copia
      })
      setSeleccionada(i)
    } else {
      setSeleccionada((prev) => (prev === i ? null : i))
    }
  }

  const comprobar = () => setComprobado(true)
  const reiniciar = () => {
    setRespuestas(actividad.frases.map(() => null))
    setSeleccionada(null)
    setComprobado(false)
  }

  const todasLlenas = respuestas.every(Boolean)
  const aciertos = respuestas.filter((r, i) => r && sonIguales(r, actividad.frases[i].respuesta)).length

  useReportarCompletado(
    comprobado,
    { aciertos, total: actividad.frases.length, porcentaje: Math.round((aciertos / actividad.frases.length) * 100) },
    onCompletar
  )

  return (
    <div className="completar">
      <div className="completar__banco">
        {disponibles.length === 0 && !comprobado && (
          <span className="completar__banco-vacio">Toca un hueco para cambiar una palabra ✍️</span>
        )}
        {disponibles.map((palabra) => (
          <button
            key={palabra}
            className="chip"
            onClick={() => colocarPalabra(palabra)}
            disabled={comprobado}
          >
            {palabra}
          </button>
        ))}
      </div>

      <ol className="completar__frases">
        {actividad.frases.map((frase, i) => {
          const [antes, despues] = frase.texto.split('___')
          const valor = respuestas[i]
          const correcta = valor && sonIguales(valor, frase.respuesta)
          let estado = ''
          if (comprobado) estado = correcta ? 'is-ok' : 'is-no'
          else if (seleccionada === i) estado = 'is-activo'

          return (
            <li key={i} className="completar__frase">
              <span>{antes}</span>
              <button
                className={`hueco ${estado}`}
                onClick={() => clicHueco(i)}
                disabled={comprobado}
              >
                {valor || '_______'}
              </button>
              <span>{despues}</span>
              {comprobado && !correcta && (
                <span className="completar__correccion"> ✅ {frase.respuesta}</span>
              )}
            </li>
          )
        })}
      </ol>

      {comprobado ? (
        <div className={`resultado ${aciertos === actividad.frases.length ? 'resultado--ok' : 'resultado--fail'}`}>
          <p className="resultado__titulo">
            Acertaste {aciertos} de {actividad.frases.length}
            {aciertos === actividad.frases.length ? ' 🎉 ¡Perfecto!' : ' 💪 ¡Sigue intentando!'}
          </p>
          <button className="btn btn--accent" onClick={reiniciar}>🔄 Intentar de nuevo</button>
        </div>
      ) : (
        <button className="btn btn--accent completar__comprobar" onClick={comprobar} disabled={!todasLlenas}>
          {todasLlenas ? 'Comprobar respuestas' : 'Completa todos los huecos'}
        </button>
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
