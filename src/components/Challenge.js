import React, { useState } from 'react';
import '../styles/Challenge.css'
// import BookSelector from './BookSelector';
import BookList from '../data/BookList';
import ProgressBar from './Progress';
// import BookList from './BookList'; 
// Import your book data

const Challenge = () => {
  const [goal, setGoal] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleSetGoal = (newGoal) => {
    setGoal(newGoal);
  };

  const handleAddProgress = () => {
    setProgress(progress + 1);
  };

  return (
    <div className="challenge">
        <div>
            <h3>Reading Challenge</h3>
            <ProgressBar goal={goal} progress={progress} />
            <div>
                <input
                    type="number"
                    placeholder="Set Your Annual Reading Goal"
                    onChange={(e) => handleSetGoal(e.target.value)}
                />
                <button onClick={handleAddProgress}>Add One Book</button>  
                {/* need to make this add book  */}
            </div>
        </div>
    </div>
  );
}

export default Challenge;

// const Challenge = (props) => {
  
//     return(
//         <div className='challenge'>
//             <h3>Reading Challenge</h3>
            
//         </div>
//     );
// };
// export default Challenge;


// function Challenge() {
//     const [goal, setGoal] = useState(0);
//     const [progress, setProgress] = useState(0);
//     const [selectedBook, setSelectedBook] = useState('');

//     const handleSetGoal = (newGoal) => {
//         setGoal(newGoal);
//     };

//     const handleAddProgress = (book) => {
//         setProgress(progress + book.pageLength);
//         setSelectedBook(book.title);
//     };

//   return (
//     <div className="App">
//       <h1>Reading Challenge</h1>
//       <div>
//         <div className="progress-bar">
//           <div
//             className="progress"
//             style={{ width: `${(progress / goal) * 100 || 0}%` }}
//           />
//         </div>
//         <p>
//           Progress: {progress} pages out of {goal} pages (
//           {goal === 0 ? 0 : ((progress / goal) * 100).toFixed(2)}%)
//         </p>
//         <input
//           type="number"
//           placeholder="Set Your Annual Reading Goal"
//           onChange={(e) => handleSetGoal(e.target.value)}
//         />
//       </div>
//       <BookSelector bookList={BookList} addProgress={handleAddProgress} />
//       <div>
//         {selectedBook && <p>Selected Book: {selectedBook}</p>}
//       </div>
//     </div>
//   );
// }

// export default Challenge;
