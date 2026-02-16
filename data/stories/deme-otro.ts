
import { Story, QuestionCategory } from '../../types';

export const demeOtro: Story = {
  id: 'deme-otro',
  title: 'Deme Otro',
  author: 'Luis María Pescetti',
  coverImage: 'https://www.loqueleo.com/ar/uploads/2015/11/resized/800_9789504643562.jpg',
  content: `
Al finalizar el horario de clases llega una madre a buscar a su hijo. La intercepta la maestra, que trae al niño de una mano.
—Señora, hoy Fernando se portó fatal.
—¿¡Otra vez!?
—Pero fatal, fatal… no hace caso, contesta, se burla de los compañeros…
—Pues, entonces, deme otro.
—¿¡Cómo que “otro”!? ¿Otro niño?
—Sí, porque tampoco sé qué hacer.
—Pero, es que no puede ser.
—Con su padre ya le dijimos (mirando al niño), pero si él no quiere hacer caso… Qué, ¿no hay más niños?
—Es que se me desordena todo, señora, luego vendrá la madre de la niña…
—Pero yo llegué primero.
—Sí, ya sé, pero luego se quejan, no se crea. Y además (señala con la cabeza al niño) es pasarle el problema a otra familia.
—No, porque así aprende, para la próxima lo va a pensar.
—¿Y si no lo quiere nadie?
—¿¡Pero qué dice!? ¿Cómo no lo van a querer si es un niño precioso?
—Precioso sí que es, pero se porta…
—Ah, ¿y qué pretende? ¿Que me lo lleve yo?
—No, si no digo eso.
—Hay que hacer algo, maestra, hay que poner límites, si no van de peor en peor.
—Bueno, ¿y cuál quiere?
—Una niña, ¿no le digo? (mira hacia el patio). Aquella, la que está saltando.
—¡Elena! ¡Recoge tus cosas que te vas con la señora que será tu madre!
—¡Uf! (la niña con evidente fastidio), ¡estoy jugando!
—¡Ala! ¡Vamos! Sin protestar, mira qué primera impresión más fea le vas a dar a la señora.
La niña, resoplando contrariada por la interrupción del juego, va al salón.
—¿No será peor que éste, no? (la madre, preocupada).
—¡Qué va! Es un ángel, lo que ocurre es que estaba jugando; los niños son así.
Llega la niña con su mochila.
—¿Vamos a casa, Elenita?
—¿Y hay tele?
—(La maestra y la madre sueltan una risa). ¡Claro que hay tele! Y un perro muy hermoso, que a Fernando le gustaba mucho, ¿verdad, Fernando?
—…(el niño, con la mirada baja, asiente).
—¡Qué lindo! ¡Nunca tuve un perro porque mis papás no me dejaban!
—Pues vamos a casa, que ya tienes uno. Y tú, Fernando, pórtate bien con tu nueva familia y nos vienes a visitar cuando quieras, ¿sí?
El niño asintió otra vez, sin levantar la mirada. La madre saludó amablemente a la maestra. Ésta se despidió de Elena con un beso y dio vuelta hacia el patio, con Fernando de la mano.
`,
  wordCount: 421,
  level: '3er Grado (Nivel M)',
  questions: {
    [QuestionCategory.LITERAL]: [
      {
        id: 'do-lit1',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué solución propone la madre ante el mal comportamiento de su hijo?',
        options: [
          'Solicitar un castigo ejemplar para que el niño aprenda.',
          'Pedirle a la maestra que le entregue un alumno distinto.',
          'Exigir una reunión urgente con el director de la escuela.',
          'Llevarse a Fernando rápido para que no moleste a nadie.'
        ],
        correctAnswer: 'Pedirle a la maestra que le entregue un alumno distinto.',
      },
      {
        id: 'do-lit2',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué es lo primero que Elena quiere saber sobre su nueva casa?',
        options: [
          'Si va a tener muchos juguetes nuevos para ella sola.',
          'Si en el salón de la nueva casa hay un televisor.',
          'Si podrá seguir saltando y jugando en el patio verde.',
          'Si sus verdaderos padres la irán a buscar muy pronto.'
        ],
        correctAnswer: 'Si en el salón de la nueva casa hay un televisor.',
      },
      {
        id: 'do-lit3',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué le dice la mamá a Fernando al despedirse de él?',
        options: [
          'Que lo va a extrañar mucho durante toda la semana.',
          'Que se porte bien y los visite cuando él tenga ganas.',
          'Que no vuelva nunca más a su antigua casa del barrio.',
          'Que espera que finalmente aprenda la lección de hoy.'
        ],
        correctAnswer: 'Que se porte bien y los visite cuando él tenga ganas.',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'do-seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué hace la maestra justo después de que la madre le dice "deme otro"?',
        options: [
          'Se ríe pensando que la madre está haciendo una broma.',
          'Se sorprende mucho y le pregunta si quiere otro niño.',
          'Llama de inmediato a Elena para que prepare su mochila.',
          'Se enoja con la madre por tratar así al pobre Fernando.'
        ],
        correctAnswer: 'Se sorprende mucho y le pregunta si quiere otro niño.',
      },
      {
        id: 'do-seq2',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué sucede al final del cuento, después de los saludos?',
        options: [
          'Fernando se va a su casa con su madre y su perro.',
          'La madre se va con Elena y la maestra con Fernando.',
          'Todos los niños se van a sus casas con sus familias.',
          'La madre se arrepiente y decide llevarse a su hijo.'
        ],
        correctAnswer: 'La madre se va con Elena y la maestra con Fernando.',
      },
      {
        id: 'do-seq3',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué hace Elena cuando la maestra la llama para que deje de jugar?',
        options: [
          'Corre feliz hacia la señora para darle un gran abrazo.',
          'Se queja y resopla porque quiere seguir con su juego.',
          'Se esconde detrás de un árbol para que no la encuentren.',
          'Empieza a llorar porque no conoce a su nueva madre.'
        ],
        correctAnswer: 'Se queja y resopla porque quiere seguir con su juego.',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'do-voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'En el texto, la maestra está "dubitativa". ¿Qué significa esto?',
        options: [
          'Que se siente muy segura de lo que está haciendo allí.',
          'Que tiene muchas dudas y no sabe bien qué decidir.',
          'Que está muy enojada con la madre por su actitud.',
          'Que tiene mucha prisa por terminar su día de clases.'
        ],
        correctAnswer: 'Que tiene muchas dudas y no sabe bien qué decidir.',
      },
      {
        id: 'do-voc2',
        category: QuestionCategory.VOCABULARY,
        questionText: 'Elena va al salón "resoplando contrariada". ¿Qué significa contrariada?',
        options: [
          'Estar muy contenta y feliz por una noticia buena.',
          'Estar muy triste y llorando por algo que se perdió.',
          'Estar enojada o disgustada por algo que no desea hacer.',
          'Estar cansada y con ganas de dormir una siesta larga.'
        ],
        correctAnswer: 'Estar enojada o disgustada por algo que no desea hacer.',
      },
      {
        id: 'do-voc3',
        category: QuestionCategory.VOCABULARY,
        questionText: 'La maestra "intercepta" a la madre. ¿Qué significa interceptar?',
        options: [
          'Saludar amablemente a una persona que acaba de llegar.',
          'Ignorar a alguien para no tener que hablar del tema.',
          'Detener a alguien en su camino para decirle algo.',
          'Acompañar a una persona hasta la puerta de salida.'
        ],
        correctAnswer: 'Detener a alguien en su camino para decirle algo.',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'do-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Qué situación extraña o "absurda" presenta este cuento?',
        options: [
          'Que un niño se porte mal durante el recreo escolar.',
          'Que una madre cambie a su hijo como si fuera un objeto.',
          'Que una maestra no sepa el nombre de sus alumnos.',
          'Que los niños prefieran ver televisión antes que jugar.'
        ],
        correctAnswer: 'Que una madre cambie a su hijo como si fuera un objeto.',
      },
      {
        id: 'do-main2',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Por qué la madre decide finalmente realizar el cambio de niños?',
        options: [
          'Porque Elena es mucho más linda que su hijo Fernando.',
          'Porque ya no sabe qué hacer con el mal comportamiento.',
          'Porque la maestra le insiste para que pruebe con otro.',
          'Porque siempre había deseado tener una hija mujer.'
        ],
        correctAnswer: 'Porque ya no sabe qué hacer con el mal comportamiento.',
      },
      {
        id: 'do-main3',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es el propósito principal de una historia como esta?',
        options: [
          'Enseñar a los padres cómo deben educar a sus hijos.',
          'Contar una anécdota real que sucedió en una escuela.',
          'Provocar risa mediante una situación exagerada y loca.',
          'Criticar el trabajo que hacen las maestras de grado.'
        ],
        correctAnswer: 'Provocar risa mediante una situación exagerada y loca.',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'do-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué Fernando asiente con la mirada baja al final del cuento?',
        options: [
          'Porque tiene mucho sueño y quiere ir a dormir pronto.',
          'Porque se siente triste o confundido por lo que sucede.',
          'Porque está muy contento de quedarse a vivir allí.',
          'Porque está buscando un juguete que se le cayó al suelo.'
        ],
        correctAnswer: 'Porque se siente triste o confundido por lo que sucede.',
      },
      {
        id: 'do-inf2',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Qué nos sugiere el comportamiento final de la maestra?',
        options: [
          'Que ella también ha decidido entrar en el juego absurdo.',
          'Que odia a Fernando y por eso se lo queda en la escuela.',
          'Que tiene miedo de la madre y por eso no dice nada más.',
          'Que las reglas de la escuela permiten cambiar alumnos.'
        ],
        correctAnswer: 'Que ella también ha decidido entrar en el juego absurdo.',
      },
      {
        id: 'do-inf3',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué Elena acepta irse con la señora tan rápido?',
        options: [
          'Porque ya conocía a la señora de antes del colegio.',
          'Porque le prometen cosas que le gustan, como la tele.',
          'Porque sus verdaderos padres no la querían en su casa.',
          'Porque prefiere vivir en una casa que tenga un gato.'
        ],
        correctAnswer: 'Porque le prometen cosas que le gustan, como la tele.',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'do-char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué rasgo define mejor a la madre en este relato?',
        options: [
          'Es una persona muy paciente, tranquila y cariñosa.',
          'Es alguien muy práctica que toma decisiones extrañas.',
          'Es una mujer muy estricta, enojona y gritona.',
          'Es una madre indiferente a la que no le importa nada.'
        ],
        correctAnswer: 'Es alguien muy práctica que toma decisiones extrañas.',
      },
      {
        id: 'do-char2',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo reacciona Fernando ante la noticia de que lo van a cambiar?',
        options: [
          'Empieza a gritar muy fuerte y a patear las puertas.',
          'Se ríe de la situación porque piensa que es una broma.',
          'Se queda callado y obedece sin decir una sola palabra.',
          'Le pide perdón a su mamá y promete portarse muy bien.'
        ],
        correctAnswer: 'Se queda callado y obedece sin decir una sola palabra.',
      },
      {
        id: 'do-char3',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué podemos decir sobre Elena según sus pocas palabras?',
        options: [
          'Que es una niña muy educada y respetuosa con todos.',
          'Que se interesa por las cosas materiales y la diversión.',
          'Que está muy angustiada por tener que irse con otra madre.',
          'Que es la mejor alumna de todo el tercer grado.'
        ],
        correctAnswer: 'Que se interesa por las cosas materiales y la diversión.',
      },
    ],
  },
};
