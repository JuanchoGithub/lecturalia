
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
—Es que no se trata de eso, la escuela está llena de niños…
—Pues cámbiemelo y listo.
—(Dubitativa). No, pero…
—Casi mejor pruebo con una niña, estoy pensando.
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
        questionText: '¿Qué le pide la mamá a la maestra después de escuchar cómo se portó Fernando?',
        options: ['Un castigo para Fernando', 'Hablar con el director', 'Que le dé otro niño', 'Llevarse a Fernando a casa'],
        correctAnswer: 'Que le dé otro niño',
      },
      {
        id: 'do-lit2',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué es lo primero que pregunta Elena al saber que se va con una nueva mamá?',
        options: ['Si tendrá juguetes', 'Si hay tele', 'Si tendrá un perro', 'Si puede seguir jugando'],
        correctAnswer: 'Si hay tele',
      },
      {
        id: 'do-lit3',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué le dice la mamá a Fernando al despedirse de él?',
        options: ['"Te voy a extrañar mucho"', '"Pórtate bien con tu nueva familia y ven a visitarnos"', '"No vuelvas nunca más"', '"Espero que aprendas la lección"'],
        correctAnswer: '"Pórtate bien con tu nueva familia y ven a visitarnos"',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'do-seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué sucede justo después de que la mamá le dice a la maestra "deme otro"?',
        options: ['La maestra se ríe', 'La maestra se enoja', 'La maestra se sorprende y pregunta "¿Otro niño?"', 'La maestra llama a otro niño'],
        correctAnswer: 'La maestra se sorprende y pregunta "¿Otro niño?"',
      },
      {
        id: 'do-seq2',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué pasa al final del cuento?',
        options: ['Fernando se va a casa con su mamá', 'La mamá y Elena se van juntas, y la maestra se queda con Fernando', 'Todos se van a sus casas', 'La mamá se arrepiente y se lleva a Fernando'],
        correctAnswer: 'La mamá y Elena se van juntas, y la maestra se queda con Fernando',
      },
      {
        id: 'do-seq3',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué hace Elena al ser llamada por la maestra?',
        options: ['Corre feliz hacia su nueva mamá', 'Se queja porque está jugando pero finalmente va', 'Se esconde', 'Empieza a llorar'],
        correctAnswer: 'Se queja porque está jugando pero finalmente va',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'do-voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'Cuando la maestra está "(Dubitativa)", ¿qué significa?',
        options: ['Enojada', 'Segura', 'Dudando o indecisa', 'Cansada'],
        correctAnswer: 'Dudando o indecisa',
      },
      {
        id: 'do-voc2',
        category: QuestionCategory.VOCABULARY,
        questionText: 'La niña va al salón "resoplando contrariada". ¿Qué significa "contrariada"?',
        options: ['Contenta y feliz', 'Triste y llorando', 'Enojada o disgustada por algo que no quiere hacer', 'Cansada y con sueño'],
        correctAnswer: 'Enojada o disgustada por algo que no quiere hacer',
      },
      {
        id: 'do-voc3',
        category: QuestionCategory.VOCABULARY,
        questionText: 'La maestra "intercepta" a la madre a la salida. ¿Qué significa "interceptar"?',
        options: ['Saludar amablemente', 'Ignorar', 'Detener en su camino', 'Acompañar'],
        correctAnswer: 'Detener en su camino',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'do-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Qué hace que esta historia sea humorística o graciosa?',
        options: ['El mal comportamiento de Fernando', 'La tristeza de la mamá', 'La idea absurda de cambiar a un hijo como si fuera un objeto', 'La reacción de Elena'],
        correctAnswer: 'La idea absurda de cambiar a un hijo como si fuera un objeto',
      },
      {
        id: 'do-main2',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Por qué la mamá decide "cambiar" a su hijo?',
        options: ['Porque ya no lo quiere', 'Porque está cansada de que se porte mal y no sabe qué más hacer', 'Porque la maestra se lo sugiere', 'Porque quiere una niña'],
        correctAnswer: 'Porque está cansada de que se porte mal y no sabe qué más hacer',
      },
      {
        id: 'do-main3',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es el propósito de la historia?',
        options: ['Enseñar cómo educar a los niños', 'Mostrar una situación realista en una escuela', 'Provocar risa a través de una situación exagerada y absurda', 'Criticar a las maestras'],
        correctAnswer: 'Provocar risa a través de una situación exagerada y absurda',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'do-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Cómo crees que se siente Fernando al final de la historia?',
        options: ['Feliz porque se queda en la escuela', 'Enojado con su mamá', 'Triste, arrepentido y quizás asustado', 'Indiferente'],
        correctAnswer: 'Triste, arrepentido y quizás asustado',
      },
      {
        id: 'do-inf2',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Crees que la mamá y la maestra realmente intercambiaron a los niños para siempre?',
        options: ['Sí, porque la mamá se fue con Elena', 'No, probablemente es una broma o una lección para Fernando', 'Sí, porque Fernando se portaba muy mal', 'No se sabe'],
        correctAnswer: 'No, probablemente es una broma o una lección para Fernando',
      },
      {
        id: 'do-inf3',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué la maestra finalmente acepta el "cambio" de niños?',
        options: ['Porque odiaba a Fernando', 'Porque le tenía miedo a la mamá', 'Porque sigue el juego absurdo de la mamá', 'Porque las reglas de la escuela lo permiten'],
        correctAnswer: 'Porque sigue el juego absurdo de la mamá',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'do-char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué dos palabras describen mejor a la mamá de Fernando?',
        options: ['Paciente y tranquila', 'Exagerada y con un sentido del humor particular', 'Estricta y enojona', 'Indiferente y despreocupada'],
        correctAnswer: 'Exagerada y con un sentido del humor particular',
      },
       {
        id: 'do-char2',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo reacciona Fernando durante toda la conversación?',
        options: ['Grita y protesta', 'Se ríe de la situación', 'No dice nada y mira hacia abajo', 'Le pide perdón a su mamá'],
        correctAnswer: 'No dice nada y mira hacia abajo',
      },
      {
        id: 'do-char3',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué nos muestra la reacción de Elena ("¿Y hay tele?") sobre los niños en general?',
        options: ['Que son muy educados', 'Que se adaptan fácilmente a las nuevas situaciones si hay algo que les interesa', 'Que no les importan sus padres', 'Que solo piensan en jugar'],
        correctAnswer: 'Que se adaptan fácilmente a las nuevas situaciones si hay algo que les interesa',
      },
    ],
  },
};
