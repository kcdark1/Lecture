// ============================================================
//  12 ACTIVIDADES — 2 por cada uno de los 6 capítulos
// ============================================================

export const actividades = [
  // ---------- CAP. 1: LA CÉLULA ----------
  {
    id: 'celula-ahorcado',
    temaId: 'celula',
    tipo: 'ahorcado',
    titulo: 'Ahorcado: partes de la célula',
    descripcion: 'Adivina la palabra relacionada con la célula antes de quedarte sin intentos.',
    palabra: 'MITOCONDRIA',
    pista: 'Orgánulo que produce la energía de la célula.',
  },
  {
    id: 'celula-memoria',
    temaId: 'celula',
    tipo: 'memoria',
    titulo: 'Memorama: la célula',
    descripcion: 'Encuentra cada parte de la célula y la función que le corresponde.',
    pares: [
      { a: 'Núcleo', b: 'Guarda el ADN' },
      { a: 'Membrana', b: 'Controla lo que entra y sale' },
      { a: 'Mitocondria', b: 'Produce la energía' },
      { a: 'Ribosoma', b: 'Fabrica proteínas' },
      { a: 'Citoplasma', b: 'Medio interno de la célula' },
      { a: 'Célula', b: 'Unidad básica de la vida' },
    ],
  },

  // ---------- CAP. 2: LA FOTOSÍNTESIS ----------
  {
    id: 'fotosintesis-completar',
    temaId: 'fotosintesis',
    tipo: 'completar',
    titulo: 'Completa: la fotosíntesis',
    descripcion: 'Usa el banco de palabras para completar el proceso de la fotosíntesis.',
    banco: ['luz', 'clorofila', 'oxígeno', 'glucosa'],
    frases: [
      { texto: 'Las plantas captan la ___ del Sol.', respuesta: 'luz' },
      { texto: 'El pigmento verde que capta la luz es la ___.', respuesta: 'clorofila' },
      { texto: 'La planta libera ___ al aire.', respuesta: 'oxígeno' },
      { texto: 'La planta fabrica un azúcar llamado ___.', respuesta: 'glucosa' },
    ],
  },
  {
    id: 'fotosintesis-secuencia',
    temaId: 'fotosintesis',
    tipo: 'secuencia',
    titulo: 'Ordena: la fotosíntesis',
    descripcion: 'Coloca en orden los pasos que sigue la planta para fabricar su alimento.',
    intro: 'Ordena los pasos de la fotosíntesis, del primero al último.',
    pasos: [
      'La planta capta la luz del Sol con la clorofila.',
      'Toma dióxido de carbono del aire y agua del suelo.',
      'Con la energía del Sol transforma esos ingredientes.',
      'Produce glucosa, que es su alimento.',
      'Libera oxígeno al aire.',
    ],
  },

  // ---------- CAP. 3: EL ADN Y LA GENÉTICA ----------
  {
    id: 'genetica-anagrama',
    temaId: 'genetica',
    tipo: 'anagrama',
    titulo: 'Ordena la palabra: genética',
    descripcion: 'Las letras están desordenadas. ¡Colócalas en orden con ayuda de la pista!',
    palabras: [
      { palabra: 'GEN', pista: 'Fragmento de ADN que determina una característica.' },
      { palabra: 'CROMOSOMA', pista: 'Estructura que empaqueta el ADN.' },
      { palabra: 'HERENCIA', pista: 'Paso de características de padres a hijos.' },
      { palabra: 'HELICE', pista: 'Forma de escalera retorcida del ADN.' },
    ],
  },
  {
    id: 'genetica-verdaderofalso',
    temaId: 'genetica',
    tipo: 'verdaderofalso',
    titulo: 'Verdadero o Falso: el ADN',
    descripcion: 'Decide si cada afirmación sobre el ADN y la herencia es verdadera o falsa.',
    afirmaciones: [
      { texto: 'El ADN tiene forma de doble hélice.', esVerdadero: true, explicacion: 'Sí, parece una escalera retorcida.' },
      { texto: 'Los humanos tenemos 10 cromosomas en total.', esVerdadero: false, explicacion: 'En realidad tenemos 46 (23 pares).' },
      { texto: 'Un gen determina una característica, como el color de ojos.', esVerdadero: true, explicacion: 'Correcto, los genes controlan nuestras características.' },
      { texto: 'Recibimos todos nuestros genes de un solo progenitor.', esVerdadero: false, explicacion: 'Recibimos la mitad de cada progenitor.' },
    ],
  },

  // ---------- CAP. 4: LOS ECOSISTEMAS ----------
  {
    id: 'ecosistemas-sopa',
    temaId: 'ecosistemas',
    tipo: 'sopa',
    titulo: 'Sopa de letras: ecosistemas',
    descripcion: 'Encuentra las palabras escondidas relacionadas con los ecosistemas.',
    palabras: ['PLANTA', 'ANIMAL', 'SUELO', 'AGUA', 'ENERGIA', 'HONGO'],
  },
  {
    id: 'ecosistemas-clasificar',
    temaId: 'ecosistemas',
    tipo: 'clasificar',
    titulo: 'Clasifica: bióticos y abióticos',
    descripcion: 'Coloca cada elemento en el grupo correcto: con vida o sin vida.',
    categorias: [
      { nombre: 'Biótico (con vida)', emoji: '🐛' },
      { nombre: 'Abiótico (sin vida)', emoji: '💧' },
    ],
    items: [
      { texto: 'Árbol', cat: 0 },
      { texto: 'Agua', cat: 1 },
      { texto: 'Conejo', cat: 0 },
      { texto: 'Luz del sol', cat: 1 },
      { texto: 'Hongo', cat: 0 },
      { texto: 'Roca', cat: 1 },
      { texto: 'Bacteria', cat: 0 },
      { texto: 'Temperatura', cat: 1 },
    ],
  },

  // ---------- CAP. 5: EL CUERPO HUMANO ----------
  {
    id: 'cuerpo-humano-relacionar',
    temaId: 'cuerpo-humano',
    tipo: 'relacionar',
    titulo: 'Relaciona: órganos y funciones',
    descripcion: 'Une cada órgano con la función que realiza en el cuerpo.',
    pares: [
      { termino: 'Corazón', definicion: 'Bombea la sangre por el cuerpo' },
      { termino: 'Pulmones', definicion: 'Toman oxígeno del aire' },
      { termino: 'Cerebro', definicion: 'Controla y coordina el cuerpo' },
      { termino: 'Estómago', definicion: 'Ayuda a digerir la comida' },
    ],
  },
  {
    id: 'cuerpo-humano-quiz',
    temaId: 'cuerpo-humano',
    tipo: 'quiz',
    titulo: 'Quiz: el cuerpo humano',
    descripcion: 'Responde las preguntas sobre los sistemas del cuerpo humano.',
    preguntas: [
      {
        pregunta: '¿Qué órgano bombea la sangre por todo el cuerpo?',
        opciones: ['Los pulmones', 'El corazón', 'El cerebro'],
        correcta: 1,
      },
      {
        pregunta: '¿Dónde ocurre el intercambio de oxígeno y dióxido de carbono?',
        opciones: ['En el estómago', 'En los alvéolos de los pulmones', 'En el hígado'],
        correcta: 1,
      },
      {
        pregunta: '¿Qué célula es la principal del sistema nervioso?',
        opciones: ['La neurona', 'La mitocondria', 'El glóbulo rojo'],
        correcta: 0,
      },
    ],
  },

  // ---------- CAP. 6: LA BIODIVERSIDAD ----------
  {
    id: 'biodiversidad-completar',
    temaId: 'biodiversidad',
    tipo: 'completar',
    titulo: 'Completa: la biodiversidad',
    descripcion: 'Completa las oraciones sobre la variedad de la vida y su cuidado.',
    banco: ['biodiversidad', 'especie', 'extinción', 'hábitat'],
    frases: [
      { texto: 'La ___ es la variedad de seres vivos de la Tierra.', respuesta: 'biodiversidad' },
      { texto: 'Un grupo de seres parecidos que se reproducen entre sí es una ___.', respuesta: 'especie' },
      { texto: 'La desaparición total de una especie se llama ___.', respuesta: 'extinción' },
      { texto: 'El lugar donde vive una especie es su ___.', respuesta: 'hábitat' },
    ],
  },
  {
    id: 'biodiversidad-verdaderofalso',
    temaId: 'biodiversidad',
    tipo: 'verdaderofalso',
    titulo: 'Verdadero o Falso: biodiversidad',
    descripcion: 'Decide si cada afirmación sobre la biodiversidad es verdadera o falsa.',
    afirmaciones: [
      { texto: 'La biodiversidad es la variedad de seres vivos de la Tierra.', esVerdadero: true, explicacion: '¡Correcto! Incluye animales, plantas, hongos y microbios.' },
      { texto: 'La contaminación ayuda a la biodiversidad.', esVerdadero: false, explicacion: 'La contaminación la daña gravemente.' },
      { texto: 'Reciclar ayuda a proteger la naturaleza.', esVerdadero: true, explicacion: '¡Así es! Los pequeños hábitos suman mucho.' },
      { texto: 'La extinción significa que una especie aumenta.', esVerdadero: false, explicacion: 'Significa que la especie desaparece por completo.' },
    ],
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
