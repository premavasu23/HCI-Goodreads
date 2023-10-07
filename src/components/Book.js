import React from "react";
import '../styles/Book.css'

const Book = (props) => {

    
    return (
        <div>
            <div className="indiv-book-container">
                <img className="book-cover" src={props.book.cover}></img>
                <div className="title">{props.book.title}</div>
                <div className="author">{"by "+props.book.author}</div>
                <div className="below-book-content">
                    progress / stars
                </div>
            </div>

        </div>
        
    );
};

export default Book;