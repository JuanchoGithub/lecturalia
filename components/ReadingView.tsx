import React, { useState, useEffect, useCallback } from 'react';
import { Story, ReadingSession } from '../types';
import Card from './ui/Card';
import Button from './ui/Button';

interface ReadingViewProps {
  story: Story;
  onFinishReading: () => void;
}

const paginateStory = (story: Story): string[] => {
    const content = story.content;
    const isAdelaBasch = story.author === 'Adela Basch';

    // Las historias de Adela Basch usan saltos de línea simples para los párrafos. Otras usan dobles.
    // También se ajustan los párrafos por página para una mejor legibilidad.
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

    const saveProgress = useCallback(() => {
        try {
            const sessionStr = localStorage.getItem('activeReadingSession');
            if (sessionStr && pages.length > 0) {
                const session: ReadingSession = JSON.parse(sessionStr);
                
                // Solo guardar si la sesión pertenece a la historia actual
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
                session.pageStartTime = Date.now(); // Reiniciar para la siguiente interacción/recarga
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
                // Asegurar que el índice de página de la sesión sea válido para el contenido paginado
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

    if (pages.length === 0) {
        return <div>Cargando historia...</div>;
    }

    const isFirstPage = currentPageIndex === 0;
    const isLastPage = currentPageIndex === pages.length - 1;

    return (
        <div className="max-w-4xl mx-auto">
            <Card>
                <div className="p-6 md:p-10 relative">
                    <div className="absolute top-4 right-4 text-sm font-semibold bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                        Página {currentPageIndex + 1} de {pages.length}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-purple mb-2 text-center">{story.title}</h2>
                    <p className="text-gray-500 mb-6 text-center">por {story.author}</p>
                    <div
                        className="prose prose-lg max-w-none text-dark-text text-justify min-h-[300px]"
                        style={{ whiteSpace: 'pre-wrap' }}
                    >
                        {pages[currentPageIndex]}
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