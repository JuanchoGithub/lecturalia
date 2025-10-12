
import React, { useState, useCallback, useEffect } from 'react';
import { Story, AppState, UserAnswer, AllStoryStats, Question, QuestionCategory, Attempt, AnswerTiming, PageTiming, ReadingSession } from './types';
import { stories } from './data/stories/index';
import StorySelection from './components/StorySelection';
import ReadingView from './components/ReadingView';
import QuizView from './components/QuizView';
import ResultsView from './components/ResultsView';
import PasswordModal from './components/PasswordModal';
import ParentDashboard from './components/ParentDashboard';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.SELECTING);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [currentQuiz, setCurrentQuiz] = useState<Question[]>([]);
  const [readingDuration, setReadingDuration] = useState<number>(0);
  const [currentPageTimings, setCurrentPageTimings] = useState<PageTiming[]>([]);
  const [lastAttempt, setLastAttempt] = useState<Attempt | null>(null);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [inProgressStoryId, setInProgressStoryId] = useState<string | null>(null);

  const [stats, setStats] = useState<AllStoryStats>(() => {
    try {
      const savedStats = localStorage.getItem('readingAppStats');
      return savedStats ? JSON.parse(savedStats) : {};
    } catch (error) {
      console.error("Could not load stats from localStorage", error);
      return {};
    }
  });

  useEffect(() => {
    if (appState === AppState.SELECTING) {
      try {
        const sessionStr = localStorage.getItem('activeReadingSession');
        if (sessionStr) {
          const session: ReadingSession = JSON.parse(sessionStr);
          setInProgressStoryId(session.storyId);
        } else {
          setInProgressStoryId(null);
        }
      } catch {
        setInProgressStoryId(null);
      }
    }
  }, [appState]);

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
    // Attempt to resume a session on initial load
    if (appState === AppState.SELECTING) { // Only check if we are in the initial state
      try {
        const savedSession = localStorage.getItem('activeReadingSession');
        if (savedSession) {
          const session: ReadingSession = JSON.parse(savedSession);
          const story = stories.find(s => s.id === session.storyId);
          if (story) {
             const storyStats = stats[session.storyId];
             if (storyStats && storyStats.locked) {
                localStorage.removeItem('activeReadingSession');
                return;
             }
            setSelectedStory(story);
            setCurrentQuiz(generateQuiz(story));
            setAppState(AppState.READING);
          } else {
            localStorage.removeItem('activeReadingSession');
          }
        }
      } catch (error) {
        console.error("Could not load reading session", error);
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

  const handleStorySelect = useCallback((storyId: string) => {
    const story = stories.find(s => s.id === storyId);
    if (!story) return;

    const storyStats = stats[storyId];
    if (storyStats && storyStats.locked) {
        alert("Esta historia está completada. ¡Pedile a un adulto que la desbloquee desde el Portal para Padres si querés volver a leerla!");
        return;
    }

    try {
        const savedSessionStr = localStorage.getItem('activeReadingSession');
        if (savedSessionStr) {
            const session: ReadingSession = JSON.parse(savedSessionStr);
            if (session.storyId === story.id) {
                setSelectedStory(story);
                setCurrentQuiz(generateQuiz(story));
                setAppState(AppState.READING);
                return;
            }
        }

        const newSession: ReadingSession = {
            storyId: story.id,
            startTime: Date.now(),
            currentPageIndex: 0,
            pageTimings: [],
            pageStartTime: Date.now(),
        };
        localStorage.setItem('activeReadingSession', JSON.stringify(newSession));
        setSelectedStory(story);
        setCurrentQuiz(generateQuiz(story));
        setAppState(AppState.READING);

    } catch (error) {
        console.error("Could not save or load reading session", error);
        alert("No se pudo iniciar la sesión de lectura. Es posible que el almacenamiento de su navegador esté lleno.");
    }
}, [stats, generateQuiz]);


  // FIX: Moved handleRestart before handleFinishReading to resolve the "used before its declaration" error.
  const handleRestart = useCallback(() => {
    try {
        localStorage.removeItem('activeReadingSession');
    } catch (error) {
        console.error("Could not remove active reading session on restart.", error);
    }
    setAppState(AppState.SELECTING);
    setSelectedStory(null);
    setReadingDuration(0);
    setCurrentPageTimings([]);
    setCurrentQuiz([]);
    setLastAttempt(null);
  }, []);

  const handleFinishReading = useCallback(() => {
    if (!selectedStory) return;

    const sessionStr = localStorage.getItem('activeReadingSession');
    if (!sessionStr) {
      console.error("Finished reading but no active session found.");
      handleRestart();
      return;
    }

    const session: ReadingSession = JSON.parse(sessionStr);

    const totalDuration = Date.now() - session.startTime;
    const finalPageTimings = session.pageTimings;

    setReadingDuration(totalDuration);
    setCurrentPageTimings(finalPageTimings);
    setAppState(AppState.QUIZZING);

  }, [selectedStory, handleRestart]);

  const handleQuizComplete = useCallback((answers: UserAnswer[], timings: AnswerTiming[], shuffledOptionsPerQuestion: { [questionId: string]: string[] }) => {
    if (!selectedStory) return;

    const correctAnswersCount = answers.filter(ua => {
      const question = currentQuiz.find(q => q.id === ua.questionId);
      return question && question.correctAnswer === ua.answer;
    }).length;

    const score = Math.round((correctAnswersCount / currentQuiz.length) * 100);

    const newAttempt: Attempt = {
      id: Date.now().toString(),
      readingDuration,
      pageTimings: currentPageTimings,
      answers,
      answerTimings: timings,
      score,
      questions: currentQuiz,
      shuffledOptionsPerQuestion,
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
    
    try {
      localStorage.removeItem('activeReadingSession');
    } catch (error) {
      console.error("Could not remove active reading session.", error);
    }

    setLastAttempt(newAttempt);
    setAppState(AppState.RESULTS);
  }, [selectedStory, currentQuiz, readingDuration, currentPageTimings]);
  
  const handleReturnToSelection = useCallback(() => {
    try {
      localStorage.removeItem('activeReadingSession');
    } catch (error) {
        console.error("Could not remove active reading session on return to selection.", error);
    }
    setAppState(AppState.SELECTING);
    setSelectedStory(null);
    setReadingDuration(0);
    setCurrentPageTimings([]);
    setCurrentQuiz([]);
    setLastAttempt(null);
  }, []);

  const handlePasswordSubmit = (password: string) => {
    if (password !== '3127') {
      alert("Contraseña incorrecta.");
      return;
    }
    setAppState(AppState.PARENT_DASHBOARD);
    setIsPasswordModalOpen(false);
  };

  const handleUnlockStory = (storyId: string) => {
    setStats(prevStats => ({
      ...prevStats,
      [storyId]: {
        ...prevStats[storyId],
        locked: false,
      },
    }));
  };

  const handleOpenParentDashboard = () => {
    setIsPasswordModalOpen(true);
  };

  const renderContent = () => {
    switch (appState) {
      case AppState.SELECTING:
        return <StorySelection stories={stories} stats={stats} onSelectStory={handleStorySelect} inProgressStoryId={inProgressStoryId} />;
      case AppState.READING:
        if (selectedStory) {
          return <ReadingView story={selectedStory} onFinishReading={handleFinishReading} />;
        }
        return null;
      case AppState.QUIZZING:
        if (selectedStory && currentQuiz.length > 0) {
          return <QuizView questions={currentQuiz} onQuizComplete={handleQuizComplete} />;
        }
        return null;
      case AppState.RESULTS:
        if (selectedStory && lastAttempt) {
          return <ResultsView 
            story={selectedStory}
            attempt={lastAttempt}
            onRestart={handleRestart}
          />;
        }
        return null;
      case AppState.PARENT_DASHBOARD:
        return <ParentDashboard stories={stories} stats={stats} onExit={() => setAppState(AppState.SELECTING)} onUnlockStory={handleUnlockStory} />;
      default:
        return <StorySelection stories={stories} stats={stats} onSelectStory={handleStorySelect} inProgressStoryId={inProgressStoryId} />;
    }
  };

  return (
    <div className="min-h-screen bg-light-bg text-dark-text font-sans antialiased">
      {isPasswordModalOpen && (
        <PasswordModal 
          onClose={() => setIsPasswordModalOpen(false)}
          onSubmit={handlePasswordSubmit}
        />
      )}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-blue mr-3" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 16c1.255 0 2.443-.29 3.5-.804V4.804zM14.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 0114.5 16c1.255 0 2.443-.29 3.5-.804v-10A7.968 7.968 0 0014.5 4z" />
            </svg>
            <h1 className="text-2xl sm:text-3xl font-bold text-brand-purple">
              Aventura de Lectura
            </h1>
          </div>
          {appState === AppState.SELECTING && (
             <button onClick={handleOpenParentDashboard} className="flex items-center space-x-2 text-sm font-semibold text-gray-600 hover:text-brand-purple transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 8a6 6 0 11-12 0 6 6 0 0112 0zM7 8a1 1 0 11-2 0 1 1 0 012 0zm5 0a1 1 0 11-2 0 1 1 0 012 0zm5 0a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                  <path d="M5.5 11.5a4.5 4.5 0 109 0h-9z" />
                  <path fillRule="evenodd" d="M2 12.5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span>Portal para Padres</span>
             </button>
          )}
           {appState === AppState.READING && (
              <button onClick={handleReturnToSelection} className="flex items-center space-x-2 text-sm font-semibold text-gray-600 hover:text-brand-purple transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Volver a las Historias</span>
              </button>
          )}
        </div>
      </header>
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        {renderContent()}
      </main>
      <footer className="text-center py-4 text-gray-500 text-sm">
        <p>¡Feliz Lectura!</p>
      </footer>
    </div>
  );
};

export default App;
