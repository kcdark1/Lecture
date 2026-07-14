// ============================================================
//  CURSO — Unidad: Origen de la vida (Don Bosco BGU)
//  13 temas × 2 lecturas = 26 lecciones de lectura
//  Por tema: lectura 1 → video → actividad 1 → lectura 2 → actividad 2
// ============================================================

import { temas } from './temas.js'
import { getActividadesDeTema } from './actividades.js'
import { getVideoTema } from './media.js'

function pasosCapitulo(temaId) {
  const acts = getActividadesDeTema(temaId)
  const vid = getVideoTema(temaId) || {
    id: 'gJd65_Xrxs4',
    titulo: 'Video educativo',
    url: 'https://www.youtube.com/watch?v=gJd65_Xrxs4',
    canal: 'Amoeba Sisters en Español',
  }

  return [
    { id: `${temaId}-s1`, tipo: 'lectura', temaId, pagina: 1, titulo: 'Lectura 1' },
    {
      id: `${temaId}-s2`,
      tipo: 'video',
      temaId,
      youtubeId: vid.id,
      titulo: vid.titulo,
      videoUrl: vid.url,
      videoCanal: vid.canal,
    },
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
