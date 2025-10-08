import { Story } from '../../types';
import { leoTheLighthouseLion } from './leo-the-lighthouse-lion';
import { snowWhite } from './snow-white';
import { caperucitaRoja } from './caperucita-roja';
import { caperucitaRojaGrimm } from './caperucita-roja-grimm';
import { barbaAzul } from './barba-azul';
import { theCantervilleGhost } from './the-canterville-ghost';
import { elGiganteEgoista } from './el-gigante-egoista';
import { elPatitoFeo } from './el-patito-feo';
import { hanselYGretel } from './hansel-y-gretel';
import { beautyAndTheBeast } from './beauty-and-the-beast';
import { sleepingBeauty } from './sleeping-beauty';
import { theHappyPrince } from './the-happy-prince';
import { cinderella } from './cinderella';
import { pulgarcito } from './pulgarcito';
import { pulgarcitoSastre } from './pulgarcito-sastre';
import { elGatoConBotas } from './el-gato-con-botas';
import { laBellaDurmienteGrimm } from './la-bella-durmiente-grimm';
import { botellaAlMar } from './botella-al-mar';
import { demeOtro } from './deme-otro';
import { laPlapla } from './la-plapla';
import { donFresquete } from './don-fresquete';
import { bisaVuela } from './bisa-vuela';
import { elPaisDeLaGeometria } from './el-pais-de-la-geometria';
import { sukimuki } from './sukimuki';
import { adelanteValerosoNavegante } from './adelante-valeroso-navegante';
import { seBuscaPirata } from './se-busca-pirata';
import { unLibroDeCienciaFriccion } from './un-libro-de-ciencia-friccion';
import { unaAsombrosaLlamaEnElDesierto } from './una-asombrosa-llama-en-el-desierto';
import { unaNaveEspecial } from './una-nave-especial';
import { talVezSeAcuerda } from './tal-vez-se-acuerda';
import { caballito } from './caballito';
import { joaquinYLasPalabras } from './joaquin-y-las-palabras';
import { calleLaserre } from './calle-laserre';
import { jugarALaMancha } from './jugar-a-la-mancha';
import { porNadaDelMundo } from './por-nada-del-mundo';
import { unViajeDePelicula } from './un-viaje-de-pelicula';
import { unasRimasQueSeArriman } from './unas-rimas-que-se-arriman';
import { enTrenDeDescubrimiento } from './en-tren-de-descubrimiento';

export const stories: Story[] = [
  leoTheLighthouseLion,
  snowWhite,
  cinderella,
  pulgarcito,
  pulgarcitoSastre,
  elGatoConBotas,
  caperucitaRoja,
  caperucitaRojaGrimm,
  barbaAzul,
  theCantervilleGhost,
  elGiganteEgoista,
  elPatitoFeo,
  hanselYGretel,
  beautyAndTheBeast,
  sleepingBeauty,
  laBellaDurmienteGrimm,
  theHappyPrince,
  botellaAlMar,
  demeOtro,
  laPlapla,
  donFresquete,
  bisaVuela,
  elPaisDeLaGeometria,
  sukimuki,
  adelanteValerosoNavegante,
  seBuscaPirata,
  unLibroDeCienciaFriccion,
  unaAsombrosaLlamaEnElDesierto,
  unaNaveEspecial,
  talVezSeAcuerda,
  caballito,
  joaquinYLasPalabras,
  calleLaserre,
  jugarALaMancha,
  porNadaDelMundo,
  unViajeDePelicula,
  unasRimasQueSeArriman,
  enTrenDeDescubrimiento,
].sort((a, b) => a.title.localeCompare(b.title));