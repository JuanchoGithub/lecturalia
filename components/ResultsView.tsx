import React from 'react';
import { Story, Attempt } from '../types';
import Card from './ui/Card';
import Button from './ui/Button';

interface ResultsViewProps {
  story: Story;
  attempt: Attempt;
  onRestart: () => void;
}

const ResultsView: React.FC<ResultsViewProps> = ({ story, onRestart }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <div className="p-6 md:p-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-brand-yellow mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          <h2 className="text-3xl font-bold text-brand-purple mb-4">¡Completaste la historia!</h2>
          <p className="text-lg text-gray-600 mb-8">¡Muy buen trabajo! Un adulto puede ver tus resultados en el Portal para Padres.</p>
        </div>
      </Card>
      <div className="mt-8 text-center">
        <Button onClick={onRestart} size="lg">
          Elegir otra Historia
        </Button>
      </div>
    </div>
  );
};

export default ResultsView;
