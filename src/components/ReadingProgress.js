import React, { useEffect, useState } from 'react';
import Progress from './Progress';

const ReadingProgress = (props) => {

  const [progress, setProgress] = useState(props.book.progressPages);
  // const [isEditing, setIsEditing] = useState(false);

  // const handleEditProgress = () => {
  //   setIsEditing(true);
  // };

  const handleSaveProgress = () => {

  //   const updatedBookList = book.bookList.map((item) => {
  //       if (item.id === book.id) {
  //         return { ...item, progressPages: newProgress };
  //       }
  //       return item;
  //     });
  //     book.setBookList(updatedBookList);
  //     setIsEditing(false);
  // };

  return (
    <div>
      <h3>{props.book.title}</h3>
      <p>  {props.book.bookList} </p>

        <div>
          <input
            type="number"
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
          />
          <button onClick={handleSaveProgress}>Save</button>
        </div>
        <div>
          <Progress goal={props.book.pageLength} progress={props.book.progressPages} />

          {/* <button onClick={handleEditProgress}>Edit Progress</button> */}

        </div>
      
    </div>
  );
};

}

export default ReadingProgress;
