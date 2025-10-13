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
        questionText: '¿Por qué se manchó la blusa de Zulema Ordoñez?',
        options: ['Se le cayó el café encima', 'Un colectivo la salpicó con agua barrosa', 'Se tropezó y cayó en un charco', 'Un niño le tiró pintura'],
        correctAnswer: 'Un colectivo la salpicó con agua barrosa',
      },
      {
        id: 'jalm-lit2',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué hizo Zulema para ocultar la mancha?',
        options: ['Se fue a su casa a cambiarse', 'Faltó al trabajo', 'Compró un abrigo y se lo puso a pesar del calor', 'Intentó limpiar la mancha con agua'],
        correctAnswer: 'Compró un abrigo y se lo puso a pesar del calor',
      },
      {
        id: 'jalm-lit3',
        category: QuestionCategory.LITERAL,
        questionText: '¿Por qué Zulema no fue a su casa a cambiarse la blusa?',
        options: ['Porque no tenía otra blusa limpia', 'Porque la haría llegar tarde al trabajo', 'Porque su casa estaba muy lejos', 'Porque no le importaba la mancha'],
        correctAnswer: 'Porque la haría llegar tarde al trabajo',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'jalm-seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué pasó justo después de que Zulema les dijera a sus compañeros que sentía mucho frío?',
        options: ['Se sacó el abrigo', 'Se desmayó', 'Trató de imaginarse que estaba en el Polo Sur', 'El jefe la retó'],
        correctAnswer: 'Trató de imaginarse que estaba en el Polo Sur',
      },
      {
        id: 'jalm-seq2',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué pensó Zulema justo antes de decidir sacarse el abrigo?',
        options: ['"Qué calor que hace"', '"Mis compañeros se van a reír"', '"Y si me ven con la blusa manchada, ¿qué?"', '"Debería haberme ido a casa"'],
        correctAnswer: '"Y si me ven con la blusa manchada, ¿qué?"',
      },
      {
        id: 'jalm-seq3',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué hizo Zulema después de comprar el abrigo?',
        options: ['Se fue a su casa', 'Se lo puso, lo abotonó y fue a la oficina', 'Lo guardó en su cartera', 'Volvió a la tienda a devolverlo'],
        correctAnswer: 'Se lo puso, lo abotonó y fue a la oficina',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'jalm-voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'En la frase "tener un aspecto impecable", ¿qué significa "impecable"?',
        options: ['Desordenado', 'Muy colorido', 'Perfecto, sin ningún defecto', 'Cómodo'],
        correctAnswer: 'Perfecto, sin ningún defecto',
      },
      {
        id: 'jalm-voc2',
        category: QuestionCategory.VOCABULARY,
        questionText: 'Cuando Zulema se sintió "sofocada", ¿cómo se sentía?',
        options: ['Con mucho frío', 'Muy feliz', 'Como si le faltara el aire', 'Muy triste'],
        correctAnswer: 'Como si le faltara el aire',
      },
      {
        id: 'jalm-voc3',
        category: QuestionCategory.VOCABULARY,
        questionText: 'La blusa de Zulema era "inmaculadamente" blanca. ¿Qué significa "inmaculadamente"?',
        options: ['Casi blanca', 'De un color apagado', 'Perfectamente limpia, sin ninguna mancha', 'Un poco sucia'],
        correctAnswer: 'Perfectamente limpia, sin ninguna mancha',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'jalm-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es la lección principal de la historia?',
        options: ['Hay que tener cuidado con los colectivos', 'No hay que preocuparse tanto por las pequeñas imperfecciones o accidentes, porque a los demás no les importan tanto como uno cree.', 'Siempre hay que llevar un abrigo extra.', 'Es malo llegar tarde al trabajo.'],
        correctAnswer: 'No hay que preocuparse tanto por las pequeñas imperfecciones o accidentes, porque a los demás no les importan tanto como uno cree.',
      },
      {
        id: 'jalm-main2',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es el problema principal de Zulema en la historia?',
        options: ['El calor del verano', 'Su excesiva preocupación por tener una apariencia perfecta', 'Tener que ir a trabajar', 'El conductor del colectivo'],
        correctAnswer: 'Su excesiva preocupación por tener una apariencia perfecta',
      },
      {
        id: 'jalm-main3',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Qué descubre Zulema al final de la historia?',
        options: ['Que a nadie le gustó su abrigo', 'Que su jefe estaba enojado', 'Que su pequeña mancha no era importante para nadie más que para ella', 'Que debería haber faltado al trabajo'],
        correctAnswer: 'Que su pequeña mancha no era importante para nadie más que para ella',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'jalm-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué prefirió "cocinarse bajo el abrigo" antes que mostrar la mancha?',
        options: ['Porque realmente tenía frío.', 'Porque le daba mucha vergüenza y le importaba demasiado su apariencia.', 'Porque le gustaba mucho el abrigo nuevo.', 'Porque sus compañeros se burlan de ella.'],
        correctAnswer: 'Porque le daba mucha vergüenza y le importaba demasiado su apariencia.',
      },
      {
        id: 'jalm-inf2',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué sus compañeros la miraron extrañados?',
        options: ['Porque llegó tarde', 'Porque estaba muy transpirada', 'Porque era verano, hacía mucho calor y ella llevaba puesto un abrigo', 'Porque estaba enojada'],
        correctAnswer: 'Porque era verano, hacía mucho calor y ella llevaba puesto un abrigo',
      },
      {
        id: 'jalm-inf3',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Qué significa la última frase "Y lo que es más importante aún, el mundo siguió andando"?',
        options: ['Que la Tierra siguió girando', 'Que su problema era tan pequeño que no afectó en nada el curso normal de las cosas', 'Que todos en la oficina siguieron caminando', 'Que Zulema decidió ir a caminar'],
        correctAnswer: 'Que su problema era tan pequeño que no afectó en nada el curso normal de las cosas',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'jalm-char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo es Zulema al principio de la historia?',
        options: ['Relajada y despreocupada', 'Muy preocupada por la puntualidad, el orden y la apariencia', 'Alegre y divertida', 'Triste y solitaria'],
        correctAnswer: 'Muy preocupada por la puntualidad, el orden y la apariencia',
      },
      {
        id: 'jalm-char2',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo reaccionaron los compañeros de Zulema cuando se sacó el abrigo?',
        options: ['Se rieron de la mancha', 'Se preocuparon por ella', 'No le prestaron atención a la mancha', 'Le ofrecieron una blusa limpia'],
        correctAnswer: 'No le prestaron atención a la mancha',
      },
      {
        id: 'jalm-char3',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué cambio de actitud tiene Zulema al final?',
        options: ['Se vuelve más descuidada', 'Decide no ir más a trabajar', 'Pasa de estar muy preocupada por la opinión de los demás a darle menos importancia', 'Se enoja con sus compañeros'],
        correctAnswer: 'Pasa de estar muy preocupada por la opinión de los demás a darle menos importancia',
      },
    ],
  },
};
