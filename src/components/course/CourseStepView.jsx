import { getTema, getPagina } from '../../data/temas.js'
import { getActividad } from '../../data/actividades.js'
import PaginaLectura from '../PaginaLectura.jsx'
import ActividadRunner from '../ActividadRunner.jsx'

function VideoStep({ paso }) {
  return (
    <div className="curso-video">
      <h2 className="curso-video__titulo">🎬 {paso.titulo}</h2>
      <div className="curso-video__wrap">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${paso.youtubeId}?rel=0`}
          title={paso.titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p className="curso-video__nota">
        Mira el video con atención. Cuando termines, pulsa <strong>“Marcar como visto y continuar”</strong>.
      </p>
      {paso.videoUrl && (
        <p className="curso-video__fuente">
          Video en español:{' '}
          <a href={paso.videoUrl} target="_blank" rel="noopener noreferrer">
            {paso.videoCanal ? `${paso.titulo} — ${paso.videoCanal}` : paso.titulo}
          </a>
        </p>
      )}
    </div>
  )
}

export default function CourseStepView({ paso, onActividadCompletada }) {
  const tema = getTema(paso.temaId)

  if (paso.tipo === 'lectura') {
    const pagina = getPagina(paso.temaId, paso.pagina)
    if (!pagina) return <p>Página no encontrada.</p>
    const esRepaso = pagina.tipo === 'repaso'
    return (
      <div className="curso-step">
        <PaginaLectura pagina={pagina} tema={tema} />
        {esRepaso && (
          <div className="libro-repaso">
            <section className="datos">
              <h2>💡 ¿Sabías que...?</h2>
              <ul className="datos__lista">
                {tema.datosCuriosos.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </section>
            <section className="vocab vocab--inline">
              <h2>📚 Vocabulario</h2>
              <dl className="vocab__grid">
                {tema.vocabulario.map((v, i) => (
                  <div key={i} className="vocab__item">
                    <dt>{v.palabra}</dt>
                    <dd>{v.definicion}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        )}
      </div>
    )
  }

  if (paso.tipo === 'video') {
    return <VideoStep paso={paso} />
  }

  if (paso.tipo === 'actividad') {
    const actividad = getActividad(paso.actividadId)
    if (!actividad) return <p>Actividad no encontrada.</p>
    return (
      <div className="curso-step curso-step--actividad" style={{ '--accent': tema.color }}>
        <header className="curso-step__header">
          <span className="curso-step__badge">🎮 Actividad</span>
          <h2>{actividad.titulo}</h2>
          <p>{actividad.descripcion}</p>
        </header>
        <div className="actividad__juego">
          <ActividadRunner
            actividad={actividad}
            onCompletar={(resultado) =>
              onActividadCompletada({
                actividadId: actividad.id,
                titulo: actividad.titulo,
                tipo: actividad.tipo,
                ...resultado,
              })
            }
          />
        </div>
      </div>
    )
  }

  return null
}
