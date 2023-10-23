import React from 'react';
import '../styles/Challenge.css'

function Progress({ goal, progress }) {
  const percentage = (progress / goal) * 100 || 0;

  return (
    <div>
      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className='progress-percent'>
        {goal === 0 ? 0 : ((progress / goal) * 100).toFixed(2)}%
      </p>
    </div>    
  );
}

export default Progress;
