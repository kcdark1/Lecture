// ============================================================
//  PERSISTENCIA LOCAL (localStorage) — sin base de datos
//  Guarda usuarios, progreso, puntajes y registro docente.
// ============================================================

const CLAVE = 'bioaventura_datos'
const PASS_DOCENTE = 'Tesis123'

function leer() {
  try {
    const raw = localStorage.getItem(CLAVE)
    return raw ? JSON.parse(raw) : { usuarios: [], usuarioActivoId: null }
  } catch {
    return { usuarios: [], usuarioActivoId: null }
  }
}

function guardar(datos) {
  localStorage.setItem(CLAVE, JSON.stringify(datos))
}

function generarId() {
  return `u_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
}

export function getUsuarioActivo() {
  const datos = leer()
  return datos.usuarios.find((u) => u.id === datos.usuarioActivoId) || null
}

export function registrarUsuario(nombres, apellidos) {
  const datos = leer()
  const usuario = {
    id: generarId(),
    nombres: nombres.trim(),
    apellidos: apellidos.trim(),
    fechaRegistro: new Date().toISOString(),
    pasosCompletados: {},
    puntajes: {},
    cursoCompletado: false,
    fechaCompletado: null,
  }
  datos.usuarios.push(usuario)
  datos.usuarioActivoId = usuario.id
  guardar(datos)
  return usuario
}

export function cambiarUsuario(usuarioId) {
  const datos = leer()
  if (datos.usuarios.some((u) => u.id === usuarioId)) {
    datos.usuarioActivoId = usuarioId
    guardar(datos)
  }
}

export function marcarPasoCompletado(pasoId) {
  const datos = leer()
  const u = datos.usuarios.find((x) => x.id === datos.usuarioActivoId)
  if (!u) return
  u.pasosCompletados[pasoId] = { fecha: new Date().toISOString() }
  guardar(datos)
}

export function guardarPuntaje(actividadId, resultado) {
  const datos = leer()
  const u = datos.usuarios.find((x) => x.id === datos.usuarioActivoId)
  if (!u) return
  u.puntajes[actividadId] = {
    ...resultado,
    fecha: new Date().toISOString(),
  }
  guardar(datos)
}

export function marcarCursoCompletado() {
  const datos = leer()
  const u = datos.usuarios.find((x) => x.id === datos.usuarioActivoId)
  if (!u) return
  u.cursoCompletado = true
  u.fechaCompletado = new Date().toISOString()
  guardar(datos)
}

export function getProgresoUsuario() {
  const u = getUsuarioActivo()
  if (!u) return { completados: 0, total: 0, porcentaje: 0 }
  const completados = Object.keys(u.pasosCompletados).length
  return { completados, porcentaje: 0 }
}

export function pasoEstaCompletado(pasoId) {
  const u = getUsuarioActivo()
  return !!u?.pasosCompletados[pasoId]
}

export function verificarPasswordDocente(password) {
  return password === PASS_DOCENTE
}

export function generarReporteDocente() {
  const datos = leer()
  const reporte = {
    generado: new Date().toISOString(),
    totalEstudiantes: datos.usuarios.length,
    estudiantes: datos.usuarios.map((u) => ({
      nombres: u.nombres,
      apellidos: u.apellidos,
      nombreCompleto: `${u.nombres} ${u.apellidos}`,
      fechaRegistro: u.fechaRegistro,
      cursoCompletado: u.cursoCompletado,
      fechaCompletado: u.fechaCompletado,
      pasosCompletados: Object.keys(u.pasosCompletados).length,
      puntajes: u.puntajes,
    })),
  }
  return reporte
}

export function getTodosUsuarios() {
  return leer().usuarios
}
