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
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'jalm-seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué pasó justo después de que Zulema les dijera a sus compañeros que sentía mucho frío?',
        options: ['Se sacó el abrigo', 'Se desmayó', 'Trató de imaginarse que estaba en el Polo Sur', 'El jefe la retó'],
        correctAnswer: 'Trató de imaginarse que estaba en el Polo Sur',
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
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'jalm-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es la lección principal de la historia?',
        options: ['Hay que tener cuidado con los colectivos', 'No hay que preocuparse tanto por las pequeñas imperfecciones o accidentes, porque a los demás no les importan tanto como uno cree.', 'Siempre hay que llevar un abrigo extra.', 'Es malo llegar tarde al trabajo.'],
        correctAnswer: 'No hay que preocuparse tanto por las pequeñas imperfecciones o accidentes, porque a los demás no les importan tanto como uno cree.',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'jalm-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué Zulema prefirió "cocinarse bajo el abrigo" antes que mostrar la mancha?',
        options: ['Porque realmente tenía frío.', 'Porque le daba mucha vergüenza y le importaba demasiado su apariencia.', 'Porque le gustaba mucho el abrigo nuevo.', 'Porque sus compañeros se burlan de ella.'],
        correctAnswer: 'Porque le daba mucha vergüenza y le importaba demasiado su apariencia.',
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
    ],
  },
};
