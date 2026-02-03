
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
    if (summary.trim().length < 10) {
      alert("¡Escribí un poquito más o podés saltar este paso!");
      return;
    }
    setIsEvaluating(true);
    const feedback = await evaluateSummary(story.content, summary, grade);
    setIsEvaluating(false);
    onComplete(summary, feedback);
  };

  const handleSkip = () => {
    onComplete('', '');
  };

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <Card className="p-8 text-center shadow-2xl">
        <h2 className="text-2xl font-bold text-brand-purple mb-4">¡Desafío de {grade === Grade.FOURTH ? 'Detective' : 'Escritura'}!</h2>
        <p className="text-gray-600 mb-6">
          {grade === Grade.FOURTH ? 
            "¿Cuál es la enseñanza principal de la historia? Mencioná por qué pensás eso." : 
            "Contale a un amigo de qué se trató la historia."}
        </p>
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full border-2 border-gray-200 focus:border-brand-purple rounded-xl p-4 min-h-[150px] transition-colors outline-none text-lg"
          placeholder="Tu resumen aquí..."
        />
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={handleSubmit} size="lg" disabled={isEvaluating} className="w-full sm:w-auto">
            {isEvaluating ? 'Evaluando...' : '¡Listo, enviar!'}
          </Button>
          <button 
            onClick={handleSkip} 
            disabled={isEvaluating}
            className="text-gray-400 hover:text-gray-600 font-bold text-sm underline decoration-2 underline-offset-4 px-4 py-2"
          >
            Saltar este paso
          </button>
        </div>
      </Card>
    </div>
  );
};

export default SummaryView;
