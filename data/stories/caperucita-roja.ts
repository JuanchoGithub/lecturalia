
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
      {
        id: 'rr-lit2',
        category: QuestionCategory.LITERAL,
        questionText: '¿Con quién se encontró Caperucita en el bosque?',
        options: ['Un leñador', 'El compadre lobo', 'Un cazador', 'Su abuela'],
        correctAnswer: 'El compadre lobo',
      },
      {
        id: 'rr-lit3',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué le dijo el lobo a Caperucita para llegar antes a la casa de la abuela?',
        options: ['Que corrieran una carrera por el mismo camino', 'Que él la acompañaría', 'Que él iría por un camino más corto y ella por otro más largo', 'Que ella debía recoger flores'],
        correctAnswer: 'Que él iría por un camino más corto y ella por otro más largo',
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
      {
        id: 'rr-seq2',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué hizo el lobo al llegar a la casa de la abuela, ANTES de que llegara Caperucita?',
        options: ['Se escondió detrás de la puerta', 'Se comió la torta y la mantequilla', 'Se comió a la abuela y se acostó en su cama', 'Se disfrazó de abuela con sus ropas'],
        correctAnswer: 'Se comió a la abuela y se acostó en su cama',
      },
      {
        id: 'rr-seq3',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Cuál fue la última pregunta que le hizo Caperucita al lobo disfrazado antes de que se la comiera?',
        options: ['Abuela, ¡qué brazos tan grandes tienes!', 'Abuela, ¡qué orejas tan grandes tiene!', 'Abuela, ¡qué ojos tan grandes tiene!', 'Abuela, ¡qué dientes tan grandes tiene!'],
        correctAnswer: 'Abuela, ¡qué dientes tan grandes tiene!',
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
      {
        id: 'rr-voc2',
        category: QuestionCategory.VOCABULARY,
        questionText: 'En la frase "se abalanzó sobre la buena mujer y la devoró en un santiamén", ¿qué significa "en un santiamén"?',
        options: ['Con mucha tristeza', 'Muy lentamente', 'Haciendo ruido', 'En un instante, muy rápidamente'],
        correctAnswer: 'En un instante, muy rápidamente',
      },
      {
        id: 'rr-voc3',
        category: QuestionCategory.VOCABULARY,
        questionText: 'Cuando Caperucita escuchó la "ronca voz del lobo", ¿cómo era esa voz?',
        options: ['Suave y dulce', 'Fuerte y grave', 'Aguda y chillona', 'Muy bajita'],
        correctAnswer: 'Fuerte y grave',
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
      {
        id: 'rr-main2',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Por qué el plan del lobo tuvo éxito?',
        options: ['Porque era muy rápido', 'Porque Caperucita y su abuela fueron inocentes y confiadas', 'Porque los leñadores no lo vieron', 'Porque la abuela estaba enferma'],
        correctAnswer: 'Porque Caperucita y su abuela fueron inocentes y confiadas',
      },
      {
        id: 'rr-main3',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es el propósito principal del diálogo entre Caperucita y el lobo en la cama?',
        options: ['Para que Caperucita se diera cuenta del engaño poco a poco', 'Para que el lobo se divirtiera', 'Para describir al lobo', 'Para hacer tiempo'],
        correctAnswer: 'Para que Caperucita se diera cuenta del engaño poco a poco',
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
      {
        id: 'rr-inf2',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué Caperucita se entretuvo en el camino más largo?',
        options: ['Porque no tenía prisa en llegar', 'Porque era desobediente y le gustaba jugar en el bosque', 'Porque se perdió', 'Porque el lobo se lo pidió'],
        correctAnswer: 'Porque era desobediente y le gustaba jugar en el bosque',
      },
      {
        id: 'rr-inf3',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué Caperucita, a pesar de asustarse por la voz ronca, entró a la casa?',
        options: ['Porque era muy valiente', 'Porque pensó que su abuela estaba resfriada', 'Porque el lobo la obligó', 'Porque no le importó'],
        correctAnswer: 'Porque pensó que su abuela estaba resfriada',
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
      {
        id: 'rr-char2',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué cualidad describe mejor a Caperucita en esta versión del cuento?',
        options: ['Prudente y cuidadosa', 'Valiente y luchadora', 'Inocente y un poco desobediente', 'Mentirosa y astuta'],
        correctAnswer: 'Inocente y un poco desobediente',
      },
      {
        id: 'rr-char3',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué podemos decir de la abuela?',
        options: ['Que era muy desconfiada', 'Que era fuerte y saludable', 'Que era confiada e ingenua', 'Que no quería a Caperucita'],
        correctAnswer: 'Que era confiada e ingenua',
      },
    ],
  },
};
