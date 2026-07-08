import { Link } from 'react-router-dom'
import { primerPasoId } from '../data/curso.js'

export default function NotFound() {
  return (
    <div className="notfound">
      <span className="notfound__emoji">🔍🦠</span>
      <h1>¡Ups! Página no encontrada</h1>
      <p>Parece que este ser vivo se escapó. Volvamos al curso.</p>
      <div className="notfound__actions">
        <Link to={`/curso/${primerPasoId}`} className="btn btn--primary">Ir al curso</Link>
      </div>
    </div>
  )
}
