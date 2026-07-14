import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import { generarReporteDocente } from './storage.js'
import { calcularNota10, formatearNota10, promedioNotas10, nivelDesdeNota10 } from './puntaje.js'
import { actividades, etiquetasTipo } from '../data/actividades.js'
import { capitulosCurso, totalPasosCurso } from '../data/curso.js'
import { temas, UNIDAD, NIVEL } from '../data/temas.js'

const MARGEN = 16
const ANCHO_PAG = 210
const ALTO_PAG = 297

const C = {
  primario: [16, 185, 129],
  primarioOscuro: [5, 150, 105],
  azul: [59, 130, 246],
  tinta: [30, 41, 59],
  suave: [100, 116, 139],
  fondo: [240, 253, 244],
  fondoTarjeta: [248, 250, 252],
  blanco: [255, 255, 255],
  excelente: [22, 163, 74],
  bien: [37, 99, 235],
  regular: [217, 119, 6],
  bajo: [220, 38, 38],
  pendiente: [148, 163, 184],
}

const TOTAL_ACTIVIDADES = actividades.length

function hexToRgb(hex) {
  const h = hex.replace('#', '')
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ]
}

function formatearFecha(iso, corto = false) {
  if (!iso) return '—'
  const opts = corto
    ? { year: 'numeric', month: 'short', day: 'numeric' }
    : {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }
  return new Date(iso).toLocaleString('es', opts)
}

function colorNota(nota) {
  if (nota === null || nota === undefined) return C.pendiente
  if (nota >= 9) return C.excelente
  if (nota >= 7) return C.bien
  if (nota >= 5) return C.regular
  return C.bajo
}

function etiquetaRendimiento(nota) {
  return nivelDesdeNota10(nota)
}

function actividadesRealizadas(puntajes) {
  return Object.keys(puntajes || {}).length
}

function notaActividad(resultado) {
  return calcularNota10(resultado)
}

function dibujarBarra(doc, x, y, ancho, alto, valor10, color) {
  doc.setFillColor(...C.fondoTarjeta)
  doc.roundedRect(x, y, ancho, alto, 1.5, 1.5, 'F')
  const porcentaje = (valor10 / 10) * 100
  const anchoFill = Math.max(0, Math.min(ancho, (ancho * porcentaje) / 100))
  if (anchoFill > 0) {
    doc.setFillColor(...color)
    doc.roundedRect(x, y, anchoFill, alto, 1.5, 1.5, 'F')
  }
}

function dibujarEncabezadoPagina(doc, titulo, subtitulo = '') {
  doc.setFillColor(...C.primario)
  doc.rect(0, 0, ANCHO_PAG, 22, 'F')
  doc.setTextColor(...C.blanco)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(11)
  doc.text('BioAventura', MARGEN, 10)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.text(`${NIVEL} · ${UNIDAD}`, MARGEN, 16)
  if (titulo) {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(10)
    doc.text(titulo, ANCHO_PAG - MARGEN, 13, { align: 'right' })
  }
  if (subtitulo) {
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.text(subtitulo, ANCHO_PAG - MARGEN, 18, { align: 'right' })
  }
  doc.setTextColor(...C.tinta)
}

function dibujarPie(doc, pagina, total) {
  const y = ALTO_PAG - 10
  doc.setDrawColor(226, 232, 240)
  doc.line(MARGEN, y - 4, ANCHO_PAG - MARGEN, y - 4)
  doc.setFontSize(7.5)
  doc.setTextColor(...C.suave)
  doc.text('Reporte generado automáticamente por BioAventura', MARGEN, y)
  doc.text(`Página ${pagina} de ${total}`, ANCHO_PAG - MARGEN, y, { align: 'right' })
  doc.setTextColor(...C.tinta)
}

function dibujarPortada(doc, reporte, estadisticas) {
  doc.setFillColor(...C.primarioOscuro)
  doc.rect(0, 0, ANCHO_PAG, 95, 'F')
  doc.setFillColor(...C.primario)
  doc.rect(0, 85, ANCHO_PAG, 10, 'F')

  doc.setTextColor(...C.blanco)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(28)
  doc.text('BioAventura', MARGEN, 38)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'normal')
  doc.text('Reporte de rendimiento académico', MARGEN, 52)
  doc.setFontSize(11)
  doc.text(`${NIVEL}`, MARGEN, 64)
  doc.text(`Unidad: ${UNIDAD}`, MARGEN, 72)
  doc.text(`Generado: ${formatearFecha(reporte.generado)}`, MARGEN, 80)

  let y = 108
  doc.setTextColor(...C.tinta)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(13)
  doc.text('Resumen general del curso', MARGEN, y)
  y += 10

  const tarjetas = [
    { label: 'Estudiantes', valor: String(reporte.totalEstudiantes), color: C.azul },
    { label: 'Cursos completados', valor: String(estadisticas.completados), color: C.excelente },
    { label: 'Promedio del grupo', valor: estadisticas.promedioGrupo ?? '—', color: C.primario },
    { label: 'Actividades del curso', valor: String(TOTAL_ACTIVIDADES), color: C.regular },
  ]

  const tarjetaW = (ANCHO_PAG - MARGEN * 2 - 9) / 2
  const tarjetaH = 28
  tarjetas.forEach((t, i) => {
    const col = i % 2
    const fila = Math.floor(i / 2)
    const x = MARGEN + col * (tarjetaW + 9)
    const ty = y + fila * (tarjetaH + 8)
    doc.setFillColor(...C.fondoTarjeta)
    doc.roundedRect(x, ty, tarjetaW, tarjetaH, 3, 3, 'F')
    doc.setFillColor(...t.color)
    doc.roundedRect(x, ty, 4, tarjetaH, 3, 3, 'F')
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8.5)
    doc.setTextColor(...C.suave)
    doc.text(t.label, x + 10, ty + 10)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(16)
    doc.setTextColor(...C.tinta)
    doc.text(t.valor, x + 10, ty + 22)
  })

  y += 72
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(...C.suave)
  const intro = [
    'Este documento presenta el progreso y los puntajes de cada estudiante en el curso',
    '"Origen de la vida". Incluye avance por pasos, calificación por actividad y',
    'desglose detallado por tema. Cada actividad se califica sobre 10 puntos.',
  ]
  intro.forEach((linea) => {
    doc.text(linea, MARGEN, y)
    y += 5.5
  })

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  doc.setTextColor(...C.primarioOscuro)
  doc.text('Escala de calificación:', MARGEN, y + 8)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...C.tinta)
  doc.text('Excelente (9-10)  ·  Muy bien (7-8.9)  ·  Regular (5-6.9)  ·  Necesita reforzar (<5)', MARGEN, y + 14)
}

function calcularEstadisticas(estudiantes) {
  const completados = estudiantes.filter((e) => e.cursoCompletado).length
  const promedios = estudiantes
    .map((e) => promedioNotas10(e.puntajes))
    .filter((p) => p !== null)
  const promedioGrupoNum = promedios.length
    ? Math.round((promedios.reduce((a, b) => a + b, 0) / promedios.length) * 10) / 10
    : null
  const promedioGrupo = promedioGrupoNum !== null ? formatearNota10(promedioGrupoNum) : null
  return { completados, promedioGrupo, promedioGrupoNum }
}

function filasResumenGeneral(estudiantes) {
  return estudiantes.map((e, i) => {
    const promedio = promedioNotas10(e.puntajes)
    const progreso = totalPasosCurso
      ? Math.round((e.pasosCompletados / totalPasosCurso) * 100)
      : 0
    const acts = actividadesRealizadas(e.puntajes)
    return [
      String(i + 1),
      e.nombreCompleto,
      `${e.pasosCompletados}/${totalPasosCurso}`,
      `${progreso}%`,
      `${acts}/${TOTAL_ACTIVIDADES}`,
      promedio !== null ? formatearNota10(promedio) : '—',
      etiquetaRendimiento(promedio),
      e.cursoCompletado ? 'Sí' : 'No',
    ]
  })
}

function dibujarResumenGeneral(doc, estudiantes, startY) {
  autoTable(doc, {
    startY,
    head: [['#', 'Estudiante', 'Pasos', 'Avance', 'Actividades', 'Promedio /10', 'Nivel', 'Terminó']],
    body: filasResumenGeneral(estudiantes),
    styles: {
      fontSize: 8.5,
      cellPadding: 3,
      textColor: C.tinta,
      lineColor: [226, 232, 240],
      lineWidth: 0.2,
    },
    headStyles: {
      fillColor: C.primarioOscuro,
      textColor: C.blanco,
      fontStyle: 'bold',
      halign: 'center',
    },
    columnStyles: {
      0: { halign: 'center', cellWidth: 8 },
      2: { halign: 'center', cellWidth: 16 },
      3: { halign: 'center', cellWidth: 16 },
      4: { halign: 'center', cellWidth: 20 },
      5: { halign: 'center', cellWidth: 18 },
      6: { halign: 'center', cellWidth: 22 },
      7: { halign: 'center', cellWidth: 14 },
    },
    alternateRowStyles: { fillColor: [248, 250, 252] },
    margin: { left: MARGEN, right: MARGEN },
    didParseCell(data) {
      if (data.section === 'body' && data.column.index === 5 && data.cell.raw !== '—') {
        const nota = parseFloat(String(data.cell.raw).split('/')[0])
        if (!Number.isNaN(nota)) {
          data.cell.styles.textColor = colorNota(nota)
          data.cell.styles.fontStyle = 'bold'
        }
      }
      if (data.section === 'body' && data.column.index === 6) {
        const mapa = {
          Excelente: C.excelente,
          'Muy bien': C.bien,
          Regular: C.regular,
          'Necesita reforzar': C.bajo,
          Pendiente: C.pendiente,
        }
        const color = mapa[data.cell.raw]
        if (color) {
          data.cell.styles.textColor = color
          data.cell.styles.fontStyle = 'bold'
        }
      }
    },
  })
}

function dibujarTarjetasEstudiante(doc, estudiante, y) {
  const promedio = promedioNotas10(estudiante.puntajes)
  const progreso = totalPasosCurso
    ? Math.round((estudiante.pasosCompletados / totalPasosCurso) * 100)
    : 0
  const acts = actividadesRealizadas(estudiante.puntajes)

  doc.setFillColor(...C.fondo)
  doc.roundedRect(MARGEN, y, ANCHO_PAG - MARGEN * 2, 42, 4, 4, 'F')

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(16)
  doc.setTextColor(...C.tinta)
  doc.text(estudiante.nombreCompleto, MARGEN + 8, y + 12)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8.5)
  doc.setTextColor(...C.suave)
  doc.text(`Registrado: ${formatearFecha(estudiante.fechaRegistro, true)}`, MARGEN + 8, y + 19)
  if (estudiante.cursoCompletado) {
    doc.setTextColor(...C.excelente)
    doc.text(`Curso completado · ${formatearFecha(estudiante.fechaCompletado, true)}`, MARGEN + 8, y + 25)
  } else {
    doc.text('Curso en progreso', MARGEN + 8, y + 25)
  }

  const metricas = [
    { label: 'Avance del curso', valor: `${progreso}%`, barra: progreso / 10, color: C.primario },
    {
      label: 'Promedio / 10',
      valor: promedio !== null ? formatearNota10(promedio) : '—',
      barra: promedio ?? 0,
      color: colorNota(promedio),
    },
    {
      label: 'Actividades hechas',
      valor: `${acts}/${TOTAL_ACTIVIDADES}`,
      barra: (acts / TOTAL_ACTIVIDADES) * 10,
      color: C.azul,
    },
  ]

  const mx = ANCHO_PAG - MARGEN - 8
  metricas.forEach((m, i) => {
    const bx = mx - (metricas.length - i) * 52
    doc.setFontSize(7)
    doc.setTextColor(...C.suave)
    doc.text(m.label, bx, y + 32)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9)
    doc.setTextColor(...C.tinta)
    doc.text(m.valor, bx, y + 38)
    dibujarBarra(doc, bx, y + 40, 44, 2.5, m.barra, m.color)
  })

  return y + 50
}

function detalleAciertos(resultado) {
  if (!resultado) return '—'
  if (resultado.aciertos !== undefined && resultado.total !== undefined) {
    return `${resultado.aciertos}/${resultado.total} aciertos`
  }
  if (resultado.detalle) return resultado.detalle
  return '—'
}

function filasTema(estudiante, temaId) {
  const actsTema = actividades.filter((a) => a.temaId === temaId)
  const cap = capitulosCurso.find((c) => c.temaId === temaId)
  const pasos = cap?.pasos || []

  return actsTema.map((act, idx) => {
    const resultado = estudiante.puntajes?.[act.id]
    const nota = notaActividad(resultado)
    const tipoLabel = etiquetasTipo[act.tipo]?.nombre || act.tipo
    const pasoAct = pasos.find((p) => p.actividadId === act.id)
    const pasoHecho = pasoAct ? !!estudiante.pasosDetalle?.[pasoAct.id] : false

    return [
      String(idx + 1),
      tipoLabel,
      act.titulo,
      nota !== null ? formatearNota10(nota) : '—',
      detalleAciertos(resultado),
      etiquetaRendimiento(nota),
      pasoHecho ? 'Completada' : 'Pendiente',
      resultado?.fecha ? formatearFecha(resultado.fecha, true) : '—',
    ]
  })
}

function dibujarDetalleEstudiante(doc, estudiante) {
  doc.addPage()
  dibujarEncabezadoPagina(doc, 'Ficha del estudiante', estudiante.nombreCompleto)

  let y = 30
  y = dibujarTarjetasEstudiante(doc, estudiante, y)

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(12)
  doc.setTextColor(...C.tinta)
  doc.text('Calificaciones por tema (escala de 10 puntos)', MARGEN, y)
  y += 6

  temas.forEach((tema) => {
    const filas = filasTema(estudiante, tema.id)
    const colorTema = hexToRgb(tema.color)
    const necesitaPagina = y > ALTO_PAG - 55
    if (necesitaPagina) {
      doc.addPage()
      dibujarEncabezadoPagina(doc, 'Ficha del estudiante', estudiante.nombreCompleto)
      y = 30
    }

    doc.setFillColor(...colorTema)
    doc.roundedRect(MARGEN, y, ANCHO_PAG - MARGEN * 2, 9, 2, 2, 'F')
    doc.setTextColor(...C.blanco)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9)
    doc.text(`Tema ${tema.numero}: ${tema.titulo}`, MARGEN + 4, y + 6.2)
    y += 11

    autoTable(doc, {
      startY: y,
      head: [['#', 'Tipo', 'Actividad', 'Nota /10', 'Detalle', 'Nivel', 'Estado', 'Fecha']],
      body: filas,
      styles: {
        fontSize: 7.5,
        cellPadding: 2.5,
        textColor: C.tinta,
        lineColor: [226, 232, 240],
        lineWidth: 0.15,
        overflow: 'linebreak',
      },
      headStyles: {
        fillColor: colorTema,
        textColor: C.blanco,
        fontStyle: 'bold',
        fontSize: 7.5,
        halign: 'center',
      },
      columnStyles: {
        0: { halign: 'center', cellWidth: 7 },
        1: { cellWidth: 22 },
        2: { cellWidth: 52 },
        3: { halign: 'center', cellWidth: 16, fontStyle: 'bold' },
        4: { cellWidth: 28 },
        5: { halign: 'center', cellWidth: 22 },
        6: { halign: 'center', cellWidth: 18 },
        7: { halign: 'center', cellWidth: 20 },
      },
      alternateRowStyles: { fillColor: [248, 250, 252] },
      margin: { left: MARGEN, right: MARGEN },
      didParseCell(data) {
        if (data.section !== 'body') return
        if (data.column.index === 3 && data.cell.raw !== '—') {
          const nota = parseFloat(String(data.cell.raw).split('/')[0])
          if (!Number.isNaN(nota)) {
            data.cell.styles.textColor = colorNota(nota)
            data.cell.styles.fontStyle = 'bold'
          }
        }
        if (data.column.index === 5) {
          const mapa = {
            Excelente: C.excelente,
            'Muy bien': C.bien,
            Regular: C.regular,
            'Necesita reforzar': C.bajo,
            Pendiente: C.pendiente,
          }
          const color = mapa[data.cell.raw]
          if (color) {
            data.cell.styles.textColor = color
            data.cell.styles.fontStyle = 'bold'
          }
        }
        if (data.column.index === 6) {
          data.cell.styles.textColor = data.cell.raw === 'Completada' ? C.excelente : C.pendiente
          data.cell.styles.fontStyle = 'bold'
        }
      },
    })

    y = doc.lastAutoTable.finalY + 6
  })

  if (y > ALTO_PAG - 70) {
    doc.addPage()
    dibujarEncabezadoPagina(doc, 'Avance del curso', estudiante.nombreCompleto)
    y = 30
  }

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(11)
  doc.setTextColor(...C.tinta)
  doc.text('Avance paso a paso en el curso', MARGEN, y)
  y += 4

  const filasPasos = capitulosCurso.flatMap((cap) =>
    cap.pasos.map((paso) => {
      const hecho = estudiante.pasosDetalle?.[paso.id]
      const tipoPaso =
        paso.tipo === 'lectura' ? 'Lectura' : paso.tipo === 'video' ? 'Video' : 'Actividad'
      return [
        `T${cap.numero}`,
        tipoPaso,
        paso.titulo,
        hecho ? 'Completado' : 'Pendiente',
        hecho ? formatearFecha(hecho.fecha, true) : '—',
      ]
    })
  )

  autoTable(doc, {
    startY: y + 2,
    head: [['Tema', 'Tipo', 'Paso', 'Estado', 'Fecha']],
    body: filasPasos,
    styles: { fontSize: 7, cellPadding: 2, textColor: C.tinta, lineColor: [226, 232, 240], lineWidth: 0.15 },
    headStyles: { fillColor: C.azul, textColor: C.blanco, fontStyle: 'bold', fontSize: 7.5 },
    columnStyles: {
      0: { halign: 'center', cellWidth: 12 },
      1: { cellWidth: 22 },
      3: { halign: 'center', cellWidth: 22 },
    },
    alternateRowStyles: { fillColor: [248, 250, 252] },
    margin: { left: MARGEN, right: MARGEN },
    didParseCell(data) {
      if (data.section === 'body' && data.column.index === 3) {
        data.cell.styles.textColor = data.cell.raw === 'Completado' ? C.excelente : C.pendiente
        data.cell.styles.fontStyle = 'bold'
      }
    },
  })
}

export function descargarReportePdf() {
  const reporte = generarReporteDocente()
  const estadisticas = calcularEstadisticas(reporte.estudiantes)
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })

  dibujarPortada(doc, reporte, estadisticas)

  if (!reporte.estudiantes.length) {
    doc.setFontSize(12)
    doc.setTextColor(...C.suave)
    doc.text('No hay estudiantes registrados todavía.', MARGEN, 200)
  } else {
    doc.addPage()
    dibujarEncabezadoPagina(doc, 'Resumen del grupo')
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(13)
    doc.setTextColor(...C.tinta)
    doc.text('Tabla comparativa de estudiantes', MARGEN, 30)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.setTextColor(...C.suave)
    doc.text(
      'Comparación de avance, actividades realizadas y promedio de calificaciones.',
      MARGEN,
      36
    )
    dibujarResumenGeneral(doc, reporte.estudiantes, 42)

    reporte.estudiantes.forEach((estudiante) => {
      dibujarDetalleEstudiante(doc, estudiante)
    })
  }

  const total = doc.getNumberOfPages()
  for (let i = 1; i <= total; i += 1) {
    doc.setPage(i)
    dibujarPie(doc, i, total)
  }

  const fecha = new Date().toISOString().slice(0, 10)
  doc.save(`bioaventura-reporte-${fecha}.pdf`)
}
