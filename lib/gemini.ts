
import { GoogleGenAI } from "@google/genai";
import { Grade } from "../types";

// Inicialización de la API de Gemini
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Utiliza síntesis de voz nativa para leer el texto al niño.
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
 * Genera una pista inteligente basada en la pregunta y la respuesta incorrecta.
 */
export const getSmartHint = async (storyContent: string, questionText: string, wrongAnswer: string, grade: Grade) => {
  try {
    const ai = getAI();
    const prompt = `
      Actúa como un maestro de primaria de ${grade}° grado. 
      El alumno leyó esta historia: "${storyContent.substring(0, 1000)}..."
      Se le hizo esta pregunta: "${questionText}"
      El alumno respondió incorrectamente: "${wrongAnswer}"
      
      Escribe una pista muy breve (máximo 20 palabras) en español para ayudarlo a encontrar la respuesta correcta por sí mismo.
      No des la respuesta. Invítalo a buscar un detalle específico en el texto.
      Usa un tono amable y alentador.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text?.trim() || "¡Casi! Volvé a leer el texto, el dato que buscás está escrito por ahí.";
  } catch (error) {
    console.error("Error generando pista con IA:", error);
    return "¡Buen intento! Pensá un poquito más en lo que pasó en esa parte de la historia.";
  }
};

/**
 * Evalúa el resumen escrito por el estudiante usando IA.
 */
export const evaluateSummary = async (storyContent: string, studentSummary: string, grade: Grade) => {
  try {
    const ai = getAI();
    const prompt = `
      Actúa como un docente experto en comprensión lectora para niños de ${grade}° grado de primaria.
      Historia original: "${storyContent.substring(0, 2000)}..."
      Resumen del alumno: "${studentSummary}"
      
      Tu tarea es proporcionar un feedback pedagógico breve (40-60 palabras) en español.
      1. Evalúa si el niño captó la idea principal.
      2. Destaca un punto positivo de su escritura (vocabulario, estructura, entusiasmo).
      3. Sugiere una mejora específica para su próximo resumen.
      Usa un lenguaje muy cercano, cálido y motivador ("¡Excelente trabajo!", "Seguí así", "Podés intentar...").
      Habla directamente al adulto/padre sobre el desempeño del niño.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text?.trim() || "¡Muy buen esfuerzo! El resumen muestra que se comprendieron los puntos básicos de la historia.";
  } catch (error) {
    console.error("Error evaluando resumen con IA:", error);
    return "¡Excelente trabajo de síntesis! Se nota que el estudiante comprendió quiénes son los personajes y qué sucedió en la historia.";
  }
};
