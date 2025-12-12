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

  let wordError = '';
  if (wordCount < minWords) {
    wordError = `You need at least ${minWords} words.`;
  } else if (wordCount > maxWords) {
    wordError = `You have exceeded the max of ${maxWords} words.`;
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem', padding: '1rem'}}>
      <div style={{flex: '0 1 auto', maxHeight: '60%'}}>
        <TextInput onTextChange={setText} />
      </div>
      <div style={{flexShrink: 0}}>
        <StatsDisplay stats={stats} wordError={wordError} />
      </div>
    </div>
  );
}