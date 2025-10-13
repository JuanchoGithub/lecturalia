
import { Story, QuestionCategory } from '../../types';

export const unaAsombrosaLlamaEnElDesierto: Story = {
  id: 'una-asombrosa-llama-en-el-desierto',
  title: 'Una asombrosa llama en el desierto',
  author: 'Adela Basch',
  coverImage: `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg width="600" height="400" viewBox="0 0 100 66.67" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#FFBE0B" /><g transform="rotate(76) translate(8)"><path d="M 0 0 L 50 0 L 50 50 L 0 50 Z" fill="#F7F9FB" opacity="0.5" transform="translate(0, 0)"/><path d="M 50 16 L 100 16 L 100 66 L 50 66 Z" fill="#FB5607" opacity="0.5" transform="translate(0, 0)"/></g></svg>')}`,
  content: `
Por extraño que parezca, la historia es así. Ella se llama Ayelén. Él se llama Martín.
Él nació cerca del Río de la Plata. Ella, mucho más al sur.
No se conocen. Y esto no tiene nada de extraño, porque eso es lo que le pasa a la mayor parte de la gente que hay en el mundo. No se conocen entre sí.
Ella vive en un lugar. Él vive en otro. Él tiene una familia. Ella tiene otra. Ella tiene dos ojos. Él tiene otros.
En algunos aspectos Ayelén y Martín se parecen. En otros, son muy diferentes. Y no solamente en el color de la piel o del cabello.
Hay un pequeño animal volador que él llama picaflor y ella llama pinda. Hay otro, como un gato enorme; para él es jaguar y para ella, nahuel. Lo que para ella es leufú, para él es río. Pero aunque no se conocen, cuando se ríen, los dos ríen igual.
Un objeto duro que él llama piedra, para ella es cura. Para él, en cambio, cura tiene que ver con alejarse de la enfermedad.
Una vez estuvo enfermo y se curó. Casi hubiera preferido no curarse, porque enseguida lo mandaron a un lugar lejano a pelear. Él no estaba seguro de que tuviera ganas de pelear, menos contra gente a la que ni conocía.
Lo que ella llama mapu, él llama tierra y también pueblo. Para él, durante mucho tiempo mapu no quiso decir nada. Pero le parecía que llegar a una tierra desconocida para matar al primero que se pusiera adelante no era la mejor manera de llegar.
Lo que ella llama pirré, él llama nieve. Y a los dos les daba frío. Sí, Ayelén y Martín no se conocen, pero los dos están con mucho frío. Sobre todo porque en esa época, todo se empezó a helar desmesuradamente. Y el resto de la gente que andaba por ahí también tenía mucho frío. Se congelaban los campos y las semillas, se congelaban los árboles y los pájaros. Se congelaban los chicos y los viejos de barba blanca. Se congelaban las mujeres y los hombres de piel oscura y también los de piel clara.
Hacía mucho frío, y el fuego que salía de los rifles y los cañones no servía para calentar nada.
Lo que Ayelén llama peñi, Martín llama hermano. Y el frío los estaba hermanando a todos, el frío que salía de las armas de fuego les estaba abriendo a todos una sombría herida helada.
Y con cada disparo el frío crece y no hay con qué encender un fuego que sirva para entibiar las manos o echarse algo caliente en la garganta.
Lo que ella llama ruca, él llama casa. Y él soñaba con el amparo de un hogar con leños encendidos mientras sus pies resbalaban por una tierra helada.
Ayelén y Martín no se conocían. Cada cual vivía su vida y andaba su camino. Pero de golpe las líneas de los dos caminos se encuentran en un mismo punto. Y hay como un chispazo en ese punto y de ahí nace una llama. Es una llama de amor en sus miradas.
Es una de esas llamas que se encienden y quedan instaladas, y se abren camino y producen un intenso calor que se propaga.
Y la llama se agiganta y se transforma en pájaro de increíbles alas. El pájaro levanta vuelo y riega la tierra con una lluvia de pequeñas llamas.
Son de esas llamas que derriten el hielo de los ríos, pulverizan el frío de los corazones y entibian los campos y las casas. Y hacen brotar frutas y flores y canciones, y una alegría que se contagia y se desparrama. Y las armas se tragan ese fuego que nunca pudo dar calor a nada.
Ayelén y Martín ya no se separan. Están unidos por una llamarada.
  `,
  wordCount: 520,
  level: '4to Grado (Nivel P)',
  questions: {
    [QuestionCategory.LITERAL]: [
      {
        id: 'alld-lit1',
        category: QuestionCategory.LITERAL,
        questionText: '¿Cómo llaman Ayelén y Martín a la nieve, respectivamente?',
        options: ['Hielo y frío', 'Pirré y nieve', 'Nieve y pirré', 'Blanco y frío'],
        correctAnswer: 'Pirré y nieve',
      },
      {
        id: 'alld-lit2',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué nace en el punto donde se encuentran los caminos de Ayelén y Martín?',
        options: ['Un árbol', 'Un río', 'Una llama de amor', 'Una flor'],
        correctAnswer: 'Una llama de amor',
      },
      {
        id: 'alld-lit3',
        category: QuestionCategory.LITERAL,
        questionText: 'Según el texto, ¿qué cosa hacían Ayelén y Martín de la misma manera a pesar de no conocerse?',
        options: ['Hablar', 'Cantar', 'Reír', 'Llorar'],
        correctAnswer: 'Reír',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'alld-seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué sucede justo después de que la llama de amor se agiganta?',
        options: ['Se apaga', 'Se transforma en un pájaro de increíbles alas', 'Calienta a Martín y Ayelén', 'Se convierte en un sol'],
        correctAnswer: 'Se transforma en un pájaro de increíbles alas',
      },
      {
        id: 'alld-seq2',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué hace el pájaro que nace de la llama?',
        options: ['Vuela muy lejos', 'Canta una canción', 'Riega la tierra con una lluvia de pequeñas llamas', 'Construye un nido'],
        correctAnswer: 'Riega la tierra con una lluvia de pequeñas llamas',
      },
      {
        id: 'alld-seq3',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué pasa al final con las armas?',
        options: ['Disparan más fuerte', 'Se derriten con el calor', 'Se tragan el fuego que nunca dio calor', 'Se convierten en flores'],
        correctAnswer: 'Se tragan el fuego que nunca dio calor',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'alld-voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'En la frase "todo se empezó a helar desmesuradamente", ¿qué significa "desmesuradamente"?',
        options: ['Un poco', 'Lentamente', 'De forma exagerada o excesiva', 'De forma ordenada'],
        correctAnswer: 'De forma exagerada o excesiva',
      },
      {
        id: 'alld-voc2',
        category: QuestionCategory.VOCABULARY,
        questionText: 'La llama produce un intenso calor que se "propaga". ¿Qué significa "propagar"?',
        options: ['Desaparecer', 'Concentrarse en un solo punto', 'Extenderse o difundirse a muchos lugares', 'Enfriarse'],
        correctAnswer: 'Extenderse o difundirse a muchos lugares',
      },
      {
        id: 'alld-voc3',
        category: QuestionCategory.VOCABULARY,
        questionText: 'El frío abría una "sombría" herida helada. ¿Qué significa "sombría"?',
        options: ['Alegre y luminosa', 'Pequeña', 'Triste, oscura y melancólica', 'Caliente'],
        correctAnswer: 'Triste, oscura y melancólica',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'alld-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es el mensaje principal de la historia?',
        options: ['Que diferentes culturas tienen diferentes palabras para las mismas cosas', 'Que el amor es una fuerza poderosa capaz de superar el frío de la guerra y la indiferencia', 'Que los desiertos son lugares muy fríos', 'Que los pájaros pueden crear fuego'],
        correctAnswer: 'Que el amor es una fuerza poderosa capaz de superar el frío de la guerra y la indiferencia',
      },
      {
        id: 'alld-main2',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Qué problema común enfrentaban todas las personas en la historia?',
        options: ['El hambre', 'Un frío intenso que lo congelaba todo', 'La falta de agua', 'Una enfermedad'],
        correctAnswer: 'Un frío intenso que lo congelaba todo',
      },
      {
        id: 'alld-main3',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Qué efecto tienen las pequeñas llamas que caen del pájaro sobre el mundo?',
        options: ['Queman los árboles', 'Asustan a la gente', 'Derriten el hielo, calientan los corazones y traen alegría', 'No tienen ningún efecto'],
        correctAnswer: 'Derriten el hielo, calientan los corazones y traen alegría',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'alld-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: 'El "frío que salía de las armas de fuego" es una metáfora. ¿Qué representa realmente ese frío?',
        options: ['La nieve que caía', 'El metal de las armas', 'La muerte, la soledad y el sufrimiento causados por la guerra', 'El miedo de los soldados'],
        correctAnswer: 'La muerte, la soledad y el sufrimiento causados por la guerra',
      },
      {
        id: 'alld-inf2',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué el autor menciona las diferentes palabras que usan Ayelén y Martín?',
        options: ['Para enseñar otro idioma', 'Para mostrar que a pesar de sus diferencias culturales, pueden compartir sentimientos universales como el amor y el frío', 'Porque no se decidía por una palabra', 'Para confundir al lector'],
        correctAnswer: 'Para mostrar que a pesar de sus diferencias culturales, pueden compartir sentimientos universales como el amor y el frío',
      },
      {
        id: 'alld-inf3',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Qué simboliza el encuentro de Ayelén y Martín en medio de un contexto de pelea y frío?',
        options: ['Una casualidad sin importancia', 'El inicio de una nueva guerra', 'La esperanza y la posibilidad de que el amor y la unión son más fuertes que el conflicto', 'Un momento de debilidad'],
        correctAnswer: 'La esperanza y la posibilidad de que el amor y la unión son más fuertes que el conflicto',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'alld-char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué sentimiento une a Ayelén y Martín a pesar de sus diferencias?',
        options: ['El miedo a la guerra', 'El amor que surge entre ellos', 'El odio hacia sus enemigos', 'La tristeza por el frío'],
        correctAnswer: 'El amor que surge entre ellos',
      },
      {
        id: 'alld-char2',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo era Martín antes de ser enviado a pelear?',
        options: ['Era una persona agresiva que le gustaba pelear', 'No estaba seguro de querer pelear contra gente que no conocía', 'Era un soldado experimentado', 'Odiaba a sus enemigos'],
        correctAnswer: 'No estaba seguro de querer pelear contra gente que no conocía',
      },
      {
        id: 'alld-char3',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué cualidad común tienen Ayelén y Martín que se menciona al principio?',
        options: ['Ambos tienen el pelo oscuro', 'Ambos ríen de la misma manera', 'A los dos les gusta la nieve', 'Viven en la misma ciudad'],
        correctAnswer: 'Ambos ríen de la misma manera',
      },
    ],
  },
};
