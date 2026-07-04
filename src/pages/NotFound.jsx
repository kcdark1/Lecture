import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="notfound">
      <span className="notfound__emoji">🔍🦠</span>
      <h1>¡Ups! Página no encontrada</h1>
      <p>Parece que este ser vivo se escapó. Volvamos a un lugar seguro.</p>
      <div className="notfound__actions">
        <Link to="/" className="btn btn--primary">Ir al inicio</Link>
        <Link to="/libro" className="btn btn--ghost">Ver el libro</Link>
      </div>
    </div>
  )
}
