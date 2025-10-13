
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
        {
          id: 'plapla-seq3',
          category: QuestionCategory.SEQUENCING,
          questionText: '¿Qué hizo Felipito después de hablar con la Plapla y escucharla cantar?',
          options: ['La guardó en una caja', 'La borró con una goma', 'La dejó en el cuaderno y al día siguiente corrió a mostrársela a la maestra', 'Se olvidó de ella'],
          correctAnswer: 'La dejó en el cuaderno y al día siguiente corrió a mostrársela a la maestra',
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
      {
        id: 'plapla-voc3',
        category: QuestionCategory.VOCABULARY,
        questionText: 'El cuento dice que hubo un gran "bochinche" en el colegio. ¿Qué es un "bochinche"?',
        options: ['Un examen sorpresa', 'Una clase de música', 'Mucho ruido, desorden y alboroto', 'Un silencio absoluto'],
        correctAnswer: 'Mucho ruido, desorden y alboroto',
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
      {
        id: 'plapla-main2',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Por qué se decide que la Plapla no figure en el abecedario?',
        options: ['Porque era muy fea', 'Porque causaba desorden y distraía del estudio', 'Porque no sabía cantar bien', 'Porque era muy tímida'],
        correctAnswer: 'Porque causaba desorden y distraía del estudio',
      },
      {
        id: 'plapla-main3',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Qué nos quiere decir la última frase del cuento: "Las letras no han sido hechas para bailar, sino para quedarse quietas una al lado de la otra, ¿no?"?',
        options: ['Que las letras no deben moverse nunca', 'Que es una regla muy importante de la escritura', 'Es una pregunta irónica que critica la idea de que todo debe ser rígido y sin diversión', 'Que bailar es malo para las letras'],
        correctAnswer: 'Es una pregunta irónica que critica la idea de que todo debe ser rígido y sin diversión',
      },
    ],
    [QuestionCategory.INFERENCE]: [
        {
            id: 'plapla-inf1',
            category: QuestionCategory.INFERENCE,
            questionText: '¿Por qué Felipito se puso tres pares de anteojos?',
            options: ['Porque le gustaba cómo se veía', 'Porque no podía creer lo que estaba viendo y quería asegurarse', 'Porque sus anteojos no funcionaban bien', 'Porque era parte de un juego'],
            correctAnswer: 'Porque no podía creer lo que estaba viendo y quería asegurarse',
        },
        {
            id: 'plapla-inf2',
            category: QuestionCategory.INFERENCE,
            questionText: '¿Por qué la maestra guarda las Plaplas en una cajita en secreto?',
            options: ['Porque las colecciona', 'Para evitar que se cause otro "bochinche" y los niños dejen de estudiar', 'Porque son valiosas', 'Para que no se escapen'],
            correctAnswer: 'Para evitar que se cause otro "bochinche" y los niños dejen de estudiar',
        },
        {
            id: 'plapla-inf3',
            category: QuestionCategory.INFERENCE,
            questionText: '¿Qué nos enseña esta historia sobre la imaginación y las reglas?',
            options: ['Que siempre hay que seguir las reglas', 'Que la imaginación a veces choca con las reglas del mundo adulto', 'Que la escuela es un lugar aburrido', 'Que las letras no son importantes'],
            correctAnswer: 'Que la imaginación a veces choca con las reglas del mundo adulto',
        },
    ],
    [QuestionCategory.CHARACTER]: [
        {
            id: 'plapla-char1',
            category: QuestionCategory.CHARACTER,
            questionText: '¿Cómo es Felipito Tacatún?',
            options: ['Es un niño que no le gusta hacer los deberes', 'Es un niño curioso y entusiasta', 'Es un niño miedoso que no habla', 'Es un niño que se porta mal en clase'],
            correctAnswer: 'Es un niño curioso y entusiasta',
        },
        {
            id: 'plapla-char2',
            category: QuestionCategory.CHARACTER,
            questionText: '¿Qué dos palabras describen mejor a la Plapla?',
            options: ['Tímida y silenciosa', 'Enojada y gruñona', 'Alegre y juguetona', 'Triste y aburrida'],
            correctAnswer: 'Alegre y juguetona',
        },
        {
            id: 'plapla-char3',
            category: QuestionCategory.CHARACTER,
            questionText: '¿Cómo reacciona la maestra ante la Plapla?',
            options: ['Se enoja y la borra', 'No le cree a Felipito', 'Primero se sorprende y luego decide controlarla para mantener el orden', 'Se pone a bailar con la Plapla'],
            correctAnswer: 'Primero se sorprende y luego decide controlarla para mantener el orden',
        },
    ],
  },
};
