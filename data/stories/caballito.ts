
import { Story, QuestionCategory } from '../../types';

export const caballito: Story = {
  id: 'caballito',
  title: 'Caballito',
  author: 'Adela Basch',
  coverImage: `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg width="600" height="400" viewBox="0 0 100 66.67" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#FFBE0B" /><g transform="rotate(27) translate(3)"><path d="M 0 0 L 50 0 L 50 50 L 0 50 Z" fill="#F7F9FB" opacity="0.5" transform="translate(0, 0)"/><path d="M 50 16 L 100 16 L 100 66 L 50 66 Z" fill="#FB5607" opacity="0.5" transform="translate(0, 0)"/></g></svg>')}`,
  content: `
Maxi estaba por irse a dormir cuando se le ocurrió comentarle a la mamá:
—Hoy en la escuela estuvimos hablando del barrio. Decime, mami, ¿vos sabés por qué el nuestro se llama Caballito?
La mamá le dijo que no sabía. Pero como le gustaba mucho inventar cuentos, enseguida agregó:
—Pero conozco una historia que anda por ahí y que lo explica, aunque no sé si es cierta. ¿Querés que te la cuente?
—Sí, mami, dale.
—Una vez, hace mucho tiempo, cuando este barrio todavía no tenía nombre, había una calesita en el Parque Rivadavia, que vendría a ser algo así como la abuela de la que hay ahora.
“En esa calesita había caballos, aviones, barcos y autos, todos de juguete, que siempre daban vueltas y vueltas en el mismo lugar. Pero un día, uno de los caballos se cansó de estar arriba de la calesita y de dar siempre la misma vuelta. Sintió ganas de hacer otro recorrido.
“Por primera vez miró un poco más allá del parque y vio que el barrio seguía en calles empedradas, en esquinas con buzones y en veredas donde los vecinos se sentaban a tomar mate.
“Después miró todavía más lejos, y descubrió que las calles se continuaban en caminos de tierra bordeados por pasto y flores. Más allá había grandes extensiones de campo abierto. Y desparramados por el campo, ranchos con chimeneas de las que salía olor a pan caliente.
“El caballo sintió un gran deseo de conocer esos lugares en los que nunca había estado, de andar por caminos nuevos y correr a todo galope por ese campo que parecía no terminar nunca. Y fue tan grande su deseo, que dejó de ser un caballo de juguete y se convirtió en uno de verdad.
“Cuando llegó la noche y en el parque ya no quedaba nadie, el caballo se bajó de la calesita y, muy contento, se largó a trotar por las calles hasta llegar al campo. Dicen que al amanecer llegó a un rancho donde una familia con varios hijos lo invitó a quedarse a vivir ahí.
“El caballo fue muy feliz. De vez en cuando volvía al parque y visitaba la calesita. Entonces algunos chicos que lo había conocido ahí lo saludaban: “Hola, caballito”, “¿Cómo estás, caballito?”, “Buenas tardes, caballito”. Y tanto se escuchó por ahí la palabra caballito, que quedó como nombre del barrio”.
—Ah, de ahí viene —dijo Maxi con voz muy bajita, porque le estaba empezando a dar sueño. Y enseguida le preguntó:
—Mami, ¿qué es una chaca?
—¿Una chaca? No sé, Maxi, no conozco nada que se llame así —contestó la mamá—. ¿Por qué?
—Y, porque en Chacarita también tiene que haber habido una chaca que se bajó de la calesita y le dio nombre a ese barrio. ¿No te parece?
  `,
  wordCount: 423,
  level: '2do Grado (Nivel K)',
  questions: {
    [QuestionCategory.LITERAL]: [
      {
        id: 'cab-lit1',
        category: QuestionCategory.LITERAL,
        questionText: '¿De dónde se escapó el caballito de la historia?',
        options: [
          'De un gran establo en las afueras.',
          'De una vieja fábrica de juguetes.',
          'De una calesita en el Parque Rivadavia.',
          'De un circo que visitaba el barrio.'
        ],
        correctAnswer: 'De una calesita en el Parque Rivadavia.',
      },
      {
        id: 'cab-lit2',
        category: QuestionCategory.LITERAL,
        questionText: 'Según la historia, ¿por qué el barrio se llama así?',
        options: [
          'Porque había caballos reales en el parque.',
          'Por los constantes saludos de los niños.',
          'Porque el primer vecino se apellidaba así.',
          'Porque las calles tienen forma de herradura.'
        ],
        correctAnswer: 'Por los constantes saludos de los niños.',
      },
      {
        id: 'cab-lit3',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué palabra extraña le pregunta Maxi a su mamá?',
        options: [
          'Si la historia era realmente verdadera.',
          'Si podían ir pronto a la calesita.',
          'Qué es una "chaca" y de dónde viene.',
          'Si ella podía contarle un nuevo cuento.'
        ],
        correctAnswer: 'Qué es una "chaca" y de dónde viene.',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'cab-seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué hizo el caballo apenas se convirtió en uno real?',
        options: [
          'Se durmió profundamente bajo un árbol.',
          'Volvió a subirse a su lugar en la calesita.',
          'Esperó a la noche y trotó hacia el campo.',
          'Saludó alegremente a los otros juguetes.'
        ],
        correctAnswer: 'Esperó a la noche y trotó hacia el campo.',
      },
      {
        id: 'cab-seq2',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué vio el caballo luego de observar las calles de piedra?',
        options: [
          'Un enorme parque con otra calesita nueva.',
          'Un mar azul que llegaba hasta el horizonte.',
          'Grandes extensiones de campo abierto y ranchos.',
          'Muchos edificios altos de colores brillantes.'
        ],
        correctAnswer: 'Grandes extensiones de campo abierto y ranchos.',
      },
      {
        id: 'cab-seq3',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué ocurrió antes de que la mamá relatara la historia?',
        options: [
          'Maxi se quedó dormido en su cama.',
          'Maxi preguntó por el nombre de su barrio.',
          'La mamá leyó un libro de geografía.',
          'Fueron juntos a pasear al Parque Rivadavia.'
        ],
        correctAnswer: 'Maxi preguntó por el nombre de su barrio.',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'cab-voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'En el cuento, ¿qué significa que los caminos estaban "bordeados" por pasto?',
        options: [
          'Que el pasto cubría todo el camino.',
          'Que tenían pasto a ambos costados.',
          'Que el pasto estaba lejos del camino.',
          'Que los caminos estaban hechos de pasto.'
        ],
        correctAnswer: 'Que tenían pasto a ambos costados.',
      },
      {
        id: 'cab-voc2',
        category: QuestionCategory.VOCABULARY,
        questionText: '¿Cómo son las calles "empedradas" que menciona el texto?',
        options: [
          'Calles simples que son solo de tierra.',
          'Calles cubiertas con piedras o adoquines.',
          'Calles que tienen muchos árboles frutales.',
          'Calles muy anchas para que pasen barcos.'
        ],
        correctAnswer: 'Calles cubiertas con piedras o adoquines.',
      },
      {
        id: 'cab-voc3',
        category: QuestionCategory.VOCABULARY,
        questionText: 'En la historia, ¿qué es un "rancho" en el campo?',
        options: [
          'Un edificio de departamentos muy altos.',
          'Una casa de campo pequeña y humilde.',
          'Un palacio lujoso con muchas ventanas.',
          'Una carpa de tela para ir de campamento.'
        ],
        correctAnswer: 'Una casa de campo pequeña y humilde.',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'cab-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es el tema principal de esta historia?',
        options: [
          'La vida diaria de un niño llamado Maxi.',
          'Un relato fantástico sobre un nombre de barrio.',
          'Cómo se fabrican los caballos de madera.',
          'La descripción de los parques de la ciudad.'
        ],
        correctAnswer: 'Un relato fantástico sobre un nombre de barrio.',
      },
      {
        id: 'cab-main2',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Por qué el caballito decidió abandonar la calesita?',
        options: [
          'Por aburrimiento y deseos de conocer el mundo.',
          'Porque tenía mucha hambre y buscaba comida.',
          'Porque los otros juguetes se burlaban de él.',
          'Porque la calesita se rompió y dejó de girar.'
        ],
        correctAnswer: 'Por aburrimiento y deseos de conocer el mundo.',
      },
      {
        id: 'cab-main3',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es el propósito de la mamá al contar el cuento?',
        options: [
          'Enseñar historia real de la ciudad de Buenos Aires.',
          'Responder a Maxi con una historia llena de fantasía.',
          'Lograr que Maxi se duerma lo más rápido posible.',
          'Explicar que las calesitas son peligrosas para niños.'
        ],
        correctAnswer: 'Responder a Maxi con una historia llena de fantasía.',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'cab-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué el caballo se convirtió en uno de verdad?',
        options: [
          'Porque un mago del parque lo hechizó.',
          'Porque se cayó accidentalmente de la calesita.',
          'Porque su deseo de aventura fue muy grande.',
          'Porque ya estaba demasiado viejo para girar.'
        ],
        correctAnswer: 'Porque su deseo de aventura fue muy grande.',
      },
      {
        id: 'cab-inf2',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Qué demuestra la pregunta final de Maxi sobre "Chacarita"?',
        options: [
          'Que el niño no prestó atención a su madre.',
          'Que usa su imaginación para inventar otros nombres.',
          'Que está muy enojado porque prefiere vivir allí.',
          'Que desea visitar pronto la calesita de ese barrio.'
        ],
        correctAnswer: 'Que usa su imaginación para inventar otros nombres.',
      },
      {
        id: 'cab-inf3',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Qué piensa la mamá sobre el cuento que relata?',
        options: [
          'Que es una verdad histórica comprobada por todos.',
          'Que es una invención propia que tal vez no sea cierta.',
          'Que es un secreto que solo los abuelos conocen bien.',
          'Que es una noticia que leyó esa mañana en el diario.'
        ],
        correctAnswer: 'Que es una invención propia que tal vez no sea cierta.',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'cab-char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo describirías al caballito de la calesita?',
        options: [
          'Como un animal muy perezoso y aburrido.',
          'Como alguien aventurero, curioso y valiente.',
          'Como un juguete miedoso que no quería bajar.',
          'Como un personaje gruñón y que siempre está solo.'
        ],
        correctAnswer: 'Como alguien aventurero, curioso y valiente.',
      },
      {
        id: 'cab-char2',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué dos palabras definen a la mamá de Maxi?',
        options: [
          'Una mujer seria y muy estricta.',
          'Una persona muy ocupada y distraída.',
          'Alguien creativa y muy afectuosa.',
          'Una madre sabia y muy científica.'
        ],
        correctAnswer: 'Alguien creativa y muy afectuosa.',
      },
      {
        id: 'cab-char3',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo es la personalidad de Maxi?',
        options: [
          'Es un niño que no tiene interés en aprender.',
          'Es un pequeño muy observador y con gran fantasía.',
          'Es alguien muy tímido que no se anima a preguntar.',
          'Es un chico que prefiere los libros de ciencias reales.'
        ],
        correctAnswer: 'Es un pequeño muy observador y con gran fantasía.',
      },
    ],
  },
};
