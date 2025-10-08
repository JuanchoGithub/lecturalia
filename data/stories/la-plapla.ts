import { Story, QuestionCategory } from '../../types';

export const laPlapla: Story = {
  id: 'la-plapla',
  title: 'La Plapla',
  author: 'María Elena Walsh',
  coverImage: 'https://2.bp.blogspot.com/-ZIF-o649VXg/WDQlicQjAAI/AAAAAAAAEKc/CucU5wa9c4MFkQ4wJGpt7BiiXx1ZhF0vQCEw/s1600/felipito-tacatc3ban.jpg',
  content: `
Felipito Tacatún estaba haciendo los deberes. Inclinado sobre el cuaderno y sacando un poquito la lengua, escribía enruladas “emes”, orejudas “eles” y elegantísimas “zetas”.

De pronto vio algo muy raro sobre el papel.
–¿Qué es esto?, se preguntó Felipito, que era un poco miope, y se puso un par de anteojos.

Una de las letras que había escrito se despatarraba toda y se ponía a caminar muy oronda por el cuaderno. Felipito no lo podía creer, y sin embargo era cierto: la letra, como una araña de tinta, patinaba muy contenta por la página.

Felipito se puso otro par de anteojos para mirarla mejor. Cuando la hubo mirado bien, cerró el cuaderno asustado y oyó una vocecita que decía:
–¡Ay!

Volvió a abrir el cuaderno valientemente y se puso otro par de anteojos y ya van tres. Pegando la nariz al papel preguntó:
–¿Quién es usted señorita?

Y la letra caminadora contestó:
–Soy una Plapla.

–¿Una Plapla?, preguntó Felipito asustadísimo, ¿qué es eso?
–¿No acabo de decirte? Una Plapla soy yo.
–Pero la maestra nunca me dijo que existiera una letra llamada Plapla, y mucho menos que caminara por el cuaderno.
–Ahora ya lo sabes. Has escrito una Plapla.
–¿Y qué hago con la Plapla?
–Mirarla.
–Sí, la estoy mirando pero... ¿y después?
–Después, nada.

Y la Plapla siguió patinando sobre el cuaderno mientras cantaba un vals con su voz chiquita y de tinta.

Al día siguiente, Felipito corrió a mostrarle el cuaderno a la maestra, gritando entusiasmado:
–¡Señorita, mire la Plapla, mire la Plapla!

La maestra creyó que Felipito se había vuelto loco. Pero no. Abrió el cuaderno, y allí estaba la Plapla bailando y patinando por la página y jugando a la rayuela con los renglones.

Como podrán imaginarse, la Plapla causó mucho revuelo en el colegio. Ese día nadie estudió. Todo el mundo, por riguroso turno, desde el portero hasta los nenes de primer grado, se dedicaron a contemplar a la Plapla.

Tan grande fue el bochinche y la falta de estudio, que desde ese día la Plapla no figura en el Abecedario. Cada vez que un chico, por casualidad, igual que Felipito, escribe una Plapla cantante y patinadora la maestra la guarda en una cajita y cuida muy bien de que nadie se entere.

Qué le vamos a hacer, así es la vida. Las letras no han sido hechas para bailar, sino para quedarse quietas una al lado de la otra, ¿no?
  `,
  wordCount: 304,
  level: '3er Grado (Nivel L)',
  questions: {
    [QuestionCategory.LITERAL]: [
      {
        id: 'plapla-lit1',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué estaba haciendo Felipito Tacatún cuando descubrió a la Plapla?',
        options: ['Jugando en el patio', 'Leyendo un libro', 'Haciendo los deberes', 'Dibujando'],
        correctAnswer: 'Haciendo los deberes',
      },
      {
        id: 'plapla-lit2',
        category: QuestionCategory.LITERAL,
        questionText: '¿Cómo describió Felipito a la letra que caminaba?',
        options: ['Como un pájaro de tinta', 'Como una araña de tinta', 'Como una flor de tinta', 'Como un punto de tinta'],
        correctAnswer: 'Como una araña de tinta',
      },
      {
        id: 'plapla-lit3',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué hace la maestra ahora cada vez que un niño escribe una Plapla?',
        options: ['La borra inmediatamente', 'La guarda en una cajita', 'La muestra a toda la clase', 'Le pone una mala nota al niño'],
        correctAnswer: 'La guarda en una cajita',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
        {
          id: 'plapla-seq1',
          category: QuestionCategory.SEQUENCING,
          questionText: '¿Qué hizo Felipito justo después de ver que la letra se movía?',
          options: ['Cerró el cuaderno', 'Le gritó a la letra', 'Se puso un par de anteojos', 'Llamó a su mamá'],
          correctAnswer: 'Se puso un par de anteojos',
        },
        {
          id: 'plapla-seq2',
          category: QuestionCategory.SEQUENCING,
          questionText: '¿Qué pasó en el colegio el día que Felipito mostró la Plapla?',
          options: ['Todos los niños se pusieron a escribir Plaplas', 'La maestra castigó a Felipito', 'Nadie estudió y todos se dedicaron a mirar a la Plapla', 'La Plapla se escapó del cuaderno'],
          correctAnswer: 'Nadie estudió y todos se dedicaron a mirar a la Plapla',
        },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'plapla-voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'En la frase "se ponía a caminar muy oronda por el cuaderno", ¿qué significa "oronda"?',
        options: ['Con mucho miedo', 'Muy rápido', 'Satisfecha y orgullosa de sí misma', 'Tropezándose'],
        correctAnswer: 'Satisfecha y orgullosa de sí misma',
      },
      {
        id: 'plapla-voc2',
        category: QuestionCategory.VOCABULARY,
        questionText: 'La historia dice que la Plapla causó mucho "revuelo" en el colegio. ¿Qué es "revuelo"?',
        options: ['Silencio', 'Aburrimiento', 'Agitación o alboroto', 'Alegría'],
        correctAnswer: 'Agitación o alboroto',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'plapla-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es el tema principal de esta historia?',
        options: ['La importancia de hacer los deberes', 'El descubrimiento de algo mágico e inesperado en la vida cotidiana', 'Los diferentes tipos de letras', 'Cómo se comportan los niños en la escuela'],
        correctAnswer: 'El descubrimiento de algo mágico e inesperado en la vida cotidiana',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'plapla-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué crees que la Plapla ya no figura en el Abecedario?',
        options: ['Porque era una letra muy difícil de escribir', 'Porque causaba mucha distracción y desorden en las escuelas', 'Porque a las maestras no les gustaba', 'Porque se fue a vivir a otro país'],
        correctAnswer: 'Porque causaba mucha distracción y desorden en las escuelas',
      },
      {
        id: 'plapla-inf2',
        category: QuestionCategory.INFERENCE,
        questionText: 'Al final, el cuento pregunta: "Las letras no han sido hechas para bailar... ¿no?". ¿Qué te parece que piensa la autora?',
        options: ['Que las letras solo sirven para escribir', 'Que está de acuerdo con las maestras', 'Que quizás las letras sí podrían ser para bailar y jugar', 'Que las letras son aburridas'],
        correctAnswer: 'Que quizás las letras sí podrían ser para bailar y jugar',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'plapla-char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo describirías a Felipito?',
        options: ['Tímido y perezoso', 'Curioso y entusiasta', 'Gruñón y serio', 'Distraído y olvidadizo'],
        correctAnswer: 'Curioso y entusiasta',
      },
      {
        id: 'plapla-char2',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo es la personalidad de la Plapla?',
        options: ['Tímida y callada', 'Enojada y antipática', 'Alegre, juguetona y un poco presumida', 'Triste y solitaria'],
        correctAnswer: 'Alegre, juguetona y un poco presumida',
      },
    ],
  },
};
