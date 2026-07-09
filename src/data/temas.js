// ============================================================
//  UNIDAD: ORIGEN DE LA VIDA — BACHILLERATO
//  10 temas × 2 páginas de lectura (ver capitulos.js)
// ============================================================

import { paginasPorTema } from './capitulos.js'
import { getImagenTema } from './media.js'

export const UNIDAD = 'Origen de la vida'
export const NIVEL = 'Bachillerato'

const temas = [
  {
    id: 'caracteristicas-vida',
    numero: 1,
    unidad: UNIDAD,
    titulo: 'Características de la vida',
    subtitulo: '¿Qué define a un ser vivo?',
    emoji: '🌿',
    color: '#10b981',
    resumen:
      'Antes de estudiar cómo surgió la vida, debemos saber qué la distingue de la materia inerte. Los seres vivos comparten siete características fundamentales que los científicos usan para identificarlos.',
    datosCuriosos: [
      'Los virus no cumplen todas las características de la vida, por eso su estatus es debatido.',
      'Algunos organismos pueden entrar en animación suspendida durante décadas.',
      'La Tierra alberga al menos 8,7 millones de especies conocidas y muchas más por descubrir.',
    ],
    vocabulario: [
      { palabra: 'Metabolismo', definicion: 'Conjunto de reacciones químicas que mantienen la vida.' },
      { palabra: 'Homeostasis', definicion: 'Capacidad de mantener condiciones internas estables.' },
      { palabra: 'Irritabilidad', definicion: 'Respuesta de un organismo a estímulos del entorno.' },
      { palabra: 'Reproducción', definicion: 'Capacidad de generar descendencia propia o similar.' },
    ],
  },
  {
    id: 'teorias-origen',
    numero: 2,
    unidad: UNIDAD,
    titulo: 'Teorías del origen de la vida',
    subtitulo: 'Abiogénesis, biogénesis y el experimento de Pasteur',
    emoji: '🔬',
    color: '#3b82f6',
    resumen:
      'Durante siglos se debatió si la vida podía surgir espontáneamente de la materia muerta. Las teorías de abiogénesis y biogénesis, y el experimento de Pasteur, marcaron un antes y un después en la biología.',
    datosCuriosos: [
      'Aristóteles creía que los gusanos surgían espontáneamente de la tierra húmeda.',
      'Redi demostró en 1668 que los gusanos en la carne provenían de huevos de mosca.',
      'Pasteur usó frascos de cuello de cisne para demostrar que los microorganismos no aparecían de la nada.',
    ],
    vocabulario: [
      { palabra: 'Abiogénesis', definicion: 'Teoría de que la vida surge de materia no viva.' },
      { palabra: 'Biogénesis', definicion: 'Principio de que la vida solo proviene de vida preexistente.' },
      { palabra: 'Generación espontánea', definicion: 'Idea de que organismos surgen de materia inerte.' },
      { palabra: 'Esterilización', definicion: 'Eliminación de microorganismos por calor u otros métodos.' },
    ],
  },
  {
    id: 'tierra-primitiva',
    numero: 3,
    unidad: UNIDAD,
    titulo: 'La Tierra primitiva',
    subtitulo: 'Condiciones del planeta hace 4 000 millones de años',
    emoji: '🌍',
    color: '#f59e0b',
    resumen:
      'Hace unos 4 600 millones de años se formó la Tierra. Su atmósfera, temperatura y composición eran muy distintas a las actuales, y esas condiciones fueron clave para que surgieran las primeras moléculas orgánicas.',
    datosCuriosos: [
      'La Luna se formó probablemente por el impacto de un protoplaneta llamado Theia.',
      'La atmósfera primitiva era rica en metano, amoníaco y vapor de agua, sin oxígeno libre.',
      'Los océanos primitivos se formaron cuando el vapor de agua se condensó al enfriarse la corteza.',
    ],
    vocabulario: [
      { palabra: 'Eón Hádico', definicion: 'Primer eón geológico, cuando la Tierra era un planeta incandescente.' },
      { palabra: 'Atmósfera reductora', definicion: 'Atmósfera sin oxígeno molecular libre.' },
      { palabra: 'Arcaico', definicion: 'Eón geológico en el que aparecieron las primeras formas de vida.' },
      { palabra: 'Corteza terrestre', definicion: 'Capa externa sólida de la Tierra.' },
    ],
  },
  {
    id: 'miller-urey',
    numero: 4,
    unidad: UNIDAD,
    titulo: 'Experimento de Miller-Urey',
    subtitulo: 'Síntesis de moléculas orgánicas en el laboratorio',
    emoji: '⚗️',
    color: '#8b5cf6',
    resumen:
      'En 1953, Stanley Miller y Harold Urey recrearon en el laboratorio las condiciones de la Tierra primitiva y lograron sintetizar aminoácidos, demostrando que la materia orgánica podía formarse sin vida.',
    datosCuriosos: [
      'Miller tenía solo 23 años cuando realizó el experimento.',
      'Se obtuvieron más de 20 aminoácidos diferentes en pocas semanas.',
      'Experimentos posteriores con distintas mezclas de gases también produjeron bases nitrogenadas.',
    ],
    vocabulario: [
      { palabra: 'Aminoácido', definicion: 'Molécula orgánica que forma las proteínas.' },
      { palabra: 'Descarga eléctrica', definicion: 'Simulación de rayos en la atmósfera primitiva.' },
      { palabra: 'Síntesis abiótica', definicion: 'Formación de compuestos orgánicos sin intervención de seres vivos.' },
      { palabra: 'Condensador', definicion: 'Parte del aparato que enfría y recoge los productos formados.' },
    ],
  },
  {
    id: 'biopolimeros',
    numero: 5,
    unidad: UNIDAD,
    titulo: 'Biopolímeros y moléculas orgánicas',
    subtitulo: 'De los monómeros a las macromoléculas',
    emoji: '🧪',
    color: '#06b6d4',
    resumen:
      'Las proteínas, los ácidos nucleicos, los carbohidratos y los lípidos son los pilares de la vida. Todos se forman a partir de monómeros más simples que se unen para crear macromoléculas.',
    datosCuriosos: [
      'El ADN puede almacenar información en secuencias de solo cuatro letras: A, T, C y G.',
      'Las proteínas enzimáticas aceleran reacciones químicas millones de veces.',
      'Los coacervados son gotas de biopolímeros que imitan propiedades de membranas primitivas.',
    ],
    vocabulario: [
      { palabra: 'Monómero', definicion: 'Unidad básica que se repite para formar un polímero.' },
      { palabra: 'Polímero', definicion: 'Macromolécula formada por muchos monómeros unidos.' },
      { palabra: 'Coacervado', definicion: 'Agregado de macromoléculas con propiedades de membrana.' },
      { palabra: 'Enzima', definicion: 'Proteína que cataliza reacciones químicas biológicas.' },
    ],
  },
  {
    id: 'mundo-rna',
    numero: 6,
    unidad: UNIDAD,
    titulo: 'Hipótesis del mundo del ARN',
    subtitulo: 'Cuando el ARN era el protagonista',
    emoji: '🧬',
    color: '#ec4899',
    resumen:
      'La hipótesis del mundo del ARN propone que, antes del ADN y las proteínas, el ARN cumplía las funciones de almacenar información y catalizar reacciones, siendo la molécula central de la vida primitiva.',
    datosCuriosos: [
      'Los ribosomas, esenciales para fabricar proteínas, están hechos principalmente de ARN.',
      'Se han encontrado ribozimas: moléculas de ARN con actividad catalítica.',
      'El ARN es menos estable que el ADN, lo que dificulta su conservación en fósiles.',
    ],
    vocabulario: [
      { palabra: 'ARN', definicion: 'Ácido ribonucleico, molécula similar al ADN con ribosa.' },
      { palabra: 'Ribozima', definicion: 'ARN con capacidad de catalizar reacciones químicas.' },
      { palabra: 'Transcripción', definicion: 'Proceso de copiar información del ADN al ARN.' },
      { palabra: 'Mundo del ARN', definicion: 'Hipótesis de que el ARN fue la primera molécula de la vida.' },
    ],
  },
  {
    id: 'panspermia',
    numero: 7,
    unidad: UNIDAD,
    titulo: 'Teoría de la panspermia',
    subtitulo: '¿La vida llegó desde el espacio?',
    emoji: '🚀',
    color: '#6366f1',
    resumen:
      'La panspermia sugiere que la vida, o sus componentes básicos, podrían haber llegado a la Tierra desde otros planetas o cometas. Es una alternativa a la idea de que la vida surgió exclusivamente aquí.',
    datosCuriosos: [
      'Se han encontrado aminoácidos en meteoritos como el de Murchison.',
      'Algunos microorganismos resisten el vacío y la radiación del espacio.',
      'La panspermia no explica el origen de la vida, solo su distribución en el universo.',
    ],
    vocabulario: [
      { palabra: 'Panspermia', definicion: 'Teoría de que la vida se dispersa por el universo.' },
      { palabra: 'Meteorito', definicion: 'Fragmento de roca espacial que llega a la superficie terrestre.' },
      { palabra: 'Exoplaneta', definicion: 'Planeta que orbita una estrella distinta al Sol.' },
      { palabra: 'Extremófilo', definicion: 'Organismo que vive en condiciones ambientales extremas.' },
    ],
  },
  {
    id: 'procariotas',
    numero: 8,
    unidad: UNIDAD,
    titulo: 'Primeras células procariotas',
    subtitulo: 'Los pioneros de la vida celular',
    emoji: '🦠',
    color: '#22c55e',
    resumen:
      'Las primeras células fueron procariotas: organismos sin núcleo definido, simples pero capaces de metabolizar, reproducirse y adaptarse. Los fósiles más antiguos de vida datan de hace unos 3 500 millones de años.',
    datosCuriosos: [
      'Las cianobacterias fueron las primeras en realizar fotosíntesis y oxigenar la atmósfera.',
      'Los estromatolitos son estructuras rocosas formadas por capas de cianobacterias.',
      'Las arqueas son procariotas que viven en ambientes extremos como fuentes termales.',
    ],
    vocabulario: [
      { palabra: 'Procariota', definicion: 'Célula sin núcleo ni orgánulos membranosos.' },
      { palabra: 'Estromatolito', definicion: 'Estructura fósil formada por cianobacterias.' },
      { palabra: 'Cianobacteria', definicion: 'Bacteria fotosintética que libera oxígeno.' },
      { palabra: 'Membrana plasmática', definicion: 'Capa que delimita la célula y regula el intercambio.' },
    ],
  },
  {
    id: 'endosimbiosis',
    numero: 9,
    unidad: UNIDAD,
    titulo: 'Teoría endosimbiótica',
    subtitulo: 'Cómo surgieron las células eucariotas',
    emoji: '🔋',
    color: '#ef4444',
    resumen:
      'Lynn Margulis propuso que las mitocondrias y los cloroplastos fueron originalmente bacterias libres que fueron incorporadas por células más grandes, dando origen a las células eucariotas complejas.',
    datosCuriosos: [
      'Las mitocondrias tienen su propio ADN circular, similar al de las bacterias.',
      'Los cloroplastos se dividen de forma independiente dentro de la célula vegetal.',
      'La teoría fue rechazada al principio, pero hoy es ampliamente aceptada.',
    ],
    vocabulario: [
      { palabra: 'Endosimbiosis', definicion: 'Convivencia de un organismo dentro de otro.' },
      { palabra: 'Mitocondria', definicion: 'Orgánulo que produce energía en células eucariotas.' },
      { palabra: 'Cloroplasto', definicion: 'Orgánulo donde ocurre la fotosíntesis en plantas.' },
      { palabra: 'Eucariota', definicion: 'Célula con núcleo y orgánulos membranosos.' },
    ],
  },
  {
    id: 'evolucion-quimica',
    numero: 10,
    unidad: UNIDAD,
    titulo: 'Evolución química y evidencias',
    subtitulo: 'Del átomo al organismo vivo',
    emoji: '⏳',
    color: '#0d9488',
    resumen:
      'La evolución química describe la transición gradual desde moléculas simples hasta sistemas vivos complejos. El registro fósil, la bioquímica y los experimentos de laboratorio aportan evidencias de este proceso.',
    datosCuriosos: [
      'La vida apareció apenas 500 millones de años después de que la Tierra se enfriara.',
      'El oxígeno atmosférico aumentó drásticamente hace 2 400 millones de años (Gran Oxidación).',
      'Aún no existe un consenso único sobre el mecanismo exacto del origen de la vida.',
    ],
    vocabulario: [
      { palabra: 'Evolución química', definicion: 'Proceso de complejización de moléculas hacia la vida.' },
      { palabra: 'Registro fósil', definicion: 'Restos o huellas de organismos del pasado.' },
      { palabra: 'Gran Oxidación', definicion: 'Aumento masivo de oxígeno en la atmósfera primitiva.' },
      { palabra: 'LUCA', definicion: 'Último antepasado común universal de todos los seres vivos.' },
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
