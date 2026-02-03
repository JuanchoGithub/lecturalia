import React, { useState } from 'react';
import { Story, Grade } from '../types';
import Card from './ui/Card';
import Button from './ui/Button';
import { evaluateSummary } from '../lib/gemini';

interface SummaryViewProps {
  story: Story;
  grade: Grade;
  onComplete: (summary: string, feedback: string) => void;
}

const SummaryView: React.FC<SummaryViewProps> = ({ story, grade, onComplete }) => {
  const [summary, setSummary] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);

  const handleSubmit = async () => {
    const trimmedSummary = summary.trim();
    if (trimmedSummary.length < 10) {
      alert("¡Escribí un poquito más (al menos un renglón) para que podamos evaluar tu progreso!");
      return;
    }
    
    setIsEvaluating(true);
    // Agregamos un pequeño delay artificial para que el niño sienta que se está procesando su esfuerzo
    setTimeout(async () => {
      const feedback = await evaluateSummary(story.content, trimmedSummary, grade);
      setIsEvaluating(false);
      onComplete(trimmedSummary, feedback);
    }, 800);
  };

  const handleSkip = () => {
    if (confirm("¿Estás seguro de que querés saltear el resumen? Escribir ayuda mucho a entender mejor lo que leemos.")) {
      onComplete('', '');
    }
  };

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <Card className="p-8 text-center shadow-2xl border-t-8 border-brand-purple">
        <h2 className="text-2xl font-bold text-brand-purple mb-4">¡Desafío de {grade === Grade.FOURTH ? 'Detective' : 'Escritura'}!</h2>
        <p className="text-gray-600 mb-6 font-medium">
          {grade === Grade.FOURTH ? 
            "¿Cuál es la enseñanza principal de la historia? Mencioná por qué pensás eso." : 
            "Contale a un amigo de qué se trató la historia con tus propias palabras."}
        </p>
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full border-2 border-gray-200 focus:border-brand-purple rounded-2xl p-5 min-h-[180px] transition-all outline-none text-lg leading-relaxed shadow-inner"
          placeholder="Había una vez..."
          disabled={isEvaluating}
        />
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={handleSubmit} size="lg" disabled={isEvaluating} className="w-full sm:w-auto min-w-[200px]">
            {isEvaluating ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Evaluando...
              </span>
            ) : '¡Listo, terminar aventura!'}
          </Button>
          <button 
            onClick={handleSkip} 
            disabled={isEvaluating}
            className="text-gray-400 hover:text-brand-orange font-bold text-sm underline decoration-2 underline-offset-4 px-4 py-2 transition-colors"
          >
            Saltar este paso
          </button>
        </div>
      </Card>
      <p className="text-center text-gray-400 text-xs mt-4 italic">
        Tu resumen será guardado para que un adulto lo pueda revisar después.
      </p>
    </div>
  );
};

export default SummaryView;