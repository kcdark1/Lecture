import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  const [abierto, setAbierto] = useState(false)

  const cerrar = () => setAbierto(false)

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" onClick={cerrar}>
          <span className="navbar__logo">🧬</span>
          <span className="navbar__title">
            Bio<span className="navbar__title-accent">Aventura</span>
          </span>
        </Link>

        <button
          className={`navbar__toggle ${abierto ? 'is-open' : ''}`}
          aria-label="Abrir menú"
          onClick={() => setAbierto((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar__links ${abierto ? 'is-open' : ''}`}>
          <NavLink to="/" end className="navbar__link" onClick={cerrar}>
            Inicio
          </NavLink>
          <NavLink to="/libro" className="navbar__link" onClick={cerrar}>
            Libro
          </NavLink>
          <NavLink to="/actividades" className="navbar__link" onClick={cerrar}>
            Actividades
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
