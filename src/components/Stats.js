import React from 'react';
import '../styles/Stats.css'

const Stats = (props) => {


    return (
        <div className="stats">
            <div className='genre'>        
                <h4>Genre Breakdown</h4>
                <p>Non-Fiction:</p>
                <p>Fiction:</p>
                <p>Adventure:</p>
                <p>Science Fiction:</p>      
                <p>Mystery:</p>      
                <p>Thiller:</p>      
            </div>
            <div className='book-length'>        
                <h4>Avg Book Length</h4>
                <p>0 - 100 pages:</p>
                <p>100 - 200 pages:</p>
                <p>200 - 300 pages:</p>
            </div>
        </div>
    );
};
export default Stats;