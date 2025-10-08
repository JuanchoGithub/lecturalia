import React, { useState, useCallback, useEffect } from 'react';
import { Story, AppState, UserAnswer, AllStoryStats, Question, QuestionCategory, Attempt, AnswerTiming, PageTiming } from './types';
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
    try {
      localStorage.setItem('readingAppStats', JSON.stringify(stats));
    } catch (error) {
      console.error("Could not save stats to localStorage", error);
    }
  }, [stats]);

  const generateQuiz = (story: Story): Question[] => {
    const quizQuestions: Question[] = [];
    for (const category in story.questions) {
      const questionsInCategory = story.questions[category as QuestionCategory];
      if (questionsInCategory && questionsInCategory.length > 0) {
        const randomIndex = Math.floor(Math.random() * questionsInCategory.length);
        quizQuestions.push(questionsInCategory[randomIndex]);
      }
    }
    return quizQuestions.sort(() => Math.random() - 0.5);
  };

  const handleStorySelect = useCallback((storyId: string) => {
    const story = stories.find(s => s.id === storyId);
    if (story) {
      const storyStats = stats[storyId];
      if (storyStats && storyStats.locked) {
        alert("Esta historia está completada. ¡Pedile a un adulto que la desbloquee desde el Portal para Padres si querés volver a leerla!");
        return;
      }
      setSelectedStory(story);
      setCurrentQuiz(generateQuiz(story));
      setAppState(AppState.READING);
    }
  }, [stats]);

  const handleFinishReading = useCallback((duration: number, pageTimings: PageTiming[]) => {
    setReadingDuration(duration);
    setCurrentPageTimings(pageTimings);
    setAppState(AppState.QUIZZING);
  }, []);

  const handleQuizComplete = useCallback((answers: UserAnswer[], timings: AnswerTiming[]) => {
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

    setLastAttempt(newAttempt);
    setAppState(AppState.RESULTS);
  }, [selectedStory, currentQuiz, readingDuration, currentPageTimings]);

  const handleRestart = useCallback(() => {
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
        return <StorySelection stories={stories} stats={stats} onSelectStory={handleStorySelect} />;
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
        return <StorySelection stories={stories} stats={stats} onSelectStory={handleStorySelect} />;
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