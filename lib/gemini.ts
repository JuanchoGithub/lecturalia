
import { GoogleGenAI, Modality } from "@google/genai";
import { Grade } from "../types";

// Funciones auxiliares para el manejo de audio PCM requerido por Gemini TTS
function decodeBase64(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number = 24000,
  numChannels: number = 1,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

/**
 * Genera audio a partir de texto usando el modelo TTS de Gemini.
 */
export const getGeminiAudio = async (text: string): Promise<string | undefined> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });
    return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  } catch (error) {
    console.error("Error generating Gemini TTS:", error);
    return undefined;
  }
};

/**
 * Genera una pista pedagógica basada en la pregunta y el error del alumno.
 */
export const getSmartHint = async (storyContent: string, questionText: string, wrongAnswer: string, grade: Grade) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Historia: ${storyContent}\nPregunta: ${questionText}\nRespuesta incorrecta: ${wrongAnswer}`,
      config: {
        systemInstruction: `Sos un tutor de primaria muy amable y alentador. 
        Un alumno de ${grade}° grado se equivocó en una pregunta de comprensión. 
        No le des la respuesta correcta. Dale una pista breve (máximo 2 oraciones) que lo ayude a encontrar la información en el texto. 
        Usá un tono cálido y español de Argentina (voseo).`,
        temperature: 0.7,
      },
    });
    return response.text || "¡Buen intento! Volvé a leer la parte donde se habla de eso, seguro lo encontrás.";
  } catch (error) {
    console.error("Error obteniendo pista de Gemini:", error);
    return "¡Casi! Volvé a leer el texto con atención, el dato está ahí cerquita.";
  }
};

/**
 * Evalúa el resumen del estudiante y proporciona feedback constructivo.
 */
export const evaluateSummary = async (storyContent: string, studentSummary: string, grade: Grade) => {
  if (!studentSummary || studentSummary.trim().length < 10) {
    return "El resumen es muy cortito. ¡Animate a contar un poco más de qué se trató la historia la próxima vez!";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Cuento original: ${storyContent}\nResumen del alumno: ${studentSummary}`,
      config: {
        systemInstruction: `Sos una maestra de primaria de Argentina experta en lectoescritura. 
        Evaluá el resumen de un alumno de ${grade}° grado. 
        Tu respuesta debe ser un feedback pedagógico directo para que lo lea el padre o la maestra en el panel de control.
        Analizá si el niño comprendió la idea principal, si menciona a los personajes clave y si hay coherencia.
        Mantené un tono profesional pero muy positivo y alentador. 
        Máximo 3 oraciones. Usá español de Argentina.`,
        temperature: 0.5,
      },
    });
    return response.text || "¡Buen trabajo con el resumen! Se nota que prestaste atención a la historia.";
  } catch (error) {
    console.error("Error evaluando resumen con Gemini:", error);
    return "¡Excelente esfuerzo al escribir tu resumen! Es muy importante practicar la escritura para entender mejor lo que leemos.";
  }
};
