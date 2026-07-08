import { useState } from 'react'
import { verificarPasswordDocente, descargarReporte } from '../../utils/storage.js'

export default function AdminReport() {
  const [abierto, setAbierto] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const intentar = (e) => {
    e.preventDefault()
    if (verificarPasswordDocente(password)) {
      descargarReporte()
      setAbierto(false)
      setPassword('')
      setError('')
    } else {
      setError('Contraseña incorrecta.')
    }
  }

  return (
    <>
      <button className="admin-btn" onClick={() => setAbierto(true)} title="Reporte docente">
        📊 Reporte docente
      </button>

      {abierto && (
        <div className="modal-overlay">
          <div className="modal-card modal-card--sm">
            <h2>📊 Reporte de estudiantes</h2>
            <p>Ingresa la contraseña para descargar el archivo con nombres y puntajes.</p>
            <form onSubmit={intentar} className="modal-form">
              <label>
                Contraseña
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña del docente"
                  autoFocus
                />
              </label>
              {error && <p className="modal-form__error">{error}</p>}
              <div className="modal-form__row">
                <button type="button" className="btn btn--ghost" onClick={() => setAbierto(false)}>
                  Cancelar
                </button>
                <button type="submit" className="btn btn--primary">
                  Descargar reporte
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
