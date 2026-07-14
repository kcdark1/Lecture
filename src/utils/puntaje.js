// Calificación uniforme: cada actividad se evalúa sobre 10 puntos.

export function calcularNota10(resultado) {
  if (!resultado) return null
  if (resultado.nota !== undefined && resultado.nota !== null) return resultado.nota

  if (resultado.aciertos !== undefined && resultado.total > 0) {
    return Math.round((resultado.aciertos / resultado.total) * 10 * 10) / 10
  }
  if (resultado.porcentaje !== undefined) {
    return Math.round((resultado.porcentaje / 100) * 10 * 10) / 10
  }
  if (resultado.gano === true) return 10
  if (resultado.gano === false) return 0
  return null
}

export function formatearNota10(nota) {
  if (nota === null || nota === undefined) return '—'
  const n = Number(nota)
  if (Number.isNaN(n)) return '—'
  return Number.isInteger(n) ? `${n}/10` : `${n.toFixed(1)}/10`
}

export function promedioNotas10(puntajes) {
  const notas = Object.values(puntajes || {})
    .map((p) => calcularNota10(p))
    .filter((n) => n !== null)
  if (!notas.length) return null
  return Math.round((notas.reduce((a, b) => a + b, 0) / notas.length) * 10) / 10
}

export function nivelDesdeNota10(nota) {
  if (nota === null || nota === undefined) return 'Pendiente'
  if (nota >= 9) return 'Excelente'
  if (nota >= 7) return 'Muy bien'
  if (nota >= 5) return 'Regular'
  return 'Necesita reforzar'
}

export function enriquecerResultado(resultado) {
  const nota = calcularNota10(resultado)
  return { ...resultado, nota }
}
