// ============================================================
//  BASE DE DATOS INTERNA — 6 CAPÍTULOS DE BIOLOGÍA
//  Cada capítulo tiene 5 páginas de lectura (ver capitulos.js).
// ============================================================

import { paginasPorTema } from './capitulos.js'

const temas = [
  {
    id: 'celula',
    numero: 1,
    titulo: 'La Célula',
    subtitulo: 'La unidad básica de la vida',
    emoji: '🔬',
    color: '#10b981',
    imagen: 'https://commons.wikimedia.org/wiki/Special:FilePath/Animal_cell_structure_en.svg?width=900',
    imagenAlt: 'Estructura de una célula animal',
    resumen:
      'Todos los seres vivos estamos formados por células. Son tan pequeñas que solo se ven con microscopio, pero dentro de ellas ocurre todo lo necesario para vivir: obtener energía, crecer y reproducirse.',
    datosCuriosos: [
      'El cuerpo humano tiene alrededor de 37 billones de células.',
      'La palabra “célula” fue usada por Robert Hooke en 1665 al observar corcho.',
      'Las mitocondrias tienen su propio ADN, distinto al del núcleo.',
    ],
    vocabulario: [
      { palabra: 'Membrana', definicion: 'Capa que rodea la célula y regula el paso de sustancias.' },
      { palabra: 'Núcleo', definicion: 'Estructura que contiene el material genético (ADN).' },
      { palabra: 'Mitocondria', definicion: 'Orgánulo que produce la energía de la célula.' },
      { palabra: 'Citoplasma', definicion: 'Medio interno donde se encuentran los orgánulos.' },
    ],
  },
  {
    id: 'fotosintesis',
    numero: 2,
    titulo: 'La Fotosíntesis',
    subtitulo: 'Cómo las plantas fabrican su alimento',
    emoji: '🌱',
    color: '#22c55e',
    imagen: 'https://commons.wikimedia.org/wiki/Special:FilePath/Photosynthesis_en.svg?width=900',
    imagenAlt: 'Esquema del proceso de fotosíntesis',
    resumen:
      'La fotosíntesis es el proceso por el que las plantas, las algas y algunas bacterias transforman la luz del Sol en alimento. Gracias a ella se produce el oxígeno que respiramos.',
    datosCuriosos: [
      'Un árbol grande puede liberar suficiente oxígeno para varias personas al día.',
      'Las hojas son verdes porque la clorofila refleja la luz verde.',
      'El fitoplancton del mar produce gran parte del oxígeno del planeta.',
    ],
    vocabulario: [
      { palabra: 'Clorofila', definicion: 'Pigmento verde que capta la luz solar.' },
      { palabra: 'Cloroplasto', definicion: 'Orgánulo donde ocurre la fotosíntesis.' },
      { palabra: 'Glucosa', definicion: 'Azúcar que la planta usa como alimento y energía.' },
      { palabra: 'Estoma', definicion: 'Poro de la hoja por donde entran y salen gases.' },
    ],
  },
  {
    id: 'genetica',
    numero: 3,
    titulo: 'El ADN y la Genética',
    subtitulo: 'El manual de instrucciones de la vida',
    emoji: '🧬',
    color: '#8b5cf6',
    imagen: 'https://commons.wikimedia.org/wiki/Special:FilePath/DNA_animation.gif?width=700',
    imagenAlt: 'Modelo de la doble hélice del ADN',
    resumen:
      'El ADN es una molécula que contiene la información para construir y hacer funcionar a todos los seres vivos. La genética estudia cómo esa información se hereda de padres a hijos.',
    datosCuriosos: [
      'Si estiráramos el ADN de una sola célula mediría casi 2 metros.',
      'Compartimos alrededor del 60% de nuestros genes con un plátano.',
      'Cada persona tiene un ADN único, excepto los gemelos idénticos.',
    ],
    vocabulario: [
      { palabra: 'ADN', definicion: 'Molécula que guarda la información genética.' },
      { palabra: 'Gen', definicion: 'Fragmento de ADN que determina una característica.' },
      { palabra: 'Cromosoma', definicion: 'Estructura que empaqueta el ADN.' },
      { palabra: 'Herencia', definicion: 'Transmisión de características de padres a hijos.' },
    ],
  },
  {
    id: 'ecosistemas',
    numero: 4,
    titulo: 'Los Ecosistemas',
    subtitulo: 'La vida y su entorno conectados',
    emoji: '🌳',
    color: '#16a34a',
    imagen: 'https://commons.wikimedia.org/wiki/Special:FilePath/Amazon_Manaus_forest.jpg?width=900',
    imagenAlt: 'Un bosque como ejemplo de ecosistema',
    resumen:
      'Un ecosistema es el conjunto formado por los seres vivos de un lugar y el ambiente en el que viven. Todos sus elementos están relacionados y dependen unos de otros.',
    datosCuriosos: [
      'La selva amazónica es el ecosistema con mayor biodiversidad del planeta.',
      'Los arrecifes de coral albergan el 25% de las especies marinas.',
      'Un solo árbol puede ser el hogar de cientos de especies.',
    ],
    vocabulario: [
      { palabra: 'Ecosistema', definicion: 'Conjunto de seres vivos y su ambiente.' },
      { palabra: 'Biótico', definicion: 'Elemento con vida de un ecosistema.' },
      { palabra: 'Abiótico', definicion: 'Elemento sin vida (agua, luz, suelo).' },
      { palabra: 'Productor', definicion: 'Ser vivo que fabrica su propio alimento.' },
    ],
  },
  {
    id: 'cuerpo-humano',
    numero: 5,
    titulo: 'El Cuerpo Humano',
    subtitulo: 'Sistemas que trabajan en equipo',
    emoji: '🫀',
    color: '#ef4444',
    imagen: 'https://commons.wikimedia.org/wiki/Special:FilePath/Human_body_features-nb.svg?width=500',
    imagenAlt: 'El cuerpo humano y sus sistemas',
    resumen:
      'El cuerpo humano funciona como una máquina increíble. Está formado por sistemas que colaboran para mantenernos vivos: respirar, digerir, movernos y pensar.',
    datosCuriosos: [
      'El corazón late unas 100.000 veces al día.',
      'El cerebro tiene alrededor de 86.000 millones de neuronas.',
      'El intestino delgado mide alrededor de 6 metros de largo.',
    ],
    vocabulario: [
      { palabra: 'Órgano', definicion: 'Estructura del cuerpo con una función específica.' },
      { palabra: 'Sistema', definicion: 'Conjunto de órganos que trabajan juntos.' },
      { palabra: 'Neurona', definicion: 'Célula del sistema nervioso.' },
      { palabra: 'Arteria', definicion: 'Vaso que lleva sangre desde el corazón.' },
    ],
  },
  {
    id: 'biodiversidad',
    numero: 6,
    titulo: 'La Biodiversidad',
    subtitulo: 'La variedad de la vida y su cuidado',
    emoji: '🌍',
    color: '#0d9488',
    imagen: 'https://commons.wikimedia.org/wiki/Special:FilePath/Coral_Outcrop_Flynn_Reef.jpg?width=900',
    imagenAlt: 'Un arrecife de coral lleno de vida',
    resumen:
      'La biodiversidad es la enorme variedad de seres vivos que habitan la Tierra: animales, plantas, hongos y microorganismos. Cuidarla es cuidar nuestro propio futuro.',
    datosCuriosos: [
      'Se estima que existen millones de especies aún sin descubrir.',
      'Cada día desaparecen varias especies por la actividad humana.',
      'Las áreas protegidas ayudan a conservar la biodiversidad.',
    ],
    vocabulario: [
      { palabra: 'Biodiversidad', definicion: 'Variedad de seres vivos de la Tierra.' },
      { palabra: 'Especie', definicion: 'Grupo de seres vivos parecidos que se reproducen entre sí.' },
      { palabra: 'Extinción', definicion: 'Desaparición total de una especie.' },
      { palabra: 'Hábitat', definicion: 'Lugar donde vive una especie.' },
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

const temasEnriquecidos = temas.map((t) => ({
  ...t,
  paginas: paginasPorTema[t.id] || [],
}))

export { temasEnriquecidos as temas }
