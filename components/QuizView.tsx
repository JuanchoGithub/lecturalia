
import React, { useState, useEffect, useRef } from 'react';
import { UserAnswer, Question, AnswerTiming, Grade } from '../types';
import Card from './ui/Card';
import ProgressBar from './ui/ProgressBar';

interface QuizViewProps {
  questions: Question[];
  storyContent: string;
  grade: Grade;
  onQuizComplete: (answers: UserAnswer[], timings: AnswerTiming[], shuffledOptions: { [questionId: string]: string[] }) => void;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const QuizView: React.FC<QuizViewProps> = ({ questions, grade, onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [answerTimings, setAnswerTimings] = useState<AnswerTiming[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [shuffledOptionsHistory, setShuffledOptionsHistory] = useState<{ [questionId: string]: string[] }>({});
  const questionStartTime = useRef<number>(Date.now());

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / questions.length) * 100;

  useEffect(() => {
    if (currentQuestion) {
      const newShuffledOptions = shuffleArray(currentQuestion.options);
      setShuffledOptions(newShuffledOptions);
      setShuffledOptionsHistory(prev => ({
        ...prev,
        [currentQuestion.id]: newShuffledOptions,
      }));
      questionStartTime.current = Date.now();
      setSelectedOption(null);
    }
  }, [currentQuestion]);
  
  const handleAnswerSelect = (option: string) => {
    if (selectedOption) return;
    
    const duration = Date.now() - questionStartTime.current;
    setSelectedOption(option);

    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      answer: option,
      hintUsed: false, // Hints are removed for strict evaluation
    };
    const newTiming: AnswerTiming = {
      questionId: currentQuestion.id,
      duration,
    };
    
    // Minimal delay to show the selection before moving forward
    setTimeout(() => {
        const updatedAnswers = [...userAnswers, newAnswer];
        const updatedTimings = [...answerTimings, newTiming];
        setUserAnswers(updatedAnswers);
        setAnswerTimings(updatedTimings);
        
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            onQuizComplete(updatedAnswers, updatedTimings, shuffledOptionsHistory);
        }
    }, 600);
  };
  
  const getOptionClass = (option: string) => {
    if (option === selectedOption) return 'bg-brand-blue/20 border-brand-blue text-brand-blue';
    return 'bg-white hover:bg-gray-50 border-gray-200';
  }

  if (!currentQuestion) return null;

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <h2 className="text-center text-2xl font-bold mb-4">Evaluación de Comprensión - {grade === Grade.FOURTH ? 'Nivel Detective' : 'Nivel Explorador'}</h2>
      <ProgressBar progress={progress} />
      
      <Card className="mt-8">
        <div className="p-6 md:p-10">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-3 py-1 rounded-full">
              {currentQuestion.category}
            </span>
            <span className="text-xs font-bold text-gray-400">
              Pregunta {currentQuestionIndex + 1} de {questions.length}
            </span>
          </div>
          
          <p className="text-xl md:text-2xl font-bold text-dark-text mb-8 leading-relaxed">
            {currentQuestion.questionText}
          </p>
          
          <div className="space-y-4">
            {shuffledOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                disabled={!!selectedOption}
                className={`w-full text-left p-5 border-2 rounded-2xl font-medium transition-all duration-200 text-lg ${getOptionClass(option)}`}
              >
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 text-sm font-bold">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </div>
              </button>
            ))}
          </div>
        </div>
      </Card>
      
      <p className="text-center text-gray-400 text-sm mt-6 italic">
        Elegí con cuidado, solo tenés un intento por pregunta.
      </p>
    </div>
  );
};

export default QuizView;
