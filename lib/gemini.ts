
import { GoogleGenAI, Modality } from "@google/genai";
import { Grade } from "../types";

/**
 * Decodifica audio PCM crudo (Float32) devuelto por la API de Gemini.
 */
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
 * Se inicializa una nueva instancia de GoogleGenAI en cada llamada para asegurar el uso de la clave actual.
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
  } catch (error: any) {
    console.error("Error al llamar a Gemini TTS:", error);
    return undefined;
  }
};

/**
 * Genera una pista pedagógica basada en la pregunta y el contenido del cuento.
 */
export const getSmartHint = async (storyContent: string, questionText: string, grade: Grade) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `HISTORIA:\n${storyContent}\n\nPREGUNTA:\n${questionText}`,
      config: {
        systemInstruction: `Sos un tutor de primaria de Argentina muy cariñoso y alentador. 
        Un alumno de ${grade}° grado necesita una pista para responder una pregunta de comprensión lectora. 
        NO LE DES LA RESPUESTA CORRECTA. 
        Dale una pista breve (máximo 2 oraciones) que lo guíe a encontrar la respuesta en el texto o a razonar el por qué de una situación. 
        Usá español de Argentina (voseo) y un tono motivador.`,
        temperature: 0.8,
      },
    });
    return response.text || "¡Fijate bien en la historia! Seguro que la respuesta está escondida en algún párrafo.";
  } catch (error: any) {
    console.error("Error obteniendo pista de Gemini:", error);
    return "¡Casi lo tenés! Volvé a leer el texto con atención, el dato está ahí cerquita.";
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
      contents: `CUENTO:\n${storyContent}\n\nRESUMEN DEL ALUMNO:\n${studentSummary}`,
      config: {
        systemInstruction: `Sos una maestra de primaria de Argentina experta en alfabetización. 
        Evaluá el resumen de un alumno de ${grade}° grado. 
        Tu respuesta debe ser un feedback pedagógico directo para que lo lea el padre o la maestra en el panel de control.
        Analizá si el niño comprendió la idea principal, si menciona a los personajes clave y si hay coherencia narrativa acorde a su nivel escolar.
        Mantené un tono profesional pero muy positivo y alentador. 
        Máximo 3 oraciones cortas. Usá español de Argentina.`,
        temperature: 0.6,
      },
    });
    return response.text || "¡Excelente esfuerzo con el resumen! Se nota que comprendiste los puntos clave del cuento.";
  } catch (error) {
    console.error("Error evaluando resumen con Gemini:", error);
    return "¡Buen trabajo escribiendo tu resumen! Tu esfuerzo por relatar lo que leíste es muy valioso.";
  }
};
