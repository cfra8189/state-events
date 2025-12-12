import React from 'react';
import type { StatsDisplayProps } from '../../types';
import './StatsDisplay.css';

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true
}) => {
  const totalSeconds = Math.round(stats.readingTime);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const readingTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="stats-container">
      <div className="stats-grid">
        <div className="stat-item">
          <p className="stat-label">Characters</p>
          <p className="stat-value">{stats.characterCount}</p>
        </div>
        
        <div className="stat-item">
          <p className="stat-label">Words</p>
          <p className="stat-value stat-value-green">{stats.wordCount}</p>
          <p className="stat-minmax">Min: 25 | Max: 100</p>
        </div>
        
        {showReadingTime && (
          <div className="stat-item">
            <p className="stat-label">Reading Time</p>
            <p className="stat-value">{readingTime}</p>
          </div>
        )}
      </div>
    </div>
  );
}