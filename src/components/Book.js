import React from "react";
import '../styles/Book.css'
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';

const Book = (props) => {
    
    return (
        <div>
            <Paper className="indiv-book-container" elevation={3} 
            sx={{
                backgroundColor: "#F9F7F4"
            }}>
                <img className="book-cover" src={props.book.cover}></img>
                <div className="title">{props.book.title}</div>
                <div className="author">{"by "+props.book.author}</div>
                <div className="below-book-content">
                {(props.shelfType === "isAlreadyRead") && (
                      <Rating name="read-only" defaultValue={props.book.personalRating} precision={0.5} size="small" readOnly sx={{
                        backgroundColor: "#F9F7F4"
                    }}/>
                )
                    }
                {(props.shelfType === "isTBR") && (
                      <Rating name="read-only" defaultValue={props.book.generalRating} precision={0.5} size="small" readOnly sx={{
                        backgroundColor: "#F9F7F4"
                    }}/>
                )
                    }
                </div>
            </Paper>

        </div>
        
    );
};

export default Book;