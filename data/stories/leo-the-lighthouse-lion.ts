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
        options: ['El capitán del barco', 'Un pez valiente', 'Leo el León', 'Una torre alta'],
        correctAnswer: 'Leo el León',
      },
      {
        id: 'lit2',
        category: QuestionCategory.LITERAL,
        questionText: '¿Dónde vivía Leo el león?',
        options: ['En una cueva en la playa', 'En el barco del capitán', 'Dentro de un faro alto a rayas', 'En un bosque cercano'],
        correctAnswer: 'Dentro de un faro alto a rayas',
      },
      {
        id: 'lit3',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué hizo el capitán cuando su barco estuvo a salvo en el puerto?',
        options: ['Se fue a dormir inmediatamente', 'Remó hasta la isla para agradecerle a Leo', 'Arregló su barco', 'Se olvidó de Leo'],
        correctAnswer: 'Remó hasta la isla para agradecerle a Leo',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué pasó justo después de que comenzó la tormenta?',
        options: ['Salió el sol', 'Leo vio un barco perdido en las olas', 'El capitán le agradeció a Leo', 'Leo se fue a dormir'],
        correctAnswer: 'Leo vio un barco perdido en las olas',
      },
      {
        id: 'seq2',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Cuál de estas cosas ocurrió PRIMERO en la historia?',
        options: ['Se desató una fuerte tormenta', 'El capitán le agradeció a Leo', 'Leo vio un barco en peligro', 'Leo encendía la lámpara cada noche'],
        correctAnswer: 'Leo encendía la lámpara cada noche',
      },
      {
        id: 'seq3',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué hizo Leo después de rugir para guiar al barco?',
        options: ['Se escondió del viento', 'Apagó la luz del faro', 'Enfocó su luz para mostrarle al barco un camino seguro', 'Se puso a jugar'],
        correctAnswer: 'Enfocó su luz para mostrarle al barco un camino seguro',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'En la oración: "Su luz se proyectaba sobre el agua", ¿qué significa "se proyectaba"?',
        options: ['Parpadeaba débilmente', 'Hacía un sonido', 'Brillaba intensamente', 'Estaba escondida'],
        correctAnswer: 'Brillaba intensamente',
      },
      {
        id: 'voc2',
        category: QuestionCategory.VOCABULARY,
        questionText: 'En la frase "El viento aullaba y las olas rompían", ¿qué significa "aullaba"?',
        options: ['Cantaba suavemente', 'Hacía un sonido fuerte y largo como un lobo', 'Susurraba en silencio', 'Se reía a carcajadas'],
        correctAnswer: 'Hacía un sonido fuerte y largo como un lobo',
      },
      {
        id: 'voc3',
        category: QuestionCategory.VOCABULARY,
        questionText: 'La historia dice que Leo tenía "patas firmes". ¿Qué significa "firmes"?',
        options: ['Que eran muy suaves', 'Que eran débiles y temblorosas', 'Que eran fuertes y estables', 'Que eran muy pequeñas'],
        correctAnswer: 'Que eran fuertes y estables',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es la lección más importante de esta historia?',
        options: ['Los leones tienen rugidos fuertes', 'Las tormentas son muy peligrosas', 'Los faros son altos', 'Ser valiente y ayudar a los demás es importante'],
        correctAnswer: 'Ser valiente y ayudar a los demás es importante',
      },
      {
        id: 'main2',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Qué título alternativo describiría mejor la historia?',
        options: ['La Tormenta Fuerte', 'El León que Dormía Mucho', 'El Héroe del Faro', 'El Barco Perdido'],
        correctAnswer: 'El Héroe del Faro',
      },
      {
        id: 'main3',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Por qué es importante el trabajo de Leo en el faro?',
        options: ['Porque mantiene la isla bonita', 'Porque evita que los barcos se estrellen contra las rocas', 'Porque asusta a los peces', 'Porque le gusta ver la luz'],
        correctAnswer: 'Porque evita que los barcos se estrellen contra las rocas',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué el capitán del barco estaba tan agradecido con Leo?',
        options: ['Porque le gustaban los leones', 'Porque Leo le contó un chiste gracioso', 'Porque la luz de Leo salvó a su barco de chocar', 'Porque la tormenta terminó'],
        correctAnswer: 'Porque la luz de Leo salvó a su barco de chocar',
      },
      {
        id: 'inf2',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Cómo crees que se sintió el capitán cuando vio la luz del faro en la tormenta?',
        options: ['Enojado porque la luz era muy brillante', 'Asustado porque pensó que era un monstruo', 'Aliviado y con esperanza', 'Indiferente'],
        correctAnswer: 'Aliviado y con esperanza',
      },
      {
        id: 'inf3',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué Leo pulió el cristal de la lámpara durante la tormenta?',
        options: ['Porque estaba aburrido y no tenía nada que hacer', 'Para que la luz fuera lo más brillante posible y pudiera ser vista', 'Porque le gusta que todo esté limpio', 'Para poder ver su reflejo'],
        correctAnswer: 'Para que la luz fuera lo más brillante posible y pudiera ser vista',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué dos palabras describen mejor la personalidad de Leo?',
        options: ['Tonto y perezoso', 'Valiente y responsable', 'Tímido y callado', 'Gruñón y malo'],
        correctAnswer: 'Valiente y responsable',
      },
      {
        id: 'char2',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo se siente Leo al final de la historia?',
        options: ['Triste porque la tormenta terminó', 'Cansado y con ganas de dormir', 'Orgulloso y feliz por haber ayudado', 'Enojado con el capitán'],
        correctAnswer: 'Orgulloso y feliz por haber ayudado',
      },
      {
        id: 'char3',
        category: QuestionCategory.CHARACTER,
        questionText: 'Aparte de valiente y responsable, ¿qué otra cualidad demuestra Leo?',
        options: ['Perezoso', 'Miedoso', 'Cuidadoso (al pulir el vidrio y enfocar la luz)', 'Egoísta'],
        correctAnswer: 'Cuidadoso (al pulir el vidrio y enfocar la luz)',
      },
    ],
  },
};
