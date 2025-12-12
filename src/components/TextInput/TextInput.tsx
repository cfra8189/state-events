import React, { useState } from 'react';
import type { TextInputProps } from '../../types';
import './TextInput.css';
 
export const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = 'Start typing...',
  initialValue = ''
}) => {
  const [text, setText] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    onTextChange(newText);
  };

  return (
    <div className="text-input-container">
      <textarea
        className="text-input-textarea"
        placeholder="Start typing your content here..."
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};