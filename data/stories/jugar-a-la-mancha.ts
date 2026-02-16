
import { Story, QuestionCategory } from '../../types';

export const jugarALaMancha: Story = {
  id: 'jugar-a-la-mancha',
  title: 'Jugar a la mancha',
  author: 'Adela Basch',
  coverImage: `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg width="600" height="400" viewBox="0 0 100 66.67" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#FFBE0B" /><g transform="rotate(76) translate(8)"><path d="M 0 0 L 50 0 L 50 50 L 0 50 Z" fill="#F7F9FB" opacity="0.5" transform="translate(0, 0)"/><path d="M 50 16 L 100 16 L 100 66 L 50 66 Z" fill="#FB5607" opacity="0.5" transform="translate(0, 0)"/></g></svg>')}`,
  content: `
A Zulema Ordoñez le gustaba llegar puntual a todas partes. También le gustaba tener siempre todo muy ordenado. Y sobre todo, tener un aspecto impecable. Una simple hilacha asomada en la blusa era capaz de sacarla de las casillas.
Un día, cuando estaba por llegar a su trabajo, el conductor de un colectivo se vio obligado a hacer una rápida maniobra para esquivar a un perro. Y al hacerlo, pasó por un charco de agua. Las ruedas se mojaron y salpicaron a Zulema Ordoñez con un poco de agua barrosa. Y su blusa, que era inmaculadamente blanca, se manchó.
Zulema pensó por un momento en la posibilidad de ir a su casa a cambiarse. Pero eso la haría llegar tarde, y ella nunca llegaba tarde. También pensó en faltar al trabajo, pero justo para ese día el jefe le había encargado una tarea muy importante. No sabía qué hacer, cuando de pronto vio una tienda que vendía ropa de abrigo a precios de oferta. Porque era verano y hacía mucho calor.
Entró a la tienda y compró un abrigo, se lo puso y se lo abotonó para que ocultara por completo la blusa manchada.
Llegó a la oficina donde trabajaba y, por supuesto, permaneció con el abrigo puesto. Sus compañeros la miraron extrañados.
—Zulema —preguntaron— ¿qué te pasa? ¿No tenés calor?
—No, no —se apresuró a contestar mientras transpiraba a más no poder—, no sé qué me pasa pero siento mucho frío.
La idea de que la vieran con una blusa manchada le resulta insoportable. Prefería cocinarse bajo el abrigo que mostrar la imagen de una persona descuidada.
Pero el calor era muy grande. Zulema trató de imaginarse que estaba dentro de una heladera e intentó tiritar. Pero no resultó. Recordó una película que había visto por televisión en la que se mostraban paisajes del Polo Sur y quiso convencerse de que estaba allí. Pero su transpiración iba en aumento y se empezaba a sentir sofocada.
Entonces pensó: “Y si me ven con la blusa manchada, ¿qué?”. Al principio era un pensamiento débil, pero fue creciendo al mismo ritmo con que crecía la sensación de asfixia que le producía el abrigo.
Repentinamente, Zulema se desprendió los botones del abrigo y se lo sacó. Para su asombro, a nadie le llamó la atención la mancha, nadie le hizo un solo comentario. Y ella siguió trabajando. Y lo que es más importante aún, el mundo siguió andando.
  `,
  wordCount: 388,
  level: '3er Grado (Nivel M)',
  questions: {
    [QuestionCategory.LITERAL]: [
      {
        id: 'jalm-lit1',
        category: QuestionCategory.LITERAL,
        questionText: '¿Cuál fue la causa exacta por la que se manchó la ropa de Zulema?',
        options: [
          'Tropezó con un perro y cayó en el barro.',
          'Un colectivo salpicó agua de un charco.',
          'Se le volcó un café durante la merienda.',
          'Unos niños jugaban a la mancha con pintura.'
        ],
        correctAnswer: 'Un colectivo salpicó agua de un charco.',
      },
      {
        id: 'jalm-lit2',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué objeto compró Zulema para tapar la suciedad de su blusa?',
        options: [
          'Una bufanda de lana muy colorida.',
          'Un abrigo abotonado de oferta.',
          'Una blusa nueva de seda blanca.',
          'Un chaleco liviano para el verano.'
        ],
        correctAnswer: 'Un abrigo abotonado de oferta.',
      },
      {
        id: 'jalm-lit3',
        category: QuestionCategory.LITERAL,
        questionText: '¿En qué estación del año ocurre esta historia?',
        options: [
          'En el invierno, por eso había abrigos.',
          'En el otoño, cuando llueve mucho.',
          'En el verano, por eso hacía calor.',
          'En la primavera, por el polen blanco.'
        ],
        correctAnswer: 'En el verano, por eso hacía calor.',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'jalm-seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué hizo Zulema inmediatamente después de que la salpicara el agua?',
        options: [
          'Entró a la oficina y saludó a todos.',
          'Buscó una solución para no llegar tarde.',
          'Se puso a tiritar de frío en la calle.',
          'Llamó a su jefe para avisar del retraso.'
        ],
        correctAnswer: 'Buscó una solución para no llegar tarde.',
      },
      {
        id: 'jalm-seq2',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué ocurrió justo después de que Zulema intentara imaginarse el Polo Sur?',
        options: [
          'Empezó a sentir una sensación de asfixia.',
          'Sus compañeros dejaron de mirarla.',
          'El abrigo se le desprendió por el calor.',
          'Se fue a su casa a buscar otra blusa.'
        ],
        correctAnswer: 'Empezó a sentir una sensación de asfixia.',
      },
      {
        id: 'jalm-seq3',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Cuál es el orden de los pensamientos de Zulema en la oficina?',
        options: [
          'Mentir sobre el frío, imaginar heladeras y finalmente sacarse el abrigo.',
          'Sacarse el abrigo, tiritar de frío y pedirle perdón a su jefe.',
          'Pedir ayuda a sus compañeros, ir a comprar ropa y trabajar mucho.',
          'Imaginar el Polo Sur, comprar un abrigo y ensuciarse con el barro.'
        ],
        correctAnswer: 'Mentir sobre el frío, imaginar heladeras y finalmente sacarse el abrigo.',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'jalm-voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'A Zulema le importaba tener un aspecto "impecable". ¿Qué significa?',
        options: [
          'Que su ropa fuera siempre de colores vivos.',
          'Que estuviera perfectamente limpia y prolija.',
          'Que fuera ropa de abrigo muy costosa.',
          'Que tuviera muchas hilachas divertidas.'
        ],
        correctAnswer: 'Que estuviera perfectamente limpia y prolija.',
      },
      {
        id: 'jalm-voc2',
        category: QuestionCategory.VOCABULARY,
        questionText: 'En el cuento, Zulema se siente "sofocada". ¿Cómo se siente?',
        options: [
          'Con mucho miedo por el jefe.',
          'Con una gran sensación de calor y falta de aire.',
          'Con un cansancio extremo por tanto caminar.',
          'Con mucha alegría por su abrigo nuevo.'
        ],
        correctAnswer: 'Con una gran sensación de calor y falta de aire.',
      },
      {
        id: 'jalm-voc3',
        category: QuestionCategory.VOCABULARY,
        questionText: 'La blusa era "inmaculadamente" blanca. ¿Qué quiere decir esto?',
        options: [
          'Que tenía algunas manchas de fábrica.',
          'Que estaba totalmente limpia, sin una mancha.',
          'Que era de un color blanco muy antiguo.',
          'Que se mojaba muy fácil con el agua.'
        ],
        correctAnswer: 'Que estaba totalmente limpia, sin una mancha.',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'jalm-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es el conflicto principal que enfrenta Zulema Ordoñez?',
        options: [
          'El peligro de los colectivos que circulan por su barrio.',
          'Su excesiva preocupación por lo que los demás piensen de ella.',
          'La falta de ropa de verano en las tiendas de la ciudad.',
          'El enojo de su jefe por las tareas que no terminó.'
        ],
        correctAnswer: 'Su excesiva preocupación por lo que los demás piensen de ella.',
      },
      {
        id: 'jalm-main2',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Qué lección importante descubre la protagonista al final?',
        options: [
          'Que es mejor llegar tarde que estar mal vestida.',
          'Que a la gente no le interesan tanto sus pequeños errores.',
          'Que nunca hay que comprar ropa de abrigo de oferta.',
          'Que los colectiveros deben manejar con más cuidado.'
        ],
        correctAnswer: 'Que a la gente no le interesan tanto sus pequeños errores.',
      },
      {
        id: 'jalm-main3',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Por qué el título del cuento es "Jugar a la mancha"?',
        options: [
          'Porque los personajes juegan en el recreo de la oficina.',
          'Por la relación entre la mancha física y el juego de ocultarla.',
          'Porque Zulema tiene que correr para alcanzar el colectivo.',
          'Porque es el nombre de la tienda donde compró el abrigo.'
        ],
        correctAnswer: 'Por la relación entre la mancha física y el juego de ocultarla.',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'jalm-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué Zulema prefirió "cocinarse" bajo el abrigo?',
        options: [
          'Porque realmente pensaba que el invierno había llegado.',
          'Porque la vergüenza le pesaba más que el calor físico.',
          'Porque el aire acondicionado de la oficina estaba roto.',
          'Porque quería demostrar que su abrigo era muy fino.'
        ],
        correctAnswer: 'Porque la vergüenza le pesaba más que el calor físico.',
      },
      {
        id: 'jalm-inf2',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Qué pensaron probablemente sus compañeros al verla llegar?',
        options: [
          'Que estaba muy elegante con su ropa nueva.',
          'Que su comportamiento era extraño debido al clima.',
          'Que se había olvidado de que era verano.',
          'Que estaba ocultando un secreto muy importante.'
        ],
        correctAnswer: 'Que su comportamiento era extraño debido al clima.',
      },
      {
        id: 'jalm-inf3',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Qué significa que "el mundo siguió andando" al final?',
        options: [
          'Que la gente en la calle continuó caminando.',
          'Que su problema no era tan grave como ella imaginaba.',
          'Que el reloj de la oficina nunca se detuvo.',
          'Que el colectivo volvió a pasar por la esquina.'
        ],
        correctAnswer: 'Que su problema no era tan grave como ella imaginaba.',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'jalm-char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo se describe la personalidad de Zulema al inicio?',
        options: [
          'Como una mujer muy distraída y siempre alegre.',
          'Como alguien extremadamente ordenada y puntual.',
          'Como una persona a la que no le importa su aspecto.',
          'Como una trabajadora que siempre llega tarde.'
        ],
        correctAnswer: 'Como alguien extremadamente ordenada y puntual.',
      },
      {
        id: 'jalm-char2',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo reacciona Zulema cuando la salpican con barro?',
        options: [
          'Se pone a gritarle al conductor del colectivo.',
          'Entra en un estado de mucha preocupación y duda.',
          'Se ríe de su mala suerte y sigue caminando.',
          'Limpia su blusa con un pañuelo de seda blanca.'
        ],
        correctAnswer: 'Entra en un estado de mucha preocupación y duda.',
      },
      {
        id: 'jalm-char3',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué demuestra el cambio de actitud final de la protagonista?',
        options: [
          'Que aprendió a valorar más su propia comodidad que la opinión ajena.',
          'Que decidió que ya no le interesaba trabajar más allí.',
          'Que se volvió una persona descuidada y muy sucia.',
          'Que ahora prefiere llegar tarde pero bien cambiada.'
        ],
        correctAnswer: 'Que aprendió a valorar más su propia comodidad que la opinión ajena.',
      },
    ],
  },
};
