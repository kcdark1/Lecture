import { useState } from 'react'
import { useCourse } from '../../context/CourseContext.jsx'

export default function UserModal() {
  const { mostrarRegistro, registrar } = useCourse()
  const [nombres, setNombres] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [error, setError] = useState('')

  if (!mostrarRegistro) return null

  const enviar = (e) => {
    e.preventDefault()
    if (!nombres.trim() || !apellidos.trim()) {
      setError('Por favor escribe tu nombre y apellido.')
      return
    }
    registrar(nombres, apellidos)
  }

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <span className="modal-card__emoji">👋</span>
        <h2>¡Bienvenido a BioAventura!</h2>
        <p>Antes de comenzar el curso, dinos quién eres para guardar tu progreso y puntajes.</p>
        <form onSubmit={enviar} className="modal-form">
          <label>
            Nombres
            <input
              type="text"
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
              placeholder="Ej: María"
              autoFocus
            />
          </label>
          <label>
            Apellidos
            <input
              type="text"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
              placeholder="Ej: García López"
            />
          </label>
          {error && <p className="modal-form__error">{error}</p>}
          <button type="submit" className="btn btn--primary btn--lg">
            Comenzar el curso 🚀
          </button>
        </form>
      </div>
    </div>
  )
}
