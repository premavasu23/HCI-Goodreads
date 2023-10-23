import React, { useEffect, useState } from 'react';
import Progress from './Progress';
import BookList from '../data/BookList.json'

const ReadingProgress = (props) => {
    const [newProgress, setNewProgress] = useState(props.book.progressPages);

  const handleProgressChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setNewProgress(value);
    }
  };

  const increaseProgress = () => {
    setNewProgress(newProgress + 1);
  };

  const decreaseProgress = () => {
    if (newProgress > 0) {
      setNewProgress(newProgress - 1);
    }
  };

//   const updateProgress = () => {
//     // Call a function to update the progress in your main state
//     // You might want to pass this progress data to your App component or manage it using state management libraries (e.g., Redux).
//   };

    return (
        // <div>
        //     {/* {BookData.filter((book) => book.isCurrentlyReading === true).map((book,index) => (
                
        //     )} */}
        //     {BookList.filter((book) => book.isCurrentlyReading === true)
        //         .map((book, index) => (
        //             <div key={index}>
        //                 <h3>{book.title}</h3>
        //                 <Progress
        //                     goal={book.pageLength}
        //                     progress={book.progressPages}
        //                 />
        //             </div>
        //     ))}

        // </div>
        <div>
            {/* <h3>{props.book.title}</h3> */}
            <Progress goal={props.book.pageLength} progress={props.book.progressPages} />
            <input
        type="number"
        value={newProgress}
        onChange={handleProgressChange}
      />
      <button onClick={increaseProgress}>Increase</button>
      <button onClick={decreaseProgress}>Decrease</button>
      {/* <button onClick={updateProgress}>Update Progress</button> */}
        </div>
    );
}
export default ReadingProgress;

// import React, { useState } from 'react';
// import Progress from './Progress';

// const ReadingProgress = ({ book }) => {

//   const [newProgress, setNewProgress] = useState(book.progressPages);
//   const [isEditing, setIsEditing] = useState(false);

//   const handleEditProgress = () => {
//     setIsEditing(true);
//   };

//   const handleSaveProgress = () => {
//     // Update the reading progress for the book in your state or data
//     // For example, if your book is stored in bookList state:
//     const updatedBookList = book.bookList.map((item) => {
//       if (item.id === book.id) {
//         return { ...item, progressPages: newProgress };
//       }
//       return item;
//     });

//     // Update the state with the new progress
//     book.setBookList(updatedBookList);

//     // Exit edit mode
//     // setIsEditing(false);
//   };

//   return (
//     <div>
//       <h3>{book.title}</h3>
//       <p>  {book.bookList} </p>
//       {isEditing ? (
//         <div>
//           <input
//             type="number"
//             value={newProgress}
//             onChange={(e) => setNewProgress(e.target.value)}
//           />
//           <button onClick={handleSaveProgress}>Save</button>
//         </div>
//       ) : (
//         <div>
//           <Progress goal={book.pageLength} progress={newProgress} />
//           <button onClick={handleEditProgress}>Edit Progress</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReadingProgress;
