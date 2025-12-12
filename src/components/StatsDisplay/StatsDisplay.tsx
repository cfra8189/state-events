import React from 'react';
import type { StatsDisplayProps } from '../../types';

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true
}) => {
  const minutes = Math.floor(stats.readingTime);
  const seconds = Math.round((stats.readingTime - minutes) * 60);
  const readingTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-around gap-8">
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">Characters</p>
          <p className="text-3xl font-semibold text-gray-700">{stats.characterCount}</p>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">Words</p>
          <p className="text-3xl font-semibold text-green-600">{stats.wordCount}</p>
        </div>
        
        {showReadingTime && (
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Reading Time</p>
            <p className="text-3xl font-semibold text-gray-700">{readingTime}</p>
          </div>
        )}
      </div>
    </div>
  );
}