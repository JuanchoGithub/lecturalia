
import React, { useState, useEffect, useRef } from 'react';
import { UserAnswer, Question, AnswerTiming, Grade } from '../types';
import Card from './ui/Card';
import ProgressBar from './ui/ProgressBar';
import Button from './ui/Button';
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
  
  // Hint State
  const [hint, setHint] = useState<string | null>(null);
  const [isLoadingHint, setIsLoadingHint] = useState(false);
  const [hintsUsedCount, setHintsUsedCount] = useState(0);
  const [currentHintUsed, setCurrentHintUsed] = useState(false);

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
      setCurrentHintUsed(false);
    }
  }, [currentQuestion]);
  
  const handleAnswerSelect = (option: string) => {
    if (selectedOption) return;
    
    const duration = Date.now() - questionStartTime.current;
    setSelectedOption(option);

    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      answer: option,
      hintUsed: currentHintUsed,
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

  const handleRequestHint = async () => {
    if (isLoadingHint || hint) return;
    
    setIsLoadingHint(true);
    const aiHint = await getSmartHint(storyContent, currentQuestion.questionText, grade);
    setHint(aiHint);
    setIsLoadingHint(false);
    setHintsUsedCount(prev => prev + 1);
    setCurrentHintUsed(true);
  };
  
  const getOptionClass = (option: string) => {
    if (option === selectedOption) return 'bg-brand-blue/20 border-brand-blue text-brand-blue';
    return 'bg-white hover:bg-gray-50 border-gray-200';
  }

  if (!currentQuestion) return null;

  return (
    <div className="max-w-2xl mx-auto animate-fade-in px-4 pb-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-black text-brand-purple">Desafío Detective</h2>
        <div className="bg-brand-yellow/20 text-brand-orange px-3 py-1 rounded-full text-xs font-black uppercase">
          {grade === Grade.FOURTH ? 'Nivel Detective' : 'Nivel Explorador'}
        </div>
      </div>
      
      <ProgressBar progress={progress} />
      
      <Card className="mt-8 relative overflow-visible">
        <div className="p-6 md:p-10">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-3 py-1 rounded-full">
              {currentQuestion.category}
            </span>
            <span className="text-xs font-bold text-gray-400">
              {currentQuestionIndex + 1} de {questions.length}
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
                className={`w-full text-left p-5 border-2 rounded-2xl font-medium transition-all duration-200 text-lg flex items-center gap-4 ${getOptionClass(option)}`}
              >
                <span className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 text-sm font-black border border-gray-200">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-grow">{option}</span>
              </button>
            ))}
          </div>
        </div>

        {/* AI Hint Section */}
        <div className="px-6 pb-6 pt-0 md:px-10 md:pb-10">
          {!hint && !isLoadingHint ? (
            <button 
              onClick={handleRequestHint}
              className="text-brand-purple text-sm font-bold flex items-center gap-2 hover:bg-brand-purple/5 px-4 py-2 rounded-xl transition-colors mx-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              ¿Necesitás una pista?
            </button>
          ) : (
            <div className="bg-brand-yellow/10 border-2 border-brand-yellow/30 p-5 rounded-2xl animate-slide-up">
              <div className="flex items-center gap-3 mb-2 text-brand-orange">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14H8a4 4 0 013.659-3.938 1 1 0 01.341.062A4 4 0 0112 14z" />
                </svg>
                <span className="font-black uppercase tracking-tighter text-sm">Pista del Tutor IA:</span>
              </div>
              {isLoadingHint ? (
                <div className="flex items-center gap-2 text-gray-400 font-medium">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                  <span>Pensando...</span>
                </div>
              ) : (
                <p className="text-brand-orange font-bold text-lg leading-snug">
                  {hint}
                </p>
              )}
            </div>
          )}
        </div>
      </Card>
      
      <p className="text-center text-gray-400 text-xs mt-6 font-medium italic">
        Elegí con cuidado, solo tenés un intento por pregunta.
      </p>
    </div>
  );
};

export default QuizView;
