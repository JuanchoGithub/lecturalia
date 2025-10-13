
import { Story, QuestionCategory } from '../../types';

export const donFresquete: Story = {
  id: 'don-fresquete',
  title: 'Don Fresquete',
  author: 'María Elena Walsh',
  coverImage: 'https://2.bp.blogspot.com/--0DcopUVufE/WDQmjiMhVXI/AAAAAAAAEKo/f7_8-SgtFB4ors67gEa5Jp9MLARx8topwCLcB/s1600/Don-Fresquete-Rustica-9789870400431.jpg',
  content: `
Había una vez un señor todo de nieve. Se llamaba Don Fresquete.

¿Este señor blanco había caído de la luna? –No.
¿Se había escapado de una heladería? –No, no, no.

Simplemente, lo habían fabricado los chicos, durante toda la tarde, poniendo bolita de nieve sobre bolita de nieve. A las pocas horas, el montón de nieve se había convertido en Don Fresquete. Y los chicos lo festejaron, bailando a su alrededor.

Como hacían mucho escándalo, una abuela se asomó a la puerta para ver qué pasaba. Y los chicos estaban cantando una canción que decía así:
“Se ha marchado Don Fresquete a volar en barrilete.”

Como todo el mundo sabe, los señores de nieve suelen quedarse quietitos en su lugar. Como no tienen piernas, no saben caminar ni correr. Pero parece que Don Fresquete resultó ser un señor de nieve muy distinto. Muy sinvergüenza, sí señor.

A la mañana siguiente, cuando los chicos se levantaron, corrieron a la ventana para decirle buenos días, pero... ¡Don Fresquete había desaparecido!

En el suelo, escrito con un dedo sobre la nieve, había un mensaje que decía:
“Se ha marchado Don Fresquete a volar en barrilete.”

Los chicos miraron hacia arriba y alcanzaron a ver, allá muy lejos, a Don Fresquete que volaba tan campante, prendido de la cola de un barrilete.

De repente parecía un ángel y de repente parecía una nube gorda.
¡Buen viaje, Don Fresquete!
  `,
  wordCount: 198,
  level: '2do Grado (Nivel J)',
  questions: {
    [QuestionCategory.LITERAL]: [
      {
        id: 'fresquete-lit1',
        category: QuestionCategory.LITERAL,
        questionText: '¿De qué estaba hecho Don Fresquete?',
        options: ['De helado', 'De nubes', 'De nieve', 'De papel'],
        correctAnswer: 'De nieve',
      },
      {
        id: 'fresquete-lit2',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué mensaje dejó Don Fresquete en la nieve cuando desapareció?',
        options: ['Volveré pronto', 'Gracias por todo', 'Se ha marchado Don Fresquete a volar en barrilete', 'Adiós, amigos'],
        correctAnswer: 'Se ha marchado Don Fresquete a volar en barrilete',
      },
      {
        id: 'fresquete-lit3',
        category: QuestionCategory.LITERAL,
        questionText: '¿Quiénes fabricaron a Don Fresquete?',
        options: ['Una abuela', 'Unos magos', 'Los chicos', 'Cayó de la luna'],
        correctAnswer: 'Los chicos',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'fresquete-seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué hicieron los chicos inmediatamente después de fabricar a Don Fresquete?',
        options: ['Se fueron a dormir', 'Lo abrigaron con una bufanda', 'Bailaron y cantaron a su alrededor', 'Le dieron un nombre'],
        correctAnswer: 'Bailaron y cantaron a su alrededor',
      },
      {
        id: 'fresquete-seq2',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué hicieron los chicos a la mañana siguiente de crear a Don Fresquete?',
        options: ['Salieron a jugar con él', 'Corrieron a la ventana para saludarlo y descubrieron que no estaba', 'Le contaron a la abuela', 'Le hicieron un amigo de nieve'],
        correctAnswer: 'Corrieron a la ventana para saludarlo y descubrieron que no estaba',
      },
      {
        id: 'fresquete-seq3',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué fue lo último que vieron los chicos de Don Fresquete?',
        options: ['Su mensaje en la nieve', 'Que se derretía con el sol', 'Que volaba muy lejos prendido de la cola de un barrilete', 'Que se escondía detrás de un árbol'],
        correctAnswer: 'Que volaba muy lejos prendido de la cola de un barrilete',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'fresquete-voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'En la frase "volaba tan campante", ¿qué significa "campante"?',
        options: ['Con mucho miedo', 'Muy rápido', 'Tranquilo y sin ninguna preocupación', 'Dando vueltas'],
        correctAnswer: 'Tranquilo y sin ninguna preocupación',
      },
      {
        id: 'fresquete-voc2',
        category: QuestionCategory.VOCABULARY,
        questionText: 'Los chicos volaban un "barrilete". ¿Qué es un barrilete?',
        options: ['Un avión de papel', 'Un globo', 'Una cometa', 'Un pájaro de juguete'],
        correctAnswer: 'Una cometa',
      },
      {
        id: 'fresquete-voc3',
        category: QuestionCategory.VOCABULARY,
        questionText: 'Cuando los chicos hacían "escándalo", ¿qué estaban haciendo?',
        options: ['Mucho silencio', 'Mucho ruido y alboroto', 'Estaban estudiando', 'Estaban durmiendo'],
        correctAnswer: 'Mucho ruido y alboroto',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'fresquete-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es la idea principal de este cuento?',
        options: ['Cómo hacer un muñeco de nieve', 'La historia de un muñeco de nieve mágico que se va volando en un barrilete', 'Una canción sobre un barrilete', 'Por qué no se debe jugar con la nieve'],
        correctAnswer: 'La historia de un muñeco de nieve mágico que se va volando en un barrilete',
      },
      {
        id: 'fresquete-main2',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Qué es lo que hace a Don Fresquete diferente de otros señores de nieve?',
        options: ['Que está hecho de nieve', 'Que no tiene piernas', 'Que puede moverse y tener aventuras', 'Que le gusta el frío'],
        correctAnswer: 'Que puede moverse y tener aventuras',
      },
      {
        id: 'fresquete-main3',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es el evento más sorprendente del cuento?',
        options: ['Que los chicos hicieron un muñeco de nieve', 'Que una abuela se asomó a la puerta', 'Que Don Fresquete desapareció y se fue volando', 'Que los chicos cantaron una canción'],
        correctAnswer: 'Que Don Fresquete desapareció y se fue volando',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'fresquete-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué el cuento dice que Don Fresquete era "muy sinvergüenza"?',
        options: ['Porque era maleducado', 'Porque se escapó sin avisar, haciendo una travesura', 'Porque estaba mal hecho', 'Porque no quería a los niños'],
        correctAnswer: 'Porque se escapó sin avisar, haciendo una travesura',
      },
      {
        id: 'fresquete-inf2',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Cómo se sintieron los niños al ver a Don Fresquete volando?',
        options: ['Enojados porque se fue', 'Tristes porque lo perdieron', 'Asombrados y quizás felices por su aventura', 'Asustados'],
        correctAnswer: 'Asombrados y quizás felices por su aventura',
      },
      {
        id: 'fresquete-inf3',
        category: QuestionCategory.INFERENCE,
        questionText: '¿De dónde crees que salió el barrilete?',
        options: ['Lo fabricó Don Fresquete', 'Se lo encontró en el suelo', 'Probablemente era de los chicos que jugaban', 'Cayó del cielo'],
        correctAnswer: 'Probablemente era de los chicos que jugaban',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'fresquete-char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué dos palabras describen mejor a Don Fresquete?',
        options: ['Tímido y quieto', 'Aventurero y juguetón', 'Gruñón y solitario', 'Triste y frío'],
        correctAnswer: 'Aventurero y juguetón',
      },
      {
        id: 'fresquete-char2',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo son los chicos del cuento?',
        options: ['Aburridos y serios', 'Creativos y alegres', 'Egoístas y malos', 'Miedosos y tímidos'],
        correctAnswer: 'Creativos y alegres',
      },
      {
        id: 'fresquete-char3',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué te parece que le gusta hacer a Don Fresquete?',
        options: ['Quedarse quieto en un lugar', 'Dormir mucho', 'Explorar y vivir aventuras', 'Estar solo'],
        correctAnswer: 'Explorar y vivir aventuras',
      },
    ],
  },
};
