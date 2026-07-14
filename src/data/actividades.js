// ============================================================
//  ACTIVIDADES — 2 por cada uno de los 13 temas (+ endosimbiosis)
//  Unidad: Origen de la vida — Bachillerato (Don Bosco BGU)
// ============================================================

export const actividades = [
  // ---------- TEMA 1: MÉTODO CIENTÍFICO ----------
  {
    id: 'metodo-cientifico-quiz',
    temaId: 'metodo-cientifico',
    tipo: 'quiz',
    titulo: 'Quiz: método científico',
    descripcion:
      'Responde sobre los pasos y principios del método científico aplicado a la biología y al estudio del origen de la vida.',
    preguntas: [
      {
        pregunta: '¿Cuál es el primer paso habitual del método científico?',
        opciones: ['Formular la conclusión', 'Observar y plantear un problema', 'Publicar la teoría'],
        correcta: 1,
      },
      {
        pregunta: '¿Qué es una hipótesis?',
        opciones: [
          'Una ley que no puede cambiarse',
          'Una explicación provisional que debe comprobarse',
          'Una opinión personal sin pruebas',
        ],
        correcta: 1,
      },
      {
        pregunta: '¿Para qué sirve el grupo de control en un experimento?',
        opciones: [
          'Para comparar resultados con el grupo experimental',
          'Para acelerar la reacción química',
          'Para eliminar la hipótesis',
        ],
        correcta: 0,
      },
    ],
  },
  {
    id: 'metodo-cientifico-completar',
    temaId: 'metodo-cientifico',
    tipo: 'completar',
    titulo: 'Completa: método científico',
    descripcion: 'Completa las oraciones sobre cómo la ciencia investiga el origen de la vida.',
    banco: ['hipótesis', 'experimento', 'observación', 'conclusión'],
    frases: [
      { texto: 'La ___ es el punto de partida cuando detectamos un fenómeno que queremos explicar.', respuesta: 'observación' },
      { texto: 'La ___ es una explicación provisional que debe probarse.', respuesta: 'hipótesis' },
      { texto: 'El ___ comprueba o refuta la hipótesis con datos.', respuesta: 'experimento' },
      { texto: 'La ___ resume lo aprendido tras analizar los resultados.', respuesta: 'conclusión' },
    ],
  },

  // ---------- TEMA 2: MICROSCOPÍA ----------
  {
    id: 'microscopia-clasificar',
    temaId: 'microscopia',
    tipo: 'clasificar',
    titulo: 'Clasifica: óptico o electrónico',
    descripcion: 'Coloca cada característica en el tipo de microscopio correcto.',
    categorias: [
      { nombre: 'Microscopio óptico', emoji: '🔬' },
      { nombre: 'Microscopio electrónico', emoji: '⚡' },
    ],
    items: [
      { texto: 'Usa luz visible y lentes de vidrio', cat: 0 },
      { texto: 'Utiliza haces de electrones', cat: 1 },
      { texto: 'Aumento = ocular × objetivo', cat: 0 },
      { texto: 'MET y MEB son sus dos tipos principales', cat: 1 },
      { texto: 'Ideal para ver células y bacterias en el aula', cat: 0 },
      { texto: 'Permite ver virus y detalles subcelulares', cat: 1 },
    ],
  },
  {
    id: 'microscopia-relacionar',
    temaId: 'microscopia',
    tipo: 'relacionar',
    titulo: 'Relaciona: partes y conceptos',
    descripcion: 'Une cada término de microscopía con su definición.',
    pares: [
      { termino: 'Ocular', definicion: 'Lente cercana al ojo del observador' },
      { termino: 'Objetivo', definicion: 'Lente que amplifica directamente la muestra' },
      { termino: 'Resolución', definicion: 'Capacidad de distinguir detalles finos' },
      { termino: 'MET', definicion: 'Microscopio electrónico de transmisión' },
    ],
  },

  // ---------- TEMA 3: ORIGEN DEL UNIVERSO ----------
  {
    id: 'origen-universo-quiz',
    temaId: 'origen-universo',
    tipo: 'quiz',
    titulo: 'Quiz: origen del universo',
    descripcion: 'Preguntas sobre el Big Bang y la evolución del cosmos.',
    preguntas: [
      {
        pregunta: '¿Qué describe el modelo del Big Bang?',
        opciones: [
          'La explosión de una estrella',
          'El origen y expansión del universo',
          'La formación de la Luna',
        ],
        correcta: 1,
      },
      {
        pregunta: '¿Dónde se formaron elementos pesados como el carbono?',
        opciones: ['En el Big Bang inicial', 'En el interior de estrellas', 'Solo en la Tierra'],
        correcta: 1,
      },
      {
        pregunta: '¿Qué evidencia apoya el Big Bang detectada en 1965?',
        opciones: [
          'Fósiles de bacterias',
          'Radiación cósmica de fondo',
          'Agua en meteoritos',
        ],
        correcta: 1,
      },
    ],
  },
  {
    id: 'origen-universo-completar',
    temaId: 'origen-universo',
    tipo: 'completar',
    titulo: 'Completa: evolución del universo',
    descripcion: 'Completa el recorrido desde el Big Bang hasta las galaxias.',
    banco: ['hidrógeno', 'estrellas', 'galaxias', 'expansión'],
    frases: [
      { texto: 'El Big Bang marca el inicio de la ___ del universo.', respuesta: 'expansión' },
      { texto: 'Los primeros núcleos formados fueron de ___ y helio.', respuesta: 'hidrógeno' },
      { texto: 'En el interior de las ___ se crearon elementos más pesados.', respuesta: 'estrellas' },
      { texto: 'La Vía Láctea es una de las miles de millones de ___ del cosmos.', respuesta: 'galaxias' },
    ],
  },

  // ---------- TEMA 4: ORIGEN DE LA TIERRA ----------
  {
    id: 'origen-tierra-completar',
    temaId: 'origen-tierra',
    tipo: 'completar',
    titulo: 'Completa: la Tierra primitiva',
    descripcion: 'Completa las oraciones sobre la formación y evolución del planeta.',
    banco: ['reductora', 'Arcaico', 'océanos', 'corteza'],
    frases: [
      { texto: 'La atmósfera primitiva era ___, sin oxígeno libre.', respuesta: 'reductora' },
      { texto: 'La ___ sólida se formó al enfriarse el planeta incandescente.', respuesta: 'corteza' },
      { texto: 'Los ___ primitivos concentraron moléculas orgánicas.', respuesta: 'océanos' },
      { texto: 'En el eón ___ aparecieron los primeros indicios de vida.', respuesta: 'Arcaico' },
    ],
  },
  {
    id: 'origen-tierra-relacionar',
    temaId: 'origen-tierra',
    tipo: 'relacionar',
    titulo: 'Relaciona: eones y procesos',
    descripcion: 'Une cada concepto geológico con su descripción.',
    pares: [
      { termino: 'Eón Hádico', definicion: 'Tierra incandescente y formación inicial' },
      { termino: 'Eón Arcaico', definicion: 'Primeros océanos y aparición de la vida' },
      { termino: 'Atmósfera reductora', definicion: 'Sin O₂ libre; rica en metano y amoníaco' },
      { termino: 'Bombardeo meteorítico', definicion: 'Impactos intensos en la juventud del planeta' },
    ],
  },

  // ---------- TEMA 5: TEORÍAS SOBRE EL ORIGEN ----------
  {
    id: 'teorias-origen-vida-clasificar',
    temaId: 'teorias-origen-vida',
    tipo: 'clasificar',
    titulo: 'Clasifica: tipos de explicación',
    descripcion: 'Coloca cada afirmación según el tipo de explicación sobre el origen de la vida.',
    categorias: [
      { nombre: 'No científica', emoji: '📜' },
      { nombre: 'Científica', emoji: '🔬' },
    ],
    items: [
      { texto: 'Creacionismo: vida creada por un ser superior', cat: 0 },
      { texto: 'Evolución química en la Tierra primitiva', cat: 1 },
      { texto: 'Explicación basada en la fe, no en experimentos', cat: 0 },
      { texto: 'Panspermia: componentes llegados del espacio', cat: 1 },
      { texto: 'Generación espontánea (hoy refutada)', cat: 1 },
      { texto: 'No puede comprobarse con el método científico', cat: 0 },
    ],
  },
  {
    id: 'teorias-origen-vida-quiz',
    temaId: 'teorias-origen-vida',
    tipo: 'quiz',
    titulo: 'Quiz: teorías del origen',
    descripcion: 'Responde sobre las principales corrientes de pensamiento.',
    preguntas: [
      {
        pregunta: '¿Qué distingue la ciencia del creacionismo al estudiar el origen de la vida?',
        opciones: [
          'La ciencia usa hipótesis contrastables con experimentos',
          'La ciencia rechaza toda forma de explicación',
          'No hay diferencia',
        ],
        correcta: 0,
      },
      {
        pregunta: '¿Qué es la biogénesis?',
        opciones: [
          'Vida de materia inerte',
          'Vida que proviene de vida preexistente',
          'Vida creada por rayos cósmicos',
        ],
        correcta: 1,
      },
      {
        pregunta: '¿Qué es la abiogénesis en el contexto del origen primordial?',
        opciones: [
          'Origen de la vida a partir de materia no viva',
          'Rechazo de toda teoría científica',
          'Creación instantánea de especies',
        ],
        correcta: 0,
      },
    ],
  },

  // ---------- TEMA 6: GENERACIÓN ESPONTÁNEA (REDI) ----------
  {
    id: 'generacion-espontanea-completar',
    temaId: 'generacion-espontanea',
    tipo: 'completar',
    titulo: 'Completa: Redi y la generación espontánea',
    descripcion: 'Completa las oraciones sobre el experimento de Francesco Redi.',
    banco: ['Redi', 'moscas', 'espontánea', 'carne'],
    frases: [
      { texto: 'La generación ___ sostenía que la vida surgía de materia inerte.', respuesta: 'espontánea' },
      { texto: '___ demostró en 1668 que los gusanos no aparecían solos.', respuesta: 'Redi' },
      { texto: 'Usó bandejas de ___ en descomposición, tapadas y abiertas.', respuesta: 'carne' },
      { texto: 'Los gusanos provenían de huevos de ___ que depositaban en la carne.', respuesta: 'moscas' },
    ],
  },
  {
    id: 'generacion-espontanea-secuencia',
    temaId: 'generacion-espontanea',
    tipo: 'secuencia',
    titulo: 'Ordena: experimento de Redi',
    descripcion: 'Ordena los pasos del experimento que refutó la generación espontánea en gusanos.',
    intro: 'Coloca en orden lógico las etapas del experimento de Redi.',
    pasos: [
      'Se plantea la hipótesis: los gusanos provienen de huevos de moscas.',
      'Se coloca carne en descomposición en bandejas tapadas, con tela y abiertas.',
      'Se observa que los gusanos solo aparecen en la carne accesible a las moscas.',
      'Se concluye que la generación espontánea en gusanos es falsa.',
    ],
  },

  // ---------- TEMA 7: PASTEUR ----------
  {
    id: 'pasteur-completar',
    temaId: 'pasteur',
    tipo: 'completar',
    titulo: 'Completa: Pasteur y la biogénesis',
    descripcion: 'Completa las oraciones sobre los matraces de cuello de cisne.',
    banco: ['Pasteur', 'biogénesis', 'esterilización', 'cisne'],
    frases: [
      { texto: '___ demostró en 1864 que los microbios no surgen del caldo solo.', respuesta: 'Pasteur' },
      { texto: 'Usó matraces con cuello de ___ que dejaban pasar el aire pero no el polvo.', respuesta: 'cisne' },
      { texto: 'La ___ por calor eliminó todos los microorganismos del caldo.', respuesta: 'esterilización' },
      { texto: 'La ___ establece que la vida actual proviene de vida preexistente.', respuesta: 'biogénesis' },
    ],
  },
  {
    id: 'pasteur-quiz',
    temaId: 'pasteur',
    tipo: 'quiz',
    titulo: 'Quiz: experimento de Pasteur',
    descripcion: 'Responde sobre cómo Pasteur refutó la generación espontánea de microbios.',
    preguntas: [
      {
        pregunta: '¿Qué permitía el cuello de cisne del matraz?',
        opciones: [
          'Entrada de aire sin polvo con microorganismos',
          'Eliminar el oxígeno del caldo',
          'Aumentar la temperatura automáticamente',
        ],
        correcta: 0,
      },
      {
        pregunta: '¿Qué ocurría si se rompía el cuello del matraz?',
        opciones: [
          'El caldo seguía estéril para siempre',
          'Los microorganismos contaminaban el caldo',
          'El caldo se convertía en agua',
        ],
        correcta: 1,
      },
      {
        pregunta: '¿Qué principio demostró Pasteur?',
        opciones: ['Abiogénesis actual', 'Biogénesis', 'Panspermia'],
        correcta: 1,
      },
    ],
  },

  // ---------- TEMA 8: EVOLUCIÓN QUÍMICA ----------
  {
    id: 'evolucion-quimica-secuencia',
    temaId: 'evolucion-quimica',
    tipo: 'secuencia',
    titulo: 'Ordena: experimento Miller-Urey',
    descripcion: 'Coloca en orden los pasos del experimento que apoyó la evolución química.',
    intro: 'Ordena los pasos del experimento de Miller-Urey, del primero al último.',
    pasos: [
      'Se colocan gases primitivos (metano, amoníaco, hidrógeno) en el aparato.',
      'Se calienta el agua para simular el océano primitivo.',
      'Las descargas eléctricas simulan los rayos atmosféricos.',
      'Los productos se disuelven en el agua caliente del frasco.',
      'Tras una semana, se detectan aminoácidos y compuestos orgánicos.',
    ],
  },
  {
    id: 'endosimbiosis-relacionar',
    temaId: 'evolucion-quimica',
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
    id: 'evolucion-quimica-completar',
    temaId: 'evolucion-quimica',
    tipo: 'completar',
    titulo: 'Completa: Oparin, Haldane y Miller',
    descripcion: 'Completa las oraciones sobre la teoría de la evolución química.',
    banco: ['Oparin', 'aminoácidos', 'coacervados', 'caldo'],
    frases: [
      { texto: '___ y Haldane propusieron el caldo primordial en la Tierra primitiva.', respuesta: 'Oparin' },
      { texto: 'El experimento de Miller-Urey sintetizó ___ de forma abiótica.', respuesta: 'aminoácidos' },
      { texto: 'Los ___ son gotas de macromoléculas con propiedades de membrana.', respuesta: 'coacervados' },
      { texto: 'El ___ primordial era un medio acuoso rico en compuestos orgánicos.', respuesta: 'caldo' },
    ],
  },
  {
    id: 'endosimbiosis-memoria',
    temaId: 'evolucion-quimica',
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

  // ---------- TEMA 9: OTRAS TEORÍAS ----------
  {
    id: 'otras-teorias-quiz',
    temaId: 'otras-teorias',
    tipo: 'quiz',
    titulo: 'Quiz: panspermia',
    descripcion: 'Responde las preguntas sobre la panspermia y el origen extraterrestre.',
    preguntas: [
      {
        pregunta: '¿Qué propone la teoría de la panspermia?',
        opciones: [
          'Que la vida surgió solo en la Tierra',
          'Que la vida o sus componentes llegaron del espacio',
          'Que no existió un origen de la vida',
        ],
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
    id: 'otras-teorias-completar',
    temaId: 'otras-teorias',
    tipo: 'completar',
    titulo: 'Completa: otras teorías',
    descripcion: 'Completa las oraciones sobre la panspermia y el origen extraterrestre.',
    banco: ['meteoritos', 'espacio', 'aminoácidos', 'cometas'],
    frases: [
      { texto: 'La panspermia propone que la vida o sus componentes llegaron del ___.', respuesta: 'espacio' },
      { texto: 'Se han encontrado ___ en meteoritos como el de Murchison.', respuesta: 'aminoácidos' },
      { texto: 'Los ___ pueden transportar moléculas orgánicas junto con meteoritos.', respuesta: 'cometas' },
      { texto: 'Los ___ son fragmentos de roca espacial que llegan a la superficie terrestre.', respuesta: 'meteoritos' },
    ],
  },

  // ---------- TEMA 10: BIOELEMENTOS ----------
  {
    id: 'bioelementos-clasificar',
    temaId: 'bioelementos',
    tipo: 'clasificar',
    titulo: 'Clasifica: tipos de bioelementos',
    descripcion: 'Coloca cada elemento en su categoría según su abundancia en los seres vivos.',
    categorias: [
      { nombre: 'Primarios', emoji: '⚛️' },
      { nombre: 'Secundarios u oligoelementos', emoji: '🧪' },
    ],
    items: [
      { texto: 'Carbono (C)', cat: 0 },
      { texto: 'Oxígeno (O)', cat: 0 },
      { texto: 'Nitrógeno (N)', cat: 0 },
      { texto: 'Calcio (Ca)', cat: 1 },
      { texto: 'Hierro (Fe)', cat: 1 },
      { texto: 'Sodio (Na)', cat: 1 },
    ],
  },
  {
    id: 'bioelementos-completar',
    temaId: 'bioelementos',
    tipo: 'completar',
    titulo: 'Completa: bioelementos',
    descripcion: 'Completa las oraciones sobre los elementos químicos de la materia viva.',
    banco: ['carbono', 'biomoléculas', 'oligoelementos', 'primarios'],
    frases: [
      { texto: 'Los bioelementos ___ (C, H, O, N, P, S) forman más del 95 % de la biomasa.', respuesta: 'primarios' },
      { texto: 'El ___ puede formar cuatro enlaces y cadenas muy variadas.', respuesta: 'carbono' },
      { texto: 'Los bioelementos se combinan para formar ___.', respuesta: 'biomoléculas' },
      { texto: 'El hierro y el yodo son ___ necesarios en cantidades mínimas.', respuesta: 'oligoelementos' },
    ],
  },

  // ---------- TEMA 11: AGUA ----------
  {
    id: 'agua-quiz',
    temaId: 'agua',
    tipo: 'quiz',
    titulo: 'Quiz: propiedades del agua',
    descripcion: 'Responde sobre la composición, propiedades y funciones biológicas del agua.',
    preguntas: [
      {
        pregunta: '¿Por qué el hielo flota sobre el agua líquida?',
        opciones: [
          'Porque es más denso',
          'Porque es menos denso que el agua a 4 °C',
          'Porque no forma puentes de hidrógeno',
        ],
        correcta: 1,
      },
      {
        pregunta: '¿Qué propiedad permite que el agua disuelva muchas sustancias en la célula?',
        opciones: ['Su color', 'Su polaridad', 'Su sabor'],
        correcta: 1,
      },
      {
        pregunta: '¿Qué porcentaje aproximado de agua tienen muchos seres vivos?',
        opciones: ['10–20 %', '60–90 %', '100 %'],
        correcta: 1,
      },
    ],
  },
  {
    id: 'agua-completar',
    temaId: 'agua',
    tipo: 'completar',
    titulo: 'Completa: agua y vida',
    descripcion: 'Completa las oraciones sobre el papel del agua en los seres vivos.',
    banco: ['disolvente', 'puentes', 'tampón', 'polar'],
    frases: [
      { texto: 'La molécula de agua es ___ por la diferencia de electronegatividad.', respuesta: 'polar' },
      { texto: 'Los ___ de hidrógeno explican muchas propiedades únicas del agua.', respuesta: 'puentes' },
      { texto: 'El agua actúa como ___ universal de sustancias iónicas y polares.', respuesta: 'disolvente' },
      { texto: 'Las soluciones ___ mantienen estable el pH celular.', respuesta: 'tampón' },
    ],
  },

  // ---------- TEMA 12: SALES MINERALES ----------
  {
    id: 'sales-minerales-relacionar',
    temaId: 'sales-minerales',
    tipo: 'relacionar',
    titulo: 'Relaciona: sales y funciones',
    descripcion: 'Une cada tipo o función de sales minerales con su ejemplo.',
    pares: [
      { termino: 'Sales precipitadas', definicion: 'Fosfato de calcio en huesos y dientes' },
      { termino: 'Sales disueltas', definicion: 'Iones Na⁺ y K⁺ en la transmisión nerviosa' },
      { termino: 'Hierro en hemoglobina', definicion: 'Transporte de oxígeno en la sangre' },
      { termino: 'Osmosis', definicion: 'Paso de agua por membrana semipermeable' },
    ],
  },
  {
    id: 'sales-minerales-completar',
    temaId: 'sales-minerales',
    tipo: 'completar',
    titulo: 'Completa: sales minerales',
    descripcion: 'Completa las oraciones sobre las sales minerales en los seres vivos.',
    banco: ['iones', 'huesos', 'osmótico', 'precipitadas'],
    frases: [
      { texto: 'Las sales ___ forman estructuras sólidas insolubles en los seres vivos.', respuesta: 'precipitadas' },
      { texto: 'Las sales disueltas se separan en ___ en el agua.', respuesta: 'iones' },
      { texto: 'El equilibrio ___ depende de la concentración de sales.', respuesta: 'osmótico' },
      { texto: 'El calcio y el fósforo son clave en la estructura de los ___.', respuesta: 'huesos' },
    ],
  },

  // ---------- TEMA 13: BIOMOLÉCULAS ORGÁNICAS ----------
  {
    id: 'biomoleculas-organicas-memoria',
    temaId: 'biomoleculas-organicas',
    tipo: 'memoria',
    titulo: 'Memorama: biomoléculas orgánicas',
    descripcion: 'Encuentra cada biomolécula y su monómero o función principal.',
    pares: [
      { a: 'Proteína', b: 'Aminoácido' },
      { a: 'ADN', b: 'Nucleótido' },
      { a: 'Almidón', b: 'Glucosa' },
      { a: 'Lípido', b: 'Ácido graso' },
      { a: 'Enzima', b: 'Cataliza reacciones' },
      { a: 'Glúcido', b: 'Función energética' },
    ],
  },
  {
    id: 'biomoleculas-organicas-completar',
    temaId: 'biomoleculas-organicas',
    tipo: 'completar',
    titulo: 'Completa: biomoléculas orgánicas',
    descripcion: 'Completa las oraciones sobre los cuatro grupos de biomoléculas orgánicas.',
    banco: ['glúcidos', 'lípidos', 'proteínas', 'ácidos nucleicos'],
    frases: [
      { texto: 'Los ___ aportan energía rápida; la glucosa es el monosacárido principal.', respuesta: 'glúcidos' },
      { texto: 'Los ___ forman membranas celulares y almacenan energía.', respuesta: 'lípidos' },
      { texto: 'Las ___ y enzimas están formadas por aminoácidos.', respuesta: 'proteínas' },
      { texto: 'Los ___ (ADN y ARN) almacenan la información genética.', respuesta: 'ácidos nucleicos' },
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
