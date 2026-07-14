// ============================================================
//  Lecturas alineadas a la Unidad 1 del libro Don Bosco (BGU)
//  Lectura 1 = texto del libro (sin cuadros sinópticos)
//  Lectura 2 = repaso (vocabulario / datos curiosos en la UI)
// ============================================================

export const paginasPorTema = {
  'metodo-cientifico': [
    {
      numero: 1,
      titulo: '1. El método científico',
      imagenAlt: 'Método científico',
      parrafos: [
        'El método científico es un proceso sistemático basado en la observación y la experimentación, gracias al cual obtenemos conocimiento científico.',
        'En biología, como en el resto de las ciencias naturales, seguimos el método científico para crear conocimiento. En este método cumplimos una serie de etapas: observación, planteamiento del problema, formulación de hipótesis, experimentación, aceptación o refutación, y conclusión.',
        'Gracias al método científico, podemos construir un conocimiento que explique cómo funciona el mundo natural, pero para aplicar este método de forma exitosa, hay que cumplir ciertos requisitos.',
        'Para empezar, es importante eliminar los prejuicios. Esto significa que tenemos que ser lo más objetivos posible, sin permitir que nuestras ideas previas sobre un concepto afecten al análisis o a la experimentación. Debemos demostrar una actitud imparcial.',
        'A la hora de plantear hipótesis y experimentos que prueben o refuten la hipótesis, es importante ser creativo para poder proponer ideas novedosas, pero siempre desde un razonamiento lógico y teniendo en cuenta que las hipótesis deben ser comprobables mediante un experimento, y que ese experimento pueda repetirse en distintas condiciones.',
        'Durante la realización del experimento, hay que tener en cuenta todas las variables que puedan influir en el mismo. Una vez que tengamos claras las variables y cómo afecta cada una al fenómeno que se está estudiando, debemos controlarlas o reducirlas al mínimo para asegurarnos de que los datos que obtendremos del experimento estén más apegados a la realidad.',
        'Al analizar los datos, es necesario ser honesto y no manipular el experimento ni modificar los datos para hacer que la hipótesis se cumpla. El análisis debe ser objetivo e imparcial.',
        'Para finalizar, es importante tener la mente abierta a nuevas ideas. A lo largo de toda la historia de la ciencia, se han afirmado o descartado teorías y leyes sobre el entorno que nos rodea. Esto es algo normal, ya que, al mejorar la tecnología, podremos mejorar nuestra comprensión del mundo natural.',
      ],
    },
    {
      numero: 2,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: [
        'El método científico garantiza que el conocimiento biológico sea verificable, reproducible y sometido a revisión.',
      ],
      puntosClave: [
        'Pasos: observación, planteamiento del problema, hipótesis, experimentación, aceptación/refutación y conclusión.',
        'Las hipótesis deben ser comprobables y los experimentos repetibles.',
        'Hay que controlar variables y ser objetivo al analizar datos.',
        'Redi y Pasteur aplicaron el método científico para refutar la generación espontánea.',
      ],
    },
  ],

  microscopia: [
    {
      numero: 1,
      titulo: '2. Microscopía',
      imagenAlt: 'Microscopio óptico',
      parrafos: [
        'Los avances en microscopía y el planteamiento del método científico han hecho que las teorías se vayan modificando a lo largo de los años. La microscopía permite observar células, tejidos y estructuras que no son visibles a simple vista.',
      ],
      subtemas: [
        {
          titulo: '1.1. Microscopía óptica',
          parrafos: [
            'La microscopía óptica es la técnica que se basa en la observación de las células y los tejidos por medio del microscopio óptico.',
            'El microscopio óptico se basa en la capacidad de la luz para atravesar superficies muy finas.',
            'Las partes principales de un microscopio óptico son: oculares, revólver, brazo, tornillo macrométrico, tornillo micrométrico, pie, fuente de luz, platina y objetivo.',
          ],
        },
        {
          titulo: '1.2. Microscopía electrónica',
          parrafos: [
            'La microscopía electrónica se basa en la utilización de haces de electrones en lugar de luz.',
            'El microscopio electrónico de transmisión permite la observación detallada del interior de las células.',
            'Para preparar muestras para microscopía electrónica se realizan procesos como la fijación (estabiliza los componentes celulares para que su aspecto sea lo más parecido posible al del tejido vivo), la deshidratación (se sumerge la muestra en baños de alcohol de graduación creciente hasta llegar al alcohol absoluto), la inclusión (se añade una sustancia líquida que ayuda a hacer cortes finos sin estropear el material) y el montaje (se colocan cortes sobre un portaobjetos).',
          ],
        },
      ],
    },
    {
      numero: 2,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: [
        'La microscopía óptica usa luz y lentes; la electrónica usa haces de electrones y permite mayor detalle.',
      ],
      puntosClave: [
        'Óptica: células y tejidos visibles con luz.',
        'Partes del óptico: ocular, objetivo, platina, tornillos macro y micrométrico, entre otras.',
        'Electrónica: haces de electrones en lugar de luz.',
        'MET: observación detallada del interior celular.',
      ],
    },
  ],

  'origen-universo': [
    {
      numero: 1,
      titulo: '3. Origen y evolución del universo',
      imagenAlt: 'Origen del universo',
      parrafos: [
        'Según las últimas teorías sobre el origen del universo, este se creó hace entre 5 000 y 20 000 millones de años a partir de la expansión de un único punto de temperatura y densidad infinitas en lo que conocemos como el Big Bang.',
        'En el primer segundo del tiempo, los protones y neutrones se combinan formando núcleos de hidrógeno, helio, litio y deuterio.',
        'Después de unos 15 millones de años del Big Bang, se formaron nuevas galaxias con sistemas solares alrededor de las estrellas. Los átomos se enlazan entre ellos para formar moléculas.',
        'Cuando la materia creada se chocaba y se fusionaba, se formaban estructuras llamadas planetesimales, las cuales generaban planetas.',
        'Hace cientos de miles de años, con temperaturas de unos miles de grados, los electrones fueron frenados lo suficiente como para ser capturados por los núcleos atómicos, que originaron los primeros átomos completos. La materia así creada se asoció 1000 millones de años después, formó protogalaxias, compuestas por estrellas que en su interior sintetizaron núcleos atómicos pesados, como carbono, nitrógeno, hierro… A partir de los productos de estas protogalaxias, se formaron nuevas generaciones de galaxias, como la Vía Láctea.',
      ],
    },
    {
      numero: 2,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: [
        'El universo evolucionó desde el Big Bang hasta galaxias con estrellas que produjeron elementos pesados.',
      ],
      puntosClave: [
        'Big Bang: expansión desde un punto de densidad y temperatura infinitas.',
        'Primer segundo: núcleos de hidrógeno, helio, litio y deuterio.',
        'Planetesimales → planetas.',
        'Estrellas sintetizan carbono, nitrógeno, hierro y otros elementos.',
      ],
    },
  ],

  'origen-tierra': [
    {
      numero: 1,
      titulo: '4. Origen y evolución de la Tierra',
      imagenAlt: 'Tierra primitiva',
      parrafos: [
        'La Tierra se formó hace aproximadamente 4500 millones de años.',
        'Sus condiciones eran totalmente diferentes a las que existen actualmente. Las temperaturas eran mucho más elevadas, a la superficie del planeta llegaba gran cantidad de energía en forma de radiación ultravioleta y tormentas eléctricas, y la composición de gases de la atmósfera apenas contenía oxígeno libre.',
        'Los gases que se liberaban al exterior, generados por el magma, eran CO₂, SO₂, compuestos de nitrógeno y vapor de agua.',
        'La datación de las rocas nos permite establecer una escala de tiempo geológico sobre la cual situar los acontecimientos y etapas por los cuales ha pasado el planeta. Las eras y períodos en los que se divide la historia de la Tierra no tienen la misma duración, ya que esta escala se estableció en función de las formas de vida fósiles presentes en las diferentes rocas, y se determina posteriormente la datación absoluta de las mismas.',
        'La datación relativa nos informa qué materiales son más antiguos que otros, pero no nos dice cuáles son sus edades. Los métodos de radiocronología se utilizan para realizar una datación absoluta.',
        'Las eras geológicas de la historia de la Tierra son: Cenozoico, Mesozoico, Paleozoico y Precámbrico. El Cenozoico se dividió en Cuaternario y Terciario; el Mesozoico en Cretácico, Jurásico y Triásico; el Paleozoico en Pérmico, Carbonífero, Devónico, Silúrico, Ordovícico y Cámbrico.',
        'Cuando una roca ígnea se solidifica, se forman minerales que atrapan isótopos radiactivos, los cuales iniciarán su desintegración hacia los elementos hijos estables.',
        'En esas condiciones, hace unos 3500 millones de años se originó el primer organismo vivo, como resultado de la evolución química de compuestos inorgánicos en orgánicos y el hecho de que esos compuestos orgánicos quedaron aislados del ambiente con la capacidad de autorreplicarse.',
      ],
    },
    {
      numero: 2,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: [
        'La Tierra se formó hace unos 4500 millones de años con una atmósfera casi sin oxígeno libre.',
      ],
      puntosClave: [
        'Gases primitivos: CO₂, SO₂, nitrógeno y vapor de agua.',
        'Datación relativa vs. absoluta (radiocronología).',
        'Eras: Precámbrico, Paleozoico, Mesozoico y Cenozoico.',
        'Primeros organismos vivos hace ~3500 millones de años.',
      ],
    },
  ],

  'teorias-origen-vida': [
    {
      numero: 1,
      titulo: '5. Teorías sobre el origen de la vida',
      imagenAlt: 'Teorías del origen de la vida',
      parrafos: [
        'Descubrir cómo se originó la vida es descubrir el origen de uno mismo y de todo lo que le rodea. Se distingue aquello que está vivo de aquello que no por la capacidad de reproducción, crecimiento y respuesta ante estímulos. Esto se vuelve aún más fascinante considerando la diversidad de la vida. A continuación se presentan algunas de las teorías sobre su origen:',
        'Creacionismo: Es la idea que el universo y la vida en la Tierra fueron diseñados y creados por una entidad superior. En esto se basan una gran cantidad de religiones en el mundo.',
        'Generación espontánea: También denominada autogénesis, consiste en la idea que la vida surgió de forma espontánea a partir de materia inerte. Es una de las teorías biológicas con mayor aceptación histórica. El término fue acuñado en 1870 por Thomas Huxley.',
        'Panspermia: De acuerdo a lo que plantea esta hipótesis, la vida se originó en el espacio exterior y ha ido trascendiendo de un planeta a otro.',
        'Teoría química y celular: Alexander Oparin propuso en 1924 la idea que la vida se originó a partir de la materia inerte en 3 etapas. La evolución química que creó las moléculas orgánicas al combinarse con las condiciones climáticas presentes, la evolución prebiótica consistía en la agrupación de estas moléculas para la creación de sistemas más complejos y finalmente la evolución biológica que continuó con ese cambio y desarrollo llegando a diversificarse. A pesar de otras teorías, esta es la que ha ganado mayor aceptación dentro de la comunidad científica. A pesar de su relación estrecha con la teoría de generación espontánea, esta provee argumentos con mayor fundamento y una idea con mayor desarrollo. Dicha teoría inspiró múltiples experimentos dónde se probaba la combinación de moléculas inorgánicas bajo condiciones ambientales específicas. Finalmente, en 1950, Stanley Miller tras la realización del experimento confirmó que se generaron moléculas similares a las propuestas en la teoría de Oparin.',
        'Existen varias hipótesis de cómo se generó la vida en nuestro planeta. Una de las teorías planteadas sobre el origen de la vida es el creacionismo, donde se propone que todos los seres vivos provienen de un creador divino. Sin embargo, esta teoría no se puede probar a través del método científico.',
      ],
    },
    {
      numero: 2,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: [
        'El libro distingue creacionismo, generación espontánea, panspermia y la teoría química (Oparin), la más aceptada científicamente.',
      ],
      puntosClave: [
        'Creacionismo: no comprobables con el método científico.',
        'Generación espontánea: vida desde materia inerte (refutada).',
        'Panspermia: vida desde el espacio.',
        'Teoría química de Oparin: la más aceptada hoy.',
      ],
    },
  ],

  'generacion-espontanea': [
    {
      numero: 1,
      titulo: '5.1 La generación espontánea',
      imagenAlt: 'Experimento de Redi',
      parrafos: [
        'La palabra biología proviene del griego bios que significa “vida” y logos que significa “estudio”. Por lo tanto, podemos definir a la biología como la ciencia que estudia los seres vivos. Ya hemos visto la principal teoría sobre el origen de la Tierra, pero ¿cuándo y cómo apareció la vida?',
        'Durante la Edad Media y hasta el siglo XVI predominaba la idea de que los seres vivos eran creados por un poder divino. Sin embargo, ya en el siglo XVII, comenzó a tomar fuerza una idea que ya había surgido en pueblos de la Antigüedad: que los organismos vivos aparecían por generación espontánea. La teoría de la generación espontánea mantiene el pensamiento de que ciertos seres vivos, como insectos, gusanos o ratones, se originan de forma repentina a partir de materia inorgánica.',
        'En 1668, Francesco Redi realizó un experimento con el objetivo de refutar la teoría de la generación espontánea. Para ello, puso carne en descomposición en distintas bandejas, una de ella tapada con una tapa, otra cubierta por una tela y otra totalmente descubierta. Según la teoría de la generación espontánea las larvas aparecerían de forma repentina, pero Redi demostró que las larvas solo aparecían en la carne sin tapar, ya que en el resto las moscas no podían depositar los huevos.',
      ],
    },
    {
      numero: 2,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: [
        'La generación espontánea sostiene que ciertos seres vivos se originan de forma repentina a partir de materia inorgánica. Redi la puso en duda con su experimento de 1668.',
      ],
      puntosClave: [
        'Biología = bios (vida) + logos (estudio).',
        'Generación espontánea: insectos, gusanos o ratones desde materia inorgánica.',
        'Redi (1668): carne tapada, con tela y descubierta.',
        'Las larvas solo aparecieron en la carne accesible a las moscas.',
      ],
    },
  ],

  pasteur: [
    {
      numero: 1,
      titulo: '5.2. Pasteur y los matraces de cuello de cisne',
      imagenAlt: 'Experimento de Pasteur',
      parrafos: [
        'Gracias a los experimentos de Redi y, años más tarde, de Pasteur, la teoría de la generación espontánea quedó totalmente refutada.',
        'Louis Pasteur, en 1864, demostró que los microorganismos están presentes en el aire y no se generan de forma espontánea.',
        'Pasteur utilizó matraces de cuello de cisne. En ellos colocó un caldo nutritivo que esterilizó mediante calor. El cuello curvado permitía la entrada de aire, pero retenía el polvo y los microorganismos, de modo que el caldo permanecía estéril. Si se rompía el cuello, los microorganismos del aire llegaban al caldo y este se contaminaba.',
        'Experimento relacionado (Spallanzani): tomó una especie de sopa de vegetales y la hirvió hasta la esterilización (es decir, matar todos los organismos vivos) y luego la dejó expuesta al aire; al cabo de unos días hacían su aparición microorganismos en el caldo de cultivo. Repitió el experimento pero esta vez en un recipiente herméticamente cerrado. En este recipiente sellado no aparecieron los microorganismos en ningún momento, tal como ocurre con los frascos de Pasteur que todavía se conservan cerrados desde que él realizó el experimento. Esto demostraba que los microorganismos no se generan de forma espontánea.',
      ],
    },
    {
      numero: 2,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: [
        'Pasteur demostró que los microorganismos están en el aire y no surgen espontáneamente en el caldo.',
      ],
      puntosClave: [
        '1864: Pasteur y matraces de cuello de cisne.',
        'El aire entra; el polvo con microbios queda retenido.',
        'Caldo esterilizado permanece estéril si el cuello está intacto.',
        'Quedó refutada la generación espontánea de microorganismos.',
      ],
    },
  ],

  'evolucion-quimica': [
    {
      numero: 1,
      titulo: '5.3. Teoría de la evolución química',
      imagenAlt: 'Teoría de la evolución química',
      parrafos: [
        'Actualmente existen distintas teorías sobre el origen de la vida, pero la más aceptada es la teoría de Oparin y Haldane, que contó con mucho más apoyo después de los experimentos de Miller. Esta teoría se basa en las condiciones primitivas de la Tierra y en una evolución química de los compuestos inorgánicos en compuestos orgánicos, que son la estructura esencial de la vida.',
        'Se conoce como evolución química a las reacciones químicas de los compuestos inorgánicos que darían lugar a los compuestos orgánicos, ocasionados por las altas temperaturas junto con la radiación ultravioleta y las descargas eléctricas que ocurrían en la atmósfera debido a las tormentas.',
        'El llamado caldo primordial hace referencia al océano que cubriría gran parte de la Tierra hace aproximadamente 3500 millones de años.',
        'Los coacervados son pequeñas gotitas formadas cuando se mezclan algunos polímeros con agua. Poseen hasta quinientas micras de diámetro.',
        'Alexander Oparin propuso en 1924 la idea que la vida se originó a partir de la materia inerte en 3 etapas: la evolución química que creó las moléculas orgánicas al combinarse con las condiciones climáticas presentes; la evolución prebiótica, que consistía en la agrupación de estas moléculas para la creación de sistemas más complejos; y finalmente la evolución biológica, que continuó con ese cambio y desarrollo llegando a diversificarse.',
        'Dicha teoría inspiró múltiples experimentos donde se probaba la combinación de moléculas inorgánicas bajo condiciones ambientales específicas. Finalmente, en 1950, Stanley Miller tras la realización del experimento confirmó que se generaron moléculas similares a las propuestas en la teoría de Oparin.',
        'En esas condiciones, hace unos 3500 millones de años se originó el primer organismo vivo, como resultado de la evolución química de compuestos inorgánicos en orgánicos y el hecho de que esos compuestos orgánicos quedaron aislados del ambiente con la capacidad de autorreplicarse. El sistema de autorreplicación basado en ácidos nucleicos es el ADN y el ARN.',
      ],
    },
    {
      numero: 2,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: [
        'La teoría de la evolución química explica el paso de compuestos inorgánicos a orgánicos en la Tierra primitiva.',
      ],
      puntosClave: [
        'Teoría más aceptada: Oparin y Haldane.',
        'Caldo primordial ≈ océano de hace ~3500 Ma.',
        'Coacervados: gotitas de polímeros en agua.',
        'Experimentos de Miller apoyaron la teoría de Oparin.',
      ],
    },
  ],

  'otras-teorias': [
    {
      numero: 1,
      titulo: '6. Otras teorías sobre el origen de la vida',
      imagenAlt: 'Panspermia',
      parrafos: [
        'A pesar de que actualmente el paradigma sobre el origen de la vida aceptado por la mayoría de la comunidad científica se basa en las teorías de Oparin, existe aún mucha controversia y se mantienen otras posibles hipótesis que darían respuesta a la pregunta ¿cómo se inició la vida en la Tierra?',
        'Dentro de estas hipótesis, hay muchas que sitúan el origen de la vida en algún punto del universo lejano a la Tierra, planteando que la vida en nuestro planeta proviene del exterior y habría llegado a la Tierra a través de cometas o meteoritos. El ejemplo más representativo de estas hipótesis es la panspermia, que propone que formas de vida microscópicas o moléculas orgánicas llegaron a la Tierra a través de meteoritos y, una vez en nuestro planeta, evolucionaron hasta convertirse en las formas de vida que conocemos actualmente.',
        'A favor de esta teoría se han encontrado, en restos de meteoritos, estructuras que podían haber sido causadas por organismos microscópicos. Además, se ha demostrado que algunas bacterias son capaces de sobrevivir largos períodos en el espacio exterior.',
        'La parte negativa de estas teorías es que realmente no dan una respuesta a cómo se originó la vida, simplemente sitúan el inicio de esta en un escenario lejano a la Tierra.',
      ],
    },
    {
      numero: 2,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: [
        'La panspermia propone un origen extraterrestre, pero no explica cómo surgió la vida por primera vez.',
      ],
      puntosClave: [
        'Paradigma principal: teorías de Oparin.',
        'Panspermia: meteoritos y cometas.',
        'Hay evidencias a favor, pero no completa la explicación.',
        'Desplaza el problema del origen, no lo resuelve.',
      ],
    },
  ],

  bioelementos: [
    {
      numero: 1,
      titulo: '7. Bioelementos y biomoléculas',
      imagenAlt: 'Bioelementos',
      parrafos: [
        'Existen distintas biomoléculas de extrema importancia para los seres vivos. Las moléculas orgánicas están basadas en el carbono, mientras que las inorgánicas, no. Las biomoléculas orgánicas más importantes son los glúcidos, lípidos, proteínas y ácidos nucleicos. Las biomoléculas inorgánicas básicas son el agua y las sales minerales.',
        'Los elementos que predominan en los seres vivos, llamados bioelementos primarios, son: carbono (C), hidrógeno (H), oxígeno (O), nitrógeno (N), fósforo (P) y azufre (S).',
        'Los bioelementos secundarios son necesarios para mantener el equilibrio osmótico y para realizar el metabolismo, por lo que son indispensables para la vida.',
        'Las biomoléculas orgánicas son los glúcidos, los lípidos, las proteínas y los ácidos nucleicos. Todas ellas son sustancias basadas en la unión de numerosos átomos de carbono y se estudian con más detalle a continuación y en la próxima unidad.',
      ],
    },
    {
      numero: 2,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: [
        'Los bioelementos primarios (C, H, O, N, P, S) forman la base de la materia viva.',
      ],
      puntosClave: [
        'Orgánicas: basadas en carbono.',
        'Inorgánicas básicas: agua y sales minerales.',
        'Primarios: C, H, O, N, P, S.',
        'Secundarios: equilibrio osmótico y metabolismo.',
      ],
    },
  ],

  agua: [
    {
      numero: 1,
      titulo: '8. Agua',
      imagenAlt: 'Molécula de agua',
      parrafos: [
        'El agua es sin dudar la molécula más importante para los seres vivos ya que sin ella no sería posible la vida. La asociación de un átomo de oxígeno y dos átomos de hidrógeno mediante enlaces covalentes da propiedades únicas a este líquido que lo hacen especial. Incluso, los seres vivos están constituidos entre un 60 y 90% por agua.',
        'La composición media de los seres vivos es de un 70 % de agua, y sus propiedades fisicoquímicas la hacen indispensable para la vida.',
      ],
      subtemas: [
        {
          titulo: '8.1. Composición y estructura molecular',
          parrafos: [
            'El agua está formada por dos átomos de hidrógeno (H) y un átomo de oxígeno (O) unidos mediante sendos enlaces covalentes.',
            'La importancia del agua radica en el hecho que interactúa con muchas otras moléculas. Es decir, es un factor clave en muchas reacciones químicas. El oxígeno liberado por las plantas al momento de realizar la fotosíntesis es extraído del agua. Sin ella no se podría realizar este importante proceso que suple de alimento a todas las cadenas tróficas.',
          ],
        },
        {
          titulo: '8.2. Propiedades fisicoquímicas del agua',
          parrafos: [
            'Por otro lado, el agua es un disolvente considerado como universal ya que una amplia gama de sustancias son compatibles con la misma. Esta es capaz de disolver moléculas hidrofílicas debido a las propiedades eléctricas otorgadas por la estructura del agua. Al ser un disolvente tan importante, además provee el medio para la reacción de una multiplicidad de reacciones químicas. Tal es el caso del líquido contenido en las células dónde se realizan los procesos metabólicos. La interacción hidrofóbica también es importante para las moléculas de los lípidos que adquieren estructuras especiales llamadas micelas.',
            'Las propiedades principales del agua son: la cohesión, que consiste en la tendencia de las moléculas a mantenerse unidas; la tensión superficial, que constituye la tendencia de la superficie del agua a resistirse a la rotura; y la adhesión, que es la capacidad de adherirse a superficies que contienen cargas polares.',
            'El calor específico del agua es sumamente valioso y consiste en la energía necesaria para elevar 1 °C la temperatura de un gramo de sustancia. Debido a la formación de puentes de hidrógeno el agua puede absorber una cantidad muy grande de energía sin comenzar a evaporarse y libera esa misma energía fácilmente ayudando a controlar la temperatura en el organismo de los seres vivos.',
            'La forma en la que solidifica el agua, en una configuración menos densa, es ideal para la manutención de la vida marina, ya que de este modo no comienza con el congelamiento del lecho marino, pero con la superficie que protege el fondo de la solidificación y mantiene la vida bajo el agua en invierno.',
            'El valor máximo de densidad del agua se obtiene a 4 °C, cuando se establecen numerosos puentes de hidrógeno entre sus moléculas. En este punto, consideramos la densidad del agua como 1 kg/dm³. A medida que aumentamos o disminuimos la temperatura del agua desde los 4 °C, su densidad disminuye. Esto es lo que permite que el hielo (agua a 0 °C) flote sobre el agua en estado líquido. Este hecho será muy importante para la vida ya que, en épocas de frío, los lagos y lagunas quedarán congelados pero solo en su superficie, puesto que el agua congelada flota sobre el agua líquida y permite que en la profundidad siga existiendo vida.',
            'Por lo general, solo una pequeña proporción de las moléculas de agua tienden a ionizarse, es decir, uno de los átomos de hidrógeno se separa para combinarse con otra molécula de agua y esto da lugar al ion hidronio (H₃O⁺) y al ion hidroxilo (OH⁻). Como el agua tiene un bajo grado de ionización, es necesario que en los seres vivos existan otros compuestos que actúan como tampón, es decir, mantienen el pH estable.',
            'El agua forma parte de diversas soluciones, entre las que destacan por su importancia biológica las soluciones tampón, porque mantienen constante el pH del medio intracelular y extracelular. Las soluciones tampón están formadas por ácidos débiles o bases débiles, es decir, ácidos y bases que no se ionizan completamente cuando se disuelven en agua.',
          ],
        },
        {
          titulo: '8.3. Funciones biológicas del agua',
          parrafos: [
            'El agua desempeña unas funciones biológicas decisivas en los procesos vitales. Estas funciones se relacionan con las propiedades anteriores.',
            'Distribuye sustancias. Algunas sustancias, como las sales minerales, circulan hacia las partes aéreas de las plantas y se distribuyen por ellas, gracias al desplazamiento del agua por los vasos conductores. La ascensión del agua por los vasos conductores es posible por capilaridad, es decir, por la combinación de la cohesión y la adhesión de las moléculas de agua.',
            'Modera la temperatura interna de los seres vivos. El contenido en agua de los seres vivos amortigua las variaciones de su temperatura interna como consecuencia de cambios bruscos de la temperatura ambiental, o por la producción de calor durante el metabolismo. Este efecto moderador favorece el desarrollo de las reacciones metabólicas. El agua necesita absorber mucho calor para aumentar 1 °C su temperatura. El lento ascenso o descenso de la temperatura del agua se debe a su elevada capacidad calorífica específica.',
            'Permite la vida bajo la superficie helada de lagos y océanos. La capa de hielo que se forma en los lagos y los océanos durante el invierno no impide que, por debajo de ella, en el agua líquida, vivan numerosos organismos. El hielo actúa como aislante térmico y, como no se acumula en el fondo, no supone un obstáculo para el desarrollo de la vida. A temperaturas inferiores a los 4 °C, la densidad del agua disminuye en vez de aumentar. De esta manera, el hielo flota sobre el agua líquida.',
            'Actúa como disolvente. La disolución de sustancias en el citoplasma permite su transporte y su participación en las reacciones metabólicas. Las moléculas de agua tienden a separar numerosos compuestos por su elevada capacidad disolvente.',
            'Participa en diversas reacciones. En las células tienen lugar numerosas reacciones y en algunas de ellas el agua actúa como reactivo. En estas reacciones, denominadas reacciones de hidrólisis, se rompen enlaces de las moléculas por adición de H⁺ o OH⁻.',
          ],
        },
      ],
    },
    {
      numero: 2,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: [
        'El agua (H₂O) es la biomolécula inorgánica más abundante y cumple funciones vitales por sus propiedades fisicoquímicas.',
      ],
      puntosClave: [
        'Composición: 2H + 1O con enlaces covalentes.',
        'Propiedades: cohesión, adhesión, tensión superficial, calor específico, densidad anómala.',
        'Funciones: distribuir sustancias, moderar temperatura, disolvente, hidrólisis.',
        'El hielo flota y permite la vida bajo la superficie helada.',
      ],
    },
  ],

  'sales-minerales': [
    {
      numero: 1,
      titulo: '9. Sales minerales',
      imagenAlt: 'Sales minerales',
      parrafos: [
        'Las sales minerales se encuentran en una cantidad mucho menor que el agua, pero son indispensables para la vida. Pueden ser solubles o insolubles. Las sales solubles forman iones y estos son importantes para muchas funciones celulares como transmitir el impulso nervioso. Las sales insolubles tienen función estructural y crean huesos o conchas en los animales.',
        'Las sales minerales se pueden encontrar en los seres vivos de tres formas: precipitadas, disueltas o asociadas a sustancias orgánicas.',
        'Las sales minerales precipitadas constituyen estructuras sólidas, insolubles, con función esquelética. Por ejemplo: el carbonato cálcico en las conchas de los moluscos, crustáceos, corales y vertebrados; el fosfato cálcico, Ca₃(PO₄)₂, que junto con el carbonato cálcico depositados sobre el colágeno, constituyen los huesos; o la sílice (SiO₂) en los exoesqueletos de las diatomeas y en las gramíneas.',
        'Las sales minerales disueltas se encuentran disociadas en iones. Cationes: Na⁺, K⁺, Ca²⁺ y Mg²⁺. Aniones: Cl⁻, SO₄²⁻, PO₄²⁻, HCO₃⁻, CO₃²⁻ y NO₃⁻.',
        'Las sales minerales asociadas a moléculas orgánicas suelen encontrarse junto a proteínas, como las fosfoproteínas; junto a lípidos, como los fosfolípidos; y junto a glúcidos.',
      ],
    },
    {
      numero: 2,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: [
        'Las sales minerales, en menor cantidad que el agua, son indispensables para funciones estructurales y celulares.',
      ],
      puntosClave: [
        'Solubles: iones (impulso nervioso, osmosis).',
        'Insolubles: huesos y conchas.',
        'Formas: precipitadas, disueltas o asociadas.',
        'Cationes Na⁺, K⁺, Ca²⁺, Mg²⁺; aniones Cl⁻, fosfato, carbonato, etc.',
      ],
    },
  ],

  'biomoleculas-organicas': [
    {
      numero: 1,
      titulo: '10. Biomoléculas orgánicas',
      imagenAlt: 'Biomoléculas orgánicas',
      parrafos: [
        'Junto con el agua y las sales minerales, las biomoléculas orgánicas son los componentes fundamentales de la materia viva. Las biomoléculas orgánicas están formadas principalmente por carbono (C) y tienen funciones muy diversas en los seres vivos: estructurales, energéticas, de control en reacciones metabólicas, etc.',
        'La vida, tal y como la conocemos, está basada en el carbono, y este es el único elemento que sirve como esqueleto de las biomoléculas que conforman a todos los organismos. La principal característica que hace que el carbono sea tan relevante es su configuración electrónica que permite que forme cuatro enlaces covalentes simples muy estables, e igualmente podría crear enlaces dobles e incluso triples. De esta forma, los átomos de carbono pueden crear cadenas lineales, ramificadas o cíclicas muy estables sobre las que se van situando otros grupos funcionales, formados en su mayoría por hidrógeno (H), oxígeno (O) y nitrógeno (N).',
        'Lo que permite que el carbono pueda formar los cuatro enlaces tan estables, es que sus cuatro electrones de valencia se disponen en una configuración electrónica especial que da lugar al carbono excitado (C*).',
        'Configuración electrónica del carbono en su estado normal: C: 1s² 2s² 2p². Configuración electrónica del carbono excitado: C*: 1s² 2s¹ 2px¹ 2py¹ 2pz¹. Gracias a esta configuración, los orbitales del carbono hibridan y pueden formar los distintos enlaces.',
        'Grupos funcionales frecuentes en biomoléculas: hidroxilo (—OH), cetona (—CO—), amina (—NH₂), aldehído (—CHO), ácido carboxílico (—COOH) y amida (—CONH₂).',
        'Las biomoléculas orgánicas son los glúcidos, los lípidos, las proteínas y los ácidos nucleicos. Todas ellas son sustancias basadas en la unión de numerosos átomos de carbono.',
      ],
    },
    {
      numero: 2,
      titulo: 'Para recordar',
      tipo: 'repaso',
      parrafos: [
        'Las biomoléculas orgánicas se basan en el carbono y incluyen glúcidos, lípidos, proteínas y ácidos nucleicos.',
      ],
      puntosClave: [
        'El carbono forma cuatro enlaces covalentes estables.',
        'Cadenas lineales, ramificadas o cíclicas.',
        'Grupos funcionales: OH, CO, NH₂, CHO, COOH…',
        'Cuatro grupos: glúcidos, lípidos, proteínas y ácidos nucleicos.',
      ],
    },
  ],
}
