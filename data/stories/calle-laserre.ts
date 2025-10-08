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
¿Y qué pasaría si decidiéramos comprar un perro para llevar a casa y sin que nos diéramos cuenta se le cayera una de las erres? No es lo mismo llegar a casa con el cachorro que todos anhelaban, que abrir la puerta y empezar a decir: —Pero, pero, pero, ¿cómo es posible? Si yo traía un perro… ¿Pero, pero, pero, dónde está?
Todo lo contrario sucedería si quisiéramos llevar a casa un kilo de peras e, inesperadamente, a la única erre de la palabra se le agregara otra. Esa sí sería una forma rápida e impensada de conseguir una mascota.
Ahora imaginemos a una persona que se está enterando de una noticia. Pero justo en ese mismo momento aparece una erre que tenía el deseo irresistible de conversar con otra y se ubica a su lado. La persona que se estaba enterando de algo se ve repentinamente enterrando la raíz de una planta en una maceta. Por supuesto, queda totalmente desconcertada y sin entender qué sucedió por más que se pregunte cómo fue que el “enterando” se transformó en “enterrando”.
Veamos este otro caso. Un pirata acaba de encontrar un barco abandonado con un tesoro dentro de un cofre. Es demasiado pesado para que lo lleve todo de una vez, de modo que decide encerrarlo en una cabina del barco, bajo cinco llaves. Pero mientras lo está encerrando allí, una de las erres quiere irse a mirar el mar desde la cubierta. Y el pirata se encuentra de pronto encerando el piso de la cabina. Sorprendido, se pregunta cómo es posible que él, que detesta ese tipo de tareas, esté pasando cera.
Y ni hablar de las situaciones que, nosotras, las erres, podríamos causar si se tratara de distinguir entre cero y cerro o entre coro y corro o entre caro y carro.
Por todo lo dicho tenemos la dicha de proclamar que las erres somos fundamentales. Aunque también es cierto que cualquier otra letra podría argumentar lo mismo. Y sin lugar a dudas, no sería una afirmación errada. Cada letra puede cumplir su función porque las demás desempeñan la que les corresponde. Pero como somos las erres las que estamos hablando, nuestro deber es referirnos a lo que mejor conocemos, es decir, a nosotras mismas. Sí, realmente creemos que lo mejor es dejar que cada letra hable por sí.
Estamos convencidas de que todas las letras tienen importancia, pero nadie puede negar que la nuestra es verdaderamente grande. Por eso, sin querer subestimar a nadie, nos parece justo que una calle lleve nuestro nombre. Y si alguna letra piensa lo mismo, ¡que se consiga una calle o avenida que la nombre! Al fin y al cabo, si nosotras pudimos, cualquiera tendría que poder.
Pero si alguien duda de la veracidad de lo que aquí decimos, no tiene más que buscar la calle Laserre en la ciudad de Buenos Aires. En el mismísimo momento de poner los pies en ella, comprobará por sí mismo la verdad de nuestras palabras.
  `,
  wordCount: 710,
  level: '4to Grado (Nivel P)',
  questions: {
    [QuestionCategory.LITERAL]: [
      {
        id: 'cl-lit1',
        category: QuestionCategory.LITERAL,
        questionText: '¿Quiénes están contando la historia?',
        options: ['Un pirata', 'El Almirante Augusto Laserre', 'Las letras "erre"', 'Un niño'],
        correctAnswer: 'Las letras "erre"',
      },
      {
        id: 'cl-lit2',
        category: QuestionCategory.LITERAL,
        questionText: 'Según las narradoras, ¿qué pasa si a la palabra "careta" se le agrega otra "erre"?',
        options: ['Se convierte en "carreta"', 'Se convierte en "carretera"', 'No pasa nada', 'Se borra'],
        correctAnswer: 'Se convierte en "carreta"',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'cl-seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Cuál es el segundo ejemplo que dan las erres para mostrar su poder de cambiar palabras?',
        options: ['Enterando y enterrando', 'Cero y cerro', 'Perro y pero', 'Encerrando y encerando'],
        correctAnswer: 'Perro y pero',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'cl-voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'En la frase "relatos y leyendas de toda índole", ¿qué significa "índole"?',
        options: ['De un solo tema', 'De un lugar específico', 'De diferentes clases o tipos', 'De autores famosos'],
        correctAnswer: 'De diferentes clases o tipos',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'cl-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es la idea principal de esta historia?',
        options: ['La historia de un almirante famoso.', 'Mostrar de forma divertida y creativa la importancia de la letra "erre" y cómo puede cambiar el significado de las palabras.', 'Una lista de palabras con "erre".', 'Por qué la calle Laserre tiene ese nombre.'],
        correctAnswer: 'Mostrar de forma divertida y creativa la importancia de la letra "erre" y cómo puede cambiar el significado de las palabras.',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'cl-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué las "erres" dicen al final que "cualquier otra letra podría argumentar lo mismo"?',
        options: ['Porque están cansadas de hablar', 'Porque reconocen que todas las letras son importantes para formar palabras', 'Porque no quieren ofender a las otras letras', 'Porque es parte de una broma'],
        correctAnswer: 'Porque reconocen que todas las letras son importantes para formar palabras',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'cl-char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo son las "erres" que narran la historia?',
        options: ['Tímidas y silenciosas', 'Orgullosas de su importancia y juguetonas', 'Aburridas y serias', 'Enojadas con las otras letras'],
        correctAnswer: 'Orgullosas de su importancia y juguetonas',
      },
    ],
  },
};
