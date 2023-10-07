import React from "react";
import Book from '../components/Book'
import '../styles/Shelf.css'
import BookList from "../data/BookList";

const Shelf = (props) => {
    
    return (
    <div className="shelf">
        <h3 className="shelf-title">{props.shelfTitle}</h3>
        <div className="shelf-content">
            <div className="books-container">
                <Book book={BookList[0]}></Book>
                <Book book={BookList[1]}></Book>
                <Book book={BookList[2]}></Book>
                <Book book={BookList[3]}></Book>
                <Book book={BookList[4]}></Book>
                <Book book={BookList[5]}></Book>
                <Book book={BookList[6]}></Book>
                <Book book={BookList[7]}></Book>
                <Book book={BookList[0]}></Book>
                <Book book={BookList[1]}></Book>

            </div>

            <button className="add-button">+</button>
        </div>
    </div>
    );
};

export default Shelf;