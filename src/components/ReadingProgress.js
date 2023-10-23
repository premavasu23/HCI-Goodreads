import React, { useEffect, useState } from 'react';
import Progress from './Progress';

const ReadingProgress = ({ book }) => {

  const [newProgress, setNewProgress] = useState(book.progressPages);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditProgress = () => {
    setIsEditing(true);
  };

  const handleSaveProgress = () => {

    const updatedBookList = book.bookList.map((item) => {
        if (item.id === book.id) {
          return { ...item, progressPages: newProgress };
        }
        return item;
      });
      book.setBookList(updatedBookList);
      setIsEditing(false);
  };

  return (
    <div>
      <h3>{book.title}</h3>
      <p>  {book.bookList} </p>
      {isEditing ? (
        <div>
          <input
            type="number"
            value={newProgress}
            onChange={(e) => setNewProgress(e.target.value)}
          />
          <button onClick={handleSaveProgress}>Save</button>
        </div>
      ) : (
        <div>
          <Progress goal={book.pageLength} progress={newProgress} />
          <button onClick={handleEditProgress}>Edit Progress</button>

        </div>
      )}
    </div>
  );
};

export default ReadingProgress;
