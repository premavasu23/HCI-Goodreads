import React, { useState } from 'react';
import '../styles/Challenge.css'
import BookList from '../data/BookList';
import ProgressBar from './Progress';

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