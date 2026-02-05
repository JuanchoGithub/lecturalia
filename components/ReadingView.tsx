
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Story, ReadingSession } from '../types';
import Card from './ui/Card';
import Button from './ui/Button';
import { allDefinitions } from '../data/definitions';
import { getGeminiAudio, decodeAudioData } from '../lib/gemini';

interface ReadingViewProps {
  story: Story;
  onFinishReading: () => void;
}

interface ExplanationPopupProps {
    word: string;
    explanation: string;
    position: { top: number; left: number };
    placement: 'top' | 'bottom';
    onClose: () => void;
}

const ExplanationPopup: React.FC<ExplanationPopupProps> = ({ word, explanation, position, placement, onClose }) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const popupElement = document.getElementById('explanation-popup');
            if (popupElement && !popupElement.contains(event.target as Node)) {
                onClose();
            }
        };
        setTimeout(() => document.addEventListener('mousedown', handleClickOutside), 10);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const adjustedLeft = Math.max(10, Math.min(position.left, window.innerWidth - 300));
    const transformStyle = placement === 'top' ? { transform: 'translateY(-100%)' } : {};

    return (
        <div 
            id="explanation-popup"
            className="absolute z-20 bg-white p-4 rounded-lg shadow-xl border border-gray-200 w-72 animate-fade-in"
            style={{ top: position.top, left: adjustedLeft, ...transformStyle }}
            onClick={(e) => e.stopPropagation()}
        >
            <h4 className="font-bold text-lg text-brand-purple mb-2 capitalize">{word}</h4>
            <p className="text-sm text-dark-text whitespace-pre-wrap">{explanation}</p>
            <button onClick={onClose} className="absolute top-1 right-2 text-gray-400 hover:text-gray-800 text-2xl font-bold">&times;</button>
        </div>
    );
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

const countWords = (text: string): number => {
    if (!text) return 0;
    return text.trim().split(/\s+/).length;
};

const ReadingView: React.FC<ReadingViewProps> = ({ story, onFinishReading }) => {
    const [pages, setPages] = useState<string[]>([]);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [isExplainMode, setIsExplainMode] = useState(false);
    
    // Audio States
    const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);
    const [isPlayingAudio, setIsPlayingAudio] = useState(false);
    const [audioProgress, setAudioProgress] = useState(0);
    const audioContextRef = useRef<AudioContext | null>(null);
    const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);
    const startTimeRef = useRef<number>(0);
    const durationRef = useRef<number>(0);
    const progressIntervalRef = useRef<number | null>(null);

    const [explanationPopup, setExplanationPopup] = useState<{
        word: string;
        explanation: string;
        position: { top: number; left: number };
        placement: 'top' | 'bottom';
    } | null>(null);
    const [storyDefinitions, setStoryDefinitions] = useState<{ [word: string]: { explanation: string } }>({});

    useEffect(() => {
        const paginated = paginateStory(story);
        setPages(paginated);
        setStoryDefinitions(allDefinitions[story.id] || {});

        const sessionStr = localStorage.getItem('activeReadingSession');
        if (sessionStr) {
            try {
                const session: ReadingSession = JSON.parse(sessionStr);
                if (session.storyId === story.id) {
                    setCurrentPageIndex(session.currentPageIndex);
                }
            } catch (e) {
                console.error("Error parsing reading session", e);
            }
        }
    }, [story]);

    const stopAudio = useCallback(() => {
        if (sourceNodeRef.current) {
            try { sourceNodeRef.current.stop(); } catch(e) {}
            sourceNodeRef.current = null;
        }
        if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
            progressIntervalRef.current = null;
        }
        setIsPlayingAudio(false);
        setAudioProgress(0);
    }, []);

    const playAudio = async () => {
        if (isPlayingAudio) {
            stopAudio();
            return;
        }

        const textToSpeak = pages[currentPageIndex];
        setIsGeneratingAudio(true);
        const base64Audio = await getGeminiAudio(textToSpeak);
        setIsGeneratingAudio(false);

        if (!base64Audio) return;

        if (!audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        }

        const audioData = Uint8Array.from(atob(base64Audio), c => c.charCodeAt(0));
        const audioBuffer = await decodeAudioData(audioData, audioContextRef.current);

        stopAudio();
        const source = audioContextRef.current.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContextRef.current.destination);
        
        durationRef.current = audioBuffer.duration;
        startTimeRef.current = audioContextRef.current.currentTime;
        
        source.onended = () => {
            setIsPlayingAudio(false);
            setAudioProgress(0);
            if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        };

        source.start();
        sourceNodeRef.current = source;
        setIsPlayingAudio(true);

        progressIntervalRef.current = window.setInterval(() => {
            if (audioContextRef.current) {
                const elapsed = audioContextRef.current.currentTime - startTimeRef.current;
                setAudioProgress(Math.min((elapsed / durationRef.current) * 100, 100));
            }
        }, 100);
    };

    const updateSession = useCallback((index: number) => {
        const sessionStr = localStorage.getItem('activeReadingSession');
        if (sessionStr) {
            try {
                const session: ReadingSession = JSON.parse(sessionStr);
                const now = Date.now();
                const duration = now - (session.pageStartTime || session.startTime);
                
                const newTiming = {
                    pageIndex: currentPageIndex,
                    duration,
                    wordCount: countWords(pages[currentPageIndex])
                };

                const updatedSession: ReadingSession = {
                    ...session,
                    currentPageIndex: index,
                    pageStartTime: now,
                    pageTimings: [...(session.pageTimings || []), newTiming]
                };
                localStorage.setItem('activeReadingSession', JSON.stringify(updatedSession));
            } catch (e) {
                console.error("Error updating reading session", e);
            }
        }
    }, [currentPageIndex, pages]);

    const handleNextPage = () => {
        stopAudio();
        if (currentPageIndex < pages.length - 1) {
            updateSession(currentPageIndex + 1);
            setCurrentPageIndex(prev => prev + 1);
            window.scrollTo(0, 0);
        } else {
            updateSession(currentPageIndex);
            onFinishReading();
        }
    };

    const handlePrevPage = () => {
        stopAudio();
        if (currentPageIndex > 0) {
            setCurrentPageIndex(prev => prev - 1);
            window.scrollTo(0, 0);
        }
    };

    const handleWordClick = (event: React.MouseEvent, word: string) => {
        if (!isExplainMode) return;

        const cleanWord = word.toLowerCase().replace(/[.,!?;:()]/g, '');
        const def = storyDefinitions[cleanWord];

        if (def) {
            const rect = (event.target as HTMLElement).getBoundingClientRect();
            const placement = rect.top > window.innerHeight / 2 ? 'top' : 'bottom';
            const top = placement === 'top' ? rect.top + window.scrollY - 10 : rect.bottom + window.scrollY + 10;
            
            setExplanationPopup({
                word: cleanWord,
                explanation: def.explanation,
                position: { top, left: rect.left },
                placement
            });
        }
    };

    const renderTextWithClicks = (text: string) => {
        return text.split(/(\s+)/).map((part, i) => {
            if (/\s+/.test(part)) return part;
            const cleanWord = part.toLowerCase().replace(/[.,!?;:()]/g, '');
            const hasDefinition = !!storyDefinitions[cleanWord];
            
            return (
                <span 
                    key={i}
                    onClick={(e) => handleWordClick(e, part)}
                    className={`${isExplainMode && hasDefinition ? 'bg-brand-yellow/30 border-b-2 border-brand-orange cursor-help' : ''} transition-colors px-0.5 rounded`}
                >
                    {part}
                </span>
            );
        });
    };

    if (pages.length === 0) return null;

    return (
        <div className="max-w-3xl mx-auto pb-20 animate-fade-in relative">
            {explanationPopup && (
                <ExplanationPopup 
                    {...explanationPopup} 
                    onClose={() => setExplanationPopup(null)} 
                />
            )}

            <Card className="p-8 md:p-12 mb-8 min-h-[400px] border-t-8 border-brand-purple">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-100 pb-6 gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-brand-purple">{story.title}</h2>
                        <p className="text-gray-500 text-sm italic">por {story.author}</p>
                    </div>
                    <div className="flex gap-3">
                        <button 
                            onClick={playAudio}
                            disabled={isGeneratingAudio}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-md transition-all font-bold text-sm ${isPlayingAudio ? 'bg-brand-pink text-white animate-pulse' : 'bg-white text-brand-pink border-2 border-brand-pink hover:bg-brand-pink/5'}`}
                        >
                            {isGeneratingAudio ? (
                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : isPlayingAudio ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                </svg>
                            )}
                            <span>{isPlayingAudio ? 'Parar' : 'Leer en voz alta'}</span>
                        </button>
                        <button 
                            onClick={() => setIsExplainMode(!isExplainMode)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-md transition-all font-bold text-sm ${isExplainMode ? 'bg-brand-yellow text-brand-orange' : 'bg-white text-brand-orange border-2 border-brand-orange hover:bg-brand-yellow/5'}`}
                            title="Modo Diccionario"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <span>Diccionario</span>
                        </button>
                    </div>
                </div>

                <div className="text-xl md:text-2xl text-dark-text leading-relaxed whitespace-pre-wrap font-serif">
                    {renderTextWithClicks(pages[currentPageIndex])}
                </div>

                {isPlayingAudio && (
                    <div className="mt-8 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-brand-pink transition-all duration-100" 
                            style={{ width: `${audioProgress}%` }}
                        ></div>
                    </div>
                )}
            </Card>

            <div className="flex justify-between items-center mt-6">
                <Button variant="secondary" onClick={handlePrevPage} disabled={currentPageIndex === 0}>
                    &larr; Anterior
                </Button>
                <div className="text-sm font-bold text-gray-400">
                    Página {currentPageIndex + 1} de {pages.length}
                </div>
                <Button onClick={handleNextPage}>
                    {currentPageIndex === pages.length - 1 ? '¡Terminar!' : 'Siguiente \u2192'}
                </Button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-4 bg-brand-blue/10 p-4 rounded-2xl border border-brand-blue/20">
                <div className="p-2 bg-white rounded-full text-brand-blue">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                </div>
                <p className="text-sm text-brand-blue font-medium leading-tight">
                    {isExplainMode 
                        ? "¡Modo Diccionario activado! Toca las palabras resaltadas para ver qué significan."
                        : "¡Leé tranquilo! Si encontrás una palabra difícil, activá el botón de Diccionario arriba."}
                </p>
            </div>
        </div>
    );
};

export default ReadingView;
