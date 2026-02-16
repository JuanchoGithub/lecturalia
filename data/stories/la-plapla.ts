
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
        questionText: '¿Qué letras estaba practicando Felipito antes de ver a la Plapla?',
        options: [
          'Abecedarios completos y números largos.',
          'Emes enruladas, eles orejudas y zetas.',
          'Palabras difíciles con muchas tildes.',
          'Nombres de sus compañeros de tercer grado.'
        ],
        correctAnswer: 'Emes enruladas, eles orejudas y zetas.',
      },
      {
        id: 'plapla-lit2',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué juego realizaba la Plapla sobre los renglones del cuaderno?',
        options: [
          'Jugaba a las escondidas entre las hojas.',
          'Jugaba a la rayuela con los renglones.',
          'Jugaba a la mancha con las otras letras.',
          'Jugaba a saltar la soga con el margen.'
        ],
        correctAnswer: 'Jugaba a la rayuela con los renglones.',
      },
      {
        id: 'plapla-lit3',
        category: QuestionCategory.LITERAL,
        questionText: '¿A quiénes llamó la maestra para que vieran a la letra bailarina?',
        options: [
          'Solo a los alumnos de primer grado.',
          'Llamó a los padres de Felipito Tacatún.',
          'No llamó a nadie porque la guardó en una caja.',
          'A todo el mundo, desde el portero hasta los nenes.'
        ],
        correctAnswer: 'A todo el mundo, desde el portero hasta los nenes.',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'plapla-seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿En qué momento exacto Felipito escuchó el grito de "¡Ay!"?',
        options: [
          'Apenas escribió la letra en el cuaderno.',
          'Luego de ponerse el segundo par de anteojos.',
          'Cuando la maestra abrió la cajita secreta.',
          'Mientras corría entusiasmado hacia la escuela.'
        ],
        correctAnswer: 'Luego de ponerse el segundo par de anteojos.',
      },
      {
        id: 'plapla-seq2',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué sucedió inmediatamente después de que la Plapla dijo su nombre?',
        options: [
          'Felipito le preguntó qué debía hacer con ella.',
          'La letra se puso a cantar un vals de tinta.',
          'La maestra le dijo que se había vuelto loco.',
          'Felipito se puso el tercer par de anteojos.'
        ],
        correctAnswer: 'Felipito le preguntó qué debía hacer con ella.',
      },
      {
        id: 'plapla-seq3',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Cuál fue el orden de las reacciones de la maestra?',
        options: [
          'La guardó en la caja, miró el cuaderno y se asustó.',
          'Creyó que Felipito estaba loco, abrió el cuaderno y vio a la Plapla.',
          'Llamó al portero, guardó la letra y felicitó a Felipito.',
          'Abrió el cuaderno, se puso anteojos y borró a la letra.'
        ],
        correctAnswer: 'Creyó que Felipito estaba loco, abrió el cuaderno y vio a la Plapla.',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'plapla-voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'La letra caminaba "muy oronda" por el papel. ¿Qué significa "oronda" aquí?',
        options: [
          'Que caminaba muy rápido para escapar.',
          'Que caminaba muy gorda y de forma lenta.',
          'Que caminaba con mucho orgullo y satisfacción.',
          'Que caminaba con miedo de ser borrada.'
        ],
        correctAnswer: 'Que caminaba con mucho orgullo y satisfacción.',
      },
      {
        id: 'plapla-voc2',
        category: QuestionCategory.VOCABULARY,
        questionText: 'El cuento dice que la Plapla causó mucho "revuelo". ¿Qué es un revuelo?',
        options: [
          'Un gran silencio en toda la escuela.',
          'Un estado de confusión y mucho alboroto.',
          'Un tipo de baile que hacen los porteros.',
          'Un examen muy difícil de geografía.'
        ],
        correctAnswer: 'Un estado de confusión y mucho alboroto.',
      },
      {
        id: 'plapla-voc3',
        category: QuestionCategory.VOCABULARY,
        questionText: 'La Plapla se "despatarraba" toda en la hoja. ¿Qué hacía la letra?',
        options: [
          'Se quedaba muy flaquita y derechita.',
          'Se abría de piernas de forma desordenada.',
          'Se ocultaba bajo los otros renglones.',
          'Cambiaba de color verde a color rojo.'
        ],
        correctAnswer: 'Se abría de piernas de forma desordenada.',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'plapla-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es el tema central que propone María Elena Walsh en este cuento?',
        options: [
          'Los peligros de no estudiar para los exámenes.',
          'La magia que puede aparecer en medio de lo cotidiano.',
          'La forma correcta de usar tres pares de anteojos.',
          'Cómo organizar los turnos para mirar un cuaderno.'
        ],
        correctAnswer: 'La magia que puede aparecer en medio de lo cotidiano.',
      },
      {
        id: 'plapla-main2',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Por qué la Plapla ya no figura oficialmente en el Abecedario?',
        options: [
          'Porque era una letra que no servía para escribir.',
          'Porque distraía a los alumnos y nadie estudiaba.',
          'Porque Felipito se olvidó de cómo dibujarla bien.',
          'Porque la maestra perdió la llave de la cajita.'
        ],
        correctAnswer: 'Porque distraía a los alumnos y nadie estudiaba.',
      },
      {
        id: 'plapla-main3',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Qué crítica hace la autora al decir que las letras no deben bailar?',
        options: [
          'Que las letras bailan muy mal y es mejor que no lo hagan.',
          'Que las reglas estrictas a veces nos quitan la diversión.',
          'Que Felipito debería haber escrito letras más prolijas.',
          'Que los maestros necesitan más cajas para guardar letras.'
        ],
        correctAnswer: 'Que las reglas estrictas a veces nos quitan la diversión.',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'plapla-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué Felipito se puso tres pares de anteojos uno sobre otro?',
        options: [
          'Porque quería asustar a la letra con su mirada.',
          'Porque estaba jugando a disfrazarse de abuelo.',
          'Porque estaba tan asombrado que quería estar seguro de lo que veía.',
          'Porque los anteojos que tenía estaban muy viejos y rotos.'
        ],
        correctAnswer: 'Porque estaba tan asombrado que quería estar seguro de lo que veía.',
      },
      {
        id: 'plapla-inf2',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Qué sintió Felipito cuando la letra le contestó "Soy una Plapla"?',
        options: [
          'Mucha alegría porque ya no tenía que estudiar.',
          'Una mezcla de susto e incredulidad por el misterio.',
          'Enojo porque la letra no lo dejaba terminar los deberes.',
          'Confusión porque pensó que era una araña real.'
        ],
        correctAnswer: 'Una mezcla de susto e incredulidad por el misterio.',
      },
      {
        id: 'plapla-inf3',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué la maestra cuida que "nadie se entere" de que guarda Plaplas?',
        options: [
          'Porque las Plaplas son muy valiosas y quiere venderlas.',
          'Para que la escuela vuelva a ser un lugar ordenado y de estudio.',
          'Porque tiene miedo de que el portero le robe la caja.',
          'Porque la Plapla le pidió que guardara el secreto para siempre.'
        ],
        correctAnswer: 'Para que la escuela vuelva a ser un lugar ordenado y de estudio.',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'plapla-char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué rasgo define mejor la personalidad de Felipito?',
        options: [
          'Un niño muy aburrido que odia la escuela.',
          'Un pequeño curioso y muy observador.',
          'Un alumno miedoso que no se anima a hablar.',
          'Un chico distraído que siempre pierde los cuadernos.'
        ],
        correctAnswer: 'Un pequeño curioso y muy observador.',
      },
      {
        id: 'plapla-char2',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo es la actitud de la Plapla frente a Felipito?',
        options: [
          'Miedosa y trata de esconderse en el estuche.',
          'Enojada porque Felipito la mira con anteojos.',
          'Natural, tranquila y un poco burlona.',
          'Triste porque no tiene amigos en el abecedario.'
        ],
        correctAnswer: 'Natural, tranquila y un poco burlona.',
      },
      {
        id: 'plapla-char3',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo cambia la opinión de la maestra sobre Felipito?',
        options: [
          'Pasa de creer que está loco a estar muy sorprendida.',
          'Pasa de quererlo mucho a ponerle una mala nota.',
          'Pasa de estar contenta a estar muy aburrida.',
          'Nunca cambia de opinión y lo sigue retando.'
        ],
        correctAnswer: 'Pasa de creer que está loco a estar muy sorprendida.',
      },
    ],
  },
};
