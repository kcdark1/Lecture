// ============================================================
//  MEDIOS PÚBLICOS — Imágenes y videos en español
//  Fuentes: Wikimedia Commons y YouTube (contenido educativo)
//  Todos los enlaces están centralizados aquí dentro del proyecto.
// ============================================================

const wiki = (archivo, ancho = 800) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(archivo)}?width=${ancho}`

const youtube = (id) => `https://www.youtube.com/watch?v=${id}`

export const mediaPorTema = {
  'caracteristicas-vida': {
    imagen: {
      url: wiki('Seresvivos02.png', 900),
      alt: 'Diversidad de seres vivos en la Tierra',
      fuente: 'Wikimedia Commons — Seresvivos02.png (dominio público)',
      paginaCommons: 'https://commons.wikimedia.org/wiki/File:Seresvivos02.png',
    },
    video: {
      id: 'gJd65_Xrxs4',
      titulo: 'Características de la vida',
      url: youtube('gJd65_Xrxs4'),
      canal: 'Amoeba Sisters en Español',
      idioma: 'es',
    },
  },
  'teorias-origen': {
    imagen: {
      url: wiki('Pasteur_swon_neck_flask_experiment-es.svg', 800),
      alt: 'Experimento de Pasteur contra la generación espontánea',
      fuente: 'Wikimedia Commons — Pasteur_swon_neck_flask_experiment-es.svg (CC BY-SA)',
      paginaCommons: 'https://commons.wikimedia.org/wiki/File:Pasteur_swon_neck_flask_experiment-es.svg',
    },
    video: {
      id: '9RQ8ksPjL8k',
      titulo: '¿Cómo se originó la vida en la Tierra?',
      url: youtube('9RQ8ksPjL8k'),
      canal: 'CienciaT',
      idioma: 'es',
    },
  },
  'tierra-primitiva': {
    imagen: {
      url: wiki('Hadean.png', 900),
      alt: 'Representación artística de la Tierra primitiva (eón Hádico)',
      fuente: 'Wikimedia Commons — Hadean.png (dominio público)',
      paginaCommons: 'https://commons.wikimedia.org/wiki/File:Hadean.png',
    },
    video: {
      id: 'AFL2O7TKliA',
      titulo: 'El Precámbrico: atmósfera y océanos primitivos',
      url: youtube('AFL2O7TKliA'),
      canal: 'Geológica',
      idioma: 'es',
    },
  },
  'miller-urey': {
    imagen: {
      url: wiki('MillerUreyExperiment.svg', 700),
      alt: 'Esquema del experimento de Miller-Urey',
      fuente: 'Wikimedia Commons — MillerUreyExperiment.svg (dominio público)',
      paginaCommons: 'https://commons.wikimedia.org/wiki/File:MillerUreyExperiment.svg',
    },
    video: {
      id: 'qdvp8TYrCmg',
      titulo: '¿Qué fue el experimento de Miller-Urey?',
      url: youtube('qdvp8TYrCmg'),
      canal: 'Stated Clearly en Español',
      idioma: 'es',
    },
  },
  biopolimeros: {
    imagen: {
      url: wiki('DNA_Structure+Key+Labelled.pn_NoBB.png', 800),
      alt: 'Estructura del ADN, una de las biomoléculas fundamentales',
      fuente: 'Wikimedia Commons — DNA Structure (dominio público)',
      paginaCommons: 'https://commons.wikimedia.org/wiki/File:DNA_Structure%2BKey%2BLabelled.pn_NoBB.png',
    },
    video: {
      id: 'kQVoySmN5OA',
      titulo: 'Biomoléculas: proteínas, carbohidratos, lípidos y ácidos nucleicos',
      url: youtube('kQVoySmN5OA'),
      canal: 'Canal Mitocondria',
      idioma: 'es',
    },
  },
  'mundo-rna': {
    imagen: {
      url: wiki('RNA_structure.svg', 800),
      alt: 'Estructura del ARN',
      fuente: 'Wikimedia Commons — RNA_structure.svg (dominio público)',
      paginaCommons: 'https://commons.wikimedia.org/wiki/File:RNA_structure.svg',
    },
    video: {
      id: '0wOf2Fgi3DE',
      titulo: 'Hipótesis del mundo del ARN',
      url: youtube('0wOf2Fgi3DE'),
      canal: 'Stated Clearly en Español',
      idioma: 'es',
    },
  },
  panspermia: {
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
  procariotas: {
    imagen: {
      url: wiki('Prokaryote_cell_diagram-es.svg', 800),
      alt: 'Estructura de una célula procariota (diagrama en español)',
      fuente: 'Wikimedia Commons — Prokaryote_cell_diagram-es.svg (CC BY-SA)',
      paginaCommons: 'https://commons.wikimedia.org/wiki/File:Prokaryote_cell_diagram-es.svg',
    },
    video: {
      id: 'FJx0auAdQsw',
      titulo: 'Células procariotas y eucariotas',
      url: youtube('FJx0auAdQsw'),
      canal: 'Smile and Learn en Español',
      idioma: 'es',
    },
  },
  endosimbiosis: {
    imagen: {
      url: wiki('Endosymbiosis.svg', 800),
      alt: 'Esquema de la teoría endosimbiótica',
      fuente: 'Wikimedia Commons — Endosymbiosis.svg (dominio público)',
      paginaCommons: 'https://commons.wikimedia.org/wiki/File:Endosymbiosis.svg',
    },
    video: {
      id: '1EaYcXHRBug',
      titulo: 'Teoría endosimbiótica de Lynn Margulis',
      url: youtube('1EaYcXHRBug'),
      canal: 'Educación en línea',
      idioma: 'es',
    },
  },
  'evolucion-quimica': {
    imagen: {
      url: wiki('Geologic_time_scale_-_clock_representation_(Spanish).svg', 800),
      alt: 'Escala de tiempo geológico (versión en español)',
      fuente: 'Wikimedia Commons — Geologic time scale (Spanish) (CC BY-SA)',
      paginaCommons: 'https://commons.wikimedia.org/wiki/File:Geologic_time_scale_-_clock_representation_(Spanish).svg',
    },
    video: {
      id: 'GCQVGXZGPcI',
      titulo: '¿Cómo se originó la vida? Evolución química',
      url: youtube('GCQVGXZGPcI'),
      canal: 'Crash Course Biología en Español',
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
