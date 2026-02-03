
import React, { useState, useCallback, useEffect } from 'react';
import { Story, AppState, UserAnswer, AllStoryStats, Question, QuestionCategory, Attempt, AnswerTiming, PageTiming, ReadingSession, Grade } from './types';
import { stories } from './data/stories/index';
import StorySelection from './components/StorySelection';
import GradeSelection from './components/GradeSelection';
import ReadingView from './components/ReadingView';
import QuizView from './components/QuizView';
import SummaryView from './components/SummaryView';
import ResultsView from './components/ResultsView';
import PasswordModal from './components/PasswordModal';
import ParentDashboard from './components/ParentDashboard';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.SELECTING);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);
  const [currentQuiz, setCurrentQuiz] = useState<Question[]>([]);
  const [readingDuration, setReadingDuration] = useState<number>(0);
  const [currentPageTimings, setCurrentPageTimings] = useState<PageTiming[]>([]);
  const [lastAttempt, setLastAttempt] = useState<Attempt | null>(null);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [inProgressStoryId, setInProgressStoryId] = useState<string | null>(null);

  const [stats, setStats] = useState<AllStoryStats>(() => {
    try {
      const savedStats = localStorage.getItem('readingAppStats');
      if (!savedStats) return {};
      
      const parsedStats: AllStoryStats = JSON.parse(savedStats);
      
      Object.keys(parsedStats).forEach(storyId => {
        if (parsedStats[storyId] && parsedStats[storyId].attempts) {
          parsedStats[storyId].attempts = parsedStats[storyId].attempts.map(attempt => ({
            ...attempt,
            grade: (attempt.grade === Grade.THIRD || attempt.grade === Grade.FOURTH) 
                   ? attempt.grade 
                   : Grade.THIRD
          }));
        }
      });
      
      return parsedStats;
    } catch (error) {
      console.error("Could not load stats from localStorage", error);
      return {};
    }
  });

  const generateQuiz = useCallback((story: Story): Question[] => {
    const quizQuestions: Question[] = [];
    for (const category in story.questions) {
      const questionsInCategory = story.questions[category as QuestionCategory];
      if (questionsInCategory && questionsInCategory.length > 0) {
        const randomIndex = Math.floor(Math.random() * questionsInCategory.length);
        quizQuestions.push(questionsInCategory[randomIndex]);
      }
    }
    return quizQuestions.sort(() => Math.random() - 0.5);
  }, []);

  useEffect(() => {
    if (appState === AppState.SELECTING) {
      try {
        const sessionStr = localStorage.getItem('activeReadingSession');
        if (sessionStr) {
          const session: ReadingSession = JSON.parse(sessionStr);
          const story = stories.find(s => s.id === session.storyId);
          if (story) {
             const storyStats = stats[session.storyId];
             if (storyStats && storyStats.locked) {
                localStorage.removeItem('activeReadingSession');
                return;
             }
            setSelectedStory(story);
            setSelectedGrade(session.grade || Grade.THIRD);
            setCurrentQuiz(generateQuiz(story));
            setAppState(AppState.READING);
          } else {
            localStorage.removeItem('activeReadingSession');
          }
        }
      } catch (error) {
        localStorage.removeItem('activeReadingSession');
      }
    }
  }, [appState, generateQuiz, stats]);

  useEffect(() => {
    try {
      localStorage.setItem('readingAppStats', JSON.stringify(stats));
    } catch (error) {
      console.error("Could not save stats to localStorage", error);
    }
  }, [stats]);

  const handleStorySelect = (storyId: string) => {
    const story = stories.find(s => s.id === storyId);
    if (!story) return;

    const storyStats = stats[storyId];
    if (storyStats && storyStats.locked) {
        alert("Esta historia está completada. ¡Pedile a un adulto que la desbloquee!");
        return;
    }

    setSelectedStory(story);
    setAppState(AppState.GRADE_SELECTION);
  };

  const handleGradeSelect = (grade: Grade) => {
    if (!selectedStory) return;
    
    setSelectedGrade(grade);
    const newSession: ReadingSession = {
        storyId: selectedStory.id,
        grade: grade,
        startTime: Date.now(),
        currentPageIndex: 0,
        pageTimings: [],
        pageStartTime: Date.now(),
    };
    localStorage.setItem('activeReadingSession', JSON.stringify(newSession));
    setCurrentQuiz(generateQuiz(selectedStory));
    setAppState(AppState.READING);
  };

  const handleRestart = useCallback(() => {
    localStorage.removeItem('activeReadingSession');
    setAppState(AppState.SELECTING);
    setSelectedStory(null);
    setSelectedGrade(null);
    setReadingDuration(0);
    setCurrentPageTimings([]);
    setCurrentQuiz([]);
    setLastAttempt(null);
    setTempAttemptData(null);
  }, []);

  const handleFinishReading = useCallback(() => {
    if (!selectedStory) return;
    const sessionStr = localStorage.getItem('activeReadingSession');
    if (!sessionStr) { handleRestart(); return; }
    const session: ReadingSession = JSON.parse(sessionStr);
    setReadingDuration(Date.now() - session.startTime);
    setCurrentPageTimings(session.pageTimings);
    setAppState(AppState.QUIZZING);
  }, [selectedStory, handleRestart]);

  const [tempAttemptData, setTempAttemptData] = useState<{
    answers: UserAnswer[];
    timings: AnswerTiming[];
    shuffledOptions: { [questionId: string]: string[] };
  } | null>(null);

  const handleQuizComplete = useCallback((answers: UserAnswer[], timings: AnswerTiming[], shuffledOptions: { [questionId: string]: string[] }) => {
    setTempAttemptData({ answers, timings, shuffledOptions });
    setAppState(AppState.SUMMARIZING);
  }, []);

  const handleSummaryComplete = (summaryText: string, feedback: string) => {
    if (!selectedStory || !tempAttemptData || !selectedGrade) return;

    const { answers, timings, shuffledOptions } = tempAttemptData;
    const correctAnswersCount = answers.filter(ua => {
      const question = currentQuiz.find(q => q.id === ua.questionId);
      return question && question.correctAnswer === ua.answer;
    }).length;

    const score = Math.round((correctAnswersCount / currentQuiz.length) * 100);

    const newAttempt: Attempt = {
      id: Date.now().toString(),
      grade: selectedGrade,
      readingDuration,
      pageTimings: currentPageTimings,
      answers,
      answerTimings: timings,
      score,
      questions: currentQuiz,
      shuffledOptionsPerQuestion: shuffledOptions,
      studentSummary: summaryText,
      summaryFeedback: feedback
    };
    
    setStats(prevStats => {
      const storyStats = prevStats[selectedStory.id] || { locked: false, attempts: [] };
      return {
        ...prevStats,
        [selectedStory.id]: {
          ...storyStats,
          locked: true,
          attempts: [...storyStats.attempts, newAttempt],
        },
      };
    });
    
    localStorage.removeItem('activeReadingSession');
    setLastAttempt(newAttempt);
    setAppState(AppState.RESULTS);
  };

  const handleUnlockStory = (storyId: string) => {
    setStats(prevStats => ({
      ...prevStats,
      [storyId]: { ...prevStats[storyId], locked: false },
    }));
  };

  const handleParentLogin = (password: string) => {
    if (password === '3127') {
      setAppState(AppState.PARENT_DASHBOARD);
      setIsPasswordModalOpen(false);
    } else {
      alert('Contraseña incorrecta');
    }
  };

  const renderContent = () => {
    switch (appState) {
      case AppState.SELECTING:
        return <StorySelection stories={stories} stats={stats} onSelectStory={handleStorySelect} inProgressStoryId={inProgressStoryId} />;
      case AppState.GRADE_SELECTION:
        return selectedStory ? <GradeSelection story={selectedStory} onSelectGrade={handleGradeSelect} /> : null;
      case AppState.READING:
        return selectedStory ? <ReadingView story={selectedStory} onFinishReading={handleFinishReading} /> : null;
      case AppState.QUIZZING:
        return (selectedStory && currentQuiz.length > 0 && selectedGrade) ? <QuizView questions={currentQuiz} storyContent={selectedStory.content} grade={selectedGrade} onQuizComplete={handleQuizComplete} /> : null;
      case AppState.SUMMARIZING:
        return (selectedStory && selectedGrade) ? <SummaryView story={selectedStory} grade={selectedGrade} onComplete={handleSummaryComplete} /> : null;
      case AppState.RESULTS:
        return (selectedStory && lastAttempt) ? <ResultsView story={selectedStory} attempt={lastAttempt} onRestart={handleRestart} /> : null;
      case AppState.PARENT_DASHBOARD:
        return <ParentDashboard stories={stories} stats={stats} onExit={() => setAppState(AppState.SELECTING)} onUnlockStory={handleUnlockStory} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-light-bg text-dark-text font-sans antialiased">
      {isPasswordModalOpen && (
        <PasswordModal 
          onClose={() => setIsPasswordModalOpen(false)} 
          onSubmit={handleParentLogin} 
        />
      )}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
           <div className="flex items-center gap-4">
             {(appState === AppState.GRADE_SELECTION || appState === AppState.RESULTS) && (
               <button onClick={handleRestart} className="text-gray-400 hover:text-brand-purple transition-colors flex items-center gap-1 text-sm font-bold">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                 </svg>
                 Biblioteca
               </button>
             )}
             <h1 className="text-xl font-black text-brand-purple tracking-tight cursor-pointer select-none" onClick={handleRestart}>Lecturalia</h1>
           </div>
           {appState === AppState.SELECTING && (
             <button 
                onClick={() => setIsPasswordModalOpen(true)} 
                className="text-xs font-bold text-gray-400 hover:text-brand-purple uppercase tracking-wider transition-colors"
             >
               Padres
             </button>
           )}
        </div>
      </header>
      <main className="container mx-auto p-4">{renderContent()}</main>
    </div>
  );
};

export default App;
