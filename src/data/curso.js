// ============================================================
//  CURSO — Unidad: Origen de la vida
//  10 temas × 2 lecturas = 20 lecciones de lectura
//  Por tema: lectura 1 → video → actividad 1 → lectura 2 → actividad 2
// ============================================================

import { temas } from './temas.js'
import { getActividadesDeTema } from './actividades.js'

const VIDEOS = {
  'caracteristicas-vida': { id: 'cLn0jsye7hI', titulo: 'Características de los seres vivos' },
  'teorias-origen': { id: '6VnE8lkPWyg', titulo: 'Abiogénesis y biogénesis' },
  'tierra-primitiva': { id: 'm-1F8w1vJQE', titulo: 'La Tierra primitiva' },
  'miller-urey': { id: 'eO7rb7NJb_4', titulo: 'Experimento de Miller-Urey' },
  biopolimeros: { id: '_IVdyWzenig', titulo: 'Biopolímeros y monómeros' },
  'mundo-rna': { id: 'IKH7wJrvZ_Q', titulo: 'Hipótesis del mundo del ARN' },
  panspermia: { id: 'nWJkPsy5efQ', titulo: 'Teoría de la panspermia' },
  procariotas: { id: 'w377bYgIjBM', titulo: 'Células procariotas' },
  endosimbiosis: { id: 'G6Ru1JcV4-s', titulo: 'Teoría endosimbiótica' },
  'evolucion-quimica': { id: 'IHnX5O2hmDM', titulo: 'Evolución química' },
}

function pasosCapitulo(temaId) {
  const acts = getActividadesDeTema(temaId)
  const vid = VIDEOS[temaId] || { id: '8IlzKri08kk', titulo: 'Video educativo' }

  return [
    { id: `${temaId}-s1`, tipo: 'lectura', temaId, pagina: 1, titulo: 'Lectura 1' },
    { id: `${temaId}-s2`, tipo: 'video', temaId, youtubeId: vid.id, titulo: vid.titulo },
    { id: `${temaId}-s3`, tipo: 'actividad', temaId, actividadId: acts[0]?.id, titulo: acts[0]?.titulo || 'Actividad 1' },
    { id: `${temaId}-s4`, tipo: 'lectura', temaId, pagina: 2, titulo: 'Lectura 2' },
    { id: `${temaId}-s5`, tipo: 'actividad', temaId, actividadId: acts[1]?.id, titulo: acts[1]?.titulo || 'Actividad 2' },
  ]
}

export const capitulosCurso = temas.map((t) => ({
  temaId: t.id,
  numero: t.numero,
  titulo: t.titulo,
  emoji: t.emoji,
  color: t.color,
  pasos: pasosCapitulo(t.id),
}))

export const todosLosPasos = capitulosCurso.flatMap((c) => c.pasos)

export const getPaso = (pasoId) => todosLosPasos.find((p) => p.id === pasoId)

export const getPasoIndex = (pasoId) => todosLosPasos.findIndex((p) => p.id === pasoId)

export const totalPasosCurso = todosLosPasos.length

export const totalLecturasCurso = temas.length * 2

export const primerPasoId = todosLosPasos[0]?.id
