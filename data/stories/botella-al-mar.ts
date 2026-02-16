
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
        questionText: '¿Por qué la niña tiene miedo de dormirse al inicio?',
        options: [
          'Porque no tiene nada de sueño.',
          'Porque teme cerrar sus ojos.',
          'Porque quiere seguir jugando.',
          'Porque el cuarto está oscuro.'
        ],
        correctAnswer: 'Porque teme cerrar sus ojos.',
      },
      {
        id: 'bam-lit2',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué historia elige la niña para escuchar?',
        options: [
          'La de una nena como un carozo.',
          'La de un capitán en un barco.',
          'La de un gigante en un bosque.',
          'La de una princesa muy valiente.'
        ],
        correctAnswer: 'La de una nena como un carozo.',
      },
      {
        id: 'bam-lit3',
        category: QuestionCategory.LITERAL,
        questionText: '¿De qué color es el libro que abre la mamá?',
        options: [
          'Es un gran libro de color rojo.',
          'Es un libro viejo de color verde.',
          'Es un libro de tapas muy azules.',
          'Es un pequeño libro de oro.'
        ],
        correctAnswer: 'Es un libro de tapas muy azules.',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'bam-seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué ocurre apenas la mamá comienza el relato?',
        options: [
          'La niña se duerme al instante.',
          'La voz se empieza a sentir lejos.',
          'La niña pide que cambie el libro.',
          'La madre cierra la ventana fría.'
        ],
        correctAnswer: 'La voz se empieza a sentir lejos.',
      },
      {
        id: 'bam-seq2',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué hace la niña justo antes de que la madre le ofrezca el cuento?',
        options: [
          'Se ríe con ganas en su cama.',
          'Llora y explica su gran temor.',
          'Busca un pétalo de rosa roja.',
          'Se tapa con su manta gruesa.'
        ],
        correctAnswer: 'Llora y explica su gran temor.',
      },
      {
        id: 'bam-seq3',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué desea hacer la niña cuando el cuento está terminando?',
        options: [
          'Pedir que lo cuente otra vez.',
          'Encender la luz de su cuarto.',
          'Cerrar el libro de tapas azules.',
          'Abrazar a su mamá muy fuerte.'
        ],
        correctAnswer: 'Pedir que lo cuente otra vez.',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'bam-voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'En el cuento se dice que la mujer "ansiaba" una niña. ¿Qué significa?',
        options: [
          'Que odiaba mucho esa idea.',
          'Que tenía miedo de la nena.',
          'Que deseaba eso con fuerza.',
          'Que olvidaba pedir el deseo.'
        ],
        correctAnswer: 'Que deseaba eso con fuerza.',
      },
      {
        id: 'bam-voc2',
        category: QuestionCategory.VOCABULARY,
        questionText: '¿Qué quiere decir que la voz se vuelve "lejana"?',
        options: [
          'Que se escucha más fuerte.',
          'Que se oye con mucha furia.',
          'Que se siente suave y distante.',
          'Que se corta de repente.'
        ],
        correctAnswer: 'Que se siente suave y distante.',
      },
      {
        id: 'bam-voc3',
        category: QuestionCategory.VOCABULARY,
        questionText: 'El texto dice que "bastaba" un pétalo para cubrir a la nena. ¿Qué significa?',
        options: [
          'Que no servía para nada.',
          'Que era algo insuficiente.',
          'Que alcanzaba para hacerlo.',
          'Que era demasiado grande.'
        ],
        correctAnswer: 'Que alcanzaba para hacerlo.',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'bam-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es el tema más importante de este relato?',
        options: [
          'La lectura calma los temores.',
          'El mar es un lugar peligroso.',
          'Los libros deben ser azules.',
          'Crecer es algo que asusta.'
        ],
        correctAnswer: 'La lectura calma los temores.',
      },
      {
        id: 'bam-main2',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es el beneficio de la historia para la protagonista?',
        options: [
          'Le enseña palabras difíciles.',
          'Le quita el miedo al descanso.',
          'Le explica qué son los carozos.',
          'Le permite jugar en el jardín.'
        ],
        correctAnswer: 'Le quita el miedo al descanso.',
      },
      {
        id: 'bam-main3',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Por qué la voz de la madre es fundamental aquí?',
        options: [
          'Porque grita muy fuerte.',
          'Porque da paz y seguridad.',
          'Porque canta una canción.',
          'Porque lee sin equivocarse.'
        ],
        correctAnswer: 'Porque da paz y seguridad.',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'bam-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué la niña no puede hablar al final del cuento?',
        options: [
          'Porque el sueño la venció.',
          'Porque le duele la garganta.',
          'Porque se olvidó qué decir.',
          'Porque su madre se enojó.'
        ],
        correctAnswer: 'Porque el sueño la venció.',
      },
      {
        id: 'bam-inf2',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Cómo se siente la niña mientras escucha el relato?',
        options: [
          'Siente nervios por la lluvia.',
          'Siente alivio y tranquilidad.',
          'Siente hambre por la fruta.',
          'Siente ganas de irse de casa.'
        ],
        correctAnswer: 'Siente alivio y tranquilidad.',
      },
      {
        id: 'bam-inf3',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué la mujer del cuento quería una nena que no creciera?',
        options: [
          'Para que use ropa de pétalos.',
          'Para tenerla siempre con ella.',
          'Para que quepa en un carozo.',
          'Para no comprar libros nuevos.'
        ],
        correctAnswer: 'Para tenerla siempre con ella.',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'bam-char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué cualidad define mejor a la mamá del cuento?',
        options: [
          'Es una persona impaciente.',
          'Es una madre muy afectuosa.',
          'Es una mujer muy distraída.',
          'Es una lectora muy veloz.'
        ],
        correctAnswer: 'Es una madre muy afectuosa.',
      },
      {
        id: 'bam-char2',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo está la niña al inicio de la historia?',
        options: [
          'Está muy alegre y saltando.',
          'Está preocupada y llorosa.',
          'Está aburrida de su libro.',
          'Está cansada de leer sola.'
        ],
        correctAnswer: 'Está preocupada y llorosa.',
      },
      {
        id: 'bam-char3',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo es el vínculo entre la madre y su hija?',
        options: [
          'Es un vínculo de distancia.',
          'Es una unión de mucha confianza.',
          'Es una relación de peleas.',
          'Es un trato de poca importancia.'
        ],
        correctAnswer: 'Es una unión de mucha confianza.',
      },
    ],
  },
};
