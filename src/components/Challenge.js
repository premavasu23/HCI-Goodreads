import React, { useEffect, useState } from 'react';
import '../styles/Challenge.css'
import ProgressBar from './Progress';

const Challenge = (props) => {
  const initComplete = props.bookList.filter(book => book.isAlreadyRead).length;

  const [goal, setGoal] = useState(20);
  const [progress, setProgress] = useState(initComplete);

  const handleSetGoal = (newGoal) => {
    setGoal(newGoal);
  };

  const handleAddProgress = () => {
    setProgress(progress + 1);
  };


  useEffect(() => {
    console.log("Re-rendering Challenge")
    const complete = props.bookList.filter(book => book.isAlreadyRead).length;

    setProgress(complete)
  }, [props.bookList]);

  return (
    <div className="challenge">
        <div>
            <h3>Reading Challenge</h3>
            <p>  Progress: {progress} / {goal} Books</p>
            <ProgressBar goal={goal} progress={progress} />
            <div>  
                <text>Adjust your reading goal: </text>
                <button className='goal-button' onClick={() => handleSetGoal(goal-1)}>-</button> 
                <button className='goal-button' onClick={() => handleSetGoal(goal+1)}>+</button>
            </div>
        </div>
    </div>
  );
}

export default Challenge;