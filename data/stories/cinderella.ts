import { Story, QuestionCategory } from '../../types';

export const cinderella: Story = {
  id: 'cinderella',
  title: 'La Cenicienta',
  author: 'Charles Perrault',
  coverImage: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Offterdinger_Aschenbrodel_%281%29.jpg',
  content: `
Había una vez un gentilhombre que se casó en segundas nupcias con una mujer, la más altanera y orgullosa que jamás se haya visto. Tenía dos hijas por el estilo y que se le parecían en todo.

El marido, por su lado, tenía una hija, pero de una dulzura y bondad sin par; lo había heredado de su madre que era la mejor persona del mundo.

Junto con realizarse la boda, la madrastra dio libre curso a su mal carácter; no pudo soportar las cualidades de la joven, que hacían aparecer todavía más odiables a sus hijas. La obligó a las más viles tareas de la casa: ella era la que fregaba los pisos y la vajilla, la que limpiaba los cuartos de la señora y de las señoritas sus hijas; dormía en lo más alto de la casa, en una buhardilla, sobre una mísera pallasa, mientras sus hermanas ocupaban habitaciones con parquet, donde tenían camas a la última moda y espejos en que podían mirarse de cuerpo entero.

La pobre muchacha aguantaba todo con paciencia, y no se atreía a quejarse ante su padre, de miedo que le reprendiera pues su mujer lo dominaba por completo. Cuando terminaba sus quehaceres, se instalaba en el rincón de la chimenea, sentándose sobre las cenizas, lo que le valió el apodo de Cenicienta.

Sucedió que el hijo del rey dio un baile al que invitó a todas las personas distinguidas. Las dos hermanas también fueron invitadas. Cenicienta las ayudó a vestirse, a peinarse y a elegir sus mejores galas. Aunque se burlaban de ella, Cenicienta las atendía con su bondad habitual.

Cuando partieron al palacio, Cenicienta se echó a llorar. Entonces apareció su hada madrina.
—¿Te gustaría ir al baile? —le preguntó.
—¡Oh, sí! —respondió Cenicienta suspirando.
El hada madrina, con un toque de su varita, transformó una calabaza en una carroza dorada, seis ratones en hermosos caballos, una rata en un cochero y seis lagartos en lacayos. Finalmente, transformó los harapos de Cenicienta en un vestido de tela de oro y plata, adornado con pedrería, y le dio un par de zapatitos de cristal, los más bellos del mundo.

Pero le advirtió:
—No te quedes más allá de la medianoche, porque entonces la carroza volverá a ser calabaza, los caballos ratones y tus vestidos volverán a ser harapos.

Cenicienta llegó al palacio y su belleza deslumbró a todos. El príncipe no se apartó de ella en toda la noche. Al sonar las doce menos cuarto, Cenicienta hizo una gran reverencia y regresó a su casa.

Al día siguiente, hubo otra fiesta. Cenicienta asistió aún más hermosa. Pero se divirtió tanto que olvidó la advertencia del hada. Al sonar la primera campanada de la medianoche, huyó del palacio como un ciervo. El príncipe corrió tras ella, pero no pudo alcanzarla; solo encontró uno de sus zapatitos de cristal que se le había caído al correr.

Días después, el hijo del rey proclamó que se casaría con aquella persona a la que le calzara exactamente el zapatito. Lo probaron princesas, duquesas y toda la corte, pero sin éxito. Finalmente llegaron a casa de las dos hermanas. Ellas hicieron lo posible por introducir el pie en el zapato, pero no pudieron.

Cenicienta, que las miraba, dijo riendo:
—¿Puedo probar yo?
Sus hermanas se echaron a reír y se burlaron de ella. Pero el gentilhombre encargado de la prueba vio que era muy hermosa y dijo que tenía orden de probárselo a todas las jóvenes. Cenicienta se sentó y, en cuanto acercó el zapato a su pie, vio que calzaba sin esfuerzo alguno.

La sorpresa de las hermanas fue grande, pero mayor aún cuando Cenicienta sacó de su bolsillo el otro zapatito y se lo puso. En ese momento apareció el hada madrina y, tocando con su varita los vestidos de Cenicienta, los volvió más magníficos que los anteriores.

Las hermanas reconocieron en ella a la hermosa joven que habían visto en el baile. Se arrojaron a sus pies pidiéndole perdón por los malos tratos. Cenicienta las abrazó y les dijo que las perdonaba de todo corazón. La llevaron ante el joven príncipe, quien la encontró más bella que nunca, y pocos días después se casaron.
`,
  // Added missing wordCount, level, and questions properties
  wordCount: 712,
  level: '3er Grado (Nivel O)',
  questions: {
    [QuestionCategory.LITERAL]: [
      {
        id: 'cin-lit1',
        category: QuestionCategory.LITERAL,
        questionText: '¿Por qué llamaban a la joven "Cenicienta"?',
        options: [
          'Porque le gustaba comer pan quemado.',
          'Porque se sentaba sobre las cenizas de la chimenea.',
          'Porque sus vestidos eran de color gris ceniza.',
          'Porque era el nombre de su madre.'
        ],
        correctAnswer: 'Porque se sentaba sobre las cenizas de la chimenea.',
      },
      {
        id: 'cin-lit2',
        category: QuestionCategory.LITERAL,
        questionText: '¿En qué transformó el hada madrina a los seis ratones?',
        options: [
          'En hermosos caballos.',
          'En pequeños lacayos.',
          'En un cochero gordo.',
          'En sirvientes del palacio.'
        ],
        correctAnswer: 'En hermosos caballos.',
      },
      {
        id: 'cin-lit3',
        category: QuestionCategory.LITERAL,
        questionText: '¿Qué objeto perdió Cenicienta al huir del baile a medianoche?',
        options: [
          'Una cinta azul de su vestido.',
          'Un zapatito de cristal.',
          'Un collar de perlas.',
          'Un guante de seda blanca.'
        ],
        correctAnswer: 'Un zapatito de cristal.',
      },
    ],
    [QuestionCategory.SEQUENCING]: [
      {
        id: 'cin-seq1',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué hizo Cenicienta justo después de que sus hermanas partieran al palacio?',
        options: [
          'Se fue a dormir a la buhardilla.',
          'Se puso a llorar de tristeza.',
          'Buscó una calabaza en el jardín.',
          'Limpió toda la cocina de nuevo.'
        ],
        correctAnswer: 'Se puso a llorar de tristeza.',
      },
      {
        id: 'cin-seq2',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Cuál fue el orden de las transformaciones del hada?',
        options: [
          'Calabaza, ratones, rata, lagartos y finalmente Cenicienta.',
          'Cenicienta, calabaza, rata y luego los ratones.',
          'Ratones, lagartos, calabaza y luego el zapato.',
          'Cenicienta, zapato y luego la carroza dorada.'
        ],
        correctAnswer: 'Calabaza, ratones, rata, lagartos y finalmente Cenicienta.',
      },
      {
        id: 'cin-seq3',
        category: QuestionCategory.SEQUENCING,
        questionText: '¿Qué ocurrió inmediatamente después de que Cenicienta se probara el primer zapato?',
        options: [
          'El príncipe llegó a buscarla.',
          'Sacó el segundo zapatito de su bolsillo.',
          'Las hermanas huyeron de la casa.',
          'El hada madrina desapareció.'
        ],
        correctAnswer: 'Sacó el segundo zapatito de su bolsillo.',
      },
    ],
    [QuestionCategory.VOCABULARY]: [
      {
        id: 'cin-voc1',
        category: QuestionCategory.VOCABULARY,
        questionText: 'La madrastra era una mujer "altanera". ¿Qué significa esto?',
        options: [
          'Que era muy bajita y delgada.',
          'Que era orgullosa y se creía superior.',
          'Que sabía cocinar muy bien.',
          'Que era muy amable con todos.'
        ],
        correctAnswer: 'Que era orgullosa y se creía superior.',
      },
      {
        id: 'cin-voc2',
        category: QuestionCategory.VOCABULARY,
        questionText: '¿Qué es una "buhardilla" en este cuento?',
        options: [
          'Un tipo de cama muy lujosa.',
          'Un cuarto pequeño en lo alto de la casa.',
          'Un zapato hecho de cristal fino.',
          'Un salón donde se hacen bailes.'
        ],
        correctAnswer: 'Un cuarto pequeño en lo alto de la casa.',
      },
      {
        id: 'cin-voc3',
        category: QuestionCategory.VOCABULARY,
        questionText: 'Cenicienta vestía "harapos" antes de la magia. ¿Qué son harapos?',
        options: [
          'Telas de oro y plata muy brillantes.',
          'Ropa vieja, rota y muy gastada.',
          'Vestidos de fiesta con pedrería.',
          'Cintas de seda para el cabello.'
        ],
        correctAnswer: 'Ropa vieja, rota y muy gastada.',
      },
    ],
    [QuestionCategory.MAIN_IDEA]: [
      {
        id: 'cin-main1',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es la lección más importante de la historia?',
        options: [
          'Que hay que tener zapatos de cristal para ser feliz.',
          'Que la bondad y la paciencia son recompensadas.',
          'Que no se debe ir a bailar a la medianoche.',
          'Que las hermanas siempre son envidiosas.'
        ],
        correctAnswer: 'Que la bondad y la paciencia son recompensadas.',
      },
      {
        id: 'cin-main2',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Por qué Cenicienta perdonó a sus hermanas al final?',
        options: [
          'Porque tenía miedo de que el príncipe se enojara.',
          'Porque era una persona de gran dulzura y bondad.',
          'Porque las hermanas le dieron muchos regalos.',
          'Porque el hada madrina se lo ordenó.'
        ],
        correctAnswer: 'Porque era una persona de gran dulzura y bondad.',
      },
      {
        id: 'cin-main3',
        category: QuestionCategory.MAIN_IDEA,
        questionText: '¿Cuál es el conflicto principal de Cenicienta?',
        options: [
          'La pérdida de sus zapatos en el bosque.',
          'El maltrato de su madrastra y hermanas.',
          'La dificultad de encontrar una carroza.',
          'La falta de comida en el palacio real.'
        ],
        correctAnswer: 'El maltrato de su madrastra y hermanas.',
      },
    ],
    [QuestionCategory.INFERENCE]: [
      {
        id: 'cin-inf1',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué el hada le advirtió sobre la medianoche?',
        options: [
          'Porque a esa hora el palacio cerraba.',
          'Porque el hechizo perdía su fuerza en ese momento.',
          'Porque Cenicienta tenía que ir a trabajar.',
          'Porque el príncipe se convertía en ratón.'
        ],
        correctAnswer: 'Porque el hechizo perdía su fuerza en ese momento.',
      },
      {
        id: 'cin-inf2',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Cómo se sintieron las hermanas al ver que el zapato le calzaba a Cenicienta?',
        options: [
          'Muy felices por el triunfo de su hermana.',
          'Sumamente sorprendidas y probablemente avergonzadas.',
          'Enojadas porque querían quedarse con el zapato.',
          'Aburridas porque la prueba duró mucho tiempo.'
        ],
        correctAnswer: 'Sumamente sorprendidas y probablemente avergonzadas.',
      },
      {
        id: 'cin-inf3',
        category: QuestionCategory.INFERENCE,
        questionText: '¿Por qué Cenicienta no se quejaba con su padre?',
        options: [
          'Porque su padre no vivía con ellas.',
          'Porque sabía que su padre estaba dominado por la madrastra.',
          'Porque no le importaba trabajar tanto.',
          'Porque quería darle una sorpresa al final.'
        ],
        correctAnswer: 'Porque sabía que su padre estaba dominado por la madrastra.',
      },
    ],
    [QuestionCategory.CHARACTER]: [
      {
        id: 'cin-char1',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Qué rasgos definen mejor a Cenicienta?',
        options: [
          'Orgullosa y muy peleadora.',
          'Dulce, paciente y bondadosa.',
          'Tímida y con miedo a las hadas.',
          'Vengativa con quienes la tratan mal.'
        ],
        correctAnswer: 'Dulce, paciente y bondadosa.',
      },
      {
        id: 'cin-char2',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo era la personalidad de las hermanas mayores?',
        options: [
          'Eran trabajadoras y muy ordenadas.',
          'Eran vanidosas, orgullosas y envidiosas.',
          'Eran divertidas y les gustaba jugar.',
          'Eran sabias y daban buenos consejos.'
        ],
        correctAnswer: 'Eran vanidosas, orgullosas y envidiosas.',
      },
      {
        id: 'cin-char3',
        category: QuestionCategory.CHARACTER,
        questionText: '¿Cómo es el hada madrina en esta historia?',
        options: [
          'Es una persona muy estricta y enojona.',
          'Es un ser mágico, protector y compasivo.',
          'Es una anciana que no sabe usar la magia.',
          'Es la verdadera madre de Cenicienta.'
        ],
        correctAnswer: 'Es un ser mágico, protector y compasivo.',
      },
    ],
  },
};
