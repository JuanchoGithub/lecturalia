
import React from 'react';
import { Grade, Story } from '../types';
import Card from './ui/Card';

interface GradeSelectionProps {
  story: Story;
  onSelectGrade: (grade: Grade) => void;
}

const GradeSelection: React.FC<GradeSelectionProps> = ({ story, onSelectGrade }) => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in px-4 pt-4">
      <div className="text-center mb-10">
        <h2 className="text-gray-400 text-xs font-bold mb-1 uppercase tracking-widest">Aventura seleccionada</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-purple mb-6 leading-tight">
          {story.title}
        </h1>
        <div className="w-16 h-1 bg-brand-pink/30 mx-auto rounded-full"></div>
      </div>

      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-dark-text">¿En qué grado estás?</h3>
        <p className="text-gray-500 mt-2">Elegí tu nivel para empezar el desafío</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        <Card 
          onClick={() => onSelectGrade(Grade.THIRD)}
          className="p-8 cursor-pointer border-4 border-transparent hover:border-brand-blue hover:shadow-2xl transition-all group relative overflow-hidden bg-white"
        >
          <div className="absolute top-0 right-0 p-2 opacity-5 text-brand-blue">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </div>
          <div className="bg-brand-blue/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A2 2 0 013 15.382V6c0-1.1.9-2 2-2h14a2 2 0 012 2v9.382a2 2 0 01-1.553 1.894L15 20m-6 0l6-6m-6 6v-6" />
             </svg>
          </div>
          <h4 className="text-2xl font-bold text-brand-blue mb-1 text-center">3er Grado</h4>
          <p className="text-xs text-gray-400 mb-6 text-center font-bold tracking-widest uppercase">Nivel Explorador</p>
          <ul className="space-y-3 text-sm text-gray-600 border-t border-gray-50 pt-6">
            <li className="flex items-start gap-2">
              <span className="text-brand-blue font-bold">✓</span>
              <span>Pistas directas de la historia para encontrarlas rápido.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-blue font-bold">✓</span>
              <span>Preguntas sobre los personajes y qué pasó.</span>
            </li>
          </ul>
        </Card>

        <Card 
          onClick={() => onSelectGrade(Grade.FOURTH)}
          className="p-8 cursor-pointer border-4 border-transparent hover:border-brand-purple hover:shadow-2xl transition-all group relative overflow-hidden bg-white"
        >
          <div className="absolute top-0 right-0 p-2 opacity-5 text-brand-purple">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </div>
          <div className="bg-brand-purple/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
             </svg>
          </div>
          <h4 className="text-2xl font-bold text-brand-purple mb-1 text-center">4to Grado</h4>
          <p className="text-xs text-gray-400 mb-6 text-center font-bold tracking-widest uppercase">Nivel Detective</p>
          <ul className="space-y-3 text-sm text-gray-600 border-t border-gray-50 pt-6">
            <li className="flex items-start gap-2">
              <span className="text-brand-purple font-bold">🔍</span>
              <span>Pistas de razonamiento para usar la lógica.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-purple font-bold">🔍</span>
              <span>Preguntas sobre por qué los personajes hacen lo que hacen.</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default GradeSelection;
