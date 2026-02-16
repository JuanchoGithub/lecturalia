
import { Story, QuestionCategory } from '../../types';

export const caperucitaRoja: Story = {
  id: 'caperucita-roja',
  title: 'Caperucita Roja (C. Perrault)',
  author: 'Charles Perrault',
  coverImage: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Dore_ridinghood.jpg',
  content: `
Había una vez una niñita en un pueblo, la más bonita que jamás se hubiera visto; su madre estaba enloquecida con ella y su abuela mucho más todavía. Esta buena mujer le había mandado hacer una caperucita roja y le sentaba tanto que todos la llamaban Caperucita Roja.

Un día su madre, habiendo cocinado unas tortas, le dijo:
—Anda a ver cómo está tu abuela, pues me dicen que ha estado enferma; llévale una torta y este tarrito de mantequilla.

Caperucita Roja partió en seguida a ver a su abuela que vivía en otro pueblo. Al pasar por un bosque, se encontró con el compadre lobo, que tuvo muchas ganas de comérsela, pero no se atrevió porque unos leñadores andaban por ahí cerca. Él le preguntó a dónde iba. La pobre niña, que no sabía que era peligroso detenerse a hablar con un lobo, le dijo:
—Voy a ver a mi abuela, y le llevo una torta y un tarrito de mantequilla que mi madre le envía.

—¿Vive muy lejos?, le dijo el lobo.

—¡Oh, sí!, dijo Caperucita Roja, más allá del molino que se ve allá lejos, en la primera casita del pueblo.

—Pues bien, dijo el lobo, yo también quiero ir a verla; yo iré por este camino, y tú por aquél, y veremos quién llega primero.

El lobo partió corriendo a toda velocidad por el camino que era más corto y la niña se fue por el más largo entreteniéndose en coger avellanas, en correr tras las mariposas y en hacer ramos con las florecillas que encontraba. Poco tardó el lobo en llegar a casa de la abuela; golpea: Toc, toc.

—¿Quién es?

—Es su nieta, Caperucita Roja, dijo el lobo, disfrazando la voz, le traigo una torta y un tarrito de mantequilla que mi madre le envía.

La cándida abuela, que estaba en cama porque no se sentía bien, le gritó:
—Tira la aldaba y el cerrojo caerá.

El lobo tiró la aldaba, y la puerta se abrió. Se abalanzó sobre la buena mujer y la devoró en un santiamén, pues hacía más de tres días que no comía. En seguida cerró la puerta y fue a acostarse en el lecho de la abuela, esperando a Caperucita Roja quien, un rato después, llegó a golpear la puerta: Toc, toc.

—¿Quién es?

Caperucita Roja, al oír la ronca voz del lobo, primero se asustó, pero creyendo que su abuela estaba resfriada, contestó:
—Es su nieta, Caperucita Roja, le traigo una torta y un tarrito de mantequilla que mi madre le envía.

El lobo le gritó, suavizando un poco la voz:
—Tira la aldaba y el cerrojo caerá.

Caperucita Roja tiró la aldaba y la puerta se abrió. Viéndola entrar, el lobo le dijo, mientras se escondía en la cama bajo la frazada:
—Deja la torta y el tarrito de mantequilla en la repisa y ven a acostarte conmigo.

Caperucita Roja se desviste y se mete a la cama y quedó muy asombrada al ver la forma de su abuela en camisa de dormir. Ella le dijo:
—Abuela, ¡qué brazos tan grandes tienes!
—Es para abrazarte mejor, hija mía.
—Abuela, ¡qué piernas tan grandes tiene!
—Es para correr mejor, hija mía.
Abuela, ¡qué orejas tan grandes tiene!
—Es para oír mejor, hija mía.
—Abuela, ¡que ojos tan grandes tiene!
—Es para ver mejor, hija mía.
—Abuela, ¡qué dientes tan grandes tiene!
—¡Para comerte mejor!

Y diciendo estas palabras, este lobo malo se abalanzó sobre Caperucita Roja y se la comió.
    `,
  wordCount: 448,
  level: '3er Grado (Nivel M)',
  questions: {
    [QuestionCategory.LITERAL]: [
      {
        id: 'rr-lit1',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué alimentos cargaba Caperucita en su canasta?',
        options: [
          'Una rica torta y un tarrito de mantequilla.',
          'Una botella de vino y unos pasteles dulces.',
          'Un poco de miel silvestre y muchas frutas.',
          'Pan casero y una jarra de leche de granja.'
        ],
        correctAnswer: 'Una rica torta y un tarrito de mantequilla.',
      },
      {
        id: 'rr-lit2',
        category: QuestionCategory.LITERAL,
        questionText: '¿Con quién se encontró la niña al cruzar el bosque?',
        options: [
          'Con un leñador que cortaba leña seca.',
          'Con el astuto y hambriento compadre lobo.',
          'Con un cazador que buscaba pieles finas.',
          'Con su abuela que paseaba por el lugar.'
        ],
        correctAnswer: 'Con el astuto y hambriento compadre lobo.',
      },
      {
        id: 'rr-lit3',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué desafío le propuso el lobo a Caperucita Roja?',
        options: [
          'Que el que juntara más flores ganaría.',
          'Que corrieran juntos por el mismo sendero.',
          'Que cada uno fuera por un camino diferente.',
          'Que se quedaran jugando cerca del molino.'
        ],
        correctAnswer: 'Que cada uno fuera por un camino diferente.',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'rr-seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Hacia dónde partió el lobo después del encuentro?',
        options: [
          'Directo a la casa por el camino más corto.',
          'Detrás de la niña por el sendero más largo.',
          'Hacia el molino para hablar con el molinero.',
          'Al centro del bosque para buscar comida rica.'
        ],
        correctAnswer: 'Directo a la casa por el camino más corto.',
      },
      {
        id: 'rr-seq2',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué hizo el lobo apenas entró a la casa de la abuela?',
        options: [
          'Se ocultó en el armario bajo mucha ropa.',
          'Se preparó un té mientras esperaba a la niña.',
          'Devoró a la abuela y se acostó en su lecho.',
          'Se puso los lentes y leyó un libro viejo.'
        ],
        correctAnswer: 'Devoró a la abuela y se acostó en su lecho.',
      },
      {
        id: 'rr-seq3',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Cuál fue la última parte del cuerpo que la niña mencionó?',
        options: [
          'Abuela, ¡qué brazos tan largos tienes!',
          'Abuela, ¡qué orejas tan grandes tienes!',
          'Abuela, ¡qué ojos tan grandes tienes!',
          'Abuela, ¡qué dientes tan grandes tienes!'
        ],
        correctAnswer: 'Abuela, ¡qué dientes tan grandes tienes!',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'rr-voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'La historia dice que la abuela era "cándida". ¿Qué significa?',
        options: [
          'Que era una persona muy enojada.',
          'Que era una mujer fuerte y valiente.',
          'Que era inocente y sin ninguna maldad.',
          'Que era alguien que caminaba lento.'
        ],
        correctAnswer: 'Que era inocente y sin ninguna maldad.',
      },
      {
        id: 'rr-voc2',
        category: QuestionCategory.VOCABULARY,
        questionText: '¿Qué significa que el lobo la devoró en un "santiamén"?',
        options: [
          'Que lo hizo con mucha tristeza.',
          'Que tardó muchas horas en hacerlo.',
          'Que fue un acto realizado con ruido.',
          'Que lo hizo en un instante muy veloz.'
        ],
        correctAnswer: 'Que lo hizo en un instante muy veloz.',
      },
      {
        id: 'rr-voc3',
        category: QuestionCategory.VOCABULARY,
        questionText: '¿Cómo era la voz del lobo cuando Caperucita llegó?',
        options: [
          'Era una voz muy suave y melodiosa.',
          'Era una voz fuerte, grave y ronca.',
          'Era una voz aguda como la de un ave.',
          'Era una voz casi inaudible y baja.'
        ],
        correctAnswer: 'Era una voz fuerte, grave y ronca.',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'rr-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es la lección más importante de esta historia?',
        options: [
          'No juntar muchas flores en el bosque.',
          'No hablar con personas que no conocemos.',
          'Hay que correr rápido por los senderos.',
          'Las abuelas necesitan mucha mantequilla.'
        ],
        correctAnswer: 'No hablar con personas que no conocemos.',
      },
      {
        id: 'rr-main2',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Por qué el plan del lobo funcionó tan bien?',
        options: [
          'Porque era el animal más rápido del lugar.',
          'Porque Caperucita y la abuela confiaron mucho.',
          'Porque los leñadores lo ayudaron en secreto.',
          'Porque la abuela deseaba recibir visitas.'
        ],
        correctAnswer: 'Porque Caperucita y la abuela confiaron mucho.',
      },
      {
        id: 'rr-main3',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es el propósito del diálogo final en la cama?',
        options: [
          'Que la niña descubra el engaño lentamente.',
          'Que el lobo se divierta un rato más.',
          'Que podamos conocer cómo es un lobo real.',
          'Hacer tiempo para que lleguen refuerzos.'
        ],
        correctAnswer: 'Que la niña descubra el engaño lentamente.',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'rr-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué el lobo no atacó a la niña en el bosque?',
        options: [
          'Porque todavía no tenía nada de hambre.',
          'Porque Caperucita corría demasiado veloz.',
          'Porque temía que los leñadores lo vieran.',
          'Porque quería hacerse amigo de la niña.'
        ],
        correctAnswer: 'Porque temía que los leñadores lo vieran.',
      },
      {
        id: 'rr-inf2',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué Caperucita tardó tanto en el camino largo?',
        options: [
          'Porque se perdió entre los pinos altos.',
          'Porque prefirió jugar y recoger avellanas.',
          'Porque el camino estaba lleno de lodo.',
          'Porque el lobo se lo ordenó con furia.'
        ],
        correctAnswer: 'Porque prefirió jugar y recoger avellanas.',
      },
      {
        id: 'rr-inf3',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Qué pensó la niña al oír la voz ronca del lobo?',
        options: [
          'Que era un monstruo que estaba oculto.',
          'Que su abuela estaba muy resfriada.',
          'Que el lobo le estaba haciendo una broma.',
          'Que su madre la estaba llamando lejos.'
        ],
        correctAnswer: 'Que su abuela estaba muy resfriada.',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'rr-char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué dos palabras definen mejor al lobo?',
        options: [
          'Es un animal muy amable y juguetón.',
          'Es un ser tonto que camina muy lento.',
          'Es un personaje muy astuto y malvado.',
          'Es un habitante tímido y muy callado.'
        ],
        correctAnswer: 'Es un personaje muy astuto y malvado.',
      },
      {
        id: 'rr-char2',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué cualidad describe a Caperucita en esta versión?',
        options: [
          'Es una niña muy prudente y cuidadosa.',
          'Es una pequeña valiente y luchadora.',
          'Es alguien muy inocente y desobediente.',
          'Es una chica muy mentirosa y tramposa.'
        ],
        correctAnswer: 'Es alguien muy inocente y desobediente.',
      },
      {
        id: 'rr-char3',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué podemos decir acerca de la abuela?',
        options: [
          'Que era una mujer sumamente desconfiada.',
          'Que era una anciana muy fuerte y sana.',
          'Que era una persona muy confiada e ingenua.',
          'Que no sentía ningún cariño por la niña.'
        ],
        correctAnswer: 'Que era una persona muy confiada e ingenua.',
      },
    ],
  },
};
