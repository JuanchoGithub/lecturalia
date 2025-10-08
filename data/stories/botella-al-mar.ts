import { Story, QuestionCategory } from '../../types';

export const botellaAlMar: Story = {
  id: 'botella-al-mar',
  title: 'Botella al mar',
  author: 'Graciela Cabal',
  coverImage: 'https://www.loqueleo.com/ar/uploads/2015/11/resized/800_9789504643272.jpg',
  content: `
Tengo miedo y lloro y no me quiero dormir, ¿sabés, mamá? Porque cuando me duermo cierro los ojos, como los muertos, que andan todo el tiempo con los ojos cerrados...

–¿Y si te cuento un cuento?

–Un cuento, bueno. El de la nena como un carozo...

Y entonces sucede.

Mi mamá abre el libro de tapas azules y las palabras de adentro del libro empiezan a salir por la boca de mi mamá.

“Érase una vez una mujer que ansiaba tener una niña, pero una niña pequeñita que no creciese nunca, para poder conservarla siempre a su lado...”. Y la voz sigue y sigue, cada vez más lejana, hablándome de esa nena tan pero tan chiquita que bastaba el pétalo de una rosa para cubrirla del frío.

Yo no quiero que el cuento termine. Yo quiero decirle a mi mamá que me lo cuente otra vez... El mismo cuento, sin saltarse nada, sin cambiar ninguna palabra. Pero no puedo hablar. Porque parece que el cuento llegó para llevarse el miedo y traer el sueño.
  `,
  wordCount: 153,
  level: '3er Grado (Nivel L)',
  questions: {
    [QuestionCategory.LITERAL]: [
      {
        id: 'bam-lit1',
        category: QuestionCategory.LITERAL,
        questionText: '¿Por qué la niña no quería dormirse al principio?',
        options: ['Porque no tenía sueño', 'Porque tenía miedo de cerrar los ojos como los muertos', 'Porque quería seguir jugando', 'Porque su mamá estaba enojada'],
        correctAnswer: 'Porque tenía miedo de cerrar los ojos como los muertos',
      },
      {
        id: 'bam-lit2',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué cuento le pide la niña a su mamá?',
        options: ['El de la princesa y el sapo', 'El de la nena como un carozo', 'El del lobo y los tres cerditos', 'El de un barco en el mar'],
        correctAnswer: 'El de la nena como un carozo',
      },
      {
        id: 'bam-lit3',
        category: QuestionCategory.LITERAL,
        questionText: '¿De qué color eran las tapas del libro que lee la mamá?',
        options: ['Rojas', 'Verdes', 'Azules', 'Amarillas'],
        correctAnswer: 'Azules',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'bam-seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué sucede justo después de que la mamá empieza a leer el cuento?',
        options: ['La niña se duerme', 'La voz de la mamá se vuelve cada vez más lejana', 'La niña le pide otro cuento', 'La niña interrumpe a la mamá'],
        correctAnswer: 'La voz de la mamá se vuelve cada vez más lejana',
      },
      {
        id: 'bam-seq2',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué hace la niña antes de que su mamá le ofrezca contarle un cuento?',
        options: ['Le pide un vaso de agua', 'Llora y dice que tiene miedo de dormir', 'Se ríe y juega en la cama', 'Le pide a su mamá que cante una canción'],
        correctAnswer: 'Llora y dice que tiene miedo de dormir',
      },
      {
        id: 'bam-seq3',
        category: QuestionCategory.SEQUENCING,
        questionText: 'Al final del texto, ¿qué quiere hacer la niña pero no puede?',
        options: ['Pedirle a su mamá que la abrace', 'Pedirle a su mamá que encienda la luz', 'Decirle a su mamá que le cuente el cuento otra vez', 'Decirle a su mamá que ya no tiene miedo'],
        correctAnswer: 'Decirle a su mamá que le cuente el cuento otra vez',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'bam-voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'En la frase "una mujer que ansiaba tener una niña", ¿qué significa "ansiaba"?',
        options: ['Odiaba', 'Temía', 'Deseaba con muchas ganas', 'Se olvidaba'],
        correctAnswer: 'Deseaba con muchas ganas',
      },
      {
        id: 'bam-voc2',
        category: QuestionCategory.VOCABULARY,
        questionText: 'Cuando la voz de la mamá se vuelve "cada vez más lejana", ¿qué quiere decir "lejana"?',
        options: ['Que se oye más fuerte', 'Que se oye más triste', 'Que se oye como si viniera de muy lejos, más suave', 'Que se oye más rápido'],
        correctAnswer: 'Que se oye como si viniera de muy lejos, más suave',
      },
      {
        id: 'bam-voc3',
        category: QuestionCategory.VOCABULARY,
        questionText: 'La niña del cuento era tan chiquita que "bastaba el pétalo de una rosa para cubrirla del frío". ¿Qué significa "bastaba"?',
        options: ['Que no le gustaba', 'Que era demasiado', 'Que era suficiente', 'Que no era posible'],
        correctAnswer: 'Que era suficiente',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'bam-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es la idea principal de esta pequeña historia?',
        options: ['Que a las niñas les gustan los cuentos de princesas', 'Que un cuento contado por una mamá puede calmar el miedo y traer el sueño', 'Que no es bueno leer por la noche', 'Que las mamás siempre tienen libros azules'],
        correctAnswer: 'Que un cuento contado por una mamá puede calmar el miedo y traer el sueño',
      },
      {
        id: 'bam-main2',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Qué efecto tiene el cuento en la niña?',
        options: ['Le da más miedo', 'La hace enojar', 'Le quita el miedo y le trae el sueño', 'Le da hambre'],
        correctAnswer: 'Le quita el miedo y le trae el sueño',
      },
      {
        id: 'bam-main3',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Por qué es importante la voz de la mamá en la historia?',
        options: ['Porque grita muy fuerte', 'Porque es la que cuenta la historia y tranquiliza a la niña', 'Porque canta una canción de cuna', 'Porque regaña a la niña por no dormir'],
        correctAnswer: 'Porque es la que cuenta la historia y tranquiliza a la niña',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'bam-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué crees que la niña no puede hablar al final?',
        options: ['Porque está enojada con su mamá', 'Porque se quedó sin voz de tanto llorar', 'Porque se está quedando dormida gracias al cuento', 'Porque su mamá le dijo que se callara'],
        correctAnswer: 'Porque se está quedando dormida gracias al cuento',
      },
      {
        id: 'bam-inf2',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Cómo se siente la niña mientras escucha el cuento?',
        options: ['Asustada y nerviosa', 'Tranquila, segura y un poco triste de que termine', 'Aburrida e impaciente', 'Enojada y frustrada'],
        correctAnswer: 'Tranquila, segura y un poco triste de que termine',
      },
      {
        id: 'bam-inf3',
        category: QuestionCategory.INFERENCE,
        questionText: 'El cuento dentro del cuento habla de "una niña pequeñita que no creciese nunca, para poder conservarla siempre a su lado...". ¿Por qué crees que a la mamá de la historia le gusta leer ese cuento?',
        options: ['Porque es el único libro que tiene', 'Porque es una historia de aventuras', 'Porque quizás refleja el amor de una madre que quiere proteger a su hija siempre', 'Porque es un cuento muy corto'],
        correctAnswer: 'Porque quizás refleja el amor de una madre que quiere proteger a su hija siempre',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'bam-char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo es la mamá de la historia?',
        options: ['Impaciente y estricta', 'Cariñosa, paciente y comprensiva', 'Distraída y olvidadiza', 'Triste y cansada'],
        correctAnswer: 'Cariñosa, paciente y comprensiva',
      },
      {
        id: 'bam-char2',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo es la niña al principio de la historia?',
        options: ['Alegre y juguetona', 'Tranquila y callada', 'Asustada y triste', 'Enojada y caprichosa'],
        correctAnswer: 'Asustada y triste',
      },
      {
        id: 'bam-char3',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué podemos decir sobre la relación entre la mamá y la niña?',
        options: ['No se llevan bien', 'Es una relación de mucho amor y confianza', 'La mamá no entiende a la niña', 'Casi no hablan entre ellas'],
        correctAnswer: 'Es una relación de mucho amor y confianza',
      },
    ],
  },
};
