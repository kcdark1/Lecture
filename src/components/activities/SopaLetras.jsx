import { useMemo, useState } from 'react'
import { normalizar } from '../../utils/texto.js'
import { useReportarCompletado } from '../../utils/actividadCallback.js'

// Sopa de letras: se genera una cuadrícula con las palabras
// escondidas. El estudiante hace clic en la primera y la última
// letra de una palabra para marcarla.
export default function SopaLetras({ actividad, onCompletar }) {
  const [seed, setSeed] = useState(0)
  const palabrasLimpias = useMemo(
    () => actividad.palabras.map((p) => normalizar(p).replace(/[^A-ZÑ]/g, '')),
    [actividad.palabras]
  )
  const { grid, size, colocadas } = useMemo(
    () => generarSopa(palabrasLimpias),
    [palabrasLimpias, seed]
  )

  const [encontradas, setEncontradas] = useState([])
  const [inicio, setInicio] = useState(null) // {r,c}

  const clicCelda = (r, c) => {
    if (!inicio) {
      setInicio({ r, c })
      return
    }
    if (inicio.r === r && inicio.c === c) {
      setInicio(null)
      return
    }
    const linea = trazarLinea(inicio, { r, c })
    setInicio(null)
    if (!linea) return

    const palabra = colocadas.find(
      (p) => !encontradas.includes(p.palabra) && coincide(linea, p.celdas)
    )
    if (palabra) setEncontradas((prev) => [...prev, palabra.palabra])
  }

  const celdasEncontradas = useMemo(() => {
    const set = new Set()
    colocadas
      .filter((p) => encontradas.includes(p.palabra))
      .forEach((p) => p.celdas.forEach((cel) => set.add(`${cel.r}-${cel.c}`)))
    return set
  }, [encontradas, colocadas])

  const gano = encontradas.length === colocadas.length

  useReportarCompletado(
    gano,
    { aciertos: encontradas.length, total: colocadas.length, porcentaje: Math.round((encontradas.length / colocadas.length) * 100) },
    onCompletar
  )

  const reiniciar = () => {
    setEncontradas([])
    setInicio(null)
    setSeed((s) => s + 1)
  }

  return (
    <div className="sopa">
      <p className="sopa__ayuda">
        Toca la <strong>primera</strong> y la <strong>última</strong> letra de cada palabra.
      </p>

      <div className="sopa__cols">
        <div
          className="sopa__grid"
          style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
        >
          {grid.map((fila, r) =>
            fila.map((letra, c) => {
              const key = `${r}-${c}`
              const esInicio = inicio && inicio.r === r && inicio.c === c
              const hallada = celdasEncontradas.has(key)
              return (
                <button
                  key={key}
                  className={`sopa__celda ${hallada ? 'is-hallada' : ''} ${esInicio ? 'is-inicio' : ''}`}
                  onClick={() => clicCelda(r, c)}
                >
                  {letra}
                </button>
              )
            })
          )}
        </div>

        <ul className="sopa__palabras">
          {colocadas.map((p) => (
            <li key={p.palabra} className={encontradas.includes(p.palabra) ? 'is-hallada' : ''}>
              {encontradas.includes(p.palabra) ? '✅' : '🔎'} {p.palabra}
            </li>
          ))}
        </ul>
      </div>

      {gano ? (
        <div className="resultado resultado--ok">
          <p className="resultado__emoji">🎉</p>
          <p className="resultado__titulo">¡Encontraste todas las palabras!</p>
          <button className="btn btn--accent" onClick={reiniciar}>🔄 Nueva sopa</button>
        </div>
      ) : (
        <p className="sopa__marcador">
          Encontradas: <strong>{encontradas.length} / {colocadas.length}</strong>
        </p>
      )}
    </div>
  )
}

// ---------- Generación de la sopa ----------
const DIRECCIONES = [
  { dr: 0, dc: 1 }, // →
  { dr: 1, dc: 0 }, // ↓
  { dr: 1, dc: 1 }, // ↘
  { dr: -1, dc: 1 }, // ↗
]
const LETRAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function generarSopa(palabras) {
  const masLarga = Math.max(...palabras.map((p) => p.length), 8)
  const size = Math.min(Math.max(masLarga + 1, 10), 14)
  const grid = Array.from({ length: size }, () => Array(size).fill(''))
  const colocadas = []

  const ordenadas = [...palabras].sort((a, b) => b.length - a.length)

  for (const palabra of ordenadas) {
    let puesta = false
    for (let intento = 0; intento < 200 && !puesta; intento++) {
      const dir = DIRECCIONES[Math.floor(Math.random() * DIRECCIONES.length)]
      const r0 = Math.floor(Math.random() * size)
      const c0 = Math.floor(Math.random() * size)
      const rFin = r0 + dir.dr * (palabra.length - 1)
      const cFin = c0 + dir.dc * (palabra.length - 1)
      if (rFin < 0 || rFin >= size || cFin < 0 || cFin >= size) continue

      let cabe = true
      const celdas = []
      for (let k = 0; k < palabra.length; k++) {
        const r = r0 + dir.dr * k
        const c = c0 + dir.dc * k
        const actual = grid[r][c]
        if (actual !== '' && actual !== palabra[k]) {
          cabe = false
          break
        }
        celdas.push({ r, c })
      }
      if (!cabe) continue

      celdas.forEach((cel, k) => {
        grid[cel.r][cel.c] = palabra[k]
      })
      colocadas.push({ palabra, celdas })
      puesta = true
    }
  }

  // Rellenar huecos con letras al azar
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (grid[r][c] === '') {
        grid[r][c] = LETRAS[Math.floor(Math.random() * LETRAS.length)]
      }
    }
  }

  return { grid, size, colocadas }
}

// Traza una línea recta entre dos celdas (o null si no es recta)
function trazarLinea(a, b) {
  const dr = Math.sign(b.r - a.r)
  const dc = Math.sign(b.c - a.c)
  const largoR = Math.abs(b.r - a.r)
  const largoC = Math.abs(b.c - a.c)
  const esRecta = a.r === b.r || a.c === b.c || largoR === largoC
  if (!esRecta) return null
  const largo = Math.max(largoR, largoC)
  const celdas = []
  for (let k = 0; k <= largo; k++) {
    celdas.push({ r: a.r + dr * k, c: a.c + dc * k })
  }
  return celdas
}

// ¿La línea seleccionada corresponde a la palabra (en cualquier sentido)?
function coincide(linea, celdas) {
  if (linea.length !== celdas.length) return false
  const igual = linea.every((cel, i) => cel.r === celdas[i].r && cel.c === celdas[i].c)
  const invertida = linea.every(
    (cel, i) => cel.r === celdas[celdas.length - 1 - i].r && cel.c === celdas[celdas.length - 1 - i].c
  )
  return igual || invertida
}
