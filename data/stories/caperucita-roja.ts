
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
        questionText: '¿Qué le llevó Caperucita Roja a su abuela?',
        options: ['Flores y miel', 'Una torta y un tarrito de mantequilla', 'Pan y vino', 'Un libro de cuentos'],
        correctAnswer: 'Una torta y un tarrito de mantequilla',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'rr-seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué hizo el lobo justo después de hablar con Caperucita en el bosque?',
        options: ['Se fue a dormir', 'Corrió a la casa de la abuela por el camino más corto', 'Siguió a Caperucita en secreto', 'Se escondió detrás de un árbol'],
        correctAnswer: 'Corrió a la casa de la abuela por el camino más corto',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'rr-voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'La historia dice que la abuela era "cándida". ¿Qué significa "cándida"?',
        options: ['Enojona', 'Inteligente', 'Inocente y que no sospecha maldad', 'Muy viejita'],
        correctAnswer: 'Inocente y que no sospecha maldad',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'rr-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es la lección más importante de esta historia?',
        options: ['No se deben recoger flores en el bosque', 'Es peligroso hablar con extraños', 'Hay que correr muy rápido', 'Las abuelas se enferman a veces'],
        correctAnswer: 'Es peligroso hablar con extraños',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'rr-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué el lobo no se comió a Caperucita en el bosque?',
        options: ['Porque no tenía hambre todavía', 'Porque Caperucita corrió muy rápido', 'Porque había leñadores cerca y tenía miedo', 'Porque se hicieron amigos'],
        correctAnswer: 'Porque había leñadores cerca y tenía miedo',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'rr-char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué dos palabras describen mejor al lobo?',
        options: ['Amable y juguetón', 'Tonto y lento', 'Astuto y malvado', 'Tímido y callado'],
        correctAnswer: 'Astuto y malvado',
      },
    ],
  },
};
