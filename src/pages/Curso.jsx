import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import {
  getPaso,
  getPasoIndex,
  todosLosPasos,
  primerPasoId,
} from '../data/curso.js'
import { useCourse } from '../context/CourseContext.jsx'
import CourseSidebar from '../components/course/CourseSidebar.jsx'
import CourseStepView from '../components/course/CourseStepView.jsx'
import UserModal from '../components/course/UserModal.jsx'
import DiplomaModal from '../components/course/DiplomaModal.jsx'
import AdminReport from '../components/course/AdminReport.jsx'
import NotFound from './NotFound.jsx'

export default function Curso() {
  const { pasoId } = useParams()
  const navigate = useNavigate()
  const { completarPaso, estaCompletado, progreso, pasosCompletados, totalPasos, usuario } = useCourse()
  const [sidebarAbierto, setSidebarAbierto] = useState(false)
  const [actividadHecha, setActividadHecha] = useState(false)

  const idActual = pasoId || primerPasoId
  const paso = getPaso(idActual)
  const indice = getPasoIndex(idActual)
  const anterior = indice > 0 ? todosLosPasos[indice - 1] : null
  const siguiente = indice < todosLosPasos.length - 1 ? todosLosPasos[indice + 1] : null

  useEffect(() => {
    setActividadHecha(false)
  }, [idActual])

  if (!paso) return <NotFound />

  const yaCompletado = estaCompletado(paso.id)

  const marcarYContinuar = () => {
    if (!yaCompletado) completarPaso(paso.id)
    if (siguiente) navigate(`/curso/${siguiente.id}`)
  }

  const onActividadCompletada = (puntaje) => {
    setActividadHecha(true)
    if (!yaCompletado) completarPaso(paso.id, puntaje)
  }

  const irAnterior = () => {
    setActividadHecha(false)
    if (anterior) navigate(`/curso/${anterior.id}`)
  }

  const tipoLabel =
    paso.tipo === 'lectura' ? '📖 Lectura' :
    paso.tipo === 'video' ? '🎬 Video' : '🎮 Actividad'

  return (
    <div className="curso-layout">
      <UserModal />
      <DiplomaModal />

      <button
        className="curso-sidebar-toggle"
        onClick={() => setSidebarAbierto(true)}
        aria-label="Abrir menú del curso"
      >
        ☰ Contenido
      </button>

      {sidebarAbierto && (
        <div className="curso-sidebar-backdrop" onClick={() => setSidebarAbierto(false)} />
      )}

      <CourseSidebar
        pasoActualId={idActual}
        abierto={sidebarAbierto}
        onCerrar={() => setSidebarAbierto(false)}
      />

      <div className="curso-main">
        <header className="curso-main__header">
          <div className="curso-main__meta">
            <span className="curso-main__tipo">{tipoLabel}</span>
            <span className="curso-main__contador">
              Lección {indice + 1} de {totalPasos}
            </span>
          </div>
          <div className="curso-main__progreso">
            <div className="curso-main__bar">
              <div className="curso-main__fill" style={{ width: `${progreso}%` }} />
            </div>
            <span>{pasosCompletados}/{totalPasos} · {progreso}%</span>
          </div>
          <AdminReport />
        </header>

        <div className="curso-main__content">
          <CourseStepView
            key={paso.id}
            paso={paso}
            onActividadCompletada={onActividadCompletada}
          />
        </div>

        <footer className="curso-main__footer">
          <button
            className="btn btn--ghost"
            onClick={irAnterior}
            disabled={!anterior}
          >
            ← Anterior
          </button>

          {paso.tipo !== 'actividad' ? (
            <button className="btn btn--primary" onClick={marcarYContinuar}>
              {yaCompletado ? 'Continuar →' : 'Marcar como visto y continuar →'}
            </button>
          ) : actividadHecha || yaCompletado ? (
            <button className="btn btn--primary" onClick={marcarYContinuar}>
              Continuar →
            </button>
          ) : (
            <span className="curso-main__hint">Completa la actividad para continuar</span>
          )}

          {!siguiente && (yaCompletado || actividadHecha) && (
            <Link to={`/curso/${primerPasoId}`} className="btn btn--accent">
              🎉 Curso completado
            </Link>
          )}
        </footer>
      </div>
    </div>
  )
}
