import React, { useState } from 'react';
import '../styles/Challenge.css'
import BookList from '../data/BookList';
// import BookSelector from './BookSelector'

// function Challenge() {
//   const [goal, setGoal] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [selectedBook, setSelectedBook] = useState('');

//   const handleGoalChange = (e) => {
//     const newGoal = parseInt(e.target.value, 10);
//     if (!isNaN(newGoal)) {
//       setGoal(newGoal);
//     }
//   };

//   const updateProgress = (e) => {
//     const newProgress = parseInt(e.target.value, 10);
//     if (!isNaN(newProgress) && newProgress >= 0 && newProgress <= goal) {
//       setProgress(newProgress);
//     }
//   };

//   const handleAddBook = (bookTitle) => {
//     const selectedBookData = bookList.find((book) => book.title === bookTitle);
//     if (selectedBookData) {
//       setSelectedBook(selectedBookData);
//     }
//   };

//   return (
//     <div>
//       <label>
//         Set Your Annual Reading Goal:
//         <input
//           type="number"
//           value={goal}
//           onChange={handleGoalChange}
//           min="0"
//         />
//       </label>
//       <label>
//         Update Your Reading Progress:
//         <input
//           type="number"
//           value={progress}
//           onChange={updateProgress}
//           min="0"
//           max={goal}
//         />
//       </label>
//       <div className="progress-bar">
//         <div
//           className="progress"
//           style={{ width: `${(progress / goal) * 100}%` }}
//         />
//       </div>
//       <BookSelector bookList={bookList} onAddBook={handleAddBook} />
//       {selectedBook && (
//         <div>
//           Selected Book: {selectedBook.title}, Page Count: {selectedBook.pageCount}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Challenge;



function Challenge() {
    const [goal, setGoal] = useState(0);
    const [progress, setProgress] = useState(0);
  
    const handleGoalChange = (e) => {
      const newGoal = parseInt(e.target.value, 10);
      if (!isNaN(newGoal)) {
        setGoal(newGoal);
      }
    };
  
    const updateProgress = (e) => {
      const newProgress = parseInt(e.target.value, 10);
      if (!isNaN(newProgress) && newProgress >= 0 && newProgress <= goal) {
        setProgress(newProgress);
      }
    };
  
    return (
      <div className='challenge'>
        
        <input
            type="number"
            value={progress}
            onChange={updateProgress}
            min="0"
            max={goal}
        />
        <input
            type="number"
            value={goal}
            onChange={handleGoalChange}
            min="0"
        />  
      
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${(progress / goal) * 100}%` }}
          />
        </div>
      </div>
    );
  }
  
  export default Challenge;

