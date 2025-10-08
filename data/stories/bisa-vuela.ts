import { Story, QuestionCategory } from '../../types';

export const bisaVuela: Story = {
  id: 'bisa-vuela',
  title: 'Bisa Vuela',
  author: 'María Elena Walsh',
  coverImage: 'https://2.bp.blogspot.com/-mo34EJ_YhFY/WDQodO9av_I/AAAAAAAAEK4/UjCTZ1_pVEQw3WUfcnvuJEkOMM3zJutnQCEw/s1600/Bisa+Vuela+3+(fedecombi).jpg',
  content: `
Había una vez una ancianita con más años que hojas tiene un ombú. Alta y flaca y memoriosa y sabia. Y había una vez un pueblo grande como dos sábanas cosidas al medio por las vías del ferrocarril. Y había en el pueblo varias familias con muchos chicos. Y había trenes que pasaban de largo, llenos de vacas y sin pasajeros.

La ancianita vivía sola en lo alto de un mangrullo. Guardaba cachivaches en un baúl de su antepasado el Conquistador. Y su grillo Pachimú se guardaba él solo dentro de una caja de fósforos.

Un buen día, los niños, reunidos en asamblea en el galpón del ferrocarril bajo las alas de un viejo avión herrumbrado, decidieron adoptar a la anciana como bisabuela de todos y llamarla Bisa. Y desde entonces vivieron felices, jugando con Bisa a la rayuela y al ajedrez.

Salían todos a pasear, algunos en bicicleta, otros en caballo de palo y alguno en un cajón tirado por un carnero. Pescaban renacuajos para investigarlos y cultivaban enormes calabazas anaranjadas.

Bisa, en sus tiempos, había sido aviadora. Y el viejo avión era su famoso “Águila de Oro”. La campeona de vuelo estaba jubilada –decía- desde que sus ojos se debilitaron y un mal día al aterrizar había atropellado a una pobre perdiz viuda.

Entre todos se pusieron a limpiar y aceitar el aeroplano, con la esperanza de volar algún día y llegar, por lo menos, hasta la orilla del mar ¡Y ese día estaba cerca! Porque ya las hélices rugían como dos leones tartamudos, comandados por la famosa aviadora.

Bisa abrió un baúl, sacó su viejo uniforme arrugado y se lo probó frente al espejo.
-No es tan distinto del uniforme de los astronautas, ¿verdad, Pachimú?
Pero el grillo, por ser tan pequeño, no sabía nada de astronautas.

Bisa se encasquetó la gorra y se puso unas antiparras que nunca había usado: era un trofeo regalo de su madrina después de su último vuelo ¡tantos miles de días atrás!
-Estos anteojos se han vuelto locos -dijo Bisa. Y miró a Pachimú, y en su lugar vio un gato con cola de pavo real.
-Estás muy raro. ¿Qué te pasa, Pachimú?
Pero Pachimú, por ser tan pequeño, no sabía nada de rarezas.

Bajó de su casa y con el grillo en su caja dentro de uno de sus 54 bolsillos llenos de herramientas, corrió a contarles a sus bisnietos la novedad. Los niños, por riguroso turno, se probaron las gafas y no vieron nada, sólo las encontraron asquerosamente sucias y empañadas.
-Estoy segura de que con estos anteojos maravillosos pondré en marcha el motor- dijo Bisa.

Los chicos abrieron los portones, Bisa trepó a la diminuta cabina, movió manivelas y palancas y… ¡brrrrummmm! cruzó las vías y remontó vuelo. Los bisnietos la siguieron un poco a la carrera, después se taparon los ojos temiendo lo peor.

Seguramente ustedes también tiemblan de espanto pensando que se va a estrellar contra el más alto de los eucaliptos. Pero no, Bisa vuela, feliz. Mira hacia abajo y ya no ve a sus bisnietos ni el ocre de los monótonos campos. Ve toda la ciudad de Nueva York, ve una carroza tirada por mariposas gigantes, ve las pirámides mexicanas, ve un cohete espacial que pasa cerca, y allá lejos ve algunas torres de la ciudad de Bagdad.

Como le quedaba escaso combustible, al divisar una calle ancha y poco transitada, decidió aterrizar. ¿Dónde estaría? ¡Buena pregunta para Pachimú!

Bisa se levantó las gafas y vio que los niños de un pueblo extraño se acercaban a recibirla, con sonrisas, besos, abrazos y un ramillete de margaritas. Pero ¡ay!, hablaban en otra lengua, sólo entendieron el idioma de los cariños. Entonces Pachimú se puso a cantar, y a él sí lo entendieron, porque los grillos cantan en un idioma universal. Salió de su caja y del bolsillo y desde el ala del avión trabajó de traductor.

Los chicos de ese pueblo también decidieron adoptar a Bisa como bisabuela de todos. Y le ofrecieron domicilio en una casita construida en las ramas de un árbol.

Desde entonces Bisa vuela de pueblo en pueblo y de bisnietos en bisnietos. Ya aprendió otro idioma y, en cada viaje, que dura media hora o tres meses –nadie lo sabe-, sigue mirando encantada por los cristales de sus antiparras, las maravillas del mundo que siempre quiso conocer.
  `,
  wordCount: 569,
  level: '4to Grado (Nivel P)',
  questions: {
    [QuestionCategory.LITERAL]: [
      {
        id: 'bisa-lit1',
        category: QuestionCategory.LITERAL,
        questionText: '¿Cómo decidieron llamar los niños a la ancianita?',
        options: ['Abuela', 'Bisa', 'Señora', 'Campeona'],
        correctAnswer: 'Bisa',
      },
      {
        id: 'bisa-lit2',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué profesión había tenido Bisa en su juventud?',
        options: ['Maestra', 'Mecánica', 'Aviadora', 'Exploradora'],
        correctAnswer: 'Aviadora',
      },
      {
        id: 'bisa-lit3',
        category: QuestionCategory.LITERAL,
        questionText: '¿Quién es Pachimú y qué trabajo hace en el pueblo extraño?',
        options: ['Un gato que vuela', 'Un grillo que trabaja de traductor', 'Un perro que canta', 'Un pájaro que arregla aviones'],
        correctAnswer: 'Un grillo que trabaja de traductor',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'bisa-seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué hicieron los niños junto a Bisa ANTES de que ella pudiera volar de nuevo?',
        options: ['Le construyeron una casa', 'Limpiaron y aceitaron su viejo aeroplano', 'Le regalaron unas gafas', 'Le cantaron una canción'],
        correctAnswer: 'Limpiaron y aceitaron su viejo aeroplano',
      },
      {
        id: 'bisa-seq2',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué vio Bisa por sus antiparras justo después de despegar?',
        options: ['Su pueblo y sus bisnietos', 'El mar y la playa', 'La ciudad de Nueva York, pirámides y una carroza de mariposas', 'Nubes y pájaros'],
        correctAnswer: 'La ciudad de Nueva York, pirámides y una carroza de mariposas',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'bisa-voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'Bisa vivía en lo alto de un "mangrullo". ¿Qué es un mangrullo?',
        options: ['Un árbol muy alto', 'Una montaña', 'Una torre de vigilancia', 'Un edificio de apartamentos'],
        correctAnswer: 'Una torre de vigilancia',
      },
      {
        id: 'bisa-voc2',
        category: QuestionCategory.VOCABULARY,
        questionText: 'En el galpón había un viejo avión "herrumbrado". ¿Qué significa herrumbrado?',
        options: ['Recién pintado', 'Cubierto de óxido', 'Listo para volar', 'Lleno de flores'],
        correctAnswer: 'Cubierto de óxido',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'bisa-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es la idea principal de esta historia?',
        options: ['La importancia de aprender otros idiomas', 'La amistad entre una anciana y los niños, y cómo la imaginación permite vivir grandes aventuras', 'Cómo arreglar un avión viejo', 'La vida de los grillos traductores'],
        correctAnswer: 'La amistad entre una anciana y los niños, y cómo la imaginación permite vivir grandes aventuras',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'bisa-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué Bisa creía que sus anteojos "se han vuelto locos"?',
        options: ['Porque estaban rotos', 'Porque al ponérselos, veía cosas fantásticas en lugar de la realidad', 'Porque no le permitían ver bien', 'Porque le daban dolor de cabeza'],
        correctAnswer: 'Porque al ponérselos, veía cosas fantásticas en lugar de la realidad',
      },
      {
        id: 'bisa-inf2',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué Pachimú podía ser entendido por los niños que hablaban otro idioma?',
        options: ['Porque Pachimú sabía todos los idiomas', 'Porque los niños entendían el lenguaje de los animales', 'Porque, como dice el cuento, "los grillos cantan en un idioma universal"', 'Porque les hizo señas'],
        correctAnswer: 'Porque, como dice el cuento, "los grillos cantan en un idioma universal"',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'bisa-char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué dos palabras describen mejor a Bisa?',
        options: ['Tímida y miedosa', 'Aventurera y cariñosa', 'Gruñona y solitaria', 'Perezosa y aburrida'],
        correctAnswer: 'Aventurera y cariñosa',
      },
      {
        id: 'bisa-char2',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo son los niños de la historia?',
        options: ['Egoístas y traviesos', 'Cariñosos, colaboradores y aventureros', 'Tímidos y estudiosos', 'Aburridos y sin imaginación'],
        correctAnswer: 'Cariñosos, colaboradores y aventureros',
      },
    ],
  },
};
