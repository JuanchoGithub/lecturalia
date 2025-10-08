import React, { useState, useEffect, useRef } from 'react';
import { Story, PageTiming } from '../types';
import Card from './ui/Card';
import Button from './ui/Button';

interface ReadingViewProps {
  story: Story;
  onFinishReading: (duration: number, pageTimings: PageTiming[]) => void;
}

const paginateStory = (content: string, paragraphsPerPage: number = 2): string[] => {
    const paragraphs = content.trim().split(/\n\s*\n/).filter(p => p.trim() !== '');
    const pages: string[] = [];
    for (let i = 0; i < paragraphs.length; i += paragraphsPerPage) {
        pages.push(paragraphs.slice(i, i + paragraphsPerPage).join('\n\n'));
    }
    return pages;
};

const countWords = (text: string): number => {
    return text.trim().split(/\s+/).length;
};

const ReadingView: React.FC<ReadingViewProps> = ({ story, onFinishReading }) => {
    const [pages, setPages] = useState<string[]>([]);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [pageTimings, setPageTimings] = useState<PageTiming[]>([]);
    
    const pageStartTimeRef = useRef<number>(0);
    const totalStartTimeRef = useRef<number>(Date.now());

    useEffect(() => {
        const paginatedContent = paginateStory(story.content);
        setPages(paginatedContent);
        pageStartTimeRef.current = Date.now();
    }, [story]);

    const recordPageTime = (pageIndex: number) => {
        const duration = Date.now() - pageStartTimeRef.current;
        const wordCount = countWords(pages[pageIndex]);
        setPageTimings(prev => {
            const existingIndex = prev.findIndex(pt => pt.pageIndex === pageIndex);
            if (existingIndex > -1) {
                const updated = [...prev];
                updated[existingIndex].duration += duration; // Accumulate time if they revisit
                return updated;
            }
            return [...prev, { pageIndex, duration, wordCount }];
        });
    };

    const handleNextPage = () => {
        recordPageTime(currentPageIndex);
        setCurrentPageIndex(prev => prev + 1);
        pageStartTimeRef.current = Date.now();
    };

    const handlePrevPage = () => {
        recordPageTime(currentPageIndex);
        setCurrentPageIndex(prev => prev - 1);
        pageStartTimeRef.current = Date.now();
    };

    const handleFinish = () => {
        recordPageTime(currentPageIndex);
        const totalDuration = Date.now() - totalStartTimeRef.current;
        // The pageTimings state might not be updated yet, so we manually add the last page's time
        const finalTimings = [...pageTimings];
        const lastPageTimingIndex = finalTimings.findIndex(p => p.pageIndex === currentPageIndex);
        const duration = Date.now() - pageStartTimeRef.current;
        const wordCount = countWords(pages[currentPageIndex]);

        if (lastPageTimingIndex > -1) {
            finalTimings[lastPageTimingIndex].duration += duration;
        } else {
            finalTimings.push({ pageIndex: currentPageIndex, duration, wordCount });
        }
        
        onFinishReading(totalDuration, finalTimings);
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