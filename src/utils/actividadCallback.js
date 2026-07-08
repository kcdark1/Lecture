import { useEffect, useRef } from 'react'

// Llama onCompletar una sola vez cuando la condición se cumple.
export function useReportarCompletado(condicion, resultado, onCompletar) {
  const reportado = useRef(false)
  useEffect(() => {
    if (condicion && onCompletar && !reportado.current) {
      reportado.current = true
      onCompletar(resultado)
    }
  }, [condicion, onCompletar, resultado])
}
