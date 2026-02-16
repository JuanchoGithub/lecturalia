
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
        questionText: '¿Qué palabra usa la vendedora para explicar qué es el "género" en los libros?',
        options: [
          'Dice que se refiere a las categorías literarias.',
          'Dice que se refiere a los tipos de telas finas.',
          'Dice que se refiere al nombre de los autores.',
          'Dice que se refiere a los libros de ciencia.'
        ],
        correctAnswer: 'Dice que se refiere a las categorías literarias.',
      },
      {
        id: 'cf-lit2',
        category: QuestionCategory.LITERAL,
        questionText: '¿Por qué la vendedora asocia la "fricción" con producir una chispa?',
        options: [
          'Porque la fricción ocurre al frotar dos piedras.',
          'Porque los libros de fricción tratan sobre el fuego.',
          'Porque así se llaman los libros de ciencia atómica.',
          'Porque es lo que sucede cuando se rompe un átomo.'
        ],
        correctAnswer: 'Porque la fricción ocurre al frotar dos piedras.',
      },
      {
        id: 'cf-lit3',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué le recomienda la vendedora al narrador sobre la palabra "tipo"?',
        options: [
          'Que es mejor llamar al escritor "autor" por respeto.',
          'Que "tipo" es una palabra que solo usan los amigos.',
          'Que no debe usarla porque significa "extraterrestre".',
          'Que debe usarla solo para hablar de géneros de tela.'
        ],
        correctAnswer: 'Que es mejor llamar al escritor "autor" por respeto.',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'cf-seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Cuál es el orden exacto de los términos que el narrador menciona buscando el correcto?',
        options: [
          'Fricción, fisión, afición y finalmente ficción.',
          'Fricción, ficción, fisión y finalmente afición.',
          'Fisión, fricción, afición y finalmente ficción.',
          'Afición, fisión, ficción y finalmente fricción.'
        ],
        correctAnswer: 'Fricción, fisión, afición y finalmente ficción.',
      },
      {
        id: 'cf-seq2',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué pasó inmediatamente después de que el narrador dijera correctamente "ciencia ficción"?',
        options: [
          'La vendedora le entregó el libro de su amigo.',
          'El narrador rechazó el nombre por significar "imaginario".',
          'La vendedora le explicó qué era la fisión de los átomos.',
          'El narrador decidió irse a frotar piedras al jardín.'
        ],
        correctAnswer: 'El narrador rechazó el nombre por significar "imaginario".',
      },
      {
        id: 'cf-seq3',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué hizo el narrador justo antes de despedirse de la señora?',
        options: [
          'Le pidió perdón por hablar de géneros de telas.',
          'Pensó que lo mejor era llamar a su amigo por teléfono.',
          'Compró un libro sobre aficiones musicales.',
          'Se puso a buscar un diccionario en el mostrador.'
        ],
        correctAnswer: 'Pensó que lo mejor era llamar a su amigo por teléfono.',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'cf-voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'Según la vendedora, ¿con qué se relaciona el término "fisión"?',
        options: [
          'Se relaciona con el estudio de los átomos.',
          'Se relaciona con el roce de dos piedras.',
          'Se relaciona con los gustos personales.',
          'Se relaciona con las telas de los vestidos.'
        ],
        correctAnswer: 'Se relaciona con el estudio de los átomos.',
      },
      {
        id: 'cf-voc2',
        category: QuestionCategory.VOCABULARY,
        questionText: '¿Qué significa "afición" según el ejemplo que da la señora?',
        options: [
          'Tener interés o gusto por algo, como la música.',
          'Escribir una historia sobre seres extraterrestres.',
          'Clasificar los libros por su tamaño y color.',
          'Equivocarse al decir el nombre de una ciencia.'
        ],
        correctAnswer: 'Tener interés o gusto por algo, como la música.',
      },
      {
        id: 'cf-voc3',
        category: QuestionCategory.VOCABULARY,
        questionText: '¿A qué se refiere la vendedora cuando habla de una "obra literaria"?',
        options: [
          'A un libro escrito por un autor o escritor.',
          'A una construcción de piedras para hacer chispas.',
          'A una tienda donde se venden géneros y telas.',
          'A una conversación entre un amigo y un tipo.'
        ],
        correctAnswer: 'A un libro escrito por un autor o escritor.',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'cf-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es el motivo principal por el que no se logra concretar la compra?',
        options: [
          'Porque el narrador no tiene dinero suficiente.',
          'Porque el narrador confunde las palabras y sus significados.',
          'Porque la vendedora no tiene libros de ciencia en su tienda.',
          'Porque el amigo le dio un nombre de libro que no existe.'
        ],
        correctAnswer: 'Porque el narrador confunde las palabras y sus significados.',
      },
      {
        id: 'cf-main2',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Qué intenta demostrar la autora con esta historia de malentendidos?',
        options: [
          'Que es muy importante estudiar física y química.',
          'Cómo una palabra parecida puede cambiar todo el sentido.',
          'Que las vendedoras de libros son personas muy pacientes.',
          'Que la ciencia ficción es un género muy aburrido.'
        ],
        correctAnswer: 'Cómo una palabra parecida puede cambiar todo el sentido.',
      },
      {
        id: 'cf-main3',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Por qué el narrador se siente confundido con la palabra "género"?',
        options: [
          'Porque piensa que solo se usa para hablar de telas.',
          'Porque no sabe leer las etiquetas de los libros.',
          'Porque la vendedora lo trata como a un extraterrestre.',
          'Porque prefiere la palabra "tipo" para los autores.'
        ],
        correctAnswer: 'Porque piensa que solo se usa para hablar de telas.',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'cf-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué el narrador cree que la vendedora lo tomó por un "extraterrestre"?',
        options: [
          'Por la cara de sorpresa que ella puso al escucharlo.',
          'Porque él llevaba un disfraz de carnaval muy raro.',
          'Porque él venía de otro planeta a buscar libros.',
          'Porque la vendedora le preguntó de qué galaxia era.'
        ],
        correctAnswer: 'Por la cara de sorpresa que ella puso al escucharlo.',
      },
      {
        id: 'cf-inf2',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Qué podemos deducir sobre la forma de pensar del narrador?',
        options: [
          'Que es una persona muy literal que se distrae con las palabras.',
          'Que es un experto en ciencia que busca errores en los libros.',
          'Que no le gusta leer y solo va a la tienda por su amigo.',
          'Que es un hombre muy maleducado que insulta a los autores.'
        ],
        correctAnswer: 'Que es una persona muy literal que se distrae con las palabras.',
      },
      {
        id: 'cf-inf3',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Cuál es la ironía del final del cuento?',
        options: [
          'Que el hombre dice la palabra correcta pero la rechaza.',
          'Que la vendedora finalmente no le quiso vender nada.',
          'Que el amigo en realidad le había recomendado un libro de cocina.',
          'Que el narrador se olvidó el teléfono para llamar a su amigo.'
        ],
        correctAnswer: 'Que el hombre dice la palabra correcta pero la rechaza.',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'cf-char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo describirías la actitud de la vendedora en el diálogo?',
        options: [
          'Es una persona paciente que intenta explicar cada término.',
          'Es una mujer apurada que quiere que el cliente se vaya.',
          'Es una vendedora distraída que no conoce sus propios libros.',
          'Es alguien muy enojado porque el hombre no sabe hablar bien.'
        ],
        correctAnswer: 'Es una persona paciente que intenta explicar cada término.',
      },
      {
        id: 'cf-char2',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué rasgo define mejor al narrador de esta historia?',
        options: [
          'Su persistencia para encontrar el nombre exacto, aunque se equivoque.',
          'Su timidez al hablar con personas que no conoce.',
          'Su gran sabiduría sobre los átomos y la fricción de piedras.',
          'Su desinterés total por los consejos que le da su amigo.'
        ],
        correctAnswer: 'Su persistencia para encontrar el nombre exacto, aunque se equivoque.',
      },
      {
        id: 'cf-char3',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Por qué el narrador se molesta cuando le dicen "género"?',
        options: [
          'Porque él cree que está en una librería y no en una tienda de ropa.',
          'Porque no le gusta que la vendedora le corrija su forma de hablar.',
          'Porque piensa que los géneros son solo para los libros de historia.',
          'Porque prefiere que le muestren libros de "ciencia fricción".'
        ],
        correctAnswer: 'Porque él cree que está en una librería y no en una tienda de ropa.',
      },
    ],
  },
};
