import { useMemo, useState } from 'react'
import { sonIguales } from '../../utils/texto.js'
import { useReportarCompletado } from '../../utils/actividadCallback.js'

// Ordena la palabra (anagrama): las letras aparecen desordenadas y
// el estudiante las va colocando en orden con ayuda de la pista.
export default function Anagrama({ actividad, onCompletar }) {
  const total = actividad.palabras.length
  const [indice, setIndice] = useState(0)
  const [colocadas, setColocadas] = useState([]) // fichas elegidas, en orden
  const [estado, setEstado] = useState(null) // 'ok' | 'no' | null
  const [aciertos, setAciertos] = useState(0)
  const [terminado, setTerminado] = useState(false)

  const actual = actividad.palabras[indice]
  const fichas = useMemo(() => desordenarLetras(actual.palabra), [indice, actual.palabra])

  const disponibles = fichas.filter((f) => !colocadas.some((c) => c.id === f.id))

  const elegir = (ficha) => {
    if (estado) return
    setColocadas((prev) => [...prev, ficha])
  }
  const quitar = (ficha) => {
    if (estado) return
    setColocadas((prev) => prev.filter((c) => c.id !== ficha.id))
  }

  const comprobar = () => {
    const intento = colocadas.map((c) => c.char).join('')
    const ok = sonIguales(intento, actual.palabra)
    setEstado(ok ? 'ok' : 'no')
    if (ok) setAciertos((n) => n + 1)
  }

  const siguiente = () => {
    if (indice + 1 < total) {
      setIndice((n) => n + 1)
      setColocadas([])
      setEstado(null)
    } else {
      setTerminado(true)
    }
  }

  const reiniciar = () => {
    setIndice(0)
    setColocadas([])
    setEstado(null)
    setAciertos(0)
    setTerminado(false)
  }

  useReportarCompletado(
    terminado,
    { aciertos, total, porcentaje: Math.round((aciertos / total) * 100) },
    onCompletar
  )

  if (terminado) {
    const perfecto = aciertos === total
    return (
      <div className={`resultado ${perfecto ? 'resultado--ok' : 'resultado--fail'}`}>
        <p className="resultado__emoji">{perfecto ? '🏆' : '📚'}</p>
        <p className="resultado__titulo">Formaste {aciertos} de {total} palabras</p>
        <button className="btn btn--accent" onClick={reiniciar}>🔄 Volver a jugar</button>
      </div>
    )
  }

  const completa = colocadas.length === fichas.length

  return (
    <div className="anagrama">
      <p className="anagrama__contador">Palabra {indice + 1} de {total}</p>
      <p className="anagrama__pista"><strong>Pista:</strong> {actual.pista}</p>

      {/* Casillas de respuesta */}
      <div className={`anagrama__respuesta ${estado ? `is-${estado}` : ''}`}>
        {fichas.map((_, i) => {
          const ficha = colocadas[i]
          return (
            <button
              key={i}
              className={`anagrama__slot ${ficha ? 'is-llena' : ''}`}
              onClick={() => ficha && quitar(ficha)}
              disabled={!ficha || !!estado}
            >
              {ficha ? ficha.char : ''}
            </button>
          )
        })}
      </div>

      {estado === 'ok' && <p className="anagrama__feedback is-ok">✅ ¡Muy bien!</p>}
      {estado === 'no' && (
        <p className="anagrama__feedback is-no">❌ La palabra correcta es: <strong>{actual.palabra}</strong></p>
      )}

      {/* Fichas disponibles */}
      {!estado && (
        <div className="anagrama__banco">
          {disponibles.map((ficha) => (
            <button key={ficha.id} className="anagrama__ficha" onClick={() => elegir(ficha)}>
              {ficha.char}
            </button>
          ))}
        </div>
      )}

      <div className="anagrama__acciones">
        {!estado ? (
          <button className="btn btn--accent" onClick={comprobar} disabled={!completa}>
            {completa ? 'Comprobar' : 'Coloca todas las letras'}
          </button>
        ) : (
          <button className="btn btn--accent" onClick={siguiente}>
            {indice + 1 < total ? 'Siguiente palabra →' : 'Ver resultado'}
          </button>
        )}
      </div>
    </div>
  )
}

function desordenarLetras(palabra) {
  const letras = palabra.toUpperCase().split('').map((char, i) => ({ id: i, char }))
  let mezclado = mezclar(letras)
  let intentos = 0
  while (mezclado.map((l) => l.char).join('') === palabra.toUpperCase() && intentos < 10) {
    mezclado = mezclar(letras)
    intentos++
  }
  return mezclado
}

function mezclar(arr) {
  const copia = [...arr]
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copia[i], copia[j]] = [copia[j], copia[i]]
  }
  return copia
}
