
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
        questionText: '¿De qué material estaba fabricado Don Fresquete?',
        options: [
          'De helado de crema muy dulce.',
          'De nubes blancas del cielo.',
          'De bolitas de nieve fría.',
          'De láminas de papel brillante.'
        ],
        correctAnswer: 'De bolitas de nieve fría.',
      },
      {
        id: 'fresquete-lit2',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué mensaje apareció escrito en el suelo blanco?',
        options: [
          'Que Don Fresquete tenía mucho frío.',
          'Que se había marchado en un barrilete.',
          'Que volvería a jugar por la tarde.',
          'Que se había ido a una heladería.'
        ],
        correctAnswer: 'Que se había marchado en un barrilete.',
      },
      {
        id: 'fresquete-lit3',
        category: QuestionCategory.LITERAL,
        questionText: '¿Quiénes fueron los creadores de este señor blanco?',
        options: [
          'Una abuela que vivía en la esquina.',
          'Unos magos que bajaron de la luna.',
          'Los chicos que jugaron toda la tarde.',
          'Unos duendes que salieron del bosque.'
        ],
        correctAnswer: 'Los chicos que jugaron toda la tarde.',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'fresquete-seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué hicieron los chicos apenas terminaron de armarlo?',
        options: [
          'Se fueron a dormir porque era tarde.',
          'Bailaron y cantaron a su alrededor.',
          'Le pusieron una bufanda de lana roja.',
          'Lo llevaron adentro para que no sufra.'
        ],
        correctAnswer: 'Bailaron y cantaron a su alrededor.',
      },
      {
        id: 'fresquete-seq2',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué hicieron los chicos a la mañana siguiente?',
        options: [
          'Salieron al patio para hacerle un amigo.',
          'Corrieron a la ventana para saludarlo.',
          'Le contaron a la abuela lo que pasó.',
          'Buscaron al barrilete por todo el barrio.'
        ],
        correctAnswer: 'Corrieron a la ventana para saludarlo.',
      },
      {
        id: 'fresquete-seq3',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué fue lo último que los niños vieron de Don Fresquete?',
        options: [
          'Su cara reflejada en un charco de agua.',
          'Que se derretía lentamente bajo el sol.',
          'Que volaba prendido de un barrilete.',
          'Que saludaba desde lo alto de la luna.'
        ],
        correctAnswer: 'Que volaba prendido de un barrilete.',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'fresquete-voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'En el cuento, ¿qué significa que volaba "tan campante"?',
        options: [
          'Que estaba muy asustado por el viento.',
          'Que volaba con muchísima rapidez.',
          'Que estaba muy tranquilo y sin miedo.',
          'Que estaba cayendo hacia el suelo.'
        ],
        correctAnswer: 'Que estaba muy tranquilo y sin miedo.',
      },
      {
        id: 'fresquete-voc2',
        category: QuestionCategory.VOCABULARY,
        questionText: '¿Qué objeto es un "barrilete" en esta historia?',
        options: [
          'Un avión de juguete muy ruidoso.',
          'Una cometa que vuela con el viento.',
          'Un globo de colores lleno de helio.',
          'Un pájaro de metal que hace piruetas.'
        ],
        correctAnswer: 'Una cometa que vuela con el viento.',
      },
      {
        id: 'fresquete-voc3',
        category: QuestionCategory.VOCABULARY,
        questionText: '¿Qué quiere decir que los chicos hacían "escándalo"?',
        options: [
          'Que estaban haciendo mucho silencio.',
          'Que estaban gritando y haciendo ruido.',
          'Que estaban estudiando con atención.',
          'Que estaban caminando muy despacito.'
        ],
        correctAnswer: 'Que estaban gritando y haciendo ruido.',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'fresquete-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿De qué trata principalmente este relato?',
        options: [
          'De cómo hacer un muñeco de nieve real.',
          'De un muñeco que cobra vida y se va.',
          'De una abuela que se asoma a la puerta.',
          'De los peligros de jugar con la nieve.'
        ],
        correctAnswer: 'De un muñeco que cobra vida y se va.',
      },
      {
        id: 'fresquete-main2',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Qué hace que Don Fresquete sea un muñeco especial?',
        options: [
          'Que tiene una nariz de zanahoria roja.',
          'Que es más grande que una casa entera.',
          'Que puede moverse y vivir aventuras.',
          'Que le gusta mucho comer helados fríos.'
        ],
        correctAnswer: 'Que puede moverse y vivir aventuras.',
      },
      {
        id: 'fresquete-main3',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es el momento más fantástico del cuento?',
        options: [
          'Cuando los niños se ponen a bailar.',
          'Cuando la abuela abre la puerta.',
          'Cuando el muñeco vuela en el cielo.',
          'Cuando los chicos ven caer la nieve.'
        ],
        correctAnswer: 'Cuando el muñeco vuela en el cielo.',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'fresquete-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué el autor dice que el muñeco era un "sinvergüenza"?',
        options: [
          'Porque era una persona muy maleducada.',
          'Porque hizo una travesura y se escapó.',
          'Porque estaba mal hecho por los chicos.',
          'Porque no quería jugar con los niños.'
        ],
        correctAnswer: 'Porque hizo una travesura y se escapó.',
      },
      {
        id: 'fresquete-inf2',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Cómo se sintieron los niños al ver a su muñeco volar?',
        options: [
          'Enojados porque les robó el barrilete.',
          'Tristes porque el sol lo iba a derretir.',
          'Asombrados de ver algo tan maravilloso.',
          'Asustados por el ruido que hacía el viento.'
        ],
        correctAnswer: 'Asombrados de ver algo tan maravilloso.',
      },
      {
        id: 'fresquete-inf3',
        category: QuestionCategory.INFERENCE,
        questionText: '¿De dónde creen que salió el barrilete que usó el muñeco?',
        options: [
          'Lo fabricó Don Fresquete por la noche.',
          'Lo trajo la abuela como un gran regalo.',
          'Probablemente era de los chicos del barrio.',
          'Bajó de la luna junto con las estrellas.'
        ],
        correctAnswer: 'Probablemente era de los chicos del barrio.',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'fresquete-char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué dos rasgos definen mejor a Don Fresquete?',
        options: [
          'Es un ser muy miedoso y silencioso.',
          'Es un personaje aventurero y pícaro.',
          'Es un muñeco muy serio y muy quieto.',
          'Es una nube triste que llora mucho.'
        ],
        correctAnswer: 'Es un personaje aventurero y pícaro.',
      },
      {
        id: 'fresquete-char2',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo es la personalidad de los chicos del cuento?',
        options: [
          'Son aburridos y no les gusta jugar.',
          'Son creativos, alegres y entusiastas.',
          'Son egoístas y no comparten la nieve.',
          'Son miedosos y se quedan en su casa.'
        ],
        correctAnswer: 'Son creativos, alegres y entusiastas.',
      },
      {
        id: 'fresquete-char3',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué le gusta hacer a Don Fresquete según sus actos?',
        options: [
          'Quedarse quietito en un solo rincón.',
          'Dormir mucho durante toda la mañana.',
          'Explorar el mundo y vivir aventuras.',
          'Hacer enojar a la abuela del barrio.'
        ],
        correctAnswer: 'Explorar el mundo y vivir aventuras.',
      },
    ],
  },
};
