import React from "react";
import '../styles/Book.css'
import Paper from '@mui/material/Paper';

const Book = (props) => {

    
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
                    progress / stars
                </div>
            </Paper>

        </div>
        
    );
};

export default Book;