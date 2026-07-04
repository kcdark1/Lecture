import { useState } from 'react'

// Muestra una imagen y, si falla al cargar (o no hay URL),
// dibuja un fondo con degradado y el emoji del tema.
// Así la página nunca se ve "rota".
export default function SmartImage({ src, alt, emoji, color, className = '', ratio = '16 / 9' }) {
  const [error, setError] = useState(false)
  const [cargada, setCargada] = useState(false)

  const mostrarFallback = !src || error

  return (
    <div
      className={`smart-image ${className}`}
      style={{
        aspectRatio: ratio,
        background: `linear-gradient(135deg, ${color}, ${sombra(color)})`,
      }}
    >
      {!mostrarFallback && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`smart-image__img ${cargada ? 'is-loaded' : ''}`}
          onError={() => setError(true)}
          onLoad={() => setCargada(true)}
        />
      )}

      {(mostrarFallback || !cargada) && (
        <div className="smart-image__fallback" aria-hidden="true">
          <span className="smart-image__emoji">{emoji}</span>
          <BurbujasSVG />
        </div>
      )}
    </div>
  )
}

// Oscurece un color hex para el degradado del fondo.
function sombra(hex) {
  try {
    const c = hex.replace('#', '')
    const num = parseInt(c, 16)
    let r = (num >> 16) & 255
    let g = (num >> 8) & 255
    let b = num & 255
    r = Math.max(0, r - 55)
    g = Math.max(0, g - 55)
    b = Math.max(0, b - 55)
    return `rgb(${r}, ${g}, ${b})`
  } catch {
    return '#0f766e'
  }
}

function BurbujasSVG() {
  return (
    <svg className="smart-image__pattern" viewBox="0 0 200 120" preserveAspectRatio="none">
      <circle cx="30" cy="30" r="18" />
      <circle cx="170" cy="90" r="26" />
      <circle cx="150" cy="25" r="10" />
      <circle cx="60" cy="95" r="14" />
      <circle cx="110" cy="55" r="8" />
    </svg>
  )
}
