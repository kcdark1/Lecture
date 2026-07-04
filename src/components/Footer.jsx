import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">🧬</span>
          <div>
            <strong>BioAventura</strong>
            <p>Libro digital interactivo de Biología</p>
          </div>
        </div>
        <nav className="footer__links">
          <Link to="/">Inicio</Link>
          <Link to="/libro">Libro</Link>
          <Link to="/actividades">Actividades</Link>
        </nav>
        <p className="footer__note">
          Proyecto educativo · Maqueta con datos internos (sin base de datos).
        </p>
      </div>
    </footer>
  )
}
