import React, { useState, useEffect } from 'react';
import {Box, Typography, Button, Modal} from '@mui/material';
import Book from '../components/Book'
import AddBookModal from '../components/AddBookModal'
import '../styles/Shelf.css'
import BookList from "../data/BookList";

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

const Shelf = (props) => {

    const [showAddBooks, setShowAddBooks] = useState(false);
    const [openAddBooksModal, setOpenAddBooksModal] = useState(false);

    const handleClose = () => setOpenAddBooksModal(false);


    const handleAddPress = () => {
        setOpenAddBooksModal(true);

    }
    
    return (
    <div className="shelf">
        <h3 className="shelf-title">{props.shelfTitle}</h3>
        <div className="shelf-content">
            <div className="books-container">

                {
                    props.content.map((b) => (
                        <Book book={b}></Book>
                    ))
                }

            </div>
            <Button className="add-button" variant="contained" sx={{"color": "#F9F7F4", "backgroundColor": "#75420e"}} onClick={handleAddPress}>+</Button>
            <Modal 
                open={openAddBooksModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{overflow:"auto"}}
            >
            <AddBookModal shelfType={props.type} shelfTitle={props.shelfTitle} bookList={props.bookList} setBookList={props.setBookList}/>
        </Modal>
        </div>
    </div>
    );
};

export default Shelf;