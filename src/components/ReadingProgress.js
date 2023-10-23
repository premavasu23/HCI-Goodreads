import React, { useEffect, useState } from 'react';
import Progress from './Progress';
import BookData from '../data/BookList.json'

const ReadingProgress = (props) => {
    return (
        <div>
            {/* {BookData.filter((book) => book.isCurrentlyReading === true).map((book,index) => (
                
            )} */}
            {BookData.filter((book) => book.isCurrentlyReading === true)
                .map((book, index) => (
                    <div key={index}>
                        <h3>{book.title}</h3>
                        <Progress
                            goal={book.pageLength}
                            progress={book.progressPages}
                        />
                    </div>
                ))}
        </div>
    );
}
export default ReadingProgress;