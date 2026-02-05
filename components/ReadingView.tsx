
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

    const adjustedLeft = Math.max(10, Math.min(position.left, window.innerWidth - 320));
    const transformStyle = placement === 'top' ? { transform: 'translateY(-100%)' } : {};

    return (
        <div 
            id="explanation-popup"
            className="fixed z-50 bg-white p-6 rounded-3xl shadow-2xl border-2 border-brand-yellow w-[300px] animate-slide-up"
            style={{ top: position.top, left: adjustedLeft, ...transformStyle }}
            onClick={(e) => e.stopPropagation()}
        >
            <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-orange">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 16c1.255 0 2.443-.29 3.5-.804V4.804zM14.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 0114.5 16c1.255 0 2.443-.29 3.5-.804v-10A7.968 7.968 0 0014.5 4z" />
                    </svg>
                </div>
                <h4 className="font-black text-xl text-brand-purple capitalize tracking-tighter">{word}</h4>
            </div>
            <p className="text-gray-600 leading-relaxed font-medium">{explanation}</p>
            <button onClick={onClose} className="absolute -top-3 -right-3 bg-white border-2 border-gray-100 text-gray-400 hover:text-brand-pink rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-colors font-black text-2xl">&times;</button>
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
    const [isAudioPaused, setIsAudioPaused] = useState(false);
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
        if (audioContextRef.current) {
            // Ensure we resume before closing/ignoring to avoid issues with browser audio state
            audioContextRef.current.resume().catch(() => {});
        }
        if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
            progressIntervalRef.current = null;
        }
        setIsPlayingAudio(false);
        setIsAudioPaused(false);
        setAudioProgress(0);
    }, []);

    const playAudio = async () => {
        // 1. If currently playing -> Suspend (Pause)
        if (isPlayingAudio && !isAudioPaused) {
            if (audioContextRef.current) {
                await audioContextRef.current.suspend();
                setIsAudioPaused(true);
            }
            return;
        }

        // 2. If currently paused -> Resume
        if (isAudioPaused) {
            if (audioContextRef.current) {
                await audioContextRef.current.resume();
                setIsAudioPaused(false);
            }
            return;
        }

        // 3. Not playing at all -> Generate and Start
        const textToSpeak = pages[currentPageIndex];
        setIsGeneratingAudio(true);
        const base64Audio = await getGeminiAudio(textToSpeak);
        setIsGeneratingAudio(false);

        if (!base64Audio) return;

        if (!audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        } else {
            // Make sure the existing context is active
            await audioContextRef.current.resume();
        }

        const audioData = Uint8Array.from(atob(base64Audio), c => c.charCodeAt(0));
        const audioBuffer = await decodeAudioData(audioData, audioContextRef.current);

        // Reset any previous node
        if (sourceNodeRef.current) {
            try { sourceNodeRef.current.stop(); } catch(e) {}
        }
        
        const source = audioContextRef.current.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContextRef.current.destination);
        
        durationRef.current = audioBuffer.duration;
        startTimeRef.current = audioContextRef.current.currentTime;
        
        source.onended = () => {
            // Only reset if it's not a manual pause
            if (audioContextRef.current?.state !== 'suspended') {
                setIsPlayingAudio(false);
                setIsAudioPaused(false);
                setAudioProgress(0);
                if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
            }
        };

        source.start();
        sourceNodeRef.current = source;
        setIsPlayingAudio(true);
        setIsAudioPaused(false);

        if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = window.setInterval(() => {
            if (audioContextRef.current && audioContextRef.current.state === 'running') {
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
            const top = placement === 'top' ? rect.top + window.scrollY - 15 : rect.bottom + window.scrollY + 15;
            
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
                    className={`${isExplainMode && hasDefinition ? 'bg-brand-yellow/30 border-b-4 border-brand-orange cursor-help' : ''} transition-all px-0.5 rounded-sm`}
                >
                    {part}
                </span>
            );
        });
    };

    if (pages.length === 0) return null;

    const audioButtonLabel = isGeneratingAudio 
        ? 'Cargando...' 
        : (isPlayingAudio && !isAudioPaused) 
            ? 'Pausar' 
            : isAudioPaused 
                ? 'Seguir' 
                : 'Escuchar';

    return (
        <div className="max-w-4xl mx-auto pb-32 px-4 animate-fade-in relative">
            {explanationPopup && (
                <ExplanationPopup 
                    {...explanationPopup} 
                    onClose={() => setExplanationPopup(null)} 
                />
            )}

            <Card className="p-8 md:p-16 mb-12 min-h-[500px] border-t-[12px] border-brand-purple shadow-2xl bg-white rounded-[40px]">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b-2 border-gray-50 pb-8 gap-6">
                    <div>
                        <h2 className="text-3xl font-black text-brand-purple tracking-tight leading-none mb-2">{story.title}</h2>
                        <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">Escrito por {story.author}</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <button 
                            onClick={playAudio}
                            disabled={isGeneratingAudio}
                            className={`flex items-center gap-3 px-6 py-3 rounded-2xl shadow-lg transition-all font-black text-sm uppercase tracking-tighter ${isPlayingAudio ? 'bg-brand-pink text-white ring-4 ring-brand-pink/20' : 'bg-white text-brand-pink border-2 border-brand-pink hover:bg-brand-pink hover:text-white'}`}
                        >
                            {isGeneratingAudio ? (
                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : (isPlayingAudio && !isAudioPaused) ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 9v6m4-6v6" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            )}
                            <span>{audioButtonLabel}</span>
                        </button>
                        <button 
                            onClick={() => setIsExplainMode(!isExplainMode)}
                            className={`flex items-center gap-3 px-6 py-3 rounded-2xl shadow-lg transition-all font-black text-sm uppercase tracking-tighter ${isExplainMode ? 'bg-brand-yellow text-brand-orange ring-4 ring-brand-yellow/20' : 'bg-white text-brand-orange border-2 border-brand-orange hover:bg-brand-yellow hover:text-brand-orange'}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <span>Diccionario</span>
                        </button>
                    </div>
                </div>

                <div className="text-2xl md:text-3xl text-dark-text leading-[1.7] whitespace-pre-wrap font-serif selection:bg-brand-purple/20">
                    {renderTextWithClicks(pages[currentPageIndex])}
                </div>

                {isPlayingAudio && (
                    <div className="mt-12">
                        <div className="flex justify-between text-[10px] font-black text-brand-pink uppercase tracking-widest mb-2">
                            <span>{isAudioPaused ? 'Audio pausado' : 'Reproduciendo página...'}</span>
                            <span>{Math.round(audioProgress)}%</span>
                        </div>
                        <div className="h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                            <div 
                                className={`h-full bg-gradient-to-r from-brand-pink to-brand-purple transition-all duration-300 ease-out ${isAudioPaused ? 'opacity-50' : 'opacity-100'}`} 
                                style={{ width: `${audioProgress}%` }}
                            ></div>
                        </div>
                    </div>
                )}
            </Card>

            <div className="flex justify-between items-center gap-6">
                <Button variant="secondary" onClick={handlePrevPage} disabled={currentPageIndex === 0} className="flex-1 max-w-[200px]">
                    &larr; Anterior
                </Button>
                <div className="text-lg font-black text-gray-400 bg-white px-6 py-2 rounded-full shadow-sm border border-gray-100">
                    {currentPageIndex + 1} / {pages.length}
                </div>
                <Button onClick={handleNextPage} className="flex-1 max-w-[200px]">
                    {currentPageIndex === pages.length - 1 ? '¡Listo!' : 'Siguiente \u2192'}
                </Button>
            </div>
        </div>
    );
};

export default ReadingView;
