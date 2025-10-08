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
        options: ['De un establo', 'De una juguetería', 'De una calesita en el Parque Rivadavia', 'De un circo'],
        correctAnswer: 'De una calesita en el Parque Rivadavia',
      },
      {
        id: 'cab-lit2',
        category: QuestionCategory.LITERAL,
        questionText: 'Según el cuento de la mamá, ¿por qué el barrio se llama Caballito?',
        options: ['Porque había muchos caballos en la zona', 'Porque los chicos que conocían al caballo de la calesita lo saludaban diciendo "Hola, caballito"', 'Porque el primer habitante se apellidaba Caballito', 'Porque tenía forma de caballo'],
        correctAnswer: 'Porque los chicos que conocían al caballo de la calesita lo saludaban diciendo "Hola, caballito"',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'cab-seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué hizo el caballo justo después de convertirse en uno de verdad?',
        options: ['Se fue a dormir', 'Volvió a subirse a la calesita', 'Esperó a que llegara la noche y se fue a recorrer el campo', 'Saludó a los otros juguetes'],
        correctAnswer: 'Esperó a que llegara la noche y se fue a recorrer el campo',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'cab-voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'En la frase "caminos de tierra bordeados por pasto", ¿qué significa "bordeados"?',
        options: ['Cubiertos por pasto', 'Que tenían pasto en los costados', 'Lejos del pasto', 'Hechos de pasto'],
        correctAnswer: 'Que tenían pasto en los costados',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'cab-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es la idea principal de la historia que cuenta la mamá?',
        options: ['Una explicación fantástica sobre el origen del nombre del barrio Caballito.', 'La vida de un niño llamado Maxi.', 'Cómo funcionan las calesitas.', 'La importancia de los parques.'],
        correctAnswer: 'Una explicación fantástica sobre el origen del nombre del barrio Caballito.',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'cab-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué el caballo de la calesita se convirtió en uno de verdad?',
        options: ['Porque un mago lo hechizó', 'Porque se cayó de la calesita', 'Porque su deseo de conocer otros lugares fue muy grande', 'Porque ya estaba muy viejo'],
        correctAnswer: 'Porque su deseo de conocer otros lugares fue muy grande',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'cab-char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo es el caballito de la historia?',
        options: ['Perezoso y aburrido', 'Aventurero y curioso', 'Miedoso y tímido', 'Gruñón y solitario'],
        correctAnswer: 'Aventurero y curioso',
      },
    ],
  },
};
