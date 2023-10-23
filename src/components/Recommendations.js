import React, { useState, useEffect } from 'react';
import {Box, Typography, Button, Modal} from '@mui/material';
import Book from '../components/Book'
import AddBookModal from '../components/AddBookModal'
import '../styles/Recommendations.css'  

const Recommendations = (props) => {

    const [shelfBookList, setShelfBookList] = useState([]);
    const [showAddBooks, setShowAddBooks] = useState(false);
    const [openAddBooksModal, setOpenAddBooksModal] = useState(false);

    const handleClose = () => setOpenAddBooksModal(false);


    const handleAddPress = () => {
        setOpenAddBooksModal(true);

    }


    useEffect(() => {
        if(props.type === "isCurrentlyReading") {
            setShelfBookList(props.bookList.filter((b) => b.isCurrentlyReading === true))
        }
        else if(props.type === "isTBR") {
            setShelfBookList(props.bookList.filter((b) => b.isTBR === true))
        }
        else if(props.type === "isAlreadyRead") {
            setShelfBookList(props.bookList.filter((b) => b.isAlreadyRead === true))
        }
        else if(props.type === "isRecommended") {
            setShelfBookList(props.bookList.filter((b) => b.isAlreadyRead === true))
        }
      }, [props]);

    
    return (
    <div className="recommendations-shelf">
        <h3 className="shelf-title">{props.shelfTitle} </h3>
        <p className="shelf-count">{shelfBookList.length} Books</p>
        <div className="shelf-content">
            <div className="books-container">
                {
                    shelfBookList.map((b) => (
                        <Book book={b} shelfType={props.type} bookList={props.bookList} setBookList={props.setBookList}></Book>
                    ))
                }
            </div>
        </div>
    </div>
    );
};

export default Recommendations;