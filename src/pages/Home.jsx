import { Link } from 'react-router-dom'
import { temas } from '../data/temas.js'
import { actividades } from '../data/actividades.js'
import TopicCard from '../components/TopicCard.jsx'

export default function Home() {
  const destacados = temas.slice(0, 3)

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__content">
          <span className="hero__eyebrow">🌿 Aprende biología jugando</span>
          <h1 className="hero__title">
            Explora la vida con <span className="hero__highlight">BioAventura</span>
          </h1>
          <p className="hero__subtitle">
            Un libro digital interactivo con {temas.length} capítulos de biología, {temas.length * 5} páginas de
            lectura, imágenes, datos curiosos y {actividades.length} actividades para poner a prueba
            lo que aprendes.
          </p>
          <div className="hero__actions">
            <Link to="/libro" className="btn btn--primary btn--lg">📖 Abrir el libro</Link>
            <Link to="/actividades" className="btn btn--ghost btn--lg">🎮 Ir a las actividades</Link>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <strong>{temas.length}</strong>
              <span>Capítulos</span>
            </div>
            <div className="hero__stat">
              <strong>30</strong>
              <span>Páginas</span>
            </div>
            <div className="hero__stat">
              <strong>{actividades.length}</strong>
              <span>Actividades</span>
            </div>
            <div className="hero__stat">
              <strong>10</strong>
              <span>Tipos de juego</span>
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

      {/* CÓMO FUNCIONA */}
      <section className="section">
        <h2 className="section__title">¿Cómo funciona?</h2>
        <div className="pasos">
          <div className="paso">
            <span className="paso__num">1</span>
            <h3>📖 Lee</h3>
            <p>Explora los capítulos del libro con imágenes, vocabulario y datos curiosos.</p>
          </div>
          <div className="paso">
            <span className="paso__num">2</span>
            <h3>🎮 Juega</h3>
            <p>Pon a prueba lo aprendido con 10 juegos: ahorcado, quiz, memorama, sopa de letras, anagramas ¡y más!</p>
          </div>
          <div className="paso">
            <span className="paso__num">3</span>
            <h3>🏆 Aprende</h3>
            <p>Recibe respuestas al instante y repite las actividades cuantas veces quieras.</p>
          </div>
        </div>
      </section>

      {/* TEMAS DESTACADOS */}
      <section className="section">
        <div className="section__head">
          <h2 className="section__title">Capítulos del libro</h2>
          <Link to="/libro" className="section__link">Ver los {temas.length} capítulos →</Link>
        </div>
        <div className="grid grid--cards">
          {destacados.map((tema) => (
            <TopicCard key={tema.id} tema={tema} />
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta">
        <h2>¿List@ para tu aventura por la biología?</h2>
        <p>Comienza a leer y demuestra lo que sabes con nuestras {actividades.length} actividades.</p>
        <Link to="/libro" className="btn btn--primary btn--lg">Comenzar ahora 🚀</Link>
      </section>
    </div>
  )
}
