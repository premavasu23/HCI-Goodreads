import React from 'react';
import '../styles/Challenge.css'

const Progress = (props) =>{
  const percentage = (props.progress / props.goal) * 100 || 0;

  return (
    <div>
      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className='progress-percent'>
        {props.goal === 0 ? 0 : ((props.progress / props.goal) * 100).toFixed(2)}%
      </p>
    </div>    
  );
}

export default Progress;
