
import React from 'react';
import { Story, Attempt, QuestionCategory } from '../types';
import Card from './ui/Card';
import Button from './ui/Button';

interface ResultsViewProps {
  story: Story;
  attempt: Attempt;
  onRestart: () => void;
}

const ResultsView: React.FC<ResultsViewProps> = ({ story, attempt, onRestart }) => {
  const categoryStats = Object.values(QuestionCategory).map(cat => {
    const questionsInCat = attempt.questions.filter(q => q.category === cat);
    if (questionsInCat.length === 0) return null;
    
    const correctInCat = attempt.answers.filter(ans => {
        const q = questionsInCat.find(qi => qi.id === ans.questionId);
        return q && q.correctAnswer === ans.answer;
    }).length;
    
    return {
        category: cat,
        total: questionsInCat.length,
        correct: correctInCat,
        percentage: Math.round((correctInCat / questionsInCat.length) * 100)
    };
  }).filter(Boolean);

  const getCelebrationMessage = (score: number) => {
    if (score === 100) return "¡INCREÍBLE! ¡Sos un experto lector!";
    if (score >= 80) return "¡EXCELENTE! ¡Tenés una comprensión genial!";
    if (score >= 60) return "¡MUY BIEN! Seguí leyendo así de concentrado.";
    return "¡BUEN ESFUERZO! Leé un poquito más lento la próxima vez.";
  };

  const hintsUsed = attempt.answers.filter(a => a.hintUsed).length;

  return (
    <div className="max-w-4xl mx-auto px-4 pb-20 animate-fade-in">
      <Card className="overflow-hidden border-t-8 border-brand-purple mb-8">
        <div className="p-8 md:p-12 text-center bg-white">
            <div className="relative inline-block mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-brand-yellow mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center pt-2">
                    <span className="text-2xl font-black text-brand-orange">{attempt.score}%</span>
                </div>
            </div>
          <h2 className="text-3xl font-black text-brand-purple mb-2">¡Misión Cumplida!</h2>
          <p className="text-xl text-gray-600 font-bold mb-8">{getCelebrationMessage(attempt.score)}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            <div className="bg-brand-blue/5 p-6 rounded-3xl border border-brand-blue/10">
                <h4 className="text-brand-blue font-black uppercase text-xs mb-4 tracking-widest">Análisis de Comprensión</h4>
                <div className="space-y-3">
                    {categoryStats.map((stat: any) => (
                        <div key={stat.category}>
                            <div className="flex justify-between text-sm font-bold mb-1">
                                <span className="text-gray-600">{stat.category}</span>
                                <span className={stat.percentage >= 70 ? 'text-green-500' : 'text-brand-orange'}>{stat.correct}/{stat.total}</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div 
                                    className={`h-full transition-all duration-1000 ${stat.percentage >= 70 ? 'bg-green-400' : 'bg-brand-orange'}`}
                                    style={{ width: `${stat.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-6">
                <div className="bg-brand-pink/5 p-6 rounded-3xl border border-brand-pink/10">
                    <h4 className="text-brand-pink font-black uppercase text-xs mb-2 tracking-widest">Resumen de la Aventura</h4>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                            <span className="text-2xl">📖</span>
                            <div>
                                <p className="text-xs text-gray-400 font-bold uppercase">Historia</p>
                                <p className="text-dark-text font-bold">{story.title}</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-2xl">⏳</span>
                            <div>
                                <p className="text-xs text-gray-400 font-bold uppercase">Tiempo de Lectura</p>
                                <p className="text-dark-text font-bold">{Math.floor(attempt.readingDuration / 60000)} minutos</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-2xl">💡</span>
                            <div>
                                <p className="text-xs text-gray-400 font-bold uppercase">Pistas del Tutor</p>
                                <p className="text-dark-text font-bold">{hintsUsed === 0 ? '¡No usaste pistas! 💪' : `Usaste ${hintsUsed} pistas`}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <p className="text-sm text-gray-400 italic text-center px-4">
                    Un adulto puede ver el detalle completo de tus respuestas en el Portal para Padres.
                </p>
            </div>
          </div>
        </div>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={onRestart} size="lg" className="w-full sm:w-auto">
          Elegir otra Historia
        </Button>
        <button 
            onClick={() => window.print()} 
            className="text-gray-400 hover:text-brand-purple font-bold text-sm px-6 py-3 transition-colors"
        >
          🖨️ Guardar Reporte
        </button>
      </div>
    </div>
  );
};

export default ResultsView;
