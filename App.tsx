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

  // Load stats from localStorage on initialization
  const [stats, setStats] = useState<AllStoryStats>(() => {
    try {
      const savedStats = localStorage.getItem('readingAppStats');
      if (!savedStats) return {};
      return JSON.parse(savedStats);
    } catch (error) {
      console.error("Could not load stats from localStorage", error);
      return {};
    }
  });

  // Generate a randomized quiz for a story
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

  // Check for an active reading session to show 'Continue' indicator
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
                setInProgressStoryId(null);
                return;
             }
            setInProgressStoryId(story.id);
          } else {
            localStorage.removeItem('activeReadingSession');
            setInProgressStoryId(null);
          }
        } else {
            setInProgressStoryId(null);
        }
      } catch (error) {
        localStorage.removeItem('activeReadingSession');
        setInProgressStoryId(null);
      }
    }
  }, [appState, stats]);

  // Persist stats whenever they change
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
      alert('Esta historia está bloqueada. Un adulto debe desbloquearla desde el panel.');
      return;
    }

    const sessionStr = localStorage.getItem('activeReadingSession');
    if (sessionStr) {
        try {
            const session: ReadingSession = JSON.parse(sessionStr);
            if (session.storyId === storyId) {
                setSelectedStory(story);
                setSelectedGrade(session.grade || Grade.THIRD);
                setCurrentQuiz(generateQuiz(story));
                setAppState(AppState.READING);
                return;
            }
        } catch (e) {}
    }

    setSelectedStory(story);
    setAppState(AppState.GRADE_SELECTION);
  };

  const handleGradeSelect = (grade: Grade) => {
    if (!selectedStory) return;
    
    setSelectedGrade(grade);
    setCurrentQuiz(generateQuiz(selectedStory));
    
    const session: ReadingSession = {
      storyId: selectedStory.id,
      grade,
      startTime: Date.now(),
      currentPageIndex: 0,
      pageTimings: [],
      pageStartTime: Date.now()
    };
    localStorage.setItem('activeReadingSession', JSON.stringify(session));
    
    setAppState(AppState.READING);
  };

  const handleFinishReading = () => {
    const sessionStr = localStorage.getItem('activeReadingSession');
    if (sessionStr) {
      try {
        const session: ReadingSession = JSON.parse(sessionStr);
        setReadingDuration(Date.now() - session.startTime);
        setCurrentPageTimings(session.pageTimings || []);
      } catch (e) {}
    }
    setAppState(AppState.QUIZZING);
  };

  const handleQuizComplete = (answers: UserAnswer[], timings: AnswerTiming[], shuffledOptions: { [questionId: string]: string[] }) => {
    if (!selectedStory || !selectedGrade) return;

    const correctCount = answers.filter(ans => {
      const q = currentQuiz.find(qi => qi.id === ans.questionId);
      return q && q.correctAnswer === ans.answer;
    }).length;

    const score = Math.round((correctCount / currentQuiz.length) * 100);

    const attempt: Attempt = {
      id: Date.now().toString(),
      grade: selectedGrade,
      readingDuration,
      pageTimings: currentPageTimings,
      answers,
      answerTimings: timings,
      score,
      questions: currentQuiz,
      shuffledOptionsPerQuestion: shuffledOptions,
    };

    setLastAttempt(attempt);
    setAppState(AppState.SUMMARIZING);
  };

  const handleSummaryComplete = (summary: string, feedback: string) => {
    if (!selectedStory || !lastAttempt) return;

    const finalAttempt = {
      ...lastAttempt,
      studentSummary: summary,
      summaryFeedback: feedback
    };

    setLastAttempt(finalAttempt);

    setStats(prev => {
      const storyId = selectedStory.id;
      const currentStoryStats = prev[storyId] || { locked: false, attempts: [] };
      return {
        ...prev,
        [storyId]: {
          locked: true,
          attempts: [...currentStoryStats.attempts, finalAttempt]
        }
      };
    });

    localStorage.removeItem('activeReadingSession');
    setAppState(AppState.RESULTS);
  };

  const handleRestart = () => {
    setSelectedStory(null);
    setSelectedGrade(null);
    setCurrentQuiz([]);
    setLastAttempt(null);
    setAppState(AppState.SELECTING);
  };

  const handleParentAccess = () => {
    setIsPasswordModalOpen(true);
  };

  const handlePasswordSubmit = (password: string) => {
    if (password === '3127') {
      setIsPasswordModalOpen(false);
      setAppState(AppState.PARENT_DASHBOARD);
    } else {
      alert('Contraseña incorrecta.');
    }
  };

  const handleUnlockStory = (storyId: string) => {
    setStats(prev => {
      if (!prev[storyId]) return prev;
      return {
        ...prev,
        [storyId]: {
          ...prev[storyId],
          locked: false
        }
      };
    });
  };

  return (
    <div className="min-h-screen bg-light-bg font-sans text-dark-text pb-20">
      <header className="bg-white shadow-sm mb-8">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleRestart}>
             <div className="w-10 h-10 bg-brand-purple rounded-xl flex items-center justify-center text-white shadow-lg rotate-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
             </div>
             <h1 className="text-2xl font-black text-brand-purple tracking-tighter">LecturaMágica</h1>
          </div>

          {appState === AppState.SELECTING && (
            <button 
              onClick={handleParentAccess}
              className="flex items-center gap-2 text-gray-400 hover:text-brand-purple font-bold text-sm transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Portal para Padres
            </button>
          )}

          {appState === AppState.PARENT_DASHBOARD && (
             <button onClick={handleRestart} className="text-brand-purple font-black text-sm uppercase tracking-widest hover:underline">
               Volver a la Biblioteca
             </button>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4">
        {appState === AppState.SELECTING && (
          <StorySelection 
            stories={stories} 
            stats={stats} 
            onSelectStory={handleStorySelect}
            inProgressStoryId={inProgressStoryId}
          />
        )}

        {appState === AppState.GRADE_SELECTION && selectedStory && (
          <GradeSelection 
            story={selectedStory} 
            onSelectGrade={handleGradeSelect} 
          />
        )}

        {appState === AppState.READING && selectedStory && (
          <ReadingView 
            story={selectedStory} 
            onFinishReading={handleFinishReading} 
          />
        )}

        {appState === AppState.QUIZZING && selectedStory && selectedGrade && (
          <QuizView 
            questions={currentQuiz} 
            storyContent={selectedStory.content}
            grade={selectedGrade}
            onQuizComplete={handleQuizComplete} 
          />
        )}

        {appState === AppState.SUMMARIZING && selectedStory && selectedGrade && (
          <SummaryView 
            story={selectedStory}
            grade={selectedGrade}
            onComplete={handleSummaryComplete}
          />
        )}

        {appState === AppState.RESULTS && selectedStory && lastAttempt && (
          <ResultsView 
            story={selectedStory} 
            attempt={lastAttempt} 
            onRestart={handleRestart} 
          />
        )}

        {appState === AppState.PARENT_DASHBOARD && (
          <ParentDashboard 
            stories={stories} 
            stats={stats} 
            onExit={handleRestart}
            onUnlockStory={handleUnlockStory}
          />
        )}
      </main>

      {isPasswordModalOpen && (
        <PasswordModal 
          onClose={() => setIsPasswordModalOpen(false)} 
          onSubmit={handlePasswordSubmit} 
        />
      )}
    </div>
  );
};

export default App;