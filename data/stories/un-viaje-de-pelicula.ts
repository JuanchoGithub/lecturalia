
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
        questionText: '¿En qué lugar le indicó el acomodador que debía guardar su mochila?',
        options: [
          'En el portaequipajes, como si estuviera en un tren.',
          'Debajo de su butaca para no molestar al resto.',
          'En un armario especial al fondo de la sala oscura.',
          'En el guardarropa que estaba junto a la boletería.'
        ],
        correctAnswer: 'En el portaequipajes, como si estuviera en un tren.',
      },
      {
        id: 'uvdp-lit2',
        category: QuestionCategory.LITERAL,
        questionText: '¿Cuál fue la razón técnica por la que debieron cambiar de sala de cine?',
        options: [
          'Porque la cinta de la película se había cortado de repente.',
          'Porque la sala se había quedado sin combustible para seguir.',
          'Porque el proyector de imágenes se había roto por el sacudón.',
          'Porque el acomodador no encontraba los boletos de ida y vuelta.'
        ],
        correctAnswer: 'Porque la sala se había quedado sin combustible para seguir.',
      },
      {
        id: 'uvdp-lit3',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué le pedían que se colocara sobre la cabeza según el cartel con su nombre?',
        options: [
          'Una corona de estrellas para ser la reina del cosmos.',
          'Un casco de traducción automática para entender el idioma.',
          'Unos anteojos especiales para ver las galaxias de colores.',
          'Una gorra de marinero para completar el viaje interplanetario.'
        ],
        correctAnswer: 'Un casco de traducción automática para entender el idioma.',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'uvdp-seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué ocurrió inmediatamente después de que el cine pegara un sacudón?',
        options: [
          'La narradora vio paisajes conocidos de su propio barrio.',
          'Aparecieron en las pantallas paisajes insólitos y extraños.',
          'El actor empezó a hablar en un idioma incomprensible.',
          'El acomodador le pidió que guardara su mochila arriba.'
        ],
        correctAnswer: 'Aparecieron en las pantallas paisajes insólitos y extraños.',
      },
      {
        id: 'uvdp-seq2',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Cuál fue el orden de los descubrimientos que hizo la protagonista al entrar?',
        options: [
          'Vio las vías, sintió el sacudón y luego hizo el trasbordo.',
          'Hizo el trasbordo, vio el cosmos y luego leyó su nombre.',
          'Compró la entrada, leyó los subtítulos y vio su barrio.',
          'Sintió aire frío, vio el sacudón y compró el boleto de ida.'
        ],
        correctAnswer: 'Vio las vías, sintió el sacudón y luego hizo el trasbordo.',
      },
      {
        id: 'uvdp-seq3',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué fue lo último que decidió hacer la narradora antes de que termine el relato?',
        options: [
          'Preguntar en la boletería si el viaje era muy largo.',
          'Aceptar el desafío de seguir viendo la película por días.',
          'Quejarse con el acomodador por la corriente de aire.',
          'Llamar a un amigo para que la fuera a buscar al cine.'
        ],
        correctAnswer: 'Aceptar el desafío de seguir viendo la película por días.',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'uvdp-voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'La narradora vio paisajes "insólitos". ¿Qué describe mejor esta palabra?',
        options: [
          'Paisajes muy aburridos que ya conocía de antes.',
          'Paisajes raros, poco comunes y sorprendentes.',
          'Paisajes oscuros que no se veían por la falta de luz.',
          'Paisajes pintados con colores muy suaves y tranquilos.'
        ],
        correctAnswer: 'Paisajes raros, poco comunes y sorprendentes.',
      },
      {
        id: 'uvdp-voc2',
        category: QuestionCategory.VOCABULARY,
        questionText: 'Tuvieron que hacer un "trasbordo". ¿En qué consistió esta acción?',
        options: [
          'En devolver la entrada para que les den el dinero.',
          'En pasar de una sala de cine a otra sala diferente.',
          'En encender las luces para que todos pudieran salir.',
          'En apagar las pantallas para que el actor descanse.'
        ],
        correctAnswer: 'En pasar de una sala de cine a otra sala diferente.',
      },
      {
        id: 'uvdp-voc3',
        category: QuestionCategory.VOCABULARY,
        questionText: 'El idioma del actor era "incomprensible". ¿Qué le pasaba a la narradora?',
        options: [
          'Que le gustaba mucho cómo sonaban esas palabras.',
          'Que no podía entender nada de lo que el actor decía.',
          'Que el volumen de la película estaba demasiado bajo.',
          'Que el actor hablaba muy rápido sobre las galaxias.'
        ],
        correctAnswer: 'Que no podía entender nada de lo que el actor decía.',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'uvdp-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Qué situación fantástica describe principalmente este cuento?',
        options: [
          'Un grupo de amigos que se pierde en una estación de tren.',
          'Una visita al cine que se convierte en un viaje real al espacio.',
          'La historia de un actor que se olvida sus líneas en una película.',
          'El problema de un cine que no tiene calefacción en invierno.'
        ],
        correctAnswer: 'Una visita al cine que se convierte en un viaje real al espacio.',
      },
      {
        id: 'uvdp-main2',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Por qué se mezclan elementos del cine y de los viajes en el relato?',
        options: [
          'Porque la protagonista está soñando que viaja mientras duerme.',
          'Para mostrar que la imaginación puede convertir una salida en una aventura.',
          'Porque el cine estaba construido dentro de un viejo vagón abandonado.',
          'Porque el actor de la película era en realidad un conductor de tren.'
        ],
        correctAnswer: 'Para mostrar que la imaginación puede convertir una salida en una aventura.',
      },
      {
        id: 'uvdp-main3',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es el motivo por el que la protagonista acepta todo lo que sucede?',
        options: [
          'Porque tiene miedo de que el acomodador la eche de la sala.',
          'Por su gran pasión por el cine y su deseo de vivir aventuras.',
          'Porque se olvidó la dirección de su casa y no tiene dónde ir.',
          'Porque quiere recuperar el dinero de su entrada de ida y vuelta.'
        ],
        correctAnswer: 'Por su gran pasión por el cine y su deseo de vivir aventuras.',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'uvdp-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué a la narradora no le importaba que entrara aire por las pantallas?',
        options: [
          'Porque se había llevado un abrigo muy grueso al cine.',
          'Porque la emoción de la película era más fuerte que el frío.',
          'Porque pensaba que era parte de los efectos especiales del cine.',
          'Porque el aire olía a las flores de su barrio conocido.'
        ],
        correctAnswer: 'Porque la emoción de la película era más fuerte que el frío.',
      },
      {
        id: 'uvdp-inf2',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Qué nos sugiere el hecho de que en las pantallas se viera el barrio de la protagonista?',
        options: [
          'Que el cine-tren recién estaba saliendo de la estación inicial.',
          'Que la película era un documental sobre la vida de los vecinos.',
          'Que el proyector estaba reflejando las ventanas de la calle.',
          'Que los extraterrestres habían filmado su casa el día anterior.'
        ],
        correctAnswer: 'Que el cine-tren recién estaba saliendo de la estación inicial.',
      },
      {
        id: 'uvdp-inf3',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué crees que el cartel con subtítulos mencionaba el nombre de ella?',
        options: [
          'Porque era una actriz famosa que no recordaba su papel.',
          'Porque ella ya no era solo una espectadora, sino parte del viaje.',
          'Porque el acomodador le había robado el documento de la mochila.',
          'Porque el cine quería pedirle perdón por quedarse sin combustible.'
        ],
        correctAnswer: 'Porque ella ya no era solo una espectadora, sino parte del viaje.',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'uvdp-char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo describirías la personalidad de la protagonista?',
        options: [
          'Es una persona muy miedosa que no se anima a los cambios.',
          'Es alguien aventurera, entusiasta y con mucha imaginación.',
          'Es una mujer muy distraída que siempre se confunde de lugar.',
          'Es una espectadora crítica que solo busca errores en los actores.'
        ],
        correctAnswer: 'Es alguien aventurera, entusiasta y con mucha imaginación.',
      },
      {
        id: 'uvdp-char2',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué actitud tiene el acomodador según el relato?',
        options: [
          'Actúa de forma misteriosa, como si fuera un guía de viaje.',
          'Es un empleado muy gruñón que no deja que nadie hable.',
          'Es una persona tonta que no sabe dónde están las salas.',
          'Es un fantasma que desaparece cuando se apagan las luces.'
        ],
        correctAnswer: 'Actúa de forma misteriosa, como si fuera un guía de viaje.',
      },
      {
        id: 'uvdp-char3',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué demuestra la decisión final de la narradora de decir que "sí"?',
        options: [
          'Que es una persona irresponsable que no quiere volver a su casa.',
          'Su total compromiso con la aventura y su amor por lo fantástico.',
          'Que tiene mucha curiosidad por saber cuánto cuesta el casco.',
          'Que está muy cansada y prefiere dormir en la nueva sala.'
        ],
        correctAnswer: 'Su total compromiso con la aventura y su amor por lo fantástico.',
      },
    ],
  },
};
