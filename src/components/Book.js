import React from "react";
import '../styles/Book.css'

const Book = (props) => {

    
    return (
        <div>
            <div className="indiv-book-container">
                <img className="book-cover" src={props.cover}>

                </img>
                <div className="title">[Book Title Here]</div>
                <div className="author">by [Book Author Here]</div>
            </div>
        </div>
        
    );
};

export default Book;