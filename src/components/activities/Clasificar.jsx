import { useMemo, useState } from 'react'
import { useReportarCompletado } from '../../utils/actividadCallback.js'
import ResultadoNota from './ResultadoNota.jsx'

// Clasifica: cada elemento debe asignarse a su categoría correcta.
export default function Clasificar({ actividad, onCompletar }) {
  const items = useMemo(() => mezclar(actividad.items), [actividad.items])
  const [asignado, setAsignado] = useState(() => items.map(() => null))
  const [comprobado, setComprobado] = useState(false)

  const asignar = (i, cat) => {
    if (comprobado) return
    setAsignado((prev) => {
      const copia = [...prev]
      copia[i] = cat
      return copia
    })
  }

  const todos = asignado.every((a) => a !== null)
  const aciertos = asignado.filter((a, i) => a === items[i].cat).length

  const comprobar = () => setComprobado(true)
  const reiniciar = () => {
    setAsignado(items.map(() => null))
    setComprobado(false)
  }

  useReportarCompletado(
    comprobado,
    { aciertos, total: items.length, porcentaje: Math.round((aciertos / items.length) * 100) },
    onCompletar
  )

  return (
    <div className="clasificar">
      <div className="clasificar__leyenda">
        {actividad.categorias.map((cat, i) => (
          <span key={i} className="clasificar__cat">
            {cat.emoji} {cat.nombre}
          </span>
        ))}
      </div>

      <ul className="clasificar__lista">
        {items.map((item, i) => {
          const elegido = asignado[i]
          const correcto = elegido === item.cat
          let estado = ''
          if (comprobado) estado = correcto ? 'is-ok' : 'is-no'
          return (
            <li key={item.texto} className={`clasificar__item ${estado}`}>
              <span className="clasificar__texto">{item.texto}</span>
              <div className="clasificar__botones">
                {actividad.categorias.map((cat, ci) => (
                  <button
                    key={ci}
                    className={`clasificar__btn ${elegido === ci ? 'is-sel' : ''}`}
                    onClick={() => asignar(i, ci)}
                    disabled={comprobado}
                  >
                    {cat.emoji}
                  </button>
                ))}
              </div>
              {comprobado && !correcto && (
                <span className="clasificar__correccion">
                  → {actividad.categorias[item.cat].emoji} {actividad.categorias[item.cat].nombre}
                </span>
              )}
            </li>
          )
        })}
      </ul>

      {comprobado ? (
        <div className={`resultado ${aciertos === items.length ? 'resultado--ok' : 'resultado--fail'}`}>
          <p className="resultado__titulo">
            Acertaste {aciertos} de {items.length}
            {aciertos === items.length ? ' 🎉 ¡Perfecto!' : ' 💪 ¡Sigue practicando!'}
          </p>
          <ResultadoNota aciertos={aciertos} total={items.length} />
          <button className="btn btn--accent" onClick={reiniciar}>🔄 Intentar de nuevo</button>
        </div>
      ) : (
        <button className="btn btn--accent" onClick={comprobar} disabled={!todos}>
          {todos ? 'Comprobar' : 'Clasifica todos los elementos'}
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
