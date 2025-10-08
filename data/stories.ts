import { Story, QuestionCategory } from '../types';

export const stories: Story[] = [
  {
    id: 'leo-the-lighthouse-lion',
    title: 'Leo, el León del Faro',
    author: 'Fábula Finch',
    coverImage: 'https://picsum.photos/seed/leo-lion/600/400',
    content: `
Leo no era un león cualquiera; era el guardián de un faro. Su hogar era una torre alta a rayas en el borde de una isla rocosa. Cada noche, mientras el sol se hundía bajo las olas, Leo subía la escalera de caracol para encender la gran lámpara. Su trabajo era el más importante de la isla: mantener a los barcos a salvo de las rocas afiladas.

Una tarde, se desató una fuerte tormenta. El viento aullaba y las olas rompían contra el faro, lanzando un rocío salado por el aire. Leo, con su melena esponjosa y sus patas firmes, no tenía miedo. Pulió el cristal de la lámpara hasta que brilló, asegurándose de que su luz fuera fuerte.

De repente, a través del rugido del viento, escuchó una bocina débil. Miró por la ventana y vio un pequeño barco sacudido por las olas gigantes. ¡Estaba perdido y se dirigía directamente hacia las rocas! Leo supo que tenía que actuar rápido. Respiró hondo y soltó el rugido más fuerte y valiente que pudo. El rugido viajó sobre el agua, un sonido guía en la tormenta.

Luego, enfocó su luz, haciéndola brillar directamente hacia el barco, mostrándole un camino seguro alrededor de la isla. El capitán del barco vio la luz brillante y escuchó el poderoso rugido. Dirigió el barco con cuidado, siguiendo el camino que Leo le había mostrado.

Cuando la tormenta finalmente pasó y salió el sol de la mañana, el barquito estaba a salvo en el puerto tranquilo. El capitán remó hasta la isla. "¡Gracias, león valiente!", le gritó al faro. "¡Tu luz y tu rugido nos salvaron!"

Leo sonrió, con el corazón lleno de orgullo. Sabía que ser el guardián de un faro era una gran responsabilidad, pero ayudar a los demás era la mejor sensación del mundo. Desde ese día, fue conocido no solo como Leo, el guardián del faro, sino como Leo, el león más valiente del mar.
    `,
    wordCount: 334,
    level: '3er Grado (Nivel N)',
    questions: {
      [QuestionCategory.LITERAL]: [
        {
          id: 'lit1',
          category: QuestionCategory.LITERAL,
          questionText: '¿Quién es el personaje principal de la historia?',
          options: ['El capitán del barco', 'Un pez valiente', 'Leo el León', 'Una torre alta'],
          correctAnswer: 'Leo el León',
        },
        {
          id: 'lit2',
          category: QuestionCategory.LITERAL,
          questionText: '¿Dónde vivía Leo el león?',
          options: ['En una cueva en la playa', 'En el barco del capitán', 'Dentro de un faro alto a rayas', 'En un bosque cercano'],
          correctAnswer: 'Dentro de un faro alto a rayas',
        },
        {
          id: 'lit3',
          category: QuestionCategory.LITERAL,
          questionText: '¿Qué hizo el capitán cuando su barco estuvo a salvo en el puerto?',
          options: ['Se fue a dormir inmediatamente', 'Remó hasta la isla para agradecerle a Leo', 'Arregló su barco', 'Se olvidó de Leo'],
          correctAnswer: 'Remó hasta la isla para agradecerle a Leo',
        },
      ],
      [QuestionCategory.SEQUENCING]: [
        {
          id: 'seq1',
          category: QuestionCategory.SEQUENCING,
          questionText: '¿Qué pasó justo después de que comenzó la tormenta?',
          options: ['Salió el sol', 'Leo vio un barco perdido en las olas', 'El capitán le agradeció a Leo', 'Leo se fue a dormir'],
          correctAnswer: 'Leo vio un barco perdido en las olas',
        },
        {
          id: 'seq2',
          category: QuestionCategory.SEQUENCING,
          questionText: '¿Cuál de estas cosas ocurrió PRIMERO en la historia?',
          options: ['Se desató una fuerte tormenta', 'El capitán le agradeció a Leo', 'Leo vio un barco en peligro', 'Leo encendía la lámpara cada noche'],
          correctAnswer: 'Leo encendía la lámpara cada noche',
        },
        {
          id: 'seq3',
          category: QuestionCategory.SEQUENCING,
          questionText: '¿Qué hizo Leo después de rugir para guiar al barco?',
          options: ['Se escondió del viento', 'Apagó la luz del faro', 'Enfocó su luz para mostrarle al barco un camino seguro', 'Se puso a jugar'],
          correctAnswer: 'Enfocó su luz para mostrarle al barco un camino seguro',
        },
      ],
      [QuestionCategory.VOCABULARY]: [
        {
          id: 'voc1',
          category: QuestionCategory.VOCABULARY,
          questionText: 'En la oración: "Su luz se proyectaba sobre el agua", ¿qué significa "se proyectaba"?',
          options: ['Parpadeaba débilmente', 'Hacía un sonido', 'Brillaba intensamente', 'Estaba escondida'],
          correctAnswer: 'Brillaba intensamente',
        },
        {
          id: 'voc2',
          category: QuestionCategory.VOCABULARY,
          questionText: 'En la frase "El viento aullaba y las olas rompían", ¿qué significa "aullaba"?',
          options: ['Cantaba suavemente', 'Hacía un sonido fuerte y largo como un lobo', 'Susurraba en silencio', 'Se reía a carcajadas'],
          correctAnswer: 'Hacía un sonido fuerte y largo como un lobo',
        },
        {
          id: 'voc3',
          category: QuestionCategory.VOCABULARY,
          questionText: 'La historia dice que Leo tenía "patas firmes". ¿Qué significa "firmes"?',
          options: ['Que eran muy suaves', 'Que eran débiles y temblorosas', 'Que eran fuertes y estables', 'Que eran muy pequeñas'],
          correctAnswer: 'Que eran fuertes y estables',
        },
      ],
      [QuestionCategory.MAIN_IDEA]: [
        {
          id: 'main1',
          category: QuestionCategory.MAIN_IDEA,
          questionText: '¿Cuál es la lección más importante de esta historia?',
          options: ['Los leones tienen rugidos fuertes', 'Las tormentas son muy peligrosas', 'Los faros son altos', 'Ser valiente y ayudar a los demás es importante'],
          correctAnswer: 'Ser valiente y ayudar a los demás es importante',
        },
        {
          id: 'main2',
          category: QuestionCategory.MAIN_IDEA,
          questionText: '¿Qué título alternativo describiría mejor la historia?',
          options: ['La Tormenta Fuerte', 'El León que Dormía Mucho', 'El Héroe del Faro', 'El Barco Perdido'],
          correctAnswer: 'El Héroe del Faro',
        },
        {
          id: 'main3',
          category: QuestionCategory.MAIN_IDEA,
          questionText: '¿Por qué es importante el trabajo de Leo en el faro?',
          options: ['Porque mantiene la isla bonita', 'Porque evita que los barcos se estrellen contra las rocas', 'Porque asusta a los peces', 'Porque le gusta ver la luz'],
          correctAnswer: 'Porque evita que los barcos se estrellen contra las rocas',
        },
      ],
      [QuestionCategory.INFERENCE]: [
        {
          id: 'inf1',
          category: QuestionCategory.INFERENCE,
          questionText: '¿Por qué el capitán del barco estaba tan agradecido con Leo?',
          options: ['Porque le gustaban los leones', 'Porque Leo le contó un chiste gracioso', 'Porque la luz de Leo salvó a su barco de chocar', 'Porque la tormenta terminó'],
          correctAnswer: 'Porque la luz de Leo salvó a su barco de chocar',
        },
        {
          id: 'inf2',
          category: QuestionCategory.INFERENCE,
          questionText: '¿Cómo crees que se sintió el capitán cuando vio la luz del faro en la tormenta?',
          options: ['Enojado porque la luz era muy brillante', 'Asustado porque pensó que era un monstruo', 'Aliviado y con esperanza', 'Indiferente'],
          correctAnswer: 'Aliviado y con esperanza',
        },
        {
          id: 'inf3',
          category: QuestionCategory.INFERENCE,
          questionText: '¿Por qué Leo pulió el cristal de la lámpara durante la tormenta?',
          options: ['Porque estaba aburrido y no tenía nada que hacer', 'Para que la luz fuera lo más brillante posible y pudiera ser vista', 'Porque le gusta que todo esté limpio', 'Para poder ver su reflejo'],
          correctAnswer: 'Para que la luz fuera lo más brillante posible y pudiera ser vista',
        },
      ],
      [QuestionCategory.CHARACTER]: [
        {
          id: 'char1',
          category: QuestionCategory.CHARACTER,
          questionText: '¿Qué dos palabras describen mejor la personalidad de Leo?',
          options: ['Tonto y perezoso', 'Valiente y responsable', 'Tímido y callado', 'Gruñón y malo'],
          correctAnswer: 'Valiente y responsable',
        },
        {
          id: 'char2',
          category: QuestionCategory.CHARACTER,
          questionText: '¿Cómo se siente Leo al final de la historia?',
          options: ['Triste porque la tormenta terminó', 'Cansado y con ganas de dormir', 'Orgulloso y feliz por haber ayudado', 'Enojado con el capitán'],
          correctAnswer: 'Orgulloso y feliz por haber ayudado',
        },
        {
          id: 'char3',
          category: QuestionCategory.CHARACTER,
          questionText: 'Aparte de valiente y responsable, ¿qué otra cualidad demuestra Leo?',
          options: ['Perezoso', 'Miedoso', 'Cuidadoso (al pulir el vidrio y enfocar la luz)', 'Egoísta'],
          correctAnswer: 'Cuidadoso (al pulir el vidrio y enfocar la luz)',
        },
      ],
    },
  },
  {
    id: 'snow-white',
    title: 'Blancanieves',
    author: 'Hermanos Grimm',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Schneewitchen_%281%29.jpg',
    content: `
Había una vez, en pleno invierno, una reina que se dedicaba a la costura sentada cerca de una ventana con marco de ébano negro. Los copos de nieve caían del cielo como plumones. Mirando nevar se pinchó un dedo con su aguja y tres gotas de sangre cayeron en la nieve. Como el efecto que hacía el rojo sobre la blanca nieve era tan bello, la reina se dijo.

-¡Ojalá tuviera una niña tan blanca como la nieve, tan roja como la sangre y tan negra como la madera de ébano!

Poco después tuvo una niñita que era tan blanca como la nieve, tan encarnada como la sangre y cuyos cabellos eran tan negros como el ébano. Por todo eso fue llamada Blancanieves. Y al nacer la niña, la reina murió.

Un año más tarde el rey tomó otra esposa. Era una mujer bella pero orgullosa y arrogante, y no podía soportar que nadie la supera en belleza. Tenía un espejo maravilloso y cuando se ponía frente a él, mirándose le preguntaba:

¡Espejito, espejito de mi habitación!
¿Quién es la más hermosa de esta región?

Entonces el espejo respondía:
La Reina es la más hermosa de esta región.
Ella quedaba satisfecha pues sabía que su espejo siempre decía la verdad.

Pero Blancanieves crecía y embellecía cada vez más; cuando alcanzó los siete años era tan bella como la clara luz del día y aún más linda que la reina. Ocurrió que un día cuando le preguntó al espejo:

¡Espejito, espejito de mi habitación!
¿Quién es la más hermosa de esta región?

El espejo respondió:
La Reina es la hermosa de este lugar, pero la linda Blancanieves lo es mucho más.

Entonces la reina tuvo miedo y se puso amarilla y verde de envidia. A partir de ese momento, cuando veía a Blancanieves el corazón le daba un vuelco en el pecho, tal era el odio que sentía por la niña. Y su envidia y su orgullo crecían cada día más, como una mala hierba, de tal modo que no encontraba reposo, ni de día ni de noche.

Entonces hizo llamar a un cazador y le dijo:
- Lleva esa niña al bosque; no quiero que aparezca más ante mis ojos. La matarás y me traerás sus pulmones y su hígado como prueba.

El cazador obedeció y se la llevó, pero cuando quiso atravesar el corazón de Blancanieves, la niña se puso a llorar y exclamó:
- ¡Mi buen cazador, no me mates!; correré hacia el bosque espeso y no volveré nunca más.

Como era tan linda el cazador tuvo piedad y dijo:
- ¡Corre , pues, mi pobre niña!
Pensaba, sin embargo, que las fieras pronto la devorarían. No obstante, no tener que matarla fue para él como si le quitaran un peso del corazón. Un cerdito venía saltando; el cazador lo mató, extrajo sus pulmones y su hígado y los llevó a la reina como prueba de que había cumplido su misión.

El cocinero los cocinó con sal y la mala mujer los comió creyendo comer los pulmones y el hígado de Blancanieves.

Por su parte, la pobre niña se encontraba en medio de los grandes bosques, abandonada por todos y con tal miedo que todas las hojas de los árboles la asustaban. No tenía idea de cómo arreglárselas y entonces corrió y corrió sobre guijarros filosos y a través de las zarzas. Los animales salvajes se cruzaban con ella pero no le hacían ningún daño. Corrió hasta la caída de la tarde: entonces vio una casita a la que entró para descansar. En la cabañita todo era pequeño, pero tan lindo y limpio como se pueda imaginar. Había una mesita pequeña con un mantel blanco y sobre él siete platitos, cada uno con su pequeña cuchara, más siete cuchillos, siete tenedores y siete vasos, todos pequeños. A lo largo de la pared estaban dispuestas, uno junto a la otra, siete camitas cubiertas con sábanas blancas como la nieve. Como tenía mucha hambre y mucha sed, Blancanieves comió trozos de legumbres y de pan de cada platito y bebió una gota de vino de cada vasito. Luego se sintió muy cansada y se quiso acostar en una de las camas. Pero ninguna era de su medida; una era demasiado larga, otra un poco corta, hasta que finalmente la séptima le vino bien. Se acostó, se encomendó a Dios y se durmió.

Cuando cayó la noche volvieron los dueños de casa; eran siete enanos que excavaban y extraían metal en las montañas. Encendieron sus siete farolitos y vieron que alguien había venido, pues las cosas no estaban en el orden en que las habían dejado.

El primero dijo: - ¿Quién se sentó en mi sillita?
El segundo: - ¿Quién comió en mi platito?
El tercero: - ¿Quién comió mi pan?
El cuarto: - ¿Quién comió de mis legumbres?
El quinto: - ¿Quién pinchó con mi tenedor?
El sexto: - ¿Quién cortó con mi cuchillo?
El séptimo: - ¿Quién bebió en mi vaso?

Luego el primero pasó su vista alrededor y vio una pequeña arruga en su cama y dijo:
- ¿Quién anduvo en mi lecho?

Los otros acudieron y exclamaron:
- ¡Alguien se ha acostado en el mío también! Mirando en el suyo, el séptimo descubrió a Blancanieves, acostada y dormida. Llamó a los otros, que se precipitaron con exclamaciones de asombro. Entonces fueron a buscar sus siete farolitos para alumbrar a Blancanieves.

- ¡Oh, mi Dios –exclamaron- qué bella es esta niña!
Y sintieron una alegría tan grande que no la despertaron y la dejaron proseguir su sueño. El séptimo enano se acostó una hora con cada uno de sus compañeros y así pasó la noche.

Al amanecer, Blancanieves despertó y viendo a los siete enanos tuvo miedo. Pero ellos se mostraron amables y le preguntaron.
- ¿Cómo te llamas?
- Me llamo Blancanieves –respondió ella.
- ¿Cómo llegaste hasta nuestra casa?
Entonces ella les contó que su madrastra había querido matarla pero el cazador había tenido piedad de ella permitiéndole correr durante todo el día hasta encontrar la casita.

Los enanos le dijeron:
- Si quieres hacer la tarea de la casa, cocinar, hacer las camas, lavar, coser y tejer y si tienes todo en orden y bien limpio puedes quedarte con nosotros; no te faltará nada.
- Sí –respondió Blancanieves- acepto de todo corazón. Y se quedó con ellos.

Blancanieves tuvo la casa en orden. Por las mañanas los enanos partían hacia las montañas, donde buscaban los minerales y el oro, y regresaban por la noche. Para ese entonces la comida estaba lista. Durante todo el día la niña permanecía sola; los buenos enanos la previnieron:
- ¡Cuídate de tu madrastra; pronto sabrá que estás aquí! ¡No dejes entrar a nadie!

La reina, una vez que comió los que creía que eran los pulmones y el hígado de Blancanieves, se creyó de nuevo la principal y la más bella de todas las mujeres. Se puso ante el espejo y dijo:
¡Espejito, espejito de mi habitación!
¿Quién es la más hermosa de esta región?

Entonces el espejo respondió.
Pero, pasando los bosques, en la casa de los enanos, la linda Blancanieves lo es mucho más. La reina es la más hermosa de este lugar.

La reina quedó aterrorizada pues sabía que el espejo no mentía nunca. Se dio cuenta de que el cazador la había engañado y de que Blancanieves vivía. Reflexionó y buscó un nuevo modo de deshacerse de ella pues hasta que no fuera la más bella de la región la envidia no le daría tregua ni reposo. Cuando finalmente urdió un plan se pintó la cara, se vistió como una vieja buhonera y quedó totalmente irreconocible.

Así disfrazada atravesó las siete montañas y llegó a la casa de los siete enanos, golpeó a la puerta y gritó:
- ¡Vendo buena mercadería! ¡Vendo! ¡Vendo!

Blancanieves miró por la ventana y dijo:
- Buen día, buena mujer. ¿Qué vende usted?
- Una excelente mercadería –respondió-; cintas de todos colores.

La vieja sacó una trenzada en seda multicolor, y Blancanieves pensó:
- Bien puedo dejar entrar a esta buena mujer.
Corrió el cerrojo para permitirle el paso y poder comprar esa linda cinta.

- ¡Niña –dijo la vieja- qué mal te has puesto esa cinta! Acércate que te la arreglo como se debe.
Blancanieves, que no desconfiaba, se colocó delante de ella para que le arreglara el lazo. Pero rápidamente la vieja lo oprimió tan fuerte que Blancanieves perdió el aliento y cayó como muerta.
- Y bien –dijo la vieja-, dejaste de ser la más bella. Y se fue.

Poco después, a la noche, los siete enanos regresaron a la casa y se asustaron mucho al ver a Blancanieves en el suelo, inmóvil. La levantaron y descubrieron el lazo que la oprimía. Lo cortaron y Blancanieves comenzó a respirar y a reanimarse poco a poco.

Cuando los enanos supieron lo que había pasado dijeron:
- La vieja vendedora no era otra que la malvada reina. ¡Ten mucho cuidado y no dejes entrar a nadie cuando no estamos cerca!

Cuando la reina volvió a su casa se puso frente al espejo y preguntó:
¡Espejito, espejito, de mi habitación!
¿Quién es la más hermosa de esta región?

Entonces, como la vez anterior, respondió:
La Reina es la más hermosa de este lugar, pero pasando los bosques, en la casa de los enanos, la linda Blancanieves lo es mucho más.
Cuando oyó estas palabras toda la sangre le afluyó al corazón. El terror la invadió, pues era claro que Blancanieves había recobrado la vida.

- Pero ahora –dijo ella- voy a inventar algo que te hará perecer.
Y con la ayuda de sortilegios, en los que era experta, fabricó un peine envenenado. Luego se disfrazó tomando el aspecto de otra vieja. Así vestida atravesó las siete montañas y llegó a la casa de los siete enanos. Golpeó la puerta y gritó:
- ¡Vendo buena mercadería! ¡Vendo! ¡Vendo!

Blancanieves miró desde adentro y dijo:
- Sigue tu camino; no puedo dejar entrar a nadie.
- Al menos podrás mirar - dijo la vieja, sacando el peine envenenado y levantándolo en el aire.

Tanto le gustó a la niña que se dejó seducir y abrió la puerta. Cuando se pusieron de acuerdo sobre la compra la vieja le dijo:
- Ahora te voy a peinar como corresponde.
La pobre Blancanieves, que nunca pensaba mal, dejó hacer a la vieja pero apenas ésta le había puesto el peine en los cabello el veneno hizo su efecto y la pequeña cayó sin conocimiento.

- ¡Oh, prodigio de belleza –dijo la mala mujer- ahora sí acabé contigo!
Por suerte la noche llegó pronto trayendo a los enanos con ella. Cuando vieron a Blancanieves en el suelo como muerta sospecharon enseguida de la madrastra. Examinaron a la niña y encontraron el peine envenenado. Apenas lo retiraron, Blancanieves volvió en sí y les contó lo que había sucedido. Entonces le advirtieron una vez más que debería cuidarse y no abrir la puerta a nadie.

En cuanto llegó a su casa la reina se colocó frente al espejo y dijo:
¡Espejito, espejito de mi habitación!
¿Quién es la más hermosa de esta región?

Y el espejito, respondió nuevamente:
La Reina es la más hermosa de este lugar. Pero pasando los bosques, en la casa de los enanos, la linda Blancanieves lo es mucho más.
La reina al oír hablar al espejo de ese modo, se estremeció y tembló de cólera.

- Es necesario que Blancanieves muera –exclamó- aunque me cueste la vida a mí misma.
Se dirigió entonces a una habitación escondida y solitaria a la que nadie podía entrar y fabricó una manzana envenenada. Exteriormente parecía buena, blanca y roja y tan bien hecha que tentaba a quien la veía; pero apenas se comía un trocito sobrevenía la muerte. Cuando la manzana estuvo pronta, se pintó la cara, se disfrazó de campesina y atravesó las siete montañas hasta llegar a la casa de los siete enanos.

Golpeó. Blancanieves sacó la cabeza por la ventana y dijo:
- No puedo dejar entrar a nadie; los enanos me lo han prohibido.
- No es nada –dijo la campesina- me voy a librar de mis manzanas. Toma, te voy a dar una.
- No – dijo Blancanieves – tampoco debo aceptar nada.

- ¿Temes que esté envenenada? –dijo la vieja-; mira, corto la manzana en dos partes; tu comerás la parte roja y yo la blanca.
La manzana estaba tan ingeniosamente hecho que solamente la parte roja contenía veneno. La bella manzana tentaba a Blancanieves y cuando vio a la campesina comer no pudo resistir más, estiró la mano y tomó la mitad envenenada. Apenas tuvo un trozo en la boca, cayó muerta.

Entonces la vieja la examinó con mirada horrible, rió muy fuerte y dijo.
- Blanca como la nieve, roja como la sangre, negra como el ébano. ¡Esta vez los enanos no podrán reanimarte!
Vuelta a su casa interrogó al espejo:
¡Espejito, espejito de mi habitación!
¿Quién es la más hermosa de esta región?

Y el espejo finalmente respondió.
La Reina es la más hermosa de esta región.
Entonces su corazón envidioso encontró reposo, si es que los corazones envidiosos pueden encontrar alguna vez reposo.

A la noche, al volver a la casa, los enanitos encontraron a Blancanieves tendida en el suelo sin que un solo aliento escapara de su boca: estaba muerta. La levantaron, buscaron alguna cosa envenenada, aflojaron sus lazos, le peinaron los cabellos, la lavaron con agua y con vino pero todo esto no sirvió de nada: la querida niña estaba muerte y siguió estándolo.

La pusieron en una parihuela, se sentaron junto a ella y durante tres días lloraron. Luego quisieron enterrarla pero ella estaba tan fresca como una persona viva y mantenía aún sus mejillas sonrosadas.
Los enanos se dijeron:
- No podemos ponerla bajo la negra tierra. E hicieron un ataúd de vidrio para que se la pudiera ver desde todos los ángulos, la pusieron adentro e inscribieron su nombre en letras de oro proclamando que era la hija de un rey. Luego expusieron el ataúd en la montaña. Uno de ellos permanecería siempre a su lado para cuidarla. Los animales también vinieron a llorarla: primero un mochuelo, luego un cuervo y más tarde una palomita.

Blancanieves permaneció mucho tiempo en el ataúd sin descomponerse; al contrario, parecía dormir, ya que siempre estaba blanca como la nieve, roja como la sangre y sus cabellos eran negros como el ébano.
Ocurrió una vez que el hijo de un rey llegó, por azar, al bosque y fue a casa de los enanos a pasar la noche. En la montaña vio el ataúd con la hermosa Blancanieves en su interior y leyó lo que estaba escrito en letras de oro.

Entonces dijo a los enanos:
- Denme ese ataúd; les daré lo que quieran a cambio.
- No lo daríamos por todo el oro del mundo – respondieron los enanos.
- En ese caso –replicó el príncipe- regálenmelo pues no puedo vivir sin ver a Blancanieves. La honraré, la estimaré como a lo que más quiero en el mundo.
Al oírlo hablar de este modo los enanos tuvieron piedad de él y le dieron el ataúd. El príncipe lo hizo llevar sobre las espaldas de sus servidores, pero sucedió que éstos tropezaron contra un arbusto y como consecuencia del sacudón el trozo de manzana envenenada que Blancanieves aún conservaba en su garganta fue despedido hacia fuera. Poco después abrió los ojos, levantó la tapa del ataúd y se irguió, resucitada.

- ¡Oh, Dios!, ¿dónde estoy? –exclamó.
- Estás a mi lado –le dijo el príncipe lleno de alegría.
Le contó lo que había pasado y le dijo:
- Te amo como a nadie en el mundo; ven conmigo al castillo de mi padre; serás mi mujer.

Entonces Blancanieves comenzó a sentir cariño por él y se preparó la boda con gran pompa y magnificencia. También fue invitada a la fiesta la madrastra criminal de Blancanieves. Después de vestirse con sus hermosos trajes fue ante el espejo y preguntó:
¡Espejito, espejito de mi habitación!
¿Quién es la más hermosa de esta región?

El espejo respondió:
La Reina es la más hermosa de este lugar. Pero la joven Reina lo es mucho más.
Entonces la mala mujer lanzó un juramento y tuvo tanto, tanto miedo, que no supo qué hacer. Al principio no quería ir de ningún modo a la boda. Pero no encontró reposo hasta no ver a la joven reina.

Al entrar reconoció a Blancanieves y la angustia y el espanto que le produjo el descubrimiento la dejaron clavada al piso sin poder moverse. Pero ya habían puesto zapatos de hierro sobre carbones encendidos y luego los colocaron delante de ella con tenazas. Se obligó a la bruja a entrar en esos zapatos incandescentes y a bailar hasta que le llegara la muerte.
    `,
    wordCount: 2015,
    level: '3er Grado (Nivel P)',
    questions: {
      [QuestionCategory.LITERAL]: [
        {
          id: 'snow-lit1',
          category: QuestionCategory.LITERAL,
          questionText: '¿Qué deseaba la reina después de pincharse el dedo y ver su sangre en la nieve?',
          options: ['Un castillo más grande', 'Una niña blanca como la nieve, roja como la sangre y de cabello negro como el ébano', 'Un vestido nuevo', 'Que dejara de nevar'],
          correctAnswer: 'Una niña blanca como la nieve, roja como la sangre y de cabello negro como el ébano',
        },
        {
          id: 'snow-lit2',
          category: QuestionCategory.LITERAL,
          questionText: '¿Qué le llevó el cazador a la reina en lugar de los pulmones y el hígado de Blancanieves?',
          options: ['Los de un ciervo', 'Los de un cerdito', 'No le llevó nada', 'Una manzana'],
          correctAnswer: 'Los de un cerdito',
        },
        {
            id: 'snow-lit3',
            category: QuestionCategory.LITERAL,
            questionText: '¿Cuál fue el tercer y último objeto envenenado que la reina usó para engañar a Blancanieves?',
            options: ['Una cinta', 'Un peine', 'Una manzana', 'Un vaso de agua'],
            correctAnswer: 'Una manzana',
        },
      ],
      [QuestionCategory.SEQUENCING]: [
        {
          id: 'snow-seq1',
          category: QuestionCategory.SEQUENCING,
          questionText: '¿Qué sucedió justo después de que Blancanieves mordiera la manzana envenenada?',
          options: ['Se sintió mareada', 'Llegaron los enanos', 'Cayó muerta al instante', 'El príncipe la encontró'],
          correctAnswer: 'Cayó muerta al instante',
        },
        {
          id: 'snow-seq2',
          category: QuestionCategory.SEQUENCING,
          questionText: '¿Qué hicieron los enanos PRIMERO cuando encontraron a Blancanieves inconsciente por la cinta apretada?',
          options: ['La acostaron en su cama', 'Cortaron la cinta que la oprimía', 'Fueron a buscar a la reina', 'Le dieron agua'],
          correctAnswer: 'Cortaron la cinta que la oprimía',
        },
        {
          id: 'snow-seq3',
          category: QuestionCategory.SEQUENCING,
          questionText: 'Después de que el cazador la dejara en el bosque, ¿qué hizo Blancanieves?',
          options: ['Construyó una cabaña', 'Corrió todo el día hasta que encontró la casa de los enanos', 'Volvió al castillo', 'Se encontró con el príncipe'],
          correctAnswer: 'Corrió todo el día hasta que encontró la casa de los enanos',
        },
      ],
      [QuestionCategory.VOCABULARY]: [
        {
          id: 'snow-voc1',
          category: QuestionCategory.VOCABULARY,
          questionText: 'En la frase "...la reina tuvo miedo y se puso amarilla y verde de envidia", ¿qué significa "envidia"?',
          options: ['Alegría', 'Tristeza', 'Celos', 'Cansancio'],
          correctAnswer: 'Celos',
        },
        {
          id: 'snow-voc2',
          category: QuestionCategory.VOCABULARY,
          questionText: 'Cuando la reina se disfrazó de "buhonera", ¿qué pretendía ser?',
          options: ['Una cocinera', 'Una princesa', 'Una vendedora ambulante', 'Una jardinera'],
          correctAnswer: 'Una vendedora ambulante',
        },
        {
          id: 'snow-voc3',
          category: QuestionCategory.VOCABULARY,
          questionText: 'El príncipe prometió que la "estimaré como a lo que más quiero". ¿Qué significa "estimar" en esta oración?',
          options: ['Ignorar', 'Olvidar', 'Querer y valorar mucho', 'Medir'],
          correctAnswer: 'Querer y valorar mucho',
        },
      ],
      [QuestionCategory.MAIN_IDEA]: [
        {
          id: 'snow-main1',
          category: QuestionCategory.MAIN_IDEA,
          questionText: '¿Cuál es la lección principal de la historia de Blancanieves?',
          options: ['No se debe hablar con extraños', 'La envidia es un sentimiento peligroso y destructivo', 'Las manzanas rojas son peligrosas', 'Los príncipes siempre salvan a las princesas'],
          correctAnswer: 'La envidia es un sentimiento peligroso y destructivo',
        },
        {
          id: 'snow-main2',
          category: QuestionCategory.MAIN_IDEA,
          questionText: '¿Cuál es el conflicto principal en la historia?',
          options: ['Blancanieves contra los animales del bosque', 'Los enanos contra el príncipe', 'La reina malvada contra la belleza y bondad de Blancanieves', 'El cazador contra la reina'],
          correctAnswer: 'La reina malvada contra la belleza y bondad de Blancanieves',
        },
        {
          id: 'snow-main3',
          category: QuestionCategory.MAIN_IDEA,
          questionText: '¿Por qué los enanos pusieron a Blancanieves en un ataúd de cristal en lugar de enterrarla?',
          options: ['Porque esperaban que un príncipe la encontrara', 'Porque se veía tan fresca y viva que no podían ponerla bajo tierra', 'Porque no tenían un lugar para enterrarla', 'Porque el cristal era mágico'],
          correctAnswer: 'Porque se veía tan fresca y viva que no podían ponerla bajo tierra',
        },
      ],
      [QuestionCategory.INFERENCE]: [
        {
          id: 'snow-inf1',
          category: QuestionCategory.INFERENCE,
          questionText: '¿Por qué crees que la reina siempre le preguntaba al espejo quién era la más hermosa?',
          options: ['Porque no tenía otros amigos con quienes hablar', 'Porque era muy insegura y necesitaba que le dijeran que era la más bella', 'Porque el espejo le daba buenos consejos', 'Porque se le olvidaba la respuesta'],
          correctAnswer: 'Porque era muy insegura y necesitaba que le dijeran que era la más bella',
        },
        {
          id: 'snow-inf2',
          category: QuestionCategory.INFERENCE,
          questionText: '¿Cómo se sintió probablemente el príncipe cuando Blancanieves despertó?',
          options: ['Asustado porque pensó que era un fantasma', 'Enojado porque lo interrumpió', 'Sorprendido y muy feliz', 'Confundido porque no sabía quién era'],
          correctAnswer: 'Sorprendido y muy feliz',
        },
        {
          id: 'snow-inf3',
          category: QuestionCategory.INFERENCE,
          questionText: '¿Por qué Blancanieves confió en la reina disfrazada varias veces, a pesar de las advertencias de los enanos?',
          options: ['Porque era desobediente', 'Porque era muy inocente y no podía imaginar tanta maldad', 'Porque no entendió lo que le dijeron los enanos', 'Porque le gustaban los regalos'],
          correctAnswer: 'Porque era muy inocente y no podía imaginar tanta maldad',
        },
      ],
      [QuestionCategory.CHARACTER]: [
        {
          id: 'snow-char1',
          category: QuestionCategory.CHARACTER,
          questionText: '¿Qué dos palabras describen mejor a la reina malvada?',
          options: ['Amable y generosa', 'Vanidosa y cruel', 'Tímida y miedosa', 'Alegre y divertida'],
          correctAnswer: 'Vanidosa y cruel',
        },
        {
          id: 'snow-char2',
          category: QuestionCategory.CHARACTER,
          questionText: '¿Qué cualidad describe mejor a Blancanieves a lo largo de la historia?',
          options: ['Sospechosa', 'Enojada', 'Confiada y bondadosa', 'Inteligente y astuta'],
          correctAnswer: 'Confiada y bondadosa',
        },
        {
          id: 'snow-char3',
          category: QuestionCategory.CHARACTER,
          questionText: '¿Cómo demuestran los enanos que son buenos amigos para Blancanieves?',
          options: ['La dejan sola para que aprenda a cuidarse', 'Le dan la bienvenida, la cuidan y la protegen de la reina', 'La envían de regreso al castillo', 'Le cobran por vivir en su casa'],
          correctAnswer: 'Le dan la bienvenida, la cuidan y la protegen de la reina',
        },
      ],
    },
  },
];