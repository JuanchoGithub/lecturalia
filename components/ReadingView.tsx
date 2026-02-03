
import React, { useState, useEffect, useCallback } from 'react';
import { Story, ReadingSession } from '../types';
import Card from './ui/Card';
import Button from './ui/Button';
import { allDefinitions } from '../data/definitions';
import { speakText } from '../lib/gemini';

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
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [explanationPopup, setExplanationPopup] = useState<{
        word: string;
        explanation: string;
        position: { top: number; left: number };
        placement: 'top' | 'bottom';
    } | null>(null);
    const [storyDefinitions, setStoryDefinitions] = useState<{ [word: string]: { explanation: string } }>({});

    useEffect(() => {
        const definitions = allDefinitions[story.id] || {};
        setStoryDefinitions(definitions);
    }, [story.id]);

    const saveProgress = useCallback(() => {
        try {
            const sessionStr = localStorage.getItem('activeReadingSession');
            if (sessionStr && pages.length > 0) {
                const session: ReadingSession = JSON.parse(sessionStr);
                if(session.storyId !== story.id) return;
                const duration = Date.now() - session.pageStartTime;
                const existingPageIndex = session.pageTimings.findIndex(p => p.pageIndex === session.currentPageIndex);
                if (existingPageIndex > -1) {
                    session.pageTimings[existingPageIndex].duration += duration;
                } else {
                     if (session.currentPageIndex < pages.length) {
                        session.pageTimings.push({
                            pageIndex: session.currentPageIndex,
                            duration,
                            wordCount: countWords(pages[session.currentPageIndex]),
                        });
                    }
                }
                session.pageStartTime = Date.now();
                localStorage.setItem('activeReadingSession', JSON.stringify(session));
            }
        } catch (error) {
            console.error("Failed to save reading progress", error);
        }
    }, [pages, story.id]);

    useEffect(() => {
        const paginatedContent = paginateStory(story);
        setPages(paginatedContent);

        try {
            const sessionStr = localStorage.getItem('activeReadingSession');
            if (sessionStr) {
                const session: ReadingSession = JSON.parse(sessionStr);
                if (session.storyId === story.id && session.currentPageIndex < paginatedContent.length) {
                    setCurrentPageIndex(session.currentPageIndex);
                } else {
                    setCurrentPageIndex(0);
                }
            }
        } catch (error) {
            console.error("Failed to load session state", error)
        }

        window.addEventListener('beforeunload', saveProgress);
        return () => {
            saveProgress();
            window.removeEventListener('beforeunload', saveProgress);
        };
    }, [story, saveProgress]);
    
    useEffect(() => {
        setExplanationPopup(null);
    }, [currentPageIndex]);

    const updateSessionAndNavigate = (newPageIndex: number) => {
        try {
            const sessionStr = localStorage.getItem('activeReadingSession');
            if (sessionStr && pages.length > 0) {
                const session: ReadingSession = JSON.parse(sessionStr);
                const duration = Date.now() - session.pageStartTime;
                const wordCount = countWords(pages[currentPageIndex]);
                const existingIndex = session.pageTimings.findIndex(p => p.pageIndex === currentPageIndex);
                if (existingIndex > -1) {
                    session.pageTimings[existingIndex].duration += duration;
                } else {
                    session.pageTimings.push({ pageIndex: currentPageIndex, duration, wordCount });
                }
                session.currentPageIndex = newPageIndex;
                session.pageStartTime = Date.now();
                localStorage.setItem('activeReadingSession', JSON.stringify(session));
                setCurrentPageIndex(newPageIndex);
            }
        } catch (error) {
            console.error("Failed to update session on navigation", error);
        }
    };

    const handleNextPage = () => {
        if (currentPageIndex < pages.length - 1) {
            updateSessionAndNavigate(currentPageIndex + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPageIndex > 0) {
            updateSessionAndNavigate(currentPageIndex - 1);
        }
    };

    const handleFinish = () => {
        saveProgress(); 
        onFinishReading();
    };

    const handleSpeakPage = async () => {
        if (isSpeaking) return;
        setIsSpeaking(true);
        await speakText(pages[currentPageIndex]);
        setIsSpeaking(false);
    };

    const handleWordClick = (word: string, event: React.MouseEvent<HTMLSpanElement>) => {
        const lowerCaseWord = word.toLowerCase().replace(/[^a-záéíóúüñ]/g, '');
        if (storyDefinitions[lowerCaseWord]) {
            const rect = event.currentTarget.getBoundingClientRect();
            const spaceBelow = window.innerHeight - rect.bottom;
            const shouldPlaceAbove = spaceBelow < 150 && rect.top > 150;
            const topPosition = shouldPlaceAbove
                ? rect.top + window.scrollY - 8
                : rect.bottom + window.scrollY + 8;
            const leftPosition = rect.left + window.scrollX;

            setExplanationPopup({
                word: lowerCaseWord,
                explanation: storyDefinitions[lowerCaseWord].explanation,
                position: { top: topPosition, left: leftPosition },
                placement: shouldPlaceAbove ? 'top' : 'bottom',
            });
        }
    };

    const renderPageContent = () => {
        const pageText = pages[currentPageIndex];
        if (!isExplainMode) return pageText;
        const wordsAndSeparators = pageText.split(/([ \n.,;¡!¿?:—"“”()])/);
        return wordsAndSeparators.map((segment, index) => {
            const lowerCaseWord = segment.toLowerCase().replace(/[^a-záéíóúüñ]/g, '');
            if (storyDefinitions[lowerCaseWord]) {
                return (
                    <span 
                        key={index} 
                        className="bg-brand-yellow/50 cursor-pointer rounded px-1 py-0.5"
                        onClick={(e) => handleWordClick(segment, e)}
                    >
                        {segment}
                    </span>
                );
            }
            return segment;
        });
    };

    if (pages.length === 0) return <div>Cargando historia...</div>;

    const isFirstPage = currentPageIndex === 0;
    const isLastPage = currentPageIndex === pages.length - 1;

    return (
        <div className="max-w-4xl mx-auto">
             {explanationPopup && (
                <ExplanationPopup 
                    word={explanationPopup.word}
                    explanation={explanationPopup.explanation}
                    position={explanationPopup.position}
                    placement={explanationPopup.placement}
                    onClose={() => setExplanationPopup(null)}
                />
            )}
            <Card>
                <div className="p-6 md:p-10 relative">
                    <div className="absolute top-4 left-4 flex gap-2">
                        <Button onClick={() => setIsExplainMode(!isExplainMode)} variant={isExplainMode ? "primary" : "secondary"} size="sm">
                           {isExplainMode ? 'Dejar de Explicar' : 'Explicar Palabras'}
                        </Button>
                        <Button onClick={handleSpeakPage} variant="secondary" size="sm" disabled={isSpeaking}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                            </svg>
                            {isSpeaking ? 'Escuchando...' : 'Escuchar Página'}
                        </Button>
                    </div>
                    <div className="absolute top-4 right-4 text-sm font-semibold bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                        Página {currentPageIndex + 1} de {pages.length}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-purple mb-2 text-center mt-12">{story.title}</h2>
                    <p className="text-gray-500 mb-6 text-center">por {story.author}</p>
                    <div
                        className="prose prose-lg max-w-none text-dark-text text-justify min-h-[300px]"
                        style={{ whiteSpace: 'pre-wrap' }}
                    >
                        {renderPageContent()}
                    </div>
                </div>
            </Card>
            <div className={`mt-8 flex items-center ${isFirstPage ? 'justify-end' : 'justify-between'}`}>
                {!isFirstPage && (
                    <Button onClick={handlePrevPage} variant="secondary">
                        Anterior
                    </Button>
                )}

                {isLastPage ? (
                    <Button onClick={handleFinish} size="lg">
                        ¡Terminé de Leer!
                    </Button>
                ) : (
                    <Button onClick={handleNextPage} size="lg">
                        Siguiente
                    </Button>
                )}
            </div>
        </div>
    );
};

export default ReadingView;
