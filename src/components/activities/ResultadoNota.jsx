import { calcularNota10, formatearNota10 } from '../../utils/puntaje.js'

export default function ResultadoNota({ aciertos, total, porcentaje, gano, nota }) {
  const valor = nota ?? calcularNota10({ aciertos, total, porcentaje, gano })
  return (
    <p className="resultado__nota">
      Tu calificación: <strong>{formatearNota10(valor)}</strong>
    </p>
  )
}
