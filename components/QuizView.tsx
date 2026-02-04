
import React, { useState, useEffect, useRef } from 'react';
import { UserAnswer, Question, AnswerTiming, Grade } from '../types';
import Card from './ui/Card';
import ProgressBar from './ui/ProgressBar';
import { getSmartHint } from '../lib/gemini';

interface QuizViewProps {
  questions: Question[];
  storyContent: string;
  grade: Grade;
  onQuizComplete: (answers: UserAnswer[], timings: AnswerTiming[], shuffledOptions: { [questionId: string]: string[] }) => void;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const QuizView: React.FC<QuizViewProps> = ({ questions, storyContent, grade, onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [answerTimings, setAnswerTimings] = useState<AnswerTiming[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [shuffledOptionsHistory, setShuffledOptionsHistory] = useState<{ [questionId: string]: string[] }>({});
  const [hint, setHint] = useState<string | null>(null);
  const [isGettingHint, setIsGettingHint] = useState(false);
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
      setHint(null);
    }
  }, [currentQuestion]);
  
  const handleAnswerSelect = async (option: string) => {
    if (selectedOption) return;
    
    setSelectedOption(option);
    const duration = Date.now() - questionStartTime.current;
    const isCorrect = option === currentQuestion.correctAnswer;

    if (!isCorrect && !hint) {
      setIsGettingHint(true);
      const aiHint = await getSmartHint(storyContent, currentQuestion.questionText, option, grade);
      setHint(aiHint);
      setIsGettingHint(false);
      setSelectedOption(null); // Permitir reintento tras la pista
      return;
    }

    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      answer: option,
      hintUsed: !!hint,
    };
    const newTiming: AnswerTiming = {
      questionId: currentQuestion.id,
      duration,
    };
    
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
    if (option === selectedOption) {
      return option === currentQuestion.correctAnswer 
        ? 'bg-green-100 border-green-500 text-green-700' 
        : 'bg-red-100 border-red-500 text-red-700';
    }
    return 'bg-white hover:bg-gray-50 border-gray-200';
  }

  if (!currentQuestion) return null;

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <h2 className="text-center text-2xl font-bold mb-4">Evaluación de Comprensión</h2>
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
                disabled={!!selectedOption || isGettingHint}
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

          {hint && (
            <div className="mt-6 p-4 bg-brand-yellow/10 border-l-4 border-brand-yellow rounded-r-xl animate-slide-down">
              <p className="text-brand-orange font-bold text-sm flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Pista del Maestro:
              </p>
              <p className="text-dark-text text-sm italic mt-1">{hint}</p>
            </div>
          )}

          {isGettingHint && (
            <div className="mt-6 text-center text-gray-400 text-sm animate-pulse">
              El maestro está pensando una pista para ayudarte...
            </div>
          )}
        </div>
      </Card>
      
      <p className="text-center text-gray-400 text-sm mt-6 italic">
        {hint ? "¡Ahora que tenés una pista, intentá elegir la correcta!" : "Elegí con cuidado, si te equivocás recibirás una pista."}
      </p>
    </div>
  );
};

export default QuizView;
