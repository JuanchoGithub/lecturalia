
import { GoogleGenAI, Modality } from "@google/genai";
import { Grade } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

function decodeBase64(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
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

export const speakText = async (text: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: `Lee con voz clara y pausada: ${text}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) return;

    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    const decoded = decodeBase64(base64Audio);
    const audioBuffer = await decodeAudioData(decoded, audioCtx, 24000, 1);
    
    const source = audioCtx.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioCtx.destination);
    source.start();
  } catch (error) {
    console.error("TTS Error:", error);
  }
};

export const getSmartHint = async (story: string, question: string, wrongAnswer: string, grade: Grade) => {
  const isFourth = grade === Grade.FOURTH;
  const prompt = `
    Eres un tutor amable para un niño de ${grade}to grado.
    Historia: "${story}"
    Pregunta: "${question}"
    Respuesta incorrecta elegida: "${wrongAnswer}"
    
    ${isFourth ? 
      "Instrucción 4to Grado: No des la respuesta. Haz una pregunta de razonamiento o pide al niño que busque una 'pista lógica' en el texto. Enfócate en el 'por qué' o las intenciones de los personajes." : 
      "Instrucción 3er Grado: Da una pista directa mencionando en qué parte de la historia debería volver a mirar el niño para encontrar el dato literal."
    }
    
    Responde con un tono motivador en español. Máximo 2 oraciones.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Hint Error:", error);
    return "¡Vuelve a leer el texto para encontrar la respuesta!";
  }
};

export const evaluateSummary = async (story: string, studentSummary: string, grade: Grade) => {
  const isFourth = grade === Grade.FOURTH;
  const prompt = `
    Evalúa este resumen de un niño de ${grade}to grado.
    Historia original: "${story}"
    Resumen: "${studentSummary}"
    
    ${isFourth ? 
      "Criterio 4to Grado: El niño debe identificar el TEMA o la ENSEÑANZA, no solo los hechos. Valora si usa palabras descriptivas." : 
      "Criterio 3er Grado: El niño debe poder contar la idea principal y quiénes son los personajes."
    }
    
    Da una evaluación motivadora para los padres en español. Máximo 3 oraciones.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Summary Error:", error);
    return "¡Buen intento resumiendo la historia!";
  }
};
