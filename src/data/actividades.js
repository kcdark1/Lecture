// ============================================================
//  20 ACTIVIDADES — 2 por cada uno de los 10 temas
//  Unidad: Origen de la vida — Bachillerato
// ============================================================

export const actividades = [
  // ---------- TEMA 1: CARACTERÍSTICAS DE LA VIDA ----------
  {
    id: 'caracteristicas-vida-quiz',
    temaId: 'caracteristicas-vida',
    tipo: 'quiz',
    titulo: 'Quiz: características de la vida',
    descripcion: 'Responde las preguntas sobre las propiedades que definen a los seres vivos.',
    preguntas: [
      {
        pregunta: '¿Cuál es la unidad básica de la vida?',
        opciones: ['El átomo', 'La célula', 'El tejido'],
        correcta: 1,
      },
      {
        pregunta: '¿Qué característica permite mantener condiciones internas estables?',
        opciones: ['Metabolismo', 'Homeostasis', 'Irritabilidad'],
        correcta: 1,
      },
      {
        pregunta: '¿Por qué los virus son un caso debatido?',
        opciones: ['Porque son muy grandes', 'Porque no cumplen todas las características de la vida', 'Porque no tienen ADN'],
        correcta: 1,
      },
    ],
  },
  {
    id: 'caracteristicas-vida-completar',
    temaId: 'caracteristicas-vida',
    tipo: 'completar',
    titulo: 'Completa: características de la vida',
    descripcion: 'Usa el banco de palabras para completar las oraciones.',
    banco: ['célula', 'homeostasis', 'metabolismo', 'irritabilidad'],
    frases: [
      { texto: 'La ___ es la unidad básica de todos los seres vivos.', respuesta: 'célula' },
      { texto: 'La ___ permite mantener condiciones internas estables.', respuesta: 'homeostasis' },
      { texto: 'El ___ es el conjunto de reacciones químicas que mantienen la vida.', respuesta: 'metabolismo' },
      { texto: 'La ___ es la capacidad de responder a estímulos del entorno.', respuesta: 'irritabilidad' },
    ],
  },

  // ---------- TEMA 2: TEORÍAS DEL ORIGEN ----------
  {
    id: 'teorias-origen-clasificar',
    temaId: 'teorias-origen',
    tipo: 'clasificar',
    titulo: 'Clasifica: abiogénesis y biogénesis',
    descripcion: 'Coloca cada afirmación en la teoría correcta.',
    categorias: [
      { nombre: 'Abiogénesis', emoji: '⚗️' },
      { nombre: 'Biogénesis', emoji: '🦠' },
    ],
    items: [
      { texto: 'La vida surge de materia no viva', cat: 0 },
      { texto: 'La vida solo proviene de vida preexistente', cat: 1 },
      { texto: 'Aplica al origen primordial en la Tierra primitiva', cat: 0 },
      { texto: 'Demostrada por el experimento de Pasteur', cat: 1 },
      { texto: 'Generación espontánea de microorganismos', cat: 0 },
      { texto: 'Todo organismo proviene de un organismo previo', cat: 1 },
    ],
  },
  {
    id: 'teorias-origen-completar',
    temaId: 'teorias-origen',
    tipo: 'completar',
    titulo: 'Completa: teorías del origen',
    descripcion: 'Usa el banco de palabras para completar las oraciones.',
    banco: ['Pasteur', 'Redi', 'biogénesis', 'espontánea'],
    frases: [
      { texto: 'La generación ___ fue la creencia de que la vida surgía de materia inerte.', respuesta: 'espontánea' },
      { texto: '___ demostró que los gusanos en la carne venían de huevos de moscas.', respuesta: 'Redi' },
      { texto: '___ demostró la biogénesis con frascos de cuello de cisne.', respuesta: 'Pasteur' },
      { texto: 'La ___ establece que la vida solo proviene de vida preexistente.', respuesta: 'biogénesis' },
    ],
  },

  // ---------- TEMA 3: TIERRA PRIMITIVA ----------
  {
    id: 'tierra-primitiva-completar',
    temaId: 'tierra-primitiva',
    tipo: 'completar',
    titulo: 'Completa: la Tierra primitiva',
    descripcion: 'Completa las oraciones sobre las condiciones del planeta primitivo.',
    banco: ['reductora', 'Arcaico', 'rayos', 'océanos'],
    frases: [
      { texto: 'La atmósfera primitiva era ___, sin oxígeno libre.', respuesta: 'reductora' },
      { texto: 'En el eón ___ aparecieron los primeros océanos y la vida.', respuesta: 'Arcaico' },
      { texto: 'Los ___ aportaban energía para reacciones químicas.', respuesta: 'rayos' },
      { texto: 'Los ___ primitivos concentraron las moléculas orgánicas.', respuesta: 'océanos' },
    ],
  },
  {
    id: 'tierra-primitiva-relacionar',
    temaId: 'tierra-primitiva',
    tipo: 'relacionar',
    titulo: 'Relaciona: eones y características',
    descripcion: 'Une cada eón geológico con su característica principal.',
    pares: [
      { termino: 'Eón Hádico', definicion: 'Tierra incandescente y formación de la corteza' },
      { termino: 'Eón Arcaico', definicion: 'Primeros océanos y aparición de la vida' },
      { termino: 'Atmósfera reductora', definicion: 'Sin oxígeno libre, rica en metano y amoníaco' },
      { termino: 'Océanos primitivos', definicion: 'Medio donde se concentraron moléculas orgánicas' },
    ],
  },

  // ---------- TEMA 4: MILLER-UREY ----------
  {
    id: 'miller-urey-secuencia',
    temaId: 'miller-urey',
    tipo: 'secuencia',
    titulo: 'Ordena: el experimento de Miller-Urey',
    descripcion: 'Coloca en orden los pasos del experimento.',
    intro: 'Ordena los pasos del experimento de Miller-Urey, del primero al último.',
    pasos: [
      'Se colocan gases primitivos (metano, amoníaco, hidrógeno) en el aparato.',
      'Se calienta el agua para simular el océano primitivo.',
      'Las descargas eléctricas simulan los rayos atmosféricos.',
      'Los productos se disuelven en el agua caliente del frasco.',
      'Tras una semana, se analizan los compuestos orgánicos formados.',
    ],
  },
  {
    id: 'miller-urey-quiz',
    temaId: 'miller-urey',
    tipo: 'quiz',
    titulo: 'Quiz: Miller-Urey',
    descripcion: 'Responde las preguntas sobre el famoso experimento.',
    preguntas: [
      {
        pregunta: '¿En qué año realizaron Miller y Urey su experimento?',
        opciones: ['1923', '1953', '1973'],
        correcta: 1,
      },
      {
        pregunta: '¿Qué compuestos orgánicos se sintetizaron principalmente?',
        opciones: ['Lípidos', 'Aminoácidos', 'Vitaminas'],
        correcta: 1,
      },
      {
        pregunta: '¿Qué simulaban las descargas eléctricas del aparato?',
        opciones: ['Erupciones volcánicas', 'Rayos atmosféricos', 'Radiación solar'],
        correcta: 1,
      },
    ],
  },

  // ---------- TEMA 5: BIOPOLÍMEROS ----------
  {
    id: 'biopolimeros-memoria',
    temaId: 'biopolimeros',
    tipo: 'memoria',
    titulo: 'Memorama: biopolímeros',
    descripcion: 'Encuentra cada biopolímero y su monómero correspondiente.',
    pares: [
      { a: 'Proteína', b: 'Aminoácido' },
      { a: 'ADN', b: 'Nucleótido' },
      { a: 'Almidón', b: 'Glucosa' },
      { a: 'Lípido', b: 'Ácido graso' },
      { a: 'Monómero', b: 'Unidad básica del polímero' },
      { a: 'Coacervado', b: 'Gota de macromoléculas' },
    ],
  },
  {
    id: 'biopolimeros-completar',
    temaId: 'biopolimeros',
    tipo: 'completar',
    titulo: 'Completa: biopolímeros',
    descripcion: 'Completa las oraciones sobre macromoléculas y monómeros.',
    banco: ['monómeros', 'enzimas', 'coacervados', 'autocatalítico'],
    frases: [
      { texto: 'Los polímeros se forman al unir muchos ___.', respuesta: 'monómeros' },
      { texto: 'Las ___ son proteínas que catalizan reacciones biológicas.', respuesta: 'enzimas' },
      { texto: 'Los ___ son gotas de macromoléculas con propiedades de membrana.', respuesta: 'coacervados' },
      { texto: 'Un sistema ___ produce moléculas que aceleran su propia formación.', respuesta: 'autocatalítico' },
    ],
  },

  // ---------- TEMA 6: MUNDO DEL ARN ----------
  {
    id: 'mundo-rna-anagrama',
    temaId: 'mundo-rna',
    tipo: 'anagrama',
    titulo: 'Ordena la palabra: mundo del ARN',
    descripcion: 'Las letras están desordenadas. ¡Colócalas en orden con ayuda de la pista!',
    palabras: [
      { palabra: 'RIBOZIMA', pista: 'ARN con actividad catalítica.' },
      { palabra: 'NUCLEOTIDO', pista: 'Monómero de los ácidos nucleicos.' },
      { palabra: 'RIBOSOMA', pista: 'Estructura formada principalmente por ARN.' },
      { palabra: 'HELICE', pista: 'Forma de escalera retorcida del ADN.' },
    ],
  },
  {
    id: 'mundo-rna-completar',
    temaId: 'mundo-rna',
    tipo: 'completar',
    titulo: 'Completa: mundo del ARN',
    descripcion: 'Completa las oraciones sobre la hipótesis del mundo del ARN.',
    banco: ['ribozimas', 'ARN', 'ADN', 'catalizar'],
    frases: [
      { texto: 'El ___ puede almacenar información y catalizar reacciones.', respuesta: 'ARN' },
      { texto: 'Las ___ son moléculas de ARN con actividad catalítica.', respuesta: 'ribozimas' },
      { texto: 'El ___ reemplazó al ARN por ser más estable.', respuesta: 'ADN' },
      { texto: 'Las ribozimas pueden ___ reacciones químicas.', respuesta: 'catalizar' },
    ],
  },

  // ---------- TEMA 7: PANSPERMIA ----------
  {
    id: 'panspermia-quiz',
    temaId: 'panspermia',
    tipo: 'quiz',
    titulo: 'Quiz: panspermia',
    descripcion: 'Responde las preguntas sobre la teoría de la panspermia.',
    preguntas: [
      {
        pregunta: '¿Qué propone la teoría de la panspermia?',
        opciones: ['Que la vida surgió solo en la Tierra', 'Que la vida o sus componentes llegaron del espacio', 'Que no existió un origen de la vida'],
        correcta: 1,
      },
      {
        pregunta: '¿Qué se encontró en el meteorito de Murchison?',
        opciones: ['Fósiles de bacterias', 'Aminoácidos', 'ADN completo'],
        correcta: 1,
      },
      {
        pregunta: '¿La panspermia explica el primer origen de la vida en el universo?',
        opciones: ['Sí, completamente', 'No, solo propone cómo se dispersó', 'Solo para la Tierra'],
        correcta: 1,
      },
    ],
  },
  {
    id: 'panspermia-completar',
    temaId: 'panspermia',
    tipo: 'completar',
    titulo: 'Completa: panspermia',
    descripcion: 'Completa las oraciones sobre la teoría de la panspermia.',
    banco: ['meteoritos', 'Arrhenius', 'aminoácidos', 'espacio'],
    frases: [
      { texto: 'La panspermia propone que la vida llegó desde el ___.', respuesta: 'espacio' },
      { texto: 'Se han encontrado ___ en meteoritos como el de Murchison.', respuesta: 'aminoácidos' },
      { texto: 'La panspermia fue propuesta por Svante ___.', respuesta: 'Arrhenius' },
      { texto: 'Los ___ pueden transportar compuestos orgánicos a la Tierra.', respuesta: 'meteoritos' },
    ],
  },

  // ---------- TEMA 8: PROCARIOTAS ----------
  {
    id: 'procariotas-clasificar',
    temaId: 'procariotas',
    tipo: 'clasificar',
    titulo: 'Clasifica: procariotas y eucariotas',
    descripcion: 'Coloca cada característica en el tipo de célula correcto.',
    categorias: [
      { nombre: 'Procariota', emoji: '🦠' },
      { nombre: 'Eucariota', emoji: '🔬' },
    ],
    items: [
      { texto: 'Sin núcleo definido', cat: 0 },
      { texto: 'ADN circular en nucleoide', cat: 0 },
      { texto: 'Con núcleo y orgánulos membranosos', cat: 1 },
      { texto: 'Fisión binaria', cat: 0 },
      { texto: 'Mitocondrias', cat: 1 },
      { texto: 'Primeras células en la Tierra', cat: 0 },
    ],
  },
  {
    id: 'procariotas-ahorcado',
    temaId: 'procariotas',
    tipo: 'ahorcado',
    titulo: 'Ahorcado: procariotas',
    descripcion: 'Adivina la palabra relacionada con las primeras células.',
    palabra: 'ESTROMATOLITO',
    pista: 'Estructura fósil formada por capas de cianobacterias.',
  },

  // ---------- TEMA 9: ENDOSIMBIOSIS ----------
  {
    id: 'endosimbiosis-relacionar',
    temaId: 'endosimbiosis',
    tipo: 'relacionar',
    titulo: 'Relaciona: endosimbiosis',
    descripcion: 'Une cada orgánulo con su origen bacteriano.',
    pares: [
      { termino: 'Mitocondria', definicion: 'Bacteria aeróbica incorporada' },
      { termino: 'Cloroplasto', definicion: 'Cianobacteria incorporada' },
      { termino: 'ADN circular propio', definicion: 'Evidencia de origen bacteriano' },
      { termino: 'Lynn Margulis', definicion: 'Propuso la teoría endosimbiótica' },
    ],
  },
  {
    id: 'endosimbiosis-memoria',
    temaId: 'endosimbiosis',
    tipo: 'memoria',
    titulo: 'Memorama: endosimbiosis',
    descripcion: 'Encuentra cada evidencia y su significado.',
    pares: [
      { a: 'ADN circular', b: 'Similar al de bacterias' },
      { a: 'Doble membrana', b: 'Membrana bacteriana + vesícula' },
      { a: 'Ribosomas 70S', b: 'Tipo bacteriano' },
      { a: 'División binaria', b: 'Se reproduce como bacteria' },
      { a: 'Mitocondria', b: 'Produce energía (ATP)' },
      { a: 'Cloroplasto', b: 'Realiza fotosíntesis' },
    ],
  },

  // ---------- TEMA 10: EVOLUCIÓN QUÍMICA ----------
  {
    id: 'evolucion-quimica-secuencia',
    temaId: 'evolucion-quimica',
    tipo: 'secuencia',
    titulo: 'Ordena: evolución química',
    descripcion: 'Coloca en orden los pasos de la evolución química hacia la vida.',
    intro: 'Ordena los pasos de la evolución química, del más simple al más complejo.',
    pasos: [
      'Formación de átomos y moléculas simples en la Tierra primitiva.',
      'Síntesis de monómeros orgánicos (aminoácidos, nucleótidos).',
      'Formación de polímeros y sistemas autocatalíticos.',
      'Aparición de protocélulas con membrana.',
      'Surgimiento de las primeras células procariotas.',
    ],
  },
  {
    id: 'evolucion-quimica-sopa',
    temaId: 'evolucion-quimica',
    tipo: 'sopa',
    titulo: 'Sopa de letras: evolución química',
    descripcion: 'Encuentra las palabras escondidas sobre el origen de la vida.',
    palabras: ['LUCA', 'FOSIL', 'OXIGENO', 'QUIMICA', 'VIDA', 'ARN'],
  },
]

export const getActividad = (id) => actividades.find((a) => a.id === id)
export const getActividadesDeTema = (temaId) =>
  actividades.filter((a) => a.temaId === temaId)

export const etiquetasTipo = {
  ahorcado: { nombre: 'Ahorcado', emoji: '🎯' },
  completar: { nombre: 'Completar', emoji: '✏️' },
  quiz: { nombre: 'Quiz', emoji: '❓' },
  verdaderofalso: { nombre: 'Verdadero o Falso', emoji: '⚖️' },
  memoria: { nombre: 'Memorama', emoji: '🃏' },
  secuencia: { nombre: 'Ordena la secuencia', emoji: '🔢' },
  anagrama: { nombre: 'Ordena la palabra', emoji: '🔤' },
  sopa: { nombre: 'Sopa de letras', emoji: '🔎' },
  clasificar: { nombre: 'Clasifica', emoji: '🗂️' },
  relacionar: { nombre: 'Relaciona', emoji: '🔗' },
}
