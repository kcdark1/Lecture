// ============================================================
//  ESTRUCTURA DEL CURSO (estilo Udemy)
//  Secuencia por capítulo: lectura → video → lectura →
//  actividad → video → lectura → actividad → video → repaso
// ============================================================

import { temas } from './temas.js'
import { getActividadesDeTema } from './actividades.js'

const VIDEOS = {
  celula: [
    { id: '8IlzKri08kk', titulo: 'Introducción a la célula' },
    { id: 'URlod8sL2bQ', titulo: 'Partes de la célula' },
    { id: 'vwAJ8ByQHvc', titulo: 'Orgánulos celulares' },
  ],
  fotosintesis: [
    { id: 'CMPLDvW7eqE', titulo: '¿Qué es la fotosíntesis?' },
    { id: 'g78itG0GkKQ', titulo: 'Cloroplastos y clorofila' },
    { id: 'W7YmMD7YMbQ', titulo: 'Importancia de la fotosíntesis' },
  ],
  genetica: [
    { id: '_IVdyWzenig', titulo: 'ADN y genes' },
    { id: '8kK2zwjRV0M', titulo: 'La doble hélice' },
    { id: 'Mehz7tGjEuM', titulo: 'Herencia genética' },
  ],
  ecosistemas: [
    { id: 'v6NS8m0l0ZM', titulo: '¿Qué es un ecosistema?' },
    { id: 'izRvPaAWgyw', titulo: 'Cadenas alimenticias' },
    { id: 'T8tKcCNfEsI', titulo: 'Equilibrio ecológico' },
  ],
  'cuerpo-humano': [
    { id: 'dURvcK1z1kM', titulo: 'Sistema circulatorio' },
    { id: 'GD-HPx36RzI', titulo: 'Sistema respiratorio' },
    { id: 'fmI_OciHV_0', titulo: 'El cerebro y los nervios' },
  ],
  biodiversidad: [
    { id: 'GK_vRtUJ6Hs', titulo: '¿Qué es la biodiversidad?' },
    { id: 'BGnBdKExnAc', titulo: 'Amenazas a la naturaleza' },
    { id: 'GihKqV9W0Jo', titulo: 'Cómo proteger el planeta' },
  ],
}

function pasosCapitulo(temaId) {
  const acts = getActividadesDeTema(temaId)
  const vids = VIDEOS[temaId] || [
    { id: '8IlzKri08kk', titulo: 'Video educativo' },
    { id: '8IlzKri08kk', titulo: 'Video educativo' },
    { id: '8IlzKri08kk', titulo: 'Video educativo' },
  ]

  return [
    { id: `${temaId}-s1`, tipo: 'lectura', temaId, pagina: 1, titulo: 'Lectura 1' },
    { id: `${temaId}-s2`, tipo: 'video', temaId, youtubeId: vids[0].id, titulo: vids[0].titulo },
    { id: `${temaId}-s3`, tipo: 'lectura', temaId, pagina: 2, titulo: 'Lectura 2' },
    { id: `${temaId}-s4`, tipo: 'actividad', temaId, actividadId: acts[0]?.id, titulo: acts[0]?.titulo || 'Actividad 1' },
    { id: `${temaId}-s5`, tipo: 'video', temaId, youtubeId: vids[1].id, titulo: vids[1].titulo },
    { id: `${temaId}-s6`, tipo: 'lectura', temaId, pagina: 3, titulo: 'Lectura 3' },
    { id: `${temaId}-s7`, tipo: 'lectura', temaId, pagina: 4, titulo: 'Lectura 4' },
    { id: `${temaId}-s8`, tipo: 'actividad', temaId, actividadId: acts[1]?.id, titulo: acts[1]?.titulo || 'Actividad 2' },
    { id: `${temaId}-s9`, tipo: 'video', temaId, youtubeId: vids[2].id, titulo: vids[2].titulo },
    { id: `${temaId}-s10`, tipo: 'lectura', temaId, pagina: 5, titulo: 'Repaso del capítulo' },
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

export const primerPasoId = todosLosPasos[0]?.id
