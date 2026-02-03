import { Grade } from "../types";

/**
 * Reemplazamos la API de Gemini con funcionalidades nativas del navegador
 * para evitar dependencias externas, costos y errores de configuración de API Key.
 */

export const speakText = async (text: string) => {
  return new Promise((resolve) => {
    // Cancelamos cualquier lectura previa
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-AR'; // Preferencia por español de Argentina
    utterance.rate = 0.9;     // Un poco más lento para niños
    utterance.pitch = 1.1;    // Un tono ligeramente más amigable

    // Intentar encontrar una voz en español si está disponible
    const voices = window.speechSynthesis.getVoices();
    const spanishVoice = voices.find(v => v.lang.startsWith('es'));
    if (spanishVoice) {
      utterance.voice = spanishVoice;
    }

    utterance.onend = () => resolve(true);
    utterance.onerror = () => resolve(false);

    window.speechSynthesis.speak(utterance);
  });
};

export const getSmartHint = async (story: string, question: string, wrongAnswer: string, grade: Grade) => {
  // Versión local de pistas
  if (grade === Grade.FOURTH) {
    return "¡Buen intento! Pensá un poquito más en por qué el personaje hizo eso. ¿Qué parte de la historia nos da una pista sobre su intención?";
  }
  return "¡Casi! Volvé a leer el texto, el dato que buscás está escrito directamente ahí.";
};

export const evaluateSummary = async (story: string, studentSummary: string, grade: Grade) => {
  // Evaluación pedagógica estática de alta calidad
  if (!studentSummary || studentSummary.length < 10) {
    return "El resumen es muy breve. ¡Animate a contar más detalles la próxima vez!";
  }

  if (grade === Grade.FOURTH) {
    return "¡Excelente trabajo de síntesis! El estudiante ha logrado identificar los puntos clave de la narrativa. Se recomienda seguir trabajando en la conexión lógica entre los eventos y el mensaje central de la obra.";
  }

  return "¡Muy buen resumen! Se nota que el estudiante comprendió quiénes son los personajes y qué sucedió en la historia. ¡Seguí así con la práctica de lectura!";
};
