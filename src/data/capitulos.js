// ============================================================
//  13 temas × 2 páginas = 26 lecturas
//  Unidad: Origen de la vida — Bachillerato (Don Bosco BGU)
//  Imágenes: ver src/data/media.js
// ============================================================

export const paginasPorTema = {
  'metodo-cientifico': [
    {
      numero: 1,
      titulo: '¿Cómo investiga la ciencia?',
      parrafos: [
        'La biología no se limita a describir seres vivos: busca explicar fenómenos naturales mediante el método científico. Este proceso ordenado comienza con la observación de un hecho que despierta una pregunta. Por ejemplo: ¿de dónde surgen los microorganismos en un caldo nutritivo?',
        'A partir de la observación se formula una hipótesis, es decir, una explicación provisional que puede comprobarse. Luego se diseña un experimento controlado, donde solo cambia una variable y se mantiene un grupo de control para comparar. Los resultados se analizan con objetividad y se sacan conclusiones.',
        'Si la hipótesis se confirma repetidamente, puede integrarse en una teoría científica. Si se refuta, se plantea una nueva hipótesis. Este ciclo de indagación fue decisivo para abandonar ideas como la generación espontánea y avanzar hacia la comprensión del origen de la vida.',
      ],
      destacado: '🔬 Sin método científico no habría biología moderna ni microbiología.',
      imagenAlt: 'Método científico',
    },
    {
      numero: 2,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: [
        'El método científico garantiza que el conocimiento biológico sea verificable, reproducible y sometido a revisión. Redi, Spallanzani y Pasteur lo aplicaron para demostrar que la vida actual proviene de vida preexistente.',
      ],
      puntosClave: [
        'Pasos: observación, hipótesis, experimentación, análisis y conclusión.',
        'Variable, control y repetición son claves en un buen experimento.',
        'Una teoría científica está ampliamente contrastada; no es una “suposición”.',
        'La biología usa el método para estudiar el origen y la evolución de la vida.',
      ],
    },
  ],
  microscopia: [
    {
      numero: 1,
      titulo: 'Microscopía óptica',
      parrafos: [
        'Muchos organismos y estructuras celulares son invisibles a simple vista. El microscopio óptico compuesto utiliza dos sistemas de lentes —ocular y objetivo— para ampliar la imagen de muestras iluminadas con luz visible. El aumento total se calcula multiplicando el aumento del ocular por el del objetivo.',
        'Con el microscopio óptico podemos observar células, tejidos y microorganismos como bacterias o protozoos. Sin embargo, su resolución es limitada: no permite ver virus ni detalles finos de orgánulos. Para ello se requieren técnicas más avanzadas.',
        'Preparar una muestra correctamente —fijación, tinción y montaje— es tan importante como saber enfocar. Sin una buena preparación, la imagen puede ser borrosa o poco informativa.',
      ],
      destacado: '🔭 El microscopio óptico abrió la puerta al mundo de la célula.',
      imagenAlt: 'Microscopio óptico',
    },
    {
      numero: 2,
      titulo: 'Microscopía electrónica',
      tipo: 'repaso',
      parrafos: [
        'Los microscopios electrónicos usan haces de electrones en lugar de luz. Alcanzan resoluciones miles de veces superiores, indispensables para ver virus, ribosomas o el interior de orgánulos.',
        'El microscopio electrónico de transmisión (MET) atraviesa la muestra con electrones y es ideal para ver estructuras internas. El de barrido (MEB) refleja electrones sobre la superficie y produce imágenes tridimensionales. Ambos requieren vacío y preparaciones especiales.',
      ],
      puntosClave: [
        'Óptico: luz + lentes; hasta ~1 000× de aumento útil.',
        'Electrónico: electrones; resolución nanométrica.',
        'MET: estructuras internas; MEB: superficies en 3D.',
        'Sin microscopía no habría teoría celular ni microbiología moderna.',
      ],
    },
  ],
  'origen-universo': [
    {
      numero: 1,
      titulo: 'El Big Bang y la formación del cosmos',
      parrafos: [
        'El modelo más aceptado sobre el origen del universo es el Big Bang: hace unos 13 800 millones de años, todo el cosmos estaba concentrado en un estado extremadamente denso y caliente que comenzó a expandirse. No fue una explosión en el espacio, sino la expansión del propio espacio-tiempo.',
        'En los primeros minutos ocurrió la nucleosíntesis primordial: se formaron los núcleos de hidrógeno y helio. Con el enfriamiento, la materia se agrupó en nubes que dieron lugar a estrellas y galaxias. En el interior de las estrellas se sintetizaron elementos más pesados: carbono, oxígeno, nitrógeno, hierro…',
        'La radiación cósmica de fondo, detectada en 1965, es una prueba clave del Big Bang: es el “eco” electromagnético del universo cuando tenía apenas 380 000 años.',
      ],
      destacado: '🌌 Los átomos de tu cuerpo se formaron en estrellas antiguas.',
      imagenAlt: 'Origen del universo',
    },
    {
      numero: 2,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: [
        'El universo evolucionó desde partículas subatómicas hasta galaxias con estrellas que produjeron los elementos necesarios para planetas y, eventualmente, la vida.',
      ],
      puntosClave: [
        'Big Bang: expansión del universo hace ~13 800 Ma.',
        'H y He se formaron primero; elementos pesados en estrellas.',
        'Radiación cósmica de fondo = evidencia del universo joven.',
        'Galaxias como la Vía Láctea contienen polvo y gas enriquecido.',
      ],
    },
  ],
  'origen-tierra': [
    {
      numero: 1,
      titulo: 'Un planeta en formación',
      parrafos: [
        'Hace unos 4 600 millones de años, la Tierra se formó a partir del disco de gas y polvo que rodeaba al Sol joven. Al principio era un planeta incandescente, bombardeado por meteoritos y sin atmósfera estable. Gradualmente se enfrió y se consolidó una corteza sólida.',
        'El vapor de agua liberado por volcanes y el aporte de cometas formaron los primeros océanos. La atmósfera primitiva era muy distinta a la actual: rica en metano, amoníaco y vapor de agua, con poco o ningún oxígeno libre. Se la llama atmósfera reductora.',
        'En el Eón Arcaico, hace unos 4 000 millones de años, las condiciones de temperatura, agua líquida y energía (rayos, radiación UV, calor volcánico) crearon el escenario para la evolución química hacia moléculas orgánicas.',
      ],
      destacado: '🌍 La Tierra primitiva ofreció el “laboratorio” para el origen de la vida.',
      imagenAlt: 'Tierra primitiva',
    },
    {
      numero: 2,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: [
        'La evolución geológica del planeta —formación de corteza, océanos y atmósfera— fue condición necesaria para que la materia inorgánica diera paso a compuestos orgánicos y, con el tiempo, a sistemas vivos.',
      ],
      puntosClave: [
        'Tierra formada hace ~4 600 Ma; Luna por impacto de Theia.',
        'Atmósfera reductora: sin O₂ libre, con CH₄ y NH₃.',
        'Océanos primitivos concentraron moléculas orgánicas.',
        'Eón Arcaico: primeras evidencias de vida (~3 500 Ma).',
      ],
    },
  ],
  'teorias-origen-vida': [
    {
      numero: 1,
      titulo: '¿De dónde vino la vida?',
      parrafos: [
        'Desde la antigüedad, el ser humano se ha preguntado cómo apareció la vida. Algunas culturas explicaron el origen mediante el creacionismo: la idea de que un ser superior diseñó y creó los seres vivos. Esta perspectiva pertenece al ámbito religioso y filosófico, no puede comprobarse con el método científico.',
        'Durante la Edad Media y el Renacimiento predominó la generación espontánea: la creencia de que insectos, gusanos o ratones surgían de materia en descomposición. Aristóteles y otros naturalistas la aceptaron porque parecía confirmarse con la observación cotidiana.',
        'Hoy la ciencia distingue dos cuestiones: el origen primordial de la vida en la Tierra (proceso abiótico hace miles de millones de años) y el origen de los organismos actuales (biogénesis: toda vida proviene de vida preexistente).',
      ],
      destacado: '📜 La biología estudia el origen de la vida con hipótesis contrastables.',
      imagenAlt: 'Teorías del origen de la vida',
    },
    {
      numero: 2,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: [
        'Las principales corrientes históricas fueron el creacionismo, la generación espontánea (refutada) y las teorías científicas modernas: evolución química y panspermia.',
      ],
      puntosClave: [
        'Creacionismo: explicación teológica, no científica.',
        'Generación espontánea: refutada por Redi y Pasteur.',
        'Origen primordial: abiogénesis en la Tierra primitiva.',
        'Vida actual: biogénesis demostrada experimentalmente.',
      ],
    },
  ],
  'generacion-espontanea': [
    {
      numero: 1,
      titulo: 'La creencia en la vida espontánea',
      parrafos: [
        'La generación espontánea sostenía que ciertos seres vivos aparecían de forma repentina a partir de materia inerte: gusanos de la tierra húmeda, moscas del estiércol, ranas de el lodo. Durante siglos fue la explicación dominante porque nadie veía de dónde “salían” esos organismos.',
        'En 1668, el médico italiano Francesco Redi diseñó un experimento con bandejas de carne en descomposición. Unas estaban tapadas, otras cubiertas con tela y otras abiertas. Según la generación espontánea, los gusanos deberían aparecer en todas; pero solo lo hicieron en la carne accesible a las moscas.',
        'Redi demostró que los gusanos provenían de huevos depositados por moscas, no de la carne misma. Su experimento siguió el método científico y fue el primer gran golpe contra la generación espontánea en organismos visibles.',
      ],
      destacado: '🪰 Redi demostró que los gusanos no surgen solos de la carne.',
      imagenAlt: 'Experimento de Redi',
    },
    {
      numero: 2,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: [
        'Aunque Redi refutó la generación espontánea en macroorganismos, la idea persistió para los microorganismos hasta el siglo XIX, cuando Pasteur la eliminó definitivamente.',
      ],
      puntosClave: [
        'Generación espontánea = vida de materia inerte (idea falsa).',
        'Redi (1668): carne + moscas = gusanos; sin moscas, sin gusanos.',
        'Experimentos con grupo control y variables controladas.',
        'Spallanzani reforzó la idea con caldos esterilizados en frascos cerrados.',
      ],
    },
  ],
  pasteur: [
    {
      numero: 1,
      titulo: 'Los matraces de cuello de cisne',
      parrafos: [
        'En el siglo XIX aún se creía que los microorganismos surgían espontáneamente en caldos nutritivos expuestos al aire. Louis Pasteur, químico y microbiólogo francés, diseñó un experimento elegante para resolver la controversia.',
        'Colocó caldo nutritivo en matraces con un cuello largo y curvo en forma de cisne. El aire podía entrar libremente, pero las partículas de polvo —portadoras de microbios— quedaban atrapadas en el cuello. Al calentar el caldo (esterilización), eliminó todos los organismos vivos.',
        'Mientras el matraz permaneciera inclinado, el caldo no se contaminaba. Si se rompía el cuello, los microorganismos del aire llegaban al caldo y proliferaban. Pasteur demostró así la biogénesis: los microbios existen en el aire y no se generan de la nada.',
      ],
      destacado: '🧫 Pasteur demostró que “la vida solo proviene de la vida”.',
      imagenAlt: 'Experimento de Pasteur',
    },
    {
      numero: 2,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: [
        'El experimento de Pasteur (1864) cerró el debate sobre la generación espontánea de microorganismos y abrió el camino a la microbiología, la vacunación y la teoría germinal de las enfermedades.',
      ],
      puntosClave: [
        'Matraz de cuello de cisne: aire sí, polvo no.',
        'Esterilización por calor elimina microorganismos.',
        'Biogénesis: vida actual proviene de vida preexistente.',
        'Algunos matraces de Pasteur siguen estériles hoy.',
      ],
    },
  ],
  'evolucion-quimica': [
    {
      numero: 1,
      titulo: 'Oparin, Haldane y el caldo primordial',
      parrafos: [
        'Si la vida no surge espontáneamente hoy, ¿cómo apareció la primera vez? En la década de 1920, Aleksandr Oparin y J. B. S. Haldane propusieron independientemente que en la Tierra primitiva los compuestos inorgánicos evolucionaron químicamente hacia moléculas orgánicas en un “caldo primordial” oceánico.',
        'Oparin sugirió que las macromoléculas formaron coacervados: gotas de polímeros con propiedades similares a una membrana, capaces de concentrar moléculas y aislar reacciones del medio. Estos sistemas pudieron ser precursores de las primeras protocélulas.',
        'En 1953, Stanley Miller y Harold Urey recrearon en el laboratorio una atmósfera primitiva con gases como metano, amoníaco e hidrógeno, agua caliente y descargas eléctricas simulando rayos. En pocas semanas se sintetizaron aminoácidos, apoyando la hipótesis de la evolución química.',
      ],
      destacado: '⚗️ La evolución química explica el paso de lo inorgánico a lo vivo.',
      imagenAlt: 'Experimento de Miller-Urey',
    },
    {
      numero: 2,
      titulo: 'Teoría endosimbiótica (ampliación)',
      tipo: 'repaso',
      parrafos: [
        'Una vez formadas las primeras células procariotas, la vida continuó complicándose. La bióloga Lynn Margulis propuso en 1967 la teoría endosimbiótica: las mitocondrias y los cloroplastos fueron originalmente bacterias libres incorporadas por células más grandes, dando origen a las células eucariotas.',
        'Las mitocondrias y cloroplastos tienen ADN circular propio, doble membrana y ribosomas tipo bacteriano (70S), evidencias de su origen bacteriano. Esta teoría, rechazada al principio, hoy es ampliamente aceptada.',
      ],
      puntosClave: [
        'Oparin/Haldane: evolución química en caldo primordial.',
        'Miller-Urey (1953): síntesis abiótica de aminoácidos.',
        'Coacervados y protocélulas como pasos intermedios.',
        'Endosimbiosis: mitocondrias y cloroplastos = bacterias incorporadas.',
      ],
    },
  ],
  'otras-teorias': [
    {
      numero: 1,
      titulo: 'Panspermia y origen extraterrestre',
      parrafos: [
        'Aunque la evolución química terrestre es el paradigma más aceptado, existen hipótesis alternativas. La panspermia propone que microorganismos o moléculas orgánicas llegaron a la Tierra desde el espacio, transportados por meteoritos, cometas o polvo interplanetario.',
        'A favor de esta idea, se han detectado aminoácidos y bases nitrogenadas en meteoritos como el de Murchison (Australia, 1969). Además, algunos microorganismos extremófilos resisten vacío, radiación y frío extremo, lo que haría plausible un viaje espacial.',
        'Sin embargo, la panspermia no explica cómo surgió la vida en el universo: solo desplaza el problema a otro planeta. Por eso se considera una hipótesis complementaria, no la explicación principal del origen primordial.',
      ],
      destacado: '🚀 La panspermia propone que la vida “viajó”, no que “apareció de la nada”.',
      imagenAlt: 'Meteorito de Murchison',
    },
    {
      numero: 2,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: [
        'Las otras teorías del origen incluyen la panspermia y variantes de origen extraterrestre. La ciencia las evalúa con el mismo rigor: evidencias, experimentos y pensamiento crítico.',
      ],
      puntosClave: [
        'Panspermia: vida o componentes desde el espacio.',
        'Aminoácidos en meteoritos y cometas estudiados por Rosetta.',
        'No reemplaza la evolución química en la Tierra.',
        'El origen de la vida sigue siendo un campo de investigación activo.',
      ],
    },
  ],
  bioelementos: [
    {
      numero: 1,
      titulo: 'Los elementos de la materia viva',
      parrafos: [
        'El análisis químico de los seres vivos revela que están formados por unos 70 elementos, pero solo unos pocos son imprescindibles. Los bioelementos primarios —carbono, hidrógeno, oxígeno, nitrógeno, fósforo y azufre— constituyen más del 95 % de la biomasa y forman la base de las biomoléculas.',
        'Los bioelementos secundarios (calcio, magnesio, sodio, potasio, cloro) representan menos del 4 % y participan en funciones como la transmisión nerviosa, la contracción muscular o la estructura ósea. Los oligoelementos (hierro, zinc, yodo, cobre…) son necesarios en trazas mínimas.',
        'Los bioelementos se combinan formando biomoléculas, que se clasifican en inorgánicas (agua y sales minerales) y orgánicas (glúcidos, lípidos, proteínas y ácidos nucleicos). El carbono es especial por su capacidad de formar cuatro enlaces y cadenas muy variadas.',
      ],
      destacado: '⚛️ El carbono es el “esqueleto” de las biomoléculas orgánicas.',
      imagenAlt: 'Bioelementos',
    },
    {
      numero: 2,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: [
        'Conocer los bioelementos y su abundancia permite entender la composición química de la materia viva y la importancia de una dieta equilibrada.',
      ],
      puntosClave: [
        'Primarios: C, H, O, N, P, S (>95 % biomasa).',
        'Secundarios: Ca, Mg, Na, K, Cl (funciones reguladoras).',
        'Oligoelementos: Fe, Zn, I, Cu… (trazas indispensables).',
        'Biomoléculas = inorgánicas + orgánicas.',
      ],
    },
  ],
  agua: [
    {
      numero: 1,
      titulo: 'La molécula esencial',
      parrafos: [
        'El agua (H₂O) es la biomolécula inorgánica más abundante: representa entre el 60 % y el 90 % de la masa de los seres vivos. Su molécula es polar: el oxígeno atrae los electrones con más fuerza que el hidrógeno, creando cargas parciales que permiten formar puentes de hidrógeno.',
        'Gracias a estos enlaces, el agua tiene propiedades únicas: alta tensión superficial, gran capacidad calorífica, elevado calor de vaporización y densidad mayor en estado líquido que en sólido (por eso el hielo flota). Estas propiedades fueron decisivas para el origen y mantenimiento de la vida.',
        'El agua es un disolvente excelente de sustancias iónicas y polares, lo que permite que las reacciones metabólicas ocurran en medio acuoso. Además, participa directamente en procesos como la fotosíntesis y la hidrólisis de biomoléculas.',
      ],
      destacado: '💧 Sin agua líquida no habría vida como la conocemos.',
      imagenAlt: 'Molécula de agua',
    },
    {
      numero: 2,
      titulo: 'Funciones biológicas del agua',
      tipo: 'repaso',
      parrafos: [
        'El agua cumple funciones estructurales (turgencia celular, lubricación), térmicas (regulación de temperatura por sudoración) y como medio de transporte (sangre, savia, linfa). Las soluciones tampón en el agua mantienen estable el pH celular.',
      ],
      puntosClave: [
        'Disolvente universal de moléculas polares e iónicas.',
        'Regulación térmica: alto calor específico y de vaporización.',
        'Hielo flota → vida en lagos bajo capa de hielo.',
        'Tampón: mantiene pH estable en medio intracelular.',
      ],
    },
  ],
  'sales-minerales': [
    {
      numero: 1,
      titulo: 'Tipos y funciones de las sales',
      parrafos: [
        'Las sales minerales son biomoléculas inorgánicas presentes en menor proporción que el agua, pero indispensables. Se clasifican según su forma: precipitadas (insolubles), disueltas (como iones) o asociadas a moléculas orgánicas.',
        'Las sales precipitadas forman estructuras sólidas: el carbonato de calcio en conchas y coral, el fosfato de calcio en huesos junto al colágeno. Las sales disueltas se ionizan en agua: cationes como Na⁺, K⁺, Ca²⁺, Mg²⁺ y aniones como Cl⁻, HCO₃⁻, PO₄³⁻.',
        'Los iones participan en la osmosis (paso de agua a través de membranas), la transmisión del impulso nervioso y la activación enzimática. El hierro en la hemoglobina transporta oxígeno; el calcio interviene en la contracción muscular.',
      ],
      destacado: '🧂 Las sales disueltas permiten la electricidad en tu cuerpo.',
      imagenAlt: 'Sales minerales',
    },
    {
      numero: 2,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: [
        'Una dieta equilibrada aporta los minerales necesarios. Su deficiencia o exceso puede causar trastornos metabólicos y estructurales.',
      ],
      puntosClave: [
        'Precipitadas: huesos, conchas, dientes (Ca, P).',
        'Disueltas: Na⁺, K⁺, Cl⁻ (equilibrio osmótico y nervioso).',
        'Asociadas: Fe en hemoglobina, Mg en clorofila.',
        'Osmosis: agua hacia mayor concentración de solutos.',
      ],
    },
  ],
  'biomoleculas-organicas': [
    {
      numero: 1,
      titulo: 'Los cuatro grupos principales',
      parrafos: [
        'Las biomoléculas orgánicas contienen carbono y son exclusivas de los seres vivos (o producidas por ellos). Se agrupan en cuatro familias: glúcidos, lípidos, proteínas y ácidos nucleicos, cada una con funciones estructurales, energéticas o reguladoras.',
        'Los glúcidos (monosacáridos, oligosacáridos y polisacáridos) aportan energía rápida (glucosa) o estructural (celulosa, quitina). Los lípidos almacenan energía (grasas), forman membranas (fosfolípidos) y actúan como hormonas (esteroides).',
        'Las proteínas son polímeros de aminoácidos con funciones muy diversas: estructura (colágeno), transporte (hemoglobina), defensa (anticuerpos) y catálisis (enzimas). Los ácidos nucleicos (ADN y ARN) almacenan y transmiten la información genética.',
      ],
      destacado: '🧪 Las biomoléculas orgánicas son la base molecular de la vida.',
      imagenAlt: 'Biomoléculas orgánicas',
    },
    {
      numero: 2,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: [
        'Monómeros simples se unen para formar polímeros complejos. Esta organización molecular fue clave en la evolución química hacia sistemas capaces de autorreplicarse.',
      ],
      puntosClave: [
        'Glúcidos: energía (glucosa) y estructura (almidón, celulosa).',
        'Lípidos: reserva, membranas y señalización.',
        'Proteínas y enzimas: estructura y catálisis metabólica.',
        'Ácidos nucleicos: ADN (información) y ARN (expresión génica).',
      ],
    },
  ],
}
