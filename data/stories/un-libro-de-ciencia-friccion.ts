
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
      {
        id: 'cf-lit3',
        category: QuestionCategory.LITERAL,
        questionText: '¿Cuál es la última versión del nombre que el narrador cree correcta antes de rendirse?',
        options: ['Ciencia fricción', 'Ciencia fisión', 'Ciencia afición', 'Ciencia ficción'],
        correctAnswer: 'Ciencia ficción',
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
      {
        id: 'cf-seq2',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué sucede justo después de que la señora le explica al narrador qué es la "fricción"?',
        options: ['El narrador se enoja', 'El narrador se da cuenta de su error y dice "ciencia fisión"', 'El narrador compra un libro sobre piedras', 'El narrador llama a su amigo'],
        correctAnswer: 'El narrador se da cuenta de su error y dice "ciencia fisión"',
      },
      {
        id: 'cf-seq3',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Cuál es el orden de los nombres incorrectos que usa el narrador?',
        options: ['Fricción, fisión, ficción, afición', 'Fricción, fisión, afición, ficción', 'Afición, fisión, fricción, ficción', 'Fricción, afición, fisión, ficción'],
        correctAnswer: 'Fricción, fisión, afición, ficción',
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
      {
        id: 'cf-voc2',
        category: QuestionCategory.VOCABULARY,
        questionText: 'La señora explica que la "fricción" es lo que ocurre cuando dos objetos se rozan. ¿Qué es "rozar"?',
        options: ['Chocar fuertemente', 'Pasar tocándose suavemente', 'Estar muy lejos', 'Mirarse fijamente'],
        correctAnswer: 'Pasar tocándose suavemente',
      },
      {
        id: 'cf-voc3',
        category: QuestionCategory.VOCABULARY,
        questionText: 'La señora dice que "afición" tiene que ver con algo que nos gusta. ¿Qué es un sinónimo de afición?',
        options: ['Odio', 'Obligación', 'Pasatiempo o hobby', 'Trabajo'],
        correctAnswer: 'Pasatiempo o hobby',
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
      {
        id: 'cf-main2',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es el propósito del diálogo entre el narrador y la vendedora?',
        options: ['Demostrar que el narrador no sabe nada', 'Vender un libro a toda costa', 'Crear humor a partir de los malentendidos', 'Explicar qué es la ciencia ficción'],
        correctAnswer: 'Crear humor a partir de los malentendidos',
      },
      {
        id: 'cf-main3',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Por qué la comunicación entre los personajes es tan difícil?',
        options: ['Porque hablan diferentes idiomas', 'Porque no se escuchan el uno al otro', 'Porque el narrador no recuerda la palabra correcta y la vendedora interpreta literalmente cada error', 'Porque la tienda es muy ruidosa'],
        correctAnswer: 'Porque el narrador no recuerda la palabra correcta y la vendedora interpreta literalmente cada error',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'cf-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué el narrador rechaza la idea de "ciencia ficción" al final?',
        options: ['Porque suena muy complicado', 'Porque malinterpreta la palabra "ficción" y no le gusta que la ciencia se mezcle con cosas imaginarias', 'Porque la señora le dijo que no existía', 'Porque su amigo le dijo que ese no era el nombre'],
        correctAnswer: 'Porque malinterpreta la palabra "ficción" y no le gusta que la ciencia se mezcle con cosas imaginarias',
      },
      {
        id: 'cf-inf2',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Cómo crees que se siente la señora que atiende la tienda?',
        options: ['Enojada y frustrada', 'Divertida por la situación', 'Un poco confundida pero tratando de ser amable y ayudar', 'Aburrida e indiferente'],
        correctAnswer: 'Un poco confundida pero tratando de ser amable y ayudar',
      },
      {
        id: 'cf-inf3',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Cuál es la palabra correcta que el amigo del narrador probablemente le recomendó?',
        options: ['Ciencia fricción', 'Ciencia fisión', 'Ciencia afición', 'Ciencia ficción'],
        correctAnswer: 'Ciencia ficción',
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
      {
        id: 'cf-char2',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué dos palabras describen a la señora de la tienda?',
        options: ['Grosera y apurada', 'Paciente y literal', 'Distraída y olvidadiza', 'Chistosa y burlona'],
        correctAnswer: 'Paciente y literal',
      },
      {
        id: 'cf-char3',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué actitud muestra el narrador ante sus propios errores?',
        options: ['Se avergüenza y se va', 'Se enoja con la vendedora', 'Intenta corregirse y sigue probando otras opciones', 'Niega que se equivocó'],
        correctAnswer: 'Intenta corregirse y sigue probando otras opciones',
      },
    ],
  },
};
