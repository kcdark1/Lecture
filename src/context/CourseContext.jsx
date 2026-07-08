import { createContext, useContext, useState, useCallback } from 'react'
import {
  getUsuarioActivo,
  registrarUsuario,
  marcarPasoCompletado,
  guardarPuntaje,
  marcarCursoCompletado,
  pasoEstaCompletado,
} from '../utils/storage.js'
import { totalPasosCurso } from '../data/curso.js'

const CourseContext = createContext(null)

export function CourseProvider({ children }) {
  const [usuario, setUsuario] = useState(() => getUsuarioActivo())
  const [mostrarRegistro, setMostrarRegistro] = useState(() => !getUsuarioActivo())
  const [mostrarDiploma, setMostrarDiploma] = useState(false)
  const [, setTick] = useState(0)
  const refrescar = () => setTick((t) => t + 1)

  const registrar = useCallback((nombres, apellidos) => {
    const u = registrarUsuario(nombres, apellidos)
    setUsuario(u)
    setMostrarRegistro(false)
    refrescar()
  }, [])

  const completarPaso = useCallback((pasoId, puntaje = null) => {
    marcarPasoCompletado(pasoId)
    if (puntaje?.actividadId) {
      guardarPuntaje(puntaje.actividadId, puntaje)
    }
    const u = getUsuarioActivo()
    const completados = Object.keys(u?.pasosCompletados || {}).length
    if (completados >= totalPasosCurso && !u?.cursoCompletado) {
      marcarCursoCompletado()
      setMostrarDiploma(true)
    }
    setUsuario(getUsuarioActivo())
    refrescar()
  }, [])

  const estaCompletado = useCallback((pasoId) => pasoEstaCompletado(pasoId), [usuario])

  const progreso = usuario
    ? Math.round((Object.keys(usuario.pasosCompletados || {}).length / totalPasosCurso) * 100)
    : 0

  return (
    <CourseContext.Provider
      value={{
        usuario,
        mostrarRegistro,
        setMostrarRegistro,
        mostrarDiploma,
        setMostrarDiploma,
        registrar,
        completarPaso,
        estaCompletado,
        progreso,
        totalPasos: totalPasosCurso,
        pasosCompletados: Object.keys(usuario?.pasosCompletados || {}).length,
        refrescar,
      }}
    >
      {children}
    </CourseContext.Provider>
  )
}

export function useCourse() {
  const ctx = useContext(CourseContext)
  if (!ctx) throw new Error('useCourse debe usarse dentro de CourseProvider')
  return ctx
}
