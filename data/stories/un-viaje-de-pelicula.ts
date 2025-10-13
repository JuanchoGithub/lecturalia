import { Story, QuestionCategory } from '../../types';

export const unViajeDePelicula: Story = {
  id: 'un-viaje-de-pelicula',
  title: 'Un viaje de película',
  author: 'Adela Basch',
  coverImage: `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg width="600" height="400" viewBox="0 0 100 66.67" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#FF006E" /><g transform="rotate(76) translate(8)"><path d="M 0 0 L 50 0 L 50 50 L 0 50 Z" fill="#F7F9FB" opacity="0.5" transform="translate(0, 0)"/><path d="M 50 16 L 100 16 L 100 66 L 50 66 Z" fill="#8338EC" opacity="0.5" transform="translate(0, 0)"/></g></svg>')}`,
  content: `
La última vez que fui al cine yo estaba en tren de divertirme. Por eso no me llamó la atención que en la boletería me preguntaran si quería ida solo o ida y vuelta, ni que el acomodador me dijera que la mochila la podía poner en el portaequipajes. Cuando entré en la sala, la película ya debía estar por empezar porque estaba bastante oscuro, y apenas me senté, arrancó.
Enseguida me di cuenta de que la pantalla no estaba adelante, sino que había dos pantallas a los costados de las filas de asientos y que la película que pasaban era de viajes. Al principio me pareció que la debían de haber filmado en mi barrio, porque todo me resultaba conocido: la estación de tren de la otra cuadra, la barrera, las vías. Pero enseguida el cine pegó una especie de sacudón y me encontré con escenas de paisajes tan insólitos que me felicité por haber elegido esa película.
También me di cuenta de que por las pantallas entraba un poco de corriente de aire, pero no me importó porque yo tenía unas ganas bárbaras de ver cine y la película ya me estaba atrapando. Era una de esas de aventuras interplanetarias, y estaba realmente muy bien hecha. Por eso tampoco me importó cuando vino el acomodador y sin encender las luces ni detener la película, dijo que teníamos que trasbordar a otro cine porque el nuestro se había quedado sin combustible. Yo lo único que quería era poder seguir viendo la película, así que acepté el trasbordo sin protestar.
La nueva sala era realmente mucho más grande y por las pantallas se veían unas escenas del cosmos como yo nunca había visto. Había millones y millones de galaxias que giraban por el espacio y se mostraban detalles de todas al mismo tiempo.
De pronto, apareció en primer plano la figura de un actor vestido muy raro y con esos maquillajes que logran un efecto como de otro mundo, que empezó a hablar en un idioma incomprensible. Los del cine se deben haber dado cuenta de que no se entendía nada, porque empezaron a pasar carteles con subtítulos. En uno de los carteles apareció mi nombre y me preguntaban si yo estaba dispuesta a seguir viendo la película durante varios días, si mi estado de salud era bueno y si no tenía problemas en que me pusieran sobre la cabeza un casco de traducción automática de idiomas.
La verdad es que yo siempre fui loca por el cine y, como además había sacado una entrada de ida y vuelta, no lo pensé dos veces y enseguida dije que sí.
  `,
  wordCount: 462,
  level: '4to Grado (Nivel O)',
  questions: {
    [QuestionCategory.LITERAL]: [
      {
        id: 'uvdp-lit1',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué le preguntó el acomodador a la narradora sobre su mochila?',
        options: ['Que la dejara en la entrada', 'Que la pusiera en el portaequipajes', 'Que la guardara debajo del asiento', 'Que no podía entrar con mochila'],
        correctAnswer: 'Que la pusiera en el portaequipajes',
      },
      {
        id: 'uvdp-lit2',
        category: QuestionCategory.LITERAL,
        questionText: '¿Por qué tuvieron que "trasbordar" a otro cine?',
        options: ['Porque la película se cortó', 'Porque el cine se había quedado sin combustible', 'Porque la sala estaba llena', 'Porque la pantalla se rompió'],
        correctAnswer: 'Porque el cine se había quedado sin combustible',
      },
      {
        id: 'uvdp-lit3',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué le preguntaron a la narradora en un cartel durante la película?',
        options: ['Si quería palomitas de maíz', 'Si le estaba gustando la película', 'Si estaba dispuesta a seguir viendo la película por varios días y usar un casco de traducción', 'Si quería cambiar de asiento'],
        correctAnswer: 'Si estaba dispuesta a seguir viendo la película por varios días y usar un casco de traducción',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'uvdp-seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué sucedió justo después de que la narradora se diera cuenta de que el cine era como un tren?',
        options: ['La película terminó', 'El cine pegó un sacudón y aparecieron paisajes insólitos', 'El acomodador le pidió el boleto', 'Apareció un actor en la pantalla'],
        correctAnswer: 'El cine pegó un sacudón y aparecieron paisajes insólitos',
      },
      {
        id: 'uvdp-seq2',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué pasó después de que la narradora se diera cuenta de que había corriente de aire por las pantallas?',
        options: ['Se cambió de asiento', 'Pidió que apagaran el aire', 'El acomodador les dijo que tenían que trasbordar a otro cine', 'La película se detuvo'],
        correctAnswer: 'El acomodador les dijo que tenían que trasbordar a otro cine',
      },
      {
        id: 'uvdp-seq3',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué hizo la narradora al final de la historia cuando le propusieron continuar el viaje?',
        options: ['Se negó porque tenía que volver a casa', 'Dijo que sí sin pensarlo dos veces', 'Pidió hablar con el director del cine', 'Se bajó en la siguiente estación'],
        correctAnswer: 'Dijo que sí sin pensarlo dos veces',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'uvdp-voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'En la frase "paisajes tan insólitos", ¿qué significa "insólitos"?',
        options: ['Muy comunes y aburridos', 'Raros, poco comunes, extraordinarios', 'Feos y desagradables', 'Muy conocidos'],
        correctAnswer: 'Raros, poco comunes, extraordinarios',
      },
      {
        id: 'uvdp-voc2',
        category: QuestionCategory.VOCABULARY,
        questionText: 'El actor hablaba un idioma "incomprensible". ¿Qué significa "incomprensible"?',
        options: ['Muy fácil de entender', 'Que no se puede entender', 'Muy antiguo', 'Muy poético'],
        correctAnswer: 'Que no se puede entender',
      },
      {
        id: 'uvdp-voc3',
        category: QuestionCategory.VOCABULARY,
        questionText: 'Tuvieron que "trasbordar" a otro cine. ¿Qué es trasbordar?',
        options: ['Comprar otra entrada', 'Cambiar de película', 'Pasar de un vehículo a otro', 'Salir del cine'],
        correctAnswer: 'Pasar de un vehículo a otro',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'uvdp-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es la idea central de esta historia?',
        options: ['Una crítica a los cines modernos.', 'La descripción de una película de ciencia ficción.', 'Una experiencia surrealista y fantástica donde ir al cine se convierte en un verdadero viaje en tren por el espacio.', 'Los problemas de transporte en la ciudad.'],
        correctAnswer: 'Una experiencia surrealista y fantástica donde ir al cine se convierte en un verdadero viaje en tren por el espacio.',
      },
      {
        id: 'uvdp-main2',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cómo se mezcla la idea de "cine" y "viaje en tren" en la historia?',
        options: ['La película trataba sobre trenes', 'La boletería, el portaequipajes, las pantallas como ventanas, el sacudón y el trasbordo son elementos de un tren aplicados al cine', 'El cine estaba dentro de una estación de tren', 'La narradora se durmió y soñó que viajaba en tren'],
        correctAnswer: 'La boletería, el portaequipajes, las pantallas como ventanas, el sacudón y el trasbordo son elementos de un tren aplicados al cine',
      },
      {
        id: 'uvdp-main3',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Qué tipo de película estaba viendo la narradora?',
        options: ['Una comedia romántica', 'Un documental de viajes', 'Una de aventuras interplanetarias', 'Una película de terror'],
        correctAnswer: 'Una de aventuras interplanetarias',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'uvdp-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué la narradora no se extraña de las cosas raras que le pasan en el cine?',
        options: ['Porque está dormida y es un sueño', 'Porque estaba "en tren de divertirme" y aceptó todo como parte de una experiencia diferente', 'Porque ya le había pasado antes', 'Porque pensó que era una broma'],
        correctAnswer: 'Porque estaba "en tren de divertirme" y aceptó todo como parte de una experiencia diferente',
      },
      {
        id: 'uvdp-inf2',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué la narradora no se dio cuenta de que estaba en un tren al principio?',
        options: ['Porque estaba muy oscuro y pensó que los paisajes eran parte de la película', 'Porque el acomodador la engañó', 'Porque se quedó dormida', 'Porque el cine olía a tren'],
        correctAnswer: 'Porque estaba muy oscuro y pensó que los paisajes eran parte de la película',
      },
      {
        id: 'uvdp-inf3',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Qué significa la frase "yo siempre fui loca por el cine"?',
        options: ['Que no le gusta el cine', 'Que le apasiona tanto el cine que está dispuesta a vivir una aventura increíble por él', 'Que trabaja en un cine', 'Que ve películas de terror'],
        correctAnswer: 'Que le apasiona tanto el cine que está dispuesta a vivir una aventura increíble por él',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'uvdp-char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo es la narradora de la historia?',
        options: ['Miedosa y desconfiada', 'Abierta a la aventura y con mucha imaginación', 'Crítica y quejosa', 'Distraída y olvidadiza'],
        correctAnswer: 'Abierta a la aventura y con mucha imaginación',
      },
      {
        id: 'uvdp-char2',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo reacciona la narradora ante los eventos extraños?',
        options: ['Con miedo y pánico', 'Con enojo y protestas', 'Con naturalidad y aceptación, sin asustarse', 'Con indiferencia'],
        correctAnswer: 'Con naturalidad y aceptación, sin asustarse',
      },
      {
        id: 'uvdp-char3',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué nos dice la decisión final de la narradora sobre su personalidad?',
        options: ['Es irresponsable', 'Es aventurera y no le teme a lo desconocido', 'Es muy influenciable', 'No le gusta tomar decisiones'],
        correctAnswer: 'Es aventurera y no le teme a lo desconocido',
      },
    ],
  },
};
