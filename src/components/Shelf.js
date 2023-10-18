import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Book from '../components/Book'
import '../styles/Shelf.css'
import BookList from "../data/BookList";

const Shelf = (props) => {

    const [shelfBookList, setShelfBookList] = useState([]);

    useEffect(() => {
        if(props.type === "isCurrentlyReading") {
            setShelfBookList(BookList.filter((b) => b.isCurrentlyReading === true))
        }
        else if(props.type === "isTBR") {
            setShelfBookList(BookList.filter((b) => b.isTBR === true))
        }
        else if(props.type === "isAlreadyRead") {
            setShelfBookList(BookList.filter((b) => b.isAlreadyRead === true))
        }
      }, [props]);

    
    return (
    <div className="shelf">
        <h3 className="shelf-title">{props.shelfTitle} </h3>
        <p className="shelf-count">{shelfBookList.length} Books</p>
        <div className="shelf-content">
            <div className="books-container">
                {
                    shelfBookList.map((b) => (
                        <Book book={b}></Book>
                    ))
                }
            </div>
            <Button className="add-button" variant="contained" sx={{"color": "#F9F7F4", "backgroundColor": "#75420e"}}>+</Button>
            
        </div>
    </div>
    );
};

export default Shelf;