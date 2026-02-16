
import { Story, QuestionCategory } from '../../types';

export const calleLaserre: Story = {
  id: 'calle-laserre',
  title: 'Calle Laserre',
  author: 'Adela Basch',
  coverImage: `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg width="600" height="400" viewBox="0 0 100 66.67" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#FB5607" /><g transform="rotate(27) translate(3)"><path d="M 0 0 L 50 0 L 50 50 L 0 50 Z" fill="#F7F9FB" opacity="0.5" transform="translate(0, 0)"/><path d="M 50 16 L 100 16 L 100 66 L 50 66 Z" fill="#3A86FF" opacity="0.5" transform="translate(0, 0)"/></g></svg>')}`,
  content: `
Pocas personas saben que en algunas grandes ciudades hay una calle llamada Laserre.
Algunos creen que el nombre de esta calle es un homenaje a un marino, el Almirante Augusto Laserre, que vivió en Buenos Aires entre 1826 y 1906 y protagonizó más de una destacada actuación en eventos ocurridos en alta mar.
Pero otros, cuya imaginación ha sido enriquecida por la frecuente lectura de relatos y leyendas de toda índole, afirman que la calle Laserre se llama así porque en ella pueden encontrarse todas las erres posibles. Tal vez alguien se pregunte si las erres posibles son muchas, porque se podría decir que la erre es solo una letra. Una más entre todo el resto. Sin embargo, nosotras, las erres, sabemos que tenemos a cargo una importantísima función y que somos las únicas en todo el alfabeto en condiciones de cumplir con ella satisfactoriamente.
Nosotras podemos modificar de manera total el significado de una palabra. Sí, tenemos esa increíble capacidad.
Hay, por ejemplo, erres que con su sola y simple presencia pueden cambiar radicalmente el significado de una palabra. Tales son los casos que mencionaremos a continuación y pondremos a consideración de los lectores, para que lleguen a sus propias conclusiones.
Si alguien quiere disfrazarse en las fiestas de Carnaval y completar su atuendo con una careta, debe tomar las precauciones necesarias para que esta contenga una sola erre. Si inadvertidamente se deslizaran dos, la careta se convertirá en un medio de transporte: una carreta. Un poco lento, pero medio de transporte al fin y hasta capaz de arruinar el disfraz en un descuido.
¿Y qué pasaría si decidiéramos comprar un perro para llevar a casa y sin que nos dábamos cuenta se le cayera una de las erres? No es lo mismo llegar a casa con el cachorro que todos anhelaban, que abrir la puerta y empezar a decir: —Pero, pero, pero, ¿cómo es posible? Si yo traía un perro… ¿Pero, pero, pero, dónde está?
Todo lo contrario sucedería si quisiéramos llevar a casa un kilo de peras e, inesperadamente, a la única erre de la palabra se le agregara otra. Esa sí sería una forma rápida e impensada de conseguir una mascota.
Ahora imaginemos a una persona que se está enterando de una noticia. Pero justo en ese mismo momento aparece una erre que tenía el deseo irresistible de conversar con otra y se ubica a su lado. La persona que se estaba enterando de algo se ve repentinamente enterrando la raíz de una planta en una maceta. Por supuesto, queda totalmente desconcertada y sin entender qué sucedió por más que se pregunte cómo fue que el “enterando” se transformó en “enterrando”.
Veamos este otro caso. Un pirata acaba de encontrar un barco abandonado con un tesoro dentro de un cofre. Es demasiado pesado para que lo lleve todo de una vez, de modo que decide encerrarlo en una cabina del barco, bajo cinco llaves. Pero mientras lo está encerrando allí, una de las erres quiere irse a mirar el mar desde la cubierta. Y el pirata se encuentra de pronto encerando el piso de la cabina. Sorprendido, se pregunta cómo es posible que él, que detesta ese tipo de tareas, esté pasando cera.
Y ni hablar de las situaciones que, nosotras, las erres, podríamos causar si se tratara de distinguir entre cero y cerro o entre coro y corro o entre caro y carro.
Por todo lo dicho tenemos la dicha de proclamar que las erres somos fundamentales. Aunque también es cierto que cualquier otra letra podría argumentar lo mismo. Y sin lugar a dudas, no sería una afirmación errada. Cada letra puede cumplir su función porque las demás desempeñan la que les corresponde. Pero como somos las erres las que estamos hablando, nuestro deba es referirnos a lo que mejor conocemos, es decir, a nosotras mismas. Sí, realmente creemos que lo mejor es dejar que cada letra hable por sí.
Estamos convencidas de que todas las letras tienen importancia, pero nadie puede negar que la nuestra es verdaderamente grande. Por eso, sin querer subestimar a nadie, nos parece justo que una calle lleve nuestro nombre. Y si alguna letra piensa lo mismo, ¡que se consiga una calle o avenida que la nombre! Al fin y al cabo, si nosotras pudimos, cualquiera tendría que poder.
But si alguien duda de la veracidad de lo que aquí decimos, no tiene más que buscar la calle Laserre en la ciudad de Buenos Aires. En el mismísimo momento de poner los pies en ella, comprobará por sí mismo la verdad de nuestras palabras.
  `,
  wordCount: 710,
  level: '4to Grado (Nivel P)',
  questions: {
    [QuestionCategory.LITERAL]: [
      {
        id: 'cl-lit1',
        category: QuestionCategory.LITERAL,
        questionText: '¿Quiénes se presentan como las narradoras de esta historia?',
        options: [
          'El almirante que vivió hace años.',
          'Las propias letras erres del abecedario.',
          'Un pirata que busca un gran tesoro.',
          'Un marino que viaja por el océano.'
        ],
        correctAnswer: 'Las propias letras erres del abecedario.',
      },
      {
        id: 'cl-lit2',
        category: QuestionCategory.LITERAL,
        questionText: '¿En qué se transforma una careta si se le agrega una erre extra?',
        options: [
          'En una fruta muy dulce y jugosa.',
          'En un medio de transporte muy lento.',
          'En una noticia que sale en el diario.',
          'En una maceta para plantar raíces.'
        ],
        correctAnswer: 'En un medio de transporte muy lento.',
      },
      {
        id: 'cl-lit3',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué le sucede a la palabra "perro" si pierde una de sus letras erres?',
        options: [
          'Se transforma en la palabra "pero".',
          'Se convierte en un kilo de peras.',
          'Pasa a ser el nombre de un marino.',
          'Se vuelve una noticia muy importante.'
        ],
        correctAnswer: 'Se transforma en la palabra "pero".',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'cl-seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué ejemplo se menciona justo después del caso del "perro" y "pero"?',
        options: [
          'El ejemplo de las peras y la perra.',
          'El ejemplo del pirata y la cera.',
          'El ejemplo de la careta y el carnaval.',
          'El ejemplo de las noticias y la tierra.'
        ],
        correctAnswer: 'El ejemplo de las peras y la perra.',
      },
      {
        id: 'cl-seq2',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué ocurre en la historia apenas el pirata decide "encerrar" su cofre?',
        options: [
          'El pirata sale a mirar el mar azul.',
          'El pirata se pone a pasar cera al piso.',
          'El pirata encuentra un barco abandonado.',
          'El pirata guarda las cinco llaves de oro.'
        ],
        correctAnswer: 'El pirata se pone a pasar cera al piso.',
      },
      {
        id: 'cl-seq3',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué recomiendan las erres al final de todo su relato?',
        options: [
          'Leer muchos libros de leyendas.',
          'Visitar la calle Laserre en la ciudad.',
          'Escribir palabras con una sola erre.',
          'Preguntar al almirante sobre el mar.'
        ],
        correctAnswer: 'Visitar la calle Laserre en la ciudad.',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'cl-voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'En el texto, ¿qué significa que los relatos son de toda "índole"?',
        options: [
          'Que tratan de un único tema aburrido.',
          'Que son de diversas clases o naturalezas.',
          'Que pertenecen a un lugar muy lejano.',
          'Que fueron escritos por personas famosas.'
        ],
        correctAnswer: 'Que son de diversas clases o naturalezas.',
      },
      {
        id: 'cl-voc2',
        category: QuestionCategory.VOCABULARY,
        questionText: 'Las erres dicen que no sería una "afirmación errada". ¿Qué es algo errado?',
        options: [
          'Algo que es muy corto y simple.',
          'Algo que es equivocado o incorrecto.',
          'Algo que es muy famoso en la ciudad.',
          'Algo que es muy difícil de pronunciar.'
        ],
        correctAnswer: 'Algo que es equivocado o incorrecto.',
      },
      {
        id: 'cl-voc3',
        category: QuestionCategory.VOCABULARY,
        questionText: '¿Qué quieren decir las erres cuando dicen que no quieren "subestimar" a nadie?',
        options: [
          'Darle a algo menos valor del que tiene.',
          'Ignorar por completo a las otras letras.',
          'Saludar con mucho respeto al almirante.',
          'Gritar muy fuerte los nombres de las calles.'
        ],
        correctAnswer: 'Darle a algo menos valor del que tiene.',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'cl-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es el objetivo principal de este cuento?',
        options: [
          'Contar la biografía de un marino famoso.',
          'Mostrar cómo una letra cambia el significado.',
          'Explicar cómo se fundó la ciudad actual.',
          'Enseñar a los piratas a cuidar sus tesoros.'
        ],
        correctAnswer: 'Mostrar cómo una letra cambia el significado.',
      },
      {
        id: 'cl-main2',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Qué idea defienden las erres durante toda la historia?',
        options: [
          'Que ellas son las letras más difíciles.',
          'Que ellas cumplen una función fundamental.',
          'Que el abecedario debería ser más corto.',
          'Que los piratas no saben escribir bien.'
        ],
        correctAnswer: 'Que ellas cumplen una función fundamental.',
      },
      {
        id: 'cl-main3',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Por qué la calle Laserre es especial según las narradoras?',
        options: [
          'Porque allí vivió el almirante Augusto.',
          'Porque contiene todas las erres posibles.',
          'Porque es la calle más larga del mundo.',
          'Porque tiene muchos árboles de peras.'
        ],
        correctAnswer: 'Porque contiene todas las erres posibles.',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'cl-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué las erres admiten que otras letras podrían decir lo mismo?',
        options: [
          'Porque están cansadas de dar ejemplos.',
          'Porque todas son necesarias para el idioma.',
          'Porque tienen miedo de que las borren.',
          'Porque es una broma para el almirante.'
        ],
        correctAnswer: 'Porque todas son necesarias para el idioma.',
      },
      {
        id: 'cl-inf2',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué la persona de la noticia termina "enterrando" una planta?',
        options: [
          'Porque quería ser una gran jardinera.',
          'Por el deseo de una erre de estar con otra.',
          'Porque la noticia era sobre flores nuevas.',
          'Porque se olvidó de leer el diario ese día.'
        ],
        correctAnswer: 'Por el deseo de una erre de estar con otra.',
      },
      {
        id: 'cl-inf3',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Qué se puede deducir sobre la personalidad de las letras erres?',
        options: [
          'Que son muy tímidas y prefieren el mar.',
          'Que son orgullosas y con mucho humor.',
          'Que son aburridas y solo quieren estudiar.',
          'Que son malvadas y odian a los piratas.'
        ],
        correctAnswer: 'Que son orgullosas y con mucho humor.',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'cl-char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo describen las erres su propia capacidad?',
        options: [
          'Como una habilidad muy lenta y pesada.',
          'Como una capacidad increíble y radical.',
          'Como algo que solo los marinos entienden.',
          'Como un secreto que los niños no saben.'
        ],
        correctAnswer: 'Como una capacidad increíble y radical.',
      },
      {
        id: 'cl-char2',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo es el pirata que aparece en uno de los ejemplos?',
        options: [
          'Es un hombre al que le gusta pasar cera.',
          'Es alguien que detesta las tareas del hogar.',
          'Es un marinero muy amigo del almirante.',
          'Es un experto en plantar raíces de flores.'
        ],
        correctAnswer: 'Es alguien que detesta las tareas del hogar.',
      },
      {
        id: 'cl-char3',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué característica define mejor a este relato?',
        options: [
          'Es una historia triste sobre un naufragio.',
          'Es un juego creativo con el lenguaje.',
          'Es un manual para aprender a navegar.',
          'Es una leyenda antigua sobre carnavales.'
        ],
        correctAnswer: 'Es un juego creativo con el lenguaje.',
      },
    ],
  },
};
