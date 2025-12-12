import React, { useState } from 'react';
import type { CharacterCounterProps, TextStats } from '../../types';
import { TextInput } from '../TextInput/TextInput';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 25,
  maxWords = 100,
  targetReadingTime = 1
}) => {
  const [text, setText] = useState('');

  const characterCount = text.length;
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const readingTime = (wordCount / 183) * 60; // 183 words per minute, converted to seconds

  const stats: TextStats = {
    characterCount,
    wordCount,
    readingTime
  };

  return (
    <div className="p-8">
      <div className="space-y-6">
        <TextInput onTextChange={setText} />
        <StatsDisplay stats={stats} />
      </div>
    </div>
  );
}