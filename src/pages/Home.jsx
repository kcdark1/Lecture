import { Link } from 'react-router-dom'
import { temas, UNIDAD, NIVEL } from '../data/temas.js'
import { actividades } from '../data/actividades.js'
import { totalLecturasCurso } from '../data/curso.js'
import TopicCard from '../components/TopicCard.jsx'

export default function Home() {
  const destacados = temas.slice(0, 3)

  return (
    <div className="home">
      <section className="hero">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__content">
          <span className="hero__eyebrow">🎓 {NIVEL} — Biología · Unidad: {UNIDAD}</span>
          <h1 className="hero__title">
            Aprende con <span className="hero__highlight">BioAventura</span>
          </h1>
          <p className="hero__subtitle">
            Un curso con {temas.length} temas sobre el origen de la vida: lecturas, videos,
            {actividades.length} actividades y diploma al terminar. Todo en una sola pantalla,
            sin cambiar de pestaña.
          </p>
          <div className="hero__actions">
            <Link to="/curso" className="btn btn--primary btn--lg">🚀 Entrar al curso</Link>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <strong>{temas.length}</strong>
              <span>Temas</span>
            </div>
            <div className="hero__stat">
              <strong>{totalLecturasCurso}</strong>
              <span>Lecturas</span>
            </div>
            <div className="hero__stat">
              <strong>{actividades.length}</strong>
              <span>Actividades</span>
            </div>
            <div className="hero__stat">
              <strong>🎓</strong>
              <span>Diploma</span>
            </div>
          </div>
        </div>
        <div className="hero__art" aria-hidden="true">
          <div className="hero__emoji hero__emoji--a">🧬</div>
          <div className="hero__emoji hero__emoji--b">🔬</div>
          <div className="hero__emoji hero__emoji--c">🌱</div>
          <div className="hero__emoji hero__emoji--d">🦋</div>
          <div className="hero__emoji hero__emoji--e">🦠</div>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">¿Cómo funciona?</h2>
        <div className="pasos">
          <div className="paso">
            <span className="paso__num">1</span>
            <h3>📖 Lee y mira</h3>
            <p>Alterna lecturas y videos educativos en el orden del curso, como en Udemy.</p>
          </div>
          <div className="paso">
            <span className="paso__num">2</span>
            <h3>🎮 Practica</h3>
            <p>Realiza actividades interactivas. Tus respuestas y puntajes se guardan en caché.</p>
          </div>
          <div className="paso">
            <span className="paso__num">3</span>
            <h3>🎓 Certifícate</h3>
            <p>Al completar todo el curso recibes tu diploma con tu nombre y apellido.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <h2 className="section__title">Temas de la unidad</h2>
          <Link to="/curso" className="section__link">Ir al curso →</Link>
        </div>
        <div className="grid grid--cards">
          {destacados.map((tema) => (
            <TopicCard key={tema.id} tema={tema} />
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>¿List@ para empezar?</h2>
        <p>Regístrate con tu nombre, avanza lección por lección y obtén tu diploma.</p>
        <Link to="/curso" className="btn btn--primary btn--lg">Comenzar el curso 🚀</Link>
      </section>
    </div>
  )
}
