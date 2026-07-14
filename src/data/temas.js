// ============================================================
//  UNIDAD: ORIGEN DE LA VIDA — BACHILLERATO (Don Bosco BGU)
//  13 temas × 2 páginas de lectura (ver capitulos.js)
// ============================================================

import { paginasPorTema } from './capitulos.js'
import { getImagenTema } from './media.js'

export const UNIDAD = 'Origen de la vida'
export const NIVEL = 'Bachillerato'

const temas = [
  {
    id: 'metodo-cientifico',
    numero: 1,
    unidad: UNIDAD,
    titulo: 'El método científico',
    subtitulo: '1. El método científico',
    emoji: '🔬',
    color: '#6366f1',
    resumen:
      'La biología avanza gracias al método científico: un conjunto ordenado de pasos que permite formular preguntas, probar hipótesis con experimentos controlados y obtener conclusiones verificables. Fue la base que permitió refutar ideas como la generación espontánea.',
    datosCuriosos: [
      'Galileo y Newton ayudaron a consolidar el método experimental en las ciencias naturales.',
      'Un experimento válido debe poder repetirse por otros científicos con resultados similares.',
      'Pasteur y Redi aplicaron el método científico para demostrar la biogénesis.',
    ],
    vocabulario: [
      { palabra: 'Hipótesis', definicion: 'Explicación provisional que debe comprobarse experimentalmente.' },
      { palabra: 'Variable', definicion: 'Factor que puede cambiar durante un experimento.' },
      { palabra: 'Control', definicion: 'Grupo o condición de referencia para comparar resultados.' },
      { palabra: 'Teoría científica', definicion: 'Explicación ampliamente contrastada y aceptada por la comunidad científica.' },
    ],
  },
  {
    id: 'microscopia',
    numero: 2,
    unidad: UNIDAD,
    titulo: 'Microscopía',
    subtitulo: '1.1 Microscopía óptica · 1.2 Microscopía electrónica',
    emoji: '🔭',
    color: '#8b5cf6',
    resumen:
      'El microscopio óptico usa luz visible y lentes para observar células y microorganismos. El microscopio electrónico emplea haces de electrones y alcanza resoluciones mucho mayores, imprescindibles para ver virus, orgánulos y estructuras subcelulares.',
    datosCuriosos: [
      'El aumento total del microscopio óptico es ocular × objetivo.',
      'El MET (transmisión) atraviesa la muestra con electrones; el MEB (barrido) imagina la superficie.',
      'Antonie van Leeuwenhoek fue pionero en observar microorganismos con lentes simples.',
    ],
    vocabulario: [
      { palabra: 'Resolución', definicion: 'Capacidad de distinguir dos puntos muy cercanos como separados.' },
      { palabra: 'Ocular', definicion: 'Lente cercana al ojo del observador en el microscopio compuesto.' },
      { palabra: 'Objetivo', definicion: 'Lente que amplía directamente la muestra preparada.' },
      { palabra: 'Microscopía electrónica', definicion: 'Técnica que usa electrones en lugar de fotones para formar la imagen.' },
    ],
  },
  {
    id: 'origen-universo',
    numero: 3,
    unidad: UNIDAD,
    titulo: 'Origen y evolución del universo',
    subtitulo: '3. Origen y evolución del universo',
    emoji: '🌌',
    color: '#1e3a8a',
    resumen:
      'El modelo del Big Bang describe un universo que hace unos 13 800 millones de años estaba extremadamente denso y caliente, y desde entonces se expande. En las estrellas se formaron elementos pesados como el carbono y el oxígeno, indispensables para la vida.',
    datosCuriosos: [
      'La radiación cósmica de fondo es un “eco” del universo primitivo detectado por Penzias y Wilson.',
      'El hidrógeno y el helio se formaron minutos después del Big Bang.',
      'Los elementos más pesados se sintetizaron en el interior de estrellas y supernovas.',
    ],
    vocabulario: [
      { palabra: 'Big Bang', definicion: 'Modelo científico del origen y expansión del universo.' },
      { palabra: 'Galaxia', definicion: 'Conjunto enorme de estrellas, gas y polvo unidos por la gravedad.' },
      { palabra: 'Nucleosíntesis', definicion: 'Formación de núcleos atómicos en el universo primitivo o en estrellas.' },
      { palabra: 'Radiación cósmica de fondo', definicion: 'Radiación de microondas remanente del universo temprano.' },
    ],
  },
  {
    id: 'origen-tierra',
    numero: 4,
    unidad: UNIDAD,
    titulo: 'Origen y evolución de la Tierra',
    subtitulo: '4. Origen y evolución de la Tierra',
    emoji: '🌍',
    color: '#f59e0b',
    resumen:
      'La Tierra se formó hace unos 4 600 millones de años a partir de polvo y gas del disco solar. Tras un periodo de intenso bombardeo meteorítico, se consolidó la corteza, surgieron océanos y la atmósfera evolucionó hasta las condiciones que permitieron la química prebiótica.',
    datosCuriosos: [
      'La Luna probablemente se originó por el impacto de un protoplaneta llamado Theia.',
      'Los primeros océanos se formaron cuando el vapor de agua se condensó al enfriarse la corteza.',
      'La atmósfera primitiva era reductora: rica en metano y amoníaco, sin oxígeno libre.',
    ],
    vocabulario: [
      { palabra: 'Eón Hádico', definicion: 'Primer eón geológico, con la Tierra incandescente.' },
      { palabra: 'Eón Arcaico', definicion: 'Eón en el que aparecieron océanos y las primeras formas de vida.' },
      { palabra: 'Corteza terrestre', definicion: 'Capa externa sólida rocosa del planeta.' },
      { palabra: 'Atmósfera reductora', definicion: 'Atmósfera sin oxígeno molecular libre.' },
    ],
  },
  {
    id: 'teorias-origen-vida',
    numero: 5,
    unidad: UNIDAD,
    titulo: 'Teorías sobre el origen de la vida',
    subtitulo: '5. Teorías sobre el origen de la vida',
    emoji: '📜',
    color: '#3b82f6',
    resumen:
      'A lo largo de la historia se han propuesto distintas explicaciones sobre el origen de la vida: desde el creacionismo religioso hasta la generación espontánea. La ciencia moderna estudia el origen químico de la vida mediante hipótesis contrastables y experimentos.',
    datosCuriosos: [
      'La palabra biología proviene del griego bios (vida) y logos (estudio).',
      'Aristóteles creía en la generación espontánea de algunos organismos.',
      'Hoy se distingue entre el origen primordial (abiótico) y el origen actual (biogénesis).',
    ],
    vocabulario: [
      { palabra: 'Creacionismo', definicion: 'Explicación según la cual la vida fue creada por un ser superior.' },
      { palabra: 'Abiogénesis', definicion: 'Origen de la vida a partir de materia no viva.' },
      { palabra: 'Biogénesis', definicion: 'Principio de que la vida actual proviene de vida preexistente.' },
      { palabra: 'Generación espontánea', definicion: 'Idea refutada de que organismos surgen de materia inerte.' },
    ],
  },
  {
    id: 'generacion-espontanea',
    numero: 6,
    unidad: UNIDAD,
    titulo: 'La generación espontánea',
    subtitulo: '5.1 La generación espontánea',
    emoji: '🪰',
    color: '#ef4444',
    resumen:
      'Durante siglos se creyó que gusanos, insectos y ratones surgían espontáneamente de materia en descomposición. En 1668, Francesco Redi demostró con bandejas de carne cubiertas y descubiertas que los gusanos provenían de huevos de moscas, no de la carne misma.',
    datosCuriosos: [
      'Redi comparó bandejas tapadas, cubiertas con tela y totalmente abiertas.',
      'Su experimento siguió los pasos del método científico: hipótesis, prueba y conclusión.',
      'Aun así, la generación espontánea de microbios se aceptó hasta el siglo XIX.',
    ],
    vocabulario: [
      { palabra: 'Francesco Redi', definicion: 'Naturalista italiano que refutó la generación espontánea en macroorganismos.' },
      { palabra: 'Materia inerte', definicion: 'Materia que no posee vida ni metabolismo.' },
      { palabra: 'Descomposición', definicion: 'Degradación de materia orgánica por agentes físicos o biológicos.' },
      { palabra: 'Refutación', definicion: 'Demostración de que una hipótesis o teoría es incorrecta.' },
    ],
  },
  {
    id: 'pasteur',
    numero: 7,
    unidad: UNIDAD,
    titulo: 'Pasteur y los matraces de cuello de cisne',
    subtitulo: '5.2 Pasteur y los matraces de cuello de cisne',
    emoji: '🧫',
    color: '#0ea5e9',
    resumen:
      'Louis Pasteur diseñó matraces con cuello de cisne que permitían el paso del aire pero impedían la entrada de polvo con microorganismos. Al calentar el caldo y mantenerlo estéril, demostró que los microbios no aparecían por generación espontánea.',
    datosCuriosos: [
      'Algunos matraces de Pasteur siguen estériles más de 150 años después.',
      'Pasteur también desarrolló la pasteurización para inactivar microorganismos en alimentos.',
      'Su trabajo sentó las bases de la microbiología y la teoría germinal de las enfermedades.',
    ],
    vocabulario: [
      { palabra: 'Esterilización', definicion: 'Eliminación total de microorganismos vivos en un medio.' },
      { palabra: 'Caldo de cultivo', definicion: 'Medio nutritivo líquido donde pueden crecer microorganismos.' },
      { palabra: 'Cuello de cisne', definicion: 'Curva del matraz que retiene partículas pero deja pasar el aire.' },
      { palabra: 'Louis Pasteur', definicion: 'Químico y microbiólogo francés, pionero de la biogénesis experimental.' },
    ],
  },
  {
    id: 'evolucion-quimica',
    numero: 8,
    unidad: UNIDAD,
    titulo: 'Teoría de la evolución química',
    subtitulo: '5.3 Teoría de la evolución química',
    emoji: '⚗️',
    color: '#8b5cf6',
    resumen:
      'Oparin y Haldane propusieron que en la Tierra primitiva los compuestos inorgánicos evolucionaron químicamente hacia moléculas orgánicas en un “caldo primordial”. El experimento de Miller y Urey (1953) sintetizó aminoácidos en el laboratorio, apoyando esta hipótesis.',
    datosCuriosos: [
      'Miller tenía solo 23 años cuando realizó su famoso experimento.',
      'Los coacervados de Oparin eran gotas de macromoléculas con propiedades de membrana.',
      'La evolución química propone pasos graduales: monómeros → polímeros → protocélulas.',
    ],
    vocabulario: [
      { palabra: 'Caldo primordial', definicion: 'Medio acuoso rico en compuestos orgánicos en la Tierra primitiva.' },
      { palabra: 'Coacervado', definicion: 'Agregado de macromoléculas que imita propiedades de membrana.' },
      { palabra: 'Síntesis abiótica', definicion: 'Formación de compuestos orgánicos sin intervención de seres vivos.' },
      { palabra: 'Miller-Urey', definicion: 'Experimento que simuló la atmósfera primitiva y produjo aminoácidos.' },
    ],
  },
  {
    id: 'otras-teorias',
    numero: 9,
    unidad: UNIDAD,
    titulo: 'Otras teorías sobre el origen de la vida',
    subtitulo: '6. Otras teorías sobre el origen de la vida',
    emoji: '🚀',
    color: '#6366f1',
    resumen:
      'Además de la evolución química terrestre, existen hipótesis alternativas como la panspermia, que propone que microorganismos o moléculas orgánicas llegaron a la Tierra en meteoritos o cometas. No explica el origen de la vida en el universo, pero sí su posible dispersión.',
    datosCuriosos: [
      'Se han encontrado aminoácidos en meteoritos como el de Murchison.',
      'La sonda Rosetta estudió compuestos orgánicos en el cometa 67P.',
      'Algunas bacterias (extremófilos) resisten vacío y radiación espacial.',
    ],
    vocabulario: [
      { palabra: 'Panspermia', definicion: 'Teoría de que la vida o sus componentes se dispersan por el cosmos.' },
      { palabra: 'Meteorito', definicion: 'Fragmento de roca espacial que alcanza la superficie terrestre.' },
      { palabra: 'Origen extraterrestre', definicion: 'Hipótesis que sitúa el inicio de la vida fuera de la Tierra.' },
      { palabra: 'Extremófilo', definicion: 'Organismo adaptado a condiciones ambientales extremas.' },
    ],
  },
  {
    id: 'bioelementos',
    numero: 10,
    unidad: UNIDAD,
    titulo: 'Bioelementos y biomoléculas',
    subtitulo: '7. Bioelementos y biomoléculas',
    emoji: '⚛️',
    color: '#10b981',
    resumen:
      'Los seres vivos contienen unos 70 elementos químicos, pero solo unos pocos son imprescindibles. Los bioelementos primarios (C, H, O, N, P, S) forman más del 95 % de la biomasa y constituyen la base de las biomoléculas orgánicas e inorgánicas.',
    datosCuriosos: [
      'El carbono puede formar cuatro enlaces covalentes y cadenas muy variadas.',
      'Los oligoelementos como el hierro o el yodo son necesarios en cantidades mínimas.',
      'El análisis químico de la materia viva revela una composición muy distinta a la de la materia inerte.',
    ],
    vocabulario: [
      { palabra: 'Bioelemento', definicion: 'Elemento químico presente en los seres vivos.' },
      { palabra: 'Biomolécula', definicion: 'Molécula que forma parte de la materia viva.' },
      { palabra: 'Oligoelemento', definicion: 'Elemento traza indispensable en pequeñas cantidades.' },
      { palabra: 'Biomasa', definicion: 'Masa total de materia viva en un organismo o ecosistema.' },
    ],
  },
  {
    id: 'agua',
    numero: 11,
    unidad: UNIDAD,
    titulo: 'Agua',
    subtitulo: '8.1 Composición · 8.2 Propiedades · 8.3 Funciones biológicas',
    emoji: '💧',
    color: '#06b6d4',
    resumen:
      'El agua (H₂O) constituye entre el 60 % y el 90 % de los seres vivos. Su polaridad y sus puentes de hidrógeno le confieren propiedades únicas: alto calor específico, gran poder disolvente, tensión superficial y densidad mayor en líquido que en sólido.',
    datosCuriosos: [
      'El hielo flota porque es menos denso que el agua líquida a 4 °C.',
      'Las medusas pueden contener hasta un 98 % de agua en su volumen.',
      'El agua actúa como disolvente universal de sustancias polares e iónicas.',
    ],
    vocabulario: [
      { palabra: 'Puente de hidrógeno', definicion: 'Interacción débil entre hidrógeno y átomos electronegativos.' },
      { palabra: 'Polaridad', definicion: 'Distribución desigual de carga en la molécula de agua.' },
      { palabra: 'Solución tampón', definicion: 'Sistema que mantiene estable el pH ante pequeños cambios.' },
      { palabra: 'Calor específico', definicion: 'Energía necesaria para elevar la temperatura de una sustancia.' },
    ],
  },
  {
    id: 'sales-minerales',
    numero: 12,
    unidad: UNIDAD,
    titulo: 'Sales minerales',
    subtitulo: '9. Sales minerales',
    emoji: '🧂',
    color: '#a855f7',
    resumen:
      'Las sales minerales son biomoléculas inorgánicas presentes en menor proporción que el agua, pero vitales. Pueden encontrarse precipitadas (huesos, conchas), disueltas como iones (Na⁺, K⁺, Ca²⁺, Cl⁻) o asociadas a moléculas orgánicas como la hemoglobina.',
    datosCuriosos: [
      'El fosfato de calcio junto al colágeno forma la estructura de los huesos.',
      'Los iones sodio y potasio son clave en la transmisión del impulso nervioso.',
      'El hierro en la hemoglobina permite transportar oxígeno en la sangre.',
    ],
    vocabulario: [
      { palabra: 'Sales precipitadas', definicion: 'Sales insolubles con función esquelética o de soporte.' },
      { palabra: 'Sales disueltas', definicion: 'Iones en solución acuosa con función reguladora.' },
      { palabra: 'Osmosis', definicion: 'Paso de agua a través de membrana semipermeable hacia mayor concentración.' },
      { palabra: 'Ion', definicion: 'Átomo o grupo de átomos con carga eléctrica positiva o negativa.' },
    ],
  },
  {
    id: 'biomoleculas-organicas',
    numero: 13,
    unidad: UNIDAD,
    titulo: 'Biomoléculas orgánicas',
    subtitulo: '10. Biomoléculas orgánicas',
    emoji: '🧪',
    color: '#ec4899',
    resumen:
      'Las biomoléculas orgánicas están basadas en el carbono y cumplen funciones estructurales, energéticas y reguladoras. Los cuatro grupos principales son los glúcidos, los lípidos, las proteínas (y enzimas) y los ácidos nucleicos (ADN y ARN).',
    datosCuriosos: [
      'La glucosa es el monosacárido más importante para obtener energía inmediata.',
      'Las enzimas son proteínas que aceleran reacciones químicas millones de veces.',
      'El ADN almacena la información genética en secuencias de cuatro bases nitrogenadas.',
    ],
    vocabulario: [
      { palabra: 'Glúcido', definicion: 'Biomolécula formada por C, H y O; función energética y estructural.' },
      { palabra: 'Lípido', definicion: 'Biomolécula hidrófoba; reserva energética y componente de membranas.' },
      { palabra: 'Proteína', definicion: 'Polímero de aminoácidos con funciones estructurales y catalíticas.' },
      { palabra: 'Ácido nucleico', definicion: 'Macromolécula (ADN o ARN) portadora de información genética.' },
    ],
  },
]

export const getTema = (id) => temasEnriquecidos.find((t) => t.id === id)

export const getPagina = (temaId, num) => {
  const tema = getTema(temaId)
  if (!tema) return null
  return tema.paginas.find((p) => p.numero === Number(num))
}

export const totalPaginas = (temaId) => getTema(temaId)?.paginas?.length ?? 0

const temasEnriquecidos = temas.map((t) => {
  const img = getImagenTema(t.id)
  return {
    ...t,
    imagen: img?.url ?? '',
    imagenAlt: img?.alt ?? t.titulo,
    imagenFuente: img?.fuente ?? '',
    paginas: (paginasPorTema[t.id] || []).map((p) =>
      p.imagenAlt
        ? {
            ...p,
            imagen: img?.url ?? '',
            imagenAlt: p.imagenAlt || img?.alt,
            imagenFuente: img?.fuente ?? '',
          }
        : p
    ),
  }
})

export { temasEnriquecidos as temas }
