import { Story, QuestionCategory } from '../../types';

export const joaquinYLasPalabras: Story = {
  id: 'joaquin-y-las-palabras',
  title: 'Joaquín y las palabras',
  author: 'Adela Basch',
  coverImage: `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg width="600" height="400" viewBox="0 0 100 66.67" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#FF006E" /><g transform="rotate(27) translate(3)"><path d="M 0 0 L 50 0 L 50 50 L 0 50 Z" fill="#F7F9FB" opacity="0.5" transform="translate(0, 0)"/><path d="M 50 16 L 100 16 L 100 66 L 50 66 Z" fill="#8338EC" opacity="0.5" transform="translate(0, 0)"/></g></svg>')}`,
  content: `
El rey y la reina vivían en un enorme y lujoso palacio con su pequeño hijo Joaquín, el príncipe. Y también con muchas otras personas que realizaban todas las tareas necesarias para que ellos vivieran con comodidad.
Joaquín era un chico como cualquiera. Pero a todos los que lo rodeaban, lo que más les importaba es que él era el príncipe.
Por eso, en el palacio, cuando alguien le hablaba, lo llamaba “príncipe”. Aunque a él le hubiera gustado más que simplemente lo llamaran por su nombre, Joaquín.
“Buenos días, príncipe”, “buenas tardes, príncipe”, “buenas noches, príncipe”, “¿qué prefiere, príncipe, sopa de arroz o de fideos?”, “¿qué le gustaría más, príncipe, ir al campo o a la montaña?”, “¿qué quiere usar hoy, príncipe, botas o zapatillas?”. Y así le hablaban para decirle todo lo que podamos imaginar.
Cuando le decían “príncipe”, a él le parecía que le hablaban desde muy lejos.
Sí. A veces le parecía que le hablaban desde el fondo del mar.
Entonces trataba de acercarse para escuchar mejor. Pero tenía que meterse en el agua para encontrar las palabras que le habían dicho. Y ahí estaban, tan mojadas, tan empapadas que no se entendían bien.
Si le decían luna, Joaquín escuchaba lana.
Si le decían sapo, Joaquín escuchaba sopa.
Si le decían quiso, Joaquín escuchaba queso.
Otras veces, cuando le decían “príncipe”, le parecía que le hablaban desde un lugar muy distante, por ejemplo, desde otro planeta.
La distancia que tenían que recorrer las palabras para llegar hasta él era tan grande y en el viaje se sacudían y se movían tanto, que llegaban un poco deshechas y no se entendían bien.
Si le decían cama, Joaquín escuchaba coma. Si le decían coma, escuchaba cama.
Si le decían selva, escuchaba salva. Si le decían salva, escuchaba selva.
Si le decían sala, escuchaba solo. Si le decían solo, escuchaba sala.
Y a veces, cuando le decían “príncipe”, le parecía que mientras él estaba en el jardín le hablaban desde la ventana más alta de la punta más alta de la torre más alta de la terraza.
Y como la altura desde la que venían las palabras era tanta, antes de llegar a sus oídos rebotaban y saltaban sobre el suelo. Y allí muchos sonidos se cambiaban de lugar. Así era imposible entender bien lo que le decían.
Si le decían mesa, Joaquín escuchaba masa. Si le decían masa, él escuchaba mesa.
Si le decían casa, escuchaba cosa. Si le decían cosa, escuchaba casa.
Si le decían mano, escuchaba mono. Si le decían mono, escuchaba mano.
La mayor parte del tiempo Joaquín no entendía bien lo que le decían. Y como no escuchaba bien, tampoco era capaz de hablar bien. Y por eso casi no hablaba.
El rey y la reina estaban preocupados. Pensaban que el príncipe tenía dificultades para oír y para hablar. Y en realidad todos en el palacio pensaban lo mismo, porque Joaquín nunca entendía bien lo que le decían y, cuando hablaba, las palabras salían de su boca muy confusas.
Si quería decir gato, le salía rato. Y si quería decir rato, le salía gato.
Si quería decir tanto, le salía tonto. Y si quería decir tonto, le salía tanto.
Si quería decir pera, le salía para. Y si quería decir para, le salía pera.
Todos se preguntaban: “¿Qué le sucede al príncipe? ¿Por qué oye tan mal?”.
Y también: “¿Qué le ocurre al príncipe? ¿Por qué habla tan mal?”.
Todos le decían: “Príncipe, sus oídos no están bien”.
Y también: “Príncipe, sus palabras salen de su boca con errores”.
Un día la reina y el rey estaban preocupadísimos por las dificultades que tenía el príncipe para oír bien y hablar bien. Era tanta su preocupación, que no podían pensar en otra cosa. Fue así que lo llamaron y los dos juntos le dijeron:
—Hijo querido, Joaquín, Joaquincito de mi corazón, ¿qué te pasa?
Por primera vez en su vida Joaquín sintió que le hablaban desde muy cerca y entendió perfectamente lo que le dijeron.
—Nada. Solamente pasa que cuando me llaman “príncipe” me parece que me hablan desde muy lejos y no escucho bien lo que me dicen. Pero si me dicen “hijo querido, Joaquín, Joaquincito de mi corazón”, escucho perfectamente —respondió, sin equivocarse en una sola palabra.
Sus padres se miraron y dijeron: —Qué bien. Todos los días se aprende algo nuevo.
  `,
  wordCount: 651,
  level: '3er Grado (Nivel L)',
  questions: {
    [QuestionCategory.LITERAL]: [
      {
        id: 'jyp-lit1',
        category: QuestionCategory.LITERAL,
        questionText: '¿Cómo llamaban todos a Joaquín en el palacio?',
        options: ['Joaquincito', 'Su alteza', 'Príncipe', 'Niño'],
        correctAnswer: 'Príncipe',
      },
      {
        id: 'jyp-lit2',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué pasaba cuando Joaquín quería decir "gato"?',
        options: ['Decía "pato"', 'Decía "rato"', 'No decía nada', 'Decía "gato" correctamente'],
        correctAnswer: 'Decía "rato"',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'jyp-seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué le dijeron el rey y la reina a Joaquín el día que estaban muy preocupados?',
        options: ['Príncipe, ¿qué te pasa?', 'Joaquín, no escuchas bien', 'Hijo querido, Joaquín, Joaquincito de mi corazón, ¿qué te pasa?', 'Tienes que aprender a hablar'],
        correctAnswer: 'Hijo querido, Joaquín, Joaquincito de mi corazón, ¿qué te pasa?',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'jyp-voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'En la frase "las palabras llegaban un poco deshechas", ¿qué significa "deshechas"?',
        options: ['Muy claras', 'Gritando', 'Desarmadas o rotas', 'Mojadas'],
        correctAnswer: 'Desarmadas o rotas',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'jyp-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál era el verdadero problema de Joaquín?',
        options: ['Era sordo', 'No sabía hablar bien', 'La forma distante en que lo trataban ("príncipe") le impedía comunicarse con normalidad', 'No le gustaba vivir en un palacio'],
        correctAnswer: 'La forma distante en que lo trataban ("príncipe") le impedía comunicarse con normalidad',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'jyp-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué Joaquín entendió y habló perfectamente al final?',
        options: ['Porque un mago lo curó', 'Porque sus padres finalmente le hablaron con cercanía y cariño, usando su nombre', 'Porque se concentró mucho', 'Porque había practicado en secreto'],
        correctAnswer: 'Porque sus padres finalmente le hablaron con cercanía y cariño, usando su nombre',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'jyp-char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué es lo que más deseaba Joaquín?',
        options: ['Juguetes nuevos', 'Ser llamado por su nombre y sentirse cerca de los demás', 'Ser rey', 'Vivir en el fondo del mar'],
        correctAnswer: 'Ser llamado por su nombre y sentirse cerca de los demás',
      },
    ],
  },
};
