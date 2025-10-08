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
        return <p className="text-xs text-gray-500 mt-2">¡Sé el primero en leer esta historia!</p>;
    }

    const { attempts } = storyStats;
    const avgScore = attempts.reduce((sum, a) => sum + a.score, 0) / attempts.length;
    const avgReadingTime = attempts.reduce((sum, a) => sum + a.readingDuration, 0) / (attempts.length * 60000); // in minutes

    return (
        <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-600 grid grid-cols-3 gap-2 text-center">
            <div>
                <p className="font-bold">{attempts.length}</p>
                <p>Intentos</p>
            </div>
            <div>
                <p className="font-bold">{Math.round(avgScore)}%</p>
                <p>Puntaje</p>
            </div>
            <div>
                <p className="font-bold">{avgReadingTime.toFixed(1)} min</p>
                <p>T. Lectura</p>
            </div>
        </div>
    )
}

const StorySelection: React.FC<StorySelectionProps> = ({ stories, stats, onSelectStory, inProgressStoryId }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-dark-text mb-2">¡Elegí tu Aventura!</h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Elegí una historia para empezar. ¡Leé con atención y preparate para algunas preguntas para probar tu comprensión!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => {
          const storyStats = stats[story.id];
          const isLocked = storyStats?.locked;
          const isInProgress = story.id === inProgressStoryId;
          return (
            <Card 
              key={story.id} 
              onClick={() => onSelectStory(story.id)} 
              className={`cursor-pointer transform hover:scale-105 transition-transform duration-300 relative ${isLocked ? 'opacity-70' : ''}`}
            >
              {isLocked && (
                <div className="absolute top-2 right-2 bg-brand-orange text-white p-2 rounded-full z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              )}
              {isInProgress && !isLocked && (
                 <div className="absolute top-2 left-2 bg-brand-blue text-white px-3 py-1 rounded-full z-10 text-xs font-bold shadow-lg">
                   <span>CONTINUAR</span>
                 </div>
              )}
              <img src={story.coverImage} alt={story.title} className="w-full h-40 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-brand-purple">{story.title}</h3>
                <p className="text-gray-500 text-sm mb-2">por {story.author}</p>
                <div className="flex justify-between text-xs text-gray-600">
                  <span className="bg-brand-yellow/20 text-brand-orange font-semibold px-2 py-1 rounded-full">{story.wordCount} palabras</span>
                  <span className="bg-brand-blue/20 text-brand-blue font-semibold px-2 py-1 rounded-full">{story.level}</span>
                </div>
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
