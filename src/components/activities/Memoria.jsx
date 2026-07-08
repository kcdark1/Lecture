import { useMemo, useState } from 'react'
import { useReportarCompletado } from '../../utils/actividadCallback.js'

// Memorama: se muestran cartas boca abajo. Al voltear dos, si
// pertenecen a la misma pareja (término + descripción) se quedan
// destapadas. Gana cuando encuentra todas las parejas.
export default function Memoria({ actividad, onCompletar }) {
  const cartasIniciales = useMemo(() => crearCartas(actividad.pares), [actividad.pares])
  const [cartas, setCartas] = useState(cartasIniciales)
  const [volteadas, setVolteadas] = useState([]) // índices volteados temporalmente
  const [encontradas, setEncontradas] = useState([]) // ids de parejas encontradas
  const [intentos, setIntentos] = useState(0)
  const [bloqueo, setBloqueo] = useState(false)

  const voltear = (indice) => {
    if (bloqueo) return
    const carta = cartas[indice]
    if (encontradas.includes(carta.pareja) || volteadas.includes(indice)) return

    const nuevas = [...volteadas, indice]
    setVolteadas(nuevas)

    if (nuevas.length === 2) {
      setIntentos((n) => n + 1)
      const [a, b] = nuevas
      if (cartas[a].pareja === cartas[b].pareja) {
        setEncontradas((prev) => [...prev, cartas[a].pareja])
        setVolteadas([])
      } else {
        setBloqueo(true)
        setTimeout(() => {
          setVolteadas([])
          setBloqueo(false)
        }, 900)
      }
    }
  }

  const gano = encontradas.length === actividad.pares.length

  useReportarCompletado(
    gano,
    { porcentaje: 100, intentos, detalle: `Parejas en ${intentos} intentos` },
    onCompletar
  )

  const reiniciar = () => {
    setCartas(crearCartas(actividad.pares))
    setVolteadas([])
    setEncontradas([])
    setIntentos(0)
    setBloqueo(false)
  }

  return (
    <div className="memoria">
      <p className="memoria__marcador">
        Parejas: <strong>{encontradas.length} / {actividad.pares.length}</strong> · Intentos: <strong>{intentos}</strong>
      </p>

      <div className="memoria__tablero">
        {cartas.map((carta, i) => {
          const abierta = volteadas.includes(i) || encontradas.includes(carta.pareja)
          const resuelta = encontradas.includes(carta.pareja)
          return (
            <button
              key={carta.id}
              className={`carta ${abierta ? 'is-abierta' : ''} ${resuelta ? 'is-resuelta' : ''}`}
              onClick={() => voltear(i)}
              disabled={abierta || bloqueo}
            >
              <span className="carta__cara carta__cara--atras">🧬</span>
              <span className="carta__cara carta__cara--frente">{carta.texto}</span>
            </button>
          )
        })}
      </div>

      {gano && (
        <div className="resultado resultado--ok">
          <p className="resultado__emoji">🏆</p>
          <p className="resultado__titulo">¡Encontraste todas las parejas!</p>
          <p className="resultado__sub">Lo lograste en {intentos} intentos.</p>
          <button className="btn btn--accent" onClick={reiniciar}>🔄 Jugar de nuevo</button>
        </div>
      )}
    </div>
  )
}

function crearCartas(pares) {
  const cartas = []
  pares.forEach((par, i) => {
    cartas.push({ id: `${i}-a`, pareja: i, texto: par.a })
    cartas.push({ id: `${i}-b`, pareja: i, texto: par.b })
  })
  return mezclar(cartas)
}

function mezclar(arr) {
  const copia = [...arr]
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copia[i], copia[j]] = [copia[j], copia[i]]
  }
  return copia
}
