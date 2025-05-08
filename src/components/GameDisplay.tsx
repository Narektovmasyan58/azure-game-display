
import React from 'react';
import { GameFilters } from './FilterPanel';

interface GameDisplayProps {
  filters: GameFilters | null;
  isLoading: boolean;
}

const GameDisplay: React.FC<GameDisplayProps> = ({ filters, isLoading }) => {
  // URL would be constructed based on filters in a real application
  const getGameUrl = () => {
    if (!filters || !filters.game) return '';
    
    // In a real app, you would construct the URL based on all filters
    const baseUrl = 'https://demo.example.com/games/';
    const gameName = filters.game.toLowerCase().replace(' ', '-');
    const params = new URLSearchParams();
    
    if (filters.player) params.append('player', filters.player);
    if (filters.mode) params.append('mode', filters.mode.toLowerCase());
    if (filters.currency) params.append('currency', filters.currency);
    if (filters.devMode) params.append('dev', 'true');
    
    return `${baseUrl}${gameName}?${params.toString()}`;
  };

  const renderPlaceholder = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-16 h-16 border-4 border-gaming-200 border-t-gaming-600 rounded-full animate-spin mb-4"></div>
          <p className="text-gaming-600 font-medium">Loading game...</p>
        </div>
      );
    }
    
    return (
      <div className="flex flex-col items-center justify-center h-full text-center px-4">
        <div className="bg-gaming-100 rounded-full p-6 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gaming-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gaming-800 mb-2">Select Game Options</h3>
        <p className="text-gaming-600 max-w-md">
          Use the filter panel above to select your preferred game settings, then click "Apply Filters" to load the game.
        </p>
      </div>
    );
  };

  if (!filters?.game || isLoading) {
    return (
      <div className="rounded-xl bg-white shadow-md border border-gaming-100 h-[500px] flex items-center justify-center">
        {renderPlaceholder()}
      </div>
    );
  }

  // When we have valid filters and game selected
  return (
    <div className="game-container">
      <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gaming-100">
        <div className="bg-gaming-800 text-white py-3 px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="h-3 w-3 bg-red-500 rounded-full"></span>
            <span className="h-3 w-3 bg-yellow-500 rounded-full"></span>
            <span className="h-3 w-3 bg-green-500 rounded-full"></span>
          </div>
          <div className="font-medium">{filters.game} - {filters.mode}</div>
          <div className="text-sm opacity-70">{filters.currency} | {filters.player}</div>
        </div>
        
        <div className="relative h-[500px] bg-gaming-50">
          {/* In a real application, this would be an iframe with the actual game */}
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <div className="relative w-full h-full flex items-center justify-center bg-gaming-100/50">
              <div className="text-center px-4">
                <h2 className="text-2xl font-bold text-gaming-800 mb-2">{filters.game}</h2>
                <p className="text-gaming-600 mb-6">
                  {filters.mode} mode | {filters.currency} | {filters.player}
                </p>
                
                {/* Game UI simulation */}
                <div className="mx-auto w-full max-w-md bg-white rounded-lg shadow-gaming p-6 border border-gaming-200">
                  <div className="h-40 bg-gaming-800 rounded-md mb-4 flex items-center justify-center">
                    <div className="animate-pulse-slow">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-between mb-2">
                    <div className="h-6 w-24 bg-gaming-100 rounded-md"></div>
                    <div className="h-6 w-16 bg-gaming-100 rounded-md"></div>
                  </div>
                  <div className="h-10 bg-gaming-500 text-white rounded-md flex items-center justify-center font-medium">
                    Play Now
                  </div>
                  {filters.devMode && (
                    <div className="mt-4 bg-yellow-50 border border-yellow-200 text-yellow-800 px-3 py-2 rounded-md text-sm">
                      Developer Mode Active
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDisplay;
