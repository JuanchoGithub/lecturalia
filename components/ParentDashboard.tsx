
import React, { useState, useEffect } from 'react';
import { AllStoryStats, Story, Attempt, StoryStats, PageTiming, ReadingSession, Question, QuestionCategory } from '../types';
import Card from './ui/Card';
import Button from './ui/Button';

// FIX: Added interface for component props to resolve type error.
interface ParentDashboardProps {
  stories: Story[];
  stats: AllStoryStats;
  onExit: () => void;
  onUnlockStory: (storyId: string) => void;
}

// Utility functions copied from ReadingView for consistent pagination
const paginateStory = (story: Story): string[] => {
    const content = story.content;
    const isAdelaBasch = story.author === 'Adela Basch';

    const splitRegex = isAdelaBasch ? /\n/ : /\n\s*\n/;
    const joiner = isAdelaBasch ? '\n' : '\n\n';
    const paragraphsPerPage = isAdelaBasch ? 5 : 2;

    const paragraphs = content.trim().split(splitRegex).filter(p => p.trim() !== '');
    const pages: string[] = [];
    for (let i = 0; i < paragraphs.length; i += paragraphsPerPage) {
        pages.push(paragraphs.slice(i, i + paragraphsPerPage).join(joiner));
    }
    return pages;
};

const calculateWPM = (wordCount: number, durationMs: number): number => {
    if (durationMs <= 0 || wordCount <= 0) return 0;
    const minutes = durationMs / 60000;
    return Math.round(wordCount / minutes);
};

const calculateStudentAverageWPM = (stats: AllStoryStats, stories: Story[]): number => {
    let totalWords = 0;
    let totalDurationMs = 0;

    for (const storyId in stats) {
        const storyData = stories.find(s => s.id === storyId);
        if (storyData) {
            stats[storyId].attempts.forEach(attempt => {
                totalWords += storyData.wordCount;
                totalDurationMs += attempt.readingDuration;
            });
        }
    }

    if (totalDurationMs === 0 || totalWords === 0) return 0;

    const totalMinutes = totalDurationMs / 60000;
    return Math.round(totalWords / totalMinutes);
};

const getPageAnalysis = (pt: PageTiming, studentAverageWPM: number) => {
    const wpm = calculateWPM(pt.wordCount, pt.duration);

    const GRADE_LEVEL_FAST = 120;
    const GRADE_LEVEL_AVG_LOWER = 80;
    const CHEAT_THRESHOLD = 400;

    let gradeLevelFeedback = '';
    let bgColor = 'bg-gray-100';
    let textColor = 'text-gray-800';
    let borderColor = 'border-gray-300';

    if (wpm === 0) {
        gradeLevelFeedback = 'No se registró tiempo de lectura.';
    } else if (wpm > CHEAT_THRESHOLD) {
        gradeLevelFeedback = 'El ritmo es extremadamente rápido (posible omisión de texto).';
        bgColor = 'bg-yellow-100'; textColor = 'text-yellow-800'; borderColor = 'border-yellow-400';
    } else if (wpm > GRADE_LEVEL_FAST) {
        gradeLevelFeedback = 'Este es un ritmo RÁPIDO para un lector de 3er grado.';
        bgColor = 'bg-green-100'; textColor = 'text-green-800'; borderColor = 'border-green-400';
    } else if (wpm >= GRADE_LEVEL_AVG_LOWER) {
        gradeLevelFeedback = 'Este es un ritmo PROMEDIO para un lector de 3er grado.';
        bgColor = 'bg-green-100'; textColor = 'text-green-800'; borderColor = 'border-green-400';
    } else { 
        gradeLevelFeedback = 'Este es un ritmo LENTO para un lector de 3er grado.';
        bgColor = 'bg-red-100'; textColor = 'text-red-800'; borderColor = 'border-red-400';
    }

    let personalAvgFeedback = '';
    if (studentAverageWPM > 0 && wpm > 0) {
        const difference = wpm - studentAverageWPM;
        if (Math.abs(difference) < 10) {
            personalAvgFeedback = `Consistente con su promedio personal de ${studentAverageWPM} PPM.`;
        } else if (difference > 0) {
            personalAvgFeedback = `Más rápido que su promedio personal de ${studentAverageWPM} PPM.`;
        } else {
            personalAvgFeedback = `Más lento que su promedio personal de ${studentAverageWPM} PPM.`;
        }
    } else if (wpm > 0) {
        personalAvgFeedback = 'Se establecerá un promedio personal con más lecturas.';
    }

    return { wpm, gradeLevelFeedback, personalAvgFeedback, bgColor, textColor, borderColor };
};

const PageViewModal: React.FC<{ pageContent: string; pageIndex: number; onClose: () => void }> = ({ pageContent, pageIndex, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-dark-text">Texto de la Página {pageIndex + 1}</h3>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-3xl font-bold">&times;</button>
                    </div>
                    <div className="prose max-w-none text-dark-text text-justify" style={{ whiteSpace: 'pre-wrap' }}>
                        {pageContent}
                    </div>
                </div>
            </Card>
        </div>
    );
};

interface AttemptDetailsProps {
    attempt: Attempt;
    story: Story;
    onBack: () => void;
    studentAverageWPM: number;
}

const AttemptDetails: React.FC<AttemptDetailsProps> = ({ attempt, story, onBack, studentAverageWPM }) => {
    const overallWPM = calculateWPM(story.wordCount, attempt.readingDuration);
    const [viewingPageIndex, setViewingPageIndex] = useState<number | null>(null);
    const pages = paginateStory(story);
    
    return (
        <div>
            {viewingPageIndex !== null && pages[viewingPageIndex] && (
                <PageViewModal 
                    pageContent={pages[viewingPageIndex]}
                    pageIndex={viewingPageIndex}
                    onClose={() => setViewingPageIndex(null)}
                />
            )}
            <Button onClick={onBack} variant="secondary" size="sm" className="mb-4">
                &larr; Volver a los Intentos
            </Button>
            <h3 className="text-xl font-bold mb-2">Detalle del Intento</h3>
            <p className="text-sm text-gray-500 mb-4">Realizado el {new Date(parseInt(attempt.id)).toLocaleString('es-AR')}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-center">
                <div className="bg-blue-100 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-blue-800">{attempt.score}%</div>
                    <div className="text-sm text-blue-700">Puntaje</div>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-800">{overallWPM}</div>
                    <div className="text-sm text-yellow-700">PPM (General)</div>
                </div>
            </div>

            <h4 className="font-bold mb-4 text-lg">Análisis por Página <span className="text-sm font-normal text-gray-500">(hacé clic para ver el texto)</span></h4>
            <div className="space-y-3">
                {attempt.pageTimings.sort((a,b) => a.pageIndex - b.pageIndex).map(pt => {
                    const { wpm, gradeLevelFeedback, personalAvgFeedback, bgColor, textColor, borderColor } = getPageAnalysis(pt, studentAverageWPM);

                    return (
                        <div key={pt.pageIndex} onClick={() => setViewingPageIndex(pt.pageIndex)} className={`border-l-4 p-4 rounded-r-lg ${bgColor} ${borderColor} cursor-pointer hover:shadow-md transition-shadow`}>
                            <div className="flex flex-wrap justify-between items-center text-sm font-semibold">
                                <span className="text-lg font-bold text-dark-text mr-4">Página {pt.pageIndex + 1}</span>
                                <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-600">
                                    <span>{pt.wordCount} palabras</span>
                                    <span>{(pt.duration / 1000).toFixed(1)}s</span>
                                    <span className={`font-bold ${textColor}`}>{wpm} PPM</span>
                                </div>
                            </div>
                            <div className={`mt-3 pt-3 border-t ${borderColor} ${textColor}`}>
                                <ul className="list-disc list-inside text-sm space-y-1">
                                    {gradeLevelFeedback && <li>{gradeLevelFeedback}</li>}
                                    {personalAvgFeedback && <li>{personalAvgFeedback}</li>}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h4 className="font-bold mb-4 text-lg mt-6">Análisis de Preguntas</h4>
            <div className="space-y-4">
                {attempt.questions.map((q, index) => {
                    const userAnswer = attempt.answers.find(a => a.questionId === q.id);
                    const timing = attempt.answerTimings.find(t => t.questionId === q.id);
                    const isCorrect = userAnswer?.answer === q.correctAnswer;
                    const optionsToShow = attempt.shuffledOptionsPerQuestion?.[q.id] || q.options;

                    return (
                        <div key={q.id} className={`p-4 rounded-lg border ${isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}>
                            <p className="font-semibold text-dark-text">{index + 1}. {q.questionText}</p>
                            <p className="text-xs text-gray-500 mb-4">{q.category}</p>
                            <div className="space-y-2 text-sm">
                                {optionsToShow.map((option, i) => {
                                    const isUserAnswer = option === userAnswer?.answer;
                                    const isTheCorrectAnswer = option === q.correctAnswer;
                                    
                                    let optionClass = "p-2 rounded border border-gray-300 bg-white/50 flex justify-between items-center";
                                    let indicator = null;

                                    if (isUserAnswer && isTheCorrectAnswer) {
                                        optionClass = "p-2 rounded border-2 border-green-500 bg-green-100 flex justify-between items-center";
                                        indicator = <span className="text-xs font-semibold text-green-800 ml-2">(Tu respuesta - Correcta)</span>;
                                    } else if (isUserAnswer && !isTheCorrectAnswer) {
                                        optionClass = "p-2 rounded border-2 border-red-500 bg-red-100 flex justify-between items-center";
                                        indicator = <span className="text-xs font-semibold text-red-800 ml-2">(Tu respuesta)</span>;
                                    } else if (isTheCorrectAnswer) {
                                        optionClass = "p-2 rounded border border-green-400 bg-green-50 flex justify-between items-center";
                                        indicator = <span className="text-xs font-semibold text-green-800 ml-2">(Respuesta Correcta)</span>;
                                    }

                                    return (
                                        <div key={i} className={optionClass}>
                                            <span>{option}</span>
                                            {indicator}
                                        </div>
                                    );
                                })}
                            </div>
                            <p className="text-sm text-gray-600 mt-3"><strong>Tiempo para responder:</strong> {((timing?.duration || 0) / 1000).toFixed(1)} segundos</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};


const StoryDetails: React.FC<{ story: Story; storyStats: StoryStats; onSelectAttempt: (id: string) => void; onBack: () => void }> = ({ story, storyStats, onSelectAttempt, onBack }) => {
    return (
        <div>
            <Button onClick={onBack} variant="secondary" size="sm" className="mb-4">
               &larr; Volver a las Historias
            </Button>
            <h3 className="text-xl font-bold mb-4">Intentos para: {story.title}</h3>
            {storyStats.attempts.length > 0 ? (
                <div className="space-y-3">
                    {storyStats.attempts.slice().reverse().map(attempt => (
                         <div key={attempt.id} className="p-3 bg-white rounded-lg shadow-sm border flex justify-between items-center">
                            <div>
                                <p className="font-semibold">Fecha: {new Date(parseInt(attempt.id)).toLocaleString('es-AR')}</p>
                                <p className="text-sm text-gray-600">
                                    Puntaje: <span className="font-bold">{attempt.score}%</span> | 
                                    Velocidad: <span className="font-bold">{calculateWPM(story.wordCount, attempt.readingDuration)} PPM</span>
                                </p>
                            </div>
                            <Button onClick={() => onSelectAttempt(attempt.id)} size="sm">
                                Ver Detalles
                            </Button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Aún no hay intentos para esta historia.</p>
            )}
        </div>
    );
};

const StoryViewerModal: React.FC<{ story: Story; onClose: () => void }> = ({ story, onClose }) => {
    const [activeTab, setActiveTab] = useState<'content' | 'questions'>('content');
    const pages = paginateStory(story);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-4xl max-h-[90vh] flex flex-col">
                <div className="p-4 border-b flex justify-between items-center flex-shrink-0">
                    <div>
                        <h3 className="text-2xl font-bold text-brand-purple">{story.title}</h3>
                        <p className="text-sm text-gray-500">por {story.author}</p>
                    </div>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-3xl font-bold">&times;</button>
                </div>
                <div className="border-b flex-shrink-0">
                    <nav className="flex space-x-4 px-4">
                        <button onClick={() => setActiveTab('content')} className={`py-2 px-4 font-semibold ${activeTab === 'content' ? 'border-b-2 border-brand-blue text-brand-blue' : 'text-gray-500 hover:text-brand-blue'}`}>Contenido</button>
                        <button onClick={() => setActiveTab('questions')} className={`py-2 px-4 font-semibold ${activeTab === 'questions' ? 'border-b-2 border-brand-blue text-brand-blue' : 'text-gray-500 hover:text-brand-blue'}`}>Preguntas</button>
                    </nav>
                </div>
                <div className="overflow-y-auto p-6">
                    {activeTab === 'content' && (
                        <div className="space-y-6">
                            {pages.map((pageContent, index) => (
                                <div key={index} className="pb-4 border-b last:border-b-0">
                                    <p className="text-sm font-bold text-gray-500 mb-2">Página {index + 1}</p>
                                    <div className="prose max-w-none text-dark-text" style={{ whiteSpace: 'pre-wrap' }}>{pageContent}</div>
                                </div>
                            ))}
                        </div>
                    )}
                    {activeTab === 'questions' && (
                        <div className="space-y-6">
                           {Object.entries(story.questions).map(([category, questions]) => (
                               <div key={category}>
                                   <h4 className="text-xl font-bold text-brand-orange mb-3">{category}</h4>
                                   <div className="space-y-4">
                                       {(questions as Question[]).map(q => (
                                           <div key={q.id} className="p-3 bg-gray-50 rounded-lg border">
                                               <p className="font-semibold mb-2">{q.questionText}</p>
                                               <ul className="list-disc list-inside space-y-1 text-sm">
                                                   {q.options.map(opt => (
                                                       <li key={opt} className={opt === q.correctAnswer ? 'font-bold text-green-700' : ''}>
                                                           {opt}
                                                       </li>
                                                   ))}
                                               </ul>
                                           </div>
                                       ))}
                                   </div>
                               </div>
                           ))}
                        </div>
                    )}
                </div>
            </Card>
        </div>
    );
};


const ParentDashboard: React.FC<ParentDashboardProps> = ({ stories, stats, onExit, onUnlockStory }) => {
    const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);
    const [selectedAttemptId, setSelectedAttemptId] = useState<string | null>(null);
    const [openSession, setOpenSession] = useState<ReadingSession | null>(null);
    const [storyToView, setStoryToView] = useState<Story | null>(null);


    useEffect(() => {
        try {
          const sessionStr = localStorage.getItem('activeReadingSession');
          if (sessionStr) {
            setOpenSession(JSON.parse(sessionStr));
          }
        } catch (error) {
          console.error("Could not load open session for parent dashboard", error);
        }
    }, []);

    const studentAverageWPM = calculateStudentAverageWPM(stats, stories);
    const openSessionStory = openSession ? stories.find(s => s.id === openSession.storyId) : null;

    const handleSelectStory = (storyId: string) => {
        setSelectedStoryId(storyId);
        setSelectedAttemptId(null);
    };

    const handleBackToStories = () => {
        setSelectedStoryId(null);
        setSelectedAttemptId(null);
    };

    const handleBackToAttempts = () => {
        setSelectedAttemptId(null);
    }

    const renderContent = () => {
        if (selectedStoryId) {
            const story = stories.find(s => s.id === selectedStoryId);
            const storyStats = stats[selectedStoryId];
            if (!story || !storyStats) return <p>Historia no encontrada.</p>;

            if (selectedAttemptId) {
                const attempt = storyStats.attempts.find(a => a.id === selectedAttemptId);
                if (!attempt) return <p>Intento no encontrado.</p>;
                return <AttemptDetails attempt={attempt} story={story} onBack={handleBackToAttempts} studentAverageWPM={studentAverageWPM} />;
            }

            return <StoryDetails story={story} storyStats={storyStats} onSelectAttempt={setSelectedAttemptId} onBack={handleBackToStories} />;
        }

        return (
             <div>
                <h3 className="text-xl font-bold mb-4">Progreso por Historia</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stories.map(story => {
                    const storyStats = stats[story.id];
                    const isLocked = storyStats?.locked;
                    return (
                        <div key={story.id} className="p-4 bg-white rounded-lg shadow-sm border">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-brand-purple pr-2">{story.title}</h4>
                                {isLocked && (
                                    <span className="text-xs font-semibold bg-red-100 text-red-700 px-2 py-1 rounded-full flex-shrink-0">Bloqueado</span>
                                )}
                            </div>
                            <p className="text-xs text-gray-500 mb-2">por {story.author}</p>
                            
                            {storyStats && storyStats.attempts.length > 0 ? (
                                <>
                                    <div className="text-sm space-y-1">
                                        <p><strong>Intentos:</strong> {storyStats.attempts.length}</p>
                                        <p><strong>Último puntaje:</strong> {storyStats.attempts[storyStats.attempts.length - 1].score}%</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        <Button onClick={() => handleSelectStory(story.id)} size="sm">
                                            Ver Progreso
                                        </Button>
                                         <Button onClick={() => setStoryToView(story)} size="sm" variant="secondary">
                                            Contenido
                                        </Button>
                                        {isLocked && (
                                            <Button onClick={() => onUnlockStory(story.id)} size="sm" variant="secondary">
                                                Desbloquear
                                            </Button>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <>
                                <p className="text-sm text-gray-500 italic mt-2">Sin intentos aún.</p>
                                 <div className="mt-3">
                                     <Button onClick={() => setStoryToView(story)} size="sm" variant="secondary">
                                        Ver Contenido
                                    </Button>
                                </div>
                                </>
                            )}
                        </div>
                    )
                })}
                </div>
             </div>
        );
    }

    return (
        <Card>
            {storyToView && <StoryViewerModal story={storyToView} onClose={() => setStoryToView(null)} />}
            <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-dark-text">Portal para Padres</h2>
                    <Button onClick={onExit} variant="secondary">Salir</Button>
                </div>
                {openSession && openSessionStory && (
                  <Card className="mb-6 bg-yellow-50 border-yellow-300 border">
                      <div className="p-4">
                          <h3 className="text-lg font-bold text-yellow-800">Sesión de Lectura Activa</h3>
                          <p className="text-yellow-700">
                              El estudiante está leyendo actualmente: <strong>{openSessionStory.title}</strong>.
                          </p>
                          <p className="text-sm text-yellow-600">
                              Comenzó el: {new Date(openSession.startTime).toLocaleString('es-AR')}
                          </p>
                      </div>
                  </Card>
                )}
                {renderContent()}
            </div>
        </Card>
    );
};

export default ParentDashboard;
