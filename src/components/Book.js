import React, { useState, useEffect } from 'react';
import '../styles/Book.css'
import Paper from '@mui/material/Paper';
import ProgressPopUp from './ProgressPopUp'

const Book = (props) => {


    const [isPopupVisible, setPopupVisible] = useState(false);
    const [progressPercent, setProgressPercent] = useState(10);
    const [progressPages, setProgressPages] = useState(10);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
      };

    const updateProgress = ((isPage, progress) => {

        if (isPage === true) {
            var percent = progress / props.book.pageTotal;
            setProgressPages(progress)
            setProgressPercent(percent);
        }
        else {
            var pages = (progress / 100 ) * props.book.pageTotal;
            setProgressPercent(progress)
            setProgressPages(pages)
        }
    })

    // useEffect(() => {
        
    // }, [progress]);

    //TODO delete these once update popup is made
    const isPage = true;
    const readPage = 25;

    
    return (
        <div>
            <Paper className="indiv-book-container" elevation={3} 
            sx={{
                "background-color": "#F9F7F4"
            }}>
                <img className="book-cover" src={props.book.cover}></img>
                <div className="title">{props.book.title}</div>
                <div className="author">{"by "+props.book.author}</div>
                <div className="below-book-content">
                    <div className="progress-bar-comp" onClick={togglePopup}>{progressPercent*100 + '%'}</div>
                    {isPopupVisible && <ProgressPopUp book={props.book} />}


                    <div onClick={() => updateProgress(isPage, readPage)}>{progressPercent}</div>
                    {/* TODO the lines below provide a baseline of how to pass info from the update popup (child) to this component */}
                    {/* <div updateProgressData={updateProgress}>
                        this would be a seperate child component<div onClick={updateProgressData(isPage, readPage)}></div>
                    </div> */}

                </div>
            </Paper>

        </div>
        
    );
};

export default Book;