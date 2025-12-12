import React, { useState } from 'react';
import type { TextInputProps } from '../../types';
 
export const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = 'Start typing...',
  initialValue = ''
}) => {
  // State to manage the text input value
  const [text, setText] = useState(initialValue);

  // Handler function that updates both local state and notifies parent
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);           // Update local state
    onTextChange(newText);      // Notify parent component
  };

  return (
    <div className="w-full">
      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
        value={text}              // Controlled by state
        onChange={handleChange}   // Update state on change
        rows={6}
      />
    </div>
  );
};