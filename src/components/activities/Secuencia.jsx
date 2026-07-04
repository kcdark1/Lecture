import { useMemo, useState } from 'react'

// Ordena la secuencia: se muestran los pasos desordenados y el
// estudiante los sube o baja hasta dejarlos en el orden correcto.
export default function Secuencia({ actividad }) {
  const inicial = useMemo(() => desordenar(actividad.pasos), [actividad.pasos])
  const [orden, setOrden] = useState(inicial)
  const [comprobado, setComprobado] = useState(false)

  const mover = (i, dir) => {
    if (comprobado) return
    const j = i + dir
    if (j < 0 || j >= orden.length) return
    setOrden((prev) => {
      const copia = [...prev]
      ;[copia[i], copia[j]] = [copia[j], copia[i]]
      return copia
    })
  }

  const comprobar = () => setComprobado(true)
  const reiniciar = () => {
    setOrden(desordenar(actividad.pasos))
    setComprobado(false)
  }

  const aciertos = orden.filter((p, i) => p.correcto === i).length
  const todoBien = aciertos === orden.length

  return (
    <div className="secuencia">
      {actividad.intro && <p className="secuencia__intro">{actividad.intro}</p>}

      <ol className="secuencia__lista">
        {orden.map((paso, i) => {
          let estado = ''
          if (comprobado) estado = paso.correcto === i ? 'is-ok' : 'is-no'
          return (
            <li key={paso.correcto} className={`secuencia__item ${estado}`}>
              <span className="secuencia__num">{i + 1}</span>
              <span className="secuencia__texto">{paso.texto}</span>
              {!comprobado && (
                <span className="secuencia__flechas">
                  <button onClick={() => mover(i, -1)} disabled={i === 0} aria-label="Subir">▲</button>
                  <button onClick={() => mover(i, 1)} disabled={i === orden.length - 1} aria-label="Bajar">▼</button>
                </span>
              )}
              {comprobado && <span className="secuencia__check">{paso.correcto === i ? '✅' : '❌'}</span>}
            </li>
          )
        })}
      </ol>

      {comprobado ? (
        <div className={`resultado ${todoBien ? 'resultado--ok' : 'resultado--fail'}`}>
          <p className="resultado__titulo">
            {todoBien ? '🎉 ¡Orden perfecto!' : `Tienes ${aciertos} de ${orden.length} en su lugar`}
          </p>
          {!todoBien && <p className="resultado__sub">Revisa el capítulo y vuelve a intentarlo. 💪</p>}
          <button className="btn btn--accent" onClick={reiniciar}>🔄 Intentar de nuevo</button>
        </div>
      ) : (
        <button className="btn btn--accent secuencia__comprobar" onClick={comprobar}>
          Comprobar orden
        </button>
      )}
    </div>
  )
}

// Desordena los pasos guardando su posición correcta. Evita
// devolverlos ya ordenados.
function desordenar(pasos) {
  const items = pasos.map((texto, i) => ({ texto, correcto: i }))
  let intentos = 0
  let mezclado = mezclar(items)
  while (estaOrdenado(mezclado) && intentos < 10) {
    mezclado = mezclar(items)
    intentos++
  }
  return mezclado
}

function estaOrdenado(items) {
  return items.every((p, i) => p.correcto === i)
}

function mezclar(arr) {
  const copia = [...arr]
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copia[i], copia[j]] = [copia[j], copia[i]]
  }
  return copia
}
