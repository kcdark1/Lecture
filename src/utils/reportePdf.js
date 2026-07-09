import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import { generarReporteDocente } from './storage.js'
import { getActividad } from '../data/actividades.js'
import { totalPasosCurso } from '../data/curso.js'
import { UNIDAD, NIVEL } from '../data/temas.js'

function formatearFecha(iso) {
  if (!iso) return '—'
  return new Date(iso).toLocaleString('es', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function promedioPuntajes(puntajes) {
  const valores = Object.values(puntajes || {})
  if (!valores.length) return null
  const suma = valores.reduce((acc, p) => acc + (p.porcentaje ?? 0), 0)
  return Math.round(suma / valores.length)
}

function filasResumen(estudiantes) {
  return estudiantes.map((e) => {
    const promedio = promedioPuntajes(e.puntajes)
    const progreso = totalPasosCurso
      ? Math.round((e.pasosCompletados / totalPasosCurso) * 100)
      : 0
    return [
      e.nombreCompleto,
      `${e.pasosCompletados}/${totalPasosCurso} (${progreso}%)`,
      e.cursoCompletado ? 'Sí' : 'No',
      promedio !== null ? `${promedio}%` : 'Sin actividades',
      formatearFecha(e.fechaRegistro),
    ]
  })
}

function filasActividades(puntajes) {
  return Object.entries(puntajes || {}).map(([actividadId, resultado]) => {
    const actividad = getActividad(actividadId)
    const titulo = actividad?.titulo || actividadId
    const aciertos = resultado.aciertos ?? '—'
    const total = resultado.total ?? '—'
    const porcentaje = resultado.porcentaje ?? '—'
    return [titulo, `${aciertos}/${total}`, `${porcentaje}%`, formatearFecha(resultado.fecha)]
  })
}

export function descargarReportePdf() {
  const reporte = generarReporteDocente()
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const margen = 14
  let y = margen

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(18)
  doc.text('BioAventura — Reporte docente', margen, y)

  y += 8
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(11)
  doc.text(`${NIVEL} · Unidad: ${UNIDAD}`, margen, y)

  y += 6
  doc.setFontSize(10)
  doc.setTextColor(80)
  doc.text(`Generado: ${formatearFecha(reporte.generado)}`, margen, y)
  doc.text(`Total de estudiantes: ${reporte.totalEstudiantes}`, margen, y + 5)
  doc.setTextColor(0)

  y += 14

  if (!reporte.estudiantes.length) {
    doc.setFontSize(12)
    doc.text('No hay estudiantes registrados todavía.', margen, y)
  } else {
    autoTable(doc, {
      startY: y,
      head: [['Estudiante', 'Progreso', 'Curso completado', 'Promedio', 'Registro']],
      body: filasResumen(reporte.estudiantes),
      styles: { fontSize: 9, cellPadding: 2.5 },
      headStyles: { fillColor: [16, 185, 129], textColor: 255 },
      margin: { left: margen, right: margen },
    })

    reporte.estudiantes.forEach((estudiante) => {
      doc.addPage()
      let detalleY = margen

      doc.setFont('helvetica', 'bold')
      doc.setFontSize(14)
      doc.text(estudiante.nombreCompleto, margen, detalleY)

      detalleY += 7
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(10)
      doc.text(`Registro: ${formatearFecha(estudiante.fechaRegistro)}`, margen, detalleY)
      doc.text(
        `Curso completado: ${estudiante.cursoCompletado ? 'Sí' : 'No'}`,
        margen,
        detalleY + 5
      )
      if (estudiante.fechaCompletado) {
        doc.text(`Fecha de finalización: ${formatearFecha(estudiante.fechaCompletado)}`, margen, detalleY + 10)
        detalleY += 5
      }

      detalleY += 12
      const actividades = filasActividades(estudiante.puntajes)

      if (!actividades.length) {
        doc.text('Sin puntajes de actividades registrados.', margen, detalleY)
      } else {
        autoTable(doc, {
          startY: detalleY,
          head: [['Actividad', 'Aciertos', 'Porcentaje', 'Fecha']],
          body: actividades,
          styles: { fontSize: 9, cellPadding: 2.5 },
          headStyles: { fillColor: [59, 130, 246], textColor: 255 },
          margin: { left: margen, right: margen },
        })
      }
    })
  }

  const paginas = doc.getNumberOfPages()
  for (let i = 1; i <= paginas; i += 1) {
    doc.setPage(i)
    doc.setFontSize(8)
    doc.setTextColor(120)
    doc.text(`Página ${i} de ${paginas}`, doc.internal.pageSize.getWidth() - margen, 287, { align: 'right' })
    doc.setTextColor(0)
  }

  const fecha = new Date().toISOString().slice(0, 10)
  doc.save(`bioaventura-reporte-${fecha}.pdf`)
}
