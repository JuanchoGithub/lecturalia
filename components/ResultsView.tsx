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
  const readingMinutes = attempt.readingDuration / 60000;
  const wpm = (readingMinutes > 0) ? Math.round(story.wordCount / readingMinutes) : 0;
  
  const correctAnswersCount = attempt.answers.filter(ua => {
    const question = attempt.questions.find(q => q.id === ua.questionId);
    return question && question.correctAnswer === ua.answer;
  }).length;

  const getWpmFeedback = (wpm: number) => {
    if (wpm > 112) return "¡Wow, qué rápido! ¡Sos un lector veloz!";
    if (wpm >= 83) return "¡Muy buen ritmo! Estás leyendo con fluidez.";
    return "¡Buen trabajo! Seguí practicando para mejorar tu velocidad.";
  };
  
  const getScoreFeedback = (score: number) => {
    if (score >= 90) return "¡Increíble! ¡Realmente entendiste la historia!";
    if (score >= 70) return "¡Buen trabajo! Entendiste bien los detalles.";
    return "¡Buen esfuerzo! La práctica hace al maestro.";
  };

  const performanceByCategory = Object.values(QuestionCategory).map(category => {
    const questionsInCategory = attempt.questions.filter(q => q.category === category);
    if (questionsInCategory.length === 0) return null;
    
    const correctInCategory = questionsInCategory.filter(q => 
        attempt.answers.some(ans => ans.questionId === q.id && ans.answer === q.correctAnswer)
    ).length;
    
    return {
      category,
      correct: correctInCategory,
      total: questionsInCategory.length,
    };
  }).filter(Boolean);

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <div className="p-6 md:p-8 text-center">
          <h2 className="text-3xl font-bold text-brand-purple mb-4">¡Tus Resultados!</h2>
          <p className="text-lg text-gray-600 mb-8">{getScoreFeedback(attempt.score)}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center mb-8">
            <div className="bg-brand-blue/10 p-6 rounded-lg">
              <p className="text-5xl font-bold text-brand-blue">{attempt.score}%</p>
              <p className="text-lg text-dark-text mt-2">Puntaje</p>
              <p className="text-sm text-gray-500">({correctAnswersCount}/{attempt.questions.length} correctas)</p>
            </div>
            <div className="bg-brand-yellow/10 p-6 rounded-lg">
              <p className="text-5xl font-bold text-brand-orange">{wpm}</p>
              <p className="text-lg text-dark-text mt-2">Palabras Por Minuto</p>
              <p className="text-sm text-gray-500">{getWpmFeedback(wpm)}</p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-dark-text mb-4">Resultados por Categoría</h3>
          <div className="space-y-4 text-left">
            {performanceByCategory.map(perf => perf && (
              <div key={perf.category} className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
                <div>
                  <p className="font-semibold text-dark-text">{perf.category}</p>
                </div>
                <div className="font-bold text-lg">
                  <span className={perf.correct === perf.total ? 'text-green-500' : 'text-dark-text'}>
                    {perf.correct}
                  </span>
                  <span className="text-gray-400"> / {perf.total}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
      <div className="mt-8 text-center">
        <Button onClick={onRestart} size="lg">
          Volver a la Selección de Historias
        </Button>
      </div>
    </div>
  );
};

export default ResultsView;