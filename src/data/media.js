// ============================================================

//  MEDIOS PÚBLICOS — Imágenes y videos en español

//  Fuentes: Wikimedia Commons y YouTube (contenido educativo)

//  Todos los enlaces están centralizados aquí dentro del proyecto.

// ============================================================



const wiki = (archivo, ancho = 800) =>

  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(archivo)}?width=${ancho}`



const youtube = (id) => `https://www.youtube.com/watch?v=${id}`



export const mediaPorTema = {

  'metodo-cientifico': {

    imagen: {

      url: wiki('Scientific_method_spanish.svg', 800),

      alt: 'Pasos del método científico',

      fuente: 'Wikimedia Commons — Scientific_method_spanish.svg',

      paginaCommons: 'https://commons.wikimedia.org/wiki/File:Scientific_method_spanish.svg',

    },

    video: {

      id: 'hJOypWMQqvs',

      titulo: 'Método científico: pasos y aplicación en biología',

      url: youtube('hJOypWMQqvs'),

      canal: 'Es Ciencia',

      idioma: 'es',

    },

  },

  microscopia: {

    imagen: {

      url: wiki('Optical_microscope_nikon_alphaphot.jpg', 800),

      alt: 'Microscopio óptico de laboratorio',

      fuente: 'Wikimedia Commons — Optical microscope (dominio público)',

      paginaCommons: 'https://commons.wikimedia.org/wiki/File:Optical_microscope_nikon_alphaphot.jpg',

    },

    video: {

      id: '4kVXCZVYOyE',

      titulo: 'Microscopía óptica y electrónica',

      url: youtube('4kVXCZVYOyE'),

      canal: 'Técnicas de Microbiología (español)',

      idioma: 'es',

    },

  },

  'origen-universo': {

    imagen: {

      url: wiki('Universe_expansion2.png', 900),

      alt: 'Expansión del universo desde el Big Bang',

      fuente: 'Wikimedia Commons — Universe expansion (dominio público)',

      paginaCommons: 'https://commons.wikimedia.org/wiki/File:Universe_expansion2.png',

    },

    video: {

      id: 'G447noW9bS4',

      titulo: 'El origen del universo y el Big Bang',

      url: youtube('G447noW9bS4'),

      canal: 'OpenMind (español)',

      idioma: 'es',

    },

  },

  'origen-tierra': {

    imagen: {

      url: wiki('Hadean.png', 900),

      alt: 'Representación artística de la Tierra primitiva (eón Hádico)',

      fuente: 'Wikimedia Commons — Hadean.png (dominio público)',

      paginaCommons: 'https://commons.wikimedia.org/wiki/File:Hadean.png',

    },

    video: {

      id: 'yg_A80TMhaM',

      titulo: 'Origen del universo y formación de la Tierra',

      url: youtube('yg_A80TMhaM'),

      canal: 'Happy Learning Español',

      idioma: 'es',

    },

  },

  'teorias-origen-vida': {

    imagen: {

      url: wiki('Seresvivos02.png', 900),

      alt: 'Diversidad de seres vivos en la Tierra',

      fuente: 'Wikimedia Commons — Seresvivos02.png (dominio público)',

      paginaCommons: 'https://commons.wikimedia.org/wiki/File:Seresvivos02.png',

    },

    video: {

      id: '9RQ8ksPjL8k',

      titulo: '¿Cómo se originó la vida en la Tierra?',

      url: youtube('9RQ8ksPjL8k'),

      canal: 'CienciaT',

      idioma: 'es',

    },

  },

  'generacion-espontanea': {

    imagen: {

      url: wiki('Redi_meat_and_flies.jpg', 800),

      alt: 'Experimento de Redi con carne y moscas',

      fuente: 'Wikimedia Commons — Redi experiment (dominio público)',

      paginaCommons: 'https://commons.wikimedia.org/wiki/File:Redi_meat_and_flies.jpg',

    },

    video: {

      id: '9RQ8ksPjL8k',

      titulo: 'Generación espontánea y primeras teorías del origen',

      url: youtube('9RQ8ksPjL8k'),

      canal: 'CienciaT',

      idioma: 'es',

    },

  },

  pasteur: {

    imagen: {

      url: wiki('Pasteur_swon_neck_flask_experiment-es.svg', 800),

      alt: 'Experimento de Pasteur contra la generación espontánea',

      fuente: 'Wikimedia Commons — Pasteur_swon_neck_flask_experiment-es.svg (CC BY-SA)',

      paginaCommons: 'https://commons.wikimedia.org/wiki/File:Pasteur_swon_neck_flask_experiment-es.svg',

    },

    video: {

      id: 'GCQVGXZGPcI',

      titulo: 'Pasteur, biogénesis y origen de la vida',

      url: youtube('GCQVGXZGPcI'),

      canal: 'Crash Course Biología en Español',

      idioma: 'es',

    },

  },

  'evolucion-quimica': {

    imagen: {

      url: wiki('MillerUreyExperiment.svg', 700),

      alt: 'Esquema del experimento de Miller-Urey',

      fuente: 'Wikimedia Commons — MillerUreyExperiment.svg (dominio público)',

      paginaCommons: 'https://commons.wikimedia.org/wiki/File:MillerUreyExperiment.svg',

    },

    video: {

      id: 'qdvp8TYrCmg',

      titulo: 'Teoría de la evolución química (Miller-Urey)',

      url: youtube('qdvp8TYrCmg'),

      canal: 'Stated Clearly en Español',

      idioma: 'es',

    },

  },

  'otras-teorias': {

    imagen: {

      url: wiki('Murchison_Meteorite.jpg', 800),

      alt: 'Meteorito de Murchison, con aminoácidos encontrados en su interior',

      fuente: 'Wikimedia Commons — Murchison Meteorite (CC BY-SA)',

      paginaCommons: 'https://commons.wikimedia.org/wiki/File:Murchison_Meteorite.jpg',

    },

    video: {

      id: '_f1PrA4DR5c',

      titulo: 'Teoría de la panspermia',

      url: youtube('_f1PrA4DR5c'),

      canal: 'Ciencias con la Bióloga Elena',

      idioma: 'es',

    },

  },

  bioelementos: {

    imagen: {

      url: wiki('Periodic_table_(Spanish).svg', 800),

      alt: 'Tabla periódica con bioelementos destacados',

      fuente: 'Wikimedia Commons — Periodic table Spanish (CC BY-SA)',

      paginaCommons: 'https://commons.wikimedia.org/wiki/File:Periodic_table_(Spanish).svg',

    },

    video: {

      id: '4Vkz4NxS9YE',

      titulo: 'Bioelementos: primarios, secundarios y oligoelementos',

      url: youtube('4Vkz4NxS9YE'),

      canal: 'Ciencias con la Bióloga Elena',

      idioma: 'es',

    },

  },

  agua: {

    imagen: {

      url: wiki('Water_molecule_3D.svg', 800),

      alt: 'Estructura de la molécula de agua con puentes de hidrógeno',

      fuente: 'Wikimedia Commons — Water molecule (dominio público)',

      paginaCommons: 'https://commons.wikimedia.org/wiki/File:Water_molecule_3D.svg',

    },

    video: {

      id: 'U6OwBwcL9A8',

      titulo: 'Agua: propiedades físicas, químicas e importancia biológica',

      url: youtube('U6OwBwcL9A8'),

      canal: 'Facundo González',

      idioma: 'es',

    },

  },

  'sales-minerales': {

    imagen: {

      url: wiki('Calcium_phosphate.png', 700),

      alt: 'Fosfato de calcio, sales minerales en huesos',

      fuente: 'Wikimedia Commons — Calcium phosphate (dominio público)',

      paginaCommons: 'https://commons.wikimedia.org/wiki/File:Calcium_phosphate.png',

    },

    video: {

      id: 'pP0Ypq8NcG4',

      titulo: 'Sales minerales: tipos y funciones biológicas',

      url: youtube('pP0Ypq8NcG4'),

      canal: 'Biología educativa (español)',

      idioma: 'es',

    },

  },

  'biomoleculas-organicas': {

    imagen: {

      url: wiki('DNA_Structure+Key+Labelled.pn_NoBB.png', 800),

      alt: 'Estructura del ADN, biomolécula orgánica fundamental',

      fuente: 'Wikimedia Commons — DNA Structure (dominio público)',

      paginaCommons: 'https://commons.wikimedia.org/wiki/File:DNA_Structure%2BKey%2BLabelled.pn_NoBB.png',

    },

    video: {

      id: 'kQVoySmN5OA',

      titulo: 'Biomoléculas orgánicas: glúcidos, lípidos, proteínas y ácidos nucleicos',

      url: youtube('kQVoySmN5OA'),

      canal: 'Canal Mitocondria',

      idioma: 'es',

    },

  },

}



/** Imagen de portada para un tema */

export const getImagenTema = (temaId) => mediaPorTema[temaId]?.imagen ?? null



/** Video educativo de un tema */

export const getVideoTema = (temaId) => mediaPorTema[temaId]?.video ?? null



/** Listado de todos los recursos (útil para referencia) */

export const todosLosMedios = Object.entries(mediaPorTema).map(([temaId, media]) => ({

  temaId,

  ...media,

}))


