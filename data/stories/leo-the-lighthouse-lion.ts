
import { Story, QuestionCategory } from '../../types';

export const leoTheLighthouseLion: Story = {
  id: 'leo-the-lighthouse-lion',
  title: 'Leo, el León del Faro',
  author: 'Fábula Finch',
  coverImage: 'https://picsum.photos/seed/leo-lion/600/400',
  content: `
Leo no era un león cualquiera; era el guardián de un faro. Su hogar era una torre alta a rayas en el borde de una isla rocosa. Cada noche, mientras el sol se hundía bajo las olas, Leo subía la escalera de caracol para encender la gran lámpara. Su trabajo era el más importante de la isla: mantener a los barcos a salvo de las rocas afiladas.

Una tarde, se desató una fuerte tormenta. El viento aullaba y las olas rompían contra el faro, lanzando un rocío salado por el aire. Leo, con su melena esponjosa y sus patas firmes, no tenía miedo. Pulió el cristal de la lámpara hasta que brilló, asegurándose de que su luz fuera fuerte.

De repente, a través del rugido del viento, escuchó una bocina débil. Miró por la ventana y vio un pequeño barco sacudido por las olas gigantes. ¡Estaba perdido y se dirigía directamente hacia las rocas! Leo supo que tenía que actuar rápido. Respiró hondo y soltó el rugido más fuerte y valiente que pudo. El rugido viajó sobre el agua, un sonido guía en la tormenta.

Luego, enfocó su luz, haciéndola brillar directamente hacia el barco, mostrándole un camino seguro alrededor de la isla. El capitán del barco vio la luz brillante y escuchó el poderoso rugido. Dirigió el barco con cuidado, siguiendo el camino que Leo le había mostrado.

Cuando la tormenta finalmente pasó y salió el sol de la mañana, el barquito estaba a salvo en el puerto tranquilo. El capitán remó hasta la isla. "¡Gracias, león valiente!", le gritó al faro. "¡Tu luz y tu rugido nos salvaron!"

Leo sonrió, con el corazón lleno de orgullo. Sabía que ser el guardián de un faro era una gran responsabilidad, pero ayudar a los demás era la mejor sensación del mundo. Desde ese día, fue conocido no solo como Leo, el guardián del faro, sino como Leo, el león más valiente del mar.
    `,
  wordCount: 334,
  level: '3er Grado (Nivel N)',
  questions: {
    [QuestionCategory.LITERAL]: [
      {
        id: 'lit1',
        category: QuestionCategory.LITERAL,
        questionText: '¿Quién es el personaje principal de la historia?',
        options: [
          'Leo el León',
          'El Capitán del barquito',
          'Un delfín saltarín',
          'Un marinero del puerto'
        ],
        correctAnswer: 'Leo el León',
      },
      {
        id: 'lit2',
        category: QuestionCategory.LITERAL,
        questionText: '¿Dónde vivía Leo el león exactamente?',
        options: [
          'En una cueva de la playa.',
          'Dentro de un faro a rayas.',
          'En la cubierta de un gran barco.',
          'En una torre hecha de madera.'
        ],
        correctAnswer: 'Dentro de un faro a rayas',
      },
      {
        id: 'lit3',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué hizo el capitán cuando su barco llegó al puerto tranquilo?',
        options: [
          'Se fue a dormir de inmediato.',
          'Remó hasta la isla para agradecer a Leo.',
          'Buscó marineros para su próximo viaje.',
          'Se puso a arreglar el cristal del faro.'
        ],
        correctAnswer: 'Remó hasta la isla para agradecer a Leo',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué hizo Leo inmediatamente después de escuchar la bocina débil?',
        options: [
          'Bajó a remar hacia el barco.',
          'Se asomó por la ventana para ver qué pasaba.',
          'Se puso a pulir el cristal de la lámpara.',
          'Se escondió del viento de la tormenta.'
        ],
        correctAnswer: 'Se asomó por la ventana para ver qué pasaba.',
      },
      {
        id: 'seq2',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Cuál de estas cosas ocurría habitualmente ANTES de la tormenta?',
        options: [
          'Leo escuchaba bocinas de barcos perdidos.',
          'Leo encendía la gran lámpara cada noche.',
          'El capitán le gritaba gracias a Leo.',
          'El sol salía sobre el puerto tranquilo.'
        ],
        correctAnswer: 'Leo encendía la gran lámpara cada noche.',
      },
      {
        id: 'seq3',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué hizo Leo justo después de soltar su rugido más fuerte?',
        options: [
          'Se fue a dormir porque estaba cansado.',
          'Enfocó su luz para mostrarle un camino al barco.',
          'Llamó al capitán por una radio mágica.',
          'Bajó la escalera de caracol corriendo.'
        ],
        correctAnswer: 'Enfocó su luz para mostrarle un camino al barco.',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'La historia dice que Leo "pulió" el cristal. ¿Qué significa?',
        options: [
          'Que lo rompió sin querer.',
          'Que lo frotó para que brillara.',
          'Que lo pintó de muchos colores.',
          'Que lo tapó para que no se moje.'
        ],
        correctAnswer: 'Que lo frotó para que brillara.',
      },
      {
        id: 'voc2',
        category: QuestionCategory.VOCABULARY,
        questionText: 'En la frase "El viento aullaba", ¿qué significa "aullaba"?',
        options: [
          'Hacía un sonido suave como una canción.',
          'Hacía un ruido fuerte y largo como un lobo.',
          'No hacía ningún tipo de ruido.',
          'Hacía un sonido parecido a una risa.'
        ],
        correctAnswer: 'Hacía un ruido fuerte y largo como un lobo.',
      },
      {
        id: 'voc3',
        category: QuestionCategory.VOCABULARY,
        questionText: 'Leo tenía "patas firmes". ¿Qué significa "firmes" en este cuento?',
        options: [
          'Que eran muy suaves al tacto.',
          'Que eran fuertes y seguras.',
          'Que estaban mojadas por el mar.',
          'Que eran débiles y temblorosas.'
        ],
        correctAnswer: 'Que eran fuertes y seguras.',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es la lección más importante de esta historia?',
        options: [
          'Que los leones son los mejores nadadores.',
          'Ser valiente y responsable para ayudar a otros.',
          'Que los faros deben ser siempre de colores.',
          'Que las tormentas en el mar son muy divertidas.'
        ],
        correctAnswer: 'Ser valiente y responsable para ayudar a otros.',
      },
      {
        id: 'main2',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Qué título alternativo describe mejor el tema de la historia?',
        options: [
          'La Tormenta en el Puerto',
          'El Guardián Valiente del Mar',
          'El Barco que no tenía Brújula',
          'El León que no podía Rugir'
        ],
        correctAnswer: 'El Guardián Valiente del Mar',
      },
      {
        id: 'main3',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Por qué el trabajo de Leo era el más importante de la isla?',
        options: [
          'Porque le gustaba ver el sol desde lo alto.',
          'Porque evitaba que los barcos chocaran con las rocas.',
          'Porque cuidaba a los delfines de la tormenta.',
          'Porque era el único que sabía usar una escalera.'
        ],
        correctAnswer: 'Porque evitaba que los barcos chocaran con las rocas.',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué el rugido de Leo fue útil para el capitán?',
        options: [
          'Porque asustó a las olas gigantes.',
          'Porque sirvió como una guía de sonido en la oscuridad.',
          'Porque despertó a todos los habitantes del puerto.',
          'Porque hizo que el viento dejara de soplar fuerte.'
        ],
        correctAnswer: 'Porque sirvió como una guía de sonido en la oscuridad.',
      },
      {
        id: 'inf2',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Cómo se sintió probablemente el capitán cuando vio la luz del faro?',
        options: [
          'Enojado porque la luz era demasiado brillante.',
          'Aliviado porque por fin sabía hacia dónde ir.',
          'Confundido porque pensó que era una estrella fugaz.',
          'Triste porque no quería llegar al puerto todavía.'
        ],
        correctAnswer: 'Aliviado porque por fin sabía hacia dónde ir.',
      },
      {
        id: 'inf3',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Para qué pulió Leo el cristal justo durante la tormenta?',
        options: [
          'Para que la luz se viera con la mayor claridad posible.',
          'Para que el cristal no se rompiera con el viento.',
          'Porque estaba aburrido y quería limpiar su casa.',
          'Para poder ver su reflejo mientras rugía fuerte.'
        ],
        correctAnswer: 'Para que la luz se viera con la mayor claridad posible.',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué rasgos definen mejor a Leo el león?',
        options: [
          'Miedoso y muy solitario.',
          'Valiente, atento y responsable.',
          'Distraído y un poco perezoso.',
          'Enojón y poco amigable.'
        ],
        correctAnswer: 'Valiente, atento y responsable.',
      },
      {
        id: 'char2',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo se siente Leo al final de la historia?',
        options: [
          'Cansado y con ganas de irse de la isla.',
          'Feliz y orgulloso por haber cumplido su deber.',
          'Triste porque ya no había más tormentas.',
          'Preocupado porque el sol quemaba su melena.'
        ],
        correctAnswer: 'Feliz y orgulloso por haber cumplido su deber.',
      },
      {
        id: 'char3',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué demuestra Leo al encender la lámpara cada noche?',
        options: [
          'Que tiene miedo de quedarse a oscuras.',
          'Su compromiso constante con la seguridad de otros.',
          'Que le gusta gastar mucha electricidad.',
          'Que quiere llamar la atención de los delfines.'
        ],
        correctAnswer: 'Su compromiso constante con la seguridad de otros.',
      },
    ],
  },
};
