import { Story, QuestionCategory } from '../../types';

export const unLibroDeCienciaFriccion: Story = {
  id: 'un-libro-de-ciencia-friccion',
  title: 'Un libro de ciencia fricción',
  author: 'Adela Basch',
  coverImage: `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg width="600" height="400" viewBox="0 0 100 66.67" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#FB5607" /><g transform="rotate(27) translate(3)"><path d="M 0 0 L 50 0 L 50 50 L 0 50 Z" fill="#F7F9FB" opacity="0.5" transform="translate(0, 0)"/><path d="M 50 16 L 100 16 L 100 66 L 50 66 Z" fill="#3A86FF" opacity="0.5" transform="translate(0, 0)"/></g></svg>')}`,
  content: `
Me acerqué a la señora que atendía detrás del mostrador y le pedí que me mostrara algún libro de “ciencia fricción”. Le dije que un amigo me había insistido mucho en que leyera algo de ese tipo.
Ella me miró con una cara tan sorprendida que por un momento pensé que tal vez me habría tomado por un extraterrestre. Después me dijo:
—¿De ese tipo? ¿De qué tipo? Y además, al autor de un libro no está bien decirle “tipo”. Se merece más respeto. Por favor, llámelo autor o escritor.
Y este fue el diálogo que mantuvimos:
—Señora, al decir “tipo” no me refería al autor, sino a la clase de libro. Mi amigo me recomendó que leyera un libro de “ciencia fricción”. Quiero un libro de esa temática, de ese…
—Género.
—Señora, no estoy hablando de géneros ni de telas. Estoy hablando de libros.
—Señor, permítame compartir con usted una pequeña reflexión. Cuando se habla de libros, la palabra “género” se refiere a las diferentes categorías que puede tener una obra literaria.
—Entonces quiero un libro del género “ciencia fricción”.
—Disculpe, pero la verdad es que no sé qué es la “ciencia fricción”. Aunque tal vez tenga algo que ver con lo que ocurre cuando dos o más objetos se rozan, por ejemplo es lo que sucede al frotar dos piedras para producir una chispa.
—Entonces seguramente cometí una equivocación. Ha de ser un libro de “ciencia fisión”.
—¿“Ciencia fisión”? No conozco ese tipo de libro. Pero, déjeme pensar… la fisión puede tener que ver con los átomos. Quizás…
—Entonces no puede ser eso. Me parece que tuve una confusión. Creo que mi amigo habló de “ciencia afición”. ¿Tiene algún libro de eso?
—¿De eso? ¿Usted quiere decir de “ciencia afición”? Yo no conozco esa clase de libros. Pero, a ver, un momento… La afición tiene que ver con algo que nos gusta, por ejemplo, alguien puede ser aficionado a la música, entonces…
—Entonces, no creo que sea eso. ¡Ya sé! ¡Lo que dijo mi amigo era “ciencia ficción”! ¡Creo que por fin lo digo con corrección!
—Sí, podría ser. Los libros de ficción se relacionan con temas o personajes imaginarios.
—¡Ah, no! Entonces, no es eso. Mire usted si mi amigo me va a recomendar un libro donde la ciencia se tome como algo imaginario… No veo ninguna conexión.
En ese momento pensé que lo mejor era llamar a mi amigo y pedirle que me aclarara lo que había dicho. De modo que me despedí de la señora que tan amablemente me había atendido y seguí mi camino en otra dirección.
  `,
  wordCount: 463,
  level: '3er Grado (Nivel M)',
  questions: {
    [QuestionCategory.LITERAL]: [
      {
        id: 'cf-lit1',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué tipo de libro fue a buscar el narrador a la tienda?',
        options: ['Un libro de historia', 'Un libro de cocina', 'Un libro de "ciencia fricción"', 'Un libro de poesía'],
        correctAnswer: 'Un libro de "ciencia fricción"',
      },
      {
        id: 'cf-lit2',
        category: QuestionCategory.LITERAL,
        questionText: '¿Por qué el narrador decide irse de la tienda al final?',
        options: ['Porque la señora lo trató mal', 'Porque la tienda iba a cerrar', 'Porque no encontró el libro que buscaba y decidió llamar a su amigo para aclarar el nombre', 'Porque no tenía dinero'],
        correctAnswer: 'Porque no encontró el libro que buscaba y decidió llamar a su amigo para aclarar el nombre',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'cf-seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Cuál fue la segunda versión incorrecta del nombre que dijo el narrador, después de "ciencia fricción"?',
        options: ['Ciencia afición', 'Ciencia fisión', 'Ciencia ficción', 'Ciencia corrección'],
        correctAnswer: 'Ciencia fisión',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'cf-voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'Cuando la señora habla de "género" literario, ¿a qué se refiere?',
        options: ['A si el autor es hombre o mujer', 'Al tipo de tela de la tapa del libro', 'A las diferentes categorías de libros (aventura, misterio, etc.)', 'Al tamaño del libro'],
        correctAnswer: 'A las diferentes categorías de libros (aventura, misterio, etc.)',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'cf-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es el problema central de la historia?',
        options: ['Un narrador que no sabe qué libro comprar', 'Una vendedora que no quiere ayudar', 'Una confusión graciosa basada en el juego de palabras entre "ficción", "fricción", "fisión" y "afición"', 'Un amigo que da malas recomendaciones'],
        correctAnswer: 'Una confusión graciosa basada en el juego de palabras entre "ficción", "fricción", "fisión" y "afición"',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'cf-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué el narrador rechaza la idea de "ciencia ficción" al final?',
        options: ['Porque suena muy complicado', 'Porque no le gusta que la ciencia se mezcle con cosas imaginarias', 'Porque la señora le dijo que no existía', 'Porque su amigo le dijo que ese no era el nombre'],
        correctAnswer: 'Porque no le gusta que la ciencia se mezcle con cosas imaginarias',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'cf-char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo es el narrador de la historia?',
        options: ['Muy seguro de sí mismo', 'Un poco confundido pero persistente', 'Enojado e impaciente', 'Tímido y callado'],
        correctAnswer: 'Un poco confundido pero persistente',
      },
    ],
  },
};
