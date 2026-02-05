
import React from 'react';
import { Story, AllStoryStats } from '../types';
import Card from './ui/Card';

interface StorySelectionProps {
  stories: Story[];
  stats: AllStoryStats;
  onSelectStory: (storyId: string) => void;
  inProgressStoryId: string | null;
}

const StoryStatsDisplay: React.FC<{ storyStats: AllStoryStats[string] | undefined }> = ({ storyStats }) => {
    if (!storyStats || storyStats.attempts.length === 0) {
        return <p className="text-xs text-gray-400 mt-2 font-medium">✨ ¡Sé el primero en leer esta aventura!</p>;
    }

    const { attempts } = storyStats;
    const bestScore = Math.max(...attempts.map(a => a.score));

    return (
        <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Mejor:</span>
                <span className={`text-sm font-black ${bestScore >= 70 ? 'text-green-500' : 'text-brand-orange'}`}>{bestScore}%</span>
            </div>
            <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Intentos:</span>
                <span className="text-sm font-black text-brand-purple">{attempts.length}</span>
            </div>
        </div>
    )
}

const StorySelection: React.FC<StorySelectionProps> = ({ stories, stats, onSelectStory, inProgressStoryId }) => {
  return (
    <div className="text-center pb-20">
      <div className="mb-12">
        <h2 className="text-4xl sm:text-5xl font-black text-brand-purple tracking-tight mb-4">¡Biblioteca Mágica!</h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
          Elegí una historia para empezar tu misión. Leé con atención, usá el diccionario si lo necesitás y preparate para los desafíos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
        {stories.map((story) => {
          const storyStats = stats[story.id];
          const isLocked = storyStats?.locked;
          const isInProgress = story.id === inProgressStoryId;
          
          return (
            <Card 
              key={story.id} 
              onClick={() => onSelectStory(story.id)} 
              className={`group cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative bg-white border-2 border-transparent hover:border-brand-purple/20 ${isLocked ? 'opacity-90' : ''}`}
            >
              {isLocked && (
                <div className="absolute top-3 right-3 bg-brand-orange text-white p-2 rounded-full z-10 shadow-lg scale-90 group-hover:scale-100 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              )}
              
              {isInProgress && !isLocked && (
                 <div className="absolute top-3 left-3 bg-brand-blue text-white px-3 py-1 rounded-full z-10 text-[10px] font-black shadow-lg animate-pulse">
                   CONTINUAR
                 </div>
              )}

              <div className="h-48 overflow-hidden relative">
                <img 
                    src={story.coverImage} 
                    alt={story.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white text-xs font-bold uppercase tracking-widest">Ver aventura &rarr;</p>
                </div>
              </div>

              <div className="p-5 text-left">
                <div className="flex items-center justify-between mb-2">
                    <span className="bg-brand-yellow/20 text-brand-orange text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-tighter">
                        {story.wordCount} Palabras
                    </span>
                    <span className="text-brand-blue text-[10px] font-black uppercase tracking-tighter">
                        {story.level}
                    </span>
                </div>
                
                <h3 className="text-xl font-black text-dark-text leading-tight group-hover:text-brand-purple transition-colors mb-1">
                    {story.title}
                </h3>
                <p className="text-gray-400 text-xs font-bold uppercase mb-4 tracking-tighter">por {story.author}</p>
                
                <StoryStatsDisplay storyStats={storyStats} />
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  );
};

export default StorySelection;
