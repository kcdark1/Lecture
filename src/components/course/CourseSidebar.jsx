import { Link } from 'react-router-dom'
import { capitulosCurso } from '../../data/curso.js'
import { useCourse } from '../../context/CourseContext.jsx'

export default function CourseSidebar({ pasoActualId, abierto, onCerrar }) {
  const { estaCompletado, progreso, usuario } = useCourse()

  return (
    <aside className={`curso-sidebar ${abierto ? 'is-open' : ''}`}>
      <div className="curso-sidebar__head">
        <h2>📚 Contenido del curso</h2>
        {usuario && (
          <p className="curso-sidebar__user">
            {usuario.nombres} {usuario.apellidos}
          </p>
        )}
        <div className="curso-sidebar__progreso">
          <div className="curso-sidebar__bar">
            <div className="curso-sidebar__fill" style={{ width: `${progreso}%` }} />
          </div>
          <span>{progreso}% completado</span>
        </div>
        <button className="curso-sidebar__cerrar" onClick={onCerrar} aria-label="Cerrar menú">
          ✕
        </button>
      </div>

      <nav className="curso-sidebar__nav">
        {capitulosCurso.map((cap) => (
          <div key={cap.temaId} className="curso-sidebar__cap">
            <h3 style={{ '--accent': cap.color }}>
              <span>{cap.emoji}</span> Cap. {cap.numero}: {cap.titulo}
            </h3>
            <ul>
              {cap.pasos.map((paso) => {
                const icono =
                  paso.tipo === 'lectura' ? '📖' :
                  paso.tipo === 'video' ? '🎬' : '🎮'
                const activo = paso.id === pasoActualId
                const hecho = estaCompletado(paso.id)
                return (
                  <li key={paso.id}>
                    <Link
                      to={`/curso/${paso.id}`}
                      className={`curso-sidebar__item ${activo ? 'is-active' : ''} ${hecho ? 'is-done' : ''}`}
                      onClick={onCerrar}
                    >
                      <span className="curso-sidebar__icon">{hecho ? '✅' : icono}</span>
                      <span className="curso-sidebar__label">{paso.titulo}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
