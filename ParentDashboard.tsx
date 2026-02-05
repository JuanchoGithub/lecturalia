import React, { useState } from 'react';
import { AllStoryStats, Story, Attempt, QuestionCategory } from '../types';
import Card from './ui/Card';
import Button from './ui/Button';

interface ParentDashboardProps {
  stories: Story[];
  stats: AllStoryStats;
  onExit: () => void;
  onUnlockStory: (storyId: string) => void;
}

const formatTime = (ms: number) => {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  if (minutes > 0) {
    return `${minutes}m ${seconds % 60}s`;
  }
  return `${seconds}s`;
};

const calculateWPM = (wordCount: number, durationMs: number) => {
  if (durationMs === 0) return 0;
  const minutes = durationMs / 60000;
  return Math.round(wordCount / minutes);
};

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

const AttemptDetail: React.FC<{ attempt: Attempt; story: Story; onBack: () => void }> = ({ attempt, story, onBack }) => {
  const [expandedPages, setExpandedPages] = useState<Set<number>>(new Set());
  const [showSummary, setShowSummary] = useState(false);
  
  const totalWords = story.wordCount;
  const wpm = calculateWPM(totalWords, attempt.readingDuration);
  const pages = paginateStory(story);

  const togglePage = (idx: number) => {
    const newSet = new Set(expandedPages);
    if (newSet.has(idx)) newSet.delete(idx);
    else newSet.add(idx);
    setExpandedPages(newSet);
  };

  return (
    <div className="animate-fade-in space-y-8 pb-20">
      <div className="flex items-center gap-4">
        <Button onClick={onBack} variant="secondary" size="sm">&larr; Volver</Button>
        <h3 className="text-2xl font-bold text-brand-purple">Reporte: {story.title}</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card className="p-4 border-b-4 border-brand-blue bg-white">
          <p className="text-xs font-bold text-gray-400 uppercase">Puntaje Total</p>
          <p className="text-3xl font-black text-brand-blue">{attempt.score}%</p>
        </Card>
        <Card className="p-4 border-b-4 border-brand-purple bg-white">
          <p className="text-xs font-bold text-gray-400 uppercase">Velocidad Promedio</p>
          <p className="text-3xl font-black text-brand-purple">{wpm} <span className="text-sm font-normal">ppm</span></p>
        </Card>
        <Card className="p-4 border-b-4 border-brand-pink bg-white">
          <p className="text-xs font-bold text-gray-400 uppercase">Tiempo Lectura</p>
          <p className="text-3xl font-black text-brand-pink">{formatTime(attempt.readingDuration)}</p>
        </Card>
        <Card className="p-4 border-b-4 border-brand-orange bg-white">
          <p className="text-xs font-bold text-gray-400 uppercase">Nivel</p>
          <p className="text-3xl font-black text-brand-orange">{attempt.grade}° <span className="text-sm font-normal">Grado</span></p>
        </Card>
      </div>

      <Card className="p-6 bg-white border border-gray-100 shadow-sm">
        <h4 className="text-lg font-bold mb-6 flex items-center gap-2 text-dark-text">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-purple" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 16c1.255 0 2.443-.29 3.5-.804V4.804zM14.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 0114.5 16c1.255 0 2.443-.29 3.5-.804v-10A7.968 7.968 0 0014.5 4z" />
          </svg>
          Análisis de Fluidez por Página
        </h4>
        <div className="space-y-3">
          {attempt.pageTimings.map((pt, i) => {
            const pageWpm = calculateWPM(pt.wordCount, pt.duration);
            const isExpanded = expandedPages.has(i);
            
            return (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                <button 
                  onClick={() => togglePage(i)}
                  className="w-full flex flex-wrap items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center font-bold text-xs">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-dark-text">Página {i + 1}</p>
                      <p className="text-[10px] text-gray-400 uppercase font-black">{pt.wordCount} palabras</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-xs font-bold text-brand-purple">{pageWpm} ppm</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">{formatTime(pt.duration)}</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-gray-300 transition-transform ${isExpanded ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                
                {isExpanded && (
                  <div className="p-4 bg-gray-50 border-t border-gray-100 animate-slide-down">
                    <p className="text-sm text-gray-600 leading-relaxed italic whitespace-pre-wrap">
                      {pages[i] || 'Texto no disponible'}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Card>

      <div className="space-y-4">
        <h4 className="text-lg font-bold flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-orange" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
          </svg>
          Auditoría de Preguntas
        </h4>
        
        {attempt.questions.map((q, idx) => {
          const userAnswer = attempt.answers.find(a => a.questionId === q.id);
          const timing = attempt.answerTimings.find(t => t.questionId === q.id);
          const shuffledOptions = attempt.shuffledOptionsPerQuestion[q.id] || q.options;
          const isCorrect = userAnswer?.answer === q.correctAnswer;

          return (
            <Card key={q.id} className={`p-6 border-l-8 ${isCorrect ? 'border-green-400' : 'border-red-400 shadow-sm'}`}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                    {q.category}
                  </span>
                  <p className="text-lg font-bold text-dark-text mt-2">{idx + 1}. {q.questionText}</p>
                </div>
                <span className="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded whitespace-nowrap">
                  {formatTime(timing?.duration || 0)} reflexión
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {shuffledOptions.map((opt, i) => {
                  const isStudentChoice = userAnswer?.answer === opt;
                  const isRealCorrect = q.correctAnswer === opt;
                  
                  let statusClass = "bg-gray-50 text-gray-500 border-gray-100";
                  if (isRealCorrect) statusClass = "bg-green-100 text-green-700 border-green-200 font-bold";
                  if (isStudentChoice && !isRealCorrect) statusClass = "bg-red-100 text-red-700 border-red-200 font-bold";

                  return (
                    <div key={i} className={`p-3 text-sm rounded-xl border-2 flex items-center justify-between ${statusClass}`}>
                      <span>{opt}</span>
                      {isStudentChoice && (
                        <span className="text-[8px] uppercase font-black px-1.5 py-0.5 bg-white/50 rounded shadow-sm border border-black/5">
                          Elegida
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>
          );
        })}
      </div>

      {attempt.studentSummary ? (
        <div className="pt-6">
          <button 
            onClick={() => setShowSummary(!showSummary)}
            className="w-full flex items-center justify-between p-6 bg-brand-purple/10 border border-brand-purple/20 rounded-2xl group transition-all"
          >
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <span className="text-xl font-bold text-brand-purple">Resumen y Evaluación IA</span>
            </div>
            <span className="text-brand-purple font-black text-xs uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-brand-purple/20 group-hover:bg-brand-purple group-hover:text-white transition-colors">
              {showSummary ? 'Ocultar' : 'Ver Detalle'}
            </span>
          </button>

          {showSummary && (
            <div className="mt-4 space-y-4 animate-slide-down">
              <Card className="p-6 bg-white border border-brand-purple/10">
                <div className="mb-6">
                  <p className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">Escrito por el estudiante:</p>
                  <div className="bg-gray-50 p-5 rounded-2xl text-gray-700 italic border-l-4 border-brand-purple/30 text-lg leading-relaxed">
                    "{attempt.studentSummary}"
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">Feedback Pedagógico (IA):</p>
                  <p className="text-gray-800 font-medium leading-relaxed bg-brand-blue/5 p-5 rounded-2xl border border-brand-blue/10">
                    {attempt.summaryFeedback}
                  </p>
                </div>
              </Card>
            </div>
          )}
        </div>
      ) : (
        <p className="text-center text-gray-400 text-xs italic py-10 border-t border-dashed border-gray-200">
          El estudiante decidió saltar el paso del resumen para esta historia.
        </p>
      )}
    </div>
  );
};

const ParentDashboard: React.FC<ParentDashboardProps> = ({ stories, stats, onExit, onUnlockStory }) => {
    const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);
    const [selectedAttemptId, setSelectedAttemptId] = useState<string | null>(null);

    const activeStory = stories.find(s => s.id === selectedStoryId);
    const activeStats = selectedStoryId ? stats[selectedStoryId] : null;

    if (selectedStoryId && selectedAttemptId && activeStory && activeStats) {
      const attempt = activeStats.attempts.find(a => a.id === selectedAttemptId);
      if (attempt) {
        return (
          <div className="max-w-5xl mx-auto px-4 pt-6">
            <AttemptDetail 
              attempt={attempt} 
              story={activeStory} 
              onBack={() => setSelectedAttemptId(null)} 
            />
          </div>
        );
      }
    }

    if (selectedStoryId && activeStory && activeStats) {
      return (
        <div className="max-w-4xl mx-auto px-4 pt-6 animate-fade-in">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-4">
               <Button onClick={() => setSelectedStoryId(null)} variant="secondary" size="sm">&larr; Volver</Button>
               <h3 className="text-2xl font-bold text-brand-purple">{activeStory.title}</h3>
            </div>
            <Button onClick={() => onUnlockStory(activeStory.id)} size="sm" variant="secondary" disabled={!activeStats.locked}>
              {activeStats.locked ? '🔓 Desbloquear Re-evaluación' : '✓ Desbloqueada'}
            </Button>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Historial de Intentos</h4>
            {activeStats.attempts.length === 0 ? (
              <p className="text-center py-20 text-gray-400 italic bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                No hay intentos registrados para esta historia todavía.
              </p>
            ) : (
              activeStats.attempts.slice().reverse().map(a => (
                <Card 
                  key={a.id} 
                  onClick={() => setSelectedAttemptId(a.id)}
                  className="p-5 bg-white border border-gray-100 hover:border-brand-purple cursor-pointer transition-all flex items-center justify-between shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-lg ${a.score >= 70 ? 'bg-green-100 text-green-600' : 'bg-brand-orange/10 text-brand-orange'}`}>
                      {a.score}%
                    </div>
                    <div>
                      <p className="font-bold text-dark-text">{new Date(parseInt(a.id)).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Evaluación de {a.grade}° Grado</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Promedio</p>
                      <p className="text-sm font-black text-brand-purple">{calculateWPM(activeStory.wordCount, a.readingDuration)} ppm</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 pt-6 animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                <div>
                  <h2 className="text-4xl font-black text-brand-purple tracking-tight">Portal para Padres</h2>
                  <p className="text-gray-500 font-medium">Seguimiento pedagógico y auditoría de lecturas</p>
                </div>
                <div className="flex gap-3">
                  <Button onClick={onExit} variant="secondary" size="sm">Cerrar Sesión</Button>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stories.map(story => {
                    const storyStats = stats[story.id];
                    if (!storyStats) return null;
                    const lastAttempt = storyStats.attempts[storyStats.attempts.length - 1];

                    return (
                        <Card 
                          key={story.id} 
                          onClick={() => setSelectedStoryId(story.id)}
                          className="p-6 bg-white border border-gray-100 hover:shadow-xl cursor-pointer transition-all relative group flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-4">
                              <h4 className="font-bold text-xl text-brand-purple group-hover:text-brand-pink transition-colors">{story.title}</h4>
                              {storyStats.locked && (
                                <span className="bg-brand-orange/10 text-brand-orange text-[10px] font-black px-2 py-0.5 rounded uppercase">Completada</span>
                              )}
                            </div>
                            
                            <div className="flex items-end justify-between mt-auto">
                              <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Intentos</p>
                                <p className="text-2xl font-black text-dark-text">{storyStats.attempts.length}</p>
                              </div>
                              {lastAttempt && (
                                <div className="text-right">
                                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Último Puntaje</p>
                                  <p className={`text-2xl font-black ${lastAttempt.score >= 70 ? 'text-green-500' : 'text-brand-orange'}`}>{lastAttempt.score}%</p>
                                </div>
                              )}
                            </div>
                            
                            <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-brand-blue font-bold text-sm">
                              Ver Detalle Pedagógico
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7-7 7" />
                              </svg>
                            </div>
                        </Card>
                    );
                })}

                {stories.filter(s => stats[s.id]).length === 0 && (
                   <div className="col-span-full py-32 text-center">
                      <div className="bg-white p-10 rounded-3xl border-2 border-dashed border-gray-200 inline-block max-w-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-200 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <h4 className="text-xl font-bold text-gray-400">Sin datos de lectura</h4>
                        <p className="text-gray-400 mt-2">Los resultados aparecerán aquí una vez que los estudiantes completen sus aventuras.</p>
                      </div>
                   </div>
                )}
            </div>
        </div>
    );
};

export default ParentDashboard;