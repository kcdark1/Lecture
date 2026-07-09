import { useCourse } from '../../context/CourseContext.jsx'
import { temas, UNIDAD, NIVEL } from '../../data/temas.js'

export default function DiplomaModal() {
  const { mostrarDiploma, setMostrarDiploma, usuario } = useCourse()

  if (!mostrarDiploma || !usuario) return null

  const nombre = `${usuario.nombres} ${usuario.apellidos}`
  const fecha = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const imprimir = () => window.print()

  return (
    <div className="modal-overlay">
      <div className="diploma">
        <div className="diploma__borde">
          <div className="diploma__inner" id="diploma-print">
            <span className="diploma__emoji">🎓</span>
            <p className="diploma__otorga">BioAventura certifica que</p>
            <h2 className="diploma__nombre">{nombre}</h2>
            <p className="diploma__texto">
              ha completado satisfactoriamente la unidad <strong>{UNIDAD}</strong> de{' '}
              <strong>Biología ({NIVEL})</strong>, con {temas.length} temas, lecturas,
              videos y actividades interactivas.
            </p>
            <p className="diploma__fecha">{fecha}</p>
            <div className="diploma__firma">
              <span>_______________________</span>
              <small>Certificado BioAventura</small>
            </div>
          </div>
        </div>
        <div className="diploma__acciones">
          <button className="btn btn--primary" onClick={imprimir}>
            🖨️ Imprimir / Guardar PDF
          </button>
          <button className="btn btn--ghost" onClick={() => setMostrarDiploma(false)}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}
