import React, { useState, useEffect, useRef } from 'react';
import { UserAnswer, Question, AnswerTiming } from '../types';
import Card from './ui/Card';
import ProgressBar from './ui/ProgressBar';

interface QuizViewProps {
  questions: Question[];
  onQuizComplete: (answers: UserAnswer[], timings: AnswerTiming[]) => void;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const QuizView: React.FC<QuizViewProps> = ({ questions, onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [answerTimings, setAnswerTimings] = useState<AnswerTiming[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const questionStartTime = useRef<number>(Date.now());

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / questions.length) * 100;

  useEffect(() => {
    if (currentQuestion) {
      setShuffledOptions(shuffleArray(currentQuestion.options));
      questionStartTime.current = Date.now();
    }
  }, [currentQuestion]);
  
  const handleAnswerSelect = (option: string) => {
    if (selectedOption) return;
    
    const duration = Date.now() - questionStartTime.current;
    setSelectedOption(option);

    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      answer: option,
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
            setSelectedOption(null);
        } else {
            onQuizComplete(updatedAnswers, updatedTimings);
        }
    }, 800);
  };
  
  const getOptionClass = (option: string) => {
    if (!selectedOption) {
      return 'bg-white hover:bg-brand-blue/10 border-gray-300';
    }
    if (option === selectedOption) {
      return 'bg-brand-yellow/30 border-brand-orange';
    }
    return 'bg-white opacity-60 border-gray-300';
  }

  if (!currentQuestion) return null;

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-center text-2xl font-bold text-dark-text mb-4">¡Prueba de Comprensión!</h2>
      <ProgressBar progress={progress} />
      <Card className="mt-4">
        <div className="p-6">
          <p className="text-sm font-semibold text-brand-orange mb-2">{currentQuestion.category}</p>
          <p className="text-xl font-medium text-dark-text mb-6">{currentQuestion.questionText}</p>

          <div className="space-y-3">
            {shuffledOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                disabled={!!selectedOption}
                className={`w-full text-left p-4 border-2 rounded-lg transition-all duration-300 ${getOptionClass(option)}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </Card>
      <div className="text-center text-gray-500 mt-4">
        Pregunta {currentQuestionIndex + 1} de {questions.length}
      </div>
    </div>
  );
};

export default QuizView;
