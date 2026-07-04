// ============================================================
//  PÁGINAS DE CADA CAPÍTULO (6 capítulos × 5 páginas = 30)
// ============================================================

export const paginasPorTema = {
  celula: [
    {
      numero: 1,
      titulo: 'Bienvenida al mundo celular',
      parrafos: [
        'Imagina que pudieras encogerte hasta ser del tamaño de un grano de arena y entrar dentro de un ser vivo. Lo primero que verías serían millones de pequeñas estructuras trabajando en equipo: las células.',
        'Desde una bacteria hasta un elefante, todo está hecho de células. Algunos organismos tienen una sola célula; otros, como nosotros, tienen billones. Cada una es una fábrica minúscula que mantiene la vida.',
        'En este capítulo descubrirás qué es una célula, qué tipos existen y qué partes la componen. Al final podrás explicar por qué se considera la unidad básica de la vida.',
      ],
      destacado: '🔬 Sin células no hay vida. Son el “ladrillo” con el que está construido todo ser vivo.',
      imagen: 'https://commons.wikimedia.org/wiki/Special:FilePath/Animal_cell_structure_en.svg?width=900',
      imagenAlt: 'Esquema de una célula animal',
    },
    {
      numero: 2,
      titulo: '¿Qué es una célula?',
      parrafos: [
        'Una célula es la unidad más pequeña que puede realizar las funciones de la vida: alimentarse, crecer, responder al entorno y reproducirse. Por eso los científicos la llaman la unidad básica de la vida.',
        'Los seres unicelulares, como muchas bacterias y protozoos, viven toda su existencia en una sola célula. Los pluricelulares —plantas, hongos y animales— están formados por muchas células especializadas que colaboran entre sí.',
        'Gracias al microscopio, hoy sabemos que las células tienen formas y tamaños muy distintos. Algunas son redondas, otras alargadas; algunas miden micrómetros y otras pueden ser visibles a simple vista.',
      ],
      puntosClave: [
        'Toda célula proviene de otra célula (principio celular).',
        'Las células especializadas forman tejidos, órganos y sistemas.',
        'El estudio de las células se llama citología.',
      ],
    },
    {
      numero: 3,
      titulo: 'Procariotas y eucariotas',
      parrafos: [
        'No todas las células son iguales. Las procariotas son más simples: no tienen núcleo definido y su ADN flota libre en el citoplasma. Las bacterias y arqueas pertenecen a este grupo.',
        'Las eucariotas sí tienen núcleo, donde se guarda el material genético bien organizado. Además tienen orgánulos con funciones específicas, como las mitocondrias o los cloroplastos.',
        'Otra diferencia importante: las células vegetales tienen pared celular rígida y cloroplastos para la fotosíntesis. Las células animales tienen membrana flexible y no realizan fotosíntesis.',
      ],
      puntosClave: [
        'Procariota = sin núcleo (ej.: bacterias).',
        'Eucariota = con núcleo (ej.: células de plantas y animales).',
        'Las plantas tienen pared celular; los animales no.',
      ],
      destacado: '🌿 Las células vegetales pueden fabricar su propio alimento gracias a los cloroplastos.',
    },
    {
      numero: 4,
      titulo: 'Las partes de la célula',
      parrafos: [
        'La membrana celular es la “puerta” de la célula: deja pasar nutrientes y expulsa desechos. El citoplasma es el medio gelatinoso donde flotan los orgánulos.',
        'El núcleo es el centro de mando: contiene el ADN con las instrucciones para que la célula funcione. Las mitocondrias producen la energía (ATP) que la célula necesita para vivir.',
        'Los ribosomas fabrican proteínas, el retículo endoplasmático las transporta y el aparato de Golgi las empaqueta. Cada orgánulo cumple un rol, como departamentos de una fábrica.',
      ],
      puntosClave: [
        'Membrana → control de entrada y salida.',
        'Núcleo → guarda el ADN.',
        'Mitocondria → produce energía.',
        'Ribosoma → fabrica proteínas.',
      ],
    },
    {
      numero: 5,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: [
        'La célula es la unidad básica de la vida. Puede ser unicelular o formar parte de un organismo pluricelular. Conocer sus partes te ayuda a entender cómo funciona tu propio cuerpo.',
      ],
      puntosClave: [
        'Hay células procariotas (sin núcleo) y eucariotas (con núcleo).',
        'Las plantas tienen cloroplastos y pared celular.',
        'Membrana, núcleo, mitocondrias y ribosomas son partes esenciales.',
        'Toda célula proviene de otra célula.',
      ],
    },
  ],

  fotosintesis: [
    {
      numero: 1,
      titulo: 'El alimento del Sol',
      parrafos: [
        'Cada vez que respiras oxígeno, en parte se lo debes a las plantas. Mediante la fotosíntesis convierten la luz solar en alimento y liberan el oxígeno que necesitamos.',
        'Este proceso ocurre principalmente en las hojas, donde la clorofila —un pigmento verde— captura la energía del Sol. Sin fotosíntesis, la mayoría de las cadenas alimenticias del planeta no existirían.',
        'En las siguientes páginas verás cómo funciona paso a paso, por qué es tan importante y qué papel juegan el agua, el aire y la luz.',
      ],
      destacado: '☀️ Las plantas son productores: fabrican su propio alimento sin comer a otros seres.',
      imagen: 'https://commons.wikimedia.org/wiki/Special:FilePath/Photosynthesis_en.svg?width=900',
      imagenAlt: 'Esquema de la fotosíntesis',
    },
    {
      numero: 2,
      titulo: '¿Cómo funciona la fotosíntesis?',
      parrafos: [
        'La planta absorbe agua por las raíces y dióxido de carbono (CO₂) por los estomas, pequeños poros de las hojas. Dentro de los cloroplastos, la clorofila captura la luz solar.',
        'Con esa energía, la planta transforma el agua y el CO₂ en glucosa, un azúcar que usa como alimento. Como “desperdicio” del proceso libera oxígeno (O₂) al aire.',
        'La fotosíntesis tiene dos fases principales: las reacciones dependientes de la luz (donde se captura energía) y el ciclo de Calvin (donde se forma la glucosa).',
      ],
      puntosClave: [
        'Ingredientes: luz + agua + dióxido de carbono.',
        'Productos: glucosa + oxígeno.',
        'Ocurre en los cloroplastos de las hojas.',
      ],
    },
    {
      numero: 3,
      titulo: 'La ecuación de la vida',
      parrafos: [
        'La fotosíntesis se puede resumir en una ecuación química: 6 CO₂ + 6 H₂O + energía lumínica → C₆H₁₂O₆ (glucosa) + 6 O₂.',
        'La glucosa alimenta a la planta y puede convertirse en almidón para almacenarse. El oxígeno se libera a la atmósfera y lo usan animales y humanos para respirar.',
        'Este intercambio conecta el reino vegetal con el resto de la vida: las plantas producen alimento y oxígeno; los consumidores obtienen energía al comer plantas u otros animales.',
      ],
      destacado: '🔄 La fotosíntesis y la respiración celular son procesos complementarios en la naturaleza.',
    },
    {
      numero: 4,
      titulo: 'Importancia para el planeta',
      parrafos: [
        'La fotosíntesis es la base de casi todas las cadenas alimenticias. Los herbívoros comen plantas; los carnívoros comen herbívoros. Toda esa energía proviene, en última instancia, del Sol captado por las plantas.',
        'Además, las plantas absorben CO₂ del aire, ayudando a regular el clima. Los bosques y océanos (con fitoplancton) son grandes “pulmones” del planeta.',
        'Sin fotosíntesis no habría oxígeno en la atmósfera como lo conocemos, ni alimentos vegetales, ni la diversidad de ecosistemas actuales.',
      ],
      puntosClave: [
        'Base de las cadenas alimenticias.',
        'Produce el oxígeno atmosférico.',
        'Reduce el dióxido de carbono del aire.',
        'El fitoplancton marino también fotosintetiza.',
      ],
    },
    {
      numero: 5,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: ['La fotosíntesis convierte luz en alimento. Es uno de los procesos más importantes para la vida en la Tierra.'],
      puntosClave: [
        'Clorofila capta la luz en los cloroplastos.',
        'Entrada: CO₂ + agua + luz. Salida: glucosa + O₂.',
        'Las plantas son productores en los ecosistemas.',
        'Sin fotosíntesis, no habría oxígeno ni cadenas alimenticias.',
      ],
    },
  ],

  genetica: [
    {
      numero: 1,
      titulo: 'El código de la vida',
      parrafos: [
        'Dentro de casi cada célula de tu cuerpo hay un manual de instrucciones: el ADN. Este código químico determina cómo eres, desde el color de tus ojos hasta cómo tu cuerpo digiere la comida.',
        'La genética es la ciencia que estudia el ADN, los genes y cómo las características se transmiten de padres a hijos. Gracias a ella entendemos enfermedades, parentescos y la diversidad de la vida.',
        'En este capítulo explorarás la estructura del ADN, qué son los genes y cómo funciona la herencia.',
      ],
      destacado: '🧬 El ADN de una sola célula humana, estirado, mediría casi 2 metros.',
      imagen: 'https://commons.wikimedia.org/wiki/Special:FilePath/DNA_animation.gif?width=700',
      imagenAlt: 'Modelo de ADN',
    },
    {
      numero: 2,
      titulo: 'La doble hélice del ADN',
      parrafos: [
        'El ADN (ácido desoxirribonucleico) tiene forma de doble hélice: dos cadenas enroscadas como una escalera retorcida. Cada “peldaño” está formado por pares de bases nitrogenadas.',
        'Las cuatro bases son: Adenina (A), Timina (T), Citosina (C) y Guanina (G). A siempre se empareja con T, y C con G. Esta regla explica cómo el ADN se copia con precisión al dividirse una célula.',
        'El orden de estas bases forma un código, como letras en un libro. Ese código contiene toda la información genética del organismo.',
      ],
      puntosClave: [
        'ADN = doble hélice con cuatro bases: A, T, C, G.',
        'A-T y C-G siempre se emparejan.',
        'El orden de las bases es el código genético.',
      ],
    },
    {
      numero: 3,
      titulo: 'Genes y cromosomas',
      parrafos: [
        'Un gen es un segmento de ADN con la instrucción para una característica concreta: la forma de una hoja, el color de ojos o la producción de una proteína.',
        'Los genes se organizan en cromosomas. Los seres humanos tenemos 46 cromosomas (23 pares) en cada célula del cuerpo, excepto en gametos (óvulos y espermatozoides), que tienen 23.',
        'Cuando una célula se divide, primero copia su ADN para que cada célula hija reciba la información completa. Así se mantiene la identidad genética.',
      ],
      puntosClave: [
        'Gen = unidad de información hereditaria.',
        'Cromosoma = paquete de ADN y proteínas.',
        'Humanos: 46 cromosomas (23 pares).',
      ],
    },
    {
      numero: 4,
      titulo: 'La herencia',
      parrafos: [
        'Recibes la mitad de tu ADN de tu madre y la mitad de tu padre. Por eso te pareces a tu familia, pero eres único (salvo gemelos idénticos).',
        'Gregor Mendel, en el siglo XIX, descubrió las reglas básicas de la herencia estudiando plantas de guisante. Observó que algunas características son dominantes y otras recesivas.',
        'Hoy la genética ayuda en medicina (diagnóstico de enfermedades), agricultura (mejora de cultivos) y conservación de especies.',
      ],
      destacado: '👨‍👩‍👧 La herencia explica por qué nos parecemos a nuestros padres, pero no somos copias exactas.',
      puntosClave: [
        '50% del ADN de cada progenitor.',
        'Mendel: padre de la genética moderna.',
        'Características dominantes y recesivas.',
      ],
    },
    {
      numero: 5,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: ['El ADN guarda la información de la vida. Los genes determinan características y se heredan de padres a hijos.'],
      puntosClave: [
        'ADN = doble hélice con bases A, T, C, G.',
        'Gen = fragmento de ADN con una instrucción.',
        'Cromosomas empaquetan el ADN.',
        'Heredamos la mitad de cada progenitor.',
      ],
    },
  ],

  ecosistemas: [
    {
      numero: 1,
      titulo: 'Un mundo conectado',
      parrafos: [
        'Un bosque, un lago, un desierto o un arrecife no son solo paisajes: son ecosistemas donde seres vivos y ambiente interactúan constantemente.',
        'En un ecosistema, cada elemento depende de otros. Si desaparece una especie clave, puede afectar a muchas más. Por eso estudiar ecosistemas ayuda a proteger la naturaleza.',
        'Aquí aprenderás qué componentes tiene un ecosistema, cómo fluye la energía y por qué el equilibrio es tan frágil.',
      ],
      destacado: '🌳 Un solo árbol puede albergar cientos de especies diferentes.',
      imagen: 'https://commons.wikimedia.org/wiki/Special:FilePath/Amazon_Manaus_forest.jpg?width=900',
      imagenAlt: 'Bosque tropical',
    },
    {
      numero: 2,
      titulo: 'Componentes bióticos y abióticos',
      parrafos: [
        'Los factores bióticos son los seres vivos: plantas, animales, hongos, bacterias. Los abióticos son los elementos sin vida: agua, luz solar, temperatura, suelo, minerales.',
        'Ambos tipos se influyen mutuamente. Sin agua (abiótico) no hay plantas (biótico). Sin plantas, no hay alimento para herbívoros.',
        'Un ecosistema saludable necesita equilibrio entre factores bióticos y abióticos.',
      ],
      puntosClave: [
        'Biótico = con vida.',
        'Abiótico = sin vida (agua, luz, suelo).',
        'Ambos factores interactúan.',
      ],
    },
    {
      numero: 3,
      titulo: 'Cadenas y redes alimenticias',
      parrafos: [
        'La energía entra al ecosistema principalmente por el Sol. Las plantas (productores) captan esa energía y la convierten en alimento.',
        'Los consumidores primarios comen plantas; los secundarios comen a esos herbívoros, y así sucesivamente. Los descomponedores (hongos, bacterias) reciclan materia orgánica.',
        'En la naturaleza, las cadenas alimenticias se entrelazan formando redes alimenticias más complejas y realistas.',
      ],
      puntosClave: [
        'Productores → consumidores → descomponedores.',
        'La energía fluye; la materia se recicla.',
        'Las redes alimenticias conectan varias cadenas.',
      ],
    },
    {
      numero: 4,
      titulo: 'Equilibrio ecológico',
      parrafos: [
        'Un ecosistema en equilibrio mantiene poblaciones estables y recursos disponibles. Los depredadores controlan herbívoros; las plantas regeneran el oxígeno y el suelo.',
        'La introducción de especies invasoras, la deforestación o la contaminación rompen ese equilibrio. Pueden seguir extinciones en cascada.',
        'Conservar ecosistemas protege biodiversidad, agua limpia, aire puro y recursos para las futuras generaciones.',
      ],
      destacado: '⚖️ Cada especie cumple un rol. Perder una puede debilitar todo el ecosistema.',
    },
    {
      numero: 5,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: ['Los ecosistemas unen seres vivos y ambiente. La energía fluye y la materia se recicla.'],
      puntosClave: [
        'Biótico + abiótico = ecosistema.',
        'Productores, consumidores, descomponedores.',
        'Redes alimenticias conectan cadenas.',
        'El equilibrio es frágil y hay que cuidarlo.',
      ],
    },
  ],

  'cuerpo-humano': [
    {
      numero: 1,
      titulo: 'Tu cuerpo, una máquina viva',
      parrafos: [
        'Tu cuerpo realiza miles de procesos cada segundo sin que te des cuenta: late el corazón, respiras, digieres comida, piensas y te mueves.',
        'Para lograrlo, los órganos se agrupan en sistemas que trabajan en equipo. Ninguno funciona solo: el corazón necesita oxígeno de los pulmones; el cerebro necesita glucosa del sistema digestivo.',
        'En este capítulo conocerás los sistemas principales y cómo colaboran para mantenerte con vida.',
      ],
      destacado: '🫀 Tu corazón late unas 100.000 veces al día.',
      imagen: 'https://commons.wikimedia.org/wiki/Special:FilePath/Human_body_features-nb.svg?width=500',
      imagenAlt: 'Cuerpo humano',
    },
    {
      numero: 2,
      titulo: 'Sistema circulatorio',
      parrafos: [
        'El corazón es una bomba muscular que impulsa la sangre por arterias, venas y capilares. La sangre transporta oxígeno, nutrientes, hormonas y recoge dióxido de carbono y desechos.',
        'La sangre roja contiene hemoglobina, proteína que transporta oxígeno. Los glóbulos blancos defienden contra infecciones; las plaquetas ayudan a coagular heridas.',
        'Un adulto tiene unos 5 litros de sangre que recorre todo el cuerpo varias veces al día.',
      ],
      puntosClave: [
        'Corazón = bomba de sangre.',
        'Arterias llevan sangre del corazón; venas la traen de vuelta.',
        'La sangre transporta oxígeno y nutrientes.',
      ],
    },
    {
      numero: 3,
      titulo: 'Sistema respiratorio',
      parrafos: [
        'Al inhalar, el aire entra por nariz y tráquea hasta los pulmones. En los alvéolos, el oxígeno pasa a la sangre y el CO₂ sale al aire al exhalar.',
        'La respiración celular usa ese oxígeno para producir energía en las células. Sin respiración, las células no pueden obtener suficiente ATP.',
        'Ejercicio, altitud y enfermedades pulmonares afectan la eficiencia respiratoria.',
      ],
      puntosClave: [
        'Pulmones intercambian O₂ y CO₂.',
        'Alvéolos = lugar del intercambio de gases.',
        'El oxígeno alimenta la respiración celular.',
      ],
    },
    {
      numero: 4,
      titulo: 'Digestivo y nervioso',
      parrafos: [
        'El sistema digestivo transforma alimentos en nutrientes absorbibles: boca, esófago, estómago, intestinos. Enzimas y jugos digestivos descomponen proteínas, grasas y carbohidratos.',
        'El sistema nervioso coordina todo: el cerebro procesa información sensorial, la médula espinal transmite señales y las neuronas comunican mensajes eléctricos.',
        'Juntos permiten moverte, pensar, sentir hambre y responder al mundo.',
      ],
      destacado: '🧠 El cerebro tiene alrededor de 86.000 millones de neuronas.',
      puntosClave: [
        'Digestión = descomponer alimentos en nutrientes.',
        'Cerebro = centro de control del cuerpo.',
        'Neurona = célula del sistema nervioso.',
      ],
    },
    {
      numero: 5,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: ['Tu cuerpo funciona gracias a sistemas que colaboran: circulatorio, respiratorio, digestivo y nervioso.'],
      puntosClave: [
        'Corazón y sangre transportan oxígeno y nutrientes.',
        'Pulmones intercambian gases.',
        'El sistema digestivo obtiene nutrientes.',
        'El cerebro coordina funciones y respuestas.',
      ],
    },
  ],

  biodiversidad: [
    {
      numero: 1,
      titulo: 'La riqueza de la vida',
      parrafos: [
        'Biodiversidad significa la variedad de seres vivos en la Tierra: desde bacterias hasta ballenas, desde musgos hasta secuoyas. También incluye la diversidad de ecosistemas y genes.',
        'Cada especie ocupa un nicho ecológico y contribuye al funcionamiento del planeta. Perder especies es como quitar piezas de un rompecabezas gigante.',
        'Este capítulo explica por qué importa, qué la amenaza y cómo podemos protegerla.',
      ],
      destacado: '🌍 Se estiman millones de especies aún sin descubrir.',
      imagen: 'https://commons.wikimedia.org/wiki/Special:FilePath/Coral_Outcrop_Flynn_Reef.jpg?width=900',
      imagenAlt: 'Arrecife de coral',
    },
    {
      numero: 2,
      titulo: '¿Por qué importa?',
      parrafos: [
        'La biodiversidad nos provee alimentos, medicinas (muchos fármacos vienen de plantas y hongos), materiales y servicios como polinización y purificación del agua.',
        'Ecosistemas diversos son más resistentes a perturbaciones: sequías, plagas o enfermedades. Monocultivos o ecosistemas empobrecidos son más frágiles.',
        'También tiene valor cultural, estético y ético: muchas culturas veneran la naturaleza y creemos en el derecho de las especies a existir.',
      ],
      puntosClave: [
        'Alimentos, medicinas, materiales.',
        'Ecosistemas diversos = más resistentes.',
        'Valor ecológico, económico y cultural.',
      ],
    },
    {
      numero: 3,
      titulo: 'Amenazas',
      parrafos: [
        'Destrucción de hábitats (deforestación, urbanización) es la mayor causa de pérdida de especies. La contaminación del aire, agua y suelo daña organismos y ecosistemas.',
        'El cambio climático altera temperaturas y precipitaciones, forzando migraciones o extinciones. La caza y pesca excesivas agotan poblaciones.',
        'Especies invasoras compiten con nativas y desequilibran ecosistemas.',
      ],
      puntosClave: [
        'Pérdida de hábitat.',
        'Contaminación y cambio climático.',
        'Sobreexplotación e invasoras.',
      ],
    },
    {
      numero: 4,
      titulo: 'Cómo protegerla',
      parrafos: [
        'Áreas protegidas (parques nacionales, reservas) conservan hábitats. Leyes contra caza ilegal y comercio de especies amenazadas ayudan a proteger fauna y flora.',
        'A nivel personal: reciclar, ahorrar agua y energía, consumir responsablemente, plantar árboles y respetar la vida silvestre.',
        'La educación ambiental forma generaciones que valoran y cuidan la naturaleza.',
      ],
      destacado: '♻️ Pequeños hábitos diarios suman un gran impacto colectivo.',
    },
    {
      numero: 5,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: ['La biodiversidad sustenta la vida en la Tierra. Protegerla es responsabilidad de todos.'],
      puntosClave: [
        'Biodiversidad = variedad de vida.',
        'Nos da recursos y estabilidad ecológica.',
        'Amenazas: hábitat, contaminación, clima.',
        'Conservación: áreas protegidas y hábitos sostenibles.',
      ],
    },
  ],
}
