# Character Counter

## Description

A real-time text analysis tool that helps writers track their word count, character count, and estimated reading time as they type. Built with React and TypeScript, this application provides instant feedback on writing metrics with a clean, responsive interface. Perfect for students, bloggers, and content creators who need to meet specific word count requirements.

## Table of Contents

- [Technologies Used](#technologiesused)
- [Features](#features)
- [Future Features](#nextsteps)
- [Deployed App](#deployment)
- [About the Author](#author)

## <a name="technologiesused"></a>Technologies Used

- **React** - Component-based UI framework
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **CSS3** - Custom styling and layouts

## <a name="features"></a> Features

**Real-time Character Count** - Track every character as you type  
**Word Count Tracking** - Automatically count words with intelligent spacing detection  
**Reading Time Calculator** - Estimate reading time based on average reading speed (183 WPM)  
**Word Count Validation** - Visual feedback for minimum (25) and maximum (100) word requirements  
**Error Messages** - Clear notifications when word limits are exceeded or not met  
**Responsive Text Area** - Large, comfortable typing space that adapts to your content  
**Clean Statistics Display** - Easy-to-read metrics formatted for quick reference  
**Instant Updates** - All statistics update in real-time without lag

**In Progress:**

- [ ] Enhanced text formatting options

## <a name="nextsteps"></a>Future Features

- **Save & Export** - Save drafts and export to various formats (TXT, PDF, DOCX)
- **Multiple Documents** - Manage and switch between different writing projects
- **Custom Limits** - Set your own min/max word count requirements
- **Readability Scores** - Calculate Flesch-Kincaid and other readability metrics
- **Sentence Count** - Track number of sentences and average sentence length
- **Paragraph Analysis** - Count paragraphs and analyze structure
- **Dark Mode** - Eye-friendly theme for nighttime writing
- **Writing Goals** - Set daily word count goals and track progress
- **Autosave** - Automatically save work to local storage
- **Grammar Suggestions** - Basic grammar and spelling checks
- **Statistics History** - View writing statistics over time

## <a name="deployment"></a>Deployed Link

**Live Application:**  
[Github Pages](https://cfra8189.github.io/state-events/)

**Repository:**  
[Github Repository](https://github.com/cfra8189/state-events.git)

## <a name="author"></a>About The Author

**Clarence Franklin**

- **[GitHub](https://github.com/cfra8189)** - Developer

## Development Process

This project was built as part of React Lesson 5 focusing on:

- React state management with useState hook
- Event handling in React components
- Component composition and props
- TypeScript interfaces and type safety
- Real-time UI updates

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/cfra8189/state-events.git
   ```

2. Navigate to project directory:

   ```bash
   cd character-counter
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start development server:

   ```bash
   npm run dev
   ```

5. View in browser at `http://localhost:5173` (or your assigned port)

## Reflection

### How did you handle state updates when the text changed?
I used React's useState hook in both the TextInput component and CharacterCounter component. In TextInput, I maintained local state for the textarea value and called the onTextChange prop callback whenever the text changed through the handleChange event handler. The parent CharacterCounter component stored the text in its own state via setText, which automatically triggered re-renders and recalculated all statistics whenever the text changed.

### What considerations did you make when calculating reading time?
I used a standard reading speed of 183 words per minute for adults. The calculation divides the word count by 183 and multiplies by 60 to convert from minutes to seconds. In the StatsDisplay component, I rounded the total seconds using Math.round() and formatted the time as MM:SS format with padStart to ensure seconds always display as two digits. The reading time displays as 0:00 when there's no text.

### How did you ensure the UI remained responsive during rapid text input?
React's built-in state management and virtual DOM handled most of the responsiveness. The onChange event handler directly updates state synchronously, and React efficiently batches updates and only re-renders what changed. The statistics calculations (character count, word count, reading time) are simple operations that run quickly during each render without causing noticeable lag. Since the calculations happen inline during render rather than in separate effects, there's no delay between typing and seeing updated stats.

### What challenges did you face when implementing the statistics calculations?
The main challenge was handling edge cases for word counting. I needed to check if the text was empty (text.trim() === '') to return 0 words instead of 1, and used the split method to divide the text into words based on spaces. Another consideration was converting reading time from words per minute to seconds and then formatting it properly as MM:SS. I also had to implement word validation logic to show error messages when the word count fell below the minimum or exceeded the maximum limits.

## Works Cited:

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDN Web Docs - React Events](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
