
import { GoogleGenAI, Type } from "@google/genai";
import { Grade } from "../types";

/**
 * Utiliza la síntesis de voz nativa del navegador para leer el texto.
 * Es eficiente y funciona sin dependencias de red adicionales.
 */
export const speakText = async (text: string) => {
  return new Promise((resolve) => {
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-AR';
    utterance.rate = 0.9;
    utterance.pitch = 1.1;

    const voices = window.speechSynthesis.getVoices();
    const spanishVoice = voices.find(v => v.lang.startsWith('es-AR')) || voices.find(v => v.lang.startsWith('es'));
    if (spanishVoice) {
      utterance.voice = spanishVoice;
    }

    utterance.onend = () => resolve(true);
    utterance.onerror = () => resolve(false);

    window.speechSynthesis.speak(utterance);
  });
};

/**
 * Genera una pista pedagógica basada en la pregunta y el error del alumno.
 */
export const getSmartHint = async (storyContent: string, questionText: string, wrongAnswer: string, grade: Grade) => {
  try {
    // Inicialización justo antes de la llamada para evitar errores de carga
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
    // Inicialización justo antes de la llamada
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
