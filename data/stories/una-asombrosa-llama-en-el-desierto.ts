
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
        questionText: '¿Cómo llaman Ayelén y Martín a la nieve en sus respectivos idiomas?',
        options: [
          'Ayelén la llama "nahuel" y Martín la llama "jaguar".',
          'Ayelén la llama "pirré" y Martín la llama "nieve".',
          'Ayelén la llama "mapu" y Martín la llama "pueblo".',
          'Ayelén la llama "leufú" y Martín la llama "río".'
        ],
        correctAnswer: 'Ayelén la llama "pirré" y Martín la llama "nieve".',
      },
      {
        id: 'alld-lit2',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué nace exactamente cuando los caminos de los dos protagonistas se cruzan?',
        options: [
          'Nace un pájaro azul que vuela hacia el Río de la Plata.',
          'Nace una llama de amor a partir de un chispazo inicial.',
          'Nace una nueva ciudad con casas llamadas rucas blancas.',
          'Nace un río transparente que derrite el hielo del sur.'
        ],
        correctAnswer: 'Nace una llama de amor a partir de un chispazo inicial.',
      },
      {
        id: 'alld-lit3',
        category: QuestionCategory.LITERAL,
        questionText: '¿A qué lugar mandaron a Martín apenas se curó de su enfermedad?',
        options: [
          'Lo mandaron a vivir a una ruca cerca de la montaña.',
          'Lo mandaron a un lugar muy lejano para ir a pelear.',
          'Lo mandaron a buscar un nahuel al desierto helado.',
          'Lo mandaron a estudiar las palabras que usaba Ayelén.'
        ],
        correctAnswer: 'Lo mandaron a un lugar muy lejano para ir a pelear.',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'alld-seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué transformación sufre la llama de amor después de agigantarse?',
        options: [
          'Se convierte en un sol que ilumina todo el desierto.',
          'Se transforma en un pájaro que posee alas increíbles.',
          'Se vuelve un río caudaloso que apaga los cañones.',
          'Se desvanece para dejar que el frío vuelva a la tierra.'
        ],
        correctAnswer: 'Se transforma en un pájaro que posee alas increíbles.',
      },
      {
        id: 'alld-seq2',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué hace el pájaro inmediatamente después de levantar vuelo?',
        options: [
          'Canta una canción para que las armas dejen de sonar.',
          'Riega la tierra con una lluvia de pequeñas llamas.',
          'Busca a los niños de piel clara para darles abrigo.',
          'Regresa al Río de la Plata para buscar a Martín.'
        ],
        correctAnswer: 'Riega la tierra con una lluvia de pequeñas llamas.',
      },
      {
        id: 'alld-seq3',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué sucede finalmente con las armas según el relato?',
        options: [
          'Se disparan solas hasta que se acaba el combustible.',
          'Se tragan el fuego que nunca antes pudo calentar nada.',
          'Se convierten en flores silvestres de muchos colores.',
          'Se entierran en el mapa para que nadie las encuentre.'
        ],
        correctAnswer: 'Se tragan el fuego que nunca antes pudo calentar nada.',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'alld-voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'El texto dice que todo se helaba "desmesuradamente". ¿Qué significa?',
        options: [
          'Que se helaba de una forma muy lenta y tranquila.',
          'Que se helaba de manera exagerada o sin ninguna medida.',
          'Que solo se helaban las cosas pequeñas del desierto.',
          'Que el hielo tenía una forma geométrica muy perfecta.'
        ],
        correctAnswer: 'Que se helaba de manera exagerada o sin ninguna medida.',
      },
      {
        id: 'alld-voc2',
        category: QuestionCategory.VOCABULARY,
        questionText: 'La llama produce un calor que se "propaga". ¿Qué quiere decir esto?',
        options: [
          'Que el calor se queda encerrado en un solo lugar.',
          'Que el calor se extiende y llega a muchas partes.',
          'Que el calor desaparece cuando llega la noche fría.',
          'Que el calor solo sirve para calentar las manos.'
        ],
        correctAnswer: 'Que el calor se extiende y llega a muchas partes.',
      },
      {
        id: 'alld-voc3',
        category: QuestionCategory.VOCABULARY,
        questionText: 'Martín buscaba el "amparo" de un hogar. ¿Qué buscaba Martín?',
        options: [
          'Buscaba un mapa para no perderse en el camino.',
          'Buscaba protección, refugio o un lugar seguro.',
          'Buscaba leña seca para vender en el pueblo lejano.',
          'Buscaba una medicina para curarse de su herida.'
        ],
        correctAnswer: 'Buscaba protección, refugio o un lugar seguro.',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'alld-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es el tema central o mensaje de esta historia?',
        options: [
          'La importancia de aprender idiomas de diferentes pueblos.',
          'Cómo el amor y la unión pueden vencer el frío de la guerra.',
          'Los peligros de viajar al sur cuando empieza a nevar.',
          'La vida de los animales que habitan en el Río de la Plata.'
        ],
        correctAnswer: 'Cómo el amor y la unión pueden vencer el frío de la guerra.',
      },
      {
        id: 'alld-main2',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Por qué el autor resalta que las armas no servían para calentar nada?',
        options: [
          'Porque las armas eran muy viejas y estaban oxidadas.',
          'Para mostrar que la violencia no resuelve el sufrimiento humano.',
          'Porque el fuego de los rifles era de un color azul muy frío.',
          'Porque los soldados no sabían cómo encender una fogata.'
        ],
        correctAnswer: 'Para mostrar que la violencia no resuelve el sufrimiento humano.',
      },
      {
        id: 'alld-main3',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Qué problema compartido une a toda la gente en la historia?',
        options: [
          'Que nadie conocía el nombre de los pájaros voladores.',
          'El frío intenso que congelaba tanto a personas como a campos.',
          'El deseo de mudarse a una ruca más grande en el norte.',
          'La falta de semillas para plantar flores en el desierto.'
        ],
        correctAnswer: 'El frío intenso que congelaba tanto a personas como a campos.',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'alld-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Qué representa la "sombría herida helada" que las armas abrían en todos?',
        options: [
          'Un tipo de nieve que caía solamente durante las batallas.',
          'El dolor, la tristeza y la separación que provoca la guerra.',
          'Una marca física que los soldados se hacían en la piel.',
          'El dibujo de un mapa que Martín no podía comprender bien.'
        ],
        correctAnswer: 'El dolor, la tristeza y la separación que provoca la guerra.',
      },
      {
        id: 'alld-inf2',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué el autor menciona que ambos "ríen igual" a pesar de hablar distinto?',
        options: [
          'Para demostrar que no hace falta hablar para ser amigos.',
          'Para resaltar que los sentimientos humanos son universales.',
          'Porque Martín y Ayelén eran parientes y no lo sabían.',
          'Porque en el desierto los ruidos se escuchan más fuertes.'
        ],
        correctAnswer: 'Para resaltar que los sentimientos humanos son universales.',
      },
      {
        id: 'alld-inf3',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Qué nos sugiere el hecho de que Martín prefiriera no haberse curado?',
        options: [
          'Que la medicina de esa época tenía un sabor muy amargo.',
          'Que no quería ser enviado a pelear contra gente desconocida.',
          'Que le gustaba estar en la cama recibiendo cuidados.',
          'Que tenía miedo de encontrarse con Ayelén en el sur.'
        ],
        correctAnswer: 'Que no quería ser enviado a pelear contra gente desconocida.',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'alld-char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo se describe la actitud de Martín respecto a la pelea?',
        options: [
          'Como un guerrero valiente que deseaba conquistar tierras.',
          'Como alguien con dudas sobre lastimar a personas que no conoce.',
          'Como un soldado experto en el uso de rifles y cañones.',
          'Como un hombre enojado porque Ayelén usaba otras palabras.'
        ],
        correctAnswer: 'Como alguien con dudas sobre lastimar a personas que no conoce.',
      },
      {
        id: 'alld-char2',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué cualidad de Ayelén se destaca al inicio de la historia?',
        options: [
          'Su habilidad para cazar jaguares y picaflores en el sur.',
          'Su origen en un lugar diferente y su lenguaje propio.',
          'Su gran riqueza y el tamaño de la ruca donde vivía.',
          'Su miedo a la nieve y a los hombres de piel oscura.'
        ],
        correctAnswer: 'Su origen en un lugar diferente y su lenguaje propio.',
      },
      {
        id: 'alld-char3',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué sentimiento acaba transformando a Ayelén y Martín al final?',
        options: [
          'La curiosidad por viajar juntos hacia el Río de la Plata.',
          'Un amor profundo que genera calor y detiene el conflicto.',
          'El miedo a morir congelados en medio del desierto solo.',
          'La alegría de haber aprendido a usar armas de fuego.'
        ],
        correctAnswer: 'Un amor profundo que genera calor y detiene el conflicto.',
      },
    ],
  },
};
